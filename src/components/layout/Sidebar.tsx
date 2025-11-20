import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  AlertTriangle,
  FileText,
  BarChart3,
  Bot,
  FileSearch,
  IdCard,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/SidebarContext';

// Menu items configuration
const menuItems = [
  {
    label: 'ACCUEIL',
    icon: Home,
    href: '/dashboard',
  },
  {
    label: 'CONTROLE S360°',
    icon: LayoutGrid,
    href: '/dashboard/controle',
  },
  {
    label: 'ALERTES',
    icon: AlertTriangle,
    href: '/dashboard/alertes',
  },
  {
    label: 'DOCUMENTS',
    icon: FileText,
    href: '/dashboard/documents',
  },
  {
    label: 'KPI - Dashboard',
    icon: BarChart3,
    href: '/dashboard/kpi',
  },
  {
    label: 'CHAT BOT',
    icon: Bot,
    href: '/dashboard/chatbot',
  },
  {
    label: 'Investigation',
    icon: FileSearch,
    href: '/dashboard/investigation',
  },
  {
    label: 'Profil operateur',
    icon: IdCard,
    href: '/dashboard/profil-operateur',
  },
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-[#3D3E54] text-white fixed left-0 top-0 transition-all duration-300',
        isCollapsed ? 'w-[80px]' : 'w-[240px]'
      )}
    >
      {/* Logo and Toggle Button */}
      <div className="p-6 pb-8 flex items-center justify-center gap-3">
        {!isCollapsed && (
          <div className="text-3xl font-bold" style={{ color: '#FF6B35' }}>
            S360°
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="bg-[#FF6B35] text-white rounded-full p-1.5 hover:bg-[#e55a2a] transition-colors flex-shrink-0"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-[#4A4B61] mb-4" />

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg text-sm font-medium transition-colors',
                    isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3',
                    isActive
                      ? 'bg-white text-[#3D3E54]'
                      : 'text-white hover:bg-[#4A4B61]'
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Separator before settings */}
      <div className="w-full h-px bg-[#4A4B61] my-4" />

      {/* Settings at bottom */}
      <div className="px-3 pb-4">
        <Link
          to="/dashboard/settings"
          className={cn(
            'flex items-center gap-3 rounded-lg text-sm font-medium transition-colors',
            isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3',
            pathname === '/dashboard/settings'
              ? 'bg-white text-[#3D3E54]'
              : 'text-white hover:bg-[#4A4B61]'
          )}
          title={isCollapsed ? 'Paramètres' : undefined}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Paramètres</span>}
        </Link>
      </div>

      {/* Administrateur */}
      <div className="px-3 pb-6">
        <Link
          to="/dashboard/administrateur"
          className={cn(
            'flex items-center gap-3 rounded-lg text-sm font-medium transition-colors',
            isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3',
            pathname === '/dashboard/administrateur'
              ? 'bg-white text-[#3D3E54]'
              : 'text-white hover:bg-[#4A4B61]'
          )}
          title={isCollapsed ? 'Administrateur' : undefined}
        >
          <User className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Administrateur</span>}
        </Link>
      </div>
    </div>
  );
}
