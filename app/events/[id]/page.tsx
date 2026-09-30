import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Icon from "../../../Components/ui/Icon";
import { eventsData } from "../../../lib/events";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-amber-50/30 font-sans text-gray-800 antialiased selection:bg-saffron-500 selection:text-white">
      <Navbar />

      <div className="pt-24 pb-12 bg-maroon-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#events"
            className="inline-flex items-center text-sm text-saffron-100 hover:text-gold-400 mb-8 transition-colors"
          >
            <Icon name="fa-arrow-left" className="mr-2" /> Back to Events
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className={`inline-block rounded-md px-3 py-1 text-xs font-medium text-white mb-4 ${event.labelClass}`}
              >
                {event.label}
              </span>
              <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl mb-4 text-gold-400">
                {event.title}
              </h1>
              <div className="flex items-center text-saffron-100/90 text-sm mb-6">
                <Icon name="fa-calendar" prefix="fa-regular" className="mr-2" />
                {event.date}
              </div>
              <p className="text-lg leading-relaxed text-saffron-50 mb-8">
                {event.shortDescription}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-maroon-800">
              <img
                src={event.image}
                alt={event.alt}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-maroon-900 mb-6 border-b border-gray-100 pb-4">
              About the Event
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {event.description}
            </p>
          </div>

          {event.gallery && event.gallery.length > 0 && (
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon-900 mb-8 text-center">
                Event Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-md group border border-gray-100 h-64"
                  >
                    <img
                      src={img}
                      alt={`${event.title} - Photo ${index + 1}`}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
