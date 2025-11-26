"use client";

import {
  DollarSign,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  TrendingUp,
  Star,
  PhoneCall,
} from "lucide-react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryPopup from "@/components/BookingPopup";
import { useState } from "react";

const Partner = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description:
        "Competitive rates with no hidden charges. Keep more of what you earn.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description:
        "Work on your own schedule. Drive when you want, where you want.",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for you and your vehicle.",
    },
    {
      icon: Users,
      title: "Growing Customer Base",
      description: "Access to thousands of customers across Uttar Pradesh.",
    },
  ];

  const requirements = [
    "Valid driving license (minimum 2 years)",
    "Vehicle registration certificate (RC)",
    "Valid vehicle insurance",
    "Police verification certificate",
    "Aadhaar card and PAN card",
    "Clean driving record",
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description:
        "Fill out our simple application form with your details and documents.",
    },
    {
      number: "02",
      title: "Document Verification",
      description:
        "Our team will verify your documents and conduct a background check.",
    },
    {
      number: "03",
      title: "Training & Onboarding",
      description: "Complete our driver training program and app orientation.",
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Get approved and start accepting rides on your schedule.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Partner Driver",
      text: "I've been driving with Journey on Wheels for 6 months now. The flexibility and earnings are amazing. Best decision I made!",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Partner Driver",
      text: "Great support from the team and consistent ride requests. I'm earning more than my previous job and on my own schedule.",
      rating: 5,
    },
    {
      name: "Suresh Sharma",
      role: "Partner Driver",
      text: "The app is easy to use and I love the transparent payment system. Highly recommend joining as a partner driver.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-100/40 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-gray-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold font-body mb-6">
              <TrendingUp className="h-4 w-4 text-teal-600" />
              Join 500+ drivers earning daily
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              Drive & Earn with{" "}
              <span className="text-teal-600">Journey On Wheels</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-body text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the fastest-growing cab network in North India. Enjoy flexible working hours, 
              transparent earnings, and 24/7 support. Be your own boss today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base lg:text-lg font-body"
                onClick={() => setPopupOpen(!popupOpen)}
              >
                Apply Now
              </button>
              <button
                className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 text-base lg:text-lg font-body flex items-center justify-center gap-2"
                onClick={() => setPopupOpen(!popupOpen)}
              >
                <PhoneCall className="h-5 w-5" />
                Call now
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-12">
              <div className="bg-white p-5 lg:p-6 rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold font-heading text-teal-600 mb-2">
                  ₹30,000+
                </div>
                <div className="font-body text-sm lg:text-base text-gray-600">
                  Average Monthly Earnings
                </div>
              </div>
              <div className="bg-white p-5 lg:p-6 rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold font-heading text-teal-600 mb-2">
                  24/7
                </div>
                <div className="font-body text-sm lg:text-base text-gray-600">
                  Driver Support
                </div>
              </div>
              <div className="bg-white p-5 lg:p-6 rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold font-heading text-teal-600 mb-2">
                  500+
                </div>
                <div className="font-body text-sm lg:text-base text-gray-600">
                  Monthly Ride Requests
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="font-body text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Join India's fastest-growing cab service and enjoy exclusive
              benefits
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-teal-400 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
                Requirements
              </h2>
              <p className="font-body text-base lg:text-lg text-gray-600">
                Simple requirements to get you started
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm lg:text-base text-gray-700">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="font-body text-base lg:text-lg text-gray-600">
              Simple steps to start your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-3xl font-bold font-heading text-teal-600">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="font-body text-base lg:text-lg text-gray-600">
              Hear from our successful partner drivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-400 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-body text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-heading font-semibold text-base lg:text-lg text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="font-body text-base lg:text-lg text-teal-50 mb-8 max-w-2xl mx-auto">
            Join our growing community of drivers and take control of your
            income today
          </p>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 lg:px-10 py-3 lg:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base lg:text-lg font-body"
            onClick={() => setPopupOpen(!popupOpen)}
          >
            Apply Now
          </button>
        </div>
      </section>

      <InquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <Footer />
    </div>
  );
};

export default Partner;
