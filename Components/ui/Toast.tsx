import { useState } from "react";

export default function Toast() {
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

  return (
    <div
      className={`fixed bottom-5 right-5 z-[70] flex items-center space-x-3 rounded-2xl border border-gold-400 bg-maroon-900 px-6 py-3.5 shadow-2xl transition-all duration-300 ${
        toastVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-live="polite"
    >
      <Icon name="fa-circle-check" className="text-xl text-emerald-400" />
      <div>
        <p className="text-sm font-bold text-white">{toastTitle}</p>
        <p className="text-xs text-saffron-100">{toastMessage}</p>
      </div>
    </div>
  );
}
