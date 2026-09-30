"use client";

import { FormEvent, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Activities from "../Components/Activities";
import Event from "../Components/Event";
import Committee from "../Components/Committee";
import Membership from "../Components/MemberShip";

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

const events: EventItem[] = [
  {
    category: "cultural",
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    alt: "Yakshagana Event",
    label: "Cultural",
    labelClass: "bg-saffron-500",
    date: "Nov 12, 2025",
    title: "Grand Yakshagana Bayalata",
    shortDescription:
      "Over 1,000 villagers gathered to experience the mythical performance by renowned artists.",
    description:
      "Performed at Badoor Temple premises featuring top artists. The event saw overwhelming participation from surrounding villages, celebrating traditional folk theater.",
  },
  {
    category: "social",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80",
    alt: "Blood Donation",
    label: "Social",
    labelClass: "bg-red-600",
    date: "Jan 26, 2026",
    title: "Mega Blood Donation Drive",
    shortDescription:
      "128 units of blood collected on Republic Day in association with Yenepoya Blood Bank.",
    description:
      "Organized on Republic Day. Over 128 voluntary donors participated. Certificate and refreshments were presented to all youth volunteers.",
  },
  {
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    alt: "Sports Meet",
    label: "Sports",
    labelClass: "bg-blue-600",
    date: "Feb 15, 2026",
    title: "Badoor Rural Kabaddi Tournament",
    shortDescription:
      "16 regional teams competed in an exciting floodlight Kabaddi championship.",
    description:
      "An intense 1-day floodlight Kabaddi trophy that brought together rural talents. Cash prizes and trophies were handed over by local dignitaries.",
  },
  {
    category: "cultural",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80",
    alt: "Ganesha Utsava",
    label: "Cultural",
    labelClass: "bg-saffron-500",
    date: "Sep 07, 2025",
    title: "Public Ganesha Utsava Celebrations",
    shortDescription:
      "Three days of spiritual pujas, cultural bhajans, and community feast (Maha Annadana).",
    description:
      "Featuring daily Mahapooja, devotional bhajan sessions, children competitions, and traditional immersion procession.",
  },
  {
    category: "social",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=600&q=80",
    alt: "Scholarship Distribution",
    label: "Social",
    labelClass: "bg-emerald-600",
    date: "Jun 05, 2025",
    title: "School Kit & Scholarship Distribution",
    shortDescription:
      "Assisting over 75 deserving students from local government schools with bags and books.",
    description:
      "Shri Durgha Club members sponsored educational kits and financial aid for high school students in Badoor.",
  },
  {
    category: "social",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    alt: "Plantation Drive",
    label: "Social",
    labelClass: "bg-teal-600",
    date: "Jul 10, 2025",
    title: "Vanamahotsava Tree Planting",
    shortDescription:
      "Planted over 200 fruit-bearing trees along public roadsides in Badoor.",
    description:
      "Youth volunteers came together to plant saplings and build protective guards to promote green environment in Badoor.",
  },
];

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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-saffron-600">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-heading text-3xl font-bold text-maroon-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-gray-600 md:text-base">{description}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-saffron-500" />
    </div>
  );
}

