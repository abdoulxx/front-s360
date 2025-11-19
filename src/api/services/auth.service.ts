import api from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import type { ApiResponse, LoginRequest, LoginResponseData, User } from '@/types';

export const authService = {
  login: async (credentials: LoginRequest): Promise<ApiResponse<LoginResponseData>> => {
    const response = await api.post<ApiResponse<LoginResponseData>>(
      ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return response.data;
  },

  logout: async (): Promise<ApiResponse> => {
    const response = await api.post<ApiResponse>(ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },

  me: async (): Promise<ApiResponse<User>> => {
    const response = await api.get<ApiResponse<User>>(ENDPOINTS.AUTH.ME);
    return response.data;
  },

  refresh: async (): Promise<ApiResponse<{ token: string; token_type: string }>> => {
    const response = await api.post<ApiResponse<{ token: string; token_type: string }>>(
      ENDPOINTS.AUTH.REFRESH
    );
    return response.data;
  },
};
