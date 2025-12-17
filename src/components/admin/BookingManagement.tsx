import { useState } from 'react';
import { Search, Eye, Check, X, Phone } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

export default function BookingManagement() {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const bookings = [
    {
      id: 'BR001',
      modelId: 'M001',
      modelName: 'Sarah Johnson',
      customerName: 'John Smith',
      customerCompany: 'ABC Corporation',
      customerPhone: '+94 77 123 4567',
      customerEmail: 'john@abc.com',
      event: 'Fashion Show',
      date: '2025-12-15',
      time: '18:00',
      location: 'Colombo Hilton',
      basePrice: 5000,
      status: 'pending',
      submittedAt: '2025-11-23'
    },
    {
      id: 'BR002',
      modelId: 'M002',
      modelName: 'Emily Davis',
      customerName: 'Jane Doe',
      customerCompany: 'XYZ Events',
      customerPhone: '+94 71 234 5678',
      customerEmail: 'jane@xyz.com',
      event: 'Product Launch',
      date: '2025-12-20',
      time: '19:00',
      location: 'Shangri-La Hotel',
      basePrice: 6000,
      status: 'accepted',
      submittedAt: '2025-11-20'
    }
  ];

  const handleAccept = (booking: any) => {
    alert(`Booking ${booking.id} accepted. Customer will receive payment instructions via email.`);
  };

  const handleReject = (booking: any) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      alert(`Booking ${booking.id} rejected. Customer will be notified with reason: ${reason}`);
    }
  };

  const handleConfirm = (booking: any) => {
    alert(`Booking ${booking.id} confirmed! Date will be blocked on model's calendar and confirmation email will be sent.`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline">Pending Review</Badge>;
      case 'accepted':
        return <Badge className="bg-blue-600">Accepted - Awaiting Payment</Badge>;
      case 'payment_submitted':
        return <Badge className="bg-yellow-600">Payment Submitted</Badge>;
      case 'confirmed':
        return <Badge className="bg-green-600">Confirmed</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Booking Management</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input placeholder="Search bookings..." className="pl-10 w-64" />
          </div>
          <select className="h-10 px-3 rounded-md border border-gray-300">
            <option>All Status</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Confirmed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl">{booking.event}</h3>
                  {getStatusBadge(booking.status)}
                </div>
                <p className="text-gray-600">Booking ID: {booking.id}</p>
                <p className="text-sm text-gray-500">Submitted: {new Date(booking.submittedAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="text-sm mb-2">Model Details</h4>
                <div className="text-sm space-y-1">
                  <div>ID: {booking.modelId}</div>
                  <div>Name: {booking.modelName}</div>
                  <div>Base Price: LKR {booking.basePrice.toLocaleString()}</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm mb-2">Customer Details</h4>
                <div className="text-sm space-y-1">
                  <div>{booking.customerName}</div>
                  <div>{booking.customerCompany}</div>
                  <div>{booking.customerPhone}</div>
                  <div>{booking.customerEmail}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Event Date:</span>
                  <div>{new Date(booking.date).toLocaleDateString()} {booking.time}</div>
                </div>
                <div>
                  <span className="text-gray-600">Location:</span>
                  <div>{booking.location}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                <Eye className="size-4 mr-2" />
                View Full Details
              </Button>
              {booking.status === 'pending' && (
                <>
                  <Button size="sm" variant="outline" onClick={() => alert(`Call customer at ${booking.customerPhone}`)}>
                    <Phone className="size-4 mr-2" />
                    Call Customer
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleAccept(booking)}>
                    <Check className="size-4 mr-2" />
                    Accept
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleReject(booking)}>
                    <X className="size-4 mr-2" />
                    Reject
                  </Button>
                </>
              )}
              {booking.status === 'payment_submitted' && (
                <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleConfirm(booking)}>
                  <Check className="size-4 mr-2" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Details Modal */}
      {selectedBooking && (
        <Dialog open={true} onOpenChange={() => setSelectedBooking(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Booking Details - {selectedBooking.id}</DialogTitle>
              <DialogDescription>View detailed information about the booking.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="mb-2">Event Information</h4>
                  <div className="space-y-2">
                    <div><span className="text-gray-600">Event:</span> {selectedBooking.event}</div>
                    <div><span className="text-gray-600">Date:</span> {new Date(selectedBooking.date).toLocaleDateString()}</div>
                    <div><span className="text-gray-600">Time:</span> {selectedBooking.time}</div>
                    <div><span className="text-gray-600">Location:</span> {selectedBooking.location}</div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <div><span className="text-gray-600">Customer:</span> {selectedBooking.customerName}</div>
                    <div><span className="text-gray-600">Company:</span> {selectedBooking.customerCompany}</div>
                    <div><span className="text-gray-600">Phone:</span> {selectedBooking.customerPhone}</div>
                    <div><span className="text-gray-600">Email:</span> {selectedBooking.customerEmail}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t">
                <Button onClick={() => setSelectedBooking(null)}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}