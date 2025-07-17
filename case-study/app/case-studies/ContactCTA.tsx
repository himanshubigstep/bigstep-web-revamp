
'use client';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help you achieve similar results with our AI-powered solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Schedule a Consultation
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
            View More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
