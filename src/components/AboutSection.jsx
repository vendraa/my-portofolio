import { Code, Cpu, Server } from "lucide-react";
import { motion as Motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <Motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              Computer Engineering Student at Diponegoro University
            </h3>

            <p className="text-muted-foreground text-justify">
              I am currently pursuing my bachelor’s degree in Computer Engineering at Universitas Diponegoro. 
              Throughout my studies, I’ve developed a strong interest in{" "}
              <span className="text-primary font-medium">Software and Web Development</span>, 
              <span className="text-primary font-medium"> Computer Networks</span>, and{" "}
              <span className="text-primary font-medium">Artificial Intelligence</span>. 
              Recently, I have also started exploring{" "}
              <span className="text-primary font-medium">Web3 technologies</span>, 
              as I believe they hold great potential for the future of the internet.
            </p>

            <p className="text-muted-foreground text-justify">
              With a passion for building impactful solutions, I constantly seek opportunities to 
              learn, collaborate, and contribute to innovative projects that combine technology 
              with real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/CV.pdf"
                download
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </Motion.div>

          {/* Right side */}
          <Motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <Code className="h-6 w-6 text-primary" />, title: "Web Development", desc: "Building responsive websites and web applications using modern frameworks and best practices." },
              { icon: <Server className="h-6 w-6 text-primary" />, title: "Computer Networks", desc: "Understanding and designing reliable, secure, and efficient networking systems." },
              { icon: <Cpu className="h-6 w-6 text-primary" />, title: "AI & Web3", desc: "Exploring Artificial Intelligence applications and learning about decentralized Web3 technologies." }
            ].map((item, idx) => (
              <Motion.div
                key={idx}
                className="gradient-border p-6 card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};
