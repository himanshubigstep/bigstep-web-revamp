
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">BigStep IT Solutions</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Welcome to BigStep - Your trusted partner for AI-powered digital transformation and enterprise solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/case-studies"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center cursor-pointer whitespace-nowrap"
          >
            View Case Studies
          </Link>
          <Link 
            href="/contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
