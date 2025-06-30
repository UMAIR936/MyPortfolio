"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "C++"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material-UI",
      "Chakra UI",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Backend & Tools",
    icon: Server,
    skills: [
      "Nest.js",
      "Node.js",
      "Express",
      "Prisma",
      "Socket.IO",
      "Stripe",
      "Strapi",
      "AWS Lambda",
      "Langchain",
    ],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "Supabase",
      "Firebase/Firestore",
      "PostgreSQL",
      "DynamoDB",
      "Pinecone",
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
];

const certifications = [
  {
    title: "React - The Complete Guide (incl Hooks, Router, Redux)",
    provider: "Udemy",
    id: null,
    featured: true,
  },
  {
    title: "Modern JavaScript: ES6 Basics",
    provider: "Udemy",
    id: "5EHDYTNVE9UJ",
    featured: true,
  },
  {
    title: "Succeeding in Web Development: Full Stack and Front End",
    provider: "LinkedIn",
    id: null,
    featured: false,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            Technical Expertise
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Skills &
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional software
          </p>
        </motion.div>

        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`h-full border-0 bg-gradient-to-br transition-all duration-500 hover:shadow-2xl ${category.bgGradient} group`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl bg-gradient-to-r p-4 ${category.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <category.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600">
                        {category.skills.length} Technologies
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-4 text-white shadow-lg">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Professional Certifications
                  </h3>
                  <p className="font-medium text-gray-600">
                    Continuous learning and skill development
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="relative"
                  >
                    <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      {cert.featured && (
                        <div className="absolute -right-2 -top-2">
                          <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 p-2 shadow-lg">
                            <Star size={16} className="text-white" />
                          </div>
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="mb-2 font-bold leading-tight text-gray-900">
                          {cert.title}
                        </h4>
                        <p className="font-medium text-gray-600">
                          {cert.provider}
                        </p>
                      </div>

                      {cert.id && (
                        <Badge
                          variant="outline"
                          className="border-blue-200 bg-blue-50 text-blue-700"
                        >
                          ID: {cert.id}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
