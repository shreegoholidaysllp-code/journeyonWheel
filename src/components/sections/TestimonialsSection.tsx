"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    city: "Lucknow",
    text: "Booked a cab for my family from Lucknow to Ayodhya. The driver was on time, the car was clean, and the journey was smooth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vishal Mishra",
    city: "Varanasi",
    text: "I use Journey On Wheels for my weekly airport transfers in Varanasi. They are always punctual and the drivers are very professional.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    city: "Noida",
    text: "Took a rental package for a 3-day tour of Agra and Mathura. The pricing was transparent and the driver acted like a guide. Great experience!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-start mb-8 lg:mb-12 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light font-heading">
            Happy Customers
          </h2>
          <div className="w-16 h-1 bg-text-light rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-gray-50 p-5 lg:p-6 rounded-xl">
              <div className="flex mb-3 lg:mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3 lg:mb-4 italic text-sm lg:text-base">
                "{test.text}"
              </p>
              <div className="font-semibold text-sm lg:text-base">
                {test.name}
              </div>
              <div className="text-gray-600 text-xs lg:text-sm">
                {test.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
