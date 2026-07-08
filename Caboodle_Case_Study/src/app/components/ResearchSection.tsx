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

const insights = [
  {
    severity: "Critical",
    title: "Discoverability was zero",
    body: "Users could only find assets they already knew existed and already knew the location of.",
  },
  {
    severity: "Critical",
    title: "Team identity was the primary mental model",
    body: "Users thought about assets in terms of \"my team's stuff\" — not \"all design assets.\"",
  },
  {
    severity: "High",
    title: "Self-service was the overwhelming preference",
    body: "Users would rather find assets themselves than submit tickets and wait.",
  },
  {
    severity: "High",
    title: "Navigation was non-existent",
    body: "The old platform was essentially a dumping ground with a UI layer on top.",
  },
  {
    severity: "High",
    title: "Template freshness mattered",
    body: "Users needed confidence they were using the latest version — not an outdated file.",
  },
];

const clusters = [
  { theme: "Can't find assets", notes: 7, color: "#FF6200" },
  { theme: "Too many places to look", notes: 6, color: "rgba(22,29,38,0.6)" },
  { theme: "Want self-service", notes: 5, color: "rgba(22,29,38,0.45)" },
  { theme: "Version confusion", notes: 4, color: "rgba(22,29,38,0.25)" },
];

export function ResearchSection() {
  return (
    <section style={{ background: "#F5F3EF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Research & Discovery</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#161D26",
            fontWeight: 400,
            marginBottom: "48px",
            maxWidth: "700px",
          }}
        >
          100–150 stakeholders. One clear signal.
        </h2>

        {/* Research stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { value: "100–150", label: "Stakeholders Interviewed", sub: "Team Managers + Operations Managers" },
            { value: "2", label: "Research Methods", sub: "User Interviews + Surveys" },
            { value: "4", label: "Key Insight Clusters", sub: "Affinity mapping across all interviews" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
                  fontSize: "44px",
                  color: "#FF6200",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {s.value}
              </div>
              <p style={{ color: "#161D26", fontSize: "13px", fontWeight: 600, marginBottom: "2px" }}>{s.label}</p>
              <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "12px" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Affinity map */}
          <div>
            <h3 style={{ color: "#161D26", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
              Affinity Map Clusters
            </h3>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "24px",
              }}
            >
              <div className="flex flex-col gap-4">
                {clusters.map((c) => (
                  <div key={c.theme}>
                    <div className="flex justify-between items-center mb-1">
                      <span style={{ color: "#161D26", fontSize: "13px" }}>{c.theme}</span>
                      <span style={{ color: "rgba(22,29,38,0.45)", fontSize: "11px" }}>{c.notes} insights</span>
                    </div>
                    <div style={{ height: "6px", background: "#F5F3EF", borderRadius: "2px", overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${(c.notes / 7) * 100}%`,
                          background: c.color,
                          borderRadius: "2px",
                          transition: "width 0.6s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "20px", padding: "16px", background: "#F5F3EF", borderRadius: "4px" }}>
              <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "13px", lineHeight: 1.6 }}>
                Surveys confirmed that the scattered folder system was a <strong style={{ color: "#161D26" }}>universal pain point</strong> —
                not limited to specific teams or roles.
              </p>
            </div>
          </div>

          {/* Interview insights */}
          <div>
            <h3 style={{ color: "#161D26", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
              5 Key Findings
            </h3>
            <div className="flex flex-col gap-3">
              {insights.map((ins, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(22,29,38,0.07)",
                    borderRadius: "4px",
                    padding: "16px 20px",
                    borderLeft: `3px solid ${ins.severity === "Critical" ? "#FF6200" : "rgba(22,29,38,0.25)"}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p style={{ color: "#161D26", fontSize: "13px", fontWeight: 600 }}>{ins.title}</p>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: ins.severity === "Critical" ? "#FF6200" : "rgba(22,29,38,0.45)",
                        background: ins.severity === "Critical" ? "rgba(255,98,0,0.08)" : "#F5F3EF",
                        padding: "2px 8px",
                        borderRadius: "2px",
                        whiteSpace: "nowrap",
                        marginLeft: "8px",
                      }}
                    >
                      {ins.severity.toUpperCase()}
                    </span>
                  </div>
                  <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "12px", lineHeight: 1.5 }}>{ins.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
