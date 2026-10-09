import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/20 bg-maroon-900 pb-8 pt-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/Logo.png"
                  alt="Shri Durgha Club Logo"
                  width={52}
                  height={52}
                  className="h-12 w-12 object-contain"
                  priority
                />
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
                ["/#about", "About Our Club"],
                ["/#activities", "Social Services"],
                ["/#events", "Yakshagana & Events"],
                ["/#membership", "Membership Form"],
                ["/#donate", "Donate Funds"],
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
  );
}
