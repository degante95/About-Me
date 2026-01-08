import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Sparkles } from "lucide-react";
import { Button } from "@components/ui/button";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/20 via-background to-[color:var(--color-secondary)]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 rounded-full opacity-60 bg-[color:var(--color-primary)]"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-20 w-1 h-1 rounded-full opacity-50 bg-[color:var(--color-secondary)]"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 rounded-full opacity-40 bg-[color:var(--color-heading)]"
        animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[color:var(--color-primary)]" />
            <span className="text-sm text-[color:var(--color-primary)]">
              Lets connect!
            </span>
          </motion.div>

          <h1 className="mb-4 text-4xl md:text-7xl text-[color:var(--color-heading)]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)] bg-clip-text text-transparent">
              Carlos Degante
            </span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Driven software engineer dedicated to solving complex problems and
            embracing new technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="w-full border-0 shadow-lg sm:w-auto bg-gradient-to-r from-[color:var(--color-cta-bg)] to-[color:var(--color-secondary)] hover:brightness-105"
            style={{
              boxShadow:
                "0 10px 25px color-mix(in lab, var(--color-primary) 25%, transparent)",
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("#connect")}
            className="w-full sm:w-auto backdrop-blur-sm"
            style={{
              borderColor:
                "color-mix(in lab, var(--color-cta-bg) 30%, transparent)",
              background: "color-mix(in lab, var(--color-bg) 70%, transparent)",
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in touch
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">Scroll to explore</p>
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full backdrop-blur-sm transition-colors"
            style={{
              background: "color-mix(in lab, var(--color-bg) 92%, transparent)",
              border: "1px solid var(--color-border)",
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-foreground/70 hover:text-[color:var(--color-heading)] transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
