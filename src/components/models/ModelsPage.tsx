import { Search, Filter, Star, MapPin, Heart, Eye } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import Navbar from '../shared/Navbar';
import ModelDetailsDialog from '../ModelDetailsDialog';
import type { UserRole } from '../../App';

interface ModelsPageProps {
  navigate: (path: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  userRole: UserRole;
  logout: () => void;
}

export default function ModelsPage({ navigate, currentPage, isLoggedIn, userRole, logout }: ModelsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModel, setSelectedModel] = useState<any>(null);

  // Mock data for featured models
  const featuredModels = [
    {
      id: 'M001',
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop',
      ],
      location: 'Colombo',
      rating: 4.9,
      reviews: 127,
      category: 'Fashion',
      verified: true,
      height: '175 cm',
      heightDisplay: '5\'9"',
      experience: '5+ years',
      skinColor: 'Fair',
      hairColor: 'Blonde',
      basePrice: 5000,
      gender: 'Female',
      specialties: ['Runway', 'Commercial'],
      bio: 'Professional fashion model with extensive experience in runway and commercial modeling. Passionate about bringing creative visions to life.',
      age: 26,
      eyeColor: 'Blue',
      bust: '34"',
      waist: '24"',
      hips: '35"',
      shoeSize: '8',
      totalProjects: 150,
      languages: ['English', 'Sinhala'],
      availability: 'Available for booking',
      videoUrl: 'https://example.com/video1.mp4',
      pastClients: ['Vogue', 'Elle', 'Harper\'s Bazaar'],
      achievements: ['Best Model 2024', 'Fashion Week Star']
    },
    {
      id: 'M002',
      name: 'Emma Williams',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
      ],
      location: 'Kandy',
      rating: 4.8,
      reviews: 98,
      category: 'Commercial',
      verified: true,
      height: '170 cm',
      heightDisplay: '5\'7"',
      experience: '3+ years',
      skinColor: 'Medium',
      hairColor: 'Brown',
      basePrice: 4500,
      gender: 'Female',
      specialties: ['Commercial', 'Fashion']
    },
    {
      id: 'M003',
      name: 'Olivia Davis',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
      ],
      location: 'Galle',
      rating: 4.9,
      reviews: 156,
      category: 'Runway',
      verified: true,
      height: '178 cm',
      heightDisplay: '5\'10"',
      experience: '7+ years',
      skinColor: 'Fair',
      hairColor: 'Black',
      basePrice: 7000,
      gender: 'Female',
      specialties: ['Runway', 'Editorial']
    },
    {
      id: 'M004',
      name: 'Sophia Martinez',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400&h=600&fit=crop',
      ],
      location: 'Negombo',
      rating: 4.7,
      reviews: 89,
      category: 'Editorial',
      verified: true,
      height: '172 cm',
      heightDisplay: '5\'8"',
      experience: '4+ years',
      skinColor: 'Dark',
      hairColor: 'Black',
      basePrice: 4800,
      gender: 'Female',
      specialties: ['Editorial', 'Fashion']
    },
    {
      id: 'M005',
      name: 'Isabella Brown',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      ],
      location: 'Colombo',
      rating: 4.9,
      reviews: 203,
      category: 'Fashion',
      verified: true,
      height: '175 cm',
      heightDisplay: '5\'9"',
      experience: '6+ years',
      skinColor: 'Fair',
      hairColor: 'Brown',
      basePrice: 6500,
      gender: 'Female',
      specialties: ['Fashion', 'Commercial']
    },
    {
      id: 'M006',
      name: 'Mia Wilson',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop',
      ],
      location: 'Kurunegala',
      rating: 4.8,
      reviews: 112,
      category: 'Commercial',
      verified: true,
      height: '170 cm',
      heightDisplay: '5\'7"',
      experience: '3+ years',
      skinColor: 'Medium',
      hairColor: 'Black',
      basePrice: 4200,
      gender: 'Female',
      specialties: ['Commercial', 'Fit Modeling']
    },
    {
      id: 'M007',
      name: 'Charlotte Taylor',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
      ],
      location: 'Colombo',
      rating: 4.9,
      reviews: 178,
      category: 'Runway',
      verified: true,
      height: '178 cm',
      heightDisplay: '5\'10"',
      experience: '8+ years',
      skinColor: 'Fair',
      hairColor: 'Blonde',
      basePrice: 7500,
      gender: 'Female',
      specialties: ['Runway', 'Fashion']
    },
    {
      id: 'M008',
      name: 'Amelia Anderson',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
      ],
      location: 'Galle',
      rating: 4.8,
      reviews: 134,
      category: 'Editorial',
      verified: true,
      height: '172 cm',
      heightDisplay: '5\'8"',
      experience: '5+ years',
      skinColor: 'Medium',
      hairColor: 'Brown',
      basePrice: 5200,
      gender: 'Female',
      specialties: ['Editorial', 'Commercial']
    }
  ];

  const categories = ['All', 'Fashion', 'Commercial', 'Runway', 'Editorial'];

  const filteredModels = featuredModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           model.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar navigate={navigate} currentPage={currentPage} isLoggedIn={isLoggedIn} userRole={userRole} logout={logout} />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=600&fit=crop"
            alt="Models"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl mb-6">
            Discover
            <br />
            <span className="text-6xl md:text-8xl">Top Models</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Browse through our curated selection of professional models for your next project
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="size-5 flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-black text-white'
                      : 'bg-white border border-gray-200 hover:border-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl">
              {selectedCategory === 'all' ? 'All Models' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Models`}
            </h2>
            <p className="text-gray-600">{filteredModels.length} models found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
              <Card key={model.id} className="group overflow-hidden border-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                  <img 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Verified Badge */}
                  {model.verified && (
                    <Badge className="absolute top-3 right-3 bg-black text-white">
                      Verified
                    </Badge>
                  )}

                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-white text-black">
                    {model.category}
                  </Badge>
                </div>

                {/* Info */}
                <div className="p-5">
                  {isLoggedIn ? (
                    <>
                      <h3 className="text-xl mb-2">{model.name}</h3>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="size-4 fill-black" />
                        <span className="text-sm">{model.rating}</span>
                        <span className="text-sm text-gray-500">({model.reviews})</span>
                      </div>

                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="size-4" />
                          {model.location}
                        </div>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>Height: {model.heightDisplay}</span>
                          <span>Exp: {model.experience}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl mb-2">Model ID: {model.id}</h3>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="size-4 fill-black" />
                        <span className="text-sm">{model.rating}</span>
                        <span className="text-sm text-gray-500">({model.reviews})</span>
                      </div>

                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="size-4" />
                          {model.location}
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-center">
                          <p className="text-xs text-gray-600">Login to view full details</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1 border-black hover:bg-gray-100"
                      onClick={() => setSelectedModel(model)}
                    >
                      View Profile
                    </Button>
                    <Button 
                      className="flex-1 bg-black hover:bg-gray-800 text-white"
                      onClick={() => {
                        if (!isLoggedIn) {
                          navigate('/login');
                        } else if (userRole === 'customer') {
                          // Navigate to booking page or open booking modal
                          navigate('/customer/dashboard');
                        } else {
                          navigate('/customer/registration');
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No models found matching your criteria</p>
              <Button 
                className="mt-4 bg-black hover:bg-gray-800 text-white"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Are You a Model?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our platform and connect with clients looking for talent like you
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg"
            onClick={() => navigate('/modeler/request')}
          >
            Join as Model
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ModelBooking Pro. All rights reserved.</p>
        </div>
      </footer>

      {/* Model Details Dialog */}
      {selectedModel && (
        <ModelDetailsDialog
          model={selectedModel}
          isOpen={!!selectedModel}
          onClose={() => setSelectedModel(null)}
          isLoggedIn={isLoggedIn}
          onBook={() => {
            if (!isLoggedIn) {
              navigate('/login');
            } else if (userRole === 'customer') {
              navigate('/customer/dashboard');
            } else {
              navigate('/customer/registration');
            }
          }}
        />
      )}
    </div>
  );
}