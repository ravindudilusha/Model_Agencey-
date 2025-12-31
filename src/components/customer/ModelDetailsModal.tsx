import { X, Star, Calendar, Play, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';

interface ModelDetailsModalProps {
  model: any;
  isLoggedIn: boolean;
  onClose: () => void;
  onBook: () => void;
}

export default function ModelDetailsModal({ model, isLoggedIn, onClose, onBook }: ModelDetailsModalProps) {
  // Mock additional photos and videos
  const allPhotos = [
    ...model.photos,
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
    'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400'
  ];

  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=400' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400' }
  ];

  const bookedDates = ['2025-11-15', '2025-11-20', '2025-11-25', '2025-12-05'];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="w-screen max-w-none h-screen max-h-screen !top-0 !left-0 !translate-x-0 !translate-y-0 rounded-none border-none shadow-none p-0 m-0 overflow-y-auto">
        <DialogTitle className="sr-only">Model Details - {model.id}</DialogTitle>
        <DialogDescription className="sr-only">
          View complete profile, portfolio, and booking information for Model {model.id}
        </DialogDescription>
        
        <div className="min-h-screen p-8 pb-12">
          <div className="max-w-[1600px] mx-auto space-y-6 pt-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl mb-2">Model ID: {model.id}</h2>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="size-5 fill-yellow-500 text-yellow-500" />
                    <span className="text-lg">{model.rating}</span>
                    <span className="text-gray-600">({model.reviews} reviews)</span>
                  </div>
                  <Badge>{model.gender}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Base Price</div>
                <div className="text-2xl">LKR {model.basePrice.toLocaleString()}</div>
              </div>
            </div>

            {!isLoggedIn && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                <Lock className="size-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-yellow-900">
                    <strong>Limited Access:</strong> You're viewing limited information. Register or login to see full profile, all photos, videos, and availability calendar.
                  </p>
                </div>
              </div>
            )}

            {/* Photo Gallery */}
            <div>
              <h3 className="text-xl mb-3">Portfolio Photos</h3>
              <div className="grid grid-cols-4 gap-3">
                {(isLoggedIn ? allPhotos : model.photos.slice(0, 2)).map((photo: string, index: number) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img src={photo} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                {!isLoggedIn && (
                  <div className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center col-span-2">
                    <div className="text-center">
                      <Lock className="size-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600">+8 more photos</p>
                      <p className="text-xs text-gray-500">Login to view all</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Gallery */}
            {isLoggedIn && (
              <div>
                <h3 className="text-xl mb-3">Videos</h3>
                <div className="grid grid-cols-3 gap-3">
                  {videos.map((video) => (
                    <div key={video.id} className="aspect-video rounded-lg overflow-hidden bg-gray-100 relative group cursor-pointer">
                      <img src={video.thumbnail} alt={`Video ${video.id}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div className="size-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="size-6 text-black ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl mb-3">Physical Attributes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Height</span>
                    <span>{model.height} cm</span>
                  </div>
                  {isLoggedIn && (
                    <>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Chest</span>
                        <span>34 inches</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Waist</span>
                        <span>26 inches</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Shoulder</span>
                        <span>38 inches</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Shoe Size</span>
                        <span>7</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Skin Color</span>
                    <span>{model.skinColor}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Hair Color</span>
                    <span>{model.hairColor}</span>
                  </div>
                  {isLoggedIn && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Eye Color</span>
                      <span>Brown</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3">Professional Info</h3>
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Experience</div>
                      <div>{model.experience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Specialties</div>
                      <div className="flex flex-wrap gap-2">
                        {model.specialties.map((spec: string) => (
                          <Badge key={spec} variant="outline">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Talents</div>
                      <p>Professional dancing, runway experience, commercial modeling</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Bio</div>
                      <p className="text-sm">
                        Professional model with extensive experience in runway, commercial, and editorial work. 
                        Passionate about fashion and bringing creative visions to life.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Lock className="size-8 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-600">Login to view professional details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Availability Calendar */}
            {isLoggedIn && (
              <div>
                <h3 className="text-xl mb-3">Availability Calendar</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-4 rounded bg-red-500"></div>
                      <span>Booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 rounded bg-green-500"></div>
                      <span>Available</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <Calendar className="size-4 inline mr-1" />
                    Booked dates in November-December 2025:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bookedDates.map(date => (
                      <Badge key={date} variant="destructive">
                        {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            {isLoggedIn && model.reviews > 0 && (
              <div>
                <h3 className="text-xl mb-3">Recent Reviews</h3>
                <div className="space-y-3">
                  {[
                    { name: 'XYZ Events', rating: 5, comment: 'Professional and punctual. Great to work with!', date: '2 weeks ago' },
                    { name: 'Fashion Hub', rating: 5, comment: 'Exceeded expectations. Highly recommend!', date: '1 month ago' },
                    { name: 'Elite Productions', rating: 4, comment: 'Very good work ethic and professionalism.', date: '2 months ago' }
                  ].map((review, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span>{review.name}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">{review.comment}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t">
              {isLoggedIn ? (
                <>
                  <Button size="lg" className="flex-1" onClick={onBook}>
                    Book This Model
                  </Button>
                  <Button size="lg" variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" className="flex-1" onClick={() => alert('Please login or register to book')}>
                    Login to Book
                  </Button>
                  <Button size="lg" variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}