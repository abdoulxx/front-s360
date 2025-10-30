import { Search, Power } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Documents' }: HeaderProps) {
  const handleLogout = () => {
    console.log('Logout');
    // TODO: Implémenter la logique de déconnexion
  };

  // Placeholder dynamique selon la page
  const getSearchPlaceholder = () => {
    if (title === 'Administrateur') return 'Rechercher un utilisateur';
    return 'Rechercher un document';
  };

  return (
    <header className="h-[100px] bg-white border-b border-gray-200 flex items-center px-8 gap-8">
      {/* Barre de recherche */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
          <Input
            type="text"
            placeholder={getSearchPlaceholder()}
            className="w-full pl-12 pr-4 py-6 bg-[#8B5CF6] text-white placeholder:text-white/70 border-0 rounded-full focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50"
            style={{ backgroundColor: '#8B5CF6' }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="flex-1">
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
