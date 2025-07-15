"use client";
import React from "react";
import ContactFormSimple from "@/app/components/common/contact-us/simple-contact-form/ContactFormSimple";
import Image from "next/image";
import { useState } from "react";
import ClientCarousel from '@/app/components/common/client-carousel/ClientCarousel';

const features = [
  {
    icon: "\u{1F916}",
    label: "Conversations Powered by AI",
  },
  {
    icon: "\u{1F4AC}",
    label: "Amiable Remedies",
  },
  {
    icon: "\u{1F527}",
    label: "Customization for Your Brand",
  },
  {
    icon: "\u{1F4CA}",
    label: "Real-Time Insights",
  },
  {
    icon: "\u{1F4BB}",
    label: "Seamless Integration",
  },
];

const caseStudies = [
  {
    image: "/case-studies/chatbot-laptop.png", // placeholder path
    title: "Chatbot Improves Customer Service of a Leading Bank",
    description:
      "A bank connected with us for a chatbot with advanced features. The product we created helped the bank resolve queries across the country and process service requests. Chatbot helped customers with text and voice inputs. Moreover, it resulted in reduced response time and service requests.",
    button: {
      text: "View Case Study",
      link: "#"
    }
  },
  {
    image: "/case-studies/ai-retail.png", // placeholder path
    title: "AI-Powered Retail Analytics for Global Brand",
    description:
      "We delivered an AI analytics solution for a global retailer, enabling real-time insights into customer behavior and inventory. This led to improved sales forecasting and optimized stock management across hundreds of stores.",
    button: {
      text: "View Case Study",
      link: "#"
    }
  }
];

export default function ChatGPTIntegrationPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const handlePrev = () => setCurrentCase((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  const handleNext = () => setCurrentCase((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Hero Section (case studies style) */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80" alt="AI Tech Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 to-transparent z-10" />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 gap-12">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-start justify-center text-left gap-8 p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight drop-shadow-[0_0_32px_#2563eb99]">Transforming Conversations With<br/>Conversational AI Solutions</h1>
            <p className="text-base md:text-lg text-white max-w-2xl mb-4 font-normal">We deliver an uninterrupted, personalized experience to your customers with Conversational AI platform and offer</p>
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 border border-white/20 text-white text-base font-medium shadow-sm"><span className="text-lg">🤖</span> Enterprise AI Solutions</span>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 border border-white/20 text-white text-base font-medium shadow-sm"><span className="text-lg">💬</span> Chatbot Solutions</span>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 border border-white/20 text-white text-base font-medium shadow-sm"><span className="text-lg">📱</span> Conversational Apps</span>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 border border-white/20 text-white text-base font-medium shadow-sm"><span className="text-lg">🎯</span> Marketing Bot Services</span>
            </div>
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-2">
              <img src="/assets/badges/clutch.png" alt="Clutch" className="h-12" />
              <img src="/assets/badges/gold.png" alt="Gold" className="h-12" />
              <img src="/assets/badges/top.png" alt="Top IT Service Provider" className="h-12" />
              <img src="/assets/badges/warc.png" alt="WARC" className="h-12" />
              <img src="/assets/badges/award.png" alt="Award" className="h-12" />
            </div>
          </div>
          {/* Right: Contact Form Card */}
          <div className="flex-1 max-w-lg w-full bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="w-full py-4 px-8 bg-gradient-to-r from-[#1a237e] via-[#512da8] to-[#1a237e] text-white text-2xl font-bold text-center">Contact Us</div>
            <div className="p-8">
              {/* Replace with your actual form component */}
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="Full Name*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="email" placeholder="Business Email Address*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex gap-4">
                  <input type="text" placeholder="🇮🇳 +91" className="w-28 border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" placeholder="Organization/ Institution*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <textarea placeholder="Message*" className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[80px]" />
                {/* Simulated reCAPTCHA and submit */}
                <div className="flex items-center gap-4 mt-2">
                  <input type="checkbox" id="not-robot" className="w-5 h-5" />
                  <label htmlFor="not-robot" className="text-gray-700 text-base">I'm not a robot</label>
                  <div className="ml-auto">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 inline-block align-middle" />
                  </div>
                </div>
                <button type="submit" className="w-full mt-4 py-3 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold shadow transition">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section (single-line auto-scroll, with heading, black theme, faster scroll, real logos) */}
      <section className="w-full py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 text-white tracking-tight drop-shadow">Some of Our Clients</h2>
          <div className="client-logos-row overflow-hidden">
            <div className="flex whitespace-nowrap gap-4 animate-marquee-fast">
              {[
                '/assets/client-panasonic.png',
                '/assets/client-skf.png',
                '/assets/client-hero.png',
                '/assets/client-decathlon.png',
                '/assets/client-ikea.png',
                '/assets/client-eicher.png',
                '/assets/client-relaxo.png',
                '/assets/client-and.png',
              ].map((url, idx) => (
                <div key={idx} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                  <img src={url} alt={`client ${idx + 1}`} className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2" />
                </div>
              ))}
              {/* Repeat for smooth scroll */}
              {[
                '/assets/client-panasonic.png',
                '/assets/client-skf.png',
                '/assets/client-hero.png',
                '/assets/client-decathlon.png',
                '/assets/client-ikea.png',
                '/assets/client-eicher.png',
                '/assets/client-relaxo.png',
                '/assets/client-and.png',
              ].map((url, idx) => (
                <div key={`clone-${idx}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                  <img src={url} alt={`client ${idx + 1}`} className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx global>{`
          @keyframes marquee-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-fast {
            animation: marquee-fast 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Our Recent Work Section */}
      <section className="w-full py-16 px-2 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">Our Recent Work</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
            {[
              {
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80',
                title: 'AI-Powered Retail Analytics for Global Chain',
                summary: 'How BigStep enabled a global retailer to boost sales and optimize inventory using AI-driven insights.',
                link: '/company/case-studies/ai-powered-retail-analytics',
              },
              {
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80',
                title: 'Seamless Cloud Migration for Fintech Startup',
                summary: 'Migrating a fast-growing fintech platform to the cloud with zero downtime and improved security.',
                link: '/company/case-studies/cloud-migration-fintech',
              },
              {
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80',
                title: 'Chatbot Improves Customer Service of a Leading Bank',
                summary: 'A bank connected with us for a chatbot with advanced features. The product we created helped the bank resolve queries across the country and process service requests. Chatbot helped customers with text and voice inputs. Moreover, it resulted in reduced response time and service requests.',
                link: '/company/case-studies/chatbot-customer-service-bank',
              },
            ].map((card, idx) => (
              <div key={idx} className="group flex flex-col bg-black rounded-3xl shadow-2xl overflow-hidden border border-blue-500 min-h-[420px] w-full transition shadow-[0_0_48px_12px_#2563ebcc] duration-300 relative backdrop-blur-xl">
                {/* Image */}
                <div className="relative w-full h-56 flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center scale-105"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 relative z-20 text-center">
                  <h2 className="text-xl md:text-2xl font-extrabold mb-2 text-white drop-shadow-[0_0_24px_#2563eb99] tracking-tight group-hover:text-blue-400 transition">{card.title}</h2>
                  <p className="mb-4 text-blue-100 text-base md:text-lg font-light leading-relaxed">{card.summary}</p>
                  <div className="flex justify-center w-full">
                    <a
                      href={card.link}
                      className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-xl font-bold text-base shadow-lg transition group-hover:shadow-blue-700/70 group-hover:scale-110"
                      style={{ minWidth: '120px' }}
                    >
                      Full Case Study
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-blue-500 shadow-[0_0_48px_12px_#2563ebcc] transition z-30" />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-10">
            <a
              href="/company/case-studies"
              className="inline-block px-10 py-3 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold shadow transition"
            >
              Show More
            </a>
          </div>
        </div>
      </section>

      {/* Our Enterprise Conversational AI Services Section (blue/black theme) */}
      <section className="w-full py-20 px-2 md:px-8 bg-gradient-to-br from-black via-blue-950 to-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-blue-100">Our Enterprise Conversational AI Services</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl">
            Discover how our <a href="#" className="text-blue-400 underline">AI development services</a> can revolutionize your customer engagement strategy and boost your business:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="Consultation">🤖</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Chatbot Consultation</h3>
              <p className="text-blue-100 text-base">Our chatbot consultation team will understand your needs and objectives. Then, access your business processes, target audience and industry-specific requirements to recommend the best strategy. We'll create a customized plan and let you know whether a customer support chatbot, a virtual assistant or an HR bot would be helpful for you.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="Custom Dev">💬</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Chatbot Development</h3>
              <p className="text-blue-100 text-base">We specialize in creating personalized conversational chatbots solutions that can help you improve customer support, generate leads and <a href="#" className="underline text-blue-300">enhance e-commerce experience</a>. Our team builds chatbots that match your requirements and objectives.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="AI Apps">💬</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Conversational AI apps</h3>
              <p className="text-blue-100 text-base">We develop conversational AI software solutions that integrate seamlessly with your existing systems. These apps are designed to automate tasks, answer queries and provide personalized interactions. Our apps ensure that your customers receive instant, accurate and consistent responses, enhancing their overall satisfaction.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="Marketing">🎯</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Marketing Bot Services</h3>
              <p className="text-blue-100 text-base">We develop AI-driven marketing bots to engage, nurture, and convert leads into loyal customers. Our marketing bots help you increase conversion rates, reduce acquisition costs and boost ROI. It lets you create dynamic marketing campaigns that truly resonates with your audience.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="Testing">🧪</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Testing & Support Services</h3>
              <p className="text-blue-100 text-base">Our testing team ensures that your conversational chatbot solution stays ahead. Testing identifies issues and ensures a smooth user experience. The ongoing support includes regular updates, performance monitoring, and feedback analysis.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 flex flex-col items-center p-8 text-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-400 hover:border-blue-400">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl"><span role="img" aria-label="Integration">🔗</span></div>
              <h3 className="text-xl font-bold mb-2 text-white">Chatbot Integration Services</h3>
              <p className="text-blue-100 text-base">We seamlessly integrate our Conversational AI solutions into your existing systems and platforms. Whether it's your website, mobile app, or messaging channel to ensure a smooth connection. It enhances user experience, improves engagement and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Toolkit Section (website dark/blue theme) */}
      <section className="w-full py-20 px-2 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">Discover Our Tech Toolkit for Seamless Digital Advancement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Languages Card */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 overflow-hidden flex flex-col mb-0 pb-0">
              <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white text-xl font-bold py-4 px-6">Languages</div>
              <ul className="flex-1 divide-y divide-blue-900/60">
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🐍</span> <span className="text-blue-100">Python</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">✨</span> <span className="text-blue-100">JavaScript</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">☕</span> <span className="text-blue-100">Java</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🦅</span> <span className="text-blue-100">Swift</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">💎</span> <span className="text-blue-100">Ruby</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">💻</span> <span className="text-blue-100">C/C++</span></li>
                <li className="flex items-center gap-3 px-6 py-0"><span className="text-2xl">🐘</span> <span className="text-blue-100">PHP</span></li>
              </ul>
            </div>
            {/* Tools & Frameworks Card */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 overflow-hidden flex flex-col mb-0 pb-0">
              <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white text-xl font-bold py-4 px-6">Tools & Frameworks</div>
              <ul className="flex-1 divide-y divide-blue-900/60">
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🟧</span> <span className="text-blue-100">Dialogflow</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">☁️</span> <span className="text-blue-100">IBM Watson Assistant</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">📦</span> <span className="text-blue-100">Amazon Lex</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🧩</span> <span className="text-blue-100">Microsoft Bot Framework</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🤖</span> <span className="text-blue-100">Botpress</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🧠</span> <span className="text-blue-100">Wit.ai</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">💬</span> <span className="text-blue-100">SAP Conversational AI</span></li>
              </ul>
            </div>
            {/* System Integration Card */}
            <div className="bg-black rounded-2xl shadow border border-blue-900/40 overflow-hidden flex flex-col mb-0 pb-0">
              <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white text-xl font-bold py-4 px-6">System Integration</div>
              <ul className="flex-1 divide-y divide-blue-900/60">
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🛠️</span> <span className="text-blue-100">JIRA</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🔗</span> <span className="text-blue-100">IBM Integration Bus</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🔄</span> <span className="text-blue-100">Snap Logic</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🧬</span> <span className="text-blue-100">Talend</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">☁️</span> <span className="text-blue-100">Microsoft Azure</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🐫</span> <span className="text-blue-100">Apache Camel</span></li>
                <li className="flex items-center gap-3 px-6 py-2"><span className="text-2xl">🦾</span> <span className="text-blue-100">MuleSoft</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Cater To Section (website theme, 3.5 cards, auto-scroll) */}
      <section className="w-full py-0 px-0 bg-black">
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch rounded-3xl bg-black p-6 md:p-12 max-w-none">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center gap-6 min-w-[340px] max-w-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white">Industries <span className="text-blue-400 font-bold">we cater to</span></h2>
            <p className="text-blue-100 text-base md:text-lg mb-2">Our Conversational AI solutions meet needs of various industries. Our AI powered chatbots help in Healthcare, Finance, Education, Retail, Travel and Automotive to enhance customer engagement, streamline operations and drive growth.</p>
          </div>
          {/* Right: Industry Cards Carousel/Row (3.5 cards, auto-scroll) */}
          <div className="flex-[2] w-full flex flex-col items-center">
            {(() => {
              const industries = [
                {name: 'Retail', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'},
                {name: 'Insurance', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'},
                {name: 'Fashion', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'},
                {name: 'Automobile', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'},
                {name: 'Healthcare', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'},
                {name: 'Finance', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'},
                {name: 'Education', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80'},
                {name: 'Travel', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'},
                {name: 'Logistics', img: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=600&q=80'},
                {name: 'Real Estate', img: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80'},
                {name: 'Hospitality', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'},
                {name: 'Telecom', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'},
                {name: 'Education', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80'},
              ];
              const [windowWidth, setWindowWidth] = React.useState(1200);
              React.useEffect(() => {
                const handleResize = () => setWindowWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
                handleResize();
                return () => window.removeEventListener('resize', handleResize);
              }, []);
              let cardsToShow = 3.5;
              if (windowWidth < 768) cardsToShow = 1.2;
              else if (windowWidth < 1024) cardsToShow = 2.2;
              const [startIdx, setStartIdx] = React.useState(0);
              const maxIdx = Math.max(0, industries.length - Math.ceil(cardsToShow));
              // Auto-scroll every 4 seconds
              React.useEffect(() => {
                const interval = setInterval(() => {
                  setStartIdx(idx => {
                    if (idx >= maxIdx) return 0;
                    return idx + 1;
                  });
                }, 4000);
                return () => clearInterval(interval);
              }, [maxIdx]);
              const handlePrev = () => setStartIdx(idx => Math.max(0, idx - 1));
              const handleNext = () => setStartIdx(idx => Math.min(maxIdx, idx + 1));
              return (
                <>
                  <div className="flex flex-row gap-6 w-full justify-center overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-900" style={{scrollbarColor:'#2563eb #181c2a'}}>
                    {industries.slice(startIdx, startIdx + cardsToShow).map((industry, idx) => (
                      <div key={industry.name+idx} className="min-w-[260px] max-w-[280px] bg-blue-950 rounded-2xl shadow border border-blue-900/40 flex flex-col items-end justify-end overflow-hidden relative h-80">
                        <img src={industry.img} alt={industry.name} className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
                        <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg px-4 py-2 text-blue-400 font-semibold text-base shadow">{industry.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button type="button" onClick={handlePrev} disabled={startIdx === 0} className={`w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white shadow hover:bg-blue-800 transition text-2xl font-bold ${startIdx === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}><span>&#60;</span></button>
                    <button type="button" onClick={handleNext} disabled={startIdx >= maxIdx} className={`w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white shadow hover:bg-blue-800 transition text-2xl font-bold ${startIdx >= maxIdx ? 'opacity-50 cursor-not-allowed' : ''}`}><span>&#62;</span></button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Development Process for Conversational AI Services Section (site palette, no gray/purple) */}
      <section className="w-full py-20 px-0 bg-black">
        <div className="w-full flex flex-col md:flex-row gap-12 items-start px-2 md:px-8">
          {/* Left: Heading and Intro */}
          <div className="flex-1 min-w-[400px] max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-extrabold text-left mb-6 text-white leading-tight">The Development Process for Conversational AI Services</h2>
            <p className="text-blue-100 text-base md:text-lg">We transform your vision into a functional and intelligent conversational AI solution that requires a structured and innovative approach. At OrangeMantra, we craft Conversational AI software solutions that ensure success of the project. Here's the detailed overview of the development journey:</p>
          </div>
          {/* Right: Vertical Steps with Connector */}
          <div className="flex-1 w-full md:min-w-[600px] relative overflow-y-scroll scrollbar max-h-[500px] h-[500px] pr-4 bg-black rounded-2xl border border-blue-900/40" style={{minWidth:'0'}}>
            {/* Vertical Line */}
            <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900/80 via-blue-400/60 to-blue-200/0 rounded-full z-0" style={{minHeight:'100%'}}></div>
            <div className="flex flex-col gap-16 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="Discovery">📝</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Discovery & Strategy</h3>
                  <p className="text-blue-100 text-base md:text-lg">Initiate the development process by gaining a deep understanding of your unique objectives, target audience and industry landscape. We listen to your ideas and challenges to align our strategy with your vision. We collaboratively define the specific use cases and functionalities your Conversational AI should encompass to ensure a clear roadmap for development. Furthermore, <a href="#" className="text-blue-400 underline">IoT development solutions</a> collect and curate relevant data sources that help in developing effective AI models.</p>
                </div>
              </div>
              <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900/80 via-blue-400/60 to-blue-200/0 rounded-full z-0" style={{minHeight:'100%'}}></div>

              {/* Step 2 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="Design">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Design and Prototyping</h3>
                  <p className="text-blue-100 text-base md:text-lg">Our expert design team focuses on creating intuitive and engaging conversational experiences with the help of machine learning solutions and NLP. We prioritize user-centric design to ensure a seamless interaction for your customers. The interactive prototypes and dialogue flows that map out the user journey allows you to visualize the AI's behavior before development begins.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="Development">🛠️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Development and Integration</h3>
                  <p className="text-blue-100 text-base md:text-lg">Our AI experts develop, train and fine-tune the AI models that power your chatbot or virtual assistant. NLP services ensures the AI model understands and responds to user queries accurately. We seamlessly integrate the AI-powered chatbot into your platform and ensure it can communicate in multiple languages and across various devices.</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="QA">⚙️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Quality Assurance</h3>
                  <p className="text-blue-100 text-base md:text-lg">Our QA team conducts rigorous testing to identify and rectify any issues. We engage real users for testing to evaluate the AI's performance, user satisfaction and fine-tune conversational nuances.</p>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="Deployment">🚀</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Deployment and Optimization</h3>
                  <p className="text-blue-100 text-base md:text-lg">We carefully transition your Conversational AI solution from development to live entertainment. This minimizes disruption and ensures a smooth launch. After launch, we continuously monitor user interactions, AI performance and collect user feedback. This data helps in making improvements, enhancing AI capabilities and user experience.</p>
                </div>
              </div>
              {/* Step 6 */}
              <div className="flex flex-row items-start gap-6 relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 text-white text-3xl shadow-lg border-4 border-white">
                    <span role="img" aria-label="Ongoing Support">🛡️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Ongoing support and evolution</h3>
                  <p className="text-blue-100 text-base md:text-lg">We offer ongoing and maintenance to keep your conversational AI solution up-to-date and secure. As AI technology evolves, we enhance your solution to ensure it stays at the forefront of conversational AI capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bigstep for Chatbot Solutions ? (dark theme) */}
      <section className="w-full py-16 px-0 flex flex-col items-center justify-center bg-black">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch rounded-2xl">
          {/* Left: Blue background with heading and intro */}
          <div className="flex-1 bg-[#003580] rounded-l-2xl flex flex-col justify-center px-8 py-12 min-w-[320px]" style={{borderTopRightRadius: '60px'}}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Why Choose Bigstep for Chatbot Solutions ?</h2>
            <p className="text-white text-lg font-normal">When it comes to Conversational AI solution, making the right choice for your business is pivotal. We are your strategic partner in harnessing the power of AI driven conversations. Here's why you should choose us:</p>
          </div>
          {/* Right: Card Slider */}
          <div className="flex-1 flex items-center justify-center relative min-w-[340px] max-w-xl mx-auto px-4 py-8">
            {(() => {
              const cards = [
                {
                  number: '01',
                  title: 'Expertise that sets us apart',
                  desc: 'We have a team of AI specialists with extensive experience in building and deploying Conversational AI solution. They stay ahead with the latest AI trends and technologies to ensure you receive cutting-edge solutions tailored to your needs.'
                },
                {
                  number: '02',
                  title: 'Client-Centric Approach',
                  desc: 'We prioritize your business goals and user experience. Our solutions are designed to fit your unique requirements, ensuring maximum ROI and satisfaction.'
                },
                {
                  number: '03',
                  title: 'End-to-End Support',
                  desc: 'From ideation to deployment and beyond, we provide comprehensive support at every stage of your AI journey.'
                }
              ];
              const [current, setCurrent] = React.useState(0);
              const handlePrev = () => setCurrent(idx => (idx === 0 ? cards.length - 1 : idx - 1));
              const handleNext = () => setCurrent(idx => (idx === cards.length - 1 ? 0 : idx + 1));
              return (
                <div className="relative w-full flex items-center justify-center">
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg min-h-[300px] flex flex-col justify-center items-start relative border border-blue-900/40" style={{borderTopLeftRadius: '60px', borderBottomLeftRadius: '60px'}}>
                    <div className="text-5xl font-extrabold text-[#b39ddb] mb-2">{cards[current].number}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{cards[current].title}</h3>
                    <p className="text-gray-800 text-lg">{cards[current].desc}</p>
                  </div>
                  {/* Left Arrow */}
                  <button type="button" onClick={handlePrev} className="absolute left-[-28px] text-black top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-2xl font-bold z-10 hover:bg-gray-100 transition"><span>&#60;</span></button>
                  {/* Right Arrow */}
                  <button type="button" onClick={handleNext} className="absolute right-[-28px] text-black top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-2xl font-bold z-10 hover:bg-gray-100 transition"><span>&#62;</span></button>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* FAQ Section (dark theme) */}
      <section className="w-full py-16 flex flex-col items-center justify-center bg-black">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          {(() => {
            const faqs = [
              {
                q: 'What is Conversational AI/Chatbot development?',
                a: 'Conversational AI or chatbot development is the process of creating computer programs that can chat with people like humans. The chatbots can answer questions, give information and perform tasks through text or speech.'
              },
              {
                q: 'How much does it cost to develop a chatbot?',
                a: 'jbibkbjk'
              },
              {
                q: 'How much time is required to built a chatbot application?',
                a: 'njknjlknjkn'
              },
              {
                q: 'Difference between Chatbot and Conversational AI?',
                a: ''
              },
              {
                q: 'How does AI improve customer service?',
                a: ''
              }
            ];
            const [open, setOpen] = React.useState(0);
            return faqs.map((faq, idx) => (
              <div key={faq.q} className="bg-gradient-to-br from-[#181c2a] via-[#23234b] to-[#2b1a6d] rounded-2xl shadow border border-gray-800 overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between px-6 py-5 text-left font-bold text-lg md:text-xl focus:outline-none text-white ${open === idx ? 'bg-[#23234b]' : ''}`}
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  aria-expanded={open === idx}
                >
                  <span>{faq.q}</span>
                  <svg className={`w-6 h-6 ml-2 transition-transform duration-200 text-white ${open === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === idx && faq.a && (
                  <div className="px-6 pb-6 text-base md:text-lg text-gray-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ));
          })()}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 px-0 relative" style={{background: 'linear-gradient(90deg, #2B1A6D 0%, #3B206D 100%)'}}>
        {/* Background image overlay (optional, can use Unsplash or SVG) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80" alt="AI Background" className="w-full h-full object-cover object-center opacity-20" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Unlock the Power of Conversational AI Today</h2>
          <a href="/contact-us" className="inline-block px-10 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold shadow transition">Contact Us</a>
        </div>
      </section>
    </>
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
