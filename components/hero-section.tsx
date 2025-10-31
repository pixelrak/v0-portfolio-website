"use client"

import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Rakshandoss
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                Machine Learning Engineer & Web Development Enthusiast
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              I craft intelligent solutions using machine learning while building beautiful, responsive web experiences.
              Passionate about community-driven projects and innovation.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right image placeholder */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/50 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">Profile Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  )
}
