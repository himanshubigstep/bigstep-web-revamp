
'use client';

export default function ProjectObjective() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Objective</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The client approached us to modernize their legal operations and eliminate time-consuming manual processes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-file-text-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Document Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Automate document generation, review, and processing to reduce manual effort by 70% and minimize errors in legal paperwork.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-search-line w-6 h-6 flex items-center justify-center text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Research</h3>
            <p className="text-gray-600 leading-relaxed">
              Implement AI-powered legal research tools to accelerate case preparation and provide more comprehensive analysis capabilities.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-dashboard-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Workflow Optimization</h3>
            <p className="text-gray-600 leading-relaxed">
              Create streamlined workflows for case management, client communication, and internal collaboration to improve efficiency.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-time-line w-6 h-6 flex items-center justify-center text-orange-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Time Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Implement automated time tracking and billing systems to improve accuracy and reduce administrative overhead.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance & Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure all digital solutions meet legal industry compliance requirements and maintain the highest security standards.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-bar-chart-line w-6 h-6 flex items-center justify-center text-indigo-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics & Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide comprehensive analytics and reporting capabilities to help partners make data-driven business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
