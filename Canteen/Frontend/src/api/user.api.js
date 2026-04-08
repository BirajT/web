import api from './axios'

export const getAllUsersApi = () => api.get('/user/getAll')
export const getUserByIdApi = (id) => api.get(`/user/${id}`)
export const deleteUserApi = (id) => api.delete(`/user/${id}`)
