import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import type { AuthContextType } from '@/types';

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('La méthode useAuth doit être utilisée au sein d\'un AuthProvider.');
  }

  return context;
}
