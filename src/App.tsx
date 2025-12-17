import { useState } from 'react';
import CreativeLandingPage from './components/landing/CreativeLandingPage';
import ModelsPage from './components/models/ModelsPage';
import ModelerRequestForm from './components/modeler/RequestForm';
import ModelerSignupForm from './components/modeler/SignupForm';
import ModelerDashboard from './components/modeler/Dashboard';
import CustomerRegistration from './components/customer/Registration';
import CustomerDashboard from './components/customer/Dashboard';
import LoginPage from './components/auth/LoginPage';
import ModelAcademy from './components/academy/ModelAcademy';

export type UserRole = 'guest' | 'modeler' | 'customer';
export type Page = 'landing' | 'models' | 'modeler-request' | 'modeler-signup' | 'modeler-dashboard' | 'customer-registration' | 'customer-dashboard' | 'login' | 'model-academy';

export interface AppState {
  currentPage: Page;
  userRole: UserRole;
  isLoggedIn: boolean;
  userData?: any;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'landing',
    userRole: 'guest',
    isLoggedIn: false
  });

  const navigate = (page: Page, role?: UserRole) => {
    setAppState(prev => ({
      ...prev,
      currentPage: page,
      userRole: role || prev.userRole
    }));
  };

  const login = (role: UserRole, userData?: any) => {
    setAppState({
      currentPage: role === 'modeler' ? 'modeler-dashboard' : 'customer-dashboard',
      userRole: role,
      isLoggedIn: true,
      userData
    });
  };

  const logout = () => {
    setAppState({
      currentPage: 'landing',
      userRole: 'guest',
      isLoggedIn: false
    });
  };

  const renderPage = () => {
    switch (appState.currentPage) {
      case 'landing':
        return <CreativeLandingPage navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'models':
        return <ModelsPage navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'modeler-request':
        return <ModelerRequestForm navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'modeler-signup':
        return <ModelerSignupForm navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'modeler-dashboard':
        return <ModelerDashboard navigate={navigate} logout={logout} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} />;
      case 'customer-registration':
        return <CustomerRegistration navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'customer-dashboard':
        return <CustomerDashboard navigate={navigate} logout={logout} userRole={appState.userRole} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} />;
      case 'login':
        return <LoginPage navigate={navigate} login={login} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      case 'model-academy':
        return <ModelAcademy navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
      default:
        return <CreativeLandingPage navigate={navigate} currentPage={appState.currentPage} isLoggedIn={appState.isLoggedIn} userRole={appState.userRole} logout={logout} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  );
}