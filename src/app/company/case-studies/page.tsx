"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const fallbackHeroImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

export default function CaseStudiesPage() {
  // State for hero/page content
  const [heroData, setHeroData] = useState<any>(null);
  // State for case study cards
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  // Loading and error states for both
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch both APIs in parallel
    Promise.all([
      fetch('https://api.bigsteptech.com/api/case-study-page?populate[0]=&populate[1]=media&populate[2]=case_study&populate[3]=case_study.backgroundImage&populate[4]=seo').then(res => res.json()),
      fetch('https://api.bigsteptech.com/api/case-studies').then(res => res.json())
    ])
      .then(([heroRes, listRes]) => {
        setHeroData(heroRes?.data?.attributes || null);
        setCaseStudies(listRes?.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-400 py-12">Loading…</div>;
  if (error) return <div className="text-center text-red-400 py-12">Failed to load case studies.</div>;

  // Extract hero image and content from CMS API
  const heroImage = heroData?.media?.data?.[0]?.attributes?.url
    ? `https://api.bigsteptech.com${heroData.media.data[0].attributes.url}`
    : fallbackHeroImage;
  const heroHeading = heroData?.heading || 'Case Studies';
  const heroDescription = heroData?.description || "Explore our case studies to see how we've helped businesses like yours.";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Hero Section (like TopBanner) */}
      <div className="w-full relative lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-[60vh] flex items-center lg:px-4 mb-16">
        <div className="w-full h-full absolute right-0 left-0 top-0 bottom-0">
          <div className="w-full h-full absolute top-0 bottom-0 bg-gradient-to-r from-black/90 to-transparent" />
          <img
            src={heroImage}
            alt="Case Study Hero"
            className="w-full h-full object-cover object-right-top"
          />
        </div>
        <div className="w-full max-w-[1440px] mx-auto h-full flex lg:justify-between lg:items-center gap-4 relative px-4">
          <div className="lg:w-[50%] w-full h-full flex flex-col lg:justify-center md:justify-center justify-end lg:pb-0 md:pb-0 pb-8 items-start gap-6">
            <span className="uppercase text-white text-lg font-light tracking-widest mb-2">{heroHeading}</span>
            <h2 className="lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extrabold text-white mb-4 drop-shadow-[0_0_32px_#2563eb99]">{heroHeading}</h2>
            <p className="lg:text-2xl md:text-xl sm:text-lg text-md font-light text-white mb-6">{heroDescription}</p>
            <a href="#case-studies-list" className="py-4 px-8 rounded-xl bg-blue-500 hover:bg-blue-800 lg:text-lg md:text-lg text-md text-white font-semibold shadow-lg transition">Get Started</a>
          </div>
        </div>
      </div>

      {/* Filters Section with Glassmorphism and blue accent */}
      <div className="backdrop-blur-md bg-gradient-to-r from-blue-950/80 via-blue-900/80 to-gray-900/80 border border-blue-700/40 rounded-2xl shadow-2xl py-10 px-8 flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto mb-20 animate-fade-in">
        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-2 font-semibold text-blue-100">Industries</label>
          <select className="border border-blue-700/40 bg-blue-950/80 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            <option>Select Industries</option>
            <option>Healthcare</option>
            <option>Retail</option>
            <option>Fintech</option>
          </select>
        </div>
        <span className="font-bold text-blue-300 text-lg">Or</span>
        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-2 font-semibold text-blue-100">Solutions</label>
          <select className="border border-blue-700/40 bg-blue-950/80 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            <option>Select Solutions</option>
            <option>AI/ML</option>
            <option>Cloud Migration</option>
            <option>eCommerce</option>
          </select>
        </div>
      </div>

      {/* Case Study Cards */}
      <div id="case-studies-list" className="max-w-7xl mx-auto py-20 px-4 grid gap-20 animate-fade-in">
        {caseStudies.map((cs, idx) => {
          const attrs = cs.attributes;
          const slug = attrs.slug;
          const title = attrs.heading;
          const summary = attrs.body;
          // The API does not provide an image, so always use fallback
          const imageUrl = fallbackHeroImage;
          // Get categories from CMS
          const categories = attrs.case_study_categories?.data?.map((cat: any) => cat.attributes.category) || [];
          
          return (
            <div
              key={slug || cs.id || idx}
              className="group flex flex-col md:flex-row bg-black rounded-3xl shadow-2xl overflow-hidden border border-blue-900/40 md:min-h-[420px] min-h-[340px] transition hover:shadow-blue-700/70 hover:-translate-y-2 hover:scale-[1.025] duration-300 relative backdrop-blur-xl"
              style={{ boxShadow: '0 12px 48px 0 rgba(37,99,235,0.18), 0 0 32px 0 #2563eb44' }}
            >
              {/* Image: exactly half the card on desktop, top on mobile, no overlay */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>
              {/* Content: half the card on desktop, below on mobile */}
              <div className="flex-1 flex flex-col justify-center items-center p-10 md:p-14 relative z-20 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-[0_0_24px_#2563eb99] tracking-tight group-hover:text-blue-400 transition">{title}</h2>
                <p className="mb-6 text-blue-100 text-lg md:text-2xl font-light leading-relaxed">{summary}</p>
                
                {/* Category Tags */}
                {categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {categories.map((category: string, catIdx: number) => (
                      <span 
                        key={catIdx} 
                        className="bg-blue-900 text-blue-200 px-6 py-2 rounded-full text-base font-semibold tracking-wide border border-blue-700"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-center w-full">
                  <Link
                    href={slug ? `/company/case-studies/${slug}` : `/company/case-studies/${cs.id}`}
                    className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-2 rounded-xl font-bold text-base shadow-lg transition group-hover:shadow-blue-700/70 group-hover:scale-110"
                    style={{ minWidth: '160px' }}
                  >
                    Full Case Study
                  </Link>
                </div>
              </div>
              {/* Neon border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-[0_0_48px_12px_#2563ebcc] transition z-30" />
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
} 