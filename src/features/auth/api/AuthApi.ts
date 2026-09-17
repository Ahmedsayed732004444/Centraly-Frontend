import { apiClient } from '@/lib/axios';
import { IAuthRepository, AuthResponse, RefreshTokenRequest } from '@/core/repositories/IAuthRepository';
import { LoginFormData } from '../schemas/loginSchema';

export class AuthRepository implements IAuthRepository {
  async login(data: LoginFormData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  }
  
  async refreshToken(data: RefreshTokenRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/refresh', data);
    return response.data;
  }

  async revokeRefreshToken(data: RefreshTokenRequest): Promise<void> {
    await apiClient.post('/auth/revoke-refresh-token', data);
  }
}

export const authRepository = new AuthRepository();
