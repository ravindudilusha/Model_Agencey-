import { useState, useEffect } from 'react';
import { ArrowRight, Search, Users, Star, Camera, Sparkles, GraduationCap, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import Navbar from '../shared/Navbar';
import ChooseYourJourney from './ChooseYourJourney';
import type { UserRole } from '../../App';
import { motion } from 'framer-motion';

interface CreativeLandingPageProps {
  navigate: (path: string) => void;
  currentPage: string;
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
                onClick={() => navigate('/models')}
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
                onClick={() => navigate('/modeler/request')}
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

      {/* Choose Your Journey - Tabbed Section */}
      <ChooseYourJourney navigate={navigate} setIsHovering={setIsHovering} />

      {/* Events Section - Always Visible */}
      <section id="events" className="py-32 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 bg-black text-white px-6 py-3">
              <Calendar className="size-5 mr-2" />
              UPCOMING EVENTS
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">Fashion Events 2026</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join Sri Lanka's most prestigious fashion shows and beauty pageants. Register your models for upcoming events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden group cursor-pointer border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <Badge className={`mb-4 ${
                      event.status === 'Registration Open' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {event.status}
                    </Badge>
                    <h3 className="text-2xl mb-2 group-hover:text-gray-600 transition-colors">{event.title}</h3>
                    <p className="text-gray-600">{event.type}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700 mb-6">
                    <Calendar className="size-5" />
                    <span className="text-lg">{event.date}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800 group/btn"
                    disabled={event.status !== 'Registration Open'}
                  >
                    {event.status === 'Registration Open' ? (
                      <>
                        Register Now
                        <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                      </>
                    ) : (
                      'Coming Soon'
                    )}
                  </Button>
                </div>
                
                <div className="absolute top-0 right-0 w-40 h-40 bg-black/5 rounded-full -mr-20 -mt-20 group-hover:bg-black/10 transition-colors"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Model Academy Section - Always Visible */}
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
                    Founded in 2019 by <span className="text-white font-semibold">Dasun Wijesinghe</span>, The Walk Model Academy is Sri Lanka's leading technically-driven modelling training center. With over 500+ trained models across the country, we offer comprehensive professional modeling courses covering catwalk techniques, posing, grooming, and industry preparation.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Our 3-month intensive program transforms aspiring models into confident professionals ready for the fashion industry. Join Sri Lanka's most trusted model training academy.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/20">
                  <div>
                    <div className="text-3xl mb-1 text-white font-semibold">500+</div>
                    <div className="text-sm text-gray-300">Trained Models</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1 text-white font-semibold">6+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1 text-white font-semibold">3</div>
                    <div className="text-sm text-gray-300">Month Program</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-200 px-10 py-6 text-lg group"
                    onClick={() => navigate('/academy')}
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
                    onClick={() => navigate('/modeler/request')}
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
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
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
                        <h3 className="text-2xl mb-1 text-white font-semibold">Professional Modeling Training</h3>
                        <p className="text-gray-200 text-sm">By Dasun Wijesinghe • Since 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-black text-white px-6 py-3">
                <Mail className="size-5 mr-2" />
                GET IN TOUCH
              </Badge>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-black">Contact Us</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Let's Talk */}
              <div className="space-y-8">
                <h3 className="text-2xl">Let's Talk</h3>

                {/* Email Card */}
                <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">EMAIL</p>
                      <p className="text-lg mb-1">info@modelbookingpro.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                {/* Phone Card */}
                <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">PHONE</p>
                      <p className="text-lg mb-1">+94 77 123 4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                    </div>
                  </div>
                </Card>

                {/* Locations Card */}
                <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">LOCATIONS</p>
                      <p className="text-lg mb-1">Colombo • Kurunegala • Negombo</p>
                      <p className="text-sm text-gray-500">Sri Lanka</p>
                    </div>
                  </div>
                </Card>

                {/* Follow Us */}
                <div>
                  <h4 className="mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="size-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Instagram className="size-5" />
                    </a>
                    <a 
                      href="#" 
                      className="size-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Facebook className="size-5" />
                    </a>
                    <a 
                      href="#" 
                      className="size-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Twitter className="size-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <Card className="p-8 bg-white shadow-xl">
                <h3 className="text-2xl mb-6">Send us a Message</h3>
                <form className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm mb-2 uppercase tracking-wide">NAME</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm mb-2 uppercase tracking-wide">EMAIL</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm mb-2 uppercase tracking-wide">PHONE (OPTIONAL)</label>
                    <input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm mb-2 uppercase tracking-wide">MESSAGE</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Send Message
                    <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="size-6" />
                  <h3 className="text-xl font-semibold">ModelBooking Pro</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sri Lanka's premier platform connecting models, photographers, beauticians, and clients. Your complete fashion industry solution.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="mb-4">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigate('/'); }}
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigate('/models'); }}
                      className="hover:text-white transition-colors"
                    >
                      Browse Models
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigate('/academy'); }}
                      className="hover:text-white transition-colors"
                    >
                      Model Academy
                    </a>
                  </li>
                  <li>
                    <a href="#events" className="hover:text-white transition-colors">Events</a>
                  </li>
                </ul>
              </div>

              {/* For Professionals */}
              <div>
                <h4 className="mb-4">For Professionals</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigate('/modeler/request'); }}
                      className="hover:text-white transition-colors"
                    >
                      Become a Model
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-500 cursor-not-allowed">
                      Photographers (Coming Soon)
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-500 cursor-not-allowed">
                      Beauticians (Coming Soon)
                    </span>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* The Walk Model Academy */}
              <div>
                <h4 className="mb-4">The Walk Model Academy</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>By Dasun Wijesinghe</li>
                  <li>Founded 2019</li>
                  <li>500+ Trained Models</li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); navigate('/academy'); }}
                      className="hover:text-white transition-colors inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="size-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
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
        </div>
      </footer>
    </div>
  );
}