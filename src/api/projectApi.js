import axiosInstance from './axiosInstance';

export const getProjects = () => axiosInstance.get('/projects');
export const getProjectById = (id) => axiosInstance.get(`/projects/${id}`);
export const createProject = (data) => axiosInstance.post('/projects', data);
export const updateProject = (id, data) => axiosInstance.put(`/projects/${id}`, data);
export const deleteProject = (id) => axiosInstance.delete(`/projects/${id}`);
export const getProjectProgress = (id) => axiosInstance.get(`/projects/${id}/progress`);
