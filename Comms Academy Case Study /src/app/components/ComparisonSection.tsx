import { useState } from "react";
import oldDesignImg from "@/imports/Comms_Academy_Old.png";
import newDesignImg from "@/imports/Comms_Academy_New.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ComparisonSection() {
  const [activeView, setActiveView] = useState<"side-by-side" | "before" | "after">("side-by-side");

  return (
    <section style={{ background: "#141414", padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
          <div>
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
              04 — Before & After
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                color: "#F6F4F0",
              }}
            >
              Side-by-side comparison
            </h2>
          </div>

          <div
            className="flex items-center rounded-xl p-1 gap-1"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            {(["side-by-side", "before", "after"] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className="px-4 py-2 rounded-lg transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: activeView === view ? 500 : 400,
                  color: activeView === view ? "#141414" : "rgba(246,244,240,0.5)",
                  background: activeView === view ? "#F6F4F0" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {view.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {activeView === "side-by-side" && (
          <div className="grid gap-6 md:grid-cols-2">
            <ComparisonPanel
              src={oldDesignImg}
              alt="Comms Academy original design"
              label="Before"
              labelColor="#FF5F57"
              height="600px"
            />
            <ComparisonPanel
              src={newDesignImg}
              alt="Comms Academy redesigned"
              label="After"
              labelColor="#28C840"
              height="600px"
            />
          </div>
        )}

        {activeView === "before" && (
          <div className="max-w-2xl mx-auto">
            <ComparisonPanel
              src={oldDesignImg}
              alt="Comms Academy original design"
              label="Before"
              labelColor="#FF5F57"
              height="720px"
            />
          </div>
        )}

        {activeView === "after" && (
          <div className="max-w-2xl mx-auto">
            <ComparisonPanel
              src={newDesignImg}
              alt="Comms Academy redesigned"
              label="After"
              labelColor="#28C840"
              height="720px"
            />
          </div>
        )}
      </div>
    </section>
  );
}

function ComparisonPanel({
  src,
  alt,
  label,
  labelColor,
  height,
}: {
  src: string;
  alt: string;
  label: string;
  labelColor: string;
  height: string;
}) {
  return (
    <div>
      <div
        className="flex items-center gap-2 mb-3"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: "rgba(246,244,240,0.5)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: labelColor }}
        />
        {label}
      </div>
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.6)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(254,188,46,0.6)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,200,64,0.6)" }} />
          </div>
          <div
            className="flex-1 rounded px-3 py-1"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "rgba(246,244,240,0.35)",
                fontFamily: "monospace",
              }}
            >
              comms-academy.inside.amazon.com
            </span>
          </div>
        </div>
        <div style={{ height, overflowY: "auto" }}>
          <ImageWithFallback src={src} alt={alt} className="w-full block" />
        </div>
      </div>
    </div>
  );
}
