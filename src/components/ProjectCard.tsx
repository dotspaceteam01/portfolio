import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Layers } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-hover overflow-hidden"
    >
      <div
        className="p-6 md:p-8 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold font-display">
                {String(project.id).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
            <div className="flex items-center gap-2 mt-4">
              <Layers size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground font-medium">{project.techStack}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground mt-2 shrink-0"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border/50">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-2 font-display uppercase tracking-wide">Problem Statement</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 font-display uppercase tracking-wide">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(project.link || project.credentials) && (
                <div className="flex flex-wrap items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:brightness-125 transition-all font-medium"
                    >
                      <ExternalLink size={14} />
                      Visit Project
                    </a>
                  )}
                  {project.credentials && (
                    <span className="text-xs text-muted-foreground glass px-3 py-1.5 rounded-lg">
                      Demo: {project.credentials.username} / {project.credentials.password}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
