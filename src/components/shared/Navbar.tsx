import { Menu, X, Users, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import type { Page, UserRole } from '../../App';

interface NavbarProps {
  navigate: (page: Page) => void;
  currentPage: Page;
  isLoggedIn?: boolean;
  userRole?: UserRole;
  logout?: () => void;
}

export default function Navbar({ navigate, currentPage, isLoggedIn, userRole, logout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (page: Page) => currentPage === page;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate('landing')}
          >
            <Users className="size-8 text-black group-hover:rotate-12 transition-transform" />
            <span className="text-xl">ModelBooking Pro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => navigate('landing')}
              className={`hover:text-gray-600 transition-colors relative group ${isActive('landing') ? 'text-black' : ''}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive('landing') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <button 
              onClick={() => navigate('models')}
              className={`hover:text-gray-600 transition-colors relative group ${isActive('models') ? 'text-black' : ''}`}
            >
              Models
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive('models') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <button 
              onClick={() => navigate('model-academy')}
              className={`hover:text-gray-600 transition-colors relative group ${isActive('model-academy') ? 'text-black' : ''}`}
            >
              Academy
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive('model-academy') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            {isLoggedIn && userRole === 'customer' && (
              <button 
                onClick={() => navigate('customer-dashboard')}
                className={`hover:text-gray-600 transition-colors relative group ${isActive('customer-dashboard') ? 'text-black' : ''}`}
              >
                Browse Models
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive('customer-dashboard') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            )}

            {isLoggedIn && userRole === 'modeler' && (
              <button 
                onClick={() => navigate('modeler-dashboard')}
                className={`hover:text-gray-600 transition-colors relative group ${isActive('modeler-dashboard') ? 'text-black' : ''}`}
              >
                Dashboard
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive('modeler-dashboard') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            )}

            {!isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('login')}
                  className="hover:bg-black hover:text-white transition-all"
                >
                  Login
                </Button>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105"
                  onClick={() => navigate('modeler-request')}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={logout}
                className="hover:bg-black hover:text-white transition-all"
              >
                <LogOut className="size-4 mr-2" />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <button 
              onClick={() => {
                navigate('landing');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left hover:text-gray-600"
            >
              Home
            </button>

            <button 
              onClick={() => {
                navigate('models');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left hover:text-gray-600"
            >
              Models
            </button>

            <button 
              onClick={() => {
                navigate('model-academy');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left hover:text-gray-600"
            >
              Academy
            </button>

            {isLoggedIn && userRole === 'customer' && (
              <button 
                onClick={() => {
                  navigate('customer-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left hover:text-gray-600"
              >
                Browse Models
              </button>
            )}

            {isLoggedIn && userRole === 'modeler' && (
              <button 
                onClick={() => {
                  navigate('modeler-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left hover:text-gray-600"
              >
                Dashboard
              </button>
            )}

            {!isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => {
                    navigate('login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  onClick={() => {
                    navigate('modeler-request');
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  logout?.();
                  setMobileMenuOpen(false);
                }}
              >
                <LogOut className="size-4 mr-2" />
                Logout
              </Button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}