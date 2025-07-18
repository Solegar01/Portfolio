import http from './http';
import type { LoginResponse } from '../models/AuthModel';

const TOKEN_KEY = 'token';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/login', { email, password });
  const { token } = response.data;

  localStorage.setItem(TOKEN_KEY, token); // ✅ Simpan token
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (!response.ok) {
    throw new Error('Register failed');
  }

  return await response.json();
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.href = '/login';
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
