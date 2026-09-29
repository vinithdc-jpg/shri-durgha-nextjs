"use client";

import { FormEvent, useEffect, useState } from "react";

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

const activities = [
  [
    "fa-droplet",
    "bg-red-100",
    "text-red-600",
    "group-hover:bg-red-600",
    "Blood Donation Drives",
    "Organizing annual and emergency blood donation camps in partnership with local hospital blood banks to save lives in critical situations.",
    "Social Welfare",
  ],
  [
    "fa-masks-theater",
    "bg-amber-100",
    "text-saffron-600",
    "group-hover:bg-saffron-600",
    "Yakshagana & Cultural Fests",
    "Hosting traditional Yakshagana Bayalata performances, drama competitions, and folk art festivals to preserve our rich heritage.",
    "Cultural Art",
  ],
  [
    "fa-graduation-cap",
    "bg-emerald-100",
    "text-emerald-600",
    "group-hover:bg-emerald-600",
    "Student Education Support",
    "Distributing free books, school uniforms, and merit scholarships to meritorious students from economically weaker sections.",
    "Education",
  ],
  [
    "fa-trophy",
    "bg-blue-100",
    "text-blue-600",
    "group-hover:bg-blue-600",
    "Sports Meets & Kabaddi",
    "Promoting rural youth sports by conducting district-level Kabaddi tournaments, Cricket matches, and traditional games.",
    "Sports",
  ],
  [
    "fa-om",
    "bg-purple-100",
    "text-purple-600",
    "group-hover:bg-purple-600",
    "Festival Celebrations",
    "Community-wide grand celebrations of Ganesha Utsava, Navratri, Sharada Pooja, and Deepavali with public feasts and rituals.",
    "Community Festival",
  ],
  [
    "fa-tree",
    "bg-teal-100",
    "text-teal-600",
    "group-hover:bg-teal-600",
    "Environment Cleanups",
    "Swachh Badoor awareness drives, sapling plantation initiatives, and village sanitation campaigns for a sustainable environment.",
    "Environment",
  ],
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const eventDate = Date.now() + 18 * 24 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const distance = eventDate - Date.now();

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

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
      <nav className="fixed left-0 right-0 top-0 z-50 bg-maroon-900/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="group flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-saffron-500 to-gold-400 p-0.5 shadow-md transition-transform group-hover:scale-105">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-gold-400/30 bg-maroon-900">
                  <span className="font-bold text-xl text-gold-400">SDC</span>
                </div>
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
                href="#donate"
                className="rounded-full bg-gradient-to-r from-saffron-500 to-gold-500 px-5 py-2.5 font-bold text-maroon-900 shadow-md transition-all hover:-translate-y-0.5 hover:from-saffron-600 hover:to-gold-600 hover:shadow-lg"
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
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#activities", "Activities"],
                ["#events", "Events & Gallery"],
                ["#committee", "Committee"],
                ["#membership", "Join / Volunteer"],
                ["#contact", "Contact Us"],
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
                href="#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link mt-2 block rounded-full bg-gradient-to-r from-saffron-500 to-gold-500 py-2.5 text-center font-bold text-maroon-900 shadow"
              >
                <Icon name="fa-heart" className="mr-1.5" /> Donate Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="gradient-bg relative overflow-hidden pb-20 pt-28 text-white md:pb-32 md:pt-36"
      >
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
              <div className="inline-flex items-center space-x-2 rounded-full border border-gold-400/40 bg-maroon-800/80 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm md:text-sm">
                <span className="h-2 w-2 animate-ping rounded-full bg-saffron-500" />
                <span>Registered Non-Profit Social & Cultural Club</span>
              </div>

              <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Serving Community, <br />
                <span className="text-gradient-gold">Preserving Culture.</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-saffron-100/90 md:text-xl lg:mx-0">
                Welcome to{" "}
                <strong className="font-semibold text-gold-400">
                  Shri Durgha Club, Badoor
                </strong>
                . Dedicated to social welfare, empowering youth, supporting
                underprivileged families, and nurturing the rich cultural
                heritage of our region.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
                <a
                  href="#activities"
                  className="w-full rounded-full bg-saffron-500 px-8 py-3.5 text-center font-bold text-white shadow-lg transition-all hover:bg-saffron-600 hover:shadow-saffron-500/30 sm:w-auto"
                >
                  Explore Activities{" "}
                  <Icon name="fa-arrow-right" className="ml-2 text-sm" />
                </a>
                <a
                  href="#membership"
                  className="w-full rounded-full border-2 border-gold-400 px-8 py-3.5 text-center font-bold text-gold-300 transition-all hover:bg-gold-400 hover:text-maroon-900 sm:w-auto"
                >
                  Become a Member
                </a>
              </div>

              <div className="mx-auto grid max-w-lg grid-cols-3 gap-4 border-t border-maroon-800/80 pt-8 lg:mx-0">
                {[
                  ["25+", "Years Service"],
                  ["120+", "Blood Donors"],
                  ["5000+", "Lives Touched"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-heading text-3xl font-bold text-gold-400">
                      {value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-saffron-100/80">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-gold-400/30 bg-maroon-900/80 p-6 shadow-2xl backdrop-blur-md">
                <div className="absolute -right-3 -top-3 rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold text-white shadow">
                  NEXT MEGA EVENT
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-gold-400">
                  Annual Cultural Fest & Yakshagana Night
                </h3>
                <p className="mb-4 text-sm text-saffron-100/80">
                  Join us at Badoor School Grounds for a grand celebration of
                  heritage, music, and dramatic art.
                </p>

                <div className="my-4 grid grid-cols-4 gap-2 rounded-xl border border-maroon-700 bg-maroon-800/60 p-3 text-center">
                  {[
                    ["days", countdown.days],
                    ["hours", countdown.hours],
                    ["minutes", countdown.minutes],
                    ["seconds", countdown.seconds],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-maroon-900 p-2">
                      <span className="block font-bold text-xl text-gold-400">
                        {String(value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase text-gray-300">
                        {label === "minutes"
                          ? "Mins"
                          : label === "seconds"
                            ? "Secs"
                            : label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2 border-t border-maroon-800 pt-3 text-xs text-saffron-100/90">
                  <p className="flex items-center">
                    <Icon
                      name="fa-calendar-check"
                      prefix="fa-regular"
                      className="w-5 text-gold-400"
                    />{" "}
                    Oct 24, 2026 | 6:00 PM Onwards
                  </p>
                  <p className="flex items-center">
                    <Icon
                      name="fa-location-dot"
                      className="w-5 text-gold-400"
                    />{" "}
                    Shri Durgha Club Grounds, Badoor
                  </p>
                </div>

                <a
                  href="#events"
                  className="mt-5 block w-full rounded-xl bg-gold-500 py-2.5 text-center text-sm font-bold text-maroon-900 transition hover:bg-gold-600"
                >
                  View Event Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title="Driven by Purpose, United by Tradition"
          />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-4 border-amber-100 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Cultural Gathering"
                  className="h-96 w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/800x600/6b0f1a/ffffff?text=Shri+Durgha+Club";
                  }}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-900/90 via-transparent to-transparent p-6">
                  <p className="text-sm font-medium italic text-white">
                    &quot;Empowering the youth of Badoor to build a vibrant,
                    harmonious society.&quot;
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl bg-saffron-500 p-6 text-white shadow-xl sm:block">
                <Icon name="fa-hands-holding-child" className="mb-2 text-3xl" />
                <p className="text-sm font-bold">
                  100% Non-Profit Community Driven
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                The History & Spirit of Shri Durgha Club, Badoor
              </h3>
              <p className="leading-relaxed text-gray-600">
                Established with a passionate vision to serve the rural
                community of Badoor and surrounding villages,{" "}
                <strong>Shri Durgha Club Badoor</strong> stands as a beacon of
                unity, selfless service, and cultural preservation.
              </p>
              <p className="leading-relaxed text-gray-600">
                Over the years, our club has organized hundreds of social
                welfare initiatives ranging from emergency blood donation camps,
                free medical checkups, and scholarships for needy students to
                grand traditional sports meets and cultural celebrations.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                  <Icon
                    name="fa-bullseye"
                    className="mb-2 text-2xl text-saffron-600"
                  />
                  <h4 className="mb-1 font-bold text-maroon-900">
                    Our Mission
                  </h4>
                  <p className="text-xs text-gray-600">
                    To uplift the underprivileged, organize free healthcare,
                    promote youth sports, and keep ancient traditions alive.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                  <Icon
                    name="fa-eye"
                    className="mb-2 text-2xl text-saffron-600"
                  />
                  <h4 className="mb-1 font-bold text-maroon-900">Our Vision</h4>
                  <p className="text-xs text-gray-600">
                    To create a cohesive, culturally vibrant, and socially
                    conscious community in Badoor where no one is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="bg-amber-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Social Initiatives & Cultural Preservation"
            description="Our active involvement in community development spans across multiple domain verticals."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(
              ([icon, bg, text, hoverBg, title, description, tag]) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${text} ${hoverBg} text-2xl transition-colors group-hover:text-white`}
                  >
                    <Icon name={icon} />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-maroon-900">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>
                  <span className="inline-block rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-700">
                    {tag}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Moments"
            title="Events & Photo Gallery"
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {(
              [
                ["all", "All Events"],
                ["cultural", "Cultural"],
                ["social", "Social Service"],
                ["sports", "Sports"],
              ] as [EventCategory, string][]
            ).map(([item, label]) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-maroon-900 text-gold-400"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-2xl border border-amber-100 bg-amber-50/40 shadow-md transition hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/6b0f1a/ffffff?text=${encodeURIComponent(event.label)}`;
                    }}
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-medium text-white ${event.labelClass}`}
                  >
                    {event.label}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-500">
                    <Icon
                      name="fa-calendar"
                      prefix="fa-regular"
                      className="mr-1"
                    />{" "}
                    {event.date}
                  </span>
                  <h3 className="mt-1 mb-2 font-heading text-lg font-bold text-maroon-900">
                    {event.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {event.shortDescription}
                  </p>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-saffron-700 hover:underline"
                  >
                    Read More <Icon name="fa-angle-right" className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="bg-amber-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Executive Committee"
            description="The dedicated office bearers steering Shri Durgha Club Badoor forward."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "SD",
                "Sri. Sundara Shetty",
                "President",
                "Guiding club operations and community outreach programs with decades of leadership.",
              ],
              [
                "PR",
                "Sri. Prashanth Rai",
                "General Secretary",
                "Coordinating social service events, volunteer drives, and official communications.",
              ],
              [
                "MK",
                "Sri. Mahesh Kumar",
                "Treasurer",
                "Managing financial transparency, donation records, and charity distribution funds.",
              ],
              [
                "YG",
                "Sri. Yashodhara Gowda",
                "Cultural Coordinator",
                "Leading traditional art, Yakshagana, sports events, and festival celebrations.",
              ],
            ].map(([initials, name, role, description]) => (
              <div
                key={name}
                className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-md transition hover:shadow-xl"
              >
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-tr from-saffron-500 to-gold-400 p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-amber-100 text-2xl font-bold text-maroon-900">
                    {initials}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-maroon-900">{name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-saffron-600">
                  {role}
                </p>
                <p className="mt-3 text-xs text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership + Donation */}
      <section id="membership" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 shadow-sm lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-saffron-600">
                Join Hands With Us
              </span>
              <h2 className="mt-1 mb-6 font-heading text-2xl font-bold text-maroon-900 md:text-3xl">
                Become a Member / Volunteer
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Full Name *"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Poojary"
                  />
                  <FormField
                    label="Phone Number *"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                  />
                  <FormField
                    label="Your Native/Location"
                    type="text"
                    placeholder="Badoor / Nearby"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
                    Interest Domain
                  </label>
                  <select
                    className="form-input"
                    defaultValue="Social Service & Medical Camps"
                  >
                    <option>Social Service & Medical Camps</option>
                    <option>Yakshagana & Cultural Events</option>
                    <option>Sports & Tournament Organization</option>
                    <option>General Youth Membership</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
                    Why do you want to join?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief message..."
                    className="form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-maroon-900 py-3.5 text-center font-bold text-gold-400 shadow transition hover:bg-maroon-800"
                >
                  Submit Application{" "}
                  <Icon name="fa-paper-plane" className="ml-2" />
                </button>
              </form>
            </div>

            <div
              id="donate"
              className="flex flex-col justify-between rounded-3xl border border-gold-400/20 bg-gradient-to-br from-maroon-900 to-maroon-800 p-8 text-white shadow-xl lg:col-span-5"
            >
              <div>
                <div className="mb-4 inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon-900">
                  Support Our Cause
                </div>
                <h2 className="mb-3 font-heading text-2xl font-bold text-gold-400 md:text-3xl">
                  Make a Donation
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-saffron-100/80">
                  Your generous contribution helps us provide medical aid,
                  scholarships to poor students, and organize cultural festivals
                  in Badoor.
                </p>

                <div className="mx-auto mb-6 max-w-xs rounded-2xl border-2 border-gold-400 bg-white p-4 text-center">
                  <div className="relative mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-100">
                    <Icon
                      name="fa-qrcode"
                      className="text-7xl text-maroon-900"
                    />
                  </div>
                  <p className="mt-2 text-xs font-bold text-maroon-900">
                    Scan & Pay via UPI
                  </p>
                  <p className="text-[11px] text-gray-500">
                    UPI ID:{" "}
                    <span className="font-mono text-gray-800">
                      shridurghaclub@upi
                    </span>
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-maroon-700 bg-maroon-900/80 p-4 text-xs">
                  <p className="border-b border-maroon-800 pb-1 font-semibold text-gold-400">
                    Direct Bank Transfer Details:
                  </p>
                  <p>
                    <span className="text-gray-400">Account Name:</span> Shri
                    Durgha Club Badoor
                  </p>
                  <p>
                    <span className="text-gray-400">Bank:</span> Karnataka Bank
                  </p>
                  <p>
                    <span className="text-gray-400">A/C No:</span>{" "}
                    12345678901234
                  </p>
                  <p>
                    <span className="text-gray-400">IFSC Code:</span>{" "}
                    KARB0000123
                  </p>
                  <p>
                    <span className="text-gray-400">Branch:</span> Badoor /
                    Local Branch
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-maroon-700/60 pt-4 text-center text-xs text-saffron-100/70">
                <p>
                  <Icon
                    name="fa-shield-halved"
                    className="mr-1 text-gold-400"
                  />{" "}
                  All contributions are utilized exclusively for non-profit
                  community welfare activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
