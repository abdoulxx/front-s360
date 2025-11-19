import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/utils/constants';
import { AxiosError } from 'axios';
import type { ApiError } from '@/types';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login({ email, password });
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      if (err instanceof AxiosError) {
        const apiError = err.response?.data as ApiError;
        setError(apiError?.message || 'Erreur de connexion');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Une erreur est survenue');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f7f7f7] to-[#7d7d7d] flex items-center justify-center p-8">
      {/* Logo S360° - Orange */}
      <div className="absolute top-8 left-8">
        <div className="text-6xl font-bold" style={{ color: '#FF6B35' }}>
          S360°
        </div>
      </div>

      {/* Container principal */}
      <div className="w-full max-w-6xl flex items-center gap-16">
        {/* Formulaire de connexion - Gauche */}
        <div className="flex-1 flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Message d'erreur */}
            {error && (
              <div className="max-w-md p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* Input Email */}
            <div className="relative w-full max-w-md">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none focus-visible:ring-0 focus-visible:border-gray-800 px-0 pb-2 text-gray-800 placeholder:text-gray-500"
                placeholder="Email"
                required
                disabled={isLoading}
              />
            </div>

            {/* Input Mot de passe */}
            <div className="relative w-full max-w-md">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none focus-visible:ring-0 focus-visible:border-gray-800 px-0 pb-2 text-gray-800 placeholder:text-gray-500"
                placeholder="Mot de passe"
                required
                disabled={isLoading}
              />
            </div>

            {/* Bouton Se connecter */}
            <div className="pt-4 flex justify-end max-w-md">
              <Button
                type="submit"
                className="bg-[#3D3E54] hover:bg-[#2E2F45] text-white px-12 py-5 rounded-md text-base disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </div>
          </form>
        </div>

        {/* Illustration décorative - Droite */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Moniteur stylisé */}
            <div className="bg-white rounded-lg shadow-2xl p-1 w-[600px]">
              <div className="flex gap-1 h-[400px] rounded-sm overflow-hidden">
                {/* Partie gauche - Violet avec icône */}
                <div className="bg-[#3D3E54] flex-shrink-0 w-40 flex flex-col items-center justify-center gap-4">
                  {/* Icône de menu stylisée */}
                  <div className="space-y-3">
                    <div className="w-16 h-1.5 bg-white rounded"></div>
                    <div className="w-16 h-1.5 bg-white rounded"></div>
                    <div className="w-16 h-1.5 bg-white rounded"></div>
                    <div className="w-16 h-1.5 bg-secondary rounded"></div>
                  </div>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px bg-white"></div>

                {/* Partie droite - Image du port maritime */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="/maritime.png"
                    alt="Port maritime"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Base du moniteur */}
            <div className="mx-auto mt-6 w-40 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg"></div>
            <div className="mx-auto w-64 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
