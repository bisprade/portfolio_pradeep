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

const businessChallenges = [
  "Design team spent excessive time on repetitive support tickets for asset requests",
  "No scalable system to distribute assets across growing number of teams",
  "Duplicate and outdated assets circulating across multiple shared drives",
  "Unable to track usage, adoption, or asset performance",
  "Team resources consumed by manual distribution rather than creative work",
];

const userChallenges = [
  "Assets scattered across multiple folder locations in shared drives",
  "No centralized navigation or discovery mechanism",
  "Finding templates required knowing the exact folder path",
  "No logical organization — templates from different teams mixed together",
  "Workflow was rigid — users often submitted tickets for basic asset access",
  "The existing platform had no UX consideration, no IA, and no clear navigation",
];

const goals = [
  { num: "01", title: "Centralize Assets", desc: "Single platform for all design asset distribution" },
  { num: "02", title: "Enable Self-Service", desc: "Eliminate ticket-based asset requests where possible" },
  { num: "03", title: "Redesign IA", desc: "Intuitive architecture that organizes assets by team" },
  { num: "04", title: "Add Navigation", desc: "Clear nav that enables self-service discovery" },
  { num: "05", title: "Increase Adoption", desc: "Drive adoption across all CS teams" },
  { num: "06", title: "Reduce Burden", desc: "Free the design team from repetitive support work" },
];

export function ProblemSection() {
  return (
    <section style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Problem Statement</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#161D26",
            fontWeight: 400,
            marginBottom: "16px",
            maxWidth: "700px",
          }}
        >
          A chaotic, scattered, unsustainable asset workflow
        </h2>
        <p style={{ color: "rgba(22,29,38,0.45)", lineHeight: 1.8, fontSize: "15px", maxWidth: "620px", marginBottom: "48px" }}>
          Before the redesign, teams across Amazon Customer Service needed regular access to design assets —
          but the system for accessing them was broken at every level.
        </p>

        {/* Chaos diagram */}
        <div
          style={{ background: "#161D26", borderRadius: "4px", padding: "40px", marginBottom: "64px" }}
          className="relative overflow-hidden"
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "10px", letterSpacing: "0.15em", marginBottom: "32px" }}>
              BEFORE: THE CHAOS STATE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {["Shared Drive A", "Shared Drive B", "Email Threads", "Slack Messages", "Ticket System"].map((node) => (
                <div
                  key={node}
                  style={{
                    background: "rgba(245,243,239,0.06)",
                    border: "1px dashed rgba(245,243,239,0.18)",
                    borderRadius: "4px",
                    padding: "10px 18px",
                    color: "rgba(245,243,239,0.55)",
                    fontSize: "12px",
                  }}
                >
                  {node}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div
                style={{
                  background: "rgba(255,98,0,0.15)",
                  border: "1px solid rgba(255,98,0,0.4)",
                  borderRadius: "4px",
                  padding: "12px 32px",
                  color: "#FF6200",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                No Single Source of Truth
              </div>
            </div>
          </div>
        </div>

        {/* Challenges grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 style={{ color: "#161D26", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
              Business Challenges
            </h3>
            <div className="flex flex-col gap-3">
              {businessChallenges.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div style={{ width: "20px", minWidth: "20px", height: "20px", background: "#161D26", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                    <span style={{ color: "#F5F3EF", fontSize: "9px", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p style={{ color: "rgba(22,29,38,0.6)", fontSize: "14px", lineHeight: 1.6 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#161D26", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
              User Challenges
            </h3>
            <div className="flex flex-col gap-3">
              {userChallenges.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div style={{ width: "20px", minWidth: "20px", height: "20px", background: "#FF6200", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                    <span style={{ color: "#F5F3EF", fontSize: "9px", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p style={{ color: "rgba(22,29,38,0.6)", fontSize: "14px", lineHeight: 1.6 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals */}
        <div style={{ borderTop: "1px solid rgba(22,29,38,0.08)", paddingTop: "48px" }}>
          <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#161D26", fontSize: "28px", fontWeight: 400, marginBottom: "32px" }}>
            Project Goals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {goals.map((g) => (
              <div
                key={g.num}
                style={{
                  background: "#F5F3EF",
                  border: "1px solid rgba(22,29,38,0.07)",
                  borderRadius: "4px",
                  padding: "24px",
                }}
              >
                <span style={{ color: "#FF6200", fontSize: "28px", fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", display: "block", marginBottom: "8px" }}>
                  {g.num}
                </span>
                <p style={{ color: "#161D26", fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{g.title}</p>
                <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "13px", lineHeight: 1.5 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
