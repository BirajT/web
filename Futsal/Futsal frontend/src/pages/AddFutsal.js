import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { futsalAPI } from '../services/api';
import './AddFutsal.css';

const AddFutsal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    opening_time: '',
    closing_time: '',
    price_per_hour: '',
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!image) {
      setError('Please select an image');
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append('image', image);

    try {
      const response = await futsalAPI.create(formDataToSend);
      setSuccess('Futsal added successfully!');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add futsal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-futsal-page">
      <div className="container">
        <div className="add-futsal-card card">
          <h1>Add New Futsal Court</h1>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Futsal Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter futsal name"
              />
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter address"
              />
            </div>

            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="Enter contact number"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Opening Time *</label>
                <input
                  type="time"
                  name="opening_time"
                  value={formData.opening_time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Closing Time *</label>
                <input
                  type="time"
                  name="closing_time"
                  value={formData.closing_time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Price per Hour (Rs.) *</label>
              <input
                type="number"
                name="price_per_hour"
                value={formData.price_per_hour}
                onChange={handleChange}
                required
                min="0"
                placeholder="Enter price per hour"
              />
            </div>

            <div className="form-group">
              <label>Futsal Image *</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {image && (
                <div className="image-preview">
                  <img src={URL.createObjectURL(image)} alt="Preview" />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? 'Adding Futsal...' : 'Add Futsal'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFutsal;
