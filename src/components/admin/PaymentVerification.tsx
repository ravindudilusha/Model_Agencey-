import { useState } from 'react';
import { Check, X, Eye, FileText } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function PaymentVerification() {
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [rejectPayment, setRejectPayment] = useState<any>(null);
  const [rejectReason, setRejectReason] = useState('');

  const payments = [
    {
      id: 'PAY001',
      bookingId: 'BR002',
      customerName: 'John Smith',
      customerCompany: 'ABC Corporation',
      modelId: 'M001',
      event: 'Fashion Show',
      amount: 5000,
      paymentSlip: 'payment_slip_booking_001.jpg',
      uploadedAt: '2025-11-23',
      status: 'pending'
    },
    {
      id: 'PAY002',
      bookingId: 'BR003',
      customerName: 'Jane Doe',
      customerCompany: 'XYZ Events',
      modelId: 'M002',
      event: 'Product Launch',
      amount: 6000,
      paymentSlip: 'payment_slip_booking_002.jpg',
      uploadedAt: '2025-11-22',
      status: 'pending'
    }
  ];

  const handleApprove = (payment: any) => {
    alert(`✓ Payment ${payment.id} has been approved successfully. Booking confirmed and confirmation emails sent to customer and model.`);
    setSelectedPayment(null);
  };

  const handleReject = (payment: any) => {
    setRejectPayment(payment);
    setSelectedPayment(null);
  };

  const confirmReject = () => {
    if (rejectReason.trim()) {
      alert(`✓ Payment ${rejectPayment.id} has been rejected. Customer will be notified with the following reason: "${rejectReason}"`);
      setRejectPayment(null);
      setRejectReason('');
    } else {
      alert('Please enter a rejection reason.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Payment Verification</h2>

      <div className="space-y-4">
        {payments.map((payment) => (
          <Card key={payment.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">{payment.event}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>Payment ID: {payment.id}</span>
                  <span>•</span>
                  <span>Booking: {payment.bookingId}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Uploaded: {new Date(payment.uploadedAt).toLocaleDateString()}</p>
              </div>
              <Badge variant="outline">{payment.status}</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Customer</div>
                <div className="text-sm">{payment.customerName}</div>
                <div className="text-sm">{payment.customerCompany}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Model</div>
                <div className="text-sm">ID: {payment.modelId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Amount</div>
                <div className="text-lg">LKR {payment.amount.toLocaleString()}</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-gray-600" />
                <span className="text-sm">Payment Slip: {payment.paymentSlip}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => setSelectedPayment(payment)}>
                <Eye className="size-4 mr-2" />
                View Payment Slip
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApprove(payment)}>
                <Check className="size-4 mr-2" />
                Approve Payment
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleReject(payment)}>
                <X className="size-4 mr-2" />
                Reject Payment
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Payment Slip Modal */}
      {selectedPayment && (
        <Dialog open={true} onOpenChange={() => setSelectedPayment(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Payment Verification - {selectedPayment.id}</DialogTitle>
              <DialogDescription>Review and verify the payment slip for the booking.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="text-gray-600">Booking ID:</span>
                  <div>{selectedPayment.bookingId}</div>
                </div>
                <div>
                  <span className="text-gray-600">Amount:</span>
                  <div>LKR {selectedPayment.amount.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-gray-600">Customer:</span>
                  <div>{selectedPayment.customerName}</div>
                </div>
                <div>
                  <span className="text-gray-600">Company:</span>
                  <div>{selectedPayment.customerCompany}</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2">Payment Slip</h4>
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Payment Slip Image: {selectedPayment.paymentSlip}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleApprove(selectedPayment)}>
                  <Check className="size-4 mr-2" />
                  Approve
                </Button>
                <Button variant="destructive" onClick={() => handleReject(selectedPayment)}>
                  <X className="size-4 mr-2" />
                  Reject
                </Button>
                <Button variant="outline" onClick={() => setSelectedPayment(null)}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Reject Payment Modal */}
      {rejectPayment && (
        <Dialog open={true} onOpenChange={() => {
          setRejectPayment(null);
          setRejectReason('');
        }}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Reject Payment - {rejectPayment.id}</DialogTitle>
              <DialogDescription>Please provide a reason for rejecting this payment. The customer will be notified.</DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 pt-4">
              {/* Payment Details Summary */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span>{rejectPayment.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer:</span>
                  <span>{rejectPayment.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span>LKR {rejectPayment.amount.toLocaleString()}</span>
                </div>
              </div>

              {/* Rejection Reason */}
              <div>
                <Label htmlFor="rejectReason" className="mb-2 block">Rejection Reason *</Label>
                <Textarea
                  id="rejectReason"
                  placeholder="Enter the reason for rejecting this payment..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">This reason will be sent to the customer via email.</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setRejectPayment(null);
                    setRejectReason('');
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={confirmReject}
                  disabled={!rejectReason.trim()}
                >
                  <X className="size-4 mr-2" />
                  Confirm Rejection
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}