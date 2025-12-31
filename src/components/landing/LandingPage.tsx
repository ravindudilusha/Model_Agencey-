import { Menu, X, Users, Star, Calendar, Shield, Lock, Eye, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import type { Page } from '../../App';

interface LandingPageProps {
  navigate: (page: Page) => void;
}

export default function LandingPage({ navigate }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [showLimitedView, setShowLimitedView] = useState(false);

  // Featured models showcase - using same data structure as BrowseModelers
  const featuredModels = [
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
      experience: '6 years',
      specialties: ['Fashion', 'Commercial']
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
      experience: '5 years',
      specialties: ['Commercial', 'Fashion']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="size-8 text-black" />
              <span className="text-xl">ModelBooking Pro</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#models" className="hover:text-gray-600 transition-colors">Models</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
              <button 
                onClick={() => navigate('/academy')} 
                className="hover:text-gray-600 transition-colors"
              >
                Model Academy
              </button>
              <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
              <Button className="bg-black hover:bg-gray-800 text-white" onClick={() => navigate('/modeler/request')}>Become a Model</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#models" className="block hover:text-gray-600">Models</a>
              <a href="#about" className="block hover:text-gray-600">About</a>
              <button 
                onClick={() => {
                  navigate('/academy');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left hover:text-gray-600"
              >
                Model Academy
              </button>
              <Button variant="outline" className="w-full" onClick={() => navigate('/login')}>Login</Button>
              <Button className="w-full bg-black hover:bg-gray-800 text-white" onClick={() => navigate('/modeler/request')}>Become a Model</Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Banner Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWxzJTIwcnVud2F5fGVufDF8fHx8MTc2NDA2NzczOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion Models"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="bg-white text-black mb-6 text-sm px-4 py-2 border border-gray-300">
              <Shield className="size-4 mr-2" />
              500+ Verified Professional Models
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6 text-white">
              Connect With Professional Models For Your Next Event
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A trusted platform for booking verified models. Browse portfolios, check availability, and book with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black" onClick={() => navigate('/customer/dashboard')}>
                <Search className="size-5 mr-2" />
                Browse Models
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white" onClick={() => navigate('/modeler/request')}>
                <Users className="size-5 mr-2" />
                Join as a Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-gray-600">Verified Models</div>
            </div>
            <div>
              <div className="text-4xl mb-2">2,000+</div>
              <div className="text-gray-600">Bookings</div>
            </div>
            <div>
              <div className="text-4xl mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models Showcase */}
      <section id="models" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Professional Models</h2>
          <p className="text-xl text-gray-600">Browse our top-rated verified models</p>
        </div>
        
        {/* Info Banner for Non-Logged In Users */}
        <Card className="p-4 bg-gray-100 border-gray-300 mb-6 max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <Lock className="size-5 text-black mt-0.5" />
            <div>
              <p className="text-black">
                <strong>Limited View:</strong> Register or login to see full model profiles, all photos, videos, and booking calendars.
              </p>
            </div>
          </div>
        </Card>

        {/* Models Grid - Same pattern as BrowseModelers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredModels.map((model) => (
            <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Model Photo */}
              <div className="relative h-[500px] bg-gray-200">
                <img
                  src={model.photos[0]}
                  alt={`Model ${model.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge className="bg-white text-black">
                    <Lock className="size-3 mr-1" />
                    Login to view more
                  </Badge>
                </div>
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
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedModel(model);
                      setShowLimitedView(true);
                    }}
                  >
                    <Eye className="size-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => navigate('/customer/registration')}
                  >
                    Book Now
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-600 mt-3">
                  <Lock className="size-3 inline mr-1" />
                  Register to view full profile & portfolio
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => navigate('/customer/registration')}>
            Register to View All Models
          </Button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-white mb-4">About ModelBooking Pro</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing the modeling industry by connecting exceptional talent with extraordinary opportunities
            </p>
          </div>

          {/* Stats Cards - Black and White */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 text-center transform hover:scale-105 transition-transform border-2 border-gray-200">
              <div className="text-5xl mb-4">500+</div>
              <h3 className="text-xl mb-2">Verified Models</h3>
              <p className="text-gray-600">Professional talent ready to elevate your events</p>
            </div>
            <div className="bg-black rounded-lg p-8 text-center transform hover:scale-105 transition-transform border-2 border-gray-700">
              <div className="text-5xl text-white mb-4">2K+</div>
              <h3 className="text-xl text-white mb-2">Successful Bookings</h3>
              <p className="text-gray-300">Trusted by clients worldwide</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center transform hover:scale-105 transition-transform border-2 border-gray-200">
              <div className="text-5xl mb-4">4.9★</div>
              <h3 className="text-xl mb-2">Average Rating</h3>
              <p className="text-gray-600">Excellence in every booking</p>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 border-l-4 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-black rounded-full flex items-center justify-center">
                  <Shield className="size-6 text-white" />
                </div>
                <h3 className="text-2xl">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower models and clients through a transparent, secure, and efficient platform. We ensure every booking is a success story by providing rigorous verification, seamless communication, and unmatched support.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border-l-4 border-gray-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-gray-400 rounded-full flex items-center justify-center">
                  <Star className="size-6 text-white" />
                </div>
                <h3 className="text-2xl">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted modeling platform, where talent meets opportunity. We envision a future where every model has equal access to success, and every client finds their perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="size-6" />
                <span>ModelBooking Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                The trusted platform for professional model bookings.
              </p>
            </div>
            <div>
              <h4 className="mb-4">For Models</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Apply Now</a></li>
                <li><a href="#" className="hover:text-white">Requirements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Models</a></li>
                <li><a href="#" className="hover:text-white">How to Book</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 ModelBooking Pro. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Limited View Dialog for Non-Registered Users - Full Preview with Locked Content */}
      <Dialog open={showLimitedView} onOpenChange={setShowLimitedView}>
        <DialogContent className="w-screen max-w-none h-screen max-h-screen !top-0 !left-0 !translate-x-0 !translate-y-0 rounded-none border-none shadow-none p-0 m-0 overflow-hidden gap-0" aria-describedby={undefined}>
          {selectedModel && (
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Portfolio Gallery with Lock Overlay */}
              <div className="bg-gray-50 p-6 pb-8 flex flex-col overflow-y-auto relative">
                <div className="mb-4">
                  <DialogTitle className="text-lg mb-0.5">Model ID: {selectedModel.id}</DialogTitle>
                  <DialogDescription className="text-xs">
                    Premium verified model • {selectedModel.experience} experience
                  </DialogDescription>
                </div>

                {/* Main Image Preview */}
                <div className="relative rounded-lg overflow-hidden bg-gray-200 h-[300px] flex items-center justify-center flex-shrink-0 mb-3">
                  <img 
                    src={selectedModel.photos[0]} 
                    alt={`Model ${selectedModel.id}`}
                    className="w-full h-full object-contain"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white text-black gap-1 shadow-lg text-xs px-2 py-1">
                      <Star className="size-3 fill-yellow-500 text-yellow-500" />
                      {selectedModel.rating}
                    </Badge>
                  </div>
                </div>

                {/* Register CTA - Creative Card */}
                <div className="relative overflow-hidden rounded-lg">
                  {/* Diagonal Split Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 size-32 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 size-24 bg-white/5 rounded-full blur-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 text-white text-center">
                    <div className="inline-flex items-center justify-center size-16 bg-white/10 backdrop-blur-sm rounded-full mb-3 border border-white/20">
                      <Lock className="size-7" />
                    </div>
                    <h4 className="text-lg mb-2">Unlock Full Portfolio</h4>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-300 mb-1">
                      <span className="flex items-center gap-1">
                        <div className="size-1.5 bg-white rounded-full"></div>
                        {selectedModel.photos.length} Photos
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="size-1.5 bg-white rounded-full"></div>
                        2 Videos
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="size-1.5 bg-white rounded-full"></div>
                        Full Details
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Register free • No credit card required
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Model Information with Locked Sections */}
              <div className="bg-white p-6 pb-8 flex flex-col overflow-y-auto">
                {/* Header Info */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b-2">
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs px-2 py-1">{selectedModel.gender}</Badge>
                      <Badge className="bg-black text-white text-xs px-2 py-1">{selectedModel.experience}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-semibold">{selectedModel.rating}</span>
                        <span className="text-gray-400">({selectedModel.reviews} reviews)</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Starting From</p>
                      <p className="text-2xl">LKR {selectedModel.basePrice.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">per event</p>
                    </div>
                  </div>
                </div>

                {/* Basic Stats - Visible */}
                <div className="mb-4">
                  <h4 className="text-sm text-gray-600 mb-2">Physical Attributes</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                      <p className="text-lg mb-1">{selectedModel.height}</p>
                      <p className="text-xs text-gray-600">Height (cm)</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                      <p className="text-lg mb-1">{selectedModel.skinColor}</p>
                      <p className="text-xs text-gray-600">Skin Tone</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                      <p className="text-lg mb-1">{selectedModel.hairColor}</p>
                      <p className="text-xs text-gray-600">Hair Color</p>
                    </div>
                  </div>
                </div>

                {/* Specialties - Visible */}
                <div className="mb-4">
                  <h4 className="text-sm text-gray-600 mb-2">Modeling Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModel.specialties.map((specialty: string) => (
                      <Badge key={specialty} className="bg-black text-white text-xs px-3 py-1.5">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-br from-black to-gray-800 rounded-lg p-4 text-white text-center">
                  <Shield className="size-6 mx-auto mb-2" />
                  <h3 className="text-base mb-2">Ready to Book This Model?</h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                    Register free to unlock full profile, view all media, check live availability and send instant booking requests
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white hover:bg-gray-100 text-black py-5"
                    onClick={() => {
                      setShowLimitedView(false);
                      navigate('/customer/registration');
                    }}
                  >
                    <Users className="size-4 mr-2" />
                    Register Free - No Credit Card
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}