import { useState } from 'react';
import { LogOut, Home, Users, UserCheck, Image as ImageIcon, FileText, Calendar, DollarSign, BarChart3, Menu, X, AlertCircle, TrendingUp, Clock, ChevronRight, Activity, Zap, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import ModelerRequests from './ModelerRequests';
import SignupVerification from './SignupVerification';
import MediaApproval from './MediaApproval';
import ModelerManagement from './ModelerManagement';
import CustomerManagement from './CustomerManagement';
import BookingManagement from './BookingManagement';
import PaymentVerification from './PaymentVerification';
import Analytics from './Analytics';

type AdminPage = 'login' | 'dashboard';

interface AdminDashboardProps {
  navigate: (page: AdminPage) => void;
  logout: () => void;
}

export default function AdminDashboard({ navigate, logout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock pending counts
  const pendingCounts = {
    modelerRequests: 5,
    signupVerifications: 3,
    mediaApprovals: 12,
    bookingRequests: 8,
    paymentVerifications: 4
  };

  const totalPending = Object.values(pendingCounts).reduce((a, b) => a + b, 0);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home, count: 0, description: 'Dashboard home' },
    { id: 'modeler-requests', label: 'Modeler Requests', icon: UserCheck, count: pendingCounts.modelerRequests, description: 'New applications' },
    { id: 'signup-verification', label: 'Signup Verification', icon: FileText, count: pendingCounts.signupVerifications, description: 'Verify signups' },
    { id: 'media-approval', label: 'Media Approval', icon: ImageIcon, count: pendingCounts.mediaApprovals, description: 'Review uploads' },
    { id: 'modelers', label: 'Modelers', icon: Users, count: 0, description: 'All models' },
    { id: 'customers', label: 'Customers', icon: Users, count: 0, description: 'Client accounts' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, count: pendingCounts.bookingRequests, description: 'Booking requests' },
    { id: 'payments', label: 'Payments', icon: DollarSign, count: pendingCounts.paymentVerifications, description: 'Payment verification' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, count: 0, description: 'Reports & insights' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Enhanced Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-black via-gray-900 to-black text-white transform transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header - Enhanced */}
          <div className="p-6 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white flex items-center justify-center">
                  <Activity className="size-6 text-black" />
                </div>
                <div>
                  <h2 className="text-lg">Admin Panel</h2>
                  <p className="text-xs text-gray-400">Control Center</p>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors">
                <X className="size-5" />
              </button>
            </div>
            
            {/* Pending Items Alert */}
            {totalPending > 0 && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="size-4 text-red-500" />
                  <span className="text-sm">Pending Actions</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl">{totalPending}</span>
                  <span className="text-xs text-gray-400">items need attention</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation - Enhanced */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full group relative overflow-hidden rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black shadow-lg'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`size-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-black text-white' : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                        <Icon className="size-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm">{item.label}</div>
                        <div className={`text-xs ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.count > 0 && (
                        <Badge variant="destructive" className="text-xs px-2 py-0.5">
                          {item.count}
                        </Badge>
                      )}
                      {isActive && <ChevronRight className="size-4" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Logout - Enhanced */}
          <div className="p-4 border-t border-gray-800 bg-black/50">
            <Button
              variant="outline"
              className="w-full bg-white text-black border-white hover:bg-gray-100 transition-all"
              onClick={logout}
            >
              <LogOut className="size-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="size-6" />
                </button>
                <div>
                  <h1 className="text-2xl">
                    {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
                  </h1>
                  <p className="text-sm text-gray-600">Manage your platform efficiently</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Clock className="size-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Last updated: Just now</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* Priority Actions - Simplified */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl">Pending Actions</h2>
                    <p className="text-gray-600">Items requiring your immediate attention</p>
                  </div>
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    {totalPending} Total
                  </Badge>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  <Card
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-black"
                    onClick={() => setActiveSection('modeler-requests')}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <UserCheck className="size-6" />
                        {pendingCounts.modelerRequests > 0 && (
                          <Badge variant="destructive">
                            {pendingCounts.modelerRequests}
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl mb-1">{pendingCounts.modelerRequests}</div>
                      <p className="text-sm text-gray-600">Modeler Requests</p>
                    </div>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-black"
                    onClick={() => setActiveSection('signup-verification')}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <FileText className="size-6" />
                        {pendingCounts.signupVerifications > 0 && (
                          <Badge variant="destructive">
                            {pendingCounts.signupVerifications}
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl mb-1">{pendingCounts.signupVerifications}</div>
                      <p className="text-sm text-gray-600">Signup Verifications</p>
                    </div>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-black"
                    onClick={() => setActiveSection('media-approval')}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <ImageIcon className="size-6" />
                        {pendingCounts.mediaApprovals > 0 && (
                          <Badge variant="destructive">
                            {pendingCounts.mediaApprovals}
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl mb-1">{pendingCounts.mediaApprovals}</div>
                      <p className="text-sm text-gray-600">Media Approvals</p>
                    </div>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-black"
                    onClick={() => setActiveSection('bookings')}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Calendar className="size-6" />
                        {pendingCounts.bookingRequests > 0 && (
                          <Badge variant="destructive">
                            {pendingCounts.bookingRequests}
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl mb-1">{pendingCounts.bookingRequests}</div>
                      <p className="text-sm text-gray-600">Booking Requests</p>
                    </div>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-black"
                    onClick={() => setActiveSection('payments')}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <DollarSign className="size-6" />
                        {pendingCounts.paymentVerifications > 0 && (
                          <Badge variant="destructive">
                            {pendingCounts.paymentVerifications}
                          </Badge>
                        )}
                      </div>
                      <div className="text-3xl mb-1">{pendingCounts.paymentVerifications}</div>
                      <p className="text-sm text-gray-600">Payment Verifications</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="flex items-center gap-2">
                      <Users className="size-5" />
                      Platform Statistics
                    </h3>
                    <TrendingUp className="size-5 text-green-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Modelers</span>
                      <span className="text-xl">127</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Modelers</span>
                      <span className="text-xl text-green-600">115</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Customers</span>
                      <span className="text-xl">543</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">New This Month</span>
                      <span className="text-xl">23</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="flex items-center gap-2">
                      <Calendar className="size-5" />
                      Booking Statistics
                    </h3>
                    <TrendingUp className="size-5 text-green-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">This Month</span>
                      <span className="text-xl">45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Confirmed</span>
                      <span className="text-xl text-green-600">38</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Pending</span>
                      <span className="text-xl text-yellow-600">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Upcoming Events</span>
                      <span className="text-xl">12</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="flex items-center gap-2">
                      <DollarSign className="size-5" />
                      Revenue Overview
                    </h3>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      +16%
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">This Month</span>
                      <span className="text-xl">LKR 285K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Last Month</span>
                      <span className="text-xl">LKR 245K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Growth</span>
                      <span className="text-xl text-green-600">+16%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Pending</span>
                      <span className="text-xl text-yellow-600">4</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="text-xl mb-6">Recent Activity</h3>
                <div className="space-y-1">
                  {[
                    { type: 'booking', text: 'New booking request from ABC Corporation', time: '5 minutes ago', icon: Calendar },
                    { type: 'modeler', text: 'New modeler application received', time: '1 hour ago', icon: UserCheck },
                    { type: 'payment', text: 'Payment verified for booking BR004', time: '2 hours ago', icon: DollarSign },
                    { type: 'media', text: 'Photo uploaded by Model M003', time: '3 hours ago', icon: ImageIcon },
                    { type: 'signup', text: 'Modeler signup completed - pending verification', time: '5 hours ago', icon: FileText },
                  ].map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Icon className="size-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p>{activity.text}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'modeler-requests' && <ModelerRequests />}
          {activeSection === 'signup-verification' && <SignupVerification />}
          {activeSection === 'media-approval' && <MediaApproval />}
          {activeSection === 'modelers' && <ModelerManagement />}
          {activeSection === 'customers' && <CustomerManagement />}
          {activeSection === 'bookings' && <BookingManagement />}
          {activeSection === 'payments' && <PaymentVerification />}
          {activeSection === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  );
}