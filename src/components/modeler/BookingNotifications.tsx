import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';

export default function BookingNotifications() {
  // Mock booking requests
  const bookingRequests = [
    {
      id: 1,
      customerName: 'ABC Corporation',
      event: 'Product Launch Event',
      date: '2025-12-15',
      location: 'Colombo Hilton',
      basePrice: 5000,
      status: 'pending',
      requestedAt: '2 hours ago'
    },
    {
      id: 2,
      customerName: 'Fashion Hub',
      event: 'Fashion Show',
      date: '2025-12-20',
      location: 'Shangri-La Hotel',
      basePrice: 5000,
      status: 'admin_review',
      requestedAt: '5 hours ago'
    },
    {
      id: 3,
      customerName: 'XYZ Events',
      event: 'Corporate Gala',
      date: '2025-11-25',
      location: 'Cinnamon Grand',
      basePrice: 5000,
      status: 'confirmed',
      requestedAt: '1 day ago'
    },
    {
      id: 4,
      customerName: 'Elite Productions',
      event: 'TV Commercial Shoot',
      date: '2025-11-18',
      location: 'Studio City',
      basePrice: 5000,
      status: 'rejected',
      requestedAt: '2 days ago',
      rejectionReason: 'Date conflict with existing booking'
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline"><Clock className="size-3 mr-1" /> New Request</Badge>;
      case 'admin_review':
        return <Badge><Clock className="size-3 mr-1" /> Admin Review</Badge>;
      case 'confirmed':
        return <Badge className="bg-green-600">Confirmed</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Not Accepted</Badge>;
      default:
        return null;
    }
  };

  const pendingCount = bookingRequests.filter(b => b.status === 'pending' || b.status === 'admin_review').length;

  return (
    <div className="space-y-6">
      {/* Info Alert */}
      <Alert>
        <AlertDescription>
          <strong>Note:</strong> You cannot accept or reject booking requests directly. All bookings are managed by the admin team. You will be notified here when customers request to book you.
        </AlertDescription>
      </Alert>

      {/* Summary */}
      {pendingCount > 0 && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <p className="text-blue-900">
            You have <strong>{pendingCount}</strong> booking request{pendingCount > 1 ? 's' : ''} under review.
          </p>
        </Card>
      )}

      {/* Booking Requests */}
      <div className="space-y-4">
        {bookingRequests.map((booking) => (
          <Card key={booking.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl">{booking.event}</h3>
                  {getStatusBadge(booking.status)}
                </div>
                <p className="text-gray-600">{booking.customerName}</p>
                <p className="text-sm text-gray-500">Requested {booking.requestedAt}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-start gap-3">
                <Calendar className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Event Date</div>
                  <div>
                    {new Date(booking.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div>{booking.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Base Price</div>
                  <div>LKR {booking.basePrice.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {booking.status === 'pending' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                  ⏳ This booking request is new. The admin team will review and contact the customer to confirm details.
                </p>
              </div>
            )}

            {booking.status === 'admin_review' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  🔍 The admin team is currently reviewing this booking request and coordinating with the customer.
                </p>
              </div>
            )}

            {booking.status === 'confirmed' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-900">
                  ✓ This booking has been confirmed! The date has been blocked on your calendar. You'll receive further details via email.
                </p>
              </div>
            )}

            {booking.status === 'rejected' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-900">
                  <strong>Reason:</strong> {booking.rejectionReason}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {bookingRequests.length === 0 && (
        <Card className="p-12 text-center">
          <Calendar className="size-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl mb-2">No Booking Requests Yet</h3>
          <p className="text-gray-600">
            When customers request to book you, they'll appear here.
          </p>
        </Card>
      )}
    </div>
  );
}
