"use client"

import { motion as Motion } from "framer-motion"
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Whether it’s an idea, a project, or just saying hi, feel free to reach out. 
          I’m just one message away.
        </Motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <Motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.6,
                },
              },
            }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-5">
            {/* Email */}
            <Motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="flex items-start gap-3"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shrink-0">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-medium font-semibold m-0 text-left">Email</span>
                <a
                  href="mailto:novendraanugrah@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-medium text-left"
                >
                  novendraanugrah@gmail.com
                </a>
              </div>
            </Motion.div>

            {/* Phone */}
            <Motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="flex items-start gap-3"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shrink-0">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-medium font-semibold m-0 text-left">Phone</span>
                <a
                  href="tel:+6281339160786"
                  className="text-muted-foreground hover:text-primary transition-colors text-medium text-left"
                >
                  +62 813 3916 0786
                </a>
              </div>
            </Motion.div>

            {/* Location */}
            <Motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="flex items-start gap-3"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shrink-0">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-medium font-semibold m-0 text-left">Location</span>
                <span className="text-muted-foreground text-medium m-0 text-left">
                  Semarang, Indonesia
                </span>
              </div>
            </Motion.div>
          </div>

            {/* Social Media */}
            <Motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="pt-8 text-center"
            >
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/novendra-anugrah-fitriatmoko-25ab9337b/" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="https://x.com/Vencynnn" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/n_vendraa/" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram />
                </a>
              </div>
            </Motion.div>
          </Motion.div>

          {/* RIGHT SIDE (FORM) */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl shadow-md border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Email..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  rows="4"
                  placeholder="Enter Your Message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
