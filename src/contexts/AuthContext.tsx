import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { authService } from '@/api/services';
import { storage } from '@/utils/storage';
import type { AuthContextType, LoginRequest, User } from '@/types';

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(storage.getToken());
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!token && !!user;

  // Check authentication on mount
  const checkAuth = useCallback(async () => {
    const storedToken = storage.getToken();

    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.me();
      if (response.success && response.data) {
        setUser(response.data);
        setToken(storedToken);
      } else {
        storage.clearAuth();
        setUser(null);
        setToken(null);
      }
    } catch {
      storage.clearAuth();
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login
  const login = useCallback(async (credentials: LoginRequest) => {
    const response = await authService.login(credentials);

    if (response.success && response.data) {
      const { user, token } = response.data;

      storage.setToken(token);
      storage.setUser(user);

      setUser(user);
      setToken(token);
    } else {
      throw new Error(response.message || 'Login failed');
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
      // Continue with logout even if API call fails
    } finally {
      storage.clearAuth();
      setUser(null);
      setToken(null);
    }
  }, []);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
