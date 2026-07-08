import {
  Minus,
  Search,
  Meh,
  Frown,
  MessageCircle,
  FileText,
  Clock,
  CheckCircle,
  MousePointerClick,
  Compass,
  Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

const beforeSteps: { step: string; emotion: number; Icon: LucideIcon }[] = [
  { step: "Need Asset",     emotion: 0,   Icon: Minus },
  { step: "Search Drive A", emotion: -10, Icon: Search },
  { step: "Not Found",      emotion: -30, Icon: Meh },
  { step: "Search Drive B", emotion: -40, Icon: Frown },
  { step: "Ask Colleague",  emotion: -50, Icon: MessageCircle },
  { step: "No Help",        emotion: -65, Icon: Frown },
  { step: "Submit Ticket",  emotion: -70, Icon: FileText },
  { step: "Wait 1–3 Days",  emotion: -80, Icon: Clock },
  { step: "Receive Asset",  emotion: -30, Icon: CheckCircle },
];

const afterSteps: { step: string; emotion: number; Icon: LucideIcon }[] = [
  { step: "Need Asset",       emotion: 0,  Icon: Minus },
  { step: "Open Caboodle",    emotion: 20, Icon: MousePointerClick },
  { step: "Navigate to Team", emotion: 50, Icon: Compass },
  { step: "Download Asset",   emotion: 80, Icon: Download },
];

const taskFlow = [
  { node: "Discovery",  desc: "Users know the platform exists and is the go-to source", time: "Day 0" },
  { node: "Navigation", desc: "Clear menu maps to mental model — team-based",           time: "~5s" },
  { node: "Location",   desc: "Intuitive categorization within team sections",           time: "~20s" },
  { node: "Download",   desc: "One-click access to the needed asset",                   time: "~30s" },
];

export function JourneySection() {
  const barMax = 80;

  return (
    <section style={{ background: "#F5F3EF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>User Journey & Experience</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#161D26",
            fontWeight: 400,
            marginBottom: "48px",
            maxWidth: "640px",
          }}
        >
          From 3–5 days to under 2 minutes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Before journey */}
          <div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(22,29,38,0.45)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    BEFORE REDESIGN
                  </span>
                  <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#161D26", fontSize: "20px", fontWeight: 400 }}>
                    Current Journey
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(22,29,38,0.06)",
                    border: "1px solid rgba(22,29,38,0.15)",
                    borderRadius: "4px",
                    padding: "4px 10px",
                    color: "rgba(22,29,38,0.6)",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  3–5 days
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {beforeSteps.map((s, i) => {
                  const isFirst = i === 0;
                  const isLast = i === beforeSteps.length - 1;
                  const isNegative = s.emotion < -40;
                  const dotBg = isFirst || isLast ? "#FF6200" : isNegative ? "rgba(22,29,38,0.12)" : "rgba(22,29,38,0.06)";
                  const iconColor = isFirst || isLast ? "#FFFFFF" : isNegative ? "#161D26" : "rgba(22,29,38,0.5)";
                  return (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="flex flex-col items-center" style={{ minWidth: "24px" }}>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            background: dotBg,
                            border: `1px solid ${isFirst || isLast ? "#FF6200" : "rgba(22,29,38,0.1)"}`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <s.Icon size={11} color={iconColor} strokeWidth={2.5} />
                        </div>
                        {i < beforeSteps.length - 1 && (
                          <div style={{ width: "1px", height: "20px", background: "rgba(22,29,38,0.1)" }} />
                        )}
                      </div>
                      <div className="flex items-center gap-2 pb-3">
                        <span style={{ color: "#161D26", fontSize: "13px", minWidth: "120px" }}>{s.step}</span>
                        <div style={{ flex: 1, height: "4px", background: "rgba(22,29,38,0.06)", borderRadius: "2px", overflow: "hidden", minWidth: "60px" }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${Math.max(0, ((barMax + s.emotion) / (barMax * 2)) * 100)}%`,
                              background: s.emotion < -40 ? "rgba(22,29,38,0.5)" : s.emotion < 0 ? "#FF6200" : "rgba(22,29,38,0.3)",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p style={{ color: "rgba(22,29,38,0.4)", fontSize: "12px", marginTop: "12px", fontStyle: "italic" }}>
                Emotion: Starts neutral, descends through frustration, ends exhausted
              </p>
            </div>
          </div>

          {/* After journey */}
          <div>
            <div
              style={{
                background: "#161D26",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(245,243,239,0.4)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                    AFTER REDESIGN
                  </span>
                  <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#F5F3EF", fontSize: "20px", fontWeight: 400 }}>
                    Ideal Journey
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,98,0,0.12)",
                    border: "1px solid rgba(255,98,0,0.25)",
                    borderRadius: "4px",
                    padding: "4px 10px",
                    color: "#FF6200",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  Under 2 min
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {afterSteps.map((s, i) => {
                  const isLast = i === afterSteps.length - 1;
                  const dotBg = isLast ? "#FF6200" : "rgba(255,255,255,0.12)";
                  const iconColor = isLast ? "#FFFFFF" : "rgba(245,243,239,0.7)";
                  return (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="flex flex-col items-center" style={{ minWidth: "24px" }}>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            background: dotBg,
                            border: `1px solid ${isLast ? "#FF6200" : "rgba(255,255,255,0.12)"}`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <s.Icon size={11} color={iconColor} strokeWidth={2.5} />
                        </div>
                        {i < afterSteps.length - 1 && (
                          <div style={{ width: "1px", height: "20px", background: "rgba(245,243,239,0.1)" }} />
                        )}
                      </div>
                      <div className="flex items-center gap-2 pb-3">
                        <span style={{ color: "#F5F3EF", fontSize: "13px", minWidth: "140px" }}>{s.step}</span>
                        <div style={{ flex: 1, height: "4px", background: "rgba(245,243,239,0.08)", borderRadius: "2px", overflow: "hidden", minWidth: "60px" }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${((barMax + s.emotion) / (barMax * 2)) * 100}%`,
                              background: "#FF6200",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p style={{ color: "rgba(245,243,239,0.35)", fontSize: "12px", marginTop: "12px", fontStyle: "italic" }}>
                Emotion: Neutral, steadily rising to satisfied
              </p>
            </div>

            {/* Task flow */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "24px",
                marginTop: "16px",
              }}
            >
              <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
                Optimized Task Flow
              </p>
              <div className="flex items-center gap-0 flex-wrap">
                {taskFlow.map((t, i) => (
                  <div key={i} className="flex items-center gap-0">
                    <div>
                      <div
                        style={{
                          background: "#FF6200",
                          borderRadius: "4px",
                          padding: "8px 12px",
                          marginBottom: "4px",
                        }}
                      >
                        <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>{t.node}</p>
                      </div>
                      <p style={{ color: "rgba(22,29,38,0.45)", fontSize: "10px", textAlign: "center" }}>{t.time}</p>
                    </div>
                    {i < taskFlow.length - 1 && (
                      <div style={{ width: "16px", height: "1px", background: "#FF6200", margin: "0 2px", marginBottom: "16px" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
