import { useState } from 'react';
import AdminDashboard from './components/admin/Dashboard';
import AdminLogin from './components/admin/AdminLogin';

type AdminPage = 'login' | 'dashboard';

interface AdminAppState {
  currentPage: AdminPage;
  isLoggedIn: boolean;
  adminData?: any;
}

export default function AdminApp() {
  const [appState, setAppState] = useState<AdminAppState>({
    currentPage: 'login',
    isLoggedIn: false
  });

  const login = (adminData?: any) => {
    setAppState({
      currentPage: 'dashboard',
      isLoggedIn: true,
      adminData
    });
  };

  const logout = () => {
    setAppState({
      currentPage: 'login',
      isLoggedIn: false
    });
  };

  const navigate = (page: AdminPage) => {
    setAppState(prev => ({
      ...prev,
      currentPage: page
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {appState.currentPage === 'login' ? (
        <AdminLogin login={login} />
      ) : (
        <AdminDashboard navigate={navigate} logout={logout} />
      )}
    </div>
  );
}
