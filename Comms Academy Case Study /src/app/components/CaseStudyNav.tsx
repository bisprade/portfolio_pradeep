import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export function CaseStudyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(246, 244, 240, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          className="flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: "#141414",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <ArrowLeft size={15} />
          <span>All Projects</span>
        </button>

        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: "#716F69",
          }}
        >
          Comms Academy
        </span>

        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-full"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "#716F69",
            background: "rgba(0,0,0,0.06)",
          }}
        >
          2026
        </span>
      </div>
    </nav>
  );
}
