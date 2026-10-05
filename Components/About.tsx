"use client";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="Driven by Purpose, United by Tradition"
        />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative group">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-amber-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Cultural Gathering"
                className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x600/6b0f1a/ffffff?text=Shri+Durgha+Club";
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-maroon-900/90 via-transparent to-transparent p-6">
                <p className="text-sm font-medium italic text-white">
                  "Empowering the youth of Badoor to build a vibrant, harmonious
                  society."
                </p>
              </div>
            </div>

            {/* Non-profit card - appears on hover */}
            <div
              className="
      absolute -bottom-6 -right-6
      max-w-xs rounded-2xl bg-saffron-500 p-6 text-white shadow-xl
      opacity-0 translate-y-4 scale-95
      pointer-events-none
      transition-all duration-500 ease-out
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:scale-100
      group-hover:pointer-events-auto
    "
            >
              <Icon name="fa-hands-holding-child" className="mb-2 text-3xl" />

              <p className="text-sm font-bold">
                100% Non-Profit Community Driven
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-gray-900">
              The History &amp; Spirit of Shri Durgha Club, Badoor
            </h3>
            <p className="leading-relaxed text-gray-600">
              Established with a passionate vision to serve the rural community
              of Badoor and surrounding villages,{" "}
              <strong>Shri Durgha Club Badoor</strong> stands as a beacon of
              unity, selfless service, and cultural preservation.
            </p>
            <p className="leading-relaxed text-gray-600">
              Over the years, our club has organized hundreds of social welfare
              initiatives ranging from emergency blood donation camps, free
              medical checkups, and scholarships for needy students to grand
              traditional sports meets and cultural celebrations.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                <Icon
                  name="fa-bullseye"
                  className="mb-2 text-2xl text-saffron-600"
                />
                <h4 className="mb-1 font-bold text-maroon-900">Our Mission</h4>
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
  );
}
