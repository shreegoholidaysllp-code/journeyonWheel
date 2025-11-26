"use client";

import { useState } from "react";
import InquiryPopup from "../BookingPopup";
import Image from "next/image";

const vehicles = [
  {
    name: "Mini / Hatchback",
    desc: "Perfect for budget-friendly city rides and small families. Compact & comfortable.",
    price: "Starts at ₹12/km",
    icon: "/image/mini.png",
  },
  {
    name: "Sedan / Standard",
    desc: "Ideal for outstation trips. Spacious seating for 4 with ample luggage space.",
    price: "Starts at ₹14/km",
    icon: "/image/sedan.png",
  },
  {
    name: "SUV / Premium",
    desc: "Best for long journeys & hill stations. Extra legroom & power for 6-7 travelers.",
    price: "Starts at ₹19/km",
    icon: "/image/suv.png",
  },
  {
    name: "Luxury / Executive",
    desc: "Travel in style for weddings & corporate events. Premium comfort guaranteed.",
    price: "Starts at ₹25/km",
    icon: "/image/luxery.png",
  },
];

export default function VehiclesSection() {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-start mb-8 lg:mb-12 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light font-heading">
            Choose Your Ride
          </h2>
          <div className="w-16 h-1 bg-text-light rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <div className="h-48 relative bg-gradient-to-br from-gray-100 to-blue-50">
                <Image
                  src={`${vehicle.icon}`}
                  alt={vehicle.name}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-center font-heading">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center flex-grow">
                  {vehicle.desc}
                </p>
                <p className="text-teal-600 font-semibold text-center mb-4 text-base">
                  {vehicle.price}
                </p>
                <button
                  className="w-full font-heading font-semibold bg-primary py-2 rounded-lg transition text-white hover:bg-opacity-90"
                  onClick={() => setPopupOpen(!popupOpen)}
                >
                  Book Now
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
