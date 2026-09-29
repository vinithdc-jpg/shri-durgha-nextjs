export default function Activities() {
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
    return (
      <i className={`${prefix} ${name} ${className}`} aria-hidden="true" />
    );
  }

  return (
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
  );
}
