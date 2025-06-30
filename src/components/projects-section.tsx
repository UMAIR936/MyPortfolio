"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Bot,
  Brain,
  FileText,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot Development Platform",
    description:
      "End-to-end platform for custom AI chatbot creation, training, and deployment with scalable WebSocket backend and comprehensive analytics dashboard.",
    icon: Bot,
    tags: ["Next.js", "WebSocket", "AI/ML", "Analytics", "SDK"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    featured: true,
    features: [
      "Custom AI chatbot creation and training",
      "Scalable WebSocket backend architecture",
      "Real-time analytics dashboard",
      "Multiple deployment options (widgets, SDK)",
      "E-commerce and CMS integrations",
    ],
  },
  {
    title: "Catalyser AI Module",
    description:
      "Intelligent AI components for Catalyser SaaS enabling automated answer generation, dynamic visualizations, and smart report scheduling.",
    icon: Brain,
    tags: ["AI/ML", "SaaS", "Automation", "Visualizations"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    featured: true,
    features: [
      "Automated answer generation",
      "Dynamic data visualizations",
      "Smart report scheduling",
      "SaaS platform integration",
      "Intelligent component architecture",
    ],
  },
  {
    title: "Serverless Brand Analysis API",
    description:
      "AWS Lambda-powered API with DynamoDB, LangChain integration for automated brand data extraction and Pinecone vector database for intelligent analysis.",
    icon: BarChart3,
    tags: ["AWS Lambda", "DynamoDB", "LangChain", "Pinecone", "Serverless"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    featured: false,
    features: [
      "Serverless architecture with AWS Lambda",
      "Automated brand data extraction",
      "Vector database integration",
      "Intelligent similarity search",
      "Scalable data processing pipeline",
    ],
  },
  {
    title: "Legal Document AI Generator",
    description:
      "Web-based platform generating country-specific legal documents using AI to interpret and apply local legal frameworks with precision.",
    icon: FileText,
    tags: ["AI/ML", "Legal Tech", "Document Generation", "Web Platform"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    featured: false,
    features: [
      "Country-specific legal documents",
      "AI-powered legal interpretation",
      "Local framework application",
      "Automated document generation",
      "Compliance verification system",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white to-gray-50/50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            Featured Work
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Project
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Showcase
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            A curated selection of my most impactful projects, showcasing
            innovation in AI, full-stack development, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {project.featured && (
                <div className="absolute -right-3 -top-3 z-10">
                  <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 p-2 shadow-lg">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
              )}

              <Card
                className={`h-full border-0 bg-gradient-to-br transition-all duration-500 hover:shadow-2xl ${project.bgGradient} group overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`rounded-2xl bg-gradient-to-r p-4 ${project.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <project.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-2xl text-gray-900 transition-colors group-hover:text-gray-700">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/80 text-xs font-medium text-gray-700 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="mb-6 text-lg font-medium leading-relaxed text-gray-700">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="mb-4 text-lg font-bold text-gray-900">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}
                          ></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn flex-1 border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Github
                        size={16}
                        className="mr-2 transition-transform group-hover/btn:scale-110"
                      />
                      View Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn flex-1 border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <ExternalLink
                        size={16}
                        className="mr-2 transition-transform group-hover/btn:scale-110"
                      />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="group rounded-full bg-gray-900 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
          >
            View All Projects
            <ArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={18}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
