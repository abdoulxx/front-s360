import { Power, Home } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  title?: string;
  icon?: React.ReactNode;
}

export function Header({ title = 'Accueil', icon }: HeaderProps) {
  const handleLogout = () => {
    console.log('Logout');
    // TODO: Implémenter la logique de déconnexion
  };

  return (
    <header className="h-[100px] bg-white border-b border-gray-200 flex items-center px-8 gap-8">
      {/* Page indicator */}
      <div className="flex-1 flex items-center gap-3">
        {icon || <Home className="w-6 h-6 text-[#8B5CF6]" />}
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="hover:bg-secondary/10 p-2 rounded-md transition-colors"
          style={{ color: '#FF6B35' }}
        >
          <Power className="w-7 h-7" strokeWidth={2} />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-semibold" style={{ color: '#FF6B35' }}>
              Koula Kan
            </div>
            <div className="text-xs text-gray-500">Administrateur</div>
          </div>
          <Avatar className="w-12 h-12 border-2 border-secondary">
            <AvatarImage src="/avatar.png" alt="Koula Kan" />
            <AvatarFallback className="bg-secondary text-white font-semibold">
              KK
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
