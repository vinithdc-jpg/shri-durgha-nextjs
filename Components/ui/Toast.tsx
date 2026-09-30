"use client";
import Icon from "./Icon";

interface ToastProps {
  visible: boolean;
  title?: string;
  message?: string;
}

export default function Toast({
  visible,
  title = "Submitted!",
  message = "Thank you for reaching out to Shri Durgha Club.",
}: ToastProps) {
  return (
    <div
      className={`fixed bottom-5 right-5 z-70 flex items-center space-x-3 rounded-2xl border border-gold-400 bg-maroon-900 px-6 py-3.5 shadow-2xl transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-live="polite"
    >
      <Icon name="fa-circle-check" className="text-xl text-emerald-400" />
      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="text-xs text-saffron-100">{message}</p>
      </div>
    </div>
  );
}
