import { useState } from 'react';
import { Eye, Check, X, Search } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export default function ModelerRequests() {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  // Mock requests data
  const requests = [
    {
      id: 'REQ001',
      name: 'Sarah Johnson',
      idNumber: '920123456V',
      age: 28,
      gender: 'Female',
      email: 'sarah@example.com',
      contact: '+94 77 123 4567',
      whatsapp: '+94 77 123 4567',
      height: 175,
      weight: 58,
      skinColor: 'Fair',
      hairColor: 'Black',
      experience: true,
      trainingPlace: 'Fashion Academy Colombo',
      interests: ['Runway', 'Commercial'],
      submittedAt: '2025-11-23',
      status: 'pending'
    },
    {
      id: 'REQ002',
      name: 'Michael Brown',
      idNumber: '880445789V',
      age: 32,
      gender: 'Male',
      email: 'michael@example.com',
      contact: '+94 71 234 5678',
      whatsapp: '+94 71 234 5678',
      height: 185,
      weight: 75,
      skinColor: 'Medium',
      hairColor: 'Brown',
      experience: false,
      interests: ['Commercial', 'Fitness'],
      submittedAt: '2025-11-22',
      status: 'pending'
    }
  ];

  const handleAccept = (request: any) => {
    // In real app, this would send acceptance email with reference number
    alert(`Accepted request ${request.id}. Email will be sent to ${request.email} with reference number and payment instructions.`);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason');
      return;
    }
    alert(`Rejected request ${selectedRequest?.id}. Rejection email will be sent with reason: ${rejectionReason}`);
    setShowRejectDialog(false);
    setRejectionReason('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Modeler Requests</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input placeholder="Search requests..." className="pl-10 w-64" />
          </div>
          <select className="h-10 px-3 rounded-md border border-gray-300">
            <option>All Status</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">{request.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>ID: {request.id}</span>
                  <span>•</span>
                  <span>NIC: {request.idNumber}</span>
                  <span>•</span>
                  <span>{request.age} years old</span>
                  <span>•</span>
                  <span>{request.gender}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Submitted: {new Date(request.submittedAt).toLocaleDateString()}</p>
              </div>
              <Badge>{request.status}</Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Contact</div>
                <div className="text-sm">{request.contact}</div>
                <div className="text-sm">{request.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Physical</div>
                <div className="text-sm">Height: {request.height}cm</div>
                <div className="text-sm">Weight: {request.weight}kg</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Features</div>
                <div className="text-sm">Skin: {request.skinColor}</div>
                <div className="text-sm">Hair: {request.hairColor}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Experience</div>
                <div className="text-sm">{request.experience ? 'Yes' : 'No'}</div>
                {request.trainingPlace && (
                  <div className="text-sm">{request.trainingPlace}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1">Interests</div>
              <div className="flex flex-wrap gap-2">
                {request.interests.map((interest: string) => (
                  <Badge key={interest} variant="outline">{interest}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedRequest(request)}
              >
                <Eye className="size-4 mr-2" />
                View Full Details
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleAccept(request)}
              >
                <Check className="size-4 mr-2" />
                Accept
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  setSelectedRequest(request);
                  setShowRejectDialog(true);
                }}
              >
                <X className="size-4 mr-2" />
                Reject
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Details Modal */}
      {selectedRequest && !showRejectDialog && (
        <Dialog open={true} onOpenChange={() => setSelectedRequest(null)}>
          <DialogContent className="w-screen h-screen max-w-[100vw] flex flex-col p-0 rounded-none m-0 !max-w-none" aria-describedby={undefined}>
            {/* Header */}
            <DialogHeader className="px-16 py-6 border-b-2 flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <DialogTitle className="text-4xl">{selectedRequest.name}</DialogTitle>
                    <Badge className="bg-yellow-100 text-yellow-800 border-2 border-yellow-600 text-base px-4 py-1.5">
                      {selectedRequest.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-x-16 gap-y-2 text-base">
                    <div className="flex gap-2">
                      <span className="text-gray-500">Request ID:</span>
                      <span>{selectedRequest.id}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500">National ID:</span>
                      <span>{selectedRequest.idNumber}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500">Age & Gender:</span>
                      <span>{selectedRequest.age} years, {selectedRequest.gender}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500">Submitted:</span>
                      <span>{new Date(selectedRequest.submittedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogHeader>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              <div className="px-16 py-10">
                <div className="grid grid-cols-3 gap-16 mb-12">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl pb-2 border-b-2 border-black mb-4">Contact Information</h3>
                    <div>
                      <div className="text-xs text-gray-500 uppercase mb-1">Email Address</div>
                      <div className="text-base">{selectedRequest.email}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase mb-1">Phone Number</div>
                      <div className="text-base">{selectedRequest.contact}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase mb-1">WhatsApp Number</div>
                      <div className="text-base">{selectedRequest.whatsapp}</div>
                    </div>
                  </div>

                  {/* Physical Attributes */}
                  <div className="space-y-4">
                    <h3 className="text-xl pb-2 border-b-2 border-black mb-4">Physical Attributes</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 uppercase mb-1">Height</div>
                        <div className="text-2xl">{selectedRequest.height} <span className="text-sm text-gray-500">cm</span></div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase mb-1">Weight</div>
                        <div className="text-2xl">{selectedRequest.weight} <span className="text-sm text-gray-500">kg</span></div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase mb-1">Skin Color</div>
                        <div className="text-base">{selectedRequest.skinColor}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase mb-1">Hair Color</div>
                        <div className="text-base">{selectedRequest.hairColor}</div>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Interests */}
                  <div className="space-y-4">
                    <h3 className="text-xl pb-2 border-b-2 border-black mb-4">Experience & Interests</h3>
                    <div>
                      <div className="text-xs text-gray-500 uppercase mb-1">Modeling Experience</div>
                      <div className="text-base">{selectedRequest.experience ? 'Yes' : 'No'}</div>
                      {selectedRequest.trainingPlace && (
                        <div className="text-sm text-gray-600 mt-1">{selectedRequest.trainingPlace}</div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase mb-2">Areas of Interest</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedRequest.interests.map((interest: string) => (
                          <Badge key={interest} variant="outline" className="text-xs border-black">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Portfolio */}
                <div className="mb-12">
                  <h3 className="text-xl pb-2 border-b-2 border-black mb-6">Professional Portfolio Photos</h3>
                  <div className="grid grid-cols-4 gap-8">
                    {['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
                      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
                      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800'].map((photo, i) => (
                      <div key={i} className="aspect-[3/4] relative group">
                        <img 
                          src={photo} 
                          alt="" 
                          className="w-full h-full object-cover rounded-lg border-2 border-gray-300 group-hover:border-black transition-colors cursor-pointer" 
                        />
                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
                          Photo {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ID Verification Documents */}
                <div>
                  <h3 className="text-xl pb-2 border-b-2 border-black mb-6">ID Verification Documents (National ID Card)</h3>
                  <div className="grid grid-cols-2 gap-12 max-w-6xl">
                    <div>
                      <div className="text-base mb-3 flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-600"></div>
                        <span>Front Side</span>
                      </div>
                      <div className="aspect-[16/10] bg-gray-100 rounded-lg border-2 border-gray-300 flex flex-col items-center justify-center">
                        <div className="text-6xl mb-2">🪪</div>
                        <span className="text-sm text-gray-500">National ID - Front</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-base mb-3 flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-600"></div>
                        <span>Back Side</span>
                      </div>
                      <div className="aspect-[16/10] bg-gray-100 rounded-lg border-2 border-gray-300 flex flex-col items-center justify-center">
                        <div className="text-6xl mb-2">🪪</div>
                        <span className="text-sm text-gray-500">National ID - Back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Fixed at Bottom */}
            <div className="flex gap-5 px-16 py-6 border-t-2 flex-shrink-0 bg-gray-50">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex-1 h-14 text-lg"
                onClick={() => handleAccept(selectedRequest)}
              >
                <Check className="size-5 mr-2" />
                Accept Request
              </Button>
              <Button
                variant="destructive"
                className="flex-1 h-14 text-lg"
                onClick={() => setShowRejectDialog(true)}
              >
                <X className="size-5 mr-2" />
                Reject Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Rejection Dialog */}
      {showRejectDialog && selectedRequest && (
        <Dialog open={true} onOpenChange={() => setShowRejectDialog(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reject Request</DialogTitle>
              <DialogDescription>Are you sure you want to reject the request from <strong>{selectedRequest.name}</strong>?</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="rejectionReason">Reason for Rejection *</Label>
                <Textarea
                  id="rejectionReason"
                  placeholder="Enter reason that will be sent to the applicant..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex gap-3">
                <Button variant="destructive" onClick={handleReject}>
                  Confirm Rejection
                </Button>
                <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}