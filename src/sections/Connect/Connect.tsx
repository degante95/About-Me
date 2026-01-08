import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Card } from "@components/ui/card";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/degante95",
    description: "Check out my code",
    hoverColor: "hover:shadow-gray-500/25",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/carlos-degante-3677a815a",
    description: "Let's connect",
    hoverColor: "hover:shadow-blue-500/25",
  },
];
/**
 * Connect section component.
 */
const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-20 px-6 relative overflow-hidden">
      {/* Floating Elements (tokenized) */}
      <motion.div
        className="absolute top-20 right-10 w-2 h-2 rounded-full opacity-40 bg-[color:var(--color-secondary)]"
        animate={{ y: [0, -15, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-3 h-3 rounded-full opacity-30 bg-[color:var(--color-primary)]"
        animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-[color:var(--color-heading)]">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Always happy to connect about new opportunities, interesting
            projects, or anything tech. Reach out on any platform below!
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {socialLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block w-[280px] group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="h-full min-h-[200px] p-6 border-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ">
                      <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary)] mx-auto mb-4 flex items-center justify-center shadow-lg transition-colors group-hover:bg-[color:var(--color-secondary)]">
                        <link.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-medium mb-2 text-center">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        {link.description}
                      </p>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Tokenized response badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
            style={{
              background:
                "color-mix(in lab, var(--color-primary) 10%, transparent)",
              border:
                "1px solid color-mix(in lab, var(--color-primary) 20%, transparent)",
            }}
          >
            <MessageCircle className="w-4 h-4 text-[color:var(--color-primary)]" />
            <span className="text-sm text-[color:var(--color-primary)]">
              Usually responds within 24 hours
            </span>
          </div>

          <div className="pt-8 border-t border-[color:var(--color-border)]">
            <p className="text-muted-foreground">
              © 2025 Carlos Degante. Crafted with React, TypeScript, and lots
              of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
