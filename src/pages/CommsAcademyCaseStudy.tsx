import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, Sparkles, Navigation, Filter, BookOpen, Layout } from 'lucide-react'

const meta = [
  { label: 'Role', value: 'UX Designer' },
  { label: 'Timeline', value: 'Q1–Q2 2026' },
  { label: 'Platform', value: 'Web (Internal)' },
  { label: 'Org', value: 'Amazon Customer Service' },
]

const painPoints = [
  {
    num: '01',
    title: 'Promotional banner above the fold',
    desc: 'The entire hero was a full-width orange banner announcing a new course. The most valuable screen real estate communicated almost nothing about the platform\'s actual purpose.',
  },
  {
    num: '02',
    title: 'No clear entry point for users',
    desc: 'Three vague category circles provided no guidance on where to start. New users had no mental model for the platform.',
  },
  {
    num: '03',
    title: 'Channel Guide lacked context',
    desc: 'Employees needing Slack or Email guidelines had to scroll through a dense comparison table with no sub-navigation.',
  },
  {
    num: '04',
    title: 'Flat grids buried discovery',
    desc: 'Workshops were displayed as an undifferentiated image grid. With 12+ workshops and no filtering, finding relevant content required reading every card.',
  },
  {
    num: '05',
    title: 'AI tools were invisible',
    desc: 'Amazon had developed four AI-powered communication tools, but they had no home in the existing information architecture.',
  },
]

const improvements = [
  'Replaced promotional banner with a clear value proposition and category-based entry points',
  'Introduced a dedicated AI Tools section surfacing four AI communication assistants',
  'Added sub-tab navigation within the Channel Guide for direct access to Slack, Zoom, Wiki, Email, and more',
  'Added category filter buttons to Workshops for topic-based discovery',
  'Elevated on-demand content into a structured \'On-Demand Learning\' section',
  'Unified visual language across cards, tabs, and section headers',
]

const changes = [
  {
    num: '01',
    icon: <Sparkles size={20} />,
    title: 'AI Tools Hub',
    before: 'No AI tools surfaced anywhere in the platform',
    after: 'Dedicated section with 4 AI communication assistants',
    desc: 'Amazon had developed four AI-powered tools but they had no visible home. We created a prominent \'AI Tools\' section positioned as the first substantive content after the hero, with individual cards that clearly describe each tool\'s purpose.',
  },
  {
    num: '02',
    icon: <Layout size={20} />,
    title: 'Hero Simplification',
    before: 'Full-width promotional banner dominated the page',
    after: 'Clear value proposition with category-based entry points',
    desc: 'The redesign leads with a one-sentence value proposition and three category filters that immediately orient users by task instead of wasting space on time-limited promotions.',
  },
  {
    num: '03',
    icon: <Navigation size={20} />,
    title: 'Channel Guide Navigation',
    before: 'Single dense comparison table for all channels',
    after: 'Sub-tab navigation for direct channel access',
    desc: 'We added a secondary tab row—CS News, Slack, Zoom, Wiki, Email, Newsletter, Video—allowing users to navigate directly to the channel they need with structured information for each.',
  },
  {
    num: '04',
    icon: <Filter size={20} />,
    title: 'Workshop Discovery',
    before: 'Flat image grid with no way to filter',
    after: 'Category filters narrow 12+ workshops instantly',
    desc: 'We introduced four category filter buttons—Visual Design & Video, Design & Accessibility, Written Communication, and Tools & Platforms—that immediately reduce the list to what\'s relevant.',
  },
  {
    num: '05',
    icon: <BookOpen size={20} />,
    title: 'On-Demand Learning Hub',
    before: 'Buried \'Resources\' section with flat links',
    after: 'Structured card layout with clear value descriptions',
    desc: 'The redesigned section uses a card-based layout with titles and descriptions that communicate the value of each course upfront, dramatically improving click-through quality.',
  },
]

const outcomes = [
  { stat: '5', label: 'Core UX problems addressed' },
  { stat: '4', label: 'AI tools surfaced for the first time' },
  { stat: '8+', label: 'Playbooks with clear, labeled cards' },
  { stat: '4', label: 'Workshop discovery categories added' },
]

function BrowserMockup({ src, alt, label, labelColor, height = '560px' }: {
  src: string
  alt: string
  label?: string
  labelColor?: string
  height?: string
}) {
  return (
    <div>
      {label && (
        <div className="flex items-center gap-2 mb-3 text-xs font-medium uppercase tracking-wider text-[#716F69]">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: labelColor }} />
          {label}
        </div>
      )}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#DDDBD5] dark:bg-white/5">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 rounded px-3 py-1 bg-black/10 dark:bg-white/10">
            <span className="text-[11px] text-[#716F69] dark:text-white/40 font-mono">
              comms-academy.inside.amazon.com
            </span>
          </div>
        </div>
        <div style={{ height, overflowY: 'auto' }}>
          <img src={src} alt={alt} className="w-full block" />
        </div>
      </div>
    </div>
  )
}

export default function CommsAcademyCaseStudy() {
  const [activeView, setActiveView] = useState<'side-by-side' | 'before' | 'after'>('side-by-side')

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Back nav */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link
            to="/work"
            className="flex items-center gap-2 text-sm text-foreground hover:opacity-60 transition-opacity"
          >
            <ArrowLeft size={15} />
            <span>All Projects</span>
          </Link>
          <span className="text-sm text-muted-foreground">Comms Academy</span>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">2026</span>
        </div>
      </div>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center bg-[#F6F4F0] dark:bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-widest uppercase bg-[#FF5500]/10 text-[#FF5500]">
              UX Design · Internal Tools · Amazon
            </span>
          </div>

          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] text-[#141414] dark:text-[#F6F4F0] tracking-tight mb-7" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            Redesigning<br />Comms Academy
          </h1>

          <p className="max-w-2xl text-[clamp(1rem,2vw,1.25rem)] font-light leading-[1.7] text-[#716F69] dark:text-white/60 mb-14">
            Transforming an internal Amazon communications hub from a promotional billboard into a focused, intelligent resource for thousands of Customer Service employees worldwide.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 pt-10 border-t border-black/10 dark:border-white/10">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.12em] mb-1">{label}</p>
                <p className="text-[15px] text-[#141414] dark:text-[#F6F4F0]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-[#141414] dark:bg-[#0a0a0a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.14em] mb-4">01 — The Problem</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#F6F4F0] max-w-[640px]" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              A cluttered hub with no clear entry point
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-base font-light leading-[1.75] text-white/60 mb-12">
                The existing Comms Academy had grown organically over time, resulting in a homepage that prioritized promotion over utility. An audit revealed five core issues undermining the platform's effectiveness.
              </p>

              <div className="flex flex-col gap-8">
                {painPoints.map((point) => (
                  <div key={point.num} className="flex gap-5 pb-8 border-b border-white/5">
                    <span className="text-xs font-semibold text-[#FF5500] flex-shrink-0 pt-0.5 tracking-wider">
                      {point.num}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-[#F6F4F0] mb-1">{point.title}</p>
                      <p className="text-sm font-light text-white/50 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <BrowserMockup
                src="/portfolio_pradeep/images/projects/Comms_Academy_Old.png"
                alt="Comms Academy original design"
                label="Before redesign"
                labelColor="#FF5F57"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#F6F4F0] dark:bg-[#1a1a1a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.14em] mb-4">02 — The Solution</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#141414] dark:text-[#F6F4F0] max-w-[640px]" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              Focused, intelligent, and task-oriented
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32 order-2 lg:order-1">
              <BrowserMockup
                src="/portfolio_pradeep/images/projects/Comms_Academy_New.png"
                alt="Comms Academy redesigned"
                label="After redesign"
                labelColor="#28C840"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-base font-light leading-[1.75] text-[#716F69] dark:text-white/60 mb-10">
                The redesign centered on three principles: surface the most useful content first, make discovery easier through navigation and filtering, and introduce AI tools that employees didn't know were available.
              </p>

              <div className="rounded-2xl p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                <p className="text-xs font-semibold text-[#716F69] uppercase tracking-[0.1em] mb-6">Key improvements</p>
                <div className="flex flex-col gap-4">
                  {improvements.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#FF5500]/10">
                        <Check size={11} className="text-[#FF5500]" />
                      </div>
                      <p className="text-sm text-[#141414] dark:text-[#F6F4F0] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Changes */}
      <section className="bg-[#EDEAE4] dark:bg-[#111] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.14em] mb-4">03 — Key Design Decisions</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-[#141414] dark:text-[#F6F4F0] max-w-[600px]" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              Five focused improvements
            </h2>
            <p className="text-base font-light leading-[1.7] text-[#716F69] dark:text-white/50 max-w-[560px] mt-4">
              Each change targeted a specific failure mode in the original design, grounded in observed user behavior and content audit findings.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {changes.map((change) => (
              <div key={change.num} className="rounded-2xl p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FF5500]/10 text-[#FF5500]">
                        {change.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF5500] tracking-wider uppercase mb-1">{change.num}</p>
                        <h3 className="text-xl font-bold text-[#141414] dark:text-[#F6F4F0] leading-tight" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                          {change.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="rounded-lg px-3 py-2.5 bg-[#FF5F57]/10">
                        <p className="text-[11px] font-semibold text-[#FF5F57] uppercase tracking-wider mb-0.5">Before</p>
                        <p className="text-[13px] text-[#141414] dark:text-[#F6F4F0]">{change.before}</p>
                      </div>
                      <div className="rounded-lg px-3 py-2.5 bg-[#28C840]/10">
                        <p className="text-[11px] font-semibold text-[#1A9E30] uppercase tracking-wider mb-0.5">After</p>
                        <p className="text-[13px] text-[#141414] dark:text-[#F6F4F0]">{change.after}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex items-start">
                    <p className="text-[15px] font-light leading-[1.8] text-[#716F69] dark:text-white/50">
                      {change.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#141414] dark:bg-[#0a0a0a] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
            <div>
              <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.14em] mb-4">04 — Before & After</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-bold leading-[1.15] text-[#F6F4F0]" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                Side-by-side comparison
              </h2>
            </div>

            <div className="flex items-center rounded-xl p-1 gap-1 bg-white/5">
              {(['side-by-side', 'before', 'after'] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`px-4 py-2 rounded-lg text-[13px] transition-all capitalize cursor-pointer border-none ${
                    activeView === view
                      ? 'bg-[#F6F4F0] text-[#141414] font-medium'
                      : 'text-white/50 hover:text-white/70'
                  }`}
                >
                  {view.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {activeView === 'side-by-side' && (
            <div className="grid gap-6 md:grid-cols-2">
              <BrowserMockup src="/portfolio_pradeep/images/projects/Comms_Academy_Old.png" alt="Before" label="Before" labelColor="#FF5F57" height="600px" />
              <BrowserMockup src="/portfolio_pradeep/images/projects/Comms_Academy_New.png" alt="After" label="After" labelColor="#28C840" height="600px" />
            </div>
          )}
          {activeView === 'before' && (
            <div className="max-w-2xl mx-auto">
              <BrowserMockup src="/portfolio_pradeep/images/projects/Comms_Academy_Old.png" alt="Before" label="Before" labelColor="#FF5F57" height="720px" />
            </div>
          )}
          {activeView === 'after' && (
            <div className="max-w-2xl mx-auto">
              <BrowserMockup src="/portfolio_pradeep/images/projects/Comms_Academy_New.png" alt="After" label="After" labelColor="#28C840" height="720px" />
            </div>
          )}
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#0E0E0E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#FF5500] uppercase tracking-[0.14em] mb-4">05 — Outcomes</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-bold leading-[1.15] text-[#F6F4F0] max-w-[560px] mb-6" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              A platform employees can actually use
            </h2>
            <p className="text-[15px] font-light leading-[1.75] text-white/50 max-w-[560px]">
              The redesign replaced a promotional showcase with a working utility. Every section now serves a clear user need, and the addition of AI tools gave the platform a meaningful new capability layer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px lg:grid-cols-4 bg-white/5 rounded-2xl overflow-hidden">
            {outcomes.map(({ stat, label }) => (
              <div key={label} className="px-8 py-8 bg-[#0E0E0E]">
                <p className="text-5xl font-bold text-[#FF5500] mb-2" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{stat}</p>
                <p className="text-[13px] text-white/45 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] text-white/30">
              Comms Academy Redesign · Amazon Customer Service · 2026
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
