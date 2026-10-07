"use client";
import { useState } from "react";
import Icon from "./ui/Icon";
import Image from "next/image";

const navLinks: [string, string][] = [
  ["/#home", "Home"],
  ["/#about", "About Us"],
  ["/#activities", "Activities"],
  ["/#events", "Events"],
  ["/#committee", "Leadership"],
  ["/#membership", "Join Us"],
  ["/#contact", "Contact"],
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-maroon-900/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/#home" className="group flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/Logo.png"
                alt="Shri Durgha Club Logo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
                priority
              />
            </div>
            <div>
              <span className="block font-heading text-lg font-bold leading-tight tracking-wider text-gold-400 md:text-xl">
                SHRI DURGHA CLUB
              </span>
              <span className="block text-xs uppercase tracking-widest text-saffron-100/80">
                Badoor (R.)
              </span>
            </div>
          </a>

          <div className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="py-1 transition-colors hover:text-gold-400"
              >
                {label}
              </a>
            ))}
            <a
              href="/#donate"
              className="rounded-full bg-linear-to-r from-saffron-500 to-gold-500 px-5 py-2.5 font-bold text-maroon-900 shadow-md transition-all hover:-translate-y-0.5 hover:from-saffron-600 hover:to-gold-600 hover:shadow-lg"
            >
              <Icon name="fa-heart" className="mr-1.5" /> Donate
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="rounded-lg p-2 text-gold-400 hover:text-white focus:outline-none md:hidden"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <Icon
              name={mobileMenuOpen ? "fa-xmark" : "fa-bars"}
              className="text-2xl"
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-maroon-800 bg-maroon-900 px-4 pb-6 pt-3 md:hidden">
          <div className="space-y-3">
            {[
              ["/#home", "Home"],
              ["/#about", "About Us"],
              ["/#activities", "Activities"],
              ["/#events", "Events & Gallery"],
              ["/#committee", "Committee"],
              ["/#membership", "Join / Volunteer"],
              ["/#contact", "Contact Us"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link block rounded-md px-3 py-2 text-saffron-100 hover:bg-maroon-800"
              >
                {label}
              </a>
            ))}
            <a
              href="/#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link mt-2 block rounded-full bg-linear-to-r from-saffron-500 to-gold-500 py-2.5 text-center font-bold text-maroon-900 shadow"
            >
              <Icon name="fa-heart" className="mr-1.5" /> Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
