"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Users, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    {
      icon: Code,
      label: "Years Experience",
      value: "2+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      label: "Projects Delivered",
      value: "15+",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      label: "Success Rate",
      value: "100%",
      color: "from-green-500 to-green-600",
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Performance Focused",
      desc: "Optimized applications for maximum efficiency",
    },
    {
      icon: Target,
      title: "Results Driven",
      desc: "Delivered measurable business impact",
    },
    {
      icon: Users,
      title: "Team Player",
      desc: "Collaborative approach to complex projects",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            About Me
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Excellence
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Passionate about transforming ideas into powerful software solutions
            that drive innovation and business growth
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 grid gap-8 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 bg-white/80 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div
                    className={`mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              My Journey
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                My journey in software engineering began with a fascination for
                solving complex problems through code. Over the past 2+ years,
                I've evolved from a curious developer into a seasoned engineer
                who specializes in building scalable, high-performance
                applications.
              </p>
              <p>
                At <span className="font-semibold text-gray-800">Texagon</span>,
                I lead the development of enterprise-grade AI solutions,
                architecting systems that process real-time data and deliver
                intelligent insights. My expertise spans the full technology
                stack, from React and Next.js frontends to Node.js backends and
                cloud infrastructure.
              </p>
              <p>
                I'm passionate about emerging technologies, particularly AI and
                machine learning, and I continuously push the boundaries of
                what's possible in software development. Every project is an
                opportunity to create something exceptional.
              </p>
            </div>
          </motion.div>

          {/* Highlights & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white shadow-lg">
                    <highlight.icon size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-gray-900">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">{highlight.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <Card className="border-0 bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-3 text-white">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Bachelor of Science: Computer Science
                    </h4>
                    <p className="font-medium text-gray-600">
                      COMSATS University, Lahore
                    </p>
                    <p className="text-sm text-gray-500">Jan 2019 – Feb 2023</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900">
                      FSc: Pre-Engineering
                    </h4>
                    <p className="font-medium text-gray-600">
                      Punjab Group of Colleges, Lahore
                    </p>
                    <p className="text-sm text-gray-500">2016 – 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
