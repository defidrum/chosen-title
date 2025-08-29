import { useState } from 'react';
import { ArrowLeft, Star, Users, Calendar, MapPin, CheckCircle, X, Building, Award, House } from 'lucide-react';

const MentorshipProgram = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [isProcessingApplication, setIsProcessingApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    availability: '',
    location: ''
  });

  const programData = {
    title: "Construction Site Mentorship Program",
    price: 5000,
    originalPrice: 10000,
    duration: "12 weeks",
    cohortSize: "6-8 students",
    nextStart: "March 15, 2025",
    locations: ["Dallas, TX"]
  };

  const handleApplicationSubmit = () => {
    setIsProcessingApplication(true);
    
    setTimeout(() => {
      setIsProcessingApplication(false);
      setShowApplicationModal(false);
      alert('Application submitted! We will contact you within 48 hours.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <House className="w-10 h-10 text-yellow-400 mr-4" />
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  LIMITED ENROLLMENT
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">{programData.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get hands-on experience at real construction sites. Learn directly from active developers 
                and contractors while building your professional network in small, personalized cohorts.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">{programData.cohortSize}</div>
                  <div className="text-sm text-blue-200">Students per cohort</div>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">12</div>
                  <div className="text-sm text-blue-200">Weeks program</div>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl font-bold">${programData.price.toLocaleString()}</span>
                <span className="text-2xl text-blue-300 line-through ml-4">${programData.originalPrice.toLocaleString()}</span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm ml-4 font-bold">33% OFF</span>
              </div>
              
              <button
                onClick={() => setShowApplicationModal(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Apply for Mentorship
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <House className="w-24 h-24 text-white mb-4 mx-auto" />
                    <p className="text-white text-xl font-semibold">Real Construction Sites</p>
                    <p className="text-blue-200">Live Learning Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">What You'll Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Visit 4-6 active construction sites",
                "Meet contractors, architects, and investors",
                "Weekly group sessions with mentors",
                "Real-time project management training",
                "Build your professional network",
                "Portfolio development guidance"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-4">12-Week Program</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-blue-600">Weeks 1-3: Foundation</div>
                  <div className="text-gray-600">Safety training, first site visits</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-blue-600">Weeks 4-8: Active Learning</div>
                  <div className="text-gray-600">Construction management, problem solving</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-blue-600">Weeks 9-12: Mastery</div>
                  <div className="text-gray-600">Investor relations, project completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Martinez",
                role: "Development Manager",
                quote: "I learned more in 12 weeks than 2 years of reading books.",
                result: "Landed $85K job within 3 months"
              },
              {
                name: "Mike Johnson",
                role: "Construction Company Owner",
                quote: "Meeting investors through the program changed everything.",
                result: "$2M first development project"
              },
              {
                name: "Lisa Chen",
                role: "Real Estate Investor",
                quote: "Understanding construction made me a smarter investor.",
                result: "Portfolio grew from $500K to $2M"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-800 font-semibold">Result:</div>
                  <div className="text-green-700">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowApplicationModal(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900">Apply for Mentorship</h3>
                <button 
                  onClick={() => setShowApplicationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-yellow-600 mr-2" />
                  <h4 className="font-bold text-yellow-800">Selective Program</h4>
                </div>
                <p className="text-yellow-700 text-sm">
                  We accept only 6-8 students per cohort for personalized attention.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData({...applicationData, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData({...applicationData, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location</label>
                  <select
                    value={applicationData.location}
                    onChange={(e) => setApplicationData({...applicationData, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select location</option>
                    {programData.locations.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Goals</label>
                  <textarea
                    value={applicationData.goals}
                    onChange={(e) => setApplicationData({...applicationData, goals: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What do you hope to achieve?"
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">Investment: ${programData.price.toLocaleString()}</h4>
                  <p className="text-blue-800 text-sm">
                    Payment plans available. Includes all visits and materials.
                  </p>
                </div>
                
                <button
                  onClick={handleApplicationSubmit}
                  disabled={isProcessingApplication}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-bold transition-colors"
                >
                  {isProcessingApplication ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipProgram;