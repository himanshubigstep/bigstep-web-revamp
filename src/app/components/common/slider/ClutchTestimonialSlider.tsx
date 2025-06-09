import React, { useRef } from 'react';

const dummyReviews = [
  {
    rating: 5.0,
    review: 'Their communication was excellent and they always resolved issues immediately.',
    feedback:
      "The client received positive feedback from their visitors, thanks to OrangeMantra's work. The team's exceptional communication and project management skills stood out, and their tendency to go above and beyond to explain their processes and solutions to the client ensured transparency.",
    name: 'Thomas Jensen',
    title: 'Senior Information Officer, Eurofish',
    location: 'Copenhagen, Denmark',
    image: '/reviewers/placeholder.png',
  },
  {
    rating: 4.5,
    review: 'They delivered the project at a pace and quality we wanted.',
    feedback:
      "The client has experienced a smooth development process and is happy with the demonstration and results. OrangeMantra's team is flexible and responsive, and they've exceeded expectations.",
    name: 'Priya Sharma',
    title: 'Product Manager, Reporting Platform',
    location: 'Delhi, India',
    image: '/reviewers/placeholder.png',
  },
  {
    rating: 5.0,
    review:
      'They listen, truly understand our needs, and align with our specific skills and talent requirements.',
    feedback:
      "BigStep Technologies Pvt. Ltd. has been proactive and agile throughout the project. They are highly committed to the client's business goals and have high-caliber talent that aligns well with their specific skills and requirements.",
    name: 'Ravinder Singh',
    title: 'Head of Engineering, Panacea Infosec Pvt Ltd',
    location: 'India',
    image: '/reviewers/placeholder.png',
  },
  {
    rating: 5.0,
    review: "The most impressive and unique aspect of Bigstep Technologies is their exceptional service and support.",
    feedback: "BigStep Technologies Pvt. Ltd. successfully delivered a highly-functioning app, which was met with positive acclaim by the client. The team was highly receptive, and internal stakeholders were particularly impressed with how the vendor went above and beyond to ensure the product's success.",
    name: "Octavian Djemangin",
    title: "Director, Digli",
    location: "Jakarta, Indonesia",
    image: "/reviewers/placeholder.png"
  },
  {
    rating: 5.0,
    review: "Their team collaborated with our team very well and was extremely prompt with feedback and suggestions.",
    feedback: "BigStep Technologies Pvt. Ltd. delivered a user-friendly website with amazing features on par with the client's competitors. They provided an easy-to-follow project management style, good communication, prompt feedback, and on-time delivery. The client also appreciated their support and dedication.",
    name: "Anonymous",
    title: "Branding & Comms Senior VP, House of Diagnostics Healthcare",
    location: "New Delhi, India",
    image: "/reviewers/placeholder.png"
  },
  {
    rating: 5.0,
    review: "BigStep Technologies is great all around — it's easy to submit tickets, and they always respond.",
    feedback: "The client is pleased with BigStep Technologies Pvt. Ltd.'s 2–3 day bug turnaround times; tickets are submitted via questionnaire. BigStep Technologies Pvt. Ltd.'s team is located in two locations and ensures the client's platform is always up to the client's standards.",
    name: "Anonymous",
    title: "Owner, BuyHawaii",
    location: "Honolulu, Hawaii",
    image: "/reviewers/placeholder.png"
  }
];

const BG_IMAGE = '/slider-bg.png'; // Place the provided image in public/slider-bg.png

const ClutchTestimonialSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll by one card width
  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.testimonial-card') as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24; // 24px gap
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#181c2a]/90 to-black/80 backdrop-blur-sm" />
      </div>
      <h2 className="relative z-10 text-4xl font-extrabold text-center mb-12 tracking-tight text-white font-sans drop-shadow-[0_0_16px_#2563eb99]">Client Testimonials</h2>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Arrows */}
        <button
          onClick={() => scrollByCard('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-blue-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-blue-400 hover:bg-blue-900/60 transition hidden md:flex backdrop-blur drop-shadow-[0_0_12px_#2563eb99]"
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollByCard('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-blue-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-blue-400 hover:bg-blue-900/60 transition hidden md:flex backdrop-blur drop-shadow-[0_0_12px_#2563eb99]"
          aria-label="Scroll right"
        >
          &#8594;
        </button>
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-0"
          style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }}
        >
          {dummyReviews.map((r, idx) => (
            <div
              key={idx}
              className="testimonial-card flex-shrink-0 w-[340px] md:w-[400px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-700/40 p-8 flex flex-col justify-between snap-center transition hover:shadow-blue-700/60 hover:-translate-y-2 hover:scale-[1.02] duration-300 relative overflow-hidden"
              style={{ boxShadow: '0 8px 32px 0 rgba(37,99,235,0.25), 0 0 24px 0 #2563eb55' }}
            >
              {/* Neon border glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-[0_0_24px_4px_#2563eb99] transition" />
              {/* Review Section */}
              <div className="relative mb-4">
                <svg className="absolute -top-6 left-0 w-10 h-10 text-blue-500/60 drop-shadow-[0_0_12px_#2563eb99]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7.001 7.001 0 0 1 12 4c3.87 0 7 3.13 7 7 0 2.76-2.24 5-5 5H9v2h5c3.87 0 7-3.13 7-7s-3.13-7-7-7c-2.21 0-4.21.9-5.66 2.34l1.41 1.41z"/></svg>
                <p className="italic text-lg text-blue-100 text-center font-semibold z-10 min-h-[72px] drop-shadow-[0_0_8px_#2563eb99]">{r.review}</p>
              </div>
              {/* Rating Breakdown */}
              <div className="flex flex-col items-center mb-4">
                <span className="text-3xl font-bold text-blue-400 mb-1 drop-shadow-[0_0_8px_#2563eb99]">{r.rating.toFixed(1)}</span>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.round(r.rating) ? 'text-blue-400 drop-shadow-[0_0_6px_#2563eb99] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' : 'text-gray-700'}>★</span>
                  ))}
                </div>
              </div>
              {/* Feedback & Reviewer */}
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex flex-col items-center mt-2 mb-4">
                  {/* Avatar image above name/title/location */}
                  {/* <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-2 bg-gradient-to-br from-blue-900/60 to-blue-400/30 drop-shadow-[0_4px_16px_#2563eb77]">
                    <img
                      src={r.image || '/reviewers/placeholder.png'}
                      alt={r.name}
                      className="w-full h-full object-cover"
                      onError={e => (e.currentTarget.src = '/reviewers/placeholder.png')}
                    />
                  </div> */}
                  <div className="text-base font-bold text-blue-100 text-center mb-1 drop-shadow-[0_0_4px_#2563eb99]">{r.name}</div>
                  <div className="text-xs text-blue-400 text-center mb-1">{r.title}</div>
                  <div className="text-xs text-blue-700 text-center">{r.location}</div>
                </div>
                <div className="text-sm text-blue-100 mb-4 text-center drop-shadow-[0_0_6px_#2563eb99]">{r.feedback}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots (show active card) */}
      <div className="relative z-20 flex justify-center mt-8 gap-2">
        {dummyReviews.map((_, idx) => (
          <span
            key={idx}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${idx === 0 ? 'bg-blue-500 border-blue-500 shadow-[0_0_8px_2px_#2563eb99]' : 'bg-gray-800 border-gray-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClutchTestimonialSlider; 