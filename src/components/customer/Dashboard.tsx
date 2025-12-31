import { useState } from 'react';
import { LogOut, Search, User, FileText, Calendar, Users, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import BrowseModelers from './BrowseModelers';
import BookingRequests from './BookingRequests';
import Navbar from '../shared/Navbar';
import type { UserRole } from '../../App';

interface CustomerDashboardProps {
  navigate: (path: string) => void;
  logout: () => void;
  userRole: UserRole;
  currentPage: string;
  isLoggedIn: boolean;
}

export default function CustomerDashboard({ navigate, logout, userRole, currentPage, isLoggedIn }: CustomerDashboardProps) {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shared Navbar */}
      <Navbar navigate={navigate} currentPage={currentPage} isLoggedIn={isLoggedIn} userRole={userRole} logout={logout} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {isLoggedIn ? (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="browse" className="gap-2">
                <Search className="size-4" />
                Browse Models
              </TabsTrigger>
              <TabsTrigger value="requests" className="gap-2">
                <FileText className="size-4" />
                My Requests
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="size-4" />
                Profile
              </TabsTrigger>
            </TabsList>

            <TabsContent value="browse">
              <BrowseModelers isLoggedIn={isLoggedIn} />
            </TabsContent>

            <TabsContent value="requests">
              <BookingRequests />
            </TabsContent>

            <TabsContent value="profile">
              <div className="max-w-2xl">
                <div className="bg-white rounded-lg p-6 space-y-6">
                  <h2 className="text-2xl mb-6">My Profile</h2>
                  <div className="grid gap-4">
                    <div>
                      <label className="text-sm text-gray-600">Company Name</label>
                      <Input defaultValue="ABC Corporation" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Contact Person</label>
                      <Input defaultValue="John Smith" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Email</label>
                      <Input type="email" defaultValue="john@abc.com" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Phone</label>
                      <Input type="tel" defaultValue="+94 77 123 4567" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Company Address</label>
                      <Input defaultValue="123 Main Street, Colombo" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <BrowseModelers isLoggedIn={false} />
        )}
      </div>
    </div>
  );
}