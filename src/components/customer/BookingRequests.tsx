import { useState } from 'react';
import { Calendar, MapPin, DollarSign, Upload, CheckCircle, Clock, XCircle, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '../ui/dialog';
import { Label } from '../ui/label';
import RatingModal from './RatingModal';

export default function BookingRequests() {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [selectedBookingForRating, setSelectedBookingForRating] = useState<any>(null);
  const [bookingRatings, setBookingRatings] = useState<Record<string, { rating: number; review: string }>>({});

  // Mock booking requests
  const bookingRequests = [
    {
      id: 'BR001',
      modelId: 'M001',
      modelName: 'Sarah Johnson',
      event: 'Fashion Show',
      date: '2025-12-15',
      time: '18:00',
      location: 'Colombo Hilton',
      basePrice: 5000,
      status: 'pending',
      submittedAt: '2025-11-23',
      needsPayment: false
    },
    {
      id: 'BR002',
      modelId: 'M002',
      modelName: 'Emma Wilson',
      event: 'Product Launch',
      date: '2025-12-20',
      time: '19:00',
      location: 'Shangri-La Hotel',
      basePrice: 6000,
      status: 'accepted',
      submittedAt: '2025-11-20',
      needsPayment: true,
      paymentInstructions: 'Please upload payment slip after making the advance payment'
    },
    {
      id: 'BR003',
      modelId: 'M003',
      modelName: 'Lisa Anderson',
      event: 'Corporate Gala',
      date: '2025-11-25',
      time: '20:00',
      location: 'Cinnamon Grand',
      basePrice: 5500,
      status: 'payment_submitted',
      submittedAt: '2025-11-15',
      needsPayment: false,
      paymentSlipUploaded: true
    },
    {
      id: 'BR004',
      modelId: 'M001',
      modelName: 'Sarah Johnson',
      event: 'TV Commercial',
      date: '2025-11-28',
      time: '14:00',
      location: 'Studio City',
      basePrice: 5000,
      status: 'confirmed',
      submittedAt: '2025-11-10',
      confirmedAt: '2025-11-12',
      needsPayment: false,
      paymentSlipUploaded: true
    },
    {
      id: 'BR005',
      modelId: 'M004',
      modelName: 'Jennifer Lee',
      event: 'Magazine Shoot',
      date: '2025-11-15',
      time: '10:00',
      location: 'Colombo Beach',
      basePrice: 4500,
      status: 'rejected',
      submittedAt: '2025-11-08',
      rejectionReason: 'Model not available on selected date'
    },
    {
      id: 'BR006',
      modelId: 'M002',
      modelName: 'Emma Wilson',
      event: 'Wedding Photography',
      date: '2025-12-01',
      time: '16:00',
      location: 'Galle Face Hotel',
      basePrice: 7000,
      status: 'completed',
      submittedAt: '2025-11-01',
      confirmedAt: '2025-11-05',
      completedAt: '2025-12-01',
      needsPayment: false,
      paymentSlipUploaded: true
    },
    {
      id: 'BR007',
      modelId: 'M003',
      modelName: 'Lisa Anderson',
      event: 'Brand Campaign',
      date: '2025-11-20',
      time: '10:00',
      location: 'Mount Lavinia',
      basePrice: 8000,
      status: 'completed',
      submittedAt: '2025-10-25',
      confirmedAt: '2025-10-28',
      completedAt: '2025-11-20',
      needsPayment: false,
      paymentSlipUploaded: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline"><Clock className="size-3 mr-1" /> Pending Review</Badge>;
      case 'accepted':
        return <Badge className="bg-blue-600"><CheckCircle className="size-3 mr-1" /> Accepted - Payment Required</Badge>;
      case 'payment_submitted':
        return <Badge className="bg-yellow-600"><Clock className="size-3 mr-1" /> Payment Verification</Badge>;
      case 'confirmed':
        return <Badge className="bg-green-600"><CheckCircle className="size-3 mr-1" /> Confirmed</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="size-3 mr-1" /> Not Accepted</Badge>;
      case 'completed':
        return <Badge className="bg-gray-600"><CheckCircle className="size-3 mr-1" /> Completed</Badge>;
      default:
        return null;
    }
  };

  const handleUploadPayment = (requestId: string) => {
    alert(`Payment slip upload for ${requestId} - This would open a file picker`);
    // In real app, this would handle file upload
  };

  const handleRating = (requestId: string, rating: number, review: string) => {
    setBookingRatings(prevRatings => ({
      ...prevRatings,
      [requestId]: { rating, review }
    }));
    alert(`✨ Thank you for your feedback! Your ${rating}-star rating has been submitted successfully.`);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-600 text-sm mb-1">Total Requests</div>
          <div className="text-2xl">{bookingRequests.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-600 text-sm mb-1">Pending</div>
          <div className="text-2xl">{bookingRequests.filter(r => r.status === 'pending').length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-600 text-sm mb-1">Confirmed</div>
          <div className="text-2xl text-green-600">{bookingRequests.filter(r => r.status === 'confirmed').length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-600 text-sm mb-1">Awaiting Payment</div>
          <div className="text-2xl text-blue-600">{bookingRequests.filter(r => r.needsPayment).length}</div>
        </Card>
      </div>

      {/* Booking Requests List */}
      <div className="space-y-4">
        {bookingRequests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl">{request.event}</h3>
                  {getStatusBadge(request.status)}
                </div>
                <p className="text-gray-600">Request ID: {request.id} • Model: {request.modelId} ({request.modelName})</p>
                <p className="text-sm text-gray-500">Submitted: {new Date(request.submittedAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-start gap-2">
                <Calendar className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Date & Time</div>
                  <div className="text-sm">
                    {new Date(request.date).toLocaleDateString()}
                    <br />
                    {request.time}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="text-sm">{request.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Base Price</div>
                  <div className="text-sm">LKR {request.basePrice.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Status-specific actions and messages */}
            {request.status === 'pending' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                  ⏳ Your booking request is under review. Our admin team will contact you within 24 hours.
                </p>
              </div>
            )}

            {request.status === 'accepted' && request.needsPayment && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 mb-3">
                  ✓ Your request has been accepted! Please upload your payment slip to confirm the booking.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Upload className="size-4 mr-2" />
                      Upload Payment Slip
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload Payment Slip</DialogTitle>
                      <DialogDescription>
                        Please upload the payment slip to confirm your booking.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label>Payment Details</Label>
                        <div className="bg-gray-50 rounded-lg p-4 mt-2 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Booking ID:</span>
                            <span>{request.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Amount:</span>
                            <span>LKR {request.basePrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank:</span>
                            <span>Commercial Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account:</span>
                            <span>1234567890</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label>Upload Receipt/Slip</Label>
                        <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer transition-colors">
                          <Upload className="size-12 mx-auto mb-2 text-gray-400" />
                          <p>Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG, PDF up to 5MB</p>
                        </div>
                      </div>
                      <Button onClick={() => handleUploadPayment(request.id)}>
                        Submit Payment Slip
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {request.status === 'payment_submitted' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                  💳 Payment slip received. Admin team is verifying your payment. You'll receive confirmation soon.
                </p>
              </div>
            )}

            {request.status === 'confirmed' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-green-900 mb-2">
                      ✅ <strong>Booking Confirmed!</strong> Your booking has been finalized. Check your email for complete details and terms.
                    </p>
                    {request.confirmedAt && (
                      <p className="text-xs text-green-800">
                        Confirmed on: {new Date(request.confirmedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div>
                    <Button size="sm" onClick={() => {
                      setSelectedBookingForRating(request);
                      setRatingModalOpen(true);
                    }}>
                      <Star className="size-4 mr-2" />
                      Rate Model
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {request.status === 'rejected' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-900">
                  <strong>Reason:</strong> {request.rejectionReason}
                </p>
              </div>
            )}

            {request.status === 'completed' && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">
                      ✅ <strong>Event Completed!</strong> Thank you for choosing our platform.
                    </p>
                    {request.completedAt && (
                      <p className="text-xs text-gray-600 mb-3">
                        Completed on: {new Date(request.completedAt).toLocaleDateString()}
                      </p>
                    )}
                    {bookingRatings[request.id] && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`size-4 ${
                                  star <= bookingRatings[request.id].rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm">Your Rating</span>
                        </div>
                        {bookingRatings[request.id].review && (
                          <p className="text-sm text-gray-700 italic">"{bookingRatings[request.id].review}"</p>
                        )}
                      </div>
                    )}
                  </div>
                  {!bookingRatings[request.id] && (
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedBookingForRating(request);
                        setRatingModalOpen(true);
                      }}
                      className="bg-black hover:bg-gray-800"
                    >
                      <Star className="size-4 mr-2" />
                      Rate Experience
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {bookingRequests.length === 0 && (
        <Card className="p-12 text-center">
          <Calendar className="size-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl mb-2">No Booking Requests Yet</h3>
          <p className="text-gray-600 mb-6">
            Start browsing models and make your first booking!
          </p>
          <Button>Browse Models</Button>
        </Card>
      )}

      <RatingModal
        isOpen={ratingModalOpen}
        onClose={() => setRatingModalOpen(false)}
        bookingId={selectedBookingForRating?.id || ''}
        modelName={selectedBookingForRating?.modelName || ''}
        eventName={selectedBookingForRating?.event || ''}
        onSubmit={(rating, review) => handleRating(selectedBookingForRating?.id, rating, review)}
      />
    </div>
  );
}