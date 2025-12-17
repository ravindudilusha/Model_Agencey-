import { Menu, X, Users, Star, Calendar, Shield, Eye, Search, Camera, Sparkles, MapPin, Mail, Phone, Instagram, Facebook, Twitter, ArrowRight, GraduationCap, Palette, Award, Clock, TrendingUp, DollarSign, LogIn } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import Navbar from '../shared/Navbar';
import type { Page, UserRole } from '../../App';
import { motion } from 'framer-motion';

interface CreativeLandingPageProps {
  navigate: (page: Page) => void;
  currentPage: Page;
  isLoggedIn: boolean;
  userRole: UserRole;
  logout: () => void;
}

export default function CreativeLandingPage({ navigate, currentPage, isLoggedIn, userRole, logout }: CreativeLandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor only on this page
    document.body.style.cursor = 'none';
    document.body.style.setProperty('cursor', 'none', 'important');
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Restore default cursor when leaving this page
      document.body.style.cursor = 'auto';
      document.body.style.removeProperty('cursor');
    };
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredModels = [
    {
      id: 'M001',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
      rating: 4.8,
      reviews: 15,
      category: 'Runway'
    },
    {
      id: 'M002',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      rating: 4.9,
      reviews: 23,
      category: 'Fashion'
    },
    {
      id: 'M003',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 4.7,
      reviews: 18,
      category: 'Commercial'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Equality 2026',
      date: 'March 2026',
      type: 'Fashion Show',
      status: 'Registration Open'
    },
    {
      title: 'Looks Cavo',
      date: 'April 2026',
      type: 'Beauty Pageant',
      status: 'Coming Soon'
    },
    {
      title: 'The Walk Fashion Show',
      date: 'May 2026',
      type: 'Runway Event',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[10000] mix-blend-difference transition-transform duration-150"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`
        }}
      >
        <div className={`size-4 bg-white rounded-full ${isHovering ? 'animate-pulse' : ''}`}></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]">
        <div 
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Shared Navbar */}
      <Navbar navigate={navigate} currentPage={currentPage} isLoggedIn={isLoggedIn} userRole={userRole} logout={logout} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwY2F0d2Fsa3xlbnwxfHx8fDE3NjU1OTU3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion Runway"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 size-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 size-3 bg-white rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 size-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 text-sm">
                <Star className="size-4 mr-2" />
                Sri Lanka's Premier Model Booking Platform
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              THE WALK AGENCY
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                SRI LANKA
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-white mx-auto mb-8 animate-in fade-in duration-1000 delay-300"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              Professional models, photographers, and beauticians in one platform.
              <br />
              Your complete solution for fashion industry needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-10 py-7 text-lg group"
                onClick={() => navigate('customer-dashboard')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Search className="size-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explore Models
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7 text-lg group"
                onClick={() => navigate('modeler-request')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Users className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                Join as Model
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2 text-white">
                <span className="text-xs uppercase tracking-wider">Scroll to Explore</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Customers & Brands Section - Dark Theme */}
      <section id="customers" className="py-20 relative overflow-hidden bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900">
        {/* Full Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1701760211427-e7a9068028b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcmV2aWV3aW5nJTIwcGhvdG9zJTIwbGFwdG9wfGVufDF8fHx8MTc2NTk2NDM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Browsing model profiles"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Creative Image Side - Square Shape */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1701760211427-e7a9068028b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcmV2aWV3aW5nJTIwcGhvdG9zJTIwbGFwdG9wfGVufDF8fHx8MTc2NTk2NDM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Customer browsing model profiles on desktop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md text-white p-4 shadow-2xl rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 font-semibold text-white">For Customers</p>
                        <p className="text-xs text-gray-200">Browse • Book • Review</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay text */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl mb-2 font-semibold">Find Your Perfect Model</h3>
                    <p className="text-sm text-gray-200">Browse verified portfolios instantly</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-5 py-2 border-0">
                    <Users className="size-4 mr-2" />
                    FOR CUSTOMERS & BRANDS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl mb-4 text-white">Book Professional Models</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mb-4"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Are you a brand, event organizer, or business? Register as a customer to access Sri Lanka's largest network of verified professional models for your events.
                  </p>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Search, title: 'Browse Profiles' },
                    { icon: Calendar, title: 'Book Instantly' },
                    { icon: Shield, title: 'Verified Models' },
                    { icon: Star, title: 'Rate & Review' }
                  ].map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <feature.icon className="size-6 flex-shrink-0 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-5 group border-0 shadow-xl"
                    onClick={() => navigate('customer-registration')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Users className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                    Register as Customer
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-zinc-900 px-8 py-5 group"
                    onClick={() => navigate('customer-dashboard')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Search className="size-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Browse Models
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { value: '500+', label: 'Models' },
                    { value: '2000+', label: 'Clients' },
                    { value: '98%', label: 'Success' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all">
                      <div className="text-2xl text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Free Badge */}
                <div className="inline-flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <Shield className="size-5 flex-shrink-0 text-gray-400" />
                  <p className="text-sm text-gray-300"><span className="font-semibold text-white">Free to Register</span> • Only pay when you book</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Registration Section - Dark Theme */}
      <section id="models" className="py-20 relative overflow-hidden bg-gradient-to-bl from-slate-900 via-gray-900 to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-5 py-2 border-0">
                    <Sparkles className="size-4 mr-2" />
                    FOR MODELS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl mb-4 text-white">Start Your Modeling Career</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mb-4"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Join Sri Lanka's premier modeling platform. Register as a professional model, build your portfolio, and get discovered by top brands and event organizers.
                  </p>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Camera, title: 'Build Portfolio' },
                    { icon: TrendingUp, title: 'Get Bookings' },
                    { icon: Award, title: 'Get Verified' },
                    { icon: DollarSign, title: 'Earn Money' }
                  ].map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <feature.icon className="size-6 flex-shrink-0 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-5 group border-0 shadow-xl"
                    onClick={() => navigate('model-registration')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Sparkles className="size-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Register as Model
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-8 py-5 group"
                    onClick={() => navigate('model-dashboard')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <LogIn className="size-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Model Login
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { value: '₹50K+', label: 'Avg. Earnings' },
                    { value: '1000+', label: 'Bookings' },
                    { value: '24/7', label: 'Support' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all">
                      <div className="text-2xl text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Info Badge */}
                <div className="inline-flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <Award className="size-5 flex-shrink-0 text-gray-400" />
                  <p className="text-sm text-gray-300"><span className="font-semibold text-white">Free Registration</span> • Get verified & start earning</p>
                </div>
              </div>

              {/* Creative Image Side - Square Shape */}
              <div className="relative group order-1 md:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1698327590594-f408e2cee917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb2RlbCUyMHBvc2luZyUyMHJ1bndheSUyMGZhc2hpb258ZW58MXx8fHwxNzY1OTUxMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional model"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-slate-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md text-white p-4 shadow-2xl rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Sparkles className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 font-semibold text-white">For Models</p>
                        <p className="text-xs text-gray-200">Register • Grow • Succeed</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay text */}
                  <div className="absolute bottom-8 right-8 text-white text-right">
                    <h3 className="text-3xl mb-2 font-semibold">Your Career Starts Here</h3>
                    <p className="text-sm text-gray-200">Join 500+ professional models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Professional Models' },
              { value: '100+', label: 'Photographers' },
              { value: '50+', label: 'Beauticians' },
              { value: '2000+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Academy Section */}
      <section id="academy" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)',
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-6 bg-white text-black px-6 py-3">
                    <GraduationCap className="size-5 mr-2" />
                    PROFESSIONAL TRAINING
                  </Badge>
                  <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
                    The Walk Model Academy
                  </h2>
                  <div className="w-24 h-1 bg-white mb-6"></div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Founded in 2019 by <span className="text-white">Dasun Wijesinghe</span>, The Walk Model Academy is Sri Lanka's leading technically-driven modelling training center. With over 500+ trained models across the country, we offer comprehensive professional modeling courses covering catwalk techniques, posing, grooming, and industry preparation.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Our 3-month intensive program transforms aspiring models into confident professionals ready for the fashion industry. Join Sri Lanka's most trusted model training academy.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/20">
                  <div>
                    <div className="text-3xl mb-1">500+</div>
                    <div className="text-sm text-gray-400">Trained Models</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1">6+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1">3</div>
                    <div className="text-sm text-gray-400">Month Program</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-200 px-10 py-6 text-lg group"
                    onClick={() => navigate('model-academy')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Learn More About Academy
                    <ArrowRight className="size-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg group"
                    onClick={() => navigate('modeler-request')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Users className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Image Side - Square Shape */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/5 rounded-lg"></div>
                <div className="relative overflow-hidden rounded-lg border-4 border-white aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1495223288374-53f550144fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR3YWxrJTIwcnVud2F5JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1ODY0OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="The Walk Model Academy Training"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="size-16 bg-white/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="size-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-1">Professional Modeling Training</h3>
                        <p className="text-gray-300 text-sm">By Dasun Wijesinghe • Since 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 size-8 border-l-4 border-t-4 border-white"></div>
                <div className="absolute -bottom-2 -right-2 size-8 border-r-4 border-b-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photographers Section - Dark Theme */}
      <section id="photographers" className="py-20 relative overflow-hidden bg-gradient-to-br from-stone-900 via-zinc-900 to-neutral-900">
        {/* Full Background Image Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1745847768366-d44dcef9ef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmElMjBzdHVkaW98ZW58MXx8fHwxNzY1OTAwNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Photography background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Additional dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Creative Image Side - Square Shape */}
              <div className="relative group order-2 md:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1745847768366-d44dcef9ef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmElMjBzdHVkaW98ZW58MXx8fHwxNzY1OTAwNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional photographer at work"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md text-white p-4 shadow-2xl rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Camera className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 font-semibold text-white">For Photographers</p>
                        <p className="text-xs text-gray-200">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay text */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl mb-2 font-semibold">Capture Your Vision</h3>
                    <p className="text-sm text-gray-200">Join 100+ professional photographers</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6 order-1 md:order-2">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-stone-700 to-zinc-800 text-white px-5 py-2 border-0">
                    <Camera className="size-4 mr-2" />
                    FOR PHOTOGRAPHERS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl mb-4 text-white">Showcase Your Creative Vision</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-stone-400 to-zinc-600 mb-4"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Join our growing network of professional photographers. Connect with models, collaborate on projects, and expand your portfolio while building your business.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Eye, title: 'Portfolio Showcase' },
                    { icon: Users, title: 'Model Network' },
                    { icon: Calendar, title: 'Direct Bookings' },
                    { icon: Star, title: 'Build Reputation' }
                  ].map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <feature.icon className="size-6 flex-shrink-0 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gray-700/50 text-gray-400 cursor-not-allowed px-8 py-5 border-0"
                    disabled
                  >
                    <Clock className="size-5 mr-2" />
                    Opening Soon
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-zinc-900 px-8 py-5 group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Mail className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                    Notify Me
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { value: '100+', label: 'Photographers' },
                    { value: '500+', label: 'Models' },
                    { value: '95%', label: 'Satisfaction' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all">
                      <div className="text-2xl text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-3 p-3 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-lg">
                  <Badge className="bg-yellow-500 text-black animate-pulse border-0">
                    <Clock className="size-4 mr-1" />
                    Coming Soon
                  </Badge>
                  <p className="text-sm text-gray-300">Amazing features in development for photographers!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beauticians Section - Dark Theme */}
      <section id="beauticians" className="py-20 relative overflow-hidden bg-gradient-to-br from-neutral-900 via-gray-900 to-slate-900">
        {/* Full Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1758613654806-fa787b741bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjB3b3JraW5nJTIwbW9kZWx8ZW58MXx8fHwxNzY1OTY0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Makeup artistry background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-neutral-700 to-gray-800 text-white px-5 py-2 border-0">
                    <Palette className="size-4 mr-2" />
                    FOR BEAUTICIANS & MAKEUP ARTISTS
                  </Badge>
                  <h2 className="text-4xl md:text-5xl mb-4 text-white">Transform Beauty Into Art</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-neutral-400 to-gray-600 mb-4"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Expand your beauty business by joining our platform. Work with professional models, collaborate on fashion events, and reach new clients across Sri Lanka.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Sparkles, title: 'Service Listings' },
                    { icon: Calendar, title: 'Event Bookings' },
                    { icon: Users, title: 'Model Partnerships' },
                    { icon: Star, title: 'Client Reviews' }
                  ].map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <feature.icon className="size-6 flex-shrink-0 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gray-700/50 text-gray-400 cursor-not-allowed px-8 py-5 border-0"
                    disabled
                  >
                    <Clock className="size-5 mr-2" />
                    Opening Soon
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-5 group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Mail className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                    Notify Me
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { value: '50+', label: 'Beauticians' },
                    { value: '500+', label: 'Models' },
                    { value: '97%', label: 'Satisfaction' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all">
                      <div className="text-2xl text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-3 p-3 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-lg">
                  <Badge className="bg-yellow-500 text-black animate-pulse border-0">
                    <Clock className="size-4 mr-1" />
                    Coming Soon
                  </Badge>
                  <p className="text-sm text-gray-300">Exciting features in development for beauticians!</p>
                </div>
              </div>

              {/* Creative Image Side - Square Shape */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1758613654806-fa787b741bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjB3b3JraW5nJTIwbW9kZWx8ZW58MXx8fHwxNzY1OTY0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Makeup artist working with model"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md text-white p-4 shadow-2xl rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Palette className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider mb-1 font-semibold text-white">For Beauticians</p>
                        <p className="text-xs text-gray-200">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay text */}
                  <div className="absolute bottom-8 right-8 text-white text-right">
                    <h3 className="text-3xl mb-2 font-semibold">Artistry Meets Opportunity</h3>
                    <p className="text-sm text-gray-200">Join 50+ beauty professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white px-4 py-2">
              <Calendar className="size-4 mr-2" />
              What's Next
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">Upcoming Events 2026</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of Sri Lanka's most prestigious fashion and modeling events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-black transition-all duration-300 group cursor-pointer hover:shadow-2xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={event.status === 'Registration Open' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}>
                    {event.status}
                  </Badge>
                  <Award className="size-6 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-2xl mb-2 group-hover:scale-105 transition-transform origin-left">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="size-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="size-4" />
                    <span className="text-sm">{event.type}</span>
                  </div>
                </div>
                
                <Button 
                  variant={event.status === 'Registration Open' ? 'default' : 'outline'}
                  className={`w-full group ${event.status === 'Registration Open' ? 'bg-black hover:bg-gray-800 text-white' : ''}`}
                  disabled={event.status !== 'Registration Open'}
                >
                  {event.status === 'Registration Open' ? (
                    <>
                      Register Now
                      <ArrowRight className="size-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white text-black px-4 py-2">
                <Mail className="size-4 mr-2" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4">Contact Us</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div 
                      className="flex items-start gap-4 group cursor-pointer"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="size-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email</p>
                        <p className="text-lg">info@modelbookingpro.lk</p>
                      </div>
                    </div>

                    <div 
                      className="flex items-start gap-4 group cursor-pointer"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="size-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                        <p className="text-lg">+94 77 123 4567</p>
                      </div>
                    </div>

                    <div 
                      className="flex items-start gap-4 group cursor-pointer"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="size-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Locations</p>
                        <p className="text-lg">Colombo • Kurunegala • Negombo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Twitter, label: 'Twitter' }
                    ].map((social, i) => (
                      <button
                        key={i}
                        className="size-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <social.icon className="size-5 group-hover:scale-110 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20 p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Name</label>
                    <input 
                      type="text"
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input 
                      type="email"
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
                      placeholder="your@email.com"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us what you're looking for..."
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-200"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Send Message
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Users className="size-8" />
                <span className="text-xl">ModelBooking Pro</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sri Lanka's premier platform connecting models, photographers, beauticians, and clients. Your complete fashion industry solution.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#models" className="hover:text-white transition-colors">Browse Models</a></li>
                <li><a href="#academy" className="hover:text-white transition-colors">Model Academy</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>

            {/* For Professionals */}
            <div>
              <h4 className="mb-4">For Professionals</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <button onClick={() => navigate('modeler-request')} className="hover:text-white transition-colors">
                    Become a Model
                  </button>
                </li>
                <li><a href="#services" className="hover:text-white transition-colors">Photographers (Coming Soon)</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Beauticians (Coming Soon)</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Academy Info */}
            <div>
              <h4 className="mb-4">The Walk Model Academy</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>By Dasun Wijesinghe</li>
                <li>Founded 2019</li>
                <li>500+ Trained Models</li>
                <li>
                  <button onClick={() => navigate('model-academy')} className="hover:text-white transition-colors">
                    Learn More →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2025 ModelBooking Pro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}