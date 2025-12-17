import { useState } from 'react';
import { Search, Eye, Ban, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';

export default function CustomerManagement() {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = [
    { id: 'C001', name: 'John Smith', company: 'ABC Corporation', idNumber: '900123456V', email: 'john@abc.com', phone: '+94 77 123 4567', status: 'active', bookings: 5, joinedDate: '2025-03-15', totalSpent: 45000, address: '123 Main Street, Colombo 03' },
    { id: 'C002', name: 'Jane Doe', company: 'XYZ Events', idNumber: '910234567V', email: 'jane@xyz.com', phone: '+94 71 234 5678', status: 'active', bookings: 12, joinedDate: '2025-02-10', totalSpent: 89000, address: '456 Park Avenue, Colombo 07' },
    { id: 'C003', name: 'Bob Wilson', company: 'Elite Productions', idNumber: '920345678V', email: 'bob@elite.com', phone: '+94 76 345 6789', status: 'suspended', bookings: 3, joinedDate: '2025-04-20', totalSpent: 28000, address: '789 Beach Road, Colombo 05' },
  ];

  const toggleStatus = (customer: any) => {
    const newStatus = customer.status === 'active' ? 'suspended' : 'active';
    alert(`✓ Customer ${customer.name} has been ${newStatus === 'active' ? 'activated' : 'suspended'} successfully.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Customer Management</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-10 w-64" />
          </div>
          <select className="h-10 px-3 rounded-md border border-gray-300">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {customers.map((customer) => (
          <Card key={customer.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">{customer.name}</h3>
                <p className="text-gray-600">{customer.company}</p>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                  <span>ID: {customer.id}</span>
                  <span>•</span>
                  <span>NIC: {customer.idNumber}</span>
                </div>
              </div>
              <Badge className={customer.status === 'active' ? 'bg-green-600' : 'bg-red-600'}>
                {customer.status}
              </Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Contact</div>
                <div className="text-sm">{customer.phone}</div>
                <div className="text-sm">{customer.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Bookings</div>
                <div className="text-sm">{customer.bookings}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Joined Date</div>
                <div className="text-sm">{new Date(customer.joinedDate).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => setSelectedCustomer(customer)}>
                <Eye className="size-4 mr-2" />
                View Details
              </Button>
              <Button
                size="sm"
                variant={customer.status === 'active' ? 'destructive' : 'default'}
                onClick={() => toggleStatus(customer)}
              >
                {customer.status === 'active' ? <Ban className="size-4 mr-2" /> : <CheckCircle className="size-4 mr-2" />}
                {customer.status === 'active' ? 'Suspend' : 'Activate'}
              </Button>
              <Button variant="outline" size="sm" onClick={() => alert(`✓ Password reset link has been sent to ${customer.email}`)}>
                Reset Password
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <Dialog open={true} onOpenChange={() => setSelectedCustomer(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Customer Details</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-5">
              {/* Customer Header */}
              <div className="pb-5 border-b">
                <h3 className="mb-2">{selectedCustomer.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Customer ID: {selectedCustomer.id}</div>
                  <div>NIC: {selectedCustomer.idNumber}</div>
                  <div>Company: {selectedCustomer.company}</div>
                  <div className="flex items-center gap-2">
                    Status: <Badge className={selectedCustomer.status === 'active' ? 'bg-green-600' : 'bg-red-600'}>
                      {selectedCustomer.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label className="mb-2 block">Contact Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Email</div>
                    <div className="text-sm">{selectedCustomer.email}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Phone</div>
                    <div className="text-sm">{selectedCustomer.phone}</div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <Label className="mb-2 block">Address</Label>
                <div className="p-3 bg-gray-50 rounded text-sm text-gray-700">
                  {selectedCustomer.address}
                </div>
              </div>

              {/* Booking Statistics */}
              <div>
                <Label className="mb-2 block">Booking Statistics</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">{selectedCustomer.bookings}</div>
                    <div className="text-xs text-gray-600">Total Bookings</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">LKR {selectedCustomer.totalSpent.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Total Spent</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-xs text-gray-600 mb-1">Joined Date</div>
                    <div className="text-sm">{new Date(selectedCustomer.joinedDate).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div>
                <Label className="mb-2 block">Recent Bookings</Label>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <div className="text-sm">Fashion Show - Sarah Johnson</div>
                      <div className="text-xs text-gray-600">2025-11-15</div>
                    </div>
                    <div className="text-sm">LKR 15,000</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <div className="text-sm">Product Launch - Emily Davis</div>
                      <div className="text-xs text-gray-600">2025-10-22</div>
                    </div>
                    <div className="text-sm">LKR 18,000</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <div className="text-sm">Commercial Shoot - Michael Brown</div>
                      <div className="text-xs text-gray-600">2025-09-10</div>
                    </div>
                    <div className="text-sm">LKR 12,000</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-5 border-t">
                <Button variant="outline" onClick={() => setSelectedCustomer(null)}>
                  Close
                </Button>
                <Button variant="outline" onClick={() => alert(`✓ Password reset link has been sent to ${selectedCustomer.email}`)}>
                  Reset Password
                </Button>
                <Button 
                  variant={selectedCustomer.status === 'active' ? 'destructive' : 'default'}
                  onClick={() => {
                    toggleStatus(selectedCustomer);
                    setSelectedCustomer(null);
                  }}
                >
                  {selectedCustomer.status === 'active' ? 'Suspend Account' : 'Activate Account'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
