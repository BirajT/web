import api from './axios'

export const createOrderApi = (data) => api.post('/order/create', data)
export const getAllOrdersApi = () => api.get('/order/getAll')
export const getOrderByIdApi = (id) => api.get(`/order/${id}`)
export const updateOrderApi = (id, data) => api.put(`/order/${id}`, data)
export const deleteOrderApi = (id) => api.delete(`/order/${id}`)
