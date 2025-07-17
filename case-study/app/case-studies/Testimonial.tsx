
'use client';

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
          <p className="text-lg text-gray-600">What our client says about the transformation</p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-double-quotes-l text-blue-600 text-xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex text-yellow-400 mb-2">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The AI workflow transformation has revolutionized how we handle cases. Document processing that used to take hours now happens in minutes, and our team can focus on high-value legal work instead of administrative tasks. The ROI exceeded our expectations within the first quarter."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">Managing Partner, Mitchell & Associates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
