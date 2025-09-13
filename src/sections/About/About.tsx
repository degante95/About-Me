import React from "react";
// import { ResumeModal } from "../Resume/Resume";
import { motion } from "framer-motion";

/**
 * About section component.
 * This section contains a brief biography.
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-2 h-2 rounded-full opacity-40 bg-[color:var(--color-secondary)]"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-3 h-3 rounded-full opacity-30 bg-[color:var(--color-primary)]"
        animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-8 text-[color:var(--color-heading)]">
            About{" "}
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My background in a nutshell skills, focus areas, and a bit of
            personality.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
            style={{
              background: "color-mix(in lab, var(--color-bg) 95%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/5 to-[color:var(--color-secondary)]/5" />
            <p className="text-lg leading-relaxed relative z-10">
              A Software Engineer with a strong background in full-stack
              development—proficient in Java, TypeScript, and building scalable
              applications on AWS. I enjoy bringing ideas to life, from crafting
              robust RESTful APIs to designing intuitive, modern web
              experiences.
            </p>
          </div>
          <div
            className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
            style={{
              background: "color-mix(in lab, var(--color-bg) 95%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-secondary)]/5 to-[color:var(--color-heading)]/5" />
            <p className="text-lg leading-relaxed relative z-10">
              Outside of work, I'm a husband and father who loves gaming,
              fishing, playing fútbol (soccer), and getting outdoors whenever I
              can. Whether I'm exploring new tech or new trails, I'm always
              learning and always looking for the next adventure.
            </p>
          </div>
          <div
            className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
            style={{
              background: "color-mix(in lab, var(--color-bg) 95%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-heading)]/5 to-[color:var(--color-primary)]/5" />
            <p className="text-lg leading-relaxed relative z-10">
              I value collaboration, open communication, and seeing projects
              through from start to finish. If you want to talk code, sports, or
              just share a great fishing story, let's connect!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// <section id="about" className="section">
//   <h2 className="text-3xl md:text-5xl mb-4">About Me</h2>
//   <p>
//     A Software Engineer with a strong background in full-stack
//     development—proficient in Java, TypeScript, and building scalable
//     applications on AWS. I enjoy bringing ideas to life, from crafting
//     robust RESTful APIs to designing intuitive, modern web experiences.
//   </p>
//   <p>
//     Outside of work, I’m a husband and father who loves gaming, fishing,
//     playing fútbol (soccer), and getting outdoors whenever I can. Whether
//     I’m exploring new tech or new trails, I’m always learning and always
//     looking for the next adventure.
//   </p>
//   <p>
//     I’m value collaboration, open communication, and seeing projects through
//     from start to finish. If you want to talk code, sports, or just share a
//     great fishing story, let’s connect!
//   </p>
// </section>
