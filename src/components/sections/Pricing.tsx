"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {  HelpCircle, Zap } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups",
    price: "$99",
    billing: "per month",
    features: [
      {
        text: "100,000 API calls/month",
        tooltip: "Monthly API call limit with overage charges",
      },
      {
        text: "5GB data storage",
        tooltip: "Secure cloud storage for your data",
      },
      { text: "2 team members", tooltip: "Number of team member accounts" },
      {
        text: "Basic support",
        tooltip: "Email support with 24-hour response time",
      },
      { text: "Standard API access", tooltip: "Access to core API features" },
      { text: "Community access", tooltip: "Access to our community forums" },
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$299",
    billing: "per month",
    features: [
      {
        text: "1M API calls/month",
        tooltip: "Monthly API call limit with overage charges",
      },
      {
        text: "50GB data storage",
        tooltip: "Secure cloud storage for your data",
      },
      { text: "10 team members", tooltip: "Number of team member accounts" },
      { text: "Priority support", tooltip: "Priority email and chat support" },
      {
        text: "Advanced API access",
        tooltip: "Access to advanced API features",
      },
      {
        text: "Custom model training",
        tooltip: "Train models on your specific data",
      },
      {
        text: "Analytics dashboard",
        tooltip: "Detailed usage analytics and insights",
      },
    ],
    gradient: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    billing: "contact us",
    features: [
      { text: "Unlimited API calls", tooltip: "No monthly API call limits" },
      { text: "Unlimited storage", tooltip: "Unlimited secure cloud storage" },
      { text: "Unlimited team members", tooltip: "No limit on team accounts" },
      { text: "24/7 dedicated support", tooltip: "Dedicated support team" },
      { text: "Custom API solutions", tooltip: "Customized API solutions" },
      {
        text: "On-premise deployment",
        tooltip: "Deploy on your infrastructure",
      },
      { text: "SLA guarantees", tooltip: "Custom SLA agreements" },
      { text: "Custom contracts", tooltip: "Flexible contract terms" },
    ],
    gradient: "from-pink-500 to-pink-600",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
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
            PRICING PLANS
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h3>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your needs. All plans include core
            features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border ${
                plan.popular ? "border-blue-500 scale-105" : "border-gray-100"
              } hover:border-blue-100 transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 mb-1">/{plan.billing}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">{feature.text}</span>
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="h-4 w-4" />
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg"
                            sideOffset={5}
                          >
                            {feature.tooltip}
                            <Tooltip.Arrow className="fill-gray-900" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90`}
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h4>
          <div className="space-y-6">
            {[
              {
                q: "How does the API call limit work?",
                a: "API calls are counted on a monthly basis. If you exceed your limit, you'll be charged for overage at a per-call rate.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, wire transfers, and ACH payments for Enterprise plans.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h5>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
