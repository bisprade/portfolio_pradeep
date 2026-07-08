export function HeroSection() {
  const meta = [
    { label: "Role", value: "UX Designer" },
    { label: "Timeline", value: "Q1–Q2 2026" },
    { label: "Platform", value: "Web (Internal)" },
    { label: "Org", value: "Amazon Customer Service" },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-14"
      style={{ background: "#F6F4F0" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{
              background: "rgba(255, 85, 0, 0.1)",
              color: "#FF5500",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            UX Design · Internal Tools · Amazon
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#141414",
            marginBottom: "1.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Redesigning
          <br />
          Comms Academy
        </h1>

        <p
          className="max-w-2xl"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "#716F69",
            marginBottom: "3.5rem",
          }}
        >
          Transforming an internal Amazon communications hub from a
          promotional billboard into a focused, intelligent resource
          for thousands of Customer Service employees worldwide.
        </p>

        <div
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          style={{
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#FF5500",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.4rem",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#141414",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex items-center gap-3"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "#716F69",
          }}
        >
          <div
            className="w-8 h-px"
            style={{ background: "#716F69" }}
          />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
