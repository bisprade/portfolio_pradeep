import { useId } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const growthData = [
  { month: "Launch", users: 800 },
  { month: "M+1", users: 1050 },
  { month: "M+2", users: 1500, event: "Nav added" },
  { month: "M+3", users: 2100 },
  { month: "M+4", users: 2800, event: "Teams onboarded" },
  { month: "M+5", users: 3500 },
  { month: "M+6", users: 4200 },
  { month: "M+7", users: 4800 },
  { month: "M+8", users: 5200 },
];

const metrics = [
  {
    value: "+70%",
    label: "Platform Adoption Rate",
    sub: "vs. previous version baseline",
    color: "#FF6200",
  },
  {
    value: "81%",
    label: "Template Download Rate",
    sub: "Up from 36% — more than doubled",
    color: "#FF6200",
  },
  {
    value: "5,200",
    label: "Unique Users",
    sub: "Up from 800 — 550% growth",
    color: "#FF6200",
  },
  {
    value: "−Tickets",
    label: "Design Support Tickets",
    sub: "Teams self-serve standard requests",
    color: "#FF6200",
  },
];

const tableRows = [
  { metric: "Platform Adoption Rate", before: "Baseline", after: "+70%", positive: true },
  { metric: "Template Download Rate", before: "36%", after: "81%", positive: true },
  { metric: "Total Unique Users", before: "800", after: "5,200", positive: true },
  { metric: "Navigation Availability", before: "None", after: "Full persistent navigation", positive: true },
  { metric: "Asset Organization", before: "Scattered folders", after: "Team-based IA hierarchy", positive: true },
  { metric: "Self-Service Capability", before: "Minimal (ticket-based)", after: "Full self-service", positive: true },
];

export function ImpactSection() {
  const gradientId = useId().replace(/:/g, "");
  return (
    <section style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Impact & Results</SectionLabel>

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
          Transformative results across every metric
        </h2>

        {/* Big numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "#161D26",
                borderRadius: "4px",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Ember Modern Display', 'DM Serif Display', serif",
                  fontSize: "40px",
                  color: m.color,
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                {m.value}
              </div>
              <p style={{ color: "#F5F3EF", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{m.label}</p>
              <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "11px" }}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Growth chart */}
        <div
          style={{
            background: "#F5F3EF",
            border: "1px solid rgba(22,29,38,0.07)",
            borderRadius: "4px",
            padding: "28px",
            marginBottom: "16px",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p style={{ color: "#7A7870", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>
                User Growth Since Launch
              </p>
              <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#161D26", fontSize: "22px", fontWeight: 400 }}>
                800 → 5,200 unique users
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "'Ember Modern Display', 'DM Serif Display', serif", color: "#FF6200", fontSize: "28px", fontWeight: 400 }}>550%</p>
              <p style={{ color: "#7A7870", fontSize: "11px" }}>total growth</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={growthData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6200" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF6200" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(22,29,38,0.06)" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#7A7870" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#7A7870" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
              />
              <Tooltip
                contentStyle={{
                  background: "#161D26",
                  border: "none",
                  borderRadius: "4px",
                  color: "#F5F3EF",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [value.toLocaleString(), "Users"]}
                labelStyle={{ color: "rgba(245,243,239,0.5)", marginBottom: "4px" }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#FF6200"
                strokeWidth={2}
                fill={`url(#${gradientId})`}
                dot={false}
                activeDot={{ r: 4, fill: "#FF6200", stroke: "#F5F3EF", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Before/after table */}
        <div
          style={{
            background: "#F5F3EF",
            border: "1px solid rgba(22,29,38,0.07)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <div style={{ background: "#161D26", padding: "16px 24px" }}>
            <p style={{ color: "rgba(245,243,239,0.4)", fontSize: "10px", letterSpacing: "0.15em" }}>
              BEFORE & AFTER COMPARISON
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(22,29,38,0.07)" }}>
                  <th style={{ padding: "12px 24px", textAlign: "left", color: "#7A7870", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Metric
                  </th>
                  <th style={{ padding: "12px 24px", textAlign: "left", color: "rgba(22,29,38,0.45)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Before Redesign
                  </th>
                  <th style={{ padding: "12px 24px", textAlign: "left", color: "#FF6200", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    After Redesign
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: i < tableRows.length - 1 ? "1px solid rgba(22,29,38,0.05)" : "none",
                      background: i % 2 === 0 ? "transparent" : "rgba(22,29,38,0.02)",
                    }}
                  >
                    <td style={{ padding: "14px 24px", color: "#161D26", fontSize: "13px", fontWeight: 500 }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: "14px 24px", color: "#7A7870", fontSize: "13px" }}>
                      {row.before}
                    </td>
                    <td style={{ padding: "14px 24px", color: "#FF6200", fontSize: "13px", fontWeight: 600 }}>
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
