"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-20 top-20 h-8 w-8 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
        ></motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-32 top-40 h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"
        ></motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-32 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25"
        ></motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white/90 px-6 py-3 shadow-xl backdrop-blur-xl"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="h-3 w-3 rounded-full bg-green-500"
            ></motion.div>
            <span className="text-sm font-semibold tracking-wide text-gray-700">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
            <Sparkles size={16} className="text-yellow-500" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="relative mx-auto mb-12 h-48 w-48"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/50"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border border-purple-300/50"
            ></motion.div>

            <div className="absolute inset-8 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-6xl font-bold text-white shadow-2xl">
              UG
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 360, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3 shadow-lg"
            >
              <Code size={20} className="text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [360, 0, 360] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-2 -left-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 shadow-lg"
            >
              <Zap size={20} className="text-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              className="mb-6 text-7xl font-black leading-none md:text-9xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                UMAIR
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["100%", "0%", "100%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              >
                GHAFFAR
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              ></motion.div>
              <h2 className="pb-2 text-3xl font-bold text-gray-800 md:text-4xl">
                Software Engineer & AI Innovator
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-10 flex items-center justify-center gap-3"
          >
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2">
              <MapPin size={18} className="text-white" />
            </div>
            <span className="text-xl font-medium text-gray-600">
              Lahore, Pakistan
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mb-12"
          >
            <p className="mx-auto max-w-4xl text-2xl font-light leading-relaxed text-gray-700 md:text-3xl">
              Transforming ideas into{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                intelligent software solutions
              </motion.span>{" "}
              with{" "}
              <motion.span
                className="font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                2+ years
              </motion.span>{" "}
              of expertise in AI, full-stack development, and enterprise
              applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="hover:shadow-3xl group rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-6 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  <Mail className="mr-3" size={20} />
                  Let's Build Something Amazing
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-3" size={20} />
                  </motion.div>
                </Button>
              </motion.div>
            </a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/Umair_Ghaffar_Software_Engineer.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-2 border-gray-300 bg-white/80 px-10 py-6 text-lg font-semibold shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-400 hover:bg-white hover:shadow-2xl"
                >
                  <Download className="mr-3" size={20} />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/UMAIR936",
                label: "GitHub",
                gradient: "from-gray-700 to-gray-900",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/umair-ghaffar",
                label: "LinkedIn",
                gradient: "from-blue-600 to-blue-800",
              },
              {
                icon: Mail,
                href: "mailto:umairghaffar936@gmail.com",
                label: "Email",
                gradient: "from-green-500 to-emerald-600",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-2xl bg-gradient-to-r p-5 ${social.gradient} group relative overflow-hidden text-white shadow-xl transition-all duration-300 hover:shadow-2xl`}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <social.icon
                  size={28}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="mt-2 h-3 w-1 rounded-full bg-gray-400"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
