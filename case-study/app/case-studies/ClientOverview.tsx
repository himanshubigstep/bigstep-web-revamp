
'use client';

export default function ClientOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About Our Client</h3>
                <p className="text-gray-600 leading-relaxed">
                  A prestigious mid-sized law firm specializing in corporate law, intellectual property, and litigation services. With over 150 legal professionals across three offices, they handle complex cases for Fortune 500 companies and emerging startups.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="ri-building-4-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Industry</span>
                  </div>
                  <p className="text-gray-600">Legal Services</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="ri-calendar-line w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Founded</span>
                  </div>
                  <p className="text-gray-600">2008</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-purple-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Geography</span>
                  </div>
                  <p className="text-gray-600">3 Offices</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="ri-award-line w-5 h-5 flex items-center justify-center text-orange-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Recognition</span>
                  </div>
                  <p className="text-gray-600">Top Law Firm 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Core Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Document Management</h4>
                    <p className="text-gray-600 text-sm">Processing 1000+ legal documents monthly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Case Management</h4>
                    <p className="text-gray-600 text-sm">Managing 200+ active cases simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Client Communication</h4>
                    <p className="text-gray-600 text-sm">Coordinating with 500+ active clients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Research & Analysis</h4>
                    <p className="text-gray-600 text-sm">Conducting legal research and case analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
