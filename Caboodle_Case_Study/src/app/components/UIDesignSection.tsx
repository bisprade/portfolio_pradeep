import { ImageWithFallback } from "./figma/ImageWithFallback";
import homePage from "../../imports/Screenshot_2026-07-08_at_00-30-31_Caboodle_3.5_Home_Page.png";
import campaignToolkits from "../../imports/Screenshot_2026-07-08_at_00-31-18_Campaign_Toolkits.png";
import navOpen from "../../imports/Screenshot_2026-07-08_at_12.30.47_AM.png";

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

const abTests = [
  {
    test: "Navigation Type",
    optionA: "Top navigation bar",
    optionB: "Side navigation panel",
    winner: "Hybrid (side + top)",
    winnerLabel: "B Modified",
    rationale: "Users needed both hierarchy breadcrumbs (side) and quick global access (top).",
  },
  {
    test: "Page Layout",
    optionA: "Card grid view",
    optionB: "List view",
    winner: "Card grid view",
    winnerLabel: "A",
    rationale: "Visual thumbnails enabled users to recognize assets before clicking.",
  },
  {
    test: "Organization Model",
    optionA: "By asset type (logos, banners…)",
    optionB: "By team → then type",
    winner: "Team-first hierarchy",
    winnerLabel: "B",
    rationale: "Matched users' mental models. They think \"my team\" first, not asset category.",
  },
];

const principles = [
  {
    title: "Hierarchy",
    desc: "Typography scale: team names prominent, categories secondary, descriptions tertiary.",
    icon: "H",
  },
  {
    title: "Scannability",
    desc: "Card grid layout follows F-pattern eye movement — recognized assets on first scan.",
    icon: "S",
  },
  {
    title: "Consistency",
    desc: "Repeated component pattern across all team pages while each feels distinct.",
    icon: "C",
  },
  {
    title: "Accessibility",
    desc: "Color contrast checks, readable text sizes, color-coded categories for speed.",
    icon: "A",
  },
];

const quotes = [
  { quote: "I found my team's templates in seconds — this is amazing", role: "Team Manager" },
  { quote: "The navigation makes sense immediately", role: "Operations Manager" },
  { quote: "I didn't need any explanation — it just works", role: "New Team Member" },
];

