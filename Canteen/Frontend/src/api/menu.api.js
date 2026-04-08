import api from './axios'

export const getAllMenuApi = () => api.get('/menu/getAll')
export const getMenuByIdApi = (id) => api.get(`/menu/${id}`)
export const createMenuApi = (formData) => api.post('/menu/create', formData)
export const deleteMenuApi = (id) => api.delete(`/menu/${id}`)
