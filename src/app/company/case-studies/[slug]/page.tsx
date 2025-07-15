"use client";
import { useParams } from 'next/navigation';
import { caseStudies } from '../caseStudiesData';
import Link from 'next/link';
import Image from 'next/image';
import ContactFormSimple from '@/app/components/common/contact-us/simple-contact-form/ContactFormSimple';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const API_BASE = 'https://api.bigsteptech.com';

// Configure marked for safe HTML rendering
marked.setOptions({
  breaks: true,
  gfm: true
});

// Efficiently parse all sections from CMS content and return a map for O(1) lookup
function parseSectionsMap(content: string) {
  const regex = /## (.+?)\n([\s\S]*?)(?=(?:## |$))/g;
  const map: Record<string, { title: string; body: string }> = {};
  let match;
  while ((match = regex.exec(content))) {
    const title = match[1].trim().toLowerCase();
    map[title] = { title: match[1].trim(), body: match[2].trim() };
  }
  return map;
}

// Function to render markdown to HTML
function renderMarkdown(markdown: string): string {
  if (!markdown) return '';
  try {
    // Use the synchronous version of marked
    return marked.parse(markdown) as string;
  } catch (error) {
    console.error('Markdown rendering error:', error);
    return markdown; // Fallback to raw text
  }
}

