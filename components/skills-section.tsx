"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const skillsData = [
  { name: "Machine Learning", value: 90 },
  { name: "Python", value: 88 },
  { name: "React.js", value: 85 },
  { name: "Node.js", value: 82 },
  { name: "UI/UX Design", value: 80 },
  { name: "Web Development", value: 87 },
]

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Analysis", "NLP", "Computer Vision"],
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code", "Linux"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit built through hands-on experience in ML and web development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Chart */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Proficiency Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
