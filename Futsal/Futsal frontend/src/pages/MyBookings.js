import React, { useState, useEffect } from 'react';
import { bookingAPI } from '../services/api';
import './MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await bookingAPI.getAll();
      setBookings(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch bookings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      await bookingAPI.delete(id);
      setBookings(bookings.filter(booking => booking._id !== id));
      alert('Booking cancelled successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to cancel booking');
    }
  };

  if (loading) {
    return <div className="loading">Loading bookings...</div>;
  }

  return (
    <div className="my-bookings-page">
      <div className="container">
        <h1>My Bookings</h1>

        {error && <div className="error-message">{error}</div>}

        {bookings.length === 0 ? (
          <div className="no-bookings card">
            <h3>No bookings yet</h3>
            <p>Start booking your favorite futsal courts!</p>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking._id} className="booking-card card">
                <div className="booking-header">
                  <h3>{booking.futsal?.name || 'Futsal Deleted'}</h3>
                  <span className={`status-badge ${booking.booking_status.toLowerCase()}`}>
                    {booking.booking_status}
                  </span>
                </div>

                <div className="booking-details">
                  <div className="booking-info">
                    <p><strong>📅 Date:</strong> {booking.date}</p>
                    <p><strong>🕐 Time:</strong> {booking.start_time} - {booking.end_time}</p>
                    <p><strong>💰 Total Price:</strong> Rs. {booking.total_price}</p>
                    <p><strong>💳 Payment:</strong> {booking.payment_status}</p>
                  </div>

                  {booking.futsal && (
                    <div className="futsal-info">
                      <p><strong>📍 Address:</strong> {booking.futsal.address}</p>
                      <p><strong>📞 Contact:</strong> {booking.futsal.contact}</p>
                    </div>
                  )}
                </div>

                <div className="booking-actions">
                  <button
                    onClick={() => handleCancelBooking(booking._id)}
                    className="btn btn-danger"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
