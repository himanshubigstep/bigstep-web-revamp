
'use client';

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why BigStep?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our unique approach and expertise make us the trusted partner for digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Our Differentiators</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-award-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Expertise</h4>
                  <p className="text-gray-600">
                    Deep understanding of legal industry workflows, compliance requirements, and pain points gained from 50+ legal tech projects over 8 years.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-brain-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Cutting-Edge AI Innovation</h4>
                  <p className="text-gray-600">
                    Our team includes PhD-level AI researchers and engineers who stay at the forefront of machine learning and natural language processing technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-user-heart-line w-6 h-6 flex items-center justify-center text-purple-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Client-Centric Approach</h4>
                  <p className="text-gray-600">
                    We prioritize understanding your unique challenges and tailor solutions specifically to your firm's needs, ensuring maximum value and adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-orange-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Security First</h4>
                  <p className="text-gray-600">
                    Built-in compliance with SOC 2, GDPR, and legal industry standards from day one, with end-to-end encryption and advanced security protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Why They Chose Us</h3>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Proven Track Record</h4>
                  <p className="text-sm text-gray-600">
                    Successfully delivered 200+ enterprise projects with 98% client satisfaction rate and zero security incidents.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Agile Methodology</h4>
                  <p className="text-sm text-gray-600">
                    Our iterative approach allows for continuous feedback and adjustments, ensuring the final solution perfectly fits your needs.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Comprehensive Support</h4>
                  <p className="text-sm text-gray-600">
                    From initial consultation to post-launch maintenance, we provide end-to-end support with 24/7 technical assistance.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-800 mb-2">Scalable Solutions</h4>
                  <p className="text-sm text-gray-600">
                    Our cloud-native architecture grows with your business, handling increased workloads without performance degradation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">8+</div>
                <p className="text-xs text-gray-600">Years of Experience</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">200+</div>
                <p className="text-xs text-gray-600">Projects Delivered</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                <p className="text-xs text-gray-600">Legal Tech Projects</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">98%</div>
                <p className="text-xs text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the growing number of legal firms leveraging AI to improve efficiency, reduce costs, and deliver better client experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold mb-1">Free</div>
              <p className="text-sm text-blue-100">Initial Consultation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold mb-1">30-Day</div>
              <p className="text-sm text-blue-100">Money-Back Guarantee</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold mb-1">24/7</div>
              <p className="text-sm text-blue-100">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
