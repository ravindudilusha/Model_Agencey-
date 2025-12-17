import { Menu, X, Users, Star, Calendar, CheckCircle, GraduationCap, Award, ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import Navbar from '../shared/Navbar';
import type { Page, UserRole } from '../../App';

interface ModelAcademyProps {
  navigate: (page: Page) => void;
  currentPage: Page;
  isLoggedIn: boolean;
  userRole: UserRole;
  logout: () => void;
}

export default function ModelAcademy({ navigate, currentPage, isLoggedIn, userRole, logout }: ModelAcademyProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const achievements = [
    { label: 'Successful Intakes', value: '34+' },
    { label: 'Trained Models', value: '500+' },
    { label: 'Years of Experience', value: '6+' },
    { label: 'Active Locations', value: '3' }
  ];

  const monthOneTopics = [
    'Introduction to Modelling & Industry Overview',
    'Posture, Balance & Stage Confidence',
    'Basic Catwalk Training (Straight Walk, Rhythm, Turns)',
    'Basic Posing for Camera & Stage',
    'Grooming Essentials: Personal Care, Styling, Etiquette',
    'Fitness & Body Awareness for Models'
  ];

  const monthTwoTopics = [
    'Advanced Catwalk Training (Zig-Zag, Triangle, Crossing, Pageant Walk)',
    'Facial Expressions & Stage Presence',
    'Dress Codes & Fashion Segments (Casual, Formal, Swimwear, Evening Wear)',
    'Photo Posing Techniques (Angles, Expressions, Body Language)',
    'Acting & Personality Development Workshop',
    'Voice Training & Public Speaking Basics'
  ];

  const monthThreeTopics = [
    'Runway Choreography & Show Flow Training',
    'Advanced Poses & Transitions',
    'Confidence-Building & Interview Skills',
    'Branding & Social Media for Models',
    'Portfolio Photoshoot',
    'Final Rehearsals + Fashion Show'
  ];

  const upcomingPrograms = [
    'Equality 2026',
    'Looks Cavo',
    'The Walk Fashion Show',
    'TV Commercials',
    'Fashion Shoots',
    'Concept Shoots'
  ];

  const whyChooseUs = [
    {
      title: 'Limited Batch Size',
      description: 'Maximum 20 models per batch, ensuring personal attention for every student.'
    },
    {
      title: 'Direct Professional Guidance',
      description: 'Training conducted by experienced professionals, not students or assistants.'
    },
    {
      title: 'Qualified Coaches Only',
      description: 'Industry-level standards guaranteed by qualified and professional coaches.'
    },
    {
      title: 'Personal & Career-Driven',
      description: 'Our approach is personal, focused, and career-driven, making us unique.'
    }
  ];

  const locations = [
    {
      city: 'Kurunegala',
      schedule: 'Every Sunday',
      time: '9:30 AM - 12:00 PM'
    },
    {
      city: 'Negombo',
      schedule: 'Every Sunday',
      time: '1:30 PM - 4:30 PM'
    },
    {
      city: 'Colombo',
      schedule: 'Every Saturday',
      time: '1:00 PM - 3:30 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navbar */}
      <Navbar navigate={navigate} currentPage={currentPage} isLoggedIn={isLoggedIn} userRole={userRole} logout={logout} />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583932387999-dcc7fb40bc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwY2F0d2Fsa3xlbnwxfHx8fDE3NjU1OTU3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fashion Runway"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 size-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-20 size-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-10 size-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-white/30 backdrop-blur-sm rounded-full">
            <p className="text-sm tracking-widest">SINCE 2019</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tight">
            THE WALK
            <br />
            <span className="text-6xl md:text-8xl">MODEL ACADEMY</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>
          
          <p className="text-xl md:text-2xl mb-2 tracking-wide">BY DASUN WIJESINGHE</p>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed">
            Where confidence meets the runway
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg"
              onClick={() => navigate('modeler-request')}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              onClick={() => {
                const element = document.getElementById('course-curriculum');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Course Details
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="p-6 text-center border-2 border-black">
                <div className="text-4xl mb-2">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6 text-center">More About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2019, The Walk Model Academy has become Sri Lanka's leading and only technically-driven modelling academy.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2">
                <CheckCircle className="size-6 mb-3" />
                <p className="text-gray-700">34 successful intakes completed</p>
              </Card>
              <Card className="p-6 border-2">
                <Users className="size-6 mb-3" />
                <p className="text-gray-700">500+ trained models across the country</p>
              </Card>
              <Card className="p-6 border-2">
                <Star className="size-6 mb-3" />
                <p className="text-gray-700">Specialized in catwalk training, posing, stage confidence, grooming, choreography</p>
              </Card>
              <Card className="p-6 border-2">
                <Award className="size-6 mb-3" />
                <p className="text-gray-700">Official choreographer for major fashion shows & beauty pageants</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Our mission is to shape raw talent into <span className="border-b-2">Confident, Professional models</span> and provide them with real opportunities in the fashion and entertainment industry.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-black text-white px-6 py-2 text-sm">
                <Award className="size-4 mr-2" />
                FOUNDER & CEO
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4">Meet Our Founder</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* Founder Profile */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-black/5 rounded-lg"></div>
                <div className="relative overflow-hidden rounded-lg border-4 border-black">
                  <img 
                    src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg0OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dasun Wijesinghe - Founder & CEO"
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-6">
                    <h3 className="text-2xl md:text-3xl mb-1">DASUN WIJESINGHE</h3>
                    <p className="text-sm text-gray-300 uppercase tracking-wider">Founder & CEO • The Walk Model Academy</p>
                  </div>
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 size-8 border-l-4 border-t-4 border-black"></div>
                <div className="absolute -bottom-2 -right-2 size-8 border-r-4 border-b-4 border-black"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3">About the Founder</h3>
                  <div className="w-16 h-0.5 bg-black mb-4"></div>
                </div>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <span className="text-black">Dasun Wijesinghe</span> is a <span className="underline decoration-2">Professional Catwalk Trainer</span>, Model Coach, and Fashion Choreographer with over 6 years of experience training more than 500+ aspiring models across Sri Lanka.
                  </p>
                  <p>
                    As the <span className="text-black">Official Choreographer</span> for leading fashion shows and beauty pageants in Sri Lanka, Dasun has established himself as the country's premier modeling mentor.
                  </p>
                  <p>
                    Founder of <span className="text-black">Equality Organization</span> and creator of <span className="italic">Swarnabhisheka Awurudu Kumara Kumari</span>, he has been the driving force behind numerous successful fashion and cultural projects across the nation.
                  </p>
                  <p className="text-black italic border-l-4 border-black pl-4">
                    "My mission is to shape raw talent into confident professionals who shine on any stage, providing them with real opportunities in the fashion and entertainment industry."
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border-2 border-black p-4 text-center">
                    <div className="text-3xl mb-1">500+</div>
                    <div className="text-sm text-gray-600">Models Trained</div>
                  </div>
                  <div className="border-2 border-black p-4 text-center">
                    <div className="text-3xl mb-1">34+</div>
                    <div className="text-sm text-gray-600">Successful Intakes</div>
                  </div>
                  <div className="border-2 border-black p-4 text-center">
                    <div className="text-3xl mb-1">6+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="border-2 border-black p-4 text-center">
                    <div className="text-3xl mb-1">100+</div>
                    <div className="text-sm text-gray-600">Fashion Shows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50" id="course-curriculum">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-12 text-center">3 Month Professional Modelling Course</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Month 1 */}
            <Card className="p-6 border-2 border-black">
              <div className="mb-4">
                <Badge className="bg-black text-white mb-2">MONTH 1</Badge>
                <h3 className="text-xl">Foundation</h3>
              </div>
              <ul className="space-y-3">
                {monthOneTopics.map((topic, index) => (
                  <li key={index} className="flex gap-2">
                    <ArrowRight className="size-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Month 2 */}
            <Card className="p-6 border-2 border-black">
              <div className="mb-4">
                <Badge className="bg-black text-white mb-2">MONTH 2</Badge>
                <h3 className="text-xl">Development</h3>
              </div>
              <ul className="space-y-3">
                {monthTwoTopics.map((topic, index) => (
                  <li key={index} className="flex gap-2">
                    <ArrowRight className="size-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Month 3 */}
            <Card className="p-6 border-2 border-black">
              <div className="mb-4">
                <Badge className="bg-black text-white mb-2">MONTH 3</Badge>
                <h3 className="text-xl">Professional Exposure</h3>
              </div>
              <ul className="space-y-3">
                {monthThreeTopics.map((topic, index) => (
                  <li key={index} className="flex gap-2">
                    <ArrowRight className="size-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center">Our Upcoming Programs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {upcomingPrograms.map((program, index) => (
              <Card key={index} className="p-6 text-center border-2 hover:border-black transition-colors">
                <p>{program}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-12 text-center">Why Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-6 border-2 border-white rounded-lg">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Connections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6 text-center">Industry Connections</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              At The Walk Model Academy, we provide our students with unparalleled opportunities through strong industry connections.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2">
                <h3 className="mb-3">Production Houses</h3>
                <p className="text-sm text-gray-600">For fashion shows, commercials & events</p>
              </Card>
              <Card className="p-6 border-2">
                <h3 className="mb-3">Fashion Brands</h3>
                <p className="text-sm text-gray-600">For campaigns, lookbooks & runway collaborations</p>
              </Card>
              <Card className="p-6 border-2">
                <h3 className="mb-3">Designers</h3>
                <p className="text-sm text-gray-600">For custom collections, styling & shows</p>
              </Card>
              <Card className="p-6 border-2">
                <h3 className="mb-3">Collaborations</h3>
                <p className="text-sm text-gray-600">With salons, photographers & designers</p>
              </Card>
            </div>
            <p className="text-center mt-8 text-gray-700">
              Our network opens doors for models to step confidently into the professional industry
            </p>
          </div>
        </div>
      </section>

      {/* Locations & Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-12 text-center">Date / Venue / Time</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 text-center border-2 border-black">
                <MapPin className="size-8 mx-auto mb-4" />
                <h3 className="text-2xl mb-4">{location.city}</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="size-4" />
                    {location.schedule}
                  </p>
                  <p>{location.time}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-12 text-center">Course Fee & Payment Plans</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-2xl mb-2">Total Course Fee:</p>
              <p className="text-5xl">LKR 45,000</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Installment Plan */}
              <Card className="p-8 border-2 border-white bg-transparent text-white">
                <h3 className="text-2xl mb-6">Installment Plan</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-gray-600">
                    <span>Registration Fee:</span>
                    <span>LKR 1,000</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-600">
                    <span>First Month (1st Week):</span>
                    <span>LKR 15,000</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-600">
                    <span>Second Month (1st Week):</span>
                    <span>LKR 15,000</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span>Third Month (1st Week):</span>
                    <span>LKR 15,000</span>
                  </div>
                </div>
              </Card>

              {/* One-Time Payment */}
              <Card className="p-8 border-2 border-white bg-white text-black relative overflow-hidden">
                <Badge className="absolute top-4 right-4 bg-black text-white">SAVE LKR 5,000</Badge>
                <h3 className="text-2xl mb-6">One-Time Payment</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">Pay upfront and save!</p>
                  <div className="text-center py-8">
                    <p className="text-gray-500 line-through text-xl mb-2">LKR 45,000</p>
                    <p className="text-5xl">LKR 40,000</p>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    Flexible payment methods to suit your convenience
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg"
                onClick={() => navigate('modeler-request')}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>THE WALK MODEL ACADEMY</p>
          <p>BY DASUN WIJESINGHE</p>
          <p className="mt-2">2019 - 2025</p>
        </div>
      </footer>
    </div>
  );
}