import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Nirupam Asmar", linkedin: "https://www.linkedin.com/in/nirupam-asmar-05695425a" , image: "/pic/niru.jpeg",  position: "object-[50%_12%]" },
  { name: "Utkarsh Shukla", linkedin: "https://www.linkedin.com/in/t-utkarsh-shukla/" ,image: "/pic/utk.jpeg"},
  { name: "Sandeep Reddy", 
    linkedin: "https://www.linkedin.com/in/sandeep-reddy-6877b6223",
    image: "/pic/san.jpeg" },
  { 
    name: "Dhananjay Nerkar",
    linkedin: "https://www.linkedin.com/in/dhananjay-nerkar-b4944b25a/",
    image: "/pic/Dhanu.jpeg"
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Team
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Meet Our Engineers</span>
          </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {team.map((member, i) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover p-8 text-center group"
            >

              {/* Profile Image */}
{member.image ? (
  <img
  src={member.image}
  alt={member.name}
  className={`w-32 h-32 rounded-full object-cover ${member.position || "object-center"} mx-auto mb-5 border-2 border-primary/40 shadow-lg transition-transform duration-300 group-hover:scale-110`}
/>
) : (
  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-5 flex items-center justify-center text-primary font-display text-3xl font-bold group-hover:bg-primary/20 transition-colors">
    {member.name.split(" ").map(n => n[0]).join("")}
  </div>
)}

              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {member.name}
              </h3>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;