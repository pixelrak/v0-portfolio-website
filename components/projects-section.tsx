"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent chatbot leveraging machine learning for enhanced customer service and user engagement.",
    technologies: ["TensorFlow", "Python", "React.js", "Node.js"],
    highlights: ["NLP Integration", "Real-time Chat", "ML-Powered Responses"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Community Event Platform",
    description: "Full-stack platform designed to manage and promote community events with seamless user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: ["Event Management", "User Profiles", "Community Features"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects, skills, and professional journey.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    highlights: ["Responsive Design", "SEO Optimized", "Smooth Animations"],
    color: "from-secondary/20 to-secondary/5",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A showcase of notable work demonstrating expertise in ML, web development, and design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg`}
              >
                {/* Image placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-center space-y-2 opacity-60">
                    <div className="text-sm font-medium text-foreground/60">Project Preview</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors text-sm font-medium">
                      <ExternalLink size={16} />
                      View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition-colors text-sm font-medium">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
