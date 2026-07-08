import oldDesignImg from "@/imports/Comms_Academy_Old.png";
import { BrowserMockup } from "./BrowserMockup";

const painPoints = [
  {
    num: "01",
    title: "Promotional banner above the fold",
    desc: "The entire hero was a full-width orange banner announcing a new course. The most valuable screen real estate communicated almost nothing about the platform's actual purpose.",
  },
  {
    num: "02",
    title: "No clear entry point for users",
    desc: "Three vague category circles (Solo, Team, Change Communications) provided no guidance on where to start. New users had no mental model for the platform.",
  },
  {
    num: "03",
    title: "Channel Guide lacked context",
    desc: "Employees needing Slack or Email guidelines had to scroll through a dense comparison table with no sub-navigation. The most-used section was the hardest to navigate.",
  },
  {
    num: "04",
    title: "Flat grids buried discovery",
    desc: "Workshops were displayed as an undifferentiated image grid. With 12+ workshops available and no filtering, finding relevant content required reading every card.",
  },
  {
    num: "05",
    title: "AI tools were invisible",
    desc: "Amazon had developed four AI-powered communication tools, but they had no home in the existing information architecture. Employees didn't know they existed.",
  },
];

export function ChallengeSection() {
  return (
    <section style={{ background: "#141414", padding: "7rem 0" }}>
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
            01 — The Problem
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#F6F4F0",
              maxWidth: "640px",
            }}
          >
            A cluttered hub with no clear entry point
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "rgba(246, 244, 240, 0.65)",
                marginBottom: "3rem",
              }}
            >
              The existing Comms Academy had grown organically over time,
              resulting in a homepage that prioritized promotion over utility.
              An audit of the page revealed five core issues that were
              undermining the platform's effectiveness.
            </p>

            <div className="flex flex-col gap-8">
              {painPoints.map((point) => (
                <div
                  key={point.num}
                  className="flex gap-5"
                  style={{
                    paddingBottom: "2rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#FF5500",
                      flexShrink: 0,
                      paddingTop: "2px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {point.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#F6F4F0",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {point.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "rgba(246, 244, 240, 0.55)",
                        lineHeight: 1.6,
                      }}
                    >
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div
              className="mb-4 flex items-center gap-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(246, 244, 240, 0.4)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#FF5F57" }}
              />
              Before redesign
            </div>
            <BrowserMockup
              src={oldDesignImg}
              alt="Comms Academy original design showing the promotional orange banner hero and flat layout"
              height="560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
