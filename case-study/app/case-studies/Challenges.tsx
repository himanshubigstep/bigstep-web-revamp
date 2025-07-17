
'use client';

export default function Challenges() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Challenges & Problem Statement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The law firm faced critical operational bottlenecks that were impacting their efficiency, 
            client satisfaction, and overall business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-file-text-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Manual Document Processing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lawyers spent 60% of their time on document review, contract analysis, and administrative tasks instead of high-value legal work.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-time-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Delayed Client Response</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Average response time for client inquiries was 48-72 hours due to information scattered across multiple systems and manual processes.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-database-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Fragmented Information Systems</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Critical case information was stored across 7 different platforms, making data retrieval time-consuming and error-prone.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-error-warning-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Human Error in Legal Research</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manual research processes led to missed precedents and inconsistent case preparation, affecting case outcomes and client trust.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-money-dollar-circle-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Billing & Time Tracking Issues</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inaccurate time tracking and billing disputes resulted in 15% revenue leakage and strained client relationships.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-scale-line w-6 h-6 flex items-center justify-center text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Scalability Constraints</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Legacy systems couldn't handle growing caseload volume, creating bottlenecks that limited the firm's growth potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
