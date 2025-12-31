import { useState } from 'react';
import { Search, Filter, Star, Lock, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import ModelDetailsDialog from '../ModelDetailsDialog';
import BookingForm from './BookingForm';

interface BrowseModelersProps {
  isLoggedIn: boolean;
}

export default function BrowseModelers({ isLoggedIn }: BrowseModelersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'super' | 'experienced' | 'upcoming'>('all');
  const [filters, setFilters] = useState({
    gender: 'all',
    minHeight: '',
    maxHeight: '',
    skinColor: 'all'
  });

  // Mock model data
  const models = [
    {
      id: 'M001',
      photos: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400'
      ],
      height: 175,
      skinColor: 'Fair',
      hairColor: 'Black',
      basePrice: 5000,
      rating: 4.8,
      reviews: 15,
      gender: 'Female',
      experience: '5 years',
      specialties: ['Runway', 'Commercial']
    },
    {
      id: 'M002',
      photos: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400'
      ],
      height: 178,
      skinColor: 'Medium',
      hairColor: 'Brown',
      basePrice: 6000,
      rating: 4.9,
      reviews: 23,
      gender: 'Female',
      experience: '7 years',
      specialties: ['Fashion', 'Editorial']
    },
    {
      id: 'M003',
      photos: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
      ],
      height: 185,
      skinColor: 'Fair',
      hairColor: 'Black',
      basePrice: 5500,
      rating: 4.7,
      reviews: 18,
      gender: 'Male',
      experience: '4 years',
      specialties: ['Commercial', 'Fitness']
    },
    {
      id: 'M004',
      photos: [
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400',
        'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=400'
      ],
      height: 172,
      skinColor: 'Dark',
      hairColor: 'Black',
      basePrice: 4500,
      rating: 4.6,
      reviews: 12,
      gender: 'Female',
      experience: '3 years',
      specialties: ['Runway', 'Fit Modeling']
    },
    {
      id: 'M005',
      photos: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      ],
      height: 180,
      skinColor: 'Fair',
      hairColor: 'Blonde',
      basePrice: 7000,
      rating: 4.9,
      reviews: 28,
      gender: 'Female',
      experience: '8 years',
      specialties: ['Fashion', 'Commercial', 'Runway']
    },
    {
      id: 'M006',
      photos: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      ],
      height: 182,
      skinColor: 'Medium',
      hairColor: 'Brown',
      basePrice: 5800,
      rating: 4.8,
      reviews: 20,
      gender: 'Male',
      experience: '6 years',
      specialties: ['Commercial', 'Fashion']
    },
    {
      id: 'M007',
      photos: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400'
      ],
      height: 168,
      skinColor: 'Fair',
      hairColor: 'Red',
      basePrice: 4000,
      rating: 4.3,
      reviews: 8,
      gender: 'Female',
      experience: '2 years',
      specialties: ['Commercial', 'Social Media']
    },
    {
      id: 'M008',
      photos: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
        'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400'
      ],
      height: 188,
      skinColor: 'Fair',
      hairColor: 'Brown',
      basePrice: 3800,
      rating: 4.2,
      reviews: 5,
      gender: 'Male',
      experience: '1 year',
      specialties: ['Fitness', 'Commercial']
    }
  ];

  // Categorize models based on rating and experience
  const getModelCategory = (model: any) => {
    const experienceYears = parseInt(model.experience);
    if (model.rating >= 4.8 && experienceYears >= 5) return 'super';
    if (model.rating >= 4.5 && experienceYears >= 3) return 'experienced';
    return 'upcoming';
  };

  // Filter models based on category
  const filteredModels = models.filter((model) => {
    if (categoryFilter !== 'all') {
      const category = getModelCategory(model);
      if (category !== categoryFilter) return false;
    }
    if (filters.gender !== 'all' && model.gender !== filters.gender) return false;
    return true;
  });

  // Count models in each category
  const categoryCounts = {
    all: models.length,
    super: models.filter(m => getModelCategory(m) === 'super').length,
    experienced: models.filter(m => getModelCategory(m) === 'experienced').length,
    upcoming: models.filter(m => getModelCategory(m) === 'upcoming').length
  };

  const handleBookNow = (model: any) => {
    setSelectedModel(model);
    setShowBookingForm(true);
  };

  const handleViewDetails = (model: any) => {
    setSelectedModel(model);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input
              placeholder="Search by ID, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              className="h-10 px-3 rounded-md border border-gray-300"
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            >
              <option value="all">All Genders</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <Button variant="outline">
              <Filter className="size-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Info Banner for Non-Logged In Users */}
      {!isLoggedIn && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <Lock className="size-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-blue-900">
                <strong>Limited View:</strong> Register or login to see full model profiles, all photos, videos, and booking calendars.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant={categoryFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setCategoryFilter('all')}
          className={categoryFilter === 'all' ? 'bg-black text-white hover:bg-gray-800' : ''}
        >
          All Models
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-black">
            {categoryCounts.all}
          </Badge>
        </Button>
        <Button
          variant={categoryFilter === 'super' ? 'default' : 'outline'}
          onClick={() => setCategoryFilter('super')}
          className={categoryFilter === 'super' ? 'bg-black text-white hover:bg-gray-800' : ''}
        >
          SUPER
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-black">
            {categoryCounts.super}
          </Badge>
        </Button>
        <Button
          variant={categoryFilter === 'experienced' ? 'default' : 'outline'}
          onClick={() => setCategoryFilter('experienced')}
          className={categoryFilter === 'experienced' ? 'bg-black text-white hover:bg-gray-800' : ''}
        >
          EXPERIENCED
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-black">
            {categoryCounts.experienced}
          </Badge>
        </Button>
        <Button
          variant={categoryFilter === 'upcoming' ? 'default' : 'outline'}
          onClick={() => setCategoryFilter('upcoming')}
          className={categoryFilter === 'upcoming' ? 'bg-black text-white hover:bg-gray-800' : ''}
        >
          UPCOMING
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-black">
            {categoryCounts.upcoming}
          </Badge>
        </Button>
      </div>

      {/* Models Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Model Photo */}
            <div className="relative aspect-[3/4] bg-gray-200">
              <img
                src={model.photos[0]}
                alt={`Model ${model.id}`}
                className="w-full h-full object-cover"
              />
              {!isLoggedIn && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge className="bg-white text-black">
                    <Lock className="size-3 mr-1" />
                    Login to view more
                  </Badge>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <Badge className="bg-white text-black gap-1">
                  <Star className="size-3 fill-yellow-500 text-yellow-500" />
                  {model.rating}
                </Badge>
              </div>
            </div>

            {/* Model Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg">Model ID: {model.id}</h3>
                <Badge variant="outline">{model.gender}</Badge>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span>{model.height} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skin Color:</span>
                  <span>{model.skinColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hair Color:</span>
                  <span>{model.hairColor}</span>
                </div>
                {isLoggedIn && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span>{model.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-2">
                      {model.specialties.map((spec: string) => (
                        <Badge key={spec} variant="outline" className="text-xs">{spec}</Badge>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleViewDetails(model)}
                >
                  <Eye className="size-4 mr-2" />
                  View {isLoggedIn ? 'Full Profile' : 'Details'}
                </Button>
                {isLoggedIn ? (
                  <Button 
                    className="flex-1"
                    onClick={() => handleBookNow(model)}
                  >
                    Book Now
                  </Button>
                ) : (
                  <Button 
                    className="flex-1"
                    onClick={() => alert('Please login or register to book models')}
                  >
                    Book Now
                  </Button>
                )}
              </div>

              {!isLoggedIn && (
                <p className="text-xs text-center text-gray-600 mt-3">
                  Showing {isLoggedIn ? '10' : '2'} photos • Register to see all
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Model Details Modal */}
      {selectedModel && !showBookingForm && (
        <ModelDetailsDialog
          model={selectedModel}
          isLoggedIn={isLoggedIn}
          onClose={() => setSelectedModel(null)}
          onBook={() => {
            setShowBookingForm(true);
          }}
        />
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedModel && (
        <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Book Model {selectedModel.id}</DialogTitle>
              <DialogDescription>
                Fill in the details to book the model for your event.
              </DialogDescription>
            </DialogHeader>
            <BookingForm
              model={selectedModel}
              onClose={() => {
                setShowBookingForm(false);
                setSelectedModel(null);
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}