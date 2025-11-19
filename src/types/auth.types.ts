import type { User } from './user.types';

// Login request payload
export interface LoginRequest {
  email: string;
  password: string;
}

// Login response data
export interface LoginResponseData {
  user: User;
  token: string;
  token_type: string;
}

// Auth state for context
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Auth context actions
export interface AuthContextType extends AuthState {
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}
