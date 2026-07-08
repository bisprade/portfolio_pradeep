function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div style={{ width: "24px", height: "1px", background: "#FF6200" }} />
      <span style={{ color: "#FF6200", letterSpacing: "0.15em", fontSize: "10px", fontWeight: 600, textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

const roadmap = [
  { quarter: "Q1", item: "Intelligent search + filters", desc: "By team, asset type, date added" },
  { quarter: "Q2", item: "Usage analytics dashboard", desc: "Inform future asset creation priorities" },
  { quarter: "Q3", item: "Personalized recommendations", desc: "\"Assets your team uses most\"" },
  { quarter: "Q4", item: "Figma plugin integration", desc: "Direct asset import into Figma" },
];

const summaryStrip = [
  { label: "Old State", value: "Chaos", sub: "Scattered drives + tickets", color: "#d4183d" },
  { label: "Research", value: "100–150", sub: "Stakeholders interviewed", color: "#7A7870" },
  { label: "Redesign", value: "Team-first IA", sub: "New navigation system", color: "#FF6200" },
  { label: "Result", value: "5,200 users", sub: "81% download rate", color: "#22c55e" },
];

export function ConclusionSection() {
  return (
    <>
      {/* Summary infographic */}
      <section style={{ background: "#0C0C10", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Conclusion</SectionLabel>

          <h2
            style={{
              fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              color: "#F9F8F6",
              fontWeight: 400,
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            UX isn't always visually revolutionary. Sometimes it's creating structure where chaos existed.
          </h2>
          <p style={{ color: "rgba(245,243,239,0.5)", lineHeight: 1.8, fontSize: "15px", maxWidth: "640px", marginBottom: "56px" }}>
            By conducting extensive research with 100–150 stakeholders, implementing a team-first navigation hierarchy,
            and iterating through A/B testing, Caboodle achieved 550% growth in unique users and more than
            doubled template download rates.
          </p>

          {/* Project impact summary strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-16" style={{ border: "1px solid rgba(245,243,239,0.08)", borderRadius: "4px", overflow: "hidden" }}>
            {summaryStrip.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  borderRight: i < summaryStrip.length - 1 ? "1px solid rgba(245,243,239,0.06)" : "none",
                  borderBottom: "none",
                  position: "relative",
                }}
              >
                {i < summaryStrip.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(245,243,239,0.2)",
                      fontSize: "16px",
                      zIndex: 1,
                    }}
                  >
                    <div style={{ width: "16px", height: "1px", background: "rgba(245,243,239,0.2)" }} />
                  </div>
                )}
                <span style={{ color: "rgba(245,243,239,0.3)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                  {s.label}
                </span>
                <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: s.color, fontSize: "22px", fontWeight: 400, lineHeight: 1.1, marginBottom: "4px" }}>
                  {s.value}
                </p>
                <p style={{ color: "rgba(245,243,239,0.35)", fontSize: "11px" }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Future roadmap */}
          <div>
            <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#F9F8F6", fontSize: "28px", fontWeight: 400, marginBottom: "24px" }}>
              Future Roadmap
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {roadmap.map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(245,243,239,0.04)",
                    border: "1px solid rgba(245,243,239,0.08)",
                    borderRadius: "4px",
                    padding: "20px",
                    borderTop: `2px solid ${i === 0 ? "#FF6200" : "rgba(245,243,239,0.15)"}`,
                  }}
                >
                  <span style={{ color: "#FF6200", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                    {r.quarter}
                  </span>
                  <p style={{ color: "#F9F8F6", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{r.item}</p>
                  <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "11px" }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#161D26", fontFamily: "'Inter', sans-serif", borderTop: "1px solid rgba(245,243,239,0.06)" }} className="py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#F9F8F6", fontSize: "20px", fontWeight: 400, marginBottom: "4px" }}>
              Caboodle
            </p>
            <p style={{ color: "rgba(245,243,239,0.3)", fontSize: "12px" }}>
              UX Case Study — Amazon Customer Service Design Team
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ color: "#FF6200", fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>
              Designed by Pradeep
            </p>
            <p style={{ color: "rgba(245,243,239,0.3)", fontSize: "12px" }}>Sr. Visual Designer</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,243,239,0.05)" }}>
          <p style={{ color: "rgba(245,243,239,0.2)", fontSize: "11px" }}>
            Thank you for reading.
          </p>
        </div>
      </footer>
    </>
  );
}
