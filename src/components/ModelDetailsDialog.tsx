import { X, Star, Lock, Info, Play, Calendar as CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ModelDetailsDialogProps {
  model: any;
  isLoggedIn: boolean;
  onClose: () => void;
  onBook: () => void;
}

export default function ModelDetailsDialog({ 
  model, 
  isLoggedIn,
  onClose,
  onBook
}: ModelDetailsDialogProps) {
  if (!model) return null;

  // Mock data for locked content
  const totalPhotos = 6;
  const visiblePhotos = isLoggedIn ? totalPhotos : 2;
  const lockedPhotos = totalPhotos - visiblePhotos;

  // Mock video data
  const videos = [
    'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=400',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400',
  ];

  // Mock booked dates
  const bookedDates = ['Nov 15', 'Nov 20', 'Nov 23', 'Dec 3'];

  // Mock reviews
  const reviews = [
    {
      client: 'XYZ Events',
      rating: 5,
      comment: 'Outstanding professionalism and talent!'
    }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0" aria-describedby={undefined}>
        <DialogHeader className="sr-only">
          <DialogTitle>Model {model.id} Details</DialogTitle>
          <DialogDescription>
            View detailed information about Model {model.id}
          </DialogDescription>
        </DialogHeader>
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 pb-4 flex items-start justify-between z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl">Model ID: {model.id}</h2>
              <Badge className="bg-black text-white px-3 py-1">
                {model.gender}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{model.rating}</span>
                <span className="text-sm text-gray-500">({model.reviews} reviews)</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Base Price: </span>
                <span className="text-lg font-semibold">LKR {model.basePrice?.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="size-8 p-0"
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Limited Access Warning */}
        {!isLoggedIn && (
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mx-6 mt-4">
            <div className="flex items-start gap-3">
              <Info className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-orange-800">
                  <strong>Limited Access:</strong> You're viewing limited information. Register or login to see full profile, all photos, videos, and availability calendar.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Portfolio Photos */}
          <div>
            <h3 className="text-lg mb-3">Portfolio Photos</h3>
            <div className="grid grid-cols-3 gap-3">
              {model.photos?.slice(0, visiblePhotos).map((photo: string, index: number) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={photo} 
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Locked Photos Indicator */}
              {!isLoggedIn && lockedPhotos > 0 && (
                <div className="aspect-square rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                  <Lock className="size-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">+{lockedPhotos} more photos</p>
                  <p className="text-xs text-gray-500">Login to view all</p>
                </div>
              )}
            </div>
          </div>

          {/* Videos Section - Only visible when logged in */}
          {isLoggedIn && (
            <div>
              <h3 className="text-lg mb-3">Videos</h3>
              <div className="grid grid-cols-3 gap-3">
                {videos.map((video, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden bg-black relative group cursor-pointer">
                    <img 
                      src={video}
                      alt={`Video thumbnail ${index + 1}`}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
                        <Play className="size-6 text-black fill-black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabbed Information */}
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="physical">Physical Attributes</TabsTrigger>
              <TabsTrigger value="professional">Professional Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="physical" className="mt-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Height</span>
                  <span className="font-medium">{model.height} cm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Skin Color</span>
                  <span className="font-medium">{model.skinColor}</span>
                </div>
                {isLoggedIn && (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Chest</span>
                      <span className="font-medium">34 inches</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Hair Color</span>
                      <span className="font-medium">{model.hairColor}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Waist</span>
                      <span className="font-medium">26 inches</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Eye Color</span>
                      <span className="font-medium">Brown</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Shoulder</span>
                      <span className="font-medium">38 inches</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Shoe Size</span>
                      <span className="font-medium">7</span>
                    </div>
                  </>
                )}
                {!isLoggedIn && (
                  <div className="col-span-2 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <Lock className="size-10 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600">Login to view complete physical details</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="professional" className="mt-4">
              {isLoggedIn ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{model.experience}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Specialties</p>
                    <div className="flex gap-2">
                      {model.specialties?.map((specialty: string) => (
                        <Badge key={specialty} variant="outline" className="text-xs px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Talents</p>
                    <p className="text-sm">Professional dancing, runway experience, commercial modeling</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Bio</p>
                    <p className="text-sm">Professional model with extensive experience in runway, commercial, and editorial work. Passionate about fashion and bringing creative visions to life.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <Lock className="size-10 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">Login to view professional details</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Availability Calendar - Only visible when logged in */}
          {isLoggedIn && (
            <div>
              <h3 className="text-lg mb-3">Availability Calendar</h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="size-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="size-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Booked dates in November-December 2025:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bookedDates.map((date) => (
                    <Badge key={date} className="bg-red-500 text-white text-xs px-3 py-1">
                      {date}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recent Reviews - Only visible when logged in */}
          {isLoggedIn && (
            <div>
              <h3 className="text-lg mb-3">Recent Reviews</h3>
              <div className="space-y-3">
                {reviews.map((review, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.client}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Locked sections for non-logged users */}
          {!isLoggedIn && (
            <div className="space-y-4">
              {/* Videos Section - Locked */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg flex items-center gap-2">
                    <Play className="size-5" />
                    Video Portfolio
                  </h3>
                  <Lock className="size-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">3 professional videos available after login</p>
              </div>

              {/* Availability Calendar - Locked */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg flex items-center gap-2">
                    <CalendarIcon className="size-5" />
                    Availability Calendar
                  </h3>
                  <Lock className="size-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Check real-time availability after login</p>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          {!isLoggedIn ? (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 text-white">
              <h3 className="text-xl mb-2">Unlock Full Profile</h3>
              <p className="text-sm text-gray-300 mb-4">
                Register or login to view complete portfolio, videos, availability and send booking requests
              </p>
              <Button 
                className="w-full bg-white text-black hover:bg-gray-200"
                onClick={onBook}
              >
                Login to View Full Details
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button className="flex-1 bg-black hover:bg-gray-800" onClick={onBook}>
                Book Now
              </Button>
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}