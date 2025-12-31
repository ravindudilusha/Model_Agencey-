import { useState } from 'react';
import { Users, Star, Camera, Sparkles, Search, Calendar, Shield, UserPlus, ArrowRight, Eye, UserCheck, TrendingUp, Mail, Scissors, PartyPopper, Palette } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface ChooseYourJourneyProps {
  navigate: (path: string) => void;
  setIsHovering: (hovering: boolean) => void;
}

export default function ChooseYourJourney({ navigate, setIsHovering }: ChooseYourJourneyProps) {
  const [activeTab, setActiveTab] = useState('customers');

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3">
              <Sparkles className="size-5 mr-2" />
              DISCOVER YOUR PATH
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-tight">Choose Your Journey</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're looking to hire models, showcase your talent, or collaborate as a creative professional
            </p>
          </div>

          {/* Tabs Component */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Headers */}
            <TabsList className="w-full bg-white/5 backdrop-blur-sm border border-white/20 h-auto p-2 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
              <TabsTrigger 
                value="customers" 
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-blue-800 data-[state=active]:text-white text-gray-300 rounded-xl py-4 px-6 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Users className="size-5 mr-2" />
                <span className="hidden sm:inline">Customers</span>
                <span className="sm:hidden">Clients</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="models" 
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-600 data-[state=active]:to-purple-800 data-[state=active]:text-white text-gray-300 rounded-xl py-4 px-6 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Star className="size-5 mr-2" />
                Models
              </TabsTrigger>
              
              <TabsTrigger 
                value="photographers" 
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-pink-600 data-[state=active]:to-pink-800 data-[state=active]:text-white text-gray-300 rounded-xl py-4 px-6 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Camera className="size-5 mr-2" />
                <span className="hidden sm:inline">Photographers</span>
                <span className="sm:hidden">Photos</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="beauticians" 
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-600 data-[state=active]:to-orange-800 data-[state=active]:text-white text-gray-300 rounded-xl py-4 px-6 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Sparkles className="size-5 mr-2" />
                <span className="hidden sm:inline">Beauticians</span>
                <span className="sm:hidden">Beauty</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab Content - Customers */}
            <TabsContent value="customers" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                      alt="Professional Model"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge on image */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/20 px-4 py-2">
                        <Users className="size-4 mr-2" />
                        FOR CUSTOMERS
                        <span className="mx-2">•</span>
                        <span className="text-gray-300">Browse • Book • Review</span>
                      </Badge>
                    </div>
                    
                    {/* Text overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl md:text-4xl mb-2 text-white">Find Your Perfect Model</h3>
                      <p className="text-lg text-gray-200">Browse verified portfolios instantly</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-blue-500/20 backdrop-blur-sm text-blue-200 border border-blue-400/30 px-4 py-2">
                      <Users className="size-4 mr-2" />
                      FOR CUSTOMERS & BRANDS
                    </Badge>
                    
                    <h3 className="text-3xl md:text-5xl text-white mb-4">
                      Book Professional Models
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Are you a brand, event organizer, or business? Register as a customer to access Sri Lanka's largest network of verified professional models for your events.
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Search className="size-5 text-blue-300" />
                        </div>
                      </div>
                      <p className="text-white">Browse Profiles</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Calendar className="size-5 text-blue-300" />
                        </div>
                      </div>
                      <p className="text-white">Book Instantly</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Shield className="size-5 text-blue-300" />
                        </div>
                      </div>
                      <p className="text-white">Verified Models</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Star className="size-5 text-blue-300" />
                        </div>
                      </div>
                      <p className="text-white">Rate & Review</p>
                    </Card>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 px-8 py-6 group border-0"
                      onClick={() => navigate('/customer/registration')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <UserPlus className="size-5 mr-2" />
                      Register as Customer
                    </Button>

                    <Button 
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 group"
                      onClick={() => navigate('/models')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Search className="size-5 mr-2" />
                      Browse Models
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">500+</div>
                      <div className="text-sm text-gray-400">Models</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">2000+</div>
                      <div className="text-sm text-gray-400">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">98%</div>
                      <div className="text-sm text-gray-400">Success</div>
                    </div>
                  </div>

                  {/* Free to Register Note */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 pt-2">
                    <Shield className="size-4" />
                    <span>Free to Register • Only pay when you book</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Models */}
            <TabsContent value="models" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-purple-500/20 backdrop-blur-sm text-purple-200 border border-purple-400/30 px-4 py-2">
                      <Star className="size-4 mr-2" />
                      FOR ASPIRING MODELS
                    </Badge>
                    
                    <h3 className="text-3xl md:text-5xl text-white mb-4">
                      Join as a Model
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Are you an aspiring or professional model? Join Sri Lanka's premier model booking platform. Showcase your portfolio, get discovered by top brands, and manage your bookings all in one place.
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Users className="size-5 text-purple-300" />
                        </div>
                      </div>
                      <p className="text-white">Create Profile</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Camera className="size-5 text-purple-300" />
                        </div>
                      </div>
                      <p className="text-white">Upload Portfolio</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Calendar className="size-5 text-purple-300" />
                        </div>
                      </div>
                      <p className="text-white">Get Bookings</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Star className="size-5 text-purple-300" />
                        </div>
                      </div>
                      <p className="text-white">Build Reviews</p>
                    </Card>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 px-8 py-6 group border-0"
                      onClick={() => navigate('/modeler/request')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <UserPlus className="size-5 mr-2" />
                      Join as a Model
                    </Button>

                    <Button 
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-purple-400/50 text-white hover:bg-purple-500/20 px-8 py-6 group"
                      onClick={() => navigate('/modeler/login')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      Model Login
                      <ArrowRight className="size-5 ml-2" />
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">500+</div>
                      <div className="text-sm text-gray-400">Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">150+</div>
                      <div className="text-sm text-gray-400">Active Models</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>

                  {/* Free to Register Note */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 pt-2">
                    <Shield className="size-4" />
                    <span>Free registration • Professional training available</span>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop"
                      alt="Professional Model Portfolio"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge on image */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/20 px-4 py-2">
                        <Star className="size-4 mr-2" />
                        FOR MODELS
                        <span className="mx-2">•</span>
                        <span className="text-gray-300">Apply • Showcase • Earn</span>
                      </Badge>
                    </div>
                    
                    {/* Text overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl md:text-4xl mb-2 text-white">Launch Your Career</h3>
                      <p className="text-lg text-gray-200">Get discovered by top brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Photographers (Coming Soon) */}
            <TabsContent value="photographers" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=750&fit=crop"
                      alt="Professional Photographer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge on image */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/20 px-4 py-2">
                        <Camera className="size-4 mr-2" />
                        FOR PHOTOGRAPHERS
                        <span className="mx-2">•</span>
                        <span className="text-gray-300">Coming Soon</span>
                      </Badge>
                    </div>
                    
                    {/* Text overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl md:text-4xl mb-2 text-white">Capture Your Vision</h3>
                      <p className="text-lg text-gray-200">Join 100+ professional photographers</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-pink-500/20 backdrop-blur-sm text-pink-200 border border-pink-400/30 px-4 py-2">
                      <Camera className="size-4 mr-2" />
                      FOR PHOTOGRAPHERS
                    </Badge>
                    
                    <h3 className="text-3xl md:text-5xl text-white mb-4">
                      Showcase Your Creative Vision
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Join our growing network of professional photographers. Connect with models, collaborate on projects, and expand your portfolio while building your business.
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                          <Eye className="size-5 text-pink-300" />
                        </div>
                      </div>
                      <p className="text-white text-sm">Portfolio Showcase</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                          <UserCheck className="size-5 text-pink-300" />
                        </div>
                      </div>
                      <p className="text-white text-sm">Model Network</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                          <Calendar className="size-5 text-pink-300" />
                        </div>
                      </div>
                      <p className="text-white text-sm">Direct Bookings</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                          <Star className="size-5 text-pink-300" />
                        </div>
                      </div>
                      <p className="text-white text-sm">Build Reputation</p>
                    </Card>
                  </div>

                  {/* Opening Soon Badge and CTA */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Badge className="bg-gray-500/20 text-gray-300 border border-gray-400/30 px-4 py-2">
                      <Sparkles className="size-4 mr-2" />
                      Opening Soon
                    </Badge>
                    
                    <Button 
                      size="lg"
                      className="bg-white text-black hover:bg-gray-200 px-8 py-6 group border-0"
                      disabled
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Mail className="size-5 mr-2" />
                      Notify Me
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">100+</div>
                      <div className="text-sm text-gray-400">Photographers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">500+</div>
                      <div className="text-sm text-gray-400">Models</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">95%</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>

                  {/* Coming Soon Banner */}
                  <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-yellow-500 text-black px-3 py-1 flex items-center gap-1">
                        <Sparkles className="size-3" />
                        Coming Soon
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Amazing features in development for photographers!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab Content - Beauticians (Coming Soon) */}
            <TabsContent value="beauticians" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-orange-500/20 backdrop-blur-sm text-orange-200 border border-orange-400/30 px-4 py-2">
                      <Sparkles className="size-4 mr-2" />
                      FOR BEAUTICIANS & MAKEUP ARTISTS
                    </Badge>
                    
                    <h3 className="text-3xl md:text-5xl text-white mb-4">
                      Transform Beauty Into Art
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Expand your beauty business by joining our platform. Work with professional models, collaborate on fashion events, and reach new clients across Sri Lanka.
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <Scissors className="size-5 text-orange-300" />
                        </div>
                      </div>
                      <p className="text-white">Service Listings</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <PartyPopper className="size-5 text-orange-300" />
                        </div>
                      </div>
                      <p className="text-white">Event Bookings</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <Users className="size-5 text-orange-300" />
                        </div>
                      </div>
                      <p className="text-white">Model Partnerships</p>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <Star className="size-5 text-orange-300" />
                        </div>
                      </div>
                      <p className="text-white">Client Reviews</p>
                    </Card>
                  </div>

                  {/* Opening Soon Badge and CTA */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Badge className="bg-gray-500/20 text-gray-300 border border-gray-400/30 px-4 py-2">
                      <Sparkles className="size-4 mr-2" />
                      Opening Soon
                    </Badge>
                    
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-orange-800 text-white hover:from-orange-700 hover:to-orange-900 px-8 py-6 group border-0"
                      disabled
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Mail className="size-5 mr-2" />
                      Notify Me
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">50+</div>
                      <div className="text-sm text-gray-400">Beauticians</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">500+</div>
                      <div className="text-sm text-gray-400">Models</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-white mb-1">97%</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>

                  {/* Coming Soon Banner */}
                  <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-yellow-500 text-black px-3 py-1">
                        Coming Soon
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Exciting features in development for beauticians!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop"
                      alt="Professional Beautician"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge on image */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-black/80 backdrop-blur-sm text-white border border-white/20 px-4 py-2">
                        <Sparkles className="size-4 mr-2" />
                        FOR BEAUTICIANS
                        <span className="mx-2">•</span>
                        <span className="text-gray-300">Coming Soon</span>
                      </Badge>
                    </div>
                    
                    {/* Text overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl md:text-4xl mb-2 text-white">Artistry Meets Opportunity</h3>
                      <p className="text-lg text-gray-200">Join 50+ beauty professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}