import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 7,
    suffix: '+',
    label: 'Years at Amazon',
    description: 'End-to-end product design for global platforms',
  },
  {
    number: 87,
    suffix: '%',
    label: 'Adoption Growth',
    description: 'Caboodle platform adoption from 38% to 71%',
  },
  {
    number: 10,
    suffix: 'K+',
    label: 'Unique Downloads',
    description: '91% download completion rate on Caboodle',
  },
  {
    number: 220,
    suffix: '%',
    label: 'Toolkit Growth',
    description: 'CS Discovery toolkit downloads increase',
  },
]

function AnimatedNumber({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * target))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-display gradient-text">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Numbers That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results from treating design as craft, not just a checkbox
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center p-8 rounded-2xl glass-card transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="mb-4">
                  <AnimatedNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>

                <h3 className="text-base font-bold font-display mb-2 text-foreground">
                  {stat.label}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl glass-card">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "I stopped treating platforms like tools and started treating them like experiences — 
              visual browsing, smart previews, contextual recommendations. When the flow respects 
              people's time, they finish what they start."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
