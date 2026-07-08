import newDesignImg from "@/imports/Comms_Academy_New.png";
import { BrowserMockup } from "./BrowserMockup";
import { Check } from "lucide-react";

const improvements = [
  "Replaced promotional banner with a clear value proposition and category-based entry points",
  "Introduced a dedicated AI Tools section surfacing four AI communication assistants",
  "Added sub-tab navigation within the Channel Guide for direct access to Slack, Zoom, Wiki, Email, and more",
  "Added category filter buttons to Workshops for topic-based discovery",
  "Elevated on-demand content into a structured 'On-Demand Learning' section",
  "Unified visual language across cards, tabs, and section headers",
];

export function SolutionSection() {
  return (
    <section style={{ background: "#F6F4F0", padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
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
            02 — The Solution
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#141414",
              maxWidth: "640px",
            }}
          >
            Focused, intelligent, and task-oriented
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24 order-2 lg:order-1">
            <div
              className="mb-4 flex items-center gap-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "#716F69",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#28C840" }}
              />
              After redesign
            </div>
            <BrowserMockup
              src={newDesignImg}
              alt="Comms Academy redesigned with clean hero, AI Tools section, improved Channel Guide, and On-Demand Learning"
              height="560px"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#716F69",
                marginBottom: "2.5rem",
              }}
            >
              The redesign centered on three principles: surface the most
              useful content first, make discovery easier through navigation
              and filtering, and introduce AI tools that employees didn't know
              were available. Every section was evaluated against these principles.
            </p>

            <div
              className="rounded-2xl p-8"
              style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#716F69",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                Key improvements
              </p>
              <div className="flex flex-col gap-4">
                {improvements.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(255, 85, 0, 0.1)" }}
                    >
                      <Check size={11} style={{ color: "#FF5500" }} />
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "#141414",
                      }}
                    >
                      {item}
                    </p>
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
