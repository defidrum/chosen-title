import React, { useState, useEffect } from 'react';
import {  Menu, X, Home, Building2, Hammer, HardHat, Wrench, ClipboardCheck, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight, Check, Star, Users, TrendingUp, Award, PlayCircle, Calendar, Shield, Zap, Target } from 'lucide-react';
import BrixBuildsLogo from "../img/brixbuildslogo.png";

const BrixBuildsWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      gradient: 'from-slate-900 via-blue-900 to-slate-800',
      title: 'Luxury Residential Development',
      subtitle: 'Premium Communities'
    },
    {
      gradient: 'from-indigo-900 via-purple-900 to-pink-900',
      title: 'Commercial Real Estate',
      subtitle: 'Strategic Investments'
    },
    {
      gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
      title: 'Mixed-Use Developments',
      subtitle: 'Integrated Living'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Hero image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    { number: '150+', label: 'Properties Developed', icon: <Building2 className="w-6 h-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '$250M+', label: 'Portfolio Value', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Luxury Residential Development',
      description: 'Premium single-family communities, luxury condominiums, and exclusive estate developments designed for discerning buyers.',
      features: ['Custom Architecture', 'Premium Amenities', 'Smart Home Technology'],
      color: 'from-blue-600 to-indigo-700'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Commercial Real Estate',
      description: 'Strategic commercial developments including office complexes, retail centers, and industrial facilities with strong ROI potential.',
      features: ['Prime Locations', 'Tenant-Ready Spaces', 'Investment Grade'],
      color: 'from-purple-600 to-violet-700'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mixed-Use Developments',
      description: 'Integrated communities combining residential, retail, and commercial spaces to create vibrant, walkable neighborhoods.',
      features: ['Live-Work-Play', 'Sustainable Design', 'Community Focus'],
      color: 'from-emerald-600 to-teal-700'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Build-to-Suit Construction',
      description: 'Custom development solutions tailored to specific client requirements with end-to-end project management.',
      features: ['Custom Design', 'Turnkey Solutions', 'Quality Assurance'],
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Investment Advisory',
      description: 'Strategic guidance on real estate investments, market analysis, and development opportunities in high-growth markets.',
      features: ['Market Analysis', 'ROI Optimization', 'Risk Assessment'],
      color: 'from-cyan-600 to-blue-700'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Comprehensive project oversight from conceptual design through completion, ensuring timely delivery and budget adherence.',
      features: ['Timeline Management', 'Quality Control', 'Stakeholder Communication'],
      color: 'from-indigo-600 to-purple-700'
    }
  ];

  const portfolioItems = [
    {
      title: 'Pinnacle Estates',
      location: 'Frisco, TX',
      description: 'Luxury gated community with 48 custom homes',
      category: 'Residential',
      value: '$85M',
      status: 'Completed 2024',
      features: ['Gated Community', '2-3 Acre Lots', 'Private Lake']
    },
    {
      title: 'Metropolitan Plaza',
      location: 'Dallas, TX',
      description: 'Mixed-use development with retail and residential',
      category: 'Mixed-Use',
      value: '$120M',
      status: 'Under Construction',
      features: ['200 Units', 'Retail Space', 'Parking Garage']
    },
    {
      title: 'Corporate Center West',
      location: 'Irving, TX',
      description: 'Class A office complex with modern amenities',
      category: 'Commercial',
      value: '$95M',
      status: 'Completed 2023',
      features: ['LEED Certified', '15 Floors', 'Conference Centers']
    },
    {
      title: 'The Reserve at Legacy',
      location: 'Plano, TX',
      description: 'Luxury townhome community near Legacy West',
      category: 'Residential',
      value: '$65M',
      status: 'Completed 2024',
      features: ['84 Townhomes', 'Resort Amenities', 'Walkable Design']
    },
    {
      title: 'Innovation District',
      location: 'Richardson, TX',
      description: 'Tech-focused mixed development',
      category: 'Mixed-Use',
      value: '$150M',
      status: 'Planning Phase',
      features: ['Innovation Hub', 'Live-Work Units', 'Public Spaces']
    },
    {
      title: 'Westside Commons',
      location: 'Fort Worth, TX',
      description: 'Affordable luxury apartment community',
      category: 'Residential',
      value: '$45M',
      status: 'Under Construction',
      features: ['300 Units', 'Amenity Rich', 'Transit Oriented']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Private Investor',
      content: 'Brix Builds delivered exceptional ROI on our residential development. Their attention to market trends and quality construction is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Commercial Property Owner',
      content: 'From site selection to tenant delivery, their team managed every detail flawlessly. Our office complex was completed ahead of schedule.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      role: 'Homebuyer',
      content: 'We purchased in Pinnacle Estates and couldn\'t be happier. The quality, amenities, and community feel exceeded all our expectations.',
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              {/* Logo */}
              <img
                src={BrixBuildsLogo}
                alt="Brix Builds Logo"
                className="w-12 h-12 object-contain"
              />
  
              {/* Text */}
              <div>
                <span
                  className={`text-2xl font-bold transition-colors ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  BRIX BUILDS
                </span>
                <div
                  className={`text-xs font-medium tracking-wider transition-colors ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  DEVELOPMENT GROUP
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 hover:text-blue-600 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${heroImages[currentImageIndex].gradient} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Geometric Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 80,100 0,100" fill="url(#heroGradient)" />
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.5)" stopOpacity={1} />
                  <stop offset="100%" stopColor="rgba(99,102,241,0.3)" stopOpacity={1} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 transform ${
            visibleSections.has('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Building Communities,
              <span className="block mt-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
                Creating Futures
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              {heroImages[currentImageIndex].subtitle}
            </p>
            <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Premier real estate development and construction solutions in Dallas-Fort Worth. 
              Creating exceptional communities and commercial spaces that define tomorrow's landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Explore Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
        </div>

        {/* Hero Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 transform ${
                  visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white mb-6 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive real estate development solutions designed to maximize value and create lasting impact in communities across Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 ${
                  visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Featured Developments
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Showcasing our commitment to excellence through transformative developments across the Dallas-Fort Worth metroplex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${
                  visibleSections.has('portfolio') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-64 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {item.category}
                    </span>
                    <span className="bg-green-500/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-white">
                    {item.value}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{item.location}</p>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients and partners about their experience working with Brix Builds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 transform ${
              visibleSections.has('about') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
                Excellence in Development
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by industry veterans Jordan Drummond-Pugh and Tatyana Dorcinvil, Brix Builds represents the pinnacle of real estate development in Texas. Our NASCLA certification and track record of delivering over $250M in successful projects speak to our commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">15+</h4>
                  <p className="text-gray-600">Years Combined Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">NASCLA</h4>
                  <p className="text-gray-600">Certified Professionals</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'NASCLA Certified & Licensed',
                  'Full-Service Development Solutions',
                  'Award-Winning Project Portfolio',
                  'Sustainable Building Practices',
                  'Community-Focused Developments'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative transition-all duration-1000 transform ${
              visibleSections.has('about') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 p-16 flex flex-col items-center justify-center text-white text-center">
                  <Building2 className="w-32 h-32 mb-8 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">Building Tomorrow</h3>
                  <p className="text-xl opacity-90 leading-relaxed">Creating exceptional spaces that enhance communities and deliver lasting value</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Partner with Brix Builds for your next development project. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your development project? Contact our team for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">5850 Granite Parkway, Suite 100<br />Plano, TX 75024</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(214) 555-0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@brixbuilds.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors text-gray-600">
                  <option>Project Type</option>
                  <option>Residential Development</option>
                  <option>Commercial Development</option>
                  <option>Mixed-Use Development</option>
                  <option>Build-to-Suit</option>
                  <option>Investment Advisory</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">BRIX BUILDS</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premier real estate development and construction company creating exceptional communities across Texas.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Residential Development</li>
                <li className="text-gray-400">Commercial Real Estate</li>
                <li className="text-gray-400">Mixed-Use Projects</li>
                <li className="text-gray-400">Investment Advisory</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>5850 Granite Parkway</li>
                <li>Plano, TX 75024</li>
                <li>(214) 555-0100</li>
                <li>info@brixbuilds.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Brix Builds Development Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrixBuildsWebsite;