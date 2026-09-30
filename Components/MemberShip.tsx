"use client";
import { FormEvent, useState } from "react";
import Icon from "./ui/Icon";
import Toast from "./ui/Toast";

function FormField({
  label,
  type,
  required,
  placeholder,
}: {
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}

export default function Membership() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <>
      <Toast
        visible={toastVisible}
        title="Application Submitted!"
        message="Thank you for joining Shri Durgha Club, Badoor."
      />

      <section id="membership" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 shadow-sm lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-saffron-600">
                Join Hands With Us
              </span>

              <h2 className="mt-1 mb-6 font-heading text-2xl font-bold text-maroon-900 md:text-3xl">
                Become a Member / Volunteer
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Full Name *"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Poojary"
                  />

                  <FormField
                    label="Phone Number *"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                  />

                  <FormField
                    label="Your Native/Location"
                    type="text"
                    placeholder="Badoor / Nearby"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
                    Interest Domain
                  </label>

                  <select
                    className="form-input"
                    defaultValue="Social Service & Medical Camps"
                  >
                    <option>Social Service &amp; Medical Camps</option>
                    <option>Yakshagana &amp; Cultural Events</option>
                    <option>Sports &amp; Tournament Organization</option>
                    <option>General Youth Membership</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-gray-700">
                    Why do you want to join?
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Brief message..."
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-maroon-900 py-3.5 text-center font-bold text-gold-400 shadow transition hover:bg-maroon-800"
                >
                  Submit Application{" "}
                  <Icon name="fa-paper-plane" className="ml-2" />
                </button>
              </form>
            </div>

            <div
              id="donate"
              className="flex flex-col justify-between rounded-3xl border border-gold-400/20 bg-linear-to-br from-maroon-900 to-maroon-800 p-8 text-white shadow-xl lg:col-span-5"
            >
              <div>
                <div className="mb-4 inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon-900">
                  Support Our Cause
                </div>

                <h2 className="mb-3 font-heading text-2xl font-bold text-gold-400 md:text-3xl">
                  Make a Donation
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-saffron-100/80">
                  Your generous contribution helps us provide medical aid,
                  scholarships to poor students, and organize cultural festivals
                  in Badoor.
                </p>

                <div className="mx-auto mb-6 max-w-xs rounded-2xl border-2 border-gold-400 bg-white p-4 text-center">
                  <div className="relative mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-100">
                    <Icon
                      name="fa-qrcode"
                      className="text-7xl text-maroon-900"
                    />
                  </div>

                  <p className="mt-2 text-xs font-bold text-maroon-900">
                    Scan &amp; Pay via UPI
                  </p>

                  <p className="text-[11px] text-gray-500">
                    UPI ID:{" "}
                    <span className="font-mono text-gray-800">
                      shridurghaclub@upi
                    </span>
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-maroon-700 bg-maroon-900/80 p-4 text-xs">
                  <p className="border-b border-maroon-800 pb-1 font-semibold text-gold-400">
                    Direct Bank Transfer Details:
                  </p>

                  <p>
                    <span className="text-gray-400">Account Name:</span> Shri
                    Durgha Club Badoor
                  </p>

                  <p>
                    <span className="text-gray-400">Bank:</span> Karnataka Bank
                  </p>

                  <p>
                    <span className="text-gray-400">A/C No:</span>{" "}
                    12345678901234
                  </p>

                  <p>
                    <span className="text-gray-400">IFSC Code:</span>{" "}
                    KARB0000123
                  </p>

                  <p>
                    <span className="text-gray-400">Branch:</span> Badoor /
                    Local Branch
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-maroon-700/60 pt-4 text-center text-xs text-saffron-100/70">
                <p>
                  <Icon
                    name="fa-shield-halved"
                    className="mr-1 text-gold-400"
                  />{" "}
                  All contributions are utilized exclusively for non-profit
                  community welfare activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
