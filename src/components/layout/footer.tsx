"use client";

import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="bg-gray-200 rounded-3xl shadow-lg px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Left Side: Company Info */}
            <div className="lg:w-1/3 space-y-2">
              <div className="mb-2">
                <Image
                  src="/logo/journeyonwheels-trans-3.4.png"
                  alt="Journey on Wheels"
                  width={1920}
                  height={1080}
                  className="h-28 lg:h-32 w-auto object-contain"
                />
              </div>
              <div className="space-y-4 text-sm lg:text-base font-body">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  </div>
                  <span className="font-semibold">+91 9569210750</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  </div>
                  <span>info.shreegoholidays@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Side: Links Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Company Links */}
              <div>
                <h3 className="font-heading font-semibold text-lg lg:text-xl mb-4 lg:mb-6 text-gray-900">
                  Company
                </h3>
                <ul className="space-y-3 text-sm lg:text-base font-body">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Blog/ News
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-heading font-semibold text-lg lg:text-xl mb-4 lg:mb-6 text-gray-900">
                  Service
                </h3>
                <ul className="space-y-3 text-sm lg:text-base font-body">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Intercity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Local rental
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Round trip
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Airport transfer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Tour/ Trip
                    </a>
                  </li>
                </ul>
              </div>

              {/* Policies */}
              <div>
                <h3 className="font-heading font-semibold text-lg lg:text-xl mb-4 lg:mb-6 text-gray-900">
                  Policies
                </h3>
                <ul className="space-y-3 text-sm lg:text-base font-body">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition inline-block hover:translate-x-1 duration-200">
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="max-w-7xl mx-auto mt-8 py-6 border-b border-gray-200">
          <div className="flex items-center gap-3 justify-start mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 font-heading">
              Tour Packages
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
            Lucknow to Ayodhya | Lucknow to Varanasi | Lucknow to Prayagraj |
            Lucknow to Gorakhpur | Lucknow to Delhi | Ayodhya to Lucknow |
            Ayodhya to Varanasi | Ayodhya to Prayagraj | Ayodhya to Gorakhpur |
            Ayodhya to Kanpur | Varanasi to Ayodhya | Varanasi to Lucknow |
            Varanasi to Prayagraj | Varanasi to Gorakhpur | Varanasi to Delhi
            | Prayagraj to Lucknow | Prayagraj to Varanasi | Prayagraj to Ayodhya
            | Prayagraj to Kanpur | Prayagraj to Delhi | Mathura to Agra |
            Mathura to Delhi | Mathura to Vrindavan | Mathura to Lucknow |
            Mathura to Jaipur | Delhi to Agra | Delhi to Jaipur | Delhi to
            Lucknow | Delhi to Varanasi | Delhi to Ayodhya
          </p>
        </div>

        {/* Recommended Routes */}
        <div className="max-w-7xl mx-auto py-6">
          <div className="flex items-center gap-3 justify-start mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 font-heading">
              Recommend routes
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
            Lucknow to Haridwar | Lucknow to Rishikesh | Lucknow to Dehradun |
            Lucknow to Nainital | Lucknow to Shimla | Ayodhya to Haridwar |
            Ayodhya to Rishikesh | Ayodhya to Dehradun | Ayodhya to Nainital |
            Ayodhya to Shimla | Varanasi to Haridwar | Varanasi to Rishikesh |
            Varanasi to Dehradun | Varanasi to Nainital | Varanasi to Shimla
            | Prayagraj to Haridwar | Prayagraj to Rishikesh | Prayagraj to
            Dehradun | Prayagraj to Nainital | Prayagraj to Shimla | Mathura to
            Haridwar | Mathura to Rishikesh | Mathura to Dehradun | Mathura to
            Chandigarh | Mathura to Amritsar | Delhi to Rishikesh | Delhi to
            Dehradun | Delhi to Nainital | Delhi to Shimla | Delhi to Manali
            | Agra to Jaipur | Agra to Haridwar | Agra to Rishikesh | Agra to
            Dehradun | Agra to Chandigarh | Jaipur to Agra | Jaipur to Delhi |
            Jaipur to Chandigarh | Jaipur to Udaipur | Jaipur to Jodhpur
            | Chandigarh to Delhi | Chandigarh to Shimla | Chandigarh to Manali |
            Chandigarh to Amritsar | Chandigarh to Dehradun
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center sm:text-start text-gray-500 text-sm font-body">
            © 2025 Journey on Wheels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
