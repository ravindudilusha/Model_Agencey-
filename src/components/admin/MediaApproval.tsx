import { useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export default function MediaApproval() {
  const [filter, setFilter] = useState('all');
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const mediaItems = [
    { id: 1, modelId: 'M001', modelName: 'Sarah Johnson', type: 'photo', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400', uploadedAt: '2025-11-23', status: 'pending' },
    { id: 2, modelId: 'M001', modelName: 'Sarah Johnson', type: 'photo', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', uploadedAt: '2025-11-23', status: 'pending' },
    { id: 3, modelId: 'M002', modelName: 'Emily Davis', type: 'video', url: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=400', uploadedAt: '2025-11-22', status: 'pending' },
    { id: 4, modelId: 'M003', modelName: 'Michael Brown', type: 'photo', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', uploadedAt: '2025-11-22', status: 'pending' },
  ];

  const handleApprove = (item: any) => {
    alert(`Approved ${item.type} from ${item.modelName}. It will now be visible on their profile.`);
  };

  const handleRejectClick = (item: any) => {
    setSelectedItem(item);
    setShowRejectDialog(true);
  };

  const handleRejectConfirm = () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a rejection reason');
      return;
    }
    alert(`Rejected ${selectedItem.type} from ${selectedItem.modelName}. Reason: ${rejectionReason}`);
    setShowRejectDialog(false);
    setSelectedItem(null);
    setRejectionReason('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Media Approval</h2>
        <Tabs value={filter} onValueChange={setFilter} className="w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems
          .filter(item => filter === 'all' || item.type === (filter === 'photos' ? 'photo' : 'video'))
          .map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-80 bg-gray-200 relative flex-shrink-0">
                <img src={item.url} alt="" className="w-full h-full object-cover" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                <Badge className="absolute top-2 right-2">{item.type}</Badge>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-2 flex-1">
                  <div className="text-sm">{item.modelName}</div>
                  <div className="text-xs text-gray-600">ID: {item.modelId}</div>
                  <div className="text-xs text-gray-500">Uploaded: {new Date(item.uploadedAt).toLocaleDateString()}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => handleApprove(item)}>
                    <Check className="size-4" />
                  </Button>
                  <Button size="sm" className="flex-1" variant="destructive" onClick={() => handleRejectClick(item)}>
                    <X className="size-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
      </div>

      {/* Rejection Dialog */}
      {showRejectDialog && selectedItem && (
        <Dialog open={true} onOpenChange={() => setShowRejectDialog(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reject Media</DialogTitle>
              <DialogDescription>
                Provide a reason for rejecting this {selectedItem.type}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                <img src={selectedItem.url} alt="" className="w-16 h-16 object-cover rounded" />
                <div>
                  <div className="text-sm">{selectedItem.modelName}</div>
                  <div className="text-xs text-gray-600">ID: {selectedItem.modelId}</div>
                  <Badge className="mt-1 text-xs">{selectedItem.type}</Badge>
                </div>
              </div>
              <div>
                <Label htmlFor="rejectionReason">Rejection Reason *</Label>
                <Textarea
                  id="rejectionReason"
                  placeholder="Enter reason for rejection..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  rows={4}
                  className="mt-2"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="destructive" onClick={handleRejectConfirm}>
                  <X className="size-4 mr-2" />
                  Confirm Rejection
                </Button>
                <Button variant="outline" onClick={() => setShowRejectDialog(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}