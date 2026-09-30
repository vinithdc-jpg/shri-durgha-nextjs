"use client";

import { FormEvent, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Activities from "../Components/Activities";
import Event from "../Components/Event";
import Committee from "../Components/Committee";
import Membership from "../Components/MemberShip";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Toast from "../Components/ui/Toast";

type EventCategory = "all" | "cultural" | "social" | "sports";

type EventItem = {
  category: Exclude<EventCategory, "all">;
  image: string;
  alt: string;
  label: string;
  labelClass: string;
  date: string;
  title: string;
  shortDescription: string;
  description: string;
};


function Icon({
  name,
  className = "",
  prefix = "fa-solid",
}: {
  name: string;
  className?: string;
  prefix?: "fa-solid" | "fa-regular" | "fa-brands";
}) {
  return <i className={`${prefix} ${name} ${className}`} aria-hidden="true" />;
}

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);
  
  
  return (
    <main className="min-h-screen bg-amber-50/30 font-sans text-gray-800 antialiased selection:bg-saffron-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Activities */}
      <Activities />

      {/* Events */}
      <Event />

      {/* Committee */}
      <Committee />

      {/* Membership + Donation */}
      <Membership />

      {/* Contact */}
      <Content />

      {/* Footer */}
      <Footer />

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedEvent(null);
          }}
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 text-xl font-bold text-gray-400 hover:text-gray-700"
              aria-label="Close event details"
            >
              <Icon name="fa-xmark" />
            </button>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-saffron-600">
              {selectedEvent.date}
            </span>
            <h3
              id="event-modal-title"
              className="mb-3 font-heading text-2xl font-bold text-maroon-900"
            >
              {selectedEvent.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              {selectedEvent.description}
            </p>
            <div className="text-right">
              <button
                onClick={() => setSelectedEvent(null)}
                className="rounded-xl bg-maroon-900 px-6 py-2 text-sm font-bold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <Toast />
    </main>
  );
}
