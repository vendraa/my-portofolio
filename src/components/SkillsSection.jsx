"use client"

import { useState } from "react"
import { cn } from "../lib/utils"
import { motion as Motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  SiHtml5, SiJavascript, SiTypescript, SiTailwindcss, SiReact, 
  SiNodedotjs, SiMysql, SiPhp, SiGithub, SiFigma   
} from "react-icons/si"
import { VscVscodeInsiders } from "react-icons/vsc";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "Javascript", level: 95, category: "frontend", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Typescript", level: 95, category: "frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "React", level: 95, category: "frontend", icon: <SiReact className="text-cyan-500" /> },

  //Backend
  { name: "Node.js", level: 95, category: "backend", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MySQL", level: 95, category: "backend", icon: <SiMysql className="text-blue-600" /> },
  { name: "PHP", level: 95, category: "backend", icon: <SiPhp className="text-indigo-500" /> },

  //Tools
  { name: "Git/GitHub", level: 95, category: "tools", icon: <SiGithub className="text-gray-300" /> },
  { name: "Figma", level: 95, category: "tools", icon: <SiFigma /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscodeInsiders className="text-blue-500"  /> },
]


const categories = ["all", "frontend", "backend", "tools"]

// 🔹 Komponen kecil untuk tiap skill card
const SkillCard = ({ skill, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      {/* Icon + Nama Skill */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl">{skill.icon}</div>
        <h3 className="font-semibold text-lg">{skill.name}</h3>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <Motion.div
          className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          initial={{ width: 0 }}
          animate={inView ? { width: skill.level + "%" } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
    </Motion.div>
  )
}


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
