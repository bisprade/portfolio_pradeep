import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const featuredProjects = [
  {
    id: 'caboodle',
    title: 'Caboodle — Brand & Creative Asset Platform',
    description: 'Redesigned Amazon\'s brand asset platform from scratch. Drove adoption from 38% to 71% (+87%) and download completions hit 91%, passing 10,000+ unique downloads.',
    tags: ['Product Design', 'Visual Systems', 'UX Strategy'],
    image: '/images/projects/Caboodle.png',
    metric: '+87% adoption',
  },
  {
    id: 'cs-discovery',
    title: 'CS Discovery — Leadership Storytelling Platform',
    description: 'Content-forward experience for global leadership development. Platform adoption moved from 54% to 61%, toolkit downloads jumped 220%.',
    tags: ['UX Design', 'Research', 'Narrative Design'],
    image: '/images/projects/CS Discovery.png',
    metric: '+220% toolkit growth',
  },
  {
    id: 'virtual-onboarding',
    title: 'On-Demand Virtual Onboarding Platform',
    description: 'Custom-built onboarding experience — 90% task completion, 30% conversion lift through narrative sequencing and progressive disclosure.',
    tags: ['UX Design', 'Research', 'Platform Design'],
    image: '/images/projects/Onboarding_Platform.png',
    metric: '90% completion',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Selected Work
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platforms I've designed at Amazon — from strategy to shipping
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />

                {/* Project Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/80 to-[hsl(330,80%,60%)]/80 flex items-center justify-center p-8">
                  <p className="text-white text-lg md:text-xl font-bold text-center leading-tight drop-shadow-sm">
                    {project.title.split('—')[0].trim()}
                  </p>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm">
                    {project.metric}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-all"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>Request Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-3 text-sm font-medium transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
          >
            View All Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
