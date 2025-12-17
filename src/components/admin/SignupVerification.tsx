import { useState } from 'react';
import { Eye, Check, X, FileText } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export default function SignupVerification() {
  const [selectedSignup, setSelectedSignup] = useState<any>(null);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const signups = [
    {
      id: 'SIG001',
      referenceNumber: 'REF2025001',
      name: 'Sarah Johnson',
      idNumber: '920123456V',
      email: 'sarah@example.com',
      contact: '+94 77 123 4567',
      plan: 'Professional',
      planPrice: 199,
      paymentSlip: 'payment_slip_001.jpg',
      submittedAt: '2025-11-23',
      status: 'pending'
    },
    {
      id: 'SIG002',
      referenceNumber: 'REF2025002',
      name: 'Michael Brown',
      idNumber: '880445789V',
      email: 'michael@example.com',
      contact: '+94 71 234 5678',
      plan: 'Basic',
      planPrice: 99,
      paymentSlip: 'payment_slip_002.jpg',
      submittedAt: '2025-11-22',
      status: 'pending'
    }
  ];

  const handleApprove = (signup: any) => {
    const username = signup.idNumber;
    const tempPassword = 'Temp' + Math.random().toString(36).substring(2, 8);
    alert(`Signup approved!\nUsername: ${username}\nTemporary Password: ${tempPassword}\n\nCredentials will be emailed to: ${signup.email}`);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason');
      return;
    }
    alert(`Rejected signup ${selectedSignup?.id}. Rejection email will be sent with reason: ${rejectionReason}`);
    setShowRejectDialog(false);
    setRejectionReason('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Signup Verification</h2>

      <div className="space-y-4">
        {signups.map((signup) => (
          <Card key={signup.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">{signup.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>Ref: {signup.referenceNumber}</span>
                  <span>•</span>
                  <span>NIC: {signup.idNumber}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Submitted: {new Date(signup.submittedAt).toLocaleDateString()}</p>
              </div>
              <Badge>{signup.status}</Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Contact</div>
                <div className="text-sm">{signup.contact}</div>
                <div className="text-sm">{signup.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Plan Selected</div>
                <div className="text-sm">{signup.plan}</div>
                <div className="text-sm">${signup.planPrice}/year</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Payment</div>
                <div className="text-sm flex items-center gap-2">
                  <FileText className="size-4" />
                  Payment slip uploaded
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Reference Match</div>
                <Badge className="bg-green-600">Verified</Badge>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => setSelectedSignup(signup)}>
                <Eye className="size-4 mr-2" />
                View Details & Documents
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApprove(signup)}>
                <Check className="size-4 mr-2" />
                Approve & Send Credentials
              </Button>
              <Button size="sm" variant="destructive" onClick={() => { setSelectedSignup(signup); setShowRejectDialog(true); }}>
                <X className="size-4 mr-2" />
                Reject
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Details Modal */}
      {selectedSignup && !showRejectDialog && (
        <Dialog open={true} onOpenChange={() => setSelectedSignup(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Signup Verification - {selectedSignup.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="mb-3 pb-2 border-b">Payment Slip</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Payment Slip Image: {selectedSignup.paymentSlip}</p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 pb-2 border-b">ID Documents</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">ID Front</p>
                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">ID Back</p>
                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 pb-2 border-b">Professional Photos</h3>
                <div className="grid grid-cols-4 gap-3">
                  {['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
                    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
                    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800'].map((photo, i) => (
                    <div key={i} className="aspect-[3/4] relative group">
                      <img 
                        src={photo} 
                        alt="" 
                        className="w-full h-full object-cover rounded border border-gray-300 group-hover:border-black transition-colors cursor-pointer" 
                      />
                      <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded text-xs">
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleApprove(selectedSignup)}>
                  <Check className="size-4 mr-2" />
                  Approve
                </Button>
                <Button variant="destructive" onClick={() => setShowRejectDialog(true)}>
                  <X className="size-4 mr-2" />
                  Reject
                </Button>
                <Button variant="outline" onClick={() => setSelectedSignup(null)}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Rejection Dialog */}
      {showRejectDialog && (
        <Dialog open={true} onOpenChange={() => setShowRejectDialog(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reject Signup</DialogTitle>
              <DialogDescription>Are you sure you want to reject this signup?</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <p>Reject signup from <strong>{selectedSignup?.name}</strong>?</p>
              <div>
                <Label htmlFor="rejectionReason">Reason *</Label>
                <Textarea
                  id="rejectionReason"
                  placeholder="Enter reason..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex gap-3">
                <Button variant="destructive" onClick={handleReject}>Confirm Rejection</Button>
                <Button variant="outline" onClick={() => setShowRejectDialog(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}