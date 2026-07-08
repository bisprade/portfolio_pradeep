import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import homePage from "../../imports/Screenshot_2026-07-08_at_00-30-31_Caboodle_3.5_Home_Page.png";

export function HeroSection() {
  return (
    <section
      style={{ background: "#161D26", fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating platform preview — top right */}
      <div
        className="hidden lg:block absolute"
        style={{
          top: "50%",
          right: "-60px",
          width: "740px",
          zIndex: 1,
          transform: "translateY(-50%) perspective(1600px) rotateY(-6deg) rotateX(2deg)",
          transformOrigin: "right center",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            background: "#1C1C22",
            borderRadius: "10px 10px 0 0",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
          <div
            style={{
              flex: 1,
              marginLeft: "10px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "4px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>caboodle.amazon.com</span>
          </div>
        </div>
        {/* Screenshot */}
        <div style={{ borderRadius: "0 0 8px 8px", overflow: "hidden", boxShadow: "0 48px 120px rgba(22,29,38,0.7)" }}>
          <ImageWithFallback
            src={homePage}
            alt="Caboodle 3.5 home page — Featured Content grid and Communications Calendar"
            style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        </div>
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: "-1px",
            borderRadius: "10px",
            border: "1px solid rgba(255,98,0,0.2)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Top nav bar */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <span style={{ fontFamily: "'Inter', sans-serif", color: "#FF6200", letterSpacing: "0.15em", fontSize: "11px", fontWeight: 600 }}>
          UX CASE STUDY
        </span>
        <div className="flex items-center gap-6">
          <span style={{ color: "rgba(245,243,239,0.4)", fontSize: "12px" }}>Pradeep</span>
          <span style={{ color: "rgba(245,243,239,0.4)", fontSize: "12px" }}>Sr. Visual Designer</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 px-8 md:px-16 pb-16 flex flex-col gap-10" style={{ maxWidth: "680px" }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <div style={{ width: "32px", height: "1px", background: "#FF6200" }} />
          <span style={{ color: "#FF6200", letterSpacing: "0.15em", fontSize: "11px", fontWeight: 600 }}>
            AMAZON CUSTOMER SERVICE
          </span>
        </div>

        {/* Title */}
        <div>
          <h1
            style={{
              fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
              color: "#F5F3EF",
              fontSize: "clamp(52px, 8vw, 104px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Caboodle
          </h1>
          <p
            style={{
              fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
              color: "rgba(245,243,239,0.45)",
              fontSize: "clamp(24px, 4vw, 52px)",
              lineHeight: 1.1,
              fontWeight: 400,
              fontStyle: "italic",
              marginTop: "8px",
            }}
          >
            Centralizing Design Asset Distribution
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            color: "rgba(245,243,239,0.55)",
            fontSize: "16px",
            lineHeight: 1.7,
            maxWidth: "560px",
            fontWeight: 300,
          }}
        >
          A complete UX overhaul transforming a fragmented, ticket-based asset workflow
          into a self-service design ecosystem — serving over 5,200 Amazon CS users.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 md:gap-16 pt-4">
          {[
            { value: "550%", label: "User Growth" },
            { value: "36→81%", label: "Download Rate" },
            { value: "5,200+", label: "Active Users" },
            { value: "100–150", label: "Stakeholders Interviewed" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
                  color: "#FF6200",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: "rgba(245,243,239,0.4)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile platform preview — below stats on small screens */}
      <div className="block lg:hidden relative z-10 px-8 md:px-16 pb-8">
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(255,98,0,0.2)",
            boxShadow: "0 16px 48px rgba(22,29,38,0.5)",
          }}
        >
          <ImageWithFallback
            src={homePage}
            alt="Caboodle 3.5 home page"
            style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-start px-8 md:px-16 pb-10 gap-2">
        <div style={{ width: "1px", height: "48px", background: "rgba(245,243,239,0.15)" }} />
        <div className="flex items-center gap-2">
          <ArrowDown size={12} style={{ color: "rgba(245,243,239,0.3)" }} />
          <span style={{ color: "rgba(245,243,239,0.3)", fontSize: "10px", letterSpacing: "0.15em" }}>
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
