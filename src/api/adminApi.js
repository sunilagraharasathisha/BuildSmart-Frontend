import axiosInstance from './axiosInstance';

export const getUsers = () => axiosInstance.get('/admin/users');
export const getUserById = (id) => axiosInstance.get(`/admin/users/${id}`);
export const createUser = (data) => axiosInstance.post('/admin/users', data);
export const updateUser = (id, data) => axiosInstance.put(`/admin/users/${id}`, data);
export const deleteUser = (id) => axiosInstance.delete(`/admin/users/${id}`);
export const getRoles = () => axiosInstance.get('/admin/roles');
export const getSystemLogs = () => axiosInstance.get('/admin/logs');
