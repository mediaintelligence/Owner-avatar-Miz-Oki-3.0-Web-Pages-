"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Globe, Zap, Brain } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail("")
    // Show success message or redirect
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Neural Network Animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Animated neural connections */}
          <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
            <path d="M100,200 Q300,100 500,200 T900,200" className="animate-pulse">
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0;0,1000"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M200,400 Q400,300 600,400 T1000,400" className="animate-pulse delay-1000">
              <animate attributeName="stroke-dasharray" values="0,800;800,0;0,800" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M150,600 Q350,500 550,600 T850,600" className="animate-pulse delay-2000">
              <animate attributeName="stroke-dasharray" values="0,600;600,0;0,600" dur="5s" repeatCount="indefinite" />
            </path>
          </g>
          {/* Neural nodes */}
          <g fill="#00D4FF" opacity="0.6">
            <circle cx="100" cy="200" r="3" className="animate-pulse" />
            <circle cx="500" cy="200" r="4" className="animate-pulse delay-500" />
            <circle cx="900" cy="200" r="3" className="animate-pulse delay-1000" />
            <circle cx="200" cy="400" r="3" className="animate-pulse delay-1500" />
            <circle cx="600" cy="400" r="4" className="animate-pulse delay-2000" />
            <circle cx="1000" cy="400" r="3" className="animate-pulse delay-2500" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <Badge variant="outline" className="mb-6 bg-teal-400/10 border-teal-400/30 text-teal-400 hover:bg-teal-400/20">
          <Globe className="w-4 h-4 mr-2" />
          World's First Business General Intelligence Platform
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          The{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Autonomous
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Living Brain
          </span>
          <br />
          for Your Organization
        </h1>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            MIZ OKI 3.0™ delivers <span className="text-teal-400 font-bold">50-75x faster decisions</span> through
            autonomous intelligence that <span className="text-blue-400 font-semibold">SENSES</span>,{" "}
            <span className="text-purple-400 font-semibold">REASONS</span>,{" "}
            <span className="text-yellow-400 font-semibold">DECIDES</span>,{" "}
            <span className="text-pink-400 font-semibold">ACTS</span>, and{" "}
            <span className="text-green-400 font-semibold">LEARNS</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-teal-400" />
            </div>
            <div className="text-3xl font-bold text-teal-400 mb-2">0</div>
            <div className="text-sm text-slate-400 mb-1">Infrastructure</div>
            <div className="text-xs text-slate-500">Platform-as-a-Service Ready</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">2-4 Weeks</div>
            <div className="text-sm text-slate-400 mb-1">To Full Deployment</div>
            <div className="text-xs text-slate-500">Complete Integration</div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
            <div className="text-sm text-slate-400 mb-1">Autonomous</div>
            <div className="text-xs text-slate-500">Decision-Making Rate</div>
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
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
              className="h-14 px-8 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-slate-900 font-semibold"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
          <p className="text-sm text-slate-400 mt-3">
            No credit card required • 14-day free trial • Setup in under 5 minutes
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold px-8 py-4 h-auto">
            <Play className="w-5 h-5 mr-2" />
            Experience the Living Brain Demo
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 h-auto bg-transparent"
          >
            <Brain className="w-5 h-5 mr-2" />
            Get Technical Deep Dive
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 mb-4">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-8 bg-slate-600 rounded"></div>
            <div className="w-24 h-8 bg-slate-600 rounded"></div>
            <div className="w-24 h-8 bg-slate-600 rounded"></div>
            <div className="w-24 h-8 bg-slate-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Floating Demo Button */}
      <Button
        className="fixed bottom-8 right-8 z-50 bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold shadow-2xl animate-pulse"
        size="lg"
      >
        Schedule Demo
      </Button>
    </section>
  )
}
