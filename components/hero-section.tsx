"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, TrendingUp, Globe, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [mentionCount, setMentionCount] = useState(25847392)

  useEffect(() => {
    const interval = setInterval(() => {
      setMentionCount((prev) => prev + Math.floor(Math.random() * 10) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="space-y-8">
            <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 hover:bg-[#00D4FF]/30">
              🚀 World's First Business General Intelligence Platform
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Transform Media Noise into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
                  Strategic Intelligence
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                MIZ OKI 3.0™ delivers <span className="text-[#00D4FF] font-semibold">50-75x faster decisions</span>{" "}
                through autonomous intelligence that <span className="text-[#A47864] font-semibold">SENSES</span>,{" "}
                <span className="text-[#00D4FF] font-semibold">REASONS</span>,{" "}
                <span className="text-[#A47864] font-semibold">DECIDES</span>,{" "}
                <span className="text-[#00D4FF] font-semibold">ACTS</span>, and{" "}
                <span className="text-[#A47864] font-semibold">LEARNS</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#A47864] hover:bg-[#A47864]/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Start Free 14-Day Trial
                <span className="ml-2 text-sm opacity-80">(No Credit Card)</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch 3-Min Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-[#00D4FF]" />
                <span>
                  Monitoring <span className="text-[#00D4FF] font-semibold">{mentionCount.toLocaleString()}+</span>{" "}
                  sources
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-[#A47864]" />
                <span>
                  Across <span className="text-[#A47864] font-semibold">154</span> countries
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel - Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Real-Time Intelligence Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 text-2xl font-bold">+87%</div>
                    <div className="text-xs text-gray-300">Positive Sentiment</div>
                  </div>
                  <div className="bg-[#00D4FF]/20 rounded-lg p-3 border border-[#00D4FF]/30">
                    <div className="text-[#00D4FF] text-2xl font-bold">2.4M</div>
                    <div className="text-xs text-gray-300">Mentions Today</div>
                  </div>
                  <div className="bg-[#A47864]/20 rounded-lg p-3 border border-[#A47864]/30">
                    <div className="text-[#A47864] text-2xl font-bold">94%</div>
                    <div className="text-xs text-gray-300">AI Confidence</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Trending Topics</span>
                    <TrendingUp className="h-4 w-4 text-[#00D4FF]" />
                  </div>
                  <div className="space-y-1">
                    {["Product Launch", "Market Expansion", "Industry Awards"].map((topic, i) => (
                      <div key={topic} className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">{topic}</span>
                        <div className="w-16 bg-gray-700 rounded-full h-1">
                          <div
                            className="bg-gradient-to-r from-[#00D4FF] to-[#A47864] h-1 rounded-full"
                            style={{ width: `${85 - i * 15}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#00D4FF]/20 backdrop-blur-md rounded-lg p-3 border border-[#00D4FF]/30">
              <div className="text-[#00D4FF] text-sm font-semibold">Alert: Viral Mention</div>
              <div className="text-xs text-gray-300">Engagement spike detected</div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm mb-6">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {["Microsoft", "Google", "Amazon", "Meta", "Apple"].map((company) => (
              <div key={company} className="text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
