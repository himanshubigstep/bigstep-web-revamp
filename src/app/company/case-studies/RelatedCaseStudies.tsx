import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

interface RelatedCaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  image: string;
  bullets: string[];
}

interface RelatedCaseStudiesProps {
  related: RelatedCaseStudy[];
}

const RelatedCaseStudies: React.FC<RelatedCaseStudiesProps> = ({ related }) => {
  const cards = related.map(cs => ({
    slug: cs.slug,
    title: cs.title,
    subtitle: (cs as any).subtitle || 'Case Study',
    summary: cs.summary,
    tags: cs.tags,
    image: DUMMY_IMAGE,
    bullets: (cs as any).bullets || ['Key benefit one', 'Key benefit two', 'Key benefit three'],
  }));

  return (
    <section className="w-full py-24 bg-black/95 rounded-3xl p-12 shadow-2xl flex flex-col gap-8 border border-gray-800 mx-auto">
      <h3 className="text-4xl font-extrabold text-blue-700 dark:text-white mb-20 drop-shadow-lg text-center">Related Case Studies</h3>
      <div className="flex flex-col gap-24">
        {cards.map((card, idx) => (
          <div key={card.slug ?? idx} className={`w-full flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-stretch min-h-[400px] gap-0 bg-black border-4 border-gray-800 rounded-3xl shadow-2xl overflow-hidden`}>
            {/* Image Block */}
            <div className="flex-1 flex items-stretch">
              <Image src={card.image} alt={card.title ?? 'Related Case Study'} width={900} height={500} className="object-cover w-full h-full min-h-[320px] md:min-h-[400px]" loading="lazy" />
            </div>
            {/* Content Block */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-10 bg-black text-white">
              <span className="text-lg font-semibold text-blue-400 mb-2">{card.subtitle}</span>
              <h4 className="text-4xl font-extrabold mb-4 leading-tight">{card.title}</h4>
              <p className="text-xl mb-4 font-medium leading-relaxed">{card.summary}</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 pl-2 space-y-1">
                {card.bullets.map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {card.tags?.map(tag => (
                  <span key={tag} className="bg-blue-900 text-blue-200 px-6 py-2 rounded-full text-base font-semibold tracking-wide border border-blue-700">{tag}</span>
                ))}
              </div>
              <div className="w-full flex justify-center mt-4">
                <Link 
                  href={`/company/case-studies/${card.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-white font-semibold text-base shadow-sm hover:bg-blue-800 hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* See More Button */}
      <div className="text-center mt-12">
        <Link 
          href="/company/case-studies"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View All Case Studies
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default RelatedCaseStudies; 