import axiosInstance from './axiosInstance';

export const loginUser = (data) => {
  return axiosInstance.post("/api/auth/login", data);
};

export const registerUser = (formData) => {
  return axiosInstance.post("/api/auth/signup", formData);
};

export const logoutUser = () => {
  return axiosInstance.post("/api/auth/logout");
};
