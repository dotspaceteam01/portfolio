import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Particles from "react-tsparticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Particle Neural Network */}
      <Particles
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: "#00e5ff" },
            size: { value: 2 },
            move: { speed: 0.6 },
            links: {
              enable: true,
              distance: 150,
              opacity: 0.2,
              color: "#00e5ff"
            }
          }
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-radial-glow-purple" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[100px] opacity-20"
        style={{ background: "#00e5ff" }}
      />

      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "#8b5cf6" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >

          <span className="text-foreground">Building the</span>
          <br />

          <span className="gradient-text glow-text">
            Future with AI
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          We design intelligent AI systems, automation tools, and modern web platforms
          that push innovation forward.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-primary hover:brightness-110 transition-all duration-300 glow-border"
          >
            View Our Work
          </a>

          <a
            href="#team"
            className="px-8 py-4 rounded-xl font-semibold text-foreground glass-hover"
          >
            Core Team
          </a>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>

    </section>
  );
};

export default HeroSection;