import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Activities from "../Components/Activities";
import Event from "../Components/Event";
import Committee from "../Components/Committee";
import Membership from "../Components/MemberShip";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50/30 font-sans text-gray-800 antialiased selection:bg-saffron-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Activities */}
      <Activities />

      {/* Events */}
      <Event />

      {/* Committee */}
      <Committee />

      {/* Membership + Donation */}
      <Membership />

      {/* Contact */}
      <Content />

      {/* Footer */}
      <Footer />
    </main>
  );
}
