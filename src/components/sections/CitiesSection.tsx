"use client";

import { MapPin } from "lucide-react";

const cities = [
  "Lucknow",
  "Varanasi",
  "Delhi",
  "Ayodhya",
  "Gurugram",
  "Agra",
  "Kanpur",
  "Gorakhpur",
  "Mathura",
  "Prayagraj",
  "Meerut",
  "Ghaziabad",
  "Dehradun",
  "Gya",
  "Noida",
];

export default function CitiesSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-3 justify-start mb-8 lg:mb-12 ">
          <div className="flex items-center gap-3">
             <h2 className="text-2xl sm:text-3xl font-bold text-text-light font-heading">
                Cities We Serve
            </h2>
            <div className="w-16 h-1 bg-text-light rounded-full" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            We provide premium cab services across major cities in North India. 
            Book a taxi in Lucknow, Varanasi, Ayodhya, Delhi, and more for a comfortable journey. Reliable intercity cabs and local rentals available.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 bg-white p-3 lg:p-4 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-teal-600 flex-shrink-0" />
              <span className="font-medium text-sm lg:text-base">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
