import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  changePassword: (passwords) => api.post('/auth/changePassword', passwords),
};

// Futsal APIs
export const futsalAPI = {
  getAll: (params) => api.get('/futsal/getAll', { params }),
  getById: (id) => api.get(`/futsal/${id}`),
  create: (formData) => api.post('/futsal/create', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, formData) => api.put(`/futsal/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/futsal/${id}`),
};

// Booking APIs
export const bookingAPI = {
  getAll: () => api.get('/booking/getAll'),
  getById: (id) => api.get(`/booking/${id}`),
  create: (bookingData) => api.post('/booking/create', bookingData),
  update: (id, bookingData) => api.put(`/booking/${id}`, bookingData),
  delete: (id) => api.delete(`/booking/${id}`),
};

export default api;
