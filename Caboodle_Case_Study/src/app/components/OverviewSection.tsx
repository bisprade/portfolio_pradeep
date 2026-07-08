import { Figma, Users, TestTube, TrendingUp } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div style={{ width: "24px", height: "1px", background: "#E8621A" }} />
      <span style={{ color: "#E8621A", letterSpacing: "0.15em", fontSize: "10px", fontWeight: 600, textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

export function OverviewSection() {
  const snapshots = [
    {
      icon: <Users size={18} style={{ color: "#E8621A" }} />,
      label: "Role",
      value: "Lead UX Designer",
      sub: "Research, IA, UI, Prototyping",
    },
    {
      icon: <Figma size={18} style={{ color: "#E8621A" }} />,
      label: "Tools",
      value: "Figma",
      sub: "Adobe Photoshop · Illustrator",
    },
    {
      icon: <TestTube size={18} style={{ color: "#E8621A" }} />,
      label: "Methods",
      value: "User Interviews",
      sub: "Surveys · A/B Testing",
    },
    {
      icon: <TrendingUp size={18} style={{ color: "#E8621A" }} />,
      label: "Impact",
      value: "550% User Growth",
      sub: "Downloads 36% → 81%",
    },
  ];

  return (
    <section style={{ background: "#F9F8F6", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: overview text */}
          <div>
            <SectionLabel>Introduction</SectionLabel>
            <h2
              style={{
                fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                color: "#0C0C10",
                fontWeight: 400,
                marginBottom: "24px",
              }}
            >
              A single source of truth for design assets
            </h2>
            <p style={{ color: "#7A7870", lineHeight: 1.8, fontSize: "15px", marginBottom: "16px" }}>
              Caboodle is a centralized design asset management platform built for Amazon Customer Service
              teams — replacing a fragmented system of shared drives, folders, and ticket-based workflows.
            </p>
            <p style={{ color: "#7A7870", lineHeight: 1.8, fontSize: "15px" }}>
              The project involved a complete UX overhaul, transforming a rigid, neglected repository into
              an intuitive, self-service design ecosystem that scales across dozens of CS teams.
            </p>

            <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(22,29,38,0.08)" }}>
              <p style={{ color: "#0C0C10", fontSize: "13px", fontWeight: 500, marginBottom: "4px" }}>Organization</p>
              <p style={{ color: "#7A7870", fontSize: "14px" }}>Amazon Customer Service — Design Team</p>
            </div>
          </div>

          {/* Right: snapshot cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {snapshots.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(22,29,38,0.07)",
                  borderRadius: "4px",
                  padding: "24px",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <span style={{ color: "#7A7870", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                    {item.label}
                  </span>
                </div>
                <p style={{ color: "#0C0C10", fontSize: "15px", fontWeight: 500, marginBottom: "2px" }}>{item.value}</p>
                <p style={{ color: "#7A7870", fontSize: "12px" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
