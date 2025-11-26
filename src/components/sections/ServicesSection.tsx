"use client";

import { Car, Plane, Building2, MapPin } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Outstation Cabs",
    desc: "Affordable one-way and round-trip outstation taxis from Lucknow, Varanasi, Ayodhya, and major cities.",
  },
  {
    icon: Building2,
    title: "Local Car Rentals",
    desc: "Flexible hourly and daily car rental packages (4hr/40km, 8hr/80km) with professional drivers for city travel.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Reliable airport pickup and drop taxi services for Chaudhary Charan Singh (LKO) & Lal Bahadur Shastri (VNS) Airports.",
  },
  {
    icon: MapPin,
    title: "Tour Packages",
    desc: "Customized tour packages for Ayodhya Ram Mandir Darshan, Kashi Vishwanath, and Buddhist Circuit tours.",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "2500+", label: "Rides Completed" },
  { value: "4.5+", label: "Average Rating" },
];
export default function ServicesSection() {
  return (
    <>
      <section id="services" className="py-12 lg:pb-16 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 justify-start mb-8 lg:mb-12 ">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-light font-heading">
              We provide
            </h2>
            <div className="w-16 h-1 bg-text-light rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="text-center bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-teal-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-lg mb-4">
                  <service.icon className="h-7 w-7 lg:h-8 lg:w-8 text-teal-600" />
                </div>
                <h3 className="text-base font-heading lg:text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 lg:mb-8 font-heading">
            Serving Every <span className="text-teal-600">Ride</span>, Every
            City
          </h2>
          <p className="text-center text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto text-sm sm:text-base px-4 font-body">
            From Lucknow to Gorakhpur, we've delivered comfort and care through
            our reliable service, ensuring professionalism and trust with every
            trip.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-items-center ">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="w-[80%] bg-white p-6 lg:p-8 rounded-xl text-center bg-gradient-to-b from-[rgba(0,166,168,0.1)]  to-[rgba(0,166,168,0.3)] border border-border-light"
              >
                <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
