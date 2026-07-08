import { Link } from 'react-router-dom'
import { ArrowLeft, Check, Frown } from 'lucide-react'

const meta = [
  { label: 'Role', value: 'Lead UX Designer' },
  { label: 'Timeline', value: '2024–2025' },
  { label: 'Platform', value: 'Web (Internal)' },
  { label: 'Org', value: 'Amazon Customer Service' },
]

const stats = [
  { value: '550%', label: 'User Growth' },
  { value: '36→81%', label: 'Download Rate' },
  { value: '5,200+', label: 'Active Users' },
  { value: '100–150', label: 'Stakeholders Interviewed' },
]

const businessChallenges = [
  'Design team spent excessive time on repetitive support tickets for asset requests',
  'No scalable system to distribute assets across growing number of teams',
  'Duplicate and outdated assets circulating across multiple shared drives',
  'Unable to track usage, adoption, or asset performance',
]

const userChallenges = [
  'Assets scattered across multiple folder locations in shared drives',
  'No centralized navigation or discovery mechanism',
  'Finding templates required knowing the exact folder path',
  'Workflow was rigid — users often submitted tickets for basic asset access',
]

const goals = [
  { num: '01', title: 'Centralize Assets', desc: 'Single platform for all design asset distribution' },
  { num: '02', title: 'Enable Self-Service', desc: 'Eliminate ticket-based asset requests where possible' },
  { num: '03', title: 'Redesign IA', desc: 'Intuitive architecture that organizes assets by team' },
  { num: '04', title: 'Add Navigation', desc: 'Clear nav that enables self-service discovery' },
  { num: '05', title: 'Increase Adoption', desc: 'Drive adoption across all CS teams' },
  { num: '06', title: 'Reduce Burden', desc: 'Free the design team from repetitive support work' },
]

const insights = [
  { severity: 'Critical', title: 'Discoverability was zero', body: 'Users could only find assets they already knew existed and already knew the location of.' },
  { severity: 'Critical', title: 'Team identity was the primary mental model', body: 'Users thought about assets in terms of "my team\'s stuff" — not "all design assets."' },
  { severity: 'High', title: 'Self-service was the overwhelming preference', body: 'Users would rather find assets themselves than submit tickets and wait.' },
  { severity: 'High', title: 'Navigation was non-existent', body: 'The old platform was essentially a dumping ground with a UI layer on top.' },
  { severity: 'High', title: 'Template freshness mattered', body: 'Users needed confidence they were using the latest version — not an outdated file.' },
]

const abTests = [
  { test: 'Navigation Type', optionA: 'Top navigation bar', optionB: 'Side navigation panel', winner: 'Hybrid (side + top)', rationale: 'Users needed both hierarchy breadcrumbs (side) and quick global access (top).' },
  { test: 'Page Layout', optionA: 'Card grid view', optionB: 'List view', winner: 'Card grid view', rationale: 'Visual thumbnails enabled users to recognize assets before clicking.' },
  { test: 'Organization Model', optionA: 'By asset type', optionB: 'By team → then type', winner: 'Team-first hierarchy', rationale: 'Matched users\' mental models. They think "my team" first, not asset category.' },
]

const impactMetrics = [
  { value: '+70%', label: 'Platform Adoption Rate', sub: 'vs. previous version baseline' },
  { value: '81%', label: 'Template Download Rate', sub: 'Up from 36% — more than doubled' },
  { value: '5,200', label: 'Unique Users', sub: 'Up from 800 — 550% growth' },
  { value: '−Tickets', label: 'Design Support Tickets', sub: 'Teams self-serve standard requests' },
]

const lessons = [
  { num: '01', title: 'Scale research to match your user base', body: 'Interviewing 100–150 stakeholders was intensive but essential for a platform serving thousands.' },
  { num: '02', title: 'Information architecture IS the product', body: 'The IA redesign delivered more impact than any visual design change. The structure is the experience.' },
  { num: '03', title: 'Team-based mental models are powerful', body: 'Organizing content around how users think about their work was the single most impactful insight.' },
  { num: '04', title: 'Iterative A/B testing prevents costly mistakes', body: 'Continuous testing kept us on track without major late-stage redesigns.' },
]

const beforeSteps = ['Need Asset', 'Search Drive A', 'Not Found', 'Search Drive B', 'Ask Colleague', 'Submit Ticket', 'Wait 1–3 Days', 'Receive Asset']
const afterSteps = ['Need Asset', 'Open Caboodle', 'Navigate to Team', 'Download Asset']

