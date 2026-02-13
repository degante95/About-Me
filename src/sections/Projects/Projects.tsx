import React from "react";
import {
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import tfIcon from "@/assets/icons/tficon.png"; // alias @ -> src

const projects = [
  {
    title: "Personal Site",
    description:
      "Built a modern personal site with full-screen landing, scroll-synced routing, sticky nav, dark mode, and mobile drawer.",
    hasLink: true,
    href: "https://github.com/degante95/About-Me",
    metrics: "Modern Design",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: Award,
  },
  {
    title: "Bend by FNBO",
    description:
      "Contributed to scaling FNBO's Bend platform by enhancing event-driven microservices and AWS-powered APIs, automating workflows, and improving efficiency for 6,000+ clients.",
    hasLink: false,
    metrics: "6,000+ clients",
    tags: ["AWS", "Microservices", "API"],
    icon: TrendingUp,
  },
  {
    title: "Milli Bank",
    description:
      "Contributed to Milli Bank's customer operations platform by improving load times, streamlining account closures, and enhancing the experience for 33,000+ users.",
    hasLink: false,
    metrics: "33,000+ users",
    tags: ["Performance", "UX", "Banking"],
    icon: Users,
  },
];

const certificates = [
  {
    title: "Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "2025",
    status: "Active",
    description:
      "Certifies core Terraform skills: HCL, modules, state, providers, and workflows.",
    tags: ["Terraform", "Infrastructure as Code", "State Management"],
    iconSrc: tfIcon,
    credentialId: "3e58aa62-5079-47b1-9b29-39c1a2075bc2",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2026",
    status: "coming soon",
    description:
      "Validates expertise in designing distributed systems and selecting appropriate AWS services for various requirements.",
    tags: ["AWS", "Cloud Architecture", "Distributed Systems"],
    icon: GraduationCap,
    credentialId: "",
  },
];

/**
 * Projects section component.
 * Displays a grid of project cards with titles, descriptions and links.
 */
const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[color:var(--color-heading)]">
            Projects &{" "}
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Projects, professional experience, and certifications that showcase
            my technical expertise and continuous learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="h-auto grid w-full grid-cols-1 sm:grid-cols-2 mb-12 p-0 divide-y sm:divide-y-0 sm:divide-x divide-[color:var(--color-border)] bg-[color:var(--color-bg)]/5 backdrop-blur-sm border border-[color:var(--color-border)] rounded-lg overflow-hidden">
              <TabsTrigger
                value="projects"
                className="h-10 px-3 flex-row cursor-pointer data-[state=active]:bg-gradient-to-r data-[state=active]:from-[color:var(--color-primary)]/20 data-[state=active]:to-[color:var(--color-secondary)]/20 data-[state=active]:text-foreground"
              >
                <Award className="shrink-0 w-4 h-4 mr-2" />
                <span className="min-w-0 text-center text-xs sm:text-sm leading-tight">
                  Projects &amp; Experience
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="certificates"
                className="h-10 px-3 flex-row cursor-pointer data-[state=active]:bg-gradient-to-r data-[state=active]:from-[color:var(--color-secondary)]/20 data-[state=active]:to-[color:var(--color-heading)]/20 data-[state=active]:text-foreground"
              >
                <GraduationCap className="shrink-0 w-4 h-4 mr-2" />
                <span className="min-w-0 text-center text-xs sm:text-sm leading-tight">
                  Certifications
                </span>
              </TabsTrigger>
            </TabsList>

            {/* Projects */}
            <TabsContent value="projects" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col border-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-300 relative overflow-hidden group">
                      {/* Primary top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[color:var(--color-primary)]" />

                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          {/* Primary icon chip */}
                          <div className="p-3 rounded-lg bg-[color:var(--color-primary)] shadow-lg">
                            <project.icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-white/10 text-xs"
                          >
                            {project.metrics}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-foreground transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="flex-1 text-base leading-relaxed mb-6 text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                          {project.description}
                        </CardDescription>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs bg-white/5 border-white/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {project.hasLink && (
                            <Button
                              asChild
                              variant="outline"
                              className="self-start border-white/20 hover:bg-white/10 group/btn"
                            >
                              <motion.a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.98 }}
                              >
                                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                View Project
                              </motion.a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Certificates */}
            <TabsContent value="certificates" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col border-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-300 relative overflow-hidden group">
                      {/* Primary top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[color:var(--color-primary)]" />

                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          {/* Primary icon chip */}
                          {cert.iconSrc ? (
                            // <div className="p-1">
                            <img
                              src={cert.iconSrc}
                              alt={`${cert.title} icon`}
                              className="h-16 w-16 object-contain"
                            />
                          ) : //*</div>*/
                          cert.icon ? (
                            <div className="p-3 mb-4 rounded-lg bg-[color:var(--color-primary)] shadow-lg">
                              <cert.icon className="h-6 w-6 text-white" />
                            </div>
                          ) : (
                            // optional fallback if neither iconSrc nor icon exists
                            <div className="p-3 rounded-lg bg-[color:var(--color-primary)] shadow-lg">
                              <span className="h-6 w-6" />
                            </div>
                          )}
                          <Badge
                            variant="secondary"
                            className={`bg-white/10 text-xs ${
                              cert.status === "Active"
                                ? "text-green-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {cert.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-foreground transition-colors">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {cert.issuer} • {cert.date}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="flex-1 text-base leading-relaxed mb-6 text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                          {cert.description}
                        </CardDescription>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {cert.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs bg-white/5 border-white/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="text-xs text-muted-foreground font-mono">
                            ID: {cert.credentialId}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
