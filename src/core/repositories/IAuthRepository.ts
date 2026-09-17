import { LoginFormData } from "@/features/auth/schemas/loginSchema";

export interface AuthResponse {
  id: string;
  userName: string;
  token: string;
  expiresIn: number;
  refreshToken: string;
  refreshTokenExpiration: string;
  role: string[];
  permissions: string[];
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface IAuthRepository {
  login(data: LoginFormData): Promise<AuthResponse>;
  refreshToken(data: RefreshTokenRequest): Promise<AuthResponse>;
  revokeRefreshToken(data: RefreshTokenRequest): Promise<void>;
}
