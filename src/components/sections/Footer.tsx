'use client'

import { Car, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-7 w-7 lg:h-8 lg:w-8 text-teal-400" />
              <span className="ml-2 text-lg lg:text-xl font-bold">Journey On Wheels</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm lg:text-base">
              Your trusted travel partner for safe & reliable rides.
            </p>
            <div className="space-y-2 text-sm lg:text-base">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <text className='font-semibold'>+91 9569210750</text>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <text className='font-semibold'>vishu.codebug@gmail.com</text>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Book a Ride</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tour Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Login / Register</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Driver App</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Local Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Outstation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tour Packages</a></li>
            </ul>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="flex flex-wrap gap-4 justify-center text-xs lg:text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Refund Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-400 text-xs lg:text-sm">
            © 2025 Journey Via Wheels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}