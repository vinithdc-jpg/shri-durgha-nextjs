import { useEffect, useState } from "react";

export default function Hero() {
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

  return (
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
              underprivileged families, and nurturing the rich cultural heritage
              of our region.
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
                  <Icon name="fa-location-dot" className="w-5 text-gold-400" />{" "}
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
  );
}
