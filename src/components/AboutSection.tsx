import { motion } from "framer-motion";
import { Brain, Code, Cpu, Zap } from "lucide-react";

const capabilities = [
{ icon: Brain, title: "AI & LLM Systems", desc: "Multi-agent architectures, fine-tuning, and prompt engineering" },
{ icon: Code, title: "Full-Stack Development", desc: "End-to-end web and mobile solutions with modern frameworks" },
{ icon: Cpu, title: "XR & Computer Vision", desc: "VR/AR systems, stereoscopic vision, and spatial computing" },
{ icon: Zap, title: "Workflow Automation", desc: "AI-driven task management and intelligent process automation" }];


const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50 px-0 my-0" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            PROJECTS WE HAVE WORKED ON

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-hover p-8 text-center group cursor-default">
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl text-primary mb-5 transition-colors bg-[#0e0a52]">
                <cap.icon size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;