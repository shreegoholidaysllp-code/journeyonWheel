"use client";

import { MapPin, Shield, Check, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import InquiryPopup from "../BookingPopup";
import { useState } from "react";

export default function HeroSection() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
      <section className="bg-gradient-to-r from-[rgba(0,166,168,0.05)] via-[rgba(255,255,255,0.1)] to-[rgba(0,166,168,0.3)] py-8 lg:py-20 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              {/* Rating Badge */}
              <div className="inline-block bg-secondary/80 text-gray-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 lg:mb-6">
                ⭐ 4.8/5 by thousands of happy travelers
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight font-heading">
                Reliable <span className="text-teal-600">Car Rental & Taxi Service</span> in North India —
                Lucknow, Varanasi & Ayodhya
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
                Book top-rated outstation cabs, airport taxi service, and luxury car rentals. 
                Your trusted travel partner for safe and affordable rides across Uttar Pradesh, Lucknow, Varanasi, and Ayodhya.
              </p>

              {/* CTA Button */}
              <button
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-border-light font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg flex items-center justify-center space-x-3 transition group mb-6 lg:mb-8"
                onClick={() => setPopupOpen(!popupOpen)}
              >
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-teal-600" />
                <span className="text-sm sm:text-base">Book your cab now</span>
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400 group-hover:translate-x-1 transition" />
              </button>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 relative h-full">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/Image/car.png"
                  alt="Luxury car"
                  width={800}
                  height={600}
                  className="w-full h-full   object-cover object-top rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Trust Builder */}
      <section className="bg-transparent relative">
        <div className="max-w-7xl py-4 md:py-0 mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-18">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 bg-white p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 border-2 lg:border-[3px] border-teal-600 rounded-lg lg:rounded-2xl flex items-center justify-center">
                <Shield
                  className="h-5 w-5 lg:h-8 lg:w-8 text-teal-600"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-lg font-semibold text-teal-600 leading-tight">
                  Verified Local Drivers
                </span>
                <span className="text-xs lg:text-base text-teal-600/70">
                  You can trust
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 border-2 lg:border-[3px] border-teal-600 rounded-lg lg:rounded-2xl flex items-center justify-center">
                <Check
                  className="h-5 w-5 lg:h-8 lg:w-8 text-teal-600"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-lg font-semibold text-teal-600 leading-tight">
                  Transparent Fare
                </span>
                <span className="text-xs lg:text-base text-teal-600/70">
                  No hidden charges
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 border-2 lg:border-[3px] border-teal-600 rounded-lg lg:rounded-2xl flex items-center justify-center">
                <Clock
                  className="h-5 w-5 lg:h-8 lg:w-8 text-teal-600"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm lg:text-lg font-semibold text-teal-600 leading-tight">
                  Smart Wait — Zero
                </span>
                <span className="text-xs lg:text-base text-teal-600/70">
                  Cancellation Stress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
