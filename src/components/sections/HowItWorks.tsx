"use client";

import { motion } from "framer-motion";
import { ArrowRight, Upload, Brain, Code, Zap } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Data Upload",
    description:
      "Securely upload your data through our intuitive interface or API. We support multiple formats and sources.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Model Training",
    description:
      "Our advanced algorithms fine-tune LLMs specifically for your data and use case requirements.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Integration",
    description:
      "Seamlessly integrate the trained model into your workflow via our REST API or SDK.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Go Live",
    description:
      "Deploy your custom LLM solution and start generating insights from your data.",
    color: "from-orange-400 to-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
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
            SIMPLE INTEGRATION
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h3>
          <p className="text-xl text-gray-600">
            Get started with DataBots in four simple steps. Our streamlined
            process ensures quick integration and deployment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-[2px] bg-gradient-to-r from-gray-200 to-gray-200 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Initialize DataBots client
from databots import Client

client = Client(api_key="your-api-key")

# Upload and process your data
dataset = client.upload("path/to/data")
model = client.train(dataset, model_type="gpt-4")

# Generate insights
response = model.generate(
    prompt="Analyze customer sentiment",
    max_tokens=100
)

print(response.text)`}</code>
          </pre>
        </motion.div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Quick Setup",
              description:
                "Get started in minutes with our simple setup process",
              icon: <Zap className="h-6 w-6 text-blue-600" />,
            },
            {
              title: "Flexible Integration",
              description: "Multiple integration options to suit your needs",
              icon: <Code className="h-6 w-6 text-purple-600" />,
            },
            {
              title: "24/7 Support",
              description: "Expert support team available around the clock",
              icon: <Upload className="h-6 w-6 text-pink-600" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
