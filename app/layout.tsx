import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Durgha Club, Badoor | Social & Cultural Organization",
  description:
    "Shri Durgha Club, Badoor - social welfare, youth development, cultural preservation, sports and community initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
