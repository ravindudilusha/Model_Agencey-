import { Upload, X, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';

interface MediaUploadProps {
  type: 'photos' | 'videos';
}

export default function MediaUpload({ type }: MediaUploadProps) {
  const isPhotos = type === 'photos';
  const maxCount = isPhotos ? 10 : 5;
  const currentCount = isPhotos ? 8 : 3;
  
  // Mock data
  const items = isPhotos ? [
    { id: 1, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400', status: 'approved' },
    { id: 2, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', status: 'approved' },
    { id: 3, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', status: 'approved' },
    { id: 4, url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', status: 'approved' },
    { id: 5, url: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400', status: 'pending' },
    { id: 6, url: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=400', status: 'approved' },
    { id: 7, url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400', status: 'rejected' },
    { id: 8, url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', status: 'approved' },
  ] : [
    { id: 1, url: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=400', status: 'approved', thumbnail: true },
    { id: 2, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400', status: 'pending', thumbnail: true },
    { id: 3, url: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400', status: 'approved', thumbnail: true },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-600"><CheckCircle className="size-3 mr-1" /> Approved</Badge>;
      case 'pending':
        return <Badge variant="outline"><Clock className="size-3 mr-1" /> Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="size-3 mr-1" /> Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Info Alert */}
      <Alert>
        <AlertDescription>
          <strong>Upload Guidelines:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• You can upload up to {maxCount} {isPhotos ? 'photos' : 'videos'}</li>
            <li>• All uploads require admin approval (takes up to 24 hours)</li>
            <li>• {isPhotos ? 'Photos' : 'Videos'} with inappropriate content will be rejected</li>
            <li>• Currently using: {currentCount} / {maxCount}</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Upload Section */}
      {currentCount < maxCount && (
        <Card className="p-8">
          <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-blue-600 cursor-pointer transition-colors">
            <Upload className="size-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl mb-2">Upload {isPhotos ? 'Photos' : 'Videos'}</h3>
            <p className="text-gray-600 mb-4">
              Click to select or drag and drop your files here
            </p>
            <p className="text-sm text-gray-500">
              {isPhotos ? 'JPG, PNG up to 10MB each' : 'MP4, MOV up to 100MB each'}
            </p>
            <Button className="mt-4">Select Files</Button>
          </div>
        </Card>
      )}

      {currentCount >= maxCount && (
        <Alert>
          <AlertDescription>
            You have reached the maximum limit of {maxCount} {isPhotos ? 'photos' : 'videos'}. Delete an existing item to upload a new one.
          </AlertDescription>
        </Alert>
      )}

      {/* Gallery */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">My {isPhotos ? 'Photos' : 'Videos'}</h2>
        <div className={`grid ${isPhotos ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-4`}>
          {items.map((item) => (
            <div key={item.id} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={item.url}
                  alt={`${type} ${item.id}`}
                  className="w-full h-full object-cover"
                />
                {!isPhotos && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute top-2 right-2">
                {getStatusBadge(item.status)}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button
                  variant="destructive"
                  size="sm"
                  className="gap-2"
                >
                  <X className="size-4" />
                  Delete
                </Button>
              </div>
              {item.status === 'rejected' && (
                <div className="mt-2">
                  <p className="text-xs text-red-600">
                    Reason: Content does not meet guidelines
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Pending Approvals */}
      {items.some(item => item.status === 'pending') && (
        <Card className="p-6 bg-yellow-50 border-yellow-200">
          <div className="flex items-start gap-3">
            <Clock className="size-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="mb-1">Pending Admin Approval</h3>
              <p className="text-sm text-gray-700">
                You have {items.filter(i => i.status === 'pending').length} {isPhotos ? 'photo(s)' : 'video(s)'} waiting for admin review. This usually takes up to 24 hours.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
