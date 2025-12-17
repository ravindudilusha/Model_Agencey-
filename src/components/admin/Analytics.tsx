import { Card } from '../ui/card';
import { BarChart3, TrendingUp, Users, Calendar, DollarSign, Star } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Analytics & Reports</h2>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="size-8 text-blue-600" />
            <TrendingUp className="size-5 text-green-600" />
          </div>
          <div className="text-2xl mb-1">127</div>
          <div className="text-sm text-gray-600">Total Modelers</div>
          <div className="text-xs text-green-600 mt-1">+12 this month</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="size-8 text-purple-600" />
            <TrendingUp className="size-5 text-green-600" />
          </div>
          <div className="text-2xl mb-1">543</div>
          <div className="text-sm text-gray-600">Total Customers</div>
          <div className="text-xs text-green-600 mt-1">+23 this month</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="size-8 text-green-600" />
            <TrendingUp className="size-5 text-green-600" />
          </div>
          <div className="text-2xl mb-1">45</div>
          <div className="text-sm text-gray-600">Bookings This Month</div>
          <div className="text-xs text-green-600 mt-1">+16% vs last month</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="size-8 text-yellow-600" />
            <TrendingUp className="size-5 text-green-600" />
          </div>
          <div className="text-2xl mb-1">285K</div>
          <div className="text-sm text-gray-600">Revenue (LKR)</div>
          <div className="text-xs text-green-600 mt-1">+16% vs last month</div>
        </Card>
      </div>

      {/* Monthly Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <BarChart3 className="size-5" />
            Monthly Bookings
          </h3>
          <div className="space-y-3">
            {[
              { month: 'November 2025', bookings: 45, revenue: 285000 },
              { month: 'October 2025', bookings: 38, revenue: 245000 },
              { month: 'September 2025', bookings: 42, revenue: 267000 },
              { month: 'August 2025', bookings: 35, revenue: 223000 },
            ].map((item) => (
              <div key={item.month} className="flex items-center justify-between pb-3 border-b last:border-0">
                <div>
                  <div>{item.month}</div>
                  <div className="text-sm text-gray-600">LKR {item.revenue.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl">{item.bookings}</div>
                  <div className="text-xs text-gray-600">bookings</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Star className="size-5" />
            Top Performing Models
          </h3>
          <div className="space-y-3">
            {[
              { id: 'M002', name: 'Emily Davis', bookings: 52, rating: 4.9 },
              { id: 'M001', name: 'Sarah Johnson', bookings: 47, rating: 4.8 },
              { id: 'M005', name: 'Lisa Anderson', bookings: 41, rating: 4.8 },
              { id: 'M003', name: 'Michael Brown', bookings: 35, rating: 4.7 },
            ].map((model, index) => (
              <div key={model.id} className="flex items-center justify-between pb-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <div>{model.name}</div>
                    <div className="text-sm text-gray-600">ID: {model.id}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div>{model.bookings} bookings</div>
                  <div className="text-sm text-yellow-600">{model.rating} ★</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Booking Status Distribution */}
      <Card className="p-6">
        <h3 className="text-xl mb-4">Booking Status Overview</h3>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-3xl mb-2">8</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">5</div>
            <div className="text-sm text-gray-600">Accepted</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-2">4</div>
            <div className="text-sm text-gray-600">Payment Pending</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">38</div>
            <div className="text-sm text-gray-600">Confirmed</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-2">23</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </Card>

      {/* Revenue Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl mb-4">Revenue by Plan</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b">
              <div>
                <div>Professional Plan</div>
                <div className="text-sm text-gray-600">45 subscriptions</div>
              </div>
              <div className="text-right">
                <div>$8,955</div>
                <div className="text-sm text-gray-600">56%</div>
              </div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b">
              <div>
                <div>Premium Plan</div>
                <div className="text-sm text-gray-600">28 subscriptions</div>
              </div>
              <div className="text-right">
                <div>$9,772</div>
                <div className="text-sm text-gray-600">28%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div>Basic Plan</div>
                <div className="text-sm text-gray-600">54 subscriptions</div>
              </div>
              <div className="text-right">
                <div>$5,346</div>
                <div className="text-sm text-gray-600">16%</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl mb-4">Customer Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Customers</span>
              <span className="text-xl">487</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">New This Month</span>
              <span className="text-xl text-green-600">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Repeat Customers</span>
              <span className="text-xl">156</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg Bookings per Customer</span>
              <span className="text-xl">2.8</span>
            </div>
          </div>
        </Card>
      </div>

      {/* System Health */}
      <Card className="p-6">
        <h3 className="text-xl mb-4">System Health</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">Pending Approvals</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">32</div>
              <Badge variant="destructive">Action Required</Badge>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Active Models</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">115</div>
              <Badge className="bg-green-600">Healthy</Badge>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Avg Response Time</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">18h</div>
              <Badge className="bg-green-600">Good</Badge>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Platform Uptime</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">99.9%</div>
              <Badge className="bg-green-600">Excellent</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
