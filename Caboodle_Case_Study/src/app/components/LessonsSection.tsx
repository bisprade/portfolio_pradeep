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

const lessons = [
  {
    num: "01",
    title: "Scale research to match your user base",
    body: "Interviewing 100–150 stakeholders was intensive but essential for a platform serving thousands. A small sample would have missed edge cases and team-specific needs.",
  },
  {
    num: "02",
    title: "Information architecture IS the product",
    body: "For an asset management platform, the IA redesign delivered more impact than any visual design change. The structure is the experience.",
  },
  {
    num: "03",
    title: "Team-based mental models are powerful",
    body: "Organizing content around how users think about their work — their team — rather than how systems store data was the single most impactful insight.",
  },
  {
    num: "04",
    title: "Iterative A/B testing prevents costly mistakes",
    body: "Continuous testing kept us on track without major late-stage redesigns. Each validated assumption built confidence in the final direction.",
  },
];

const worked = [
  "The team-first IA hierarchy perfectly matched user mental models",
  "A/B testing methodology caught issues early and cheaply",
  "Large research sample provided confidence in every major decision",
  "Navigation addition was the single highest-impact design change",
];

const didnt = [
  "Initial rollout needed more onboarding for users accustomed to the old folder system",
  "Search functionality could be enhanced with AI-powered recommendations",
  "Version control visibility could be more prominent in the UI",
  "Analytics dashboard for design team to track most/least used assets still pending",
];

export function LessonsSection() {
  return (
    <section style={{ background: "#F9F8F6", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Lessons Learned & Challenges</SectionLabel>

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
          What this project reinforced
        </h2>

        {/* Lesson cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {lessons.map((l) => (
            <div
              key={l.num}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "28px",
                display: "flex",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
                  fontSize: "36px",
                  color: "#E8621A",
                  lineHeight: 1,
                  minWidth: "40px",
                  opacity: 0.5,
                }}
              >
                {l.num}
              </div>
              <div>
                <p style={{ color: "#0C0C10", fontSize: "15px", fontWeight: 600, marginBottom: "8px", lineHeight: 1.4 }}>{l.title}</p>
                <p style={{ color: "#7A7870", fontSize: "13px", lineHeight: 1.7 }}>{l.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What worked / didn't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            style={{
              background: "rgba(255,98,0,0.04)",
              border: "1px solid rgba(255,98,0,0.15)",
              borderRadius: "4px",
              padding: "28px",
            }}
          >
            <h3 style={{ color: "#22c55e", fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              What Worked Well
            </h3>
            <div className="flex flex-col gap-3">
              {worked.map((w, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div style={{ width: "16px", minWidth: "16px", height: "16px", background: "rgba(255,98,0,0.15)", border: "1px solid rgba(255,98,0,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                    <div style={{ width: "6px", height: "6px", background: "#FF6200", borderRadius: "50%" }} />
                  </div>
                  <p style={{ color: "#5A5851", fontSize: "13px", lineHeight: 1.6 }}>{w}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(22,29,38,0.04)",
              border: "1px solid rgba(22,29,38,0.15)",
              borderRadius: "4px",
              padding: "28px",
            }}
          >
            <h3 style={{ color: "#7A7870", fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Future Improvements
            </h3>
            <div className="flex flex-col gap-3">
              {didnt.map((d, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div style={{ width: "16px", minWidth: "16px", height: "16px", background: "#F5F3EF", border: "1px solid rgba(22,29,38,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                    <div style={{ width: "6px", height: "6px", background: "rgba(22,29,38,0.25)", borderRadius: "50%" }} />
                  </div>
                  <p style={{ color: "#5A5851", fontSize: "13px", lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
