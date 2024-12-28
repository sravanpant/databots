"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Cpu,
  Zap,
  Globe,
  BarChart,
  Lock,
  Clock,
  Database,
  Cloud,
  RefreshCw,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Advanced LLM Training",
    description:
      "Custom model training tailored to your specific data and use cases",
    color: "from-blue-400 to-blue-600",
    features: [
      "Fine-tuning capabilities",
      "Multi-model support",
      "Version control",
      "Automated training pipelines",
    ],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your sensitive data",
    color: "from-purple-400 to-purple-600",
    features: [
      "End-to-end encryption",
      "SOC 2 Type II compliance",
      "VPC isolation",
      "Access control",
    ],
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "High Performance",
    description: "Optimized infrastructure for maximum speed and reliability",
    color: "from-pink-400 to-pink-600",
    features: [
      "Global CDN",
      "Auto-scaling",
      "Load balancing",
      "99.99% uptime SLA",
    ],
  },
];

const additionalFeatures = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "Deployed across multiple regions for optimal performance",
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Advanced Analytics",
    description: "Real-time insights and usage metrics",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Data Privacy",
    description: "GDPR and CCPA compliant data handling",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Real-time Processing",
    description: "Instant data processing and model responses",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Flexible Storage",
    description: "Multiple storage options for your data",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Automatic Updates",
    description: "Regular model updates and improvements",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Custom Configuration",
    description: "Flexible settings for your specific needs",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-blue-600 mb-3">
            POWERFUL FEATURES
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build AI-Powered Solutions
          </h3>
          <p className="text-xl text-gray-600">
            Comprehensive tools and features to help you build, deploy, and
            scale your AI applications.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <ul className="space-y-3">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Zap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-gray-100 hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using DataBots to power their AI
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Start Building Now
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
