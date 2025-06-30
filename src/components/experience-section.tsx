"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "Texagon",
    location: "Lahore",
    period: "Nov 2023 - Present",
    type: "On-site",
    current: true,
    description:
      "Leading development of enterprise AI solutions and scalable SaaS platforms",
    achievements: [
      "Led development of 12+ enterprise applications including AI chatbot platforms",
      "Built full-stack solutions using Next.js, React, Node.js, and Nest.js",
      "Architected serverless systems with AWS services and WebSocket implementations",
      "Designed intelligent systems with NLP and vector databases for real-time processing",
      "Managed cross-functional teams from project conception to production deployment",
    ],
    technologies: ["Next.js", "React", "Node.js", "AWS", "AI/ML", "WebSocket"],
  },
  {
    title: "Junior Software Engineer",
    company: "Devaxl",
    location: "Lahore",
    period: "Feb 2023 - Sept 2023",
    type: "Remote",
    current: false,
    description:
      "Developed transportation management systems with focus on operational efficiency",
    achievements: [
      "Built carrier onboarding and dispatch management features for TMS",
      "Created responsive interfaces with React and TypeScript",
      "Implemented RESTful APIs using Express.js and MongoDB",
      "Improved operational efficiency through streamlined communication workflows",
      "Delivered comprehensive load dispatching and reporting functionalities",
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Game Designer Intern",
    company: "Mindstorm Studios",
    location: "Lahore",
    period: "July 2022 - Oct 2022",
    type: "Remote",
    current: false,
    description:
      "Gained foundational experience in game development and design methodologies",
    achievements: [
      "Completed comprehensive game development apprenticeship program",
      "Participated in competitive game jam and developed FPS game",
      "Learned game design principles and development workflows",
      "Collaborated with creative teams on interactive entertainment projects",
    ],
    technologies: ["Game Development", "Unity", "C#", "Game Design"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            Professional Journey
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Experience &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Growth
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            A timeline of my professional development and the impact I've made
            across different organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300 lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 z-10 hidden h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg lg:block"></div>

                <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl lg:ml-20">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              Current
                            </Badge>
                          )}
                        </div>

                        <div className="mb-4 flex flex-wrap items-center gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building size={18} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="mb-4 text-lg font-medium text-gray-700">
                          {exp.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-3 lg:items-end">
                        <Badge
                          variant="outline"
                          className="border-blue-200 text-blue-700"
                        >
                          {exp.type}
                        </Badge>
                        <ArrowUpRight
                          className="text-gray-400 transition-colors group-hover:text-blue-500"
                          size={20}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="mb-4 text-lg font-semibold text-gray-900">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-gray-900">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
