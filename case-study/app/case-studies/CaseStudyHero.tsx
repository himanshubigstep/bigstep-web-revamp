
'use client';

export default function CaseStudyHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
           style={{
             backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20office%20environment%20with%20digital%20transformation%20technology%2C%20AI%20automation%20systems%2C%20sleek%20workspace%20with%20computer%20screens%20showing%20data%20analytics%20and%20workflow%20diagrams%2C%20professional%20business%20setting%20with%20blue%20and%20white%20color%20scheme%2C%20minimalist%20design%2C%20high-tech%20atmosphere&width=1920&height=800&seq=hero-case-study&orientation=landscape')`
           }}>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-award-line w-4 h-4 flex items-center justify-center mr-2"></i>
            Case Study
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Workflow Transformation for a Law Firm
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Digitizing Legal Operations with AI-Powered Automation and Smart Document Processing
          </p>
        </div>
      </div>
    </section>
  );
}
