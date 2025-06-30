"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "umairghaffar936@gmail.com",
    href: "mailto:umairghaffar936@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-3312518936",
    href: "tel:+923312518936",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    gradient: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/UMAIR936",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/umair-ghaffar",
    gradient: "from-blue-600 to-blue-800",
  },
];

const quickActions = [
  {
    icon: MessageCircle,
    title: "Quick Chat",
    description: "Let's discuss your project",
    action: "Start Conversation",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a 30-minute call",
    action: "Book Now",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            Let's Connect
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Get In
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Ready to bring your ideas to life? Let's discuss your next project
            and explore how we can work together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 grid gap-6 md:grid-cols-2"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white">
                  <action.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {action.title}
                  </h3>
                  <p className="text-gray-600">{action.description}</p>
                </div>
              </div>
              <Button className="w-full rounded-xl bg-gray-900 text-white hover:bg-gray-800">
                {action.action}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
                <p className="text-gray-600">
                  Multiple ways to reach out and connect
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-gray-50"
                  >
                    <div
                      className={`rounded-xl bg-gradient-to-r p-3 ${info.gradient} text-white shadow-lg`}
                    >
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-gray-600 transition-colors hover:text-blue-600"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-600">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Follow Me
                </CardTitle>
                <p className="text-gray-600">
                  Stay connected on social platforms
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 rounded-xl bg-gradient-to-r p-4 ${social.gradient} group text-center text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                    >
                      <social.icon
                        size={24}
                        className="mx-auto mb-2 transition-transform group-hover:scale-110"
                      />
                      <p className="font-medium">{social.label}</p>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send a Message
                </CardTitle>
                <p className="text-gray-600">
                  I'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="rounded-xl border-gray-200 bg-white/80 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="rounded-xl border-gray-200 bg-white/80 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <Input
                      placeholder="Project Discussion"
                      className="rounded-xl border-gray-200 bg-white/80 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project, timeline, and requirements..."
                      rows={6}
                      className="resize-none rounded-xl border-gray-200 bg-white/80 focus:border-blue-500"
                    />
                  </div>
                  <Button className="group w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                    <Send
                      size={18}
                      className="mr-2 transition-transform group-hover:translate-x-1"
                    />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
