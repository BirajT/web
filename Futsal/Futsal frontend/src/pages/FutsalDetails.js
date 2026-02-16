import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { futsalAPI, bookingAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './FutsalDetails.css';

const FutsalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const [futsal, setFutsal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    date: '',
    start_time: '',
    end_time: '',
  });
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    fetchFutsalDetails();
  }, [id]);

  const fetchFutsalDetails = async () => {
    try {
      setLoading(true);
      const response = await futsalAPI.getById(id);
      setFutsal(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch futsal details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPrice = () => {
    if (!bookingData.start_time || !bookingData.end_time || !futsal) {
      return 0;
    }
    
    const start = new Date(`2000-01-01 ${bookingData.start_time}`);
    const end = new Date(`2000-01-01 ${bookingData.end_time}`);
    const hours = (end - start) / (1000 * 60 * 60);
    
    return hours > 0 ? hours * futsal.price_per_hour : 0;
  };

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setBookingError('');
    setBookingSuccess('');
    setBookingLoading(true);

    const totalPrice = calculateTotalPrice();
    
    if (totalPrice <= 0) {
      setBookingError('Invalid time selection');
      setBookingLoading(false);
      return;
    }

    try {
      const response = await bookingAPI.create({
        futsal: id,
        date: bookingData.date,
        start_time: bookingData.start_time,
        end_time: bookingData.end_time,
        total_price: totalPrice,
      });

      setBookingSuccess('Booking created successfully!');
      setBookingData({ date: '', start_time: '', end_time: '' });
      
      setTimeout(() => {
        navigate('/my-bookings');
      }, 2000);
    } catch (err) {
      setBookingError(err.response?.data?.message || 'Booking failed');
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading futsal details...</div>;
  }

  if (error || !futsal) {
    return (
      <div className="container">
        <div className="error-message">{error || 'Futsal not found'}</div>
      </div>
    );
  }

  return (
    <div className="futsal-details-page">
      <div className="container">
        <div className="futsal-details-card card">
          <div className="futsal-details-grid">
            <div className="futsal-image-large">
              {futsal.futsal_image?.path ? (
                <img src={futsal.futsal_image.path} alt={futsal.name} />
              ) : (
                <div className="no-image-large">⚽ No Image</div>
              )}
            </div>

            <div className="futsal-details-info">
              <h1>{futsal.name}</h1>
              
              <div className="detail-item">
                <strong>📍 Address:</strong> {futsal.address}
              </div>
              
              <div className="detail-item">
                <strong>📞 Contact:</strong> {futsal.contact}
              </div>
              
              <div className="detail-item">
                <strong>🕐 Opening Hours:</strong> {futsal.opening_time} - {futsal.closing_time}
              </div>
              
              <div className="detail-item price-highlight">
                <strong>💰 Price:</strong> Rs. {futsal.price_per_hour}/hour
              </div>

              <button
                onClick={() => setShowBookingForm(!showBookingForm)}
                className="btn btn-primary btn-large"
              >
                {showBookingForm ? 'Hide Booking Form' : 'Book Now'}
              </button>
            </div>
          </div>

          {showBookingForm && (
            <div className="booking-form-section">
              <h2>Book This Futsal</h2>
              
              {bookingError && <div className="error-message">{bookingError}</div>}
              {bookingSuccess && <div className="success-message">{bookingSuccess}</div>}
              
              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleBookingChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Start Time</label>
                    <input
                      type="time"
                      name="start_time"
                      value={bookingData.start_time}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>End Time</label>
                    <input
                      type="time"
                      name="end_time"
                      value={bookingData.end_time}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>
                </div>

                {calculateTotalPrice() > 0 && (
                  <div className="total-price">
                    <strong>Total Price:</strong> Rs. {calculateTotalPrice()}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={bookingLoading}
                >
                  {bookingLoading ? 'Booking...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FutsalDetails;
