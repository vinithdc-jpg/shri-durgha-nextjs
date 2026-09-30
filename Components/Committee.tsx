import SectionHeading from "./ui/SectionHeading";

const members = [
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
];

export default function Committee() {
  return (
    <section id="committee" className="bg-amber-50/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Executive Committee"
          description="The dedicated office bearers steering Shri Durgha Club Badoor forward."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(([initials, name, role, description]) => (
            <div
              key={name}
              className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-md transition hover:shadow-xl"
            >
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-linear-to-tr from-saffron-500 to-gold-400 p-1">
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
  );
}
