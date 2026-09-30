"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";
import { eventsData, EventCategory } from "../lib/events";

export default function Event() {
  const [category, setCategory] = useState<EventCategory>("all");

  const filteredEvents =
    category === "all"
      ? eventsData
      : eventsData.filter((event) => event.category === category);

  return (
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
              key={event.id}
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
                <Link
                  href={`/events/${event.id}`}
                  className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-saffron-700 hover:underline"
                >
                  Read More <Icon name="fa-angle-right" className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