export function UIDesignSection() {
  return (
    <section style={{ background: "#F5F3EF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>UI Design & Usability Testing</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#161D26",
            fontWeight: 400,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Iterative A/B testing, not end-of-project guessing
        </h2>

        {/* Design principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#161D26",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <span style={{ color: "#FF6200", fontSize: "16px", fontWeight: 700, fontFamily: "'Ember Modern Display', 'DM Serif Display', serif" }}>{p.icon}</span>
              </div>
              <p style={{ color: "#161D26", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>{p.title}</p>
              <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "12px", lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* A/B tests */}
        <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#161D26", fontSize: "28px", fontWeight: 400, marginBottom: "24px" }}>
          A/B Test Results
        </h3>
        <div className="flex flex-col gap-4 mb-16">
          {abTests.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "24px",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Test name */}
                <div>
                  <span style={{ color: "rgba(22,29,38,0.45)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    Test {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ color: "#161D26", fontSize: "14px", fontWeight: 600 }}>{t.test}</p>
                </div>

                {/* Option A */}
                <div
                  style={{
                    background: "#F5F3EF",
                    border: "1px solid rgba(22,29,38,0.07)",
                    borderRadius: "4px",
                    padding: "12px",
                  }}
                >
                  <span style={{ color: "rgba(22,29,38,0.45)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>TEST A</span>
                  <p style={{ color: "rgba(22,29,38,0.6)", fontSize: "13px" }}>{t.optionA}</p>
                </div>

                {/* vs */}
                <div className="flex justify-center">
                  <span style={{ color: "rgba(22,29,38,0.45)", fontSize: "12px", fontWeight: 600 }}>VS</span>
                </div>

                {/* Option B */}
                <div
                  style={{
                    background: "#F5F3EF",
                    border: "1px solid rgba(22,29,38,0.07)",
                    borderRadius: "4px",
                    padding: "12px",
                  }}
                >
                  <span style={{ color: "rgba(22,29,38,0.45)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>TEST B</span>
                  <p style={{ color: "rgba(22,29,38,0.6)", fontSize: "13px" }}>{t.optionB}</p>
                </div>

                {/* Winner */}
                <div
                  style={{
                    background: "rgba(255,98,0,0.06)",
                    border: "1px solid rgba(255,98,0,0.2)",
                    borderRadius: "4px",
                    padding: "12px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ background: "#FF6200", color: "#F5F3EF", fontSize: "9px", fontWeight: 700, padding: "1px 6px", borderRadius: "2px" }}>
                      WINNER {t.winnerLabel}
                    </span>
                  </div>
                  <p style={{ color: "#FF6200", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{t.winner}</p>
                  <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "11px", lineHeight: 1.4 }}>{t.rationale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-fidelity screens */}
        <div style={{ marginBottom: "64px" }}>
          <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#161D26", fontSize: "28px", fontWeight: 400, marginBottom: "8px" }}>
            High-Fidelity UI Screens
          </h3>
          <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px", maxWidth: "560px" }}>
            The final delivered platform — persistent navigation, team-based content hierarchy,
            visual asset cards, and a self-service experience across all CS teams.
          </p>

          {/* Large hero screen — home page */}
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(22,29,38,0.08)",
              boxShadow: "0 8px 40px rgba(22,29,38,0.08)",
              marginBottom: "16px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "#161D26",
                color: "#F5F3EF",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "3px 10px",
                borderRadius: "2px",
                zIndex: 2,
              }}
            >
              01 — HOME PAGE
            </div>
            <ImageWithFallback
              src={homePage}
              alt="Caboodle 3.5 home page showing Featured Content cards grid, Welcome banner, and 2026 Communications Calendar"
              style={{ width: "100%", display: "block", maxHeight: "520px", objectFit: "cover", objectPosition: "top" }}
            />
          </div>

          {/* Two smaller screens side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(22,29,38,0.08)",
                boxShadow: "0 4px 24px rgba(22,29,38,0.06)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#FF6200",
                  color: "#F5F3EF",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "3px 10px",
                  borderRadius: "2px",
                  zIndex: 2,
                }}
              >
                02 — CAMPAIGN TOOLKITS
              </div>
              <ImageWithFallback
                src={campaignToolkits}
                alt="Campaign Toolkits page showing a 3-column grid of communications packages including ART India, Asian Pacific American Heritage Month, CS Vision and Priorities, and more"
                style={{ width: "100%", display: "block", height: "320px", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(22,29,38,0.08)",
                boxShadow: "0 4px 24px rgba(22,29,38,0.06)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#161D26",
                  color: "#F5F3EF",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "3px 10px",
                  borderRadius: "2px",
                  zIndex: 2,
                }}
              >
                03 — NAVIGATION SYSTEM
              </div>
              <ImageWithFallback
                src={navOpen}
                alt="Caboodle navigation drawer open showing the full site hierarchy: Home, Amazon and CS Team Templates, Campaign Toolkits, Design Library, Calendar, Comms Academy"
                style={{ width: "100%", display: "block", height: "320px", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Screen annotations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { num: "01", title: "Home Page", desc: "Featured content grid + Communications Calendar — single source of truth" },
              { num: "02", title: "Campaign Toolkits", desc: "Scannable card grid of 13 campaign packages with visual thumbnails" },
              { num: "03", title: "Navigation System", desc: "Hybrid sidebar + top bar — the A/B test winner, with full section hierarchy" },
            ].map((ann) => (
              <div
                key={ann.num}
                style={{
                  background: "#F5F3EF",
                  border: "1px solid rgba(22,29,38,0.07)",
                  borderRadius: "4px",
                  padding: "16px 20px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <span style={{ color: "#FF6200", fontSize: "18px", fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", lineHeight: 1.2, minWidth: "24px" }}>{ann.num}</span>
                <div>
                  <p style={{ color: "#161D26", fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>{ann.title}</p>
                  <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "12px", lineHeight: 1.5 }}>{ann.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing quotes */}
        <div style={{ background: "#161D26", borderRadius: "4px", padding: "36px" }}>
          <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "10px", letterSpacing: "0.15em", marginBottom: "24px" }}>
            USABILITY TESTING — PARTICIPANT QUOTES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(245,243,239,0.04)",
                  border: "1px solid rgba(245,243,239,0.08)",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <div style={{ color: "#FF6200", fontSize: "32px", lineHeight: 1, marginBottom: "8px", fontFamily: "'Ember Modern Display', 'DM Serif Display', serif" }}>"</div>
                <p style={{ color: "rgba(245,243,239,0.75)", fontSize: "14px", lineHeight: 1.6, fontStyle: "italic", marginBottom: "12px" }}>
                  {q.quote}
                </p>
                <span style={{ color: "rgba(245,243,239,0.35)", fontSize: "11px", fontWeight: 500 }}>— {q.role}</span>
              </div>
            ))}
          </div>

          {/* Refinements */}
          <div style={{ marginTop: "24px", borderTop: "1px solid rgba(245,243,239,0.06)", paddingTop: "20px" }}>
            <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "10px", letterSpacing: "0.12em", marginBottom: "12px" }}>
              DESIGN REFINEMENTS BASED ON TESTING
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Added \"Recently Added\" sections for frequent check-ins",
                "Implemented breadcrumb navigation for deeper pages",
                "Added asset metadata (dimensions, file type, last updated) visible on cards",
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(245,243,239,0.06)",
                    border: "1px solid rgba(245,243,239,0.1)",
                    borderRadius: "4px",
                    padding: "8px 14px",
                  }}
                >
                  <p style={{ color: "rgba(245,243,239,0.55)", fontSize: "12px" }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
