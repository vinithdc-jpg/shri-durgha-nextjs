"use client";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

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

export default function Event() {
  const [category, setCategory] = useState<EventCategory>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  const filteredEvents =
    category === "all"
      ? events
      : events.filter((event) => event.category === category);

  return (
    <>
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

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
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
    </>
  );
}
