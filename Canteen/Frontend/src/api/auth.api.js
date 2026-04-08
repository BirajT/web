import api from './axios'

export const registerApi = (formData) => api.post('/auth/register', formData)
export const loginApi = (data) => api.post('/auth/login', data)
export const logoutApi = () => api.post('/auth/logout')
export const changePasswordApi = (data) => api.post('/auth/changePassword', data)
export const forgotPasswordApi = (data) => api.post('/auth/forgotPassword', data)
