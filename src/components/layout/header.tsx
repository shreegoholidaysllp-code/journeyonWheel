"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, User } from "lucide-react";
import Image from "next/image";
import InquiryPopup from "../BookingPopup";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const router = useRouter();

  return (
    <header
      className=" bg-gradient-to-r from-[rgba(0,166,168,0.05)] via-[rgba(255,255,255,0.1)] to-[rgba(0,166,168,0.3)]

 sticky top-0 z-50 border-b-2 border-border-light  bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center ">
            <div
              className="relative h-24 w-auto sm:h-32"
              onClick={() => router.replace("/")}
            >
              <Image
                src="/logo/journeyonwheels-trans-3.4.png"
                alt="Journey Via Wheels Logo"
                width={1920}
                height={1080}
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8  ">
              <button
                className="text-teal-700 hover:bg-secondary/40 rounded-xl px-4 py-1 hover:text-teal-900 font-semibold transition text-lg"
                onClick={() => router.push("/pages/blog")}
              >
                Blog
              </button>
            </nav>
            <div className="border border-[#d9d9d9]" />

            {/* Right side - CTA, Phone & User Icon */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Become a Partner Button */}
              <button
                className="px-6 py-2.5 text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition font-semibold bg-white"
                onClick={() => router.push("/pages/partner")}
              >
                Become a partner
              </button>

              {/* Phone Icon */}
              <div className="group">
                <button
                  className="p-3 rounded-full border border-border-light bg-white text-teal-700 transition duration-300 hover:bg-primary hover:text-white"
                  onClick={() => setPopupOpen(!popupOpen)}
                >
                  <Phone className="h-6 w-6" />
                </button>
              </div>

              {/* User Icon */}
              <button
                className="p-3 rounded-full bg-secondary hover:bg-yellow-500 transition"
                onClick={() => setPopupOpen(!popupOpen)}
              >
                <User className="h-6 w-6 text-gray-900" />
              </button>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Phone Icon - Mobile */}
            <button
              className="p-2 rounded-full bg-teal-100 hover:bg-teal-200 transition"
              onClick={() => setPopupOpen(!popupOpen)}
            >
              <Phone className="h-5 w-5 text-teal-700" />
            </button>

            {/* User Icon - Mobile */}
            <button
              className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition"
              onClick={() => setPopupOpen(!popupOpen)}
            >
              <User className="h-5 w-5 text-gray-900" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-teal-200 py-4 space-y-2 bg-white/80 backdrop-blur-sm">
            <a
              href="#blog"
              className="block py-3 px-4 text-teal-700 hover:bg-teal-50 rounded font-semibold"
              onClick={() => router.push("/pages/blog")}
            >
              Blog
            </a>
            <div className="px-4 pt-2">
              <button
                className="w-full py-3 text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition font-semibold"
                onClick={() => router.push("/pages/partner")}
              >
                Become a partner
              </button>
            </div>
          </div>
        )}
      </div>
      <InquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </header>
  );
}
