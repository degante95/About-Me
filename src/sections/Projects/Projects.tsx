import React from "react";
import {
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle,
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

const projects = [
  {
    title: "Personal Site",
    description:
      "Built a modern personal site with full-screen landing, scroll-synced routing, sticky nav, dark mode, and mobile drawer.",
    hasLink: true,
    metrics: "Modern Design",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: Award,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Bend by FNBO",
    description:
      "Contributed to scaling FNBO's Bend platform by enhancing event-driven microservices and AWS-powered APIs, automating workflows, and improving efficiency for 6,000+ clients.",
    hasLink: false,
    metrics: "6,000+ clients",
    tags: ["AWS", "Microservices", "API"],
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Milli Bank",
    description:
      "Contributed to Milli Bank's customer operations platform by improving load times, streamlining account closures, and enhancing the experience for 33,000+ users.",
    hasLink: false,
    metrics: "33,000+ users",
    tags: ["Performance", "UX", "Banking"],
    icon: Users,
    gradient: "from-blue-500 to-cyan-600",
  },
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    status: "coming soon",
    description:
      "Validates expertise in designing distributed systems and selecting appropriate AWS services for various requirements.",
    tags: ["AWS", "Cloud Architecture", "Distributed Systems"],
    icon: GraduationCap,
    gradient: "from-orange-500 to-red-600",
    credentialId: "AWS-ASA-2024-001",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    status: "Active",
    description:
      "Demonstrates skills in Kubernetes cluster management, troubleshooting, and application lifecycle management.",
    tags: ["Kubernetes", "DevOps", "Container Orchestration"],
    icon: CheckCircle,
    gradient: "from-blue-500 to-indigo-600",
    credentialId: "CKA-2023-789",
  },
];

/**
 * Projects section component.
 * Displays a grid of project cards with titles, descriptions and links.
 */
const Projects: React.FC = () => {
  // const projects: Project[] = [
  //   {
  //     title: "Personal Site",
  //     description:
  //       "Built a modern personal site with full-screen landing, scroll-synced routing, sticky nav, dark mode, and mobile drawer.",
  //     link: "https://github.com/degante95/About-Me",
  //   },
  //   {
  //     title: "Bend by FNBO",
  //     description:
  //       "Contributed to scaling FNBO’s Bend platform by enhancing event-driven microservices and AWS-powered APIs, automating workflows, and improving efficiency for 6,000+ clients.",
  //   },
  //   {
  //     title: "Milli Bank",
  //     description:
  //       "Contributed to Milli Bank’s customer operations platform by improving load times, streamlining account closures, and enhancing the experience for 33,000+ users.",
  //   },
  // ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[color:var(--color-heading)]">
            Experience &{" "}
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] bg-clip-text text-transparent">
              Projects
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
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-[color:var(--color-bg)]/5 backdrop-blur-sm border border-[color:var(--color-border)]">
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[color:var(--color-primary)]/20 data-[state=active]:to-[color:var(--color-secondary)]/20 data-[state=active]:text-foreground"
              >
                <Award className="w-4 h-4 mr-2" />
                Projects & Experience
              </TabsTrigger>
              <TabsTrigger
                value="certificates"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[color:var(--color-secondary)]/20 data-[state=active]:to-[color:var(--color-heading)]/20 data-[state=active]:text-foreground"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Certifications
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
                              variant="outline"
                              className="self-start border-white/20 hover:bg-white/10 group/btn"
                            >
                              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              View Project
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                          <div className="p-3 rounded-lg bg-[color:var(--color-primary)] shadow-lg">
                            <cert.icon className="h-6 w-6 text-white" />
                          </div>
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
