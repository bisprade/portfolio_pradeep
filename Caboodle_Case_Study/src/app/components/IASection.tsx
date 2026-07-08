import { ImageWithFallback } from "./figma/ImageWithFallback";
import navScreenshot from "../../imports/Screenshot_2026-07-08_at_12.30.47_AM.png";

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

const iaTree = [
  {
    name: "Caboodle Home",
    level: 0,
    children: [
      {
        name: "Amazon Customer Service",
        level: 1,
        highlight: true,
        children: [
          {
            name: "CS Experience Team",
            level: 2,
            children: [
              { name: "Logos", level: 3 },
              { name: "Banners", level: 3 },
              { name: "Email Templates", level: 3 },
              { name: "Presentation Templates", level: 3 },
            ],
          },
          {
            name: "CS Operations Team",
            level: 2,
            children: [
              { name: "Logos", level: 3 },
              { name: "Banners", level: 3 },
              { name: "Reports", level: 3 },
            ],
          },
          {
            name: "CS Learning & Dev",
            level: 2,
            children: [
              { name: "Training Materials", level: 3 },
              { name: "Presentations", level: 3 },
            ],
          },
        ],
      },
      { name: "Other Organizations", level: 1, children: [] },
      { name: "Recently Added", level: 1, children: [] },
    ],
  },
];

type TreeNode = {
  name: string;
  level: number;
  highlight?: boolean;
  children?: TreeNode[];
};

function TreeItem({ node, isLast = false }: { node: TreeNode; isLast?: boolean }) {
  const levelColors: Record<number, string> = {
    0: "#0C0C10",
    1: "#E8621A",
    2: "#5A5851",
    3: "#7A7870",
  };
  const levelSizes: Record<number, string> = {
    0: "14px",
    1: "13px",
    2: "13px",
    3: "12px",
  };
  const levelWeights: Record<number, number> = {
    0: 600,
    1: 600,
    2: 500,
    3: 400,
  };

  return (
    <div style={{ marginLeft: `${node.level * 20}px` }}>
      <div className="flex items-center gap-2" style={{ padding: "4px 0" }}>
        {node.level > 0 && (
          <span style={{ color: "rgba(22,29,38,0.2)", fontSize: "12px" }}>
            {isLast ? "└─" : "├─"}
          </span>
        )}
        <span
          style={{
            color: levelColors[node.level] || "#7A7870",
            fontSize: levelSizes[node.level] || "12px",
            fontWeight: levelWeights[node.level] || 400,
            background: node.highlight ? "rgba(255,98,0,0.08)" : "transparent",
            padding: node.highlight ? "1px 8px" : "0",
            borderRadius: "2px",
          }}
        >
          {node.name}
        </span>
        {node.level === 0 && (
          <span style={{ background: "#E8621A", color: "#F9F8F6", fontSize: "9px", fontWeight: 600, padding: "1px 8px", borderRadius: "2px", letterSpacing: "0.08em" }}>
            ROOT
          </span>
        )}
      </div>
      {node.children && node.children.map((child, i) => (
        <TreeItem key={child.name + i} node={child} isLast={i === (node.children?.length ?? 0) - 1} />
      ))}
    </div>
  );
}

const wireframePages = [
  {
    title: "Home Page",
    desc: "Grid of organization/team cards with clear entry labels",
    elements: ["Team Cards Grid", "Quick Links", "Recently Added"],
  },
  {
    title: "Team Landing Page",
    desc: "Asset category cards with thumbnail previews",
    elements: ["Category Cards", "Asset Counts", "Search Bar"],
  },
  {
    title: "Asset Category View",
    desc: "Grid of downloadable assets with metadata",
    elements: ["Thumbnail Grid", "File Info", "Download CTA"],
  },
  {
    title: "Navigation System",
    desc: "Persistent sidebar with breadcrumb hierarchy",
    elements: ["Persistent Nav", "Breadcrumbs", "Team Context"],
  },
];

