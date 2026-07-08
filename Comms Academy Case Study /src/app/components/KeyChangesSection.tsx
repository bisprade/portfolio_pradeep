import { Sparkles, Navigation, Filter, BookOpen, Layout } from "lucide-react";

const changes = [
  {
    num: "01",
    icon: <Sparkles size={20} />,
    title: "AI Tools Hub",
    before: "No AI tools surfaced anywhere in the platform",
    after: "Dedicated section with 4 AI communication assistants",
    desc: "Amazon had developed four AI-powered tools—GratiFade Amplifier, Huddle Story Generator, Team Spark, and Virtual Leadership Communication—but they had no visible home. We created a prominent 'AI Tools' section positioned as the first substantive content after the hero, with individual cards that clearly describe each tool's purpose and help employees adopt capabilities they didn't know existed.",
  },
  {
    num: "02",
    icon: <Layout size={20} />,
    title: "Hero Simplification",
    before: "Full-width promotional banner dominated the page",
    after: "Clear value proposition with category-based entry points",
    desc: "The existing hero occupied the most valuable screen real estate to announce a new course—content with a short shelf life that communicated nothing about the platform. The redesign leads with a one-sentence value proposition ('Check out the best practices and standards to help you communicate at the highest bar') and three category filters (Share Engagement, Team Communication, Change Communications) that immediately orient users by task.",
  },
  {
    num: "03",
    icon: <Navigation size={20} />,
    title: "Channel Guide Navigation",
    before: "Single dense comparison table for all channels",
    after: "Sub-tab navigation for direct channel access",
    desc: "The Channel Guide was one of the most-referenced sections, but finding guidance for a specific channel meant scrolling through a wide, undifferentiated comparison table. We added a secondary tab row within the guide—CS News, Slack, Zoom, Wiki, Email, Newsletter, Video—allowing users to navigate directly to the channel they need. Each sub-tab surfaces the same structured information (Description, Things to Consider, Use Cases, Supporting Resources) tailored to that channel.",
  },
  {
    num: "04",
    icon: <Filter size={20} />,
    title: "Workshop Discovery",
    before: "Flat image grid with no way to filter",
    after: "Category filters narrow 12+ workshops instantly",
    desc: "With over a dozen workshops available, the original flat grid required reading every card to find relevant content. We introduced four category filter buttons—Visual Design & Video, Design & Accessibility, Written Communication, and Tools & Platforms—that immediately reduce the list to what's relevant. The workshop cards were also updated to show clearer titles and reduce reliance on thumbnail imagery alone.",
  },
  {
    num: "05",
    icon: <BookOpen size={20} />,
    title: "On-Demand Learning Hub",
    before: "Buried 'Resources' section with flat links",
    after: "Structured card layout with clear value descriptions",
    desc: "A 'Resources' section near the bottom of the page contained valuable self-paced learning content—including courses on stakeholder influence, huddle storytelling, and change management—but the flat link list made it impossible to evaluate content before clicking. The redesigned 'On-Demand Learning' section uses a card-based layout with titles and 1–2 sentence descriptions that communicate the value of each course upfront, dramatically improving click-through quality.",
  },
];

export function KeyChangesSection() {
  return (
    <section style={{ background: "#EDEAE4", padding: "7rem 0" }}>
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
            03 — Key Design Decisions
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#141414",
              maxWidth: "600px",
            }}
          >
            Five focused improvements
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#716F69",
              maxWidth: "560px",
              marginTop: "1rem",
            }}
          >
            Each change targeted a specific failure mode in the original
            design, grounded in observed user behavior and content audit findings.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {changes.map((change, i) => (
            <div
              key={change.num}
              className="rounded-2xl p-8 transition-shadow hover:shadow-md"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
                <div className="lg:col-span-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(255, 85, 0, 0.08)",
                        color: "#FF5500",
                      }}
                    >
                      {change.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#FF5500",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {change.num}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                          fontSize: "1.3rem",
                          fontWeight: 600,
                          color: "#141414",
                          lineHeight: 1.2,
                        }}
                      >
                        {change.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div
                      className="rounded-lg px-3 py-2.5"
                      style={{ background: "rgba(255, 95, 87, 0.07)" }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#FF5F57",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Before
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#141414",
                          lineHeight: 1.5,
                        }}
                      >
                        {change.before}
                      </p>
                    </div>
                    <div
                      className="rounded-lg px-3 py-2.5"
                      style={{ background: "rgba(40, 200, 64, 0.08)" }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#1A9E30",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.2rem",
                        }}
                      >
                        After
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#141414",
                          lineHeight: 1.5,
                        }}
                      >
                        {change.after}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 flex items-start">
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "15px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#716F69",
                    }}
                  >
                    {change.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
