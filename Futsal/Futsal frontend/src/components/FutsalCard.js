import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FutsalCard.css';

const FutsalCard = ({ futsal }) => {
  const navigate = useNavigate();

  return (
    <div className="futsal-card" onClick={() => navigate(`/futsal/${futsal._id}`)}>
      <div className="futsal-image">
        {futsal.futsal_image?.path ? (
          <img src={futsal.futsal_image.path} alt={futsal.name} />
        ) : (
          <div className="no-image">⚽ No Image</div>
        )}
      </div>
      <div className="futsal-info">
        <h3>{futsal.name}</h3>
        <p className="futsal-address">📍 {futsal.address}</p>
        <p className="futsal-contact">📞 {futsal.contact}</p>
        <p className="futsal-time">
          🕐 {futsal.opening_time} - {futsal.closing_time}
        </p>
        <p className="futsal-price">💰 Rs. {futsal.price_per_hour}/hour</p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default FutsalCard;
