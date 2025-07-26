"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  ArrowRight,
  Shield,
  Award,
  Globe,
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API Documentation", href: "#api" },
    { name: "Security", href: "#security" },
    { name: "Changelog", href: "#changelog" },
  ],
  solutions: [
    { name: "Crisis Management", href: "#crisis" },
    { name: "Competitive Intelligence", href: "#competitive" },
    { name: "Campaign Optimization", href: "#campaigns" },
    { name: "Brand Monitoring", href: "#monitoring" },
    { name: "Market Research", href: "#research" },
    { name: "Reputation Management", href: "#reputation" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#cases" },
    { name: "Webinars", href: "#webinars" },
    { name: "White Papers", href: "#papers" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Help Center", href: "#help" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
    { name: "Legal", href: "#legal" },
  ],
}

const certifications = [
  { name: "SOC 2 Type II", icon: Shield },
  { name: "ISO 27001", icon: Award },
  { name: "GDPR Compliant", icon: Globe },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Intelligence Revolution</h3>
              <p className="text-slate-400">
                Get weekly insights on AI, media intelligence trends, and exclusive early access to new features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-teal-400/20 rounded-lg mr-3">
                <Brain className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">MediaIntelligence.ai</div>
                <div className="text-sm text-slate-400">Autonomous Living Brain</div>
              </div>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              The world's first business general intelligence platform that delivers 50-75x faster decisions through
              autonomous intelligence that senses, reasons, decides, acts, and learns.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:hello@mediaintelligence.ai" className="hover:text-teal-400 transition-colors">
                  hello@mediaintelligence.ai
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+1-555-0123" className="hover:text-teal-400 transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA • London, UK • Singapore</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400 p-2">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4 mt-8">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-slate-400 text-sm">Certified & Compliant:</span>
              {certifications.map((cert) => (
                <Badge key={cert.name} variant="outline" className="border-slate-600 text-slate-400">
                  <cert.icon className="w-3 h-3 mr-1" />
                  {cert.name}
                </Badge>
              ))}
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span>99.9% Uptime SLA</span>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <span>24/7 Support</span>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">© 2025 MediaIntelligence.ai. All rights reserved.</div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-slate-400 hover:text-teal-400 transition-colors">
              Cookie Policy
            </a>
            <a href="#accessibility" className="text-slate-400 hover:text-teal-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
