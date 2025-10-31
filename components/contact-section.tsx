"use client"

import type React from "react"

import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 p-4 bg-primary/10 w-fit mx-auto rounded-lg">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a href="mailto:rakshandossm@gmail.com" className="text-primary hover:underline break-all">
                rakshandossm@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 p-4 bg-accent/10 w-fit mx-auto rounded-lg">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <a href="tel:+919864739306" className="text-accent hover:underline">
                +91 986-473-9306
              </a>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-4 text-center">Social</h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
