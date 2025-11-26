"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronDown, Phone, MessageSquare } from "lucide-react";

interface InquiryPopupProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export default function InquiryPopup({ open, onClose }: InquiryPopupProps) {
  const [interest, setInterest] = useState("");
  const [customText, setCustomText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    "City Ride",
    "Outstation Trip",
    "Airport Transfer",
    "Rental Package",
    "Become a partner",
  ];

  if (!open) return null;

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!interest) {
      alert("Please select an option from the dropdown.");
      return;
    }

    // Validate Phone Number (Must be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, interest, customText }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose(false);
          setName("");
          setPhone("");
          setInterest("");
          setCustomText("");
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hey, I’m interested! Could you please share more details about it?";
    window.open(`https://wa.me/+919569210750?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-sm md:max-w-xl rounded-2xl p-6 relative shadow-xl border border-border-light font-body">
        {/* Close Button */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-primary/30 rounded-full p-1"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex justify-center ">
          <Image
            src="/logo/journeyonwheels-trans-3.4.png"
            alt="Logo"
            width={200}
            height={60}
            className="rounded-md object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center font-heading text-gray-900">
          {submitted ? "Thank You!" : "Tell Us What You Need"}
        </h2>

        {submitted ? (
             <div className="text-center text-green-600 py-4">
                <p>Your inquiry has been submitted successfully.</p>
                <p>We will contact you shortly.</p>
             </div>
        ) : (
            <>
                {/* Name Field */}
                <div className="mb-4">
                <label className="text-sm text-gray-700 font-medium">Your Name</label>
                <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                <label className="text-sm text-gray-700 font-medium">Phone Number</label>
                <input
                    type="tel"
                    className="w-full mt-1 px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Enter your phone number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                      if (value.length <= 10) {
                        setPhone(value);
                      }
                    }}
                />
                </div>

                {/* Interest Dropdown */}
                <div className="mb-4">
                <label className="text-sm text-gray-700 font-medium">
                    Interested In
                </label>

                <select
                    className="w-full mt-1 px-3 py-2 border border-border-light rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                >
                    <option value="">Select an option</option>

                    {interestOptions.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                    ))}
                </select>
                </div>

                {/* Custom Text */}
                <div className="mb-4">
                <label className="text-sm text-gray-700 font-medium">
                    Add Note (optional)
                </label>
                <textarea
                    className="w-full mt-1 px-3 py-2 border border-border-light rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Describe your requirement"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                    onClick={handleSubmit}
                    disabled={isLoading || phone.length !== 10 || !name.trim() || !interest}
                    className={`w-full bg-primary text-white py-3 rounded-full font-semibold text-sm tracking-wide transition ${
                      isLoading || phone.length !== 10 || !name.trim() || !interest
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary/90'
                    }`}
                >
                {isLoading ? "Processing..." : "Submit Inquiry"}
                </button>
            </>
        )}

        {/* Call Now Button */}
        <div className="flex justify-between gap-x-4">
          <a 
            href="tel:+919569210750"
            className="w-full mt-3 border border-primary text-primary py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-sm hover:bg-primary/5 transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          {/* whatsapp  */}
          <button 
            onClick={handleWhatsAppClick}
            className="w-full mt-3 text-black py-3 rounded-full font-semibold flex items-center bg-secondary justify-center gap-2 text-sm hover:opacity-90 transition"
          >
            <MessageSquare className="h-4 w-4" /> Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
