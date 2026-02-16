import React, { useState, useEffect } from 'react';
import { futsalAPI } from '../services/api';
import FutsalCard from '../components/FutsalCard';
import './Home.css';

const Home = () => {
  const [futsals, setFutsals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetchFutsals();
  }, [page, searchQuery, minPrice, maxPrice]);

  const fetchFutsals = async () => {
    try {
      setLoading(true);
      const params = {
        page,
        limit: 9,
        ...(searchQuery && { query: searchQuery }),
        ...(minPrice && { minPrice }),
        ...(maxPrice && { maxPrice }),
      };
      
      const response = await futsalAPI.getAll(params);
      setFutsals(response.data.data);
      setPagination(response.data.pagination);
      setError('');
    } catch (err) {
      setError('Failed to fetch futsals');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchFutsals();
  };

  const handleReset = () => {
    setSearchQuery('');
    setMinPrice('');
    setMaxPrice('');
    setPage(1);
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1>Find Your Perfect Futsal Court</h1>
          <p>Book the best futsal courts in your area</p>
        </div>

        <div className="search-section card">
          <form onSubmit={handleSearch}>
            <div className="search-filters">
              <input
                type="text"
                placeholder="Search by name or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="price-input"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="price-input"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
              <button type="button" onClick={handleReset} className="btn btn-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="loading">Loading futsals...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : futsals.length === 0 ? (
          <div className="no-results">
            <h3>No futsals found</h3>
            <p>Try adjusting your search filters</p>
          </div>
        ) : (
          <>
            <div className="futsals-grid grid grid-3">
              {futsals.map((futsal) => (
                <FutsalCard key={futsal._id} futsal={futsal} />
              ))}
            </div>

            {pagination && pagination.total_pages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={!pagination.has_prev_page}
                  className="btn btn-secondary"
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {pagination.current_page} of {pagination.total_pages}
                </span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={!pagination.has_next_page}
                  className="btn btn-secondary"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
