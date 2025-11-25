import { useLocation, Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { Home, LayoutGrid } from 'lucide-react';
import { COLORS } from '@/config/colors';

function DashboardContent() {
  const location = useLocation();
  const { isCollapsed } = useSidebar();

  // Determine title based on route
  const getTitle = () => {
    if (location.pathname === '/dashboard') return 'Accueil';
    if (location.pathname === '/dashboard/controle') return 'Contrôle S360°';
    return 'Dashboard';
  };

  // Determine icon based on route
  const getIcon = () => {
    if (location.pathname === '/dashboard') return <Home className="w-6 h-6" style={{ color: COLORS.sidebar.background }} />;
    if (location.pathname === '/dashboard/controle') return <LayoutGrid className="w-6 h-6" style={{ color: COLORS.sidebar.background }} />;
    return <Home className="w-6 h-6" style={{ color: COLORS.sidebar.background }} />;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${COLORS.background.gradientFrom}, ${COLORS.background.gradientTo})`
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={cn(
          'min-h-screen flex flex-col transition-all duration-300',
          isCollapsed ? 'ml-[80px]' : 'ml-[240px]'
        )}
      >
        {/* Header */}
        <Header title={getTitle()} icon={getIcon()} />

        {/* Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  );
}
