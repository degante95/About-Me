import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTerraform,
  SiKubernetes,
  SiIstio,
  SiGit,
  SiGitlab,
  SiIntellijidea,
  SiWebstorm,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import s from "./Tech.module.css";
import { motion } from "framer-motion";

const techStack = [
  { icon: <SiTypescript title="TypeScript" />, name: "TypeScript" },
  { icon: <SiJavascript title="JavaScript" />, name: "JavaScript" },
  { icon: <SiReact title="ReactJS" />, name: "ReactJS" },
  { icon: <SiNodedotjs title="Node.js" />, name: "Node.js" },
  { icon: <FaAws title="AWS" />, name: "AWS" },
  { icon: <SiTerraform title="Terraform" />, name: "Terraform" },
  { icon: <SiKubernetes title="Kubernetes" />, name: "Kubernetes" },
  { icon: <SiIstio title="Istio" />, name: "Istio" },
  { icon: <SiGit title="Git" />, name: "Git" },
  { icon: <SiGitlab title="GitLab" />, name: "GitLab" },
  { icon: <SiIntellijidea title="IntelliJ" />, name: "IntelliJ" },
  { icon: <SiWebstorm title="WebStorm" />, name: "WebStorm" },
];

const Tech: React.FC = () => (
  <section id="tech" className="min-h-screen py-20 px-6 relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl mb-4">
          Tech I{" "}
          <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] bg-clip-text text-transparent">
            Use
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I use to
          build scalable applications
        </p>
      </motion.div>
    </div>
    {/* A couple random orbs (token colors) */}
    <motion.div
      className="absolute bottom-24 right-16 w-3 h-3 rounded-full opacity-30 bg-[color:var(--color-secondary)]"
      animate={{ y: [0, 18, 0], x: [0, -12, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className={s.grid}>
          {techStack.map((tech) => (
            <div className={s.item} key={tech.name}>
              <span className={s.icon}>{tech.icon}</span>
              <span className={s.label}>{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Tech;
