
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
            BigStep
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/case-studies" className="text-blue-600 font-medium cursor-pointer">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
