"use client";

import { Home, Calendar, MessageCircle, User } from "lucide-react";
import { useState } from "react";

export default function MobileBottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "bookings", icon: Calendar, label: "Bookings" },
    { id: "support", icon: MessageCircle, label: "Support" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive ? "text-teal-600" : "text-gray-600"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "fill-teal-100" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