export default function CaboodleCaseStudy() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Back nav */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link to="/work" className="flex items-center gap-2 text-sm text-foreground hover:opacity-60 transition-opacity">
            <ArrowLeft size={15} />
            <span>All Projects</span>
          </Link>
          <span className="text-sm text-muted-foreground">Caboodle</span>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">2025</span>
        </div>
      </div>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center bg-[#161D26]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-widest uppercase bg-[#FF6200]/10 text-[#FF6200]">
              UX Case Study · Asset Platform · Amazon
            </span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.0] text-[#F5F3EF] tracking-tight mb-3" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            Caboodle
          </h1>
          <p className="text-[clamp(1.2rem,3vw,2.5rem)] font-light leading-[1.1] text-white/40 italic mb-10" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            Centralizing Design Asset Distribution
          </p>

          <p className="max-w-[560px] text-base font-light leading-[1.7] text-white/55 mb-14">
            A complete UX overhaul transforming a fragmented, ticket-based asset workflow into a self-service design ecosystem — serving over 5,200 Amazon CS users.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-16 pt-6 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#FF6200] leading-none" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{stat.value}</span>
                <span className="text-[11px] text-white/40 uppercase tracking-widest font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 mt-14 pt-8 border-t border-white/5">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.12em] mb-1">{label}</p>
                <p className="text-[15px] text-[#F5F3EF]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white dark:bg-[#1a1a1a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">01 — The Problem</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#161D26] dark:text-[#F5F3EF] max-w-[700px] mb-4" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            A chaotic, scattered, unsustainable asset workflow
          </h2>
          <p className="text-base font-light text-[#7A7870] dark:text-white/50 max-w-[620px] leading-[1.8] mb-12">
            Before the redesign, teams across Amazon CS needed regular access to design assets — but the system for accessing them was broken at every level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#161D26] dark:text-white/80 mb-5">Business Challenges</h3>
              <div className="flex flex-col gap-3">
                {businessChallenges.map((c, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 min-w-[20px] bg-[#161D26] dark:bg-white/10 rounded flex items-center justify-center mt-0.5">
                      <span className="text-white text-[9px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-[#5A5851] dark:text-white/60 leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#161D26] dark:text-white/80 mb-5">User Challenges</h3>
              <div className="flex flex-col gap-3">
                {userChallenges.map((c, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 min-w-[20px] bg-[#FF6200] rounded flex items-center justify-center mt-0.5">
                      <span className="text-white text-[9px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-[#5A5851] dark:text-white/60 leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {goals.map((g) => (
              <div key={g.num} className="bg-[#F5F3EF] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg p-5">
                <span className="text-[#FF6200] text-2xl font-bold block mb-2" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{g.num}</span>
                <p className="text-sm font-semibold text-[#161D26] dark:text-white/90 mb-1">{g.title}</p>
                <p className="text-xs text-[#7A7870] dark:text-white/40">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-[#F5F3EF] dark:bg-[#111] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">02 — Research & Discovery</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#161D26] dark:text-[#F5F3EF] max-w-[700px] mb-12" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            100–150 stakeholders. One clear signal.
          </h2>

          <div className="flex flex-col gap-3 mb-16">
            {insights.map((ins, i) => (
              <div key={i} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg p-5 border-l-[3px]" style={{ borderLeftColor: ins.severity === 'Critical' ? '#FF6200' : '#7A7870' }}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-[#161D26] dark:text-white/90">{ins.title}</p>
                  <span className="text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded" style={{ color: ins.severity === 'Critical' ? '#FF6200' : '#7A7870', background: ins.severity === 'Critical' ? 'rgba(255,98,0,0.08)' : 'rgba(0,0,0,0.04)' }}>
                    {ins.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-[#7A7870] dark:text-white/40 leading-relaxed">{ins.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white dark:bg-[#1a1a1a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">03 — User Journey</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#161D26] dark:text-[#F5F3EF] max-w-[640px] mb-12" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            From 3–5 days to under 2 minutes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F3EF] dark:bg-white/5 rounded-lg p-6 border border-black/5 dark:border-white/5">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold text-[#161D26] dark:text-white/80">Before Redesign</p>
                <span className="text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-semibold">3–5 days</span>
              </div>
              <div className="flex flex-col gap-2">
                {beforeSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                      <Frown size={10} className="text-[#161D26] dark:text-white/50" />
                    </div>
                    <span className="text-sm text-[#5A5851] dark:text-white/50">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#161D26] rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold text-white/80">After Redesign</p>
                <span className="text-xs bg-[#FF6200]/15 text-[#FF6200] px-2 py-0.5 rounded font-semibold">Under 2 min</span>
              </div>
              <div className="flex flex-col gap-2">
                {afterSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF6200]/20 flex items-center justify-center">
                      <Check size={10} className="text-[#FF6200]" />
                    </div>
                    <span className="text-sm text-white/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design & A/B Testing */}
      <section className="bg-[#F5F3EF] dark:bg-[#111] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">04 — UI Design & Testing</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#161D26] dark:text-[#F5F3EF] max-w-[600px] mb-12" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            Iterative A/B testing, not guessing
          </h2>

          <div className="flex flex-col gap-4 mb-16">
            {abTests.map((t, i) => (
              <div key={i} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <span className="text-[10px] font-semibold text-[#7A7870] uppercase tracking-wider block mb-1">Test {String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-semibold text-[#161D26] dark:text-white/90">{t.test}</p>
                  </div>
                  <div className="bg-[#F5F3EF] dark:bg-white/5 rounded-lg p-3">
                    <span className="text-[10px] font-semibold text-[#7A7870] uppercase block mb-1">Option A</span>
                    <p className="text-xs text-[#5A5851] dark:text-white/60">{t.optionA}</p>
                  </div>
                  <div className="bg-[#F5F3EF] dark:bg-white/5 rounded-lg p-3">
                    <span className="text-[10px] font-semibold text-[#7A7870] uppercase block mb-1">Option B</span>
                    <p className="text-xs text-[#5A5851] dark:text-white/60">{t.optionB}</p>
                  </div>
                  <div className="bg-[#FF6200]/5 border border-[#FF6200]/20 rounded-lg p-3">
                    <span className="text-[9px] font-bold text-[#FF6200] uppercase block mb-1">Winner</span>
                    <p className="text-xs font-semibold text-[#FF6200] mb-1">{t.winner}</p>
                    <p className="text-[11px] text-[#7A7870] dark:text-white/40">{t.rationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Screenshots */}
          <h3 className="text-2xl font-bold text-[#161D26] dark:text-white/90 mb-6" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>High-Fidelity Screens</h3>
          <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl mb-4">
            <img src="/portfolio_pradeep/images/projects/Caboodle_Home.png" alt="Caboodle Home Page" className="w-full block" style={{ maxHeight: '480px', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg">
              <img src="/portfolio_pradeep/images/projects/Caboodle_Toolkits.png" alt="Campaign Toolkits" className="w-full block" style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg">
              <img src="/portfolio_pradeep/images/projects/Caboodle_Nav.png" alt="Navigation System" className="w-full block" style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[#161D26] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">05 — Impact & Results</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#F5F3EF] max-w-[640px] mb-12" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            Transformative results across every metric
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {impactMetrics.map((m) => (
              <div key={m.label} className="bg-white/5 rounded-lg p-6">
                <p className="text-4xl font-bold text-[#FF6200] mb-2" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{m.value}</p>
                <p className="text-sm font-semibold text-white/80 mb-1">{m.label}</p>
                <p className="text-[11px] text-white/40">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="bg-[#F5F3EF] dark:bg-[#111] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium text-[#FF6200] uppercase tracking-[0.14em] mb-4">06 — Lessons Learned</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#161D26] dark:text-[#F5F3EF] max-w-[600px] mb-12" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            What this project reinforced
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((l) => (
              <div key={l.num} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg p-6 flex gap-5">
                <span className="text-4xl font-bold text-[#FF6200]/50" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{l.num}</span>
                <div>
                  <p className="text-sm font-semibold text-[#161D26] dark:text-white/90 mb-2">{l.title}</p>
                  <p className="text-xs text-[#7A7870] dark:text-white/50 leading-relaxed">{l.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Footer */}
      <section className="bg-[#0E0E0E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.1] text-white/90 max-w-[800px] mb-6" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            UX isn't always visually revolutionary. Sometimes it's creating structure where chaos existed.
          </h2>
          <p className="text-sm font-light text-white/40 max-w-[640px] leading-[1.8] mb-12">
            By conducting extensive research, implementing a team-first navigation hierarchy, and iterating through A/B testing, Caboodle achieved 550% growth in unique users and more than doubled template download rates.
          </p>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] text-white/30">Caboodle · Amazon Customer Service · 2024–2025</p>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors">
              <ArrowLeft size={14} />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
