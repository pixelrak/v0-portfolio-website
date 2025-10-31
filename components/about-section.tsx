"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A passionate machine learning engineer and web developer focused on creating impactful solutions for
              communities.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I'm a machine learning engineer with a BTech in Computer Science (AI & ML specialization) from VIT
                  Chennai, graduating in 2029. My journey combines technical expertise with a deep commitment to
                  community-driven innovation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Philosophy</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I believe in using technology to solve real-world problems and create positive community impact.
                  Whether through machine learning models or web applications, I focus on building solutions that
                  matter.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary">Experience</h3>

              {/* Timeline item */}
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="font-semibold text-lg text-foreground">Junior ML Engineer</h4>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                  <p className="text-foreground/80 mt-2">
                    Building and optimizing machine learning models for real-world applications.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-2">
                  <h4 className="font-semibold text-lg text-foreground">Web Development Intern</h4>
                  <p className="text-sm text-muted-foreground">2024</p>
                  <p className="text-foreground/80 mt-2">
                    Developed responsive web applications using React.js and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-primary">BTech in Computer Science</h4>
                <p className="text-muted-foreground">AI & ML Specialization</p>
                <p className="text-foreground/80">VIT Chennai • Graduating 2029</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
