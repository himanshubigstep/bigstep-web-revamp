
'use client';

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Delivered</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered features that transformed the law firm's operations and client service capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-file-text-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Intelligent Document Generator</h3>
                  <p className="text-gray-600 text-sm">
                    AI-powered system that generates legal documents from templates with 95% accuracy, reducing document creation time by 80%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-search-2-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Legal Research Assistant</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced search engine with natural language processing that finds relevant case law and precedents in seconds
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-calendar-check-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Automated Case Management</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive case tracking with automated deadline reminders, task assignments, and progress monitoring
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-chat-3-line w-6 h-6 flex items-center justify-center text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Communication Hub</h3>
                  <p className="text-gray-600 text-sm">
                    Unified platform for client interactions with automated updates, secure messaging, and document sharing
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-red-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Contract Risk Analyzer</h3>
                  <p className="text-gray-600 text-sm">
                    ML-powered tool that identifies potential risks and compliance issues in contracts with detailed risk scores
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-time-line w-6 h-6 flex items-center justify-center text-indigo-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Intelligent Time Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Automated time capture and billing system that tracks work across multiple platforms and generates accurate invoices
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-bar-chart-line w-6 h-6 flex items-center justify-center text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Analytics Dashboard</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time insights into firm performance, case outcomes, client satisfaction, and financial metrics
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-robot-2-line w-6 h-6 flex items-center justify-center text-pink-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Legal Assistant Chatbot</h3>
                  <p className="text-gray-600 text-sm">
                    24/7 intelligent assistant that helps lawyers with research queries, document searches, and procedural questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
