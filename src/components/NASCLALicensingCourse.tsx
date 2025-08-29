import { useState } from 'react';
import { Play, Clock, Users, Award, CheckCircle, ArrowLeft, Lock, PlayCircle, FileText, Video, ChevronRight, Star, CreditCard, X, BookOpen, Target, Shield } from 'lucide-react';

const NASCLALicensingCourse = () => {
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
    title: "NASCLA General Contractor Licensing",
    price: 997,
    originalPrice: 1497,
    duration: "8 weeks",
    students: 892,
    rating: 4.9,
    instructor: "Jordan Drummond",
    description: "Get licensed to work as a general contractor in 17 states. Comprehensive NASCLA exam preparation with guaranteed pass rate and ongoing support.",
    passRate: 97,
    modules: [
      {
        id: 1,
        title: "NASCLA Exam Overview & Strategy",
        duration: "1 hour 30 min",
        lessons: [
          { id: 1, title: "Understanding the NASCLA Exam", type: "video", duration: "15:45", isCompleted: false },
          { id: 2, title: "17-State Reciprocity Benefits", type: "slides", duration: "12:30", isCompleted: false },
          { id: 3, title: "Exam Structure & Format", type: "video", duration: "18:20", isCompleted: false },
          { id: 4, title: "Study Strategy & Timeline", type: "slides", duration: "14:15", isCompleted: false }
        ]
      },
      {
        id: 2,
        title: "Business Law & Regulations",
        duration: "2 hours 45 min",
        lessons: [
          { id: 1, title: "Contract Law Fundamentals", type: "video", duration: "22:30", isCompleted: false },
          { id: 2, title: "Mechanic's Liens & Legal Rights", type: "video", duration: "19:45", isCompleted: false },
          { id: 3, title: "Insurance Requirements & Bonding", type: "slides", duration: "16:20", isCompleted: false },
          { id: 4, title: "Labor Laws & Employment", type: "video", duration: "18:40", isCompleted: false },
          { id: 5, title: "Building Codes & Permits", type: "slides", duration: "21:15", isCompleted: false }
        ]
      },
      {
        id: 3,
        title: "Project Management & Scheduling",
        duration: "2 hours 20 min",
        lessons: [
          { id: 1, title: "Construction Scheduling Methods", type: "video", duration: "20:30", isCompleted: false },
          { id: 2, title: "Critical Path Method (CPM)", type: "slides", duration: "25:45", isCompleted: false },
          { id: 3, title: "Resource Planning & Management", type: "video", duration: "17:20", isCompleted: false },
          { id: 4, title: "Cost Control & Budget Management", type: "video", duration: "19:15", isCompleted: false },
          { id: 5, title: "Quality Control Systems", type: "slides", duration: "16:30", isCompleted: false }
        ]
      },
      {
        id: 4,
        title: "Safety & Risk Management",
        duration: "2 hours 10 min",
        lessons: [
          { id: 1, title: "OSHA Standards & Compliance", type: "video", duration: "24:30", isCompleted: false },
          { id: 2, title: "Worksite Safety Planning", type: "slides", duration: "18:45", isCompleted: false },
          { id: 3, title: "Risk Assessment & Mitigation", type: "video", duration: "21:20", isCompleted: false },
          { id: 4, title: "Incident Reporting & Documentation", type: "video", duration: "15:40", isCompleted: false },
          { id: 5, title: "Safety Training Programs", type: "slides", duration: "19:25", isCompleted: false }
        ]
      },
      {
        id: 5,
        title: "Financial Management & Accounting",
        duration: "2 hours 15 min",
        lessons: [
          { id: 1, title: "Construction Accounting Principles", type: "video", duration: "22:30", isCompleted: false },
          { id: 2, title: "Job Costing & Progress Billing", type: "slides", duration: "20:15", isCompleted: false },
          { id: 3, title: "Cash Flow Management", type: "video", duration: "18:30", isCompleted: false },
          { id: 4, title: "Tax Considerations for Contractors", type: "video", duration: "16:45", isCompleted: false },
          { id: 5, title: "Financial Reporting & Analysis", type: "slides", duration: "17:30", isCompleted: false }
        ]
      },
      {
        id: 6,
        title: "Exam Preparation & Practice Tests",
        duration: "3 hours",
        lessons: [
          { id: 1, title: "Practice Test #1 - Business Law", type: "slides", duration: "45:00", isCompleted: false },
          { id: 2, title: "Practice Test #2 - Project Management", type: "slides", duration: "45:00", isCompleted: false },
          { id: 3, title: "Practice Test #3 - Safety & Finance", type: "slides", duration: "45:00", isCompleted: false },
          { id: 4, title: "Final Comprehensive Practice Exam", type: "slides", duration: "60:00", isCompleted: false }
        ]
      }
    ],
    supportedStates: [
      "Alabama", "Arizona", "Arkansas", "Florida", "Georgia", 
      "Louisiana", "Mississippi", "Nevada", "New Mexico", 
      "North Carolina", "South Carolina", "Tennessee", "Utah", 
      "Virginia", "Virgin Islands", "West Virginia"
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
    
    setTimeout(() => {
      setIsPurchased(true);
      setShowPaymentModal(false);
      setIsProcessingPayment(false);
      alert('Payment successful! Welcome to NASCLA Licensing Prep!');
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
    <div className="bg-gradient-to-r from-green-900 via-green-800 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-green-200 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-300 mr-3" />
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Powered by Brix Builds
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-xl text-green-100 mb-6">{courseData.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-800 bg-opacity-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-200">{courseData.passRate}%</div>
                <div className="text-sm text-green-300">Pass Rate</div>
              </div>
              <div className="bg-green-800 bg-opacity-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-200">17</div>
                <div className="text-sm text-green-300">States</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{courseData.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{courseData.students} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{courseData.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">${courseData.price}</span>
              <span className="text-xl text-green-300 line-through ml-3">${courseData.originalPrice}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm ml-3">40% OFF</span>
            </div>
            
            {!isPurchased && (
              <button
                onClick={handlePurchase}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Get Licensed Now - ${courseData.price}
              </button>
            )}
            
            {isPurchased && (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg">
                <CheckCircle className="w-5 h-5 inline mr-2" />
                Enrolled - Licensing Journey Started
              </div>
            )}
          </div>
          
          <div className="relative">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                {isPurchased ? (
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all">
                    <Play className="w-16 h-16 text-white" />
                  </button>
                ) : (
                  <div className="text-center">
                    <Lock className="w-16 h-16 text-white mb-4 mx-auto" />
                    <p className="text-white text-lg">NASCLA Prep Preview</p>
                    <p className="text-green-200">Full Access After Purchase</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* State Coverage Display */}
            <div className="mt-4 bg-transparent bg-opacity-10 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">17-State Coverage</h4>
              <div className="text-sm text-green-200">
                Get licensed in: Florida, North Carolina, Georgia, Arizona + 13 more states
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Learning Interface
  const LearningInterface = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content Area */}
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
                <div className="w-full h-full flex items-center justify-center bg-green-900 text-white">
                  <div className="text-center">
                    <Target className="w-20 h-20 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{currentLesson.title}</h3>
                    <p className="text-green-200">Practice Tests & Study Materials</p>
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
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Module {selectedModule + 1}
                  </span>
                  <span className="text-gray-600">Lesson {selectedLesson + 1}</span>
                  <span className="text-gray-600">• {currentLesson?.duration}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  // Mark lesson complete logic
                }}
                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Mark Complete
              </button>
            </div>
            
            <div className="prose max-w-none mb-6">
              <h3 className="text-lg font-semibold mb-3">Lesson Content</h3>
              <p className="text-gray-700 mb-4">
                Master the essential knowledge and regulations required for NASCLA certification. 
                This lesson provides comprehensive coverage of the topic with real-world applications 
                and exam-focused content.
              </p>
              
              <h4 className="font-semibold mb-2">Learning Objectives:</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Understand key regulatory requirements</li>
                <li>Apply concepts to real construction scenarios</li>
                <li>Master exam-relevant information</li>
                <li>Practice with sample questions</li>
                <li>Build confidence for certification</li>
              </ul>

              <h4 className="font-semibold mb-2">Study Materials:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Study Guide</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Practice Questions</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Reference Materials</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">State Regulations</span>
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
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
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
            <div className="p-4 border-b bg-green-50">
              <h3 className="font-bold text-green-900">NASCLA Prep Content</h3>
              <p className="text-sm text-green-700">{courseData.modules.length} modules • {courseData.passRate}% pass rate</p>
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
                          className={`w-full p-3 pl-6 text-left text-sm hover:bg-green-50 transition-colors ${
                            selectedLesson === lessonIndex ? 'bg-green-100 border-l-2 border-green-500' : ''
                          }`}
                        >
                          <div className="flex items-center">
                            {lesson.type === 'video' ? (
                              <Video className="w-3 h-3 mr-2 text-green-600" />
                            ) : (
                              <Target className="w-3 h-3 mr-2 text-blue-600" />
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

  // Course Preview
  const CoursePreview = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">NASCLA Prep Curriculum</h2>
          <p className="text-gray-600">
            Comprehensive preparation for your general contractor licensing exam
          </p>
          <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 mr-2" />
            {courseData.passRate}% Pass Rate
          </div>
        </div>
        
        {/* Supported States */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold mb-3 text-green-900">17 State Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {courseData.supportedStates.map((state, index) => (
              <div key={index} className="flex items-center text-green-700">
                <CheckCircle className="w-4 h-4 mr-2" />
                {state}
              </div>
            ))}
          </div>
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
                      <Video className="w-4 h-4 mr-3 text-green-600" />
                    ) : (
                      <Target className="w-4 h-4 mr-3 text-blue-600" />
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
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            Start Your Licensing Journey - ${courseData.price}
          </button>
        </div>
      </div>
    </div>
  );

  // Payment Modal (similar to Real Estate course)
  const PaymentModal = () => (
    showPaymentModal && (
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowPaymentModal(false)}
      >
        <div 
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Get NASCLA Licensed</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Order Summary */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Order Summary</h4>
              <div className="flex justify-between items-center mb-2">
                <span>{courseData.title}</span>
                <span className="line-through text-gray-500">${courseData.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-600 font-medium">40% Discount</span>
                <span className="text-green-600">-${courseData.originalPrice - courseData.price}</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>${courseData.price}</span>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={paymentData.email}
                  onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-green-800 font-medium">
                    97% Pass Rate - Become a licensed General Contractor!
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isProcessingPayment}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {isProcessingPayment ? 'Processing...' : `Get Licensed - ${courseData.price}`}
              </button>
            </form>
            
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

export default NASCLALicensingCourse;