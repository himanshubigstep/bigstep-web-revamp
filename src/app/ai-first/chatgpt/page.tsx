"use client";
import React from "react";
import ContactFormSimple from "@/app/components/common/contact-us/simple-contact-form/ContactFormSimple";
import Image from "next/image";
import { useState } from "react";
import ClientCarousel from '@/app/components/common/client-carousel/ClientCarousel';
import { useEffect } from "react";
import { fetchChatgptData, fetchfaqData, fetchsolutionData } from "@/api-data/api";

const useCases = [
  {
    title: "E-commerce Personalization",
    description: "Boost sales with AI-powered product recommendations and personalized shopping experiences that adapt to customer behavior.",
    icon: "ri-shopping-cart-line",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Predictive Maintenance",
    description: "Reduce downtime and maintenance costs by predicting equipment failures before they happen using IoT data and ML algorithms.",
    icon: "ri-tools-line",
    color: "from-green-500 to-blue-600"
  },
  {
    title: "Customer Service Automation",
    description: "Deploy intelligent chatbots and virtual assistants that understand context and provide human-like customer support 24/7.",
    icon: "ri-customer-service-2-line",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Fraud Detection",
    description: "Protect your business with real-time fraud detection systems that learn from patterns and adapt to new threats.",
    icon: "ri-shield-check-line",
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Supply Chain Optimization",
    description: "Optimize inventory, reduce costs, and improve delivery times with AI-powered supply chain management solutions.",
    icon: "ri-truck-line",
    color: "from-teal-500 to-green-600"
  },
  {
    title: "Healthcare Diagnostics",
    description: "Enhance medical diagnosis accuracy with AI-powered image analysis and pattern recognition for better patient outcomes.",
    icon: "ri-heart-pulse-line",
    color: "from-pink-500 to-red-600"
  }
];



export default function ChatGPTIntegrationPage() {
  const [chatgptData, setChatgptData] = useState<unknown>(null);
  const [faqData, setFaqData] = useState<unknown>(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const chatgptinfo = await fetchChatgptData();
      setChatgptData(chatgptinfo);
      const faqinfo = await fetchfaqData();
      setFaqData(faqinfo);
      
    };
    fetchData();
  }, []);
  

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);



  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    needs: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // System color scheme detection: default dark, switch to light if system prefers light
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      setIsDark(!prefersLight); // default dark, switch to light if system prefers light
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form-submit?id=demo-request', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          businessEmail: '',
          phoneNumber: '',
          companyName: '',
          needs: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };



  return (
    <div className={isDark ? "dark bg-black" : ""}>
      {/* Hero Section (case studies style) */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 dark:bg-black dark:bg-none flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20artificial%20intelligence%20holographic%20displays%2C%20futuristic%20chatbot%20interface%20floating%20in%20a%20clean%20minimalist%20office%20environment%20with%20soft%20blue%20lighting%20and%20digital%20elements%2C%20professional%20corporate%20atmosphere%20with%20subtle%20AI%20visualization&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 w-full px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold text-white dark:text-white leading-tight">
                Elevate Engagement with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ChatGPT Integration</span>
              </h1>
              <p className="text-2xl text-blue-100 dark:text-blue-200 leading-relaxed">
                Seamlessly embed intelligent conversational AI into your products and platforms. Transform customer interactions with 24/7 intelligent support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                  Book a Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                  See It in Action
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get Started Today</h3>
                <p className="text-gray-600 dark:text-gray-300">Book your free consultation and see how ChatGPT can transform your business</p>
              </div>
              
              <form id="hero-lead-form" className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Business Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Company Name *</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Tell us what you need *</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={3}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="What challenges are you looking to solve with AI integration?"
                  ></textarea>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max 500 characters</div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get Free Consultation
                </button>
                
                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400"> Your information is secure and will never be shared</p>
                  <div className="flex justify-center items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-400 dark:text-gray-500"> GDPR Compliant</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500"> SSL Encrypted</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500"> No Spam</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-black dark:bg-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {chatgptData?.attributes?.milestone_description?.heading || ''}
              </h2>
              <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-blue-200 leading-relaxed">
                    {chatgptData?.attributes?.milestone_description?.description_one || ''}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-blue-200 leading-relaxed">
                    {chatgptData?.attributes?.milestone_description?.description_two || ''}
                  </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-thumb-up-line text-white text-2xl"></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
              <p className="text-gray-600 font-medium">Successfully Projects Delivered</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-shopping-cart-line text-white text-2xl"></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Software Experts</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our ML Development Approach</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions that adapt to your business needs and data complexity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-database-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Analysis</h4>
              <p className="text-gray-600">
                Deep analysis of your data patterns and business requirements to choose the optimal ML approach
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-settings-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Custom Model Development</h4>
              <p className="text-gray-600">
                Personalized machine learning models built specifically for your industry and use case
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-speed-up-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Rapid Deployment</h4>
              <p className="text-gray-600">
                Fast implementation with continuous monitoring and optimization for maximum performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ML Development approach Section */}
      <section className="py-20 bg-white dark:bg-black dark:bg-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {chatgptData?.attributes?.service?.heading || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200 max-w-4xl mx-auto leading-relaxed">
            {chatgptData?.attributes?.service?.description || ''}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-brain-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">ML-based Enterprise Solutions</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Why start from scratch? We can tweak smart, pre-trained models to speed up your success and save your budget. From sales automation to manufacturing processes, we develop custom AI solutions using machine learning, big data, predictive analytics, and more.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-green-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-bar-chart-box-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced-Data Analytics & BI</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Our data analytics and BI solutions can provide incredible insights. Efficiently saturate huge volumes of data using big <span className="text-blue-600 font-medium">data analytics</span> expertise.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-purple-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-message-3-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              We use a concerted effort of ML and computer semantics to create the most efficient <span className="text-blue-600 font-medium">NLP Solutions</span>. Be it keyword extraction, spam detection, or chatbots, our NLP covers them all.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-yellow-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-share-circle-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Neural Network Development</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Our machine learning developers use platforms such as Python, and AI markup language to build artificial neural networks for pattern recognition on web & mobile apps.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-pink-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-eye-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Vision Development</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              The services let the businesses use computers to observe and understand data in a new way. Be it agriculture or automotive, computer vision can benefit every industry.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-orange-50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-settings-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              We leverage the capabilities of <span className="text-blue-600 font-medium">AI Development Solutions</span> to transform services including customer relations, inventory management, speech and image recognition, personalization based on user preference.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Use Cases AI/ML Section (blue/black theme) */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:bg-black dark:bg-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {chatgptData?.attributes?.solution?.heading || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200 max-w-3xl mx-auto">
            {chatgptData?.attributes?.solution?.description || ''}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${useCase.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Technologies Section (website dark/blue theme) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-black dark:bg-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {chatgptData?.attributes?.technology?.heading || ''}
          </h2>
          <p className="text-lg text-gray-600 dark:text-blue-200 max-w-3xl mx-auto">
            {chatgptData?.attributes?.technology?.description || ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg mb-6 text-center font-semibold">
              Languages
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-blue-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Python</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-blue-600"></i>
                </div>
                <span className="text-gray-700 font-medium">R</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-red-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Scala</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-database-2-line text-orange-600"></i>
                </div>
                <span className="text-gray-700 font-medium">SQL</span>
              </div>
            </div>
          </div>

          {/* ML Frameworks */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg mb-6 text-center font-semibold">
              ML Frameworks
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-brain-line text-orange-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Tensorflow</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-brain-line text-orange-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Scikit-learn</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-brain-line text-blue-600"></i>
                </div>
                <span className="text-gray-700 font-medium">SciPy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="ri-brain-line text-red-600"></i>
                </div>
                <span className="text-gray-700 font-medium">PyTorch</span>
              </div>
            </div>
          </div>

          {/* Algorithms */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg mb-6 text-center font-semibold">
              Algorithms
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-search-eye-line text-green-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Supervised Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-mind-map text-blue-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Deep Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <i className="ri-settings-3-line text-cyan-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-pie-chart-line text-purple-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Probabilistic ML</span>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg mb-6 text-center font-semibold">
              Visualization
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <i className="ri-bar-chart-line text-yellow-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Power BI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-bar-chart-line text-blue-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Tableau</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-bar-chart-line text-green-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Qlik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-bar-chart-line text-purple-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Matplotlib</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section (dark theme) */}

    <section className="py-20 bg-white dark:bg-black dark:bg-none">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {chatgptData?.attributes?.faq?.heading || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200">
            {chatgptData?.attributes?.faq?.description || ''}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData?.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.attributes.heading}</h3>
                <div className="shrink-0">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-2xl text-gray-600`}></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.attributes.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        
      </div>
    </section>

      {/* Ready to transform your business section */}

      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-black dark:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {chatgptData?.attributes?.action?.heading || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-200 max-w-3xl mx-auto">
            {chatgptData?.attributes?.action?.description || ''}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Our Platform?</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="inline-block w-6 h-6 bg-green-200 dark:bg-green-400 rounded-full mt-1"></span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Enterprise-Grade Security</span>
                  <p className="text-gray-600 dark:text-blue-200">Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-block w-6 h-6 bg-green-200 dark:bg-green-400 rounded-full mt-1"></span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">99.9% Uptime SLA</span>
                  <p className="text-gray-600 dark:text-blue-200">Reliable performance with guaranteed availability and 24/7 monitoring.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-block w-6 h-6 bg-green-200 dark:bg-green-400 rounded-full mt-1"></span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">Easy Integration</span>
                  <p className="text-gray-600 dark:text-blue-200">Deploy in minutes with our simple APIs and comprehensive documentation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-block w-6 h-6 bg-green-200 dark:bg-green-400 rounded-full mt-1"></span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">24/7 Expert Support</span>
                  <p className="text-gray-600 dark:text-blue-200">Dedicated support team available around the clock to help you succeed.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 dark:bg-gray-900 dark:border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Book Your Free Demo</h3>
              <p className="text-gray-600 dark:text-gray-300">See how our platform can transform your business in just 30 minutes</p>
            </div>

            <form id="demo-request" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your business email"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Tell us what you need *
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Describe your business needs and how we can help..."
                />
                <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.needs.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Submitting...
                  </span>
                ) : (
                  'Book Free Demo'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center dark:bg-green-900 dark:border-green-700">
                  <i className="ri-check-circle-line text-green-600 text-xl mb-2 block"></i>
                  <p className="text-green-800 dark:text-green-200 font-medium">Thank you! We&apos;ll contact you soon to schedule your demo.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center dark:bg-red-900 dark:border-red-700">
                  <i className="ri-error-warning-line text-red-600 text-xl mb-2 block"></i>
                  <p className="text-red-800 dark:text-red-200 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>

      
      
    </div>
  );
}

/* Add this to the file or your global CSS for faster marquee */
/*
@keyframes marquee-fast {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate-marquee-fast {
  animation: marquee-fast 60s linear infinite;
}
*/
