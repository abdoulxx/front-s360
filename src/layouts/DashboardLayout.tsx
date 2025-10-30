import { useLocation, Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

export default function DashboardLayout() {
  const location = useLocation();

  // Determine title based on route
  const getTitle = () => {
    if (location.pathname === '/dashboard') return 'Documents';
    return 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-[#413d6b]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="ml-[240px] min-h-screen flex flex-col">
        {/* Header */}
        <Header title={getTitle()} />

        {/* Page Content */}
        <main className="flex-1 p-8 bg-[#413d6b]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
