"use client"

import { motion as Motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

const projects = [
  {
    id: 1,
    title: "SIGAP",
    description: "Sistem Informasi Gizi Anak Pudakpayung",
    images: "/projects/sigap.png",
    tags: ["Next.js", "Tailwind CSS"],
    demoUrl: "https://sigap-inky.vercel.app/",
    githubUrl: "#",
  },
]

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary"> Projects</span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Take a look at my featured projects — built with 
          passion, precision, and a strong commitment to creating smooth user experiences.
        </Motion.p>

        {/* Projects Grid */}
        <div
          className={`grid gap-8 ${
              projects.length === 1
              ? "place-items-center" // kalau cuma 1 project, otomatis center
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // kalau lebih dari 1, pakai grid biasa
          }`}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-56 flex items-center justify-center bg-muted">
                <img
                  src={project.images}
                  alt={project.title}
                  className="max-h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-center items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Github Button */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/vendraa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </Motion.div>
      </div>
    </section>
  )
}
