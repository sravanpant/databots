"use client";

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  MessageCircle,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with DataBots
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Get the latest updates on AI technology and product releases.
              </p>
              <div className="flex items-center space-x-4">
                {[
                  { icon: <Zap className="h-5 w-5" />, text: "Weekly Updates" },
                  { icon: <Shield className="h-5 w-5" />, text: "No Spam" },
                  {
                    icon: <Globe className="h-5 w-5" />,
                    text: "Global Community",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-400"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="py-6 text-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block"
            >
              DataBots.in
            </Link>
            <p className="text-gray-400">
              Transform your business with custom LLM solutions. Your data, our
              expertise. Built for scale, security, and performance.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Twitter className="h-5 w-5" />,
                  href: "#",
                  label: "Twitter",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "#",
                  label: "GitHub",
                },
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  href: "#",
                  label: "Discord",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Product
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Features", href: "#features" },
                { name: "How it Works", href: "#how-it-works" },
                { name: "Pricing", href: "#pricing" },
                { name: "Documentation", href: "#" },
                { name: "API Reference", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Company
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Press Kit", href: "#" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  text: "contact@databots.in",
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  text: "+1 (555) 123-4567",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  text: "Noida, India",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-400"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} DataBots.in. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end text-sm">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Security", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            "SOC 2 Type II Certified",
            "ISO 27001 Certified",
            "GDPR Compliant",
            "HIPAA Compliant",
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-400 flex items-center space-x-2"
            >
              <Shield className="h-4 w-4" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
