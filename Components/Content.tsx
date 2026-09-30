import { FormEvent, useState } from "react";

export default function Content() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTitle, setToastTitle] = useState("Submitted!");
  const [toastMessage, setToastMessage] = useState(
    "Thank you for reaching out to Shri Durgha Club.",
  );

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

  function ContactCard({
    icon,
    title,
    children,
  }: {
    icon: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="flex items-start space-x-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-100 text-xl text-saffron-600">
          <Icon name={icon} />
        </div>
        <div>
          <h4 className="font-bold text-maroon-900">{title}</h4>
          <div className="mt-1 text-sm text-gray-600">{children}</div>
        </div>
      </div>
    );
  }

  const showToast = (
    title = "Submitted!",
    message = "Thank you for reaching out to Shri Durgha Club.",
  ) => {
    setToastTitle(title);
    setToastMessage(message);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 4000);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    showToast();
  };

  return (
    <section id="contact" className="bg-amber-50/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Shri Durgha Club"
        />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <ContactCard icon="fa-location-dot" title="Club Address">
              Shri Durgha Club Building, Badoor Post, Kasaragod / Dakshina
              Kannada Border Region, Pin: 671323
            </ContactCard>
            <ContactCard icon="fa-phone" title="Phone Numbers">
              <span className="block">+91 98450 00000 (President)</span>
              <span className="block">+91 99000 11111 (Secretary)</span>
            </ContactCard>
            <ContactCard icon="fa-envelope" title="Email & Socials">
              <span className="block">shridurghaclubbadoor@gmail.com</span>
              <div className="mt-3 flex space-x-3">
                {[
                  "fa-facebook-f",
                  "fa-instagram",
                  "fa-whatsapp",
                  "fa-youtube",
                ].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-maroon-900 text-gold-400 transition hover:bg-saffron-500 hover:text-white"
                  >
                    <Icon name={icon} prefix="fa-brands" className="text-xs" />
                  </a>
                ))}
              </div>
            </ContactCard>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-md lg:col-span-7">
            <h3 className="mb-4 font-heading text-xl font-bold text-maroon-900">
              Send a Quick Message
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Your Name *"
                  className="form-input"
                />
                <input
                  required
                  type="tel"
                  placeholder="Mobile Number *"
                  className="form-input"
                />
              </div>
              <input placeholder="Subject" className="form-input" />
              <textarea
                required
                rows={4}
                placeholder="Write your message or inquiry here..."
                className="form-input"
              />
              <button
                type="submit"
                className="rounded-xl bg-saffron-500 px-8 py-3 font-bold text-white shadow transition hover:bg-saffron-600"
              >
                Send Message <Icon name="fa-paper-plane" className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
