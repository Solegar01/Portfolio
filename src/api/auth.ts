import type { UserModel } from '../models/UserModel';
import http from '../services/http';

export const login = (data: Omit<UserModel, 'id'>) => http.post<UserModel>('/Auth/login', data);
