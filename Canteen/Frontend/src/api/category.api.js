import api from './axios'

export const getAllCategoriesApi = () => api.get('/category/getAll')
