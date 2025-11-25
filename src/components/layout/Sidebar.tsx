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
import { COLORS } from '@/config/colors';

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
        'flex flex-col h-screen text-white fixed left-0 top-0 transition-all duration-300',
        isCollapsed ? 'w-[80px]' : 'w-[240px]'
      )}
      style={{ backgroundColor: COLORS.sidebar.background }}
    >
      {/* Logo and Toggle Button */}
      <div className="p-6 pb-8 flex items-center justify-center gap-3">
        {!isCollapsed && (
          <div className="text-3xl font-bold" style={{ color: COLORS.sidebar.logo }}>
            S360°
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-full p-1.5 hover:opacity-90 transition-opacity flex-shrink-0"
          style={{
            backgroundColor: COLORS.sidebar.collapseButton,
            color: COLORS.sidebar.collapseButtonIcon
          }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Separator */}
      <div className="w-full h-px mb-4" style={{ backgroundColor: COLORS.sidebar.separator }} />

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
                    isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3'
                  )}
                  style={{
                    backgroundColor: isActive ? COLORS.sidebar.activeBackground : 'transparent',
                    color: isActive ? COLORS.sidebar.activeText : COLORS.sidebar.text,
                  }}
                  onMouseEnter={(e) => !isActive && (e.currentTarget.style.backgroundColor = COLORS.sidebar.hover)}
                  onMouseLeave={(e) => !isActive && (e.currentTarget.style.backgroundColor = 'transparent')}
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
      <div className="w-full h-px my-4" style={{ backgroundColor: COLORS.sidebar.separator }} />

      {/* Settings at bottom */}
      <div className="px-3 pb-4">
        <Link
          to="/dashboard/settings"
          className={cn(
            'flex items-center gap-3 rounded-lg text-sm font-medium transition-colors',
            isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3'
          )}
          style={{
            backgroundColor: pathname === '/dashboard/settings' ? COLORS.sidebar.activeBackground : 'transparent',
            color: pathname === '/dashboard/settings' ? COLORS.sidebar.activeText : COLORS.sidebar.text,
          }}
          onMouseEnter={(e) => pathname !== '/dashboard/settings' && (e.currentTarget.style.backgroundColor = COLORS.sidebar.hover)}
          onMouseLeave={(e) => pathname !== '/dashboard/settings' && (e.currentTarget.style.backgroundColor = 'transparent')}
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
            isCollapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3'
          )}
          style={{
            backgroundColor: pathname === '/dashboard/administrateur' ? COLORS.sidebar.activeBackground : 'transparent',
            color: pathname === '/dashboard/administrateur' ? COLORS.sidebar.activeText : COLORS.sidebar.text,
          }}
          onMouseEnter={(e) => pathname !== '/dashboard/administrateur' && (e.currentTarget.style.backgroundColor = COLORS.sidebar.hover)}
          onMouseLeave={(e) => pathname !== '/dashboard/administrateur' && (e.currentTarget.style.backgroundColor = 'transparent')}
          title={isCollapsed ? 'Administrateur' : undefined}
        >
          <User className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Administrateur</span>}
        </Link>
      </div>
    </div>
  );
}
