"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cpu,
  Shield,
  Check,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Gradient Background with enhanced effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob" />
        <div className="absolute -left-10 top-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute left-20 -bottom-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge Section */}
        <div className="flex justify-center space-x-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: GPT-4 Integration
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            <Shield className="h-4 w-4" />
            SOC 2 Type II Certified
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Build Intelligent
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI-Powered Solutions
            </span>
          </motion.h1>

          {/* Enhanced Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your data into intelligent insights with our
            enterprise-grade LLM platform. Built for scale, security, and
            performance.
          </motion.p>

          {/* CTA Section with Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                View Documentation
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              No credit card required • Free tier available
            </p>
          </motion.div>

          {/* Enhanced Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Custom LLM Training",
                description: "Fine-tune models on your data",
                features: [
                  "Auto-scaling",
                  "Version control",
                  "Model monitoring",
                ],
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Enterprise Security",
                description: "Bank-grade data protection",
                features: [
                  "End-to-end encryption",
                  "SOC 2 compliance",
                  "VPC isolation",
                ],
              },
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "High Performance",
                description: "Built for scale and speed",
                features: ["Global CDN", "Auto-scaling", "Load balancing"],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-100"
          >
            {[
              { value: "99.99%", label: "Uptime SLA", suffix: "+" },
              { value: "100M", label: "API Calls Daily", suffix: "+" },
              { value: "500", label: "Enterprise Clients", suffix: "+" },
              { value: "25ms", label: "Avg. Latency", suffix: "<" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                  {stat.suffix === "<" ? stat.suffix : ""}
                  {stat.value}
                  {stat.suffix === "+" ? stat.suffix : ""}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
