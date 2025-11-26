"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import InquiryPopup from "../BookingPopup";

export default function CTASection() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="relative py-12 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-teal-50 via-teal-100/50 to-teal-200/60 rounded-3xl overflow-hidden shadow-xl p-8 lg:p-12">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-teal-300/40 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600 mb-4 lg:mb-6 font-heading">
                Ready for Your Next Journey?
              </h2>
              <p className="text-text-light text-base sm:text-lg mb-3 leading-relaxed font-body">
                Book reliable cabs across Uttar Pradesh & North India. Whether it's a local ride, 
                airport transfer, or an outstation trip, we ensure a safe and comfortable experience 
                every time. 24/7 Support | Verified Drivers | Best Rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 py-4">
                <button
                  className="inline-flex items-center justify-center gap-2 bg-white border border-border-light text-teal-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 shadow-md hover:shadow-lg text-base lg:text-lg"
                  onClick={() => setPopupOpen(!popupOpen)}
                >
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.5} />
                  Call now
                </button>
                <button
                  className="bg-secondary text-text px-6 lg:px-8 py-2 lg:py-2 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg text-base lg:text-lg"
                  onClick={() => setPopupOpen(!popupOpen)}
                >
                  Book now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                <Image
                  src="/Image/car.png"
                  alt="Luxury sedan car"
                  fill
                  className="object-contain object-center drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
}
