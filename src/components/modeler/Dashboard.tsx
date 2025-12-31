import { useState } from 'react';
import { User, Settings, Image, Video, Calendar as CalendarIcon, Bell } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import BookingNotifications from './BookingNotifications';
import ProfileManagement from './ProfileManagement';
import MediaUpload from './MediaUpload';
import ModelerCalendar from './ModelerCalendar';
import Navbar from '../shared/Navbar';
import type { UserRole } from '../../App';

interface ModelerDashboardProps {
  navigate: (path: string) => void;
  logout: () => void;
  currentPage: string;
  isLoggedIn: boolean;
  userRole: UserRole;
}

export default function ModelerDashboard({ navigate, logout, currentPage, isLoggedIn, userRole }: ModelerDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingBookings] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shared Navbar */}
      <Navbar navigate={navigate} currentPage={currentPage} isLoggedIn={isLoggedIn} userRole={userRole} logout={logout} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="overview" className="gap-2">
              <User className="size-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Settings className="size-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="photos" className="gap-2">
              <Image className="size-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <Video className="size-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="calendar" className="gap-2">
              <CalendarIcon className="size-4" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="bookings" className="gap-2">
              <Bell className="size-4" />
              Bookings
              {pendingBookings > 0 && (
                <Badge variant="destructive" className="ml-1">{pendingBookings}</Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="text-gray-600 mb-2">Profile Views</div>
                <div className="text-3xl">1,234</div>
                <div className="text-sm text-green-600 mt-2">+15% this month</div>
              </Card>
              <Card className="p-6">
                <div className="text-gray-600 mb-2">Total Bookings</div>
                <div className="text-3xl">47</div>
                <div className="text-sm text-gray-600 mt-2">23 completed</div>
              </Card>
              <Card className="p-6">
                <div className="text-gray-600 mb-2">Average Rating</div>
                <div className="text-3xl">4.8★</div>
                <div className="text-sm text-gray-600 mt-2">Based on 15 reviews</div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl mb-4">Profile Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Profile Picture</span>
                    <Badge>Approved</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cover Photo</span>
                    <Badge>Approved</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Photos</span>
                    <span className="text-sm text-gray-600">8 / 10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Videos</span>
                    <span className="text-sm text-gray-600">3 / 5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pending Approvals</span>
                    <Badge variant="outline">2</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-blue-600 mt-1.5"></div>
                    <div>
                      <p>New booking request received</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-green-600 mt-1.5"></div>
                    <div>
                      <p>Photo approved by admin</p>
                      <p className="text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-blue-600 mt-1.5"></div>
                    <div>
                      <p>Booking confirmed for Dec 15</p>
                      <p className="text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-yellow-600 mt-1.5"></div>
                    <div>
                      <p>Video pending admin review</p>
                      <p className="text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileManagement />
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <MediaUpload type="photos" />
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <MediaUpload type="videos" />
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <ModelerCalendar />
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <BookingNotifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}