export function CaseStudyFooter() {
  const outcomes = [
    { stat: "5", label: "Core UX problems addressed" },
    { stat: "4", label: "AI tools surfaced for the first time" },
    { stat: "8+", label: "Playbooks with clear, labeled cards" },
    { stat: "4", label: "Workshop discovery categories added" },
  ];

  return (
    <footer style={{ background: "#0E0E0E" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#FF5500",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "1rem",
            }}
          >
            05 — Outcomes
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#F6F4F0",
              maxWidth: "560px",
              marginBottom: "1.5rem",
            }}
          >
            A platform employees can actually use
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(246, 244, 240, 0.5)",
              maxWidth: "560px",
            }}
          >
            The redesign replaced a promotional showcase with a working
            utility. Every section now serves a clear user need, and the
            addition of AI tools gave the platform a meaningful new
            capability layer.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-px lg:grid-cols-4"
          style={{ background: "rgba(255,255,255,0.06)", borderRadius: "1rem", overflow: "hidden" }}
        >
          {outcomes.map(({ stat, label }) => (
            <div
              key={label}
              className="px-8 py-8"
              style={{ background: "#0E0E0E" }}
            >
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#FF5500",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(246, 244, 240, 0.45)",
                  lineHeight: 1.5,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(246, 244, 240, 0.3)",
            }}
          >
            Comms Academy Redesign · Amazon Customer Service · 2026
          </p>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "#FF5500" }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(246, 244, 240, 0.3)",
              }}
            >
              UX Design · Internal Tools
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
