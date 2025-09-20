import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here to automatically add the auth token to requests
// For example:
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Example API functions
export const login = (data: any) => api.post('/auth/login', data);
export const register = (data: any) => api.post('/auth/register', data);

export const getMe = () => api.get('/users/me');

export const getAllCourses = () => api.get('/courses');
export const getCourseById = (id: string) => api.get(`/courses/${id}`);
export const getCourseContent = (id: string) => api.get(`/courses/${id}/content`);

export default api;
