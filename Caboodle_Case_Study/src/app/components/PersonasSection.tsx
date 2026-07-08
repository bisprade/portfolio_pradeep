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

const personas = [
  {
    type: "Primary",
    role: "The Team Manager",
    quote: "I need my team's templates quickly without submitting a ticket.",
    frequency: "Weekly access",
    need: "Team-specific assets",
    avatar: "TM",
    color: "#E8621A",
    bullets: [
      "Manages a specific CS team",
      "Needs branded templates for communications",
      "Wants quick, independent access",
      "Values knowing they have the latest version",
    ],
  },
  {
    type: "Secondary",
    role: "The Operations Manager",
    quote: "I work across teams and need access to multiple asset sets.",
    frequency: "Bi-weekly access",
    need: "Cross-team browsing",
    avatar: "OM",
    color: "#0C0C10",
    bullets: [
      "Oversees multiple CS teams",
      "Needs assets for leadership presentations",
      "Values breadth of access",
      "Browses across team boundaries",
    ],
  },
  {
    type: "Tertiary",
    role: "The New Team Member",
    quote: "I just joined and have no idea where anything is.",
    frequency: "Onboarding + sporadic",
    need: "Self-explanatory navigation",
    avatar: "NM",
    color: "#7A7870",
    bullets: [
      "Recently joined a CS team",
      "No institutional knowledge of storage",
      "Needs the platform to be self-explanatory",
      "Benefits most from strong IA",
    ],
  },
];

const empathyMap = [
  {
    quadrant: "Says",
    items: [
      "\"Where is the latest email template?\"",
      "\"I submitted a ticket 3 days ago\"",
    ],
  },
  {
    quadrant: "Thinks",
    items: [
      "\"There must be a better way\"",
      "\"Am I using the right version?\"",
    ],
  },
  {
    quadrant: "Does",
    items: [
      "Searches through 5 different folders",
      "Asks colleagues on Slack",
      "Submits support tickets",
    ],
  },
  {
    quadrant: "Feels",
    items: [
      "Frustrated by the process",
      "Inefficient and slowed down",
      "Uncertain about asset freshness",
    ],
  },
];

export function PersonasSection() {
  return (
    <section style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>User Personas & Empathy</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#0C0C10",
            fontWeight: 400,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Three distinct users. One shared frustration.
        </h2>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {personas.map((p) => (
            <div
              key={p.role}
              style={{
                background: "#F9F8F6",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "28px",
                borderTop: `3px solid ${p.color}`,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: p.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <span style={{ color: "#F9F8F6", fontSize: "13px", fontWeight: 600 }}>{p.avatar}</span>
              </div>

              <span style={{ color: p.color, fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                {p.type} Persona
              </span>
              <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#0C0C10", fontSize: "20px", fontWeight: 400, marginBottom: "12px" }}>
                {p.role}
              </h3>
              <p style={{ color: "rgba(22,29,38,0.65)", fontSize: "13px", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px", borderLeft: "2px solid rgba(22,29,38,0.1)", paddingLeft: "12px" }}>
                {p.quote}
              </p>

              <div style={{ borderTop: "1px solid rgba(22,29,38,0.07)", paddingTop: "14px", marginBottom: "14px" }}>
                <div className="flex justify-between mb-2">
                  <span style={{ color: "#7A7870", fontSize: "11px" }}>Frequency</span>
                  <span style={{ color: "#0C0C10", fontSize: "11px", fontWeight: 500 }}>{p.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7A7870", fontSize: "11px" }}>Key Need</span>
                  <span style={{ color: "#0C0C10", fontSize: "11px", fontWeight: 500 }}>{p.need}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <div style={{ width: "4px", minWidth: "4px", height: "4px", borderRadius: "50%", background: p.color, marginTop: "7px" }} />
                    <span style={{ color: "#7A7870", fontSize: "12px", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Empathy map */}
        <div style={{ background: "#0C0C10", borderRadius: "4px", padding: "36px" }}>
          <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "10px", letterSpacing: "0.15em", marginBottom: "24px" }}>
            EMPATHY MAP — PRIMARY PERSONA (TEAM MANAGER)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {empathyMap.map((quad) => (
              <div
                key={quad.quadrant}
                style={{
                  background: "rgba(245,243,239,0.04)",
                  border: "1px solid rgba(245,243,239,0.08)",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <p style={{ color: "#E8621A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {quad.quadrant}
                </p>
                {quad.items.map((item, i) => (
                  <p key={i} style={{ color: "rgba(245,243,239,0.55)", fontSize: "12px", lineHeight: 1.6, marginBottom: "6px" }}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Pain points row */}
          <div style={{ marginTop: "24px", borderTop: "1px solid rgba(245,243,239,0.06)", paddingTop: "20px" }}>
            <p style={{ color: "rgba(245,243,239,0.3)", fontSize: "10px", letterSpacing: "0.12em", marginBottom: "12px" }}>
              QUOTED PAIN POINTS
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "\"I know a template exists but I can't find it\"",
                "\"I submitted a ticket 3 days ago for a simple logo\"",
                "\"I'm using a 6-month-old version — I don't know where the new one is\"",
                "\"Every time I need something, I have to ask the design team\"",
              ].map((quote, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,98,0,0.08)",
                    border: "1px solid rgba(255,98,0,0.2)",
                    borderRadius: "4px",
                    padding: "8px 14px",
                  }}
                >
                  <p style={{ color: "rgba(245,243,239,0.6)", fontSize: "12px", fontStyle: "italic" }}>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
