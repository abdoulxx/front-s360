import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { username, password });
    // TODO: Implémenter la logique de connexion
    // Redirection temporaire vers le dashboard
    navigate('/dashboard');
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
            {/* Input Nom d'utilisateur */}
            <div className="relative w-full max-w-md">
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none focus-visible:ring-0 focus-visible:border-gray-800 px-0 pb-2 text-gray-800 placeholder:text-gray-500"
                placeholder="Nom d'utilisateur"
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
              />
            </div>

            {/* Bouton Se connecter */}
            <div className="pt-4 flex justify-end max-w-md">
              <Button
                type="submit"
                className="bg-[#3D3E54] hover:bg-[#2E2F45] text-white px-12 py-5 rounded-md text-base"
              >
                Se connecter
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
