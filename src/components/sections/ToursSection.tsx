"use client";
import { useState } from "react";
import InquiryPopup from "../BookingPopup";
import Image from "next/image";

const tours = [
  {
    name: "Char Dham Yatra",
    duration: "10-12 days",
    price: "₹14,500/trip",
    desc: "A divine spiritual journey across the sacred peaks of Uttarakhand. Complete package.",
    imgurl: "/image/chaardhamyatra.jpg",
  },
  {
    name: "Rishikesh Adventure",
    duration: "3-5 days",
    price: "₹8,000/person",
    desc: "Experience the thrill of rafting, camping, and yoga by the Ganges.",
    imgurl: "/image/rishikesh.jpg",
  },
  {
    name: "Mussoorie Hill Escape",
    duration: "2-3 days",
    price: "₹6,500/person",
    desc: "Relax in the Queen of Hills with scenic views, waterfalls, and mall road walks.",
    imgurl: "/image/mountains.jpg",
  },
];

export default function ToursSection() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section id="tours" className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-start mb-8 lg:mb-12 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light font-heading">
            Tour Packages
          </h2>
          <div className="w-16 h-1 bg-text-light rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 lg:h-48 bg-gradient-to-br from-teal-200 to-blue-200">
                <Image
                  src={`${tour.imgurl}`}
                  alt="Image"
                  height={1080}
                  width={1920}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  {tour.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 lg:mb-4">
                  {tour.desc}
                </p>
                <p className="text-teal-600 font-semibold mb-3 lg:mb-4 text-sm lg:text-base">
                  {tour.duration} | {tour.price}
                </p>
                <button
                  className="text-teal-600 font-semibold hover:underline text-sm lg:text-base"
                  onClick={() => setPopupOpen(!popupOpen)}
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <InquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
}
