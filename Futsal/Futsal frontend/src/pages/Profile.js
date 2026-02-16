import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user, changePassword } = useAuth();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldpassword: '',
    newpassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (passwordData.newpassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordData.newpassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await changePassword(
      passwordData.oldpassword,
      passwordData.newpassword
    );

    if (result.success) {
      setSuccess('Password changed successfully!');
      setPasswordData({ oldpassword: '', newpassword: '', confirmPassword: '' });
      setShowPasswordForm(false);
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="profile-page">
      <div className="container">
        <h1>My Profile</h1>

        <div className="profile-card card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
            </div>
            <div className="profile-name">
              <h2>{user?.first_name} {user?.last_name}</h2>
              <p className="profile-role">{user?.role}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <strong>Email:</strong>
              <span>{user?.email}</span>
            </div>
            <div className="detail-row">
              <strong>Phone:</strong>
              <span>{user?.phone || 'Not provided'}</span>
            </div>
            <div className="detail-row">
              <strong>Gender:</strong>
              <span>{user?.gender}</span>
            </div>
            <div className="detail-row">
              <strong>Member Since:</strong>
              <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="btn btn-secondary"
          >
            {showPasswordForm ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {showPasswordForm && (
          <div className="password-form-card card">
            <h2>Change Password</h2>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <form onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="oldpassword"
                  value={passwordData.oldpassword}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Enter current password"
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newpassword"
                  value={passwordData.newpassword}
                  onChange={handlePasswordChange}
                  required
                  minLength="6"
                  placeholder="Enter new password"
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  minLength="6"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'Changing Password...' : 'Change Password'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
