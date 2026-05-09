import axiosInstance from './axiosInstance';

export const getBudgets = () => axiosInstance.get('/finance/budgets');
export const getExpenses = () => axiosInstance.get('/finance/expenses');
export const createExpense = (data) => axiosInstance.post('/finance/expenses', data);
export const updateExpense = (id, data) => axiosInstance.put(`/finance/expenses/${id}`, data);
export const getFinanceSummary = () => axiosInstance.get('/finance/summary');
