import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { AuthProvider } from './components/auth/AuthProvider';
import { useNavigationStore } from './store/navigationStore';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { Overview } from './components/dashboard/Overview';
import { Profile } from './components/dashboard/Profile';
import { Bookings } from './components/dashboard/Bookings';
import { Payments } from './components/dashboard/Payments';
import { Settings } from './components/dashboard/Settings';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './components/admin/Dashboard';
import { AdminBookings } from './components/admin/Bookings';
import { AdminCustomers } from './components/admin/Customers';
import { AdminPayments } from './components/admin/Payments';
import { AdminOccasions } from './components/admin/Occasions';
import { AdminSettings } from './components/admin/Settings';

const queryClient = new QueryClient();

export function App() {
  const { currentPage } = useNavigationStore();

  const renderDashboardContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Overview />;
      case 'profile':
        return <Profile />;
      case 'bookings':
        return <Bookings />;
      case 'payments':
        return <Payments />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  const renderAdminContent = () => {
    switch (currentPage) {
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'admin-bookings':
        return <AdminBookings />;
      case 'admin-customers':
        return <AdminCustomers />;
      case 'admin-payments':
        return <AdminPayments />;
      case 'admin-occasions':
        return <AdminOccasions />;
      case 'admin-settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {['dashboard', 'profile', 'bookings', 'payments', 'settings'].includes(currentPage) ? (
              <DashboardLayout>
                {renderDashboardContent()}
              </DashboardLayout>
            ) : currentPage.startsWith('admin-') ? (
              <AdminLayout>
                {renderAdminContent()}
              </AdminLayout>
            ) : (
              <>
                {currentPage === 'home' && <Home />}
                {currentPage === 'services' && <Services />}
                {currentPage === 'about' && <About />}
                {currentPage === 'gallery' && <Gallery />}
                {currentPage === 'contact' && <Contact />}
                {currentPage === 'login' && <Login />}
              </>
            )}
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}