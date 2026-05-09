import axiosInstance from './axiosInstance';

export const getSafetyReports = () => axiosInstance.get('/safety/reports');
export const createSafetyReport = (data) => axiosInstance.post('/safety/reports', data);
export const getIncidents = () => axiosInstance.get('/safety/incidents');
export const createIncident = (data) => axiosInstance.post('/safety/incidents', data);
export const getSafetyCompliance = () => axiosInstance.get('/safety/compliance');
