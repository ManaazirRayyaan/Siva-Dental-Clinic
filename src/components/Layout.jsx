import { MessageCircle } from "lucide-react";
import { Outlet } from "react-router-dom";
import { clinic } from "../data/site.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        aria-label="Chat on WhatsApp"
        href={clinic.whatsappHref}
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#2563EB] text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8]"
      >
        <MessageCircle size={25} strokeWidth={2.4} />
      </a>
    </div>
  );
}
