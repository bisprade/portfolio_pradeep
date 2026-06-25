import { motion } from 'framer-motion'
import {
  Palette,
  Search,
  Layout,
  Users,
  Code,
  Cpu,
  Zap,
  Heart,
  MessageSquare,
  Target,
  Sparkles,
  Film,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Design & Systems',
    description: 'Deep expertise in visual craft and user-centered design',
    icon: Palette,
    color: 'primary',
    skills: [
      { name: 'User Research & Testing', icon: Search },
      { name: 'Information Architecture', icon: Layout },
      { name: 'Wireframing & Prototyping', icon: Palette },
      { name: 'Visual Systems & Theming', icon: Target },
      { name: 'Design Systems', icon: Layout },
      { name: 'Figma (Advanced)', icon: Palette },
    ],
  },
  {
    title: 'Motion & Development',
    description: 'Motion, prototyping, code, and AI for end-to-end execution',
    icon: Film,
    color: 'accent',
    skills: [
      { name: 'After Effects', icon: Film },
      { name: 'Figma Prototyping', icon: Zap },
      { name: 'HTML, CSS, JavaScript', icon: Code },
      { name: 'React', icon: Cpu },
      { name: 'Midjourney & ChatGPT', icon: Sparkles },
      { name: 'Figma AI', icon: Sparkles },
    ],
  },
  {
    title: 'Strategy & Leadership',
    description: 'Storytelling and collaboration that gets work funded and shipped',
    icon: Heart,
    color: 'secondary',
    skills: [
      { name: 'Stakeholder Storytelling', icon: Heart },
      { name: 'Cross-functional Collaboration', icon: Users },
      { name: 'Vision Presentations', icon: MessageSquare },
      { name: 'Miro & Notion', icon: Layout },
      { name: 'Quip & Jira', icon: Target },
      { name: 'Workshop Facilitation', icon: Users },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Tools & Craft
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where visual design, motion, code, and strategy converge
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl glass-card p-8 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <SkillIcon className="h-4 w-4 text-primary/70 flex-shrink-0" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
