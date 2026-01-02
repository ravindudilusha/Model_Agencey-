import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CreativeLandingPage from './components/landing/CreativeLandingPage';
import ModelsPage from './components/models/ModelsPage';
import ModelerRequestForm from './components/modeler/RequestForm';
import ModelerSignupForm from './components/modeler/SignupForm';
import ModelerDashboard from './components/modeler/Dashboard';
import CustomerRegistration from './components/customer/Registration';
import CustomerDashboard from './components/customer/Dashboard';
import LoginPage from './components/auth/LoginPage';
import ForgotPassword from './components/auth/ForgotPassword';
import ModelAcademy from './components/academy/ModelAcademy';
import { PaymentForm } from './components/PaymentForm';

export type UserRole = 'guest' | 'modeler' | 'customer';

export interface AppState {
  userRole: UserRole;
  isLoggedIn: boolean;
  userData?: any;
}

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [appState, setAppState] = useState<AppState>({
    userRole: 'guest',
    isLoggedIn: false
  });

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const login = (role: UserRole, userData?: any) => {
    setAppState({
      userRole: role,
      isLoggedIn: true,
      userData
    });
    navigate(role === 'modeler' ? '/modeler/dashboard' : '/customer/dashboard');
  };

  const logout = () => {
    setAppState({
      userRole: 'guest',
      isLoggedIn: false
    });
    navigate('/');
  };

  const currentPage = location.pathname;

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <CreativeLandingPage 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/models" 
        element={
          <ModelsPage 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/modeler/request" 
        element={
          <ModelerRequestForm 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/modeler/signup" 
        element={
          <ModelerSignupForm 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/modeler/dashboard" 
        element={
          <ModelerDashboard 
            navigate={handleNavigate} 
            logout={logout} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
          />
        } 
      />
      <Route 
        path="/customer/registration" 
        element={
          <CustomerRegistration 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/customer/dashboard" 
        element={
          <CustomerDashboard 
            navigate={handleNavigate} 
            logout={logout} 
            userRole={appState.userRole} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
          />
        } 
      />
      <Route 
        path="/login" 
        element={
          <LoginPage 
            navigate={handleNavigate} 
            login={login} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
        path="/forgot-password" 
        element={
          <ForgotPassword 
            navigate={handleNavigate}
          />
        } 
      />
      <Route 
        path="/academy" 
        element={
          <ModelAcademy 
            navigate={handleNavigate} 
            currentPage={currentPage} 
            isLoggedIn={appState.isLoggedIn} 
            userRole={appState.userRole} 
            logout={logout} 
          />
        } 
      />
      <Route 
  path="/payment"
  element={
    <PaymentForm
      navigate={handleNavigate}
      currentPage={currentPage}
      isLoggedIn={appState.isLoggedIn}
      userRole={appState.userRole}
      logout={logout}
    />
  }
/>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}