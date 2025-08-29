import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Users, Book, Building, Star } from 'lucide-react';
import BrixBuildsLogo from "../img/brixbuildslogo.png"
import Jordan from "../img/jordan.png"
import Tatyana from "../img/tatyana.png"
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your consultation.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const openContactForm = (course : any) => {
    setSelectedCourse(course);
    setFormData(prev => ({ ...prev, course }));
    setShowContactForm(true);
  };

  const handleCourseNavigation = (courseType: string) => {
      if (courseType === 'development') {
        navigate('/redevelopment');
      } else if (courseType === 'nascla') {
        navigate('/nasclaprep');
      } else if (courseType === 'mentorship') {
        navigate('/mentorship');
      }
  };

  // Header Component
  const Header = () => (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <img 
                src={BrixBuildsLogo} 
                alt="Brix Builds Academy Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">BRIX BUILDS ACADEMY</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Courses</a>
            {/* <a href="#mentorship" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Mentorship</a> */}
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors">About</a>
            <button 
              onClick={() => openContactForm('consultation')}
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Schedule a call
            </button>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#mentorship" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mentorship</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <button 
              onClick={() => openContactForm('consultation')}
              className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold"
            >
              Book Free Call
            </button>
          </div>
        </div>
      )}
    </header>
  );

  // Hero Section with Video Background
  const HeroSection = () => (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        {/* Fallback background for browsers that don't support video */}
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800" style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
     <div className="absolute inset-0 bg-black/55"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Become a Real Estate
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Developer
            </span>
          </h1>
          <p className="text-xl text-white drop-shadow-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our comprehensive real estate development and general contracting programs. 
            Get licensed to build in 17 states and gain hands-on experience at live construction sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openContactForm('development')}
              className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey Today
            </button>
            <button 
              onClick={() => openContactForm('consultation')}
              className="border-2 border-white hover:bg-white hover:text-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Course Card Component
  const CourseCard = ({ title, description, features, gradient, buttonText, buttonColor, courseType }: any)  => (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${gradient} p-6`}>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white opacity-90">{description}</p>
      </div>
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => handleCourseNavigation(courseType)}
          className={`w-full ${buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-colors hover:shadow-lg`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );

// Courses Section
const CoursesSection = () => (
  <section id="courses" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Future</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose from our comprehensive programs designed to take you from beginner to industry professional
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <CourseCard
          title="Real Estate Developer Course"
          description="Step-by-step system to become a successful developer"
          features={[
            "Complete development process from A-Z",
            "Land acquisition and feasibility analysis",
            "Project financing and investor relations",
            "Construction management and oversight"
          ]}
          gradient="from-blue-500 to-purple-600"
          buttonText="Become a Developer"
          buttonColor="bg-blue-600 hover:bg-blue-700"
          courseType="development"
        />
        
        <CourseCard
          title="General Contractor Licensing Course"
          description="Get licensed to build in 17 states"
          features={[
            "Complete NASCLA exam preparation",
            "Multi-state contracting opportunities",
            "Practice quizzes and mock exams",
            "Test-taking strategy"
          ]}
          gradient="from-green-500 to-blue-600"
          buttonText="Get Licensed"
          buttonColor="bg-green-600 hover:bg-green-700"
          courseType="nascla"
        />

        {/* Mentorship as another card */}
        <CourseCard
          title="Hands-On Mentorship"
          description="Learn directly from active developers on real projects"
          features={[
            "Visit active construction sites",
            "Meet contractors and architects",
            "Learn project management in real-time",
            "Build your professional network"
          ]}
          gradient="from-purple-600 to-pink-500"
          buttonText="Join Our Mentorship"
          buttonColor="bg-purple-600 hover:bg-purple-700"
          courseType="mentorship"
        />
      </div>
    </div>
  </section>
);


  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced professionals who are actively building and developing real estate projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
              <img 
                src={Tatyana}
                alt="Tatyana - Co-Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tatyana</h3>
            <p className="text-blue-600 font-semibold mb-4">Co-Founder & Development Specialist</p>
            <p className="text-gray-600 leading-relaxed">
              Tatyana brings extensive experience in real estate development and project management. 
              She specializes in turning complex development projects into profitable ventures and has 
              helped numerous students launch successful careers in real estate development.
            </p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
              <img 
                src={Jordan}
                alt="Jordan - Co-Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Jordan</h3>
            <p className="text-blue-600 font-semibold mb-4">Co-Founder & Construction Expert</p>
            <p className="text-gray-600 leading-relaxed">
              Jordan is a licensed general contractor with expertise in multi-state construction projects. 
              He leads our NASCLA preparation course and mentorship program, bringing real-world 
              construction experience directly to our students.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Brix Builds?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Book className="w-8 h-8 text-blue-600" />,
                title: "Proven System",
                description: "Step-by-step methodology tested on real projects",
                bgColor: "bg-blue-100"
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: "Personal Mentorship",
                description: "Direct access to successful developers and builders",
                bgColor: "bg-green-100"
              },
              {
                icon: <Building className="w-8 h-8 text-purple-600" />,
                title: "Real Experience",
                description: "Learn at active construction sites and projects",
                bgColor: "bg-purple-100"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Future?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join hundreds of successful graduates who have transformed their careers through our proven system
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => openContactForm('consultation')}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Your Free Call
          </button>
          <button 
            onClick={() => openContactForm('all')}
            className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );

  // Contact Form Modal
  const ContactForm = () => (
    showContactForm && (
      <div
        className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
        onClick={() => setShowContactForm(false)} // close on backdrop click
            >
        <div
          className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
        >
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Started Today</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1">Full Name</div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1">Email</div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1">Phone</div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1">Interested Program</div>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a program</option>
                  <option value="development">Real Estate Development</option>
                  <option value="nascla">NASCLA Licensing</option>
                  <option value="mentorship">Construction Site Mentorship</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your goals..."
                />
              </div>
              
              <button
                onClick={handleFormSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <CTASection />
      <ContactForm />
    </div>
  );
};

export default Home;