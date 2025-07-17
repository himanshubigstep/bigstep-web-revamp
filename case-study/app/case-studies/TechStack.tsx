
'use client';

export default function TechStack() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and tools used to build this comprehensive AI-powered legal platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">AI & Machine Learning</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-brain-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">GPT-4</h4>
                  <p className="text-xs text-gray-600">Language processing</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-links-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">LangChain</h4>
                  <p className="text-xs text-gray-600">AI application framework</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-database-line w-5 h-5 flex items-center justify-center text-purple-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">TensorFlow</h4>
                  <p className="text-xs text-gray-600">Machine learning</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-eye-line w-5 h-5 flex items-center justify-center text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">spaCy</h4>
                  <p className="text-xs text-gray-600">NLP processing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Backend & APIs</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-code-s-slash-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Python</h4>
                  <p className="text-xs text-gray-600">Core backend language</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-fire-line w-5 h-5 flex items-center justify-center text-red-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">FastAPI</h4>
                  <p className="text-xs text-gray-600">API framework</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-nodejs-line w-5 h-5 flex items-center justify-center text-yellow-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Node.js</h4>
                  <p className="text-xs text-gray-600">Runtime environment</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-settings-3-line w-5 h-5 flex items-center justify-center text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Redis</h4>
                  <p className="text-xs text-gray-600">Caching & sessions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Frontend & UI</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-reactjs-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">React</h4>
                  <p className="text-xs text-gray-600">Frontend library</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-arrow-right-circle-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Next.js</h4>
                  <p className="text-xs text-gray-600">React framework</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-css3-line w-5 h-5 flex items-center justify-center text-cyan-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Tailwind CSS</h4>
                  <p className="text-xs text-gray-600">Styling framework</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-javascript-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">TypeScript</h4>
                  <p className="text-xs text-gray-600">Type-safe JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Infrastructure & DevOps</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-cloud-line w-5 h-5 flex items-center justify-center text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">AWS</h4>
                  <p className="text-xs text-gray-600">Cloud platform</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-ship-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Docker</h4>
                  <p className="text-xs text-gray-600">Containerization</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-settings-4-line w-5 h-5 flex items-center justify-center text-purple-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Kubernetes</h4>
                  <p className="text-xs text-gray-600">Container orchestration</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-database-2-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">PostgreSQL</h4>
                  <p className="text-xs text-gray-600">Primary database</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
