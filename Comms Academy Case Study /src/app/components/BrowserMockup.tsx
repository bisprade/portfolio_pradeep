import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  height?: string;
}

export function BrowserMockup({
  src,
  alt,
  url = "comms-academy.inside.amazon.com",
  height = "480px",
}: BrowserMockupProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{ border: "1px solid rgba(0,0,0,0.1)" }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "#DDDBD5" }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div
          className="flex-1 rounded px-3 py-1"
          style={{ background: "rgba(0,0,0,0.12)" }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#716F69",
              fontFamily: "monospace",
            }}
          >
            {url}
          </span>
        </div>
      </div>
      <div style={{ height, overflowY: "auto" }}>
        <ImageWithFallback src={src} alt={alt} className="w-full block" />
      </div>
    </div>
  );
}
