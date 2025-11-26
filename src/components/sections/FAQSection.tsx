"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is this app different from Uber or Ola?",
    a: "We specialize in pre-booked outstation cabs, airport transfers, and rental packages across North India. Unlike on-demand apps, we guarantee a confirmed ride with professional drivers, clean cars, and no surge pricing.",
  },
  {
    q: "Can I book a taxi for the same day?",
    a: "Yes! You can book a ride for the same day, subject to availability. For outstation trips, we recommend booking at least 4 hours in advance to ensure the best vehicle selection.",
  },
  {
    q: "Which cities do you serve?",
    a: "We operate extensively across Uttar Pradesh and North India, covering major cities like Lucknow, Varanasi, Ayodhya, Agra, Kanpur, Prayagraj, and Delhi NCR.",
  },
  {
    q: "How do I know the driver is safe and reliable?",
    a: "Safety is our priority. All our drivers undergo strict background checks, hold valid commercial licenses, and are trained in customer service and safety protocols.",
  },
  {
    q: "What types of rides can I book?",
    a: "We offer a wide range of services: One-way & Round-trip Outstation Cabs, Local Hourly Rentals (4hr/40km, 8hr/80km), Airport Pickups/Drops, and Customized Tour Packages.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - Left aligned */}
        <div className="flex items-center gap-3 mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-light">
            FAQ
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gray-500 rounded-full" />
        </div>

        {/* FAQ Cards - Centered */}
        <div className="max-w-4xl mx-auto space-y-4 lg:space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 lg:p-6 text-left transition-all duration-300"
              >
                <span className="pr-4 text-sm sm:text-base lg:text-lg font-semibold text-text font-heading">
                  {faq.q}
                </span>
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300">
                  {openFaq === idx ? (
                    <Minus
                      className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white"
                      strokeWidth={3}
                    />
                  ) : (
                    <Plus
                      className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white"
                      strokeWidth={3}
                    />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 font-body lg:px-6 pb-5 lg:pb-6 text-xs sm:text-sm lg:text-base text-text-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