export function IASection() {
  return (
    <section style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Information Architecture & Wireframing</SectionLabel>

        <h2
          style={{
            fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            color: "#0C0C10",
            fontWeight: 400,
            marginBottom: "16px",
            maxWidth: "640px",
          }}
        >
          The IA redesign was the backbone
        </h2>
        <p style={{ color: "#7A7870", lineHeight: 1.8, fontSize: "15px", maxWidth: "600px", marginBottom: "48px" }}>
          The new IA was built on a <strong style={{ color: "#0C0C10" }}>team-first hierarchy</strong> — mirroring users' mental models.
          Structure: Home → Organization → Team → Asset Category.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* IA tree */}
          <div
            style={{
              background: "#F9F8F6",
              border: "1px solid rgba(22,29,38,0.07)",
              borderRadius: "4px",
              padding: "28px",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p style={{ color: "#7A7870", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                IA Tree Diagram
              </p>
              <span style={{ background: "#E8621A", color: "#F9F8F6", fontSize: "9px", fontWeight: 600, padding: "2px 8px", borderRadius: "2px", letterSpacing: "0.08em" }}>
                TEAM-FIRST
              </span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
              {iaTree.map((node, i) => (
                <TreeItem key={node.name + i} node={node} />
              ))}
            </div>
          </div>

          {/* IA principles */}
          <div>
            <div
              style={{
                background: "#F9F8F6",
                border: "1px solid rgba(22,29,38,0.07)",
                borderRadius: "4px",
                padding: "24px",
                marginBottom: "16px",
              }}
            >
              <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#0C0C10", fontSize: "18px", fontWeight: 400, marginBottom: "12px" }}>
                Why team-first?
              </p>
              <p style={{ color: "#7A7870", fontSize: "14px", lineHeight: 1.7 }}>
                Users think in terms of <em>"my team"</em> first, then "what type of asset."
                Any user landing on the platform can immediately find their section without
                scanning through irrelevant content.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { element: "Global Navigation", desc: "Persistent nav — jump between teams and categories from anywhere" },
                { element: "Team Landing Pages", desc: "Clear visual display of available asset categories per team" },
                { element: "Asset Grids", desc: "Scannable thumbnails with clear labels and one-click downloads" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#F9F8F6",
                    border: "1px solid rgba(22,29,38,0.07)",
                    borderLeft: "3px solid #E8621A",
                    borderRadius: "0 4px 4px 0",
                    padding: "14px 18px",
                  }}
                >
                  <p style={{ color: "#0C0C10", fontSize: "13px", fontWeight: 600, marginBottom: "2px" }}>{item.element}</p>
                  <p style={{ color: "#7A7870", fontSize: "12px", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actual navigation screenshot */}
        <div style={{ marginBottom: "64px" }}>
          <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#0C0C10", fontSize: "24px", fontWeight: 400, marginBottom: "8px" }}>
            The Navigation in Practice
          </h3>
          <p style={{ color: "#7A7870", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", maxWidth: "560px" }}>
            The final hybrid nav — sidebar hierarchy plus persistent top bar — lets users jump across
            sections (Home, Campaign Toolkits, Design Library, Calendar, Comms Academy) without losing
            their place in the content.
          </p>
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(22,29,38,0.09)",
              boxShadow: "0 8px 40px rgba(22,29,38,0.08)",
              position: "relative",
            }}
          >
            {/* Label overlay */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "#E8621A",
                color: "#F9F8F6",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "3px 10px",
                borderRadius: "2px",
                zIndex: 2,
              }}
            >
              FINAL NAVIGATION — A/B TEST WINNER
            </div>
            <ImageWithFallback
              src={navScreenshot}
              alt="Caboodle navigation open showing full sidebar hierarchy: Home, Amazon and CS Team Templates, Campaign Toolkits, Design Library, Calendar, Comms Academy"
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "480px", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {["Home", "Amazon & CS Team Templates", "Campaign Toolkits", "Design Library", "Calendar", "Comms Academy L4+", "Comms Academy L7+"].map((item) => (
              <span
                key={item}
                style={{
                  background: "#F9F8F6",
                  border: "1px solid rgba(22,29,38,0.08)",
                  borderRadius: "2px",
                  padding: "4px 10px",
                  color: "#5A5851",
                  fontSize: "11px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Wireframe pages */}
        <div>
          <h3 style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#0C0C10", fontSize: "24px", fontWeight: 400, marginBottom: "24px" }}>
            Low-Fidelity Wireframe Scope
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {wireframePages.map((page, i) => (
              <div
                key={i}
                style={{
                  background: "#F9F8F6",
                  border: "1px solid rgba(22,29,38,0.07)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                {/* Wireframe mockup */}
                <div style={{ background: "#EEECEA", padding: "16px", height: "100px", position: "relative" }}>
                  <div style={{ background: "#D4D2CE", borderRadius: "2px", height: "10px", width: "60%", marginBottom: "6px" }} />
                  <div className="flex gap-1 flex-wrap">
                    {[...Array(6)].map((_, j) => (
                      <div key={j} style={{ background: "#BCBBBA", borderRadius: "2px", height: "20px", width: "28%", flex: "0 0 28%" }} />
                    ))}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      background: "#E8621A",
                      color: "#F9F8F6",
                      fontSize: "9px",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ color: "#0C0C10", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{page.title}</p>
                  <p style={{ color: "#7A7870", fontSize: "11px", lineHeight: 1.5, marginBottom: "10px" }}>{page.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {page.elements.map((el) => (
                      <span key={el} style={{ background: "#EEECEA", color: "#5A5851", fontSize: "9px", padding: "2px 6px", borderRadius: "2px" }}>
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
