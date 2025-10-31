"use client"

import { Zap, Paintbrush as PaintBrush, Code } from "lucide-react"

const services = [
  {
    icon: PaintBrush,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces that prioritize user experience and modern aesthetics.",
    skills: ["Responsive Design", "User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building full-stack web applications with modern technologies and best practices.",
    skills: ["React.js", "Node.js", "Next.js", "Database Design"],
  },
  {
    icon: Zap,
    title: "Machine Learning Solutions",
    description: "Developing intelligent systems and models for real-world problem solving.",
    skills: ["Model Development", "Data Analysis", "Deployment", "Optimization"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Specialized expertise in creating end-to-end solutions that combine intelligent algorithms with beautiful
              design.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="mb-4 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Key Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-primary/5 text-primary rounded border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
