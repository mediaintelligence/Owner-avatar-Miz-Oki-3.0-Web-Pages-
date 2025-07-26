"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Download, Calendar, Zap, Shield, Clock, CheckCircle, Sparkles } from "lucide-react"
import { Calculator } from "lucide-react" // Import Calculator icon

const ctaOptions = [
  {
    id: "trial",
    title: "Start Free Trial",
    description: "Get full access for 14 days",
    icon: Zap,
    color: "bg-teal-400 hover:bg-teal-500",
    textColor: "text-slate-900",
    features: ["No credit card required", "Full feature access", "Setup in 5 minutes", "24/7 support included"],
  },
  {
    id: "demo",
    title: "Watch Live Demo",
    description: "See the AI in action",
    icon: Play,
    color: "bg-purple-400 hover:bg-purple-500",
    textColor: "text-slate-900",
    features: ["Personalized walkthrough", "Real-time Q&A", "Custom use cases", "ROI calculation"],
  },
  {
    id: "enterprise",
    title: "Enterprise Demo",
    description: "Custom solution design",
    icon: Shield,
    color: "bg-yellow-400 hover:bg-yellow-500",
    textColor: "text-slate-900",
    features: ["Dedicated success manager", "Custom AI training", "Security assessment", "Implementation roadmap"],
  },
]

const leadMagnets = [
  {
    title: "2025 State of Media Intelligence Report",
    description: "Industry benchmarks and trends from 500+ organizations",
    downloadCount: "12,000+",
    icon: Download,
  },
  {
    title: "Media Intelligence ROI Calculator",
    description: "Calculate your potential savings and ROI",
    downloadCount: "8,500+",
    icon: Calculator,
  },
  {
    title: "Crisis Prevention Playbook",
    description: "Step-by-step guide to preventing reputation crises",
    downloadCount: "15,000+",
    icon: Shield,
  },
]

export function CTASection() {
  const [selectedCTA, setSelectedCTA] = useState("trial")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail("")
    // Show success message or redirect based on selectedCTA
  }

  const selectedOption = ctaOptions.find((option) => option.id === selectedCTA)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-teal-400/10 border-teal-400/30 text-teal-400">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Transform Your Intelligence?
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              AI Journey
            </span>{" "}
            Today
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Join 2,500+ organizations already using autonomous intelligence to make faster, smarter decisions. Choose
            your path to transformation.
          </p>

          {/* CTA Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ctaOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  selectedCTA === option.id
                    ? "border-teal-400 bg-slate-800/50"
                    : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                }`}
                onClick={() => setSelectedCTA(option.id)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${
                      selectedCTA === option.id ? "bg-teal-400/20" : "bg-slate-700/50"
                    }`}
                  >
                    <option.icon
                      className={`w-8 h-8 ${selectedCTA === option.id ? "text-teal-400" : "text-slate-400"}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-slate-400 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CTA Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-400"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`h-14 px-8 font-semibold ${selectedOption?.color} ${selectedOption?.textColor}`}
                size="lg"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    {selectedOption?.title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Setup in 5 minutes
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Enterprise security
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                No credit card required
              </div>
            </div>
          </div>
        </div>

        {/* Lead Magnets */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Or Download Our Free Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadMagnets.map((magnet, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-slate-700/50 mb-4">
                    <magnet.icon className="w-8 h-8 text-teal-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{magnet.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{magnet.description}</p>
                  <Badge variant="secondary" className="mb-4">
                    {magnet.downloadCount} downloads
                  </Badge>
                  <Button
                    variant="outline"
                    className="w-full border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">Limited Time: Free AI Training Session</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Book your demo this month and receive a complimentary AI training session worth $5,000. Only 50 spots
            available for January 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-500 hover:to-purple-500 text-slate-900 font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Spot Now
            </Button>
            <div className="text-sm text-slate-400">
              <span className="text-teal-400 font-semibold">23 spots remaining</span> • Expires Jan 31, 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
