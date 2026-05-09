import axiosInstance from './axiosInstance';

export const getSites = () => axiosInstance.get('/sites');
export const getSiteById = (id) => axiosInstance.get(`/sites/${id}`);
export const createSite = (data) => axiosInstance.post('/sites', data);
export const updateSite = (id, data) => axiosInstance.put(`/sites/${id}`, data);
export const getSiteAttendance = (id) => axiosInstance.get(`/sites/${id}/attendance`);
export const getSiteMaterials = (id) => axiosInstance.get(`/sites/${id}/materials`);
