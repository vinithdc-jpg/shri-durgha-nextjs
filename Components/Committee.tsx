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
              className="relative rounded-3xl border border-amber-200/80 bg-linear-to-b from-white to-amber-50/30 p-6 text-center shadow-md transition-all duration-300 hover:border-saffron-400 hover:shadow-2xl"
            >
              {/* Avatar Ring */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-saffron-400 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-maroon-900 text-xl font-bold text-amber-300 shadow-inner">
                  {initials}
                </div>
              </div>

              <h3 className="text-base font-bold text-maroon-950">{name}</h3>

              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-saffron-600">
                {role}
              </p>

              <hr className="my-3 border-t border-amber-200/60" />

              <p className="text-xs leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