const RelatedCaseStudies = dynamic(() => import('../RelatedCaseStudies'), { loading: () => <div className="text-center text-gray-400 py-12">Loading related case studies…</div> });

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
  const [cmsData, setCmsData] = useState<any>(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch CMS data
  useEffect(() => {
    if (!slug) return;
    
    setLoading(true);
    setError(false);
    
    fetch(`${API_BASE}/api/case-studies/${slug}?populate[0]=result&populate[1]=result_heading.images&populate[2]=process1&populate[3]=process.background&populate[4]=process.icon&populate[5]=details&populate[6]=details.background_image&populate[7]=media&populate[8]=seo&populate[9]=process2&populate[10]=process3&populate[11]=process4&populate[12]=case_study_categories`)
      .then(res => res.json())
      .then(res => {
        if (res?.data?.attributes) {
          const data = res.data.attributes;
          setCmsData(data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  // Fetch related case studies
  useEffect(() => {
    if (!cmsData) return;
    
    fetch(`${API_BASE}/api/case-studies?populate=case_study_categories`)
      .then(res => res.json())
      .then(res => {
        if (res?.data) {
          const allCaseStudies = res.data;
          const currentCaseStudy = allCaseStudies.find((cs: any) => cs.attributes.slug === slug);
          
          if (currentCaseStudy) {
            // Get current case study categories
            const currentCategories = currentCaseStudy.attributes.case_study_categories?.data?.map((cat: any) => cat.attributes.category) || [];
            
            // Filter related case studies by matching categories
            const related = allCaseStudies
              .filter((cs: any) => {
                const isNotCurrent = cs.attributes.slug !== slug;
                const hasSlug = cs.attributes.slug;
                return isNotCurrent && hasSlug;
              })
              .filter((cs: any) => {
                const csCategories = cs.attributes.case_study_categories?.data?.map((cat: any) => cat.attributes.category) || [];
                const hasMatchingCategory = csCategories.some((cat: string) => currentCategories.includes(cat));
                return hasMatchingCategory;
              })
              .slice(0, 3); // Show max 3
            
            setRelatedCaseStudies(related);
          }
        }
      })
      .catch(err => {
        console.error('Related case studies fetch error:', err);
      });
  }, [cmsData, slug]);

  if (!cmsData) return <div className="max-w-3xl mx-auto py-16 px-4 text-white">Case study not found.</div>;

  // Quick facts (example, can be extended)
  const quickFacts = [
    { label: 'Industry', value: 'N/A' },
    { label: 'Service', value:  'N/A' },
    { label: 'Duration', value: '6 months' },
    { label: 'Team Size', value: '5+' },
  ];

  // Get CMS media images
  const mediaImages = cmsData?.media?.data || [];
  const heroImage = mediaImages[0]?.attributes?.url ? `${API_BASE}${mediaImages[0].attributes.url}` : DUMMY_IMAGE;
  const overviewImage = mediaImages[1]?.attributes?.url ? `${API_BASE}${mediaImages[1].attributes.url}` : DUMMY_IMAGE;
  const processImage = mediaImages[2]?.attributes?.url ? `${API_BASE}${mediaImages[2].attributes.url}` : DUMMY_IMAGE;
  const resultsImage = mediaImages[3]?.attributes?.url ? `${API_BASE}${mediaImages[3].attributes.url}` : DUMMY_IMAGE;

  if (loading) return <div className="text-center text-gray-400 py-12">Loading…</div>;

  return (
    <div className="bg-black min-h-screen w-full text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={cmsData?.heading || 'Case Study'}
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-8 pb-16 flex flex-col justify-end h-full">
          <Link
            href="/company/case-studies"
            className="mb-12 inline-flex items-center gap-2 text-2xl font-black text-white transition-all duration-150 underline underline-offset-[10px] decoration-[6px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            Back to Case Studies
          </Link>
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-2xl text-white w-full max-w-5xl leading-tight text-left">{cmsData?.heading || 'Case Study'}</h1>
          <p className="text-2xl mb-6 max-w-3xl text-gray-100 w-full text-left font-light drop-shadow-lg">{cmsData?.body || 'Case study summary'}</p>
          <div className="flex flex-wrap gap-3 mb-2">
            {(cmsData?.case_study_categories?.data || []).map((tag: any) => (
              <span key={tag.id} className="bg-black/70 text-white px-5 py-1.5 rounded-full text-base font-semibold tracking-wide shadow border border-white/10">
                {tag.attributes?.category || tag.category || 'Unknown'}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts / Project Overview */}
      <section className="w-full max-w-7xl mx-auto mt-16 z-30 relative">
        <div className="bg-gray-900/95 rounded-3xl shadow-2xl border border-gray-800 p-6 flex flex-wrap gap-8 justify-between items-center">
          {quickFacts.map(fact => (
            <div key={fact.label} className="flex flex-col items-center min-w-[120px]">
              <span className="text-lg text-gray-400 font-medium mb-1">{fact.label}</span>
              <span className="text-2xl font-bold text-white">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl px-4 mx-auto py-20 flex flex-col gap-24">
        {/* Visual/Media Block */}
        <section className="w-full flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="flex-1 flex flex-col gap-4">
            <section className="w-full">
              {/* Full-width Image - Only show if overview image exists */}
              {mediaImages[1]?.attributes?.url && (
                <div className="w-full">
                  <Image src={overviewImage} alt="Project Visual" width={1600} height={500} className="rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px]" loading="lazy" />
                </div>
              )}
              {/* Full-width Content */}
              <div className="bg-black rounded-3xl shadow-2xl p-8 md:p-16 mt-8 w-full">
                <h2 className="text-4xl font-extrabold text-white mb-4">Project Overview</h2>
                {/* Render markdown content from CMS */}
                {cmsData?.result_body && (
                  <div 
                    className="text-lg text-gray-300 mb-8 prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: renderMarkdown(cmsData.result_body) 
                    }} 
                  />
                )}
                {/* Only show process section if any process steps exist */}
                {(cmsData?.process1?.heading || cmsData?.process2?.heading || cmsData?.process3?.heading || cmsData?.process4?.heading) && (
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Process</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                      {/* Step 1 */}
                      {cmsData?.process1?.heading && (
                        <div className="relative rounded-2xl p-8 shadow-2xl text-center bg-gradient-to-br from-black via-blue-900 to-blue-700 text-white flex flex-col items-center backdrop-blur-md bg-opacity-80 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/60 group">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-400 text-white font-extrabold text-4xl shadow-lg mb-6 border-4 border-blue-400 ring-4 ring-blue-500/40 group-hover:ring-blue-400/80 transition-all duration-300">1</div>
                          <div className="font-extrabold text-2xl mb-3 tracking-tight">{cmsData.process1.heading}</div>
                          <div className="text-white/90 text-lg font-medium">{cmsData.process1.description}</div>
                        </div>
                      )}
                      {/* Step 2 */}
                      {cmsData?.process2?.heading && (
                        <div className="relative rounded-2xl p-8 shadow-2xl text-center bg-gradient-to-br from-black via-purple-900 to-purple-700 text-white flex flex-col items-center backdrop-blur-md bg-opacity-80 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/60 group">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-purple-400 text-white font-extrabold text-4xl shadow-lg mb-6 border-4 border-purple-400 ring-4 ring-purple-500/40 group-hover:ring-purple-400/80 transition-all duration-300">2</div>
                          <div className="font-extrabold text-2xl mb-3 tracking-tight">{cmsData.process2.heading}</div>
                          <div className="text-white/90 text-lg font-medium">{cmsData.process2.description}</div>
                        </div>
                      )}
                      {/* Step 3 */}
                      {cmsData?.process3?.heading && (
                        <div className="relative rounded-2xl p-8 shadow-2xl text-center bg-gradient-to-br from-black via-green-900 to-green-700 text-white flex flex-col items-center backdrop-blur-md bg-opacity-80 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/60 group">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-700 to-green-400 text-white font-extrabold text-4xl shadow-lg mb-6 border-4 border-green-400 ring-4 ring-green-500/40 group-hover:ring-green-400/80 transition-all duration-300">3</div>
                          <div className="font-extrabold text-2xl mb-3 tracking-tight">{cmsData.process3.heading}</div>
                          <div className="text-white/90 text-lg font-medium">{cmsData.process3.description}</div>
                        </div>
                      )}
                      {/* Step 4 */}
                      {cmsData?.process4?.heading && (
                        <div className="relative rounded-2xl p-8 shadow-2xl text-center bg-gradient-to-br from-black via-pink-900 to-pink-700 text-white flex flex-col items-center backdrop-blur-md bg-opacity-80 transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/60 group">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-700 to-pink-400 text-white font-extrabold text-4xl shadow-lg mb-6 border-4 border-pink-400 ring-4 ring-pink-500/40 group-hover:ring-pink-400/80 transition-all duration-300">4</div>
                          <div className="font-extrabold text-2xl mb-3 tracking-tight">{cmsData.process4.heading}</div>
                          <div className="text-white/90 text-lg font-medium">{cmsData.process4.description}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>

        {/* Full-width Image - Only show if process image exists */}
        {mediaImages[2]?.attributes?.url && (
          <div className="w-full">
            <Image src={processImage} alt="Project Visual" width={1600} height={500} className="rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px]" loading="lazy" />
          </div>
        )}

        {/* Challenge, Solution, Results, Testimonial */}
        <section className="w-full grid md:grid-cols-2 gap-16">
          {/* Challenge */}
          {cmsData?.details?.[0] && (
            <div className="bg-black/90 rounded-3xl p-10 shadow-2xl border-l-8 border-blue-700 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-700/80">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20" stroke="#fff" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <h2 className="text-2xl font-bold text-white">Challenge</h2>
              </div>
              <p className="text-lg text-gray-200 whitespace-pre-line font-light">{cmsData.details[0].text}</p>
            </div>
          )}
          {/* Solution */}
          {cmsData?.details?.[1] && (
            <div className="bg-black/90 rounded-3xl p-10 shadow-2xl border-l-8 border-green-600 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600/80">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20" stroke="#fff" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                </span>
                <h2 className="text-2xl font-bold text-white">Solution</h2>
              </div>
              <p className="text-lg text-gray-200 whitespace-pre-line font-light">{cmsData.details[1].text}</p>
            </div>
          )}
        </section>

        {/* Results & Testimonial */}
        <section className="w-full grid md:grid-cols-2 gap-16">
          {/* Results */}
          {cmsData?.details?.[2] && (
            <div className="bg-black/90 rounded-3xl p-10 shadow-2xl border-l-8 border-yellow-500 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/80">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /></svg>
                </span>
                <h2 className="text-2xl font-bold text-white">Results</h2>
              </div>
              <div className="text-lg text-gray-200 font-light">
                {cmsData.details[2].text}
              </div>
            </div>
          )}
          {/* Testimonial */}
          {cmsData?.details?.[3] && (
            <div className="bg-gray-900/95 rounded-3xl p-10 shadow-2xl border-l-8 border-purple-600 flex flex-col items-center justify-center">
              <svg className="mx-auto mb-4" width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.08" /><path d="M16 32c0-6 4-10 8-10s8 4 8 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><path d="M24 28v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><circle cx="24" cy="24" r="23" stroke="#fff" strokeWidth="2" /></svg>
              <blockquote className="text-2xl italic text-gray-100 font-light mb-2">"{cmsData.details[3].text.replace(/"/g, '')}"</blockquote>
              <span className="block text-gray-400 font-semibold mt-2 text-lg">Client Testimonial</span>
            </div>
          )}
        </section>

        {/* Full-width Image - Only show if results image exists */}
        {mediaImages[3]?.attributes?.url && (
          <div className="w-full">
            <Image src={resultsImage} alt="Project Visual" width={1600} height={500} className="rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px]" loading="lazy" />
          </div>
        )}

        {/* Results Delivered & Final Thoughts Section */}
        {cmsData?.result?.heading && (
          <section className="w-full mb-24 px-0 relative">
            <div className="w-full bg-black-95 rounded-3xl shadow-2xl border-2 border-neutral-800 p-10 md:p-16 flex flex-col items-center mx-auto overflow-hidden">
              <div className="text-lg text-gray-400 text-left w-full flex flex-col gap-6">
                <h2 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent underline underline-offset-8 decoration-4 decoration-blue-500">{cmsData?.result?.heading}</h2>
                {cmsData?.result?.description}
              </div>
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        {Array.isArray(relatedCaseStudies) && relatedCaseStudies.length > 0 && (
          <RelatedCaseStudies related={relatedCaseStudies.map((cs: any) => ({
            id: cs.id,
            title: cs.attributes.heading,
            summary: cs.attributes.body,
            slug: cs.attributes.slug,
            image: DUMMY_IMAGE,
            tags: cs.attributes.case_study_categories?.data?.map((cat: any) => cat.attributes.category) || [],
            bullets: ['Key benefit one', 'Key benefit two', 'Key benefit three'],
            subtitle: 'Case Study',
          }))} />
        )}

      </main>

      {/* Contact CTA */}
      <section className="bg-black py-24 px-0 w-full">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h3 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Ready to achieve similar results?</h3>
          <p className="text-3xl text-gray-300 mb-8 font-light">Contact our team to discuss your project and see how BigStep can help you succeed.</p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ContactFormSimple buttonText="Let's Talk" />
        </div>
      </section>
    </div>
  );
}
