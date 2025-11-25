import { Power, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/utils/constants';
import { COLORS } from '@/config/colors';

interface HeaderProps {
  title?: string;
  icon?: React.ReactNode;
}

export function Header({ title = 'Accueil', icon }: HeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success('Déconnexion réussie !');
    navigate(ROUTES.LOGIN);
  };

  // Générer les initiales du nom
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="h-[100px] bg-white border-b border-gray-200 flex items-center px-8 gap-8">
      {/* Page indicator */}
      <div className="flex-1 flex items-center gap-3">
        <div style={{ color: COLORS.sidebar.background }}>
          {icon || <Home className="w-6 h-6" />}
        </div>
        <h1 className="text-2xl font-semibold" style={{ color: COLORS.sidebar.background }}>
          {title}
        </h1>
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
              {user?.name || 'Utilisateur'}
            </div>
            <div className="text-xs text-gray-500">
              {user?.is_admin ? 'Administrateur' : 'Utilisateur'}
            </div>
          </div>
          <Avatar className="w-12 h-12 border-2 border-secondary">
            <AvatarImage src="/avatar.png" alt={user?.name || 'User'} />
            <AvatarFallback className="bg-secondary text-white font-semibold">
              {user?.name ? getInitials(user.name) : 'U'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