export default function Home() {
  const [category, setCategory] = useState<EventCategory>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTitle, setToastTitle] = useState("Submitted!");
  const [toastMessage, setToastMessage] = useState(
    "Thank you for reaching out to Shri Durgha Club.",
  );
  const [countdown, setCountdown] = useState({
    days: 18,
    hours: 8,
    minutes: 45,
    seconds: 22,
  });

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  const showToast = (
    title = "Submitted!",
    message = "Thank you for reaching out to Shri Durgha Club.",
  ) => {
    setToastTitle(title);
    setToastMessage(message);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 4000);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    showToast();
  };

  const filteredEvents =
    category === "all"
      ? events
      : events.filter((event) => event.category === category);

  const navLinks = [
    ["#home", "Home"],
    ["#about", "About Us"],
    ["#activities", "Activities"],
    ["#events", "Events"],
    ["#committee", "Leadership"],
    ["#membership", "Join Us"],
    ["#contact", "Contact"],
  ];

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
      <section id="contact" className="bg-amber-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Shri Durgha Club"
          />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <ContactCard icon="fa-location-dot" title="Club Address">
                Shri Durgha Club Building, Badoor Post, Kasaragod / Dakshina
                Kannada Border Region, Pin: 671323
              </ContactCard>
              <ContactCard icon="fa-phone" title="Phone Numbers">
                <span className="block">+91 98450 00000 (President)</span>
                <span className="block">+91 99000 11111 (Secretary)</span>
              </ContactCard>
              <ContactCard icon="fa-envelope" title="Email & Socials">
                <span className="block">shridurghaclubbadoor@gmail.com</span>
                <div className="mt-3 flex space-x-3">
                  {[
                    "fa-facebook-f",
                    "fa-instagram",
                    "fa-whatsapp",
                    "fa-youtube",
                  ].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-maroon-900 text-gold-400 transition hover:bg-saffron-500 hover:text-white"
                    >
                      <Icon
                        name={icon}
                        prefix="fa-brands"
                        className="text-xs"
                      />
                    </a>
                  ))}
                </div>
              </ContactCard>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-md lg:col-span-7">
              <h3 className="mb-4 font-heading text-xl font-bold text-maroon-900">
                Send a Quick Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your Name *"
                    className="form-input"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Mobile Number *"
                    className="form-input"
                  />
                </div>
                <input placeholder="Subject" className="form-input" />
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message or inquiry here..."
                  className="form-input"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-saffron-500 px-8 py-3 font-bold text-white shadow transition hover:bg-saffron-600"
                >
                  Send Message <Icon name="fa-paper-plane" className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold-400/20 bg-maroon-900 pb-8 pt-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron-500 font-bold text-maroon-900">
                  SDC
                </div>
                <span className="font-heading text-xl font-bold text-gold-400">
                  SHRI DURGHA CLUB, BADOOR
                </span>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-saffron-100/80">
                A non-profit social & cultural organization committed to youth
                development, preservation of traditional folk arts, healthcare
                support, and social welfare in Badoor.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-heading text-sm font-bold text-gold-400">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-saffron-100/80">
                {[
                  ["#about", "About Our Club"],
                  ["#activities", "Social Services"],
                  ["#events", "Yakshagana & Events"],
                  ["#membership", "Membership Form"],
                  ["#donate", "Donate Funds"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="transition hover:text-gold-400">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-heading text-sm font-bold text-gold-400">
                Location
              </h4>
              <p className="text-xs leading-relaxed text-saffron-100/80">
                Badoor Village, <br />
                Near Government School,
                <br />
                Kasaragod / Puttur Region, India.
              </p>
              <p className="mt-2 text-xs font-semibold text-gold-400">
                Serving the community with devotion.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-maroon-800 pt-6 text-xs text-saffron-100/60 sm:flex-row">
            <p>&copy; 2026 Shri Durgha Club, Badoor. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Designed for Non-Profit Community Welfare.
            </p>
          </div>
        </div>
      </footer>

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
      <div
        className={`fixed bottom-5 right-5 z-[70] flex items-center space-x-3 rounded-2xl border border-gold-400 bg-maroon-900 px-6 py-3.5 shadow-2xl transition-all duration-300 ${
          toastVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-live="polite"
      >
        <Icon name="fa-circle-check" className="text-xl text-emerald-400" />
        <div>
          <p className="text-sm font-bold text-white">{toastTitle}</p>
          <p className="text-xs text-saffron-100">{toastMessage}</p>
        </div>
      </div>
    </main>
  );
}

function FormField({
  label,
  type,
  required,
  placeholder,
}: {
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start space-x-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-100 text-xl text-saffron-600">
        <Icon name={icon} />
      </div>
      <div>
        <h4 className="font-bold text-maroon-900">{title}</h4>
        <div className="mt-1 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}
