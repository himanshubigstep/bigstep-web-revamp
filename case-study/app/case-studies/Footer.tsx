
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 block" style={{ fontFamily: 'Pacifico, serif' }}>
              BigStep
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Transforming businesses with AI-powered solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-linkedin-line w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-twitter-line w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-github-line w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white cursor-pointer">AI Development</Link></li>
              <li><Link href="/services" className="hover:text-white cursor-pointer">Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-white cursor-pointer">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white cursor-pointer">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white cursor-pointer">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-white cursor-pointer">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/blog" className="hover:text-white cursor-pointer">Blog</Link></li>
              <li><Link href="/whitepapers" className="hover:text-white cursor-pointer">Whitepapers</Link></li>
              <li><Link href="/webinars" className="hover:text-white cursor-pointer">Webinars</Link></li>
              <li><Link href="/support" className="hover:text-white cursor-pointer">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BigStep IT Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
