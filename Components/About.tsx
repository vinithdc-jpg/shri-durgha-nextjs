export default function About() {
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
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            {description}
          </p>
        )}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-saffron-500" />
      </div>
    );
  }
  function Icon({
    name,
    className = "",
    prefix = "fa-solid",
  }: {
    name: string;
    className?: string;
    prefix?: "fa-solid" | "fa-regular" | "fa-brands";
  }) {
    return (
      <i className={`${prefix} ${name} ${className}`} aria-hidden="true" />
    );
  }
  return (
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
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-maroon-900/90 via-transparent to-transparent p-6">
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
