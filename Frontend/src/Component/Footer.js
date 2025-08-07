import React from 'react';
import { Film, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Film className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">Shri Sai Film Creative</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional movie promotion and creative services that help filmmakers reach their audience 
              and achieve commercial success with innovative marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PR & Media Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trailer Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Distribution Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Awards Campaign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics & Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industry Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Festival Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p>123 Hollywood Blvd<br />Los Angeles, CA 90028</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@shrisaifilmcreative.com</p>
              <p>Hours: Mon-Fri, 9AM-7PM PST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shri Sai Film Creative. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;