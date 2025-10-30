import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  Package,
  ClipboardList,
  FileSpreadsheet,
  Receipt,
  Car,
  Database,
  BarChart3,
  Settings,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Menu items configuration
const menuItems = [
  {
    label: 'Accueil',
    icon: Home,
    href: '/dashboard',
  },
  {
    label: 'Gestion RFCV',
    icon: FileText,
    href: '/dashboard/rfcv',
  },
  {
    label: 'Gestion FDI',
    icon: FileText,
    href: '/dashboard/fdi',
  },
  {
    label: 'Gestion Manifeste',
    icon: Package,
    href: '/dashboard/manifeste',
  },
  {
    label: 'Gestion Déclaration',
    icon: ClipboardList,
    href: '/dashboard/declaration',
  },
  {
    label: 'Gestion Bon Provisoire',
    icon: Receipt,
    href: '/dashboard/bon-provisoire',
  },
  {
    label: 'Gestion Sydam Auto',
    icon: Car,
    href: '/dashboard/sydam-auto',
  },
  {
    label: 'Gestion Données Banque',
    icon: Database,
    href: '/dashboard/donnees-banque',
  },
  {
    label: 'KPI - Dashboard',
    icon: BarChart3,
    href: '/dashboard/kpi',
  },
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col h-screen w-[240px] bg-[#3D3E54] text-white fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 pb-8 flex items-center justify-center">
        <div className="text-3xl font-bold" style={{ color: '#FF6B35' }}>
          S360°
        </div>
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
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white text-[#3D3E54]'
                      : 'text-white hover:bg-[#4A4B61]'
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
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
            'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
            pathname === '/dashboard/settings'
              ? 'bg-white text-[#3D3E54]'
              : 'text-white hover:bg-[#4A4B61]'
          )}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          <span>Paramètres</span>
        </Link>
      </div>

      {/* Administrateur */}
      <div className="px-3 pb-6">
        <Link
          to="/dashboard/administrateur"
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
            pathname === '/dashboard/administrateur'
              ? 'bg-white text-[#3D3E54]'
              : 'text-white hover:bg-[#4A4B61]'
          )}
        >
          <User className="w-5 h-5 flex-shrink-0" />
          <span>Administrateur</span>
        </Link>
      </div>
    </div>
  );
}
