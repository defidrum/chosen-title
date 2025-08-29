import { useState } from 'react';
import { Play, Clock, Users, Award, CheckCircle, ArrowLeft, Lock, PlayCircle, FileText, Video, ChevronRight, Star, CreditCard, X } from 'lucide-react';

const RealEstateDevelopmentCourse = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [isPurchased, setIsPurchased] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });
  
  const courseData = {
    title: "Real Estate Development Course",
    price: 997,
    originalPrice: 1500,
    duration: "12 weeks",
    students: 1247,
    rating: 4.9,
    instructor: "Tatyana & Jordan",
    description: "Master the complete real estate development process from land acquisition to project completion. Learn proven strategies used by successful developers to build profitable projects.",
    modules: [
      {
        id: 1,
        title: "Foundation of Real Estate Development",
        duration: "2 hours 45 min",
        lessons: [
          { id: 1, title: "Introduction to Real Estate Development", type: "video", duration: "12:30", isCompleted: false },
          { id: 2, title: "Market Analysis Fundamentals", type: "video", duration: "18:45", isCompleted: false },
          { id: 3, title: "Development Types Overview", type: "slides", duration: "15:20", isCompleted: false },
          { id: 4, title: "Case Study: Successful Development Projects", type: "video", duration: "22:15", isCompleted: false }
        ]
      },
      {
        id: 2,
        title: "Land Acquisition & Due Diligence",
        duration: "3 hours 20 min",
        lessons: [
          { id: 1, title: "Finding Development Opportunities", type: "video", duration: "16:30", isCompleted: false },
          { id: 2, title: "Site Analysis & Feasibility Studies", type: "slides", duration: "24:45", isCompleted: false },
          { id: 3, title: "Zoning and Regulatory Requirements", type: "video", duration: "19:20", isCompleted: false },
          { id: 4, title: "Environmental Assessments", type: "video", duration: "14:50", isCompleted: false },
          { id: 5, title: "Purchase Agreement Strategies", type: "slides", duration: "18:15", isCompleted: false }
        ]
      },
      {
        id: 3,
        title: "Project Financing & Capital Structure",
        duration: "2 hours 55 min",
        lessons: [
          { id: 1, title: "Development Financing Options", type: "video", duration: "20:30", isCompleted: false },
          { id: 2, title: "Creating Financial Pro Formas", type: "slides", duration: "25:45", isCompleted: false },
          { id: 3, title: "Investor Relations & Partnerships", type: "video", duration: "17:20", isCompleted: false },
          { id: 4, title: "Construction Loans & Permanent Financing", type: "video", duration: "22:40", isCompleted: false }
        ]
      },
      {
        id: 4,
        title: "Design & Entitlements",
        duration: "2 hours 15 min",
        lessons: [
          { id: 1, title: "Working with Architects & Engineers", type: "video", duration: "18:30", isCompleted: false },
          { id: 2, title: "Permit Process Navigation", type: "slides", duration: "16:45", isCompleted: false },
          { id: 3, title: "Design Development & Value Engineering", type: "video", duration: "21:20", isCompleted: false },
          { id: 4, title: "Managing Design Changes", type: "video", duration: "12:40", isCompleted: false }
        ]
      },
      {
        id: 5,
        title: "Construction Management",
        duration: "3 hours 30 min",
        lessons: [
          { id: 1, title: "Selecting the Right Contractor", type: "video", duration: "19:30", isCompleted: false },
          { id: 2, title: "Construction Contract Negotiations", type: "slides", duration: "22:45", isCompleted: false },
          { id: 3, title: "Project Scheduling & Milestones", type: "video", duration: "16:20", isCompleted: false },
          { id: 4, title: "Quality Control & Inspections", type: "video", duration: "18:50", isCompleted: false },
          { id: 5, title: "Managing Cost Overruns", type: "video", duration: "15:15", isCompleted: false }
        ]
      },
      {
        id: 6,
        title: "Sales & Marketing",
        duration: "2 hours 40 min",
        lessons: [
          { id: 1, title: "Market Positioning Strategy", type: "video", duration: "17:30", isCompleted: false },
          { id: 2, title: "Pre-Sales & Marketing Materials", type: "slides", duration: "19:45", isCompleted: false },
          { id: 3, title: "Working with Real Estate Agents", type: "video", duration: "14:20", isCompleted: false },
          { id: 4, title: "Closing & Final Delivery", type: "video", duration: "16:25", isCompleted: false }
        ]
      }
    ]
  };

  const currentModule = courseData.modules[selectedModule];
  const currentLesson = currentModule?.lessons[selectedLesson];

  const handlePurchase = async () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (e: any) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPurchased(true);
      setShowPaymentModal(false);
      setIsProcessingPayment(false);
      alert('Payment successful! Welcome to Real Estate Development Mastery!');
    }, 2000);
  };

  const goToNextLesson = () => {
    if (selectedLesson < currentModule.lessons.length - 1) {
      setSelectedLesson(selectedLesson + 1);
    } else if (selectedModule < courseData.modules.length - 1) {
      setSelectedModule(selectedModule + 1);
      setSelectedLesson(0);
    }
  };

  const goToPreviousLesson = () => {
    if (selectedLesson > 0) {
      setSelectedLesson(selectedLesson - 1);
    } else if (selectedModule > 0) {
      setSelectedModule(selectedModule - 1);
      setSelectedLesson(courseData.modules[selectedModule - 1].lessons.length - 1);
    }
  };

  // Course Header Component
  const CourseHeader = () => (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{courseData.description}</p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{courseData.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{courseData.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">${courseData.price.toLocaleString()}</span>
              <span className="text-xl text-blue-300 line-through ml-3">${courseData.originalPrice.toLocaleString()}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm ml-3">40% OFF</span>
            </div>
            
            {!isPurchased && (
              <button
                onClick={handlePurchase}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Enroll Now - ${courseData.price.toLocaleString()}
              </button>
            )}
            
            {isPurchased && (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg">
                <CheckCircle className="w-5 h-5 inline mr-2" />
                Enrolled - Full Access Granted
              </div>
            )}
          </div>
          
          <div className="relative">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                {isPurchased ? (
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all">
                    <Play className="w-16 h-16 text-white" />
                  </button>
                ) : (
                  <div className="text-center">
                    <Lock className="w-16 h-16 text-white mb-4 mx-auto" />
                    <p className="text-white text-lg">Course Preview</p>
                    <p className="text-blue-200">Full Access After Purchase</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Course Learning Interface
  const LearningInterface = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Video/Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="aspect-video bg-black">
              {currentLesson?.type === 'video' ? (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <PlayCircle className="w-20 h-20 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{currentLesson.title}</h3>
                    <p className="text-gray-300">Duration: {currentLesson.duration}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white">
                  <div className="text-center">
                    <FileText className="w-20 h-20 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{currentLesson.title}</h3>
                    <p className="text-blue-200">Interactive Slides & Materials</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Lesson Content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{currentLesson?.title}</h2>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Module {selectedModule + 1}
                  </span>
                  <span className="text-gray-600">Lesson {selectedLesson + 1}</span>
                  <span className="text-gray-600">• {currentLesson?.duration}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const lesson = { ...currentLesson, isCompleted: true };
                  // Update lesson completion status
                }}
                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Mark Complete
              </button>
            </div>
            
            <div className="prose max-w-none mb-6">
              <h3 className="text-lg font-semibold mb-3">Lesson Overview</h3>
              <p className="text-gray-700 mb-4">
                This comprehensive lesson covers the essential concepts you need to master this aspect 
                of real estate development. You'll gain practical insights and actionable strategies 
                that you can implement immediately.
              </p>
              
              <h4 className="font-semibold mb-2">What You'll Learn:</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Core principles and fundamentals</li>
                <li>Step-by-step implementation process</li>
                <li>Real-world case studies and examples</li>
                <li>Common mistakes and how to avoid them</li>
                <li>Advanced strategies for optimization</li>
              </ul>

              <h4 className="font-semibold mb-2">Resources:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PDF Worksheet</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Excel Templates</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Bonus Materials</span>
              </div>
            </div>
            
            <div className="flex justify-between border-t pt-4">
              <button
                onClick={goToPreviousLesson}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
                disabled={selectedModule === 0 && selectedLesson === 0}
              >
                ← Previous
              </button>
              
              <button
                onClick={goToNextLesson}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
                disabled={selectedModule === courseData.modules.length - 1 && selectedLesson === currentModule.lessons.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
        
        {/* Course Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-6">
            <div className="p-4 border-b bg-blue-50">
              <h3 className="font-bold text-blue-900">Course Content</h3>
              <p className="text-sm text-blue-700">{courseData.modules.length} modules • 22 lessons</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {courseData.modules.map((module, moduleIndex) => (
                <div key={module.id} className="border-b">
                  <button
                    onClick={() => {
                      setSelectedModule(moduleIndex);
                      setSelectedLesson(0);
                    }}
                    className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1 text-gray-900">{module.title}</h4>
                        <p className="text-xs text-gray-600">{module.lessons.length} lessons • {module.duration}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform text-gray-400 ${selectedModule === moduleIndex ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  
                  {selectedModule === moduleIndex && (
                    <div className="bg-gray-50">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lessonIndex)}
                          className={`w-full p-3 pl-6 text-left text-sm hover:bg-blue-50 transition-colors ${
                            selectedLesson === lessonIndex ? 'bg-blue-100 border-l-2 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-center">
                            {lesson.type === 'video' ? (
                              <Video className="w-3 h-3 mr-2 text-blue-600" />
                            ) : (
                              <FileText className="w-3 h-3 mr-2 text-green-600" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 truncate">{lesson.title}</p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                            {lesson.isCompleted && (
                              <CheckCircle className="w-3 h-3 text-green-500 ml-1" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Course Preview (for non-purchased users)
  const CoursePreview = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Course Curriculum Preview</h2>
          <p className="text-gray-600">Get full access to all modules and lessons after purchase</p>
        </div>
        
        {courseData.modules.map((module, index) => (
          <div key={module.id} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Module {index + 1}: {module.title}
                </h3>
                <span className="text-sm text-gray-600">{module.duration}</span>
              </div>
            </div>
            
            <div className="p-4">
              {module.lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    {lesson.type === 'video' ? (
                      <Video className="w-4 h-4 mr-3 text-blue-600" />
                    ) : (
                      <FileText className="w-4 h-4 mr-3 text-green-600" />
                    )}
                    <span className="text-gray-700">{lesson.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-3">{lesson.duration}</span>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <button
            onClick={handlePurchase}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            Unlock Full Course - ${courseData.price.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );

  // Payment Modal
  const PaymentModal = () => (
    showPaymentModal && (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Complete Your Purchase</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Order Summary</h4>
              <div className="flex justify-between items-center mb-2">
                <span>{courseData.title}</span>
                <span className="line-through text-gray-500">${courseData.originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-600 font-medium">40% Discount</span>
                <span className="text-green-600">-${(courseData.originalPrice - courseData.price).toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>${courseData.price.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Payment Form */}
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={paymentData.name}
                  onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={paymentData.email}
                  onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-800">
                    Secure payment processing with 256-bit SSL encryption
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isProcessingPayment}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {isProcessingPayment ? 'Processing...' : `Complete Purchase - $${courseData.price.toLocaleString()}`}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              30-day money-back guarantee. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader />
      {isPurchased ? <LearningInterface /> : <CoursePreview />}
      <PaymentModal />
    </div>
  );
};

export default RealEstateDevelopmentCourse;