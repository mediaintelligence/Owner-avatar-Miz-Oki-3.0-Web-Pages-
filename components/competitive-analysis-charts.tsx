"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, TrendingUp, DollarSign } from "lucide-react"

interface CompetitorData {
  name: string
  logo: string
  pricing: string
  realTimeMonitoring: { value: string; score: number }
  aiAccuracy: { value: string; score: number }
  sourceCoverage: { value: string; score: number }
  languages: { value: string; score: number }
  apiLimits: { value: string; score: number }
  overallScore: number
}

const competitors: CompetitorData[] = [
  {
    name: "MediaIntelligence.ai",
    logo: "🧠",
    pricing: "$299/mo",
    realTimeMonitoring: { value: "<1 second", score: 100 },
    aiAccuracy: { value: "95% accuracy", score: 100 },
    sourceCoverage: { value: "30M+ sources", score: 100 },
    languages: { value: "120", score: 100 },
    apiLimits: { value: "10K/hour", score: 100 },
    overallScore: 100,
  },
  {
    name: "Brand24",
    logo: "📊",
    pricing: "$119/mo",
    realTimeMonitoring: { value: "2-5 seconds", score: 60 },
    aiAccuracy: { value: "85% accuracy", score: 75 },
    sourceCoverage: { value: "25M sources", score: 80 },
    languages: { value: "108", score: 85 },
    apiLimits: { value: "5K/hour", score: 50 },
    overallScore: 70,
  },
  {
    name: "Agility PR",
    logo: "📈",
    pricing: "$450/mo",
    realTimeMonitoring: { value: "5-10 seconds", score: 40 },
    aiAccuracy: { value: "90% accuracy", score: 85 },
    sourceCoverage: { value: "20M sources", score: 65 },
    languages: { value: "75", score: 60 },
    apiLimits: { value: "3K/hour", score: 30 },
    overallScore: 56,
  },
  {
    name: "Signal AI",
    logo: "🤖",
    pricing: "Enterprise only",
    realTimeMonitoring: { value: "2-5 seconds", score: 60 },
    aiAccuracy: { value: "92% accuracy", score: 90 },
    sourceCoverage: { value: "15M sources", score: 50 },
    languages: { value: "50", score: 40 },
    apiLimits: { value: "Custom", score: 80 },
    overallScore: 64,
  },
]

const features = [
  { key: "realTimeMonitoring", label: "Real-time Monitoring", icon: TrendingUp },
  { key: "aiAccuracy", label: "AI Sentiment Analysis", icon: Star },
  { key: "sourceCoverage", label: "Source Coverage", icon: TrendingUp },
  { key: "languages", label: "Languages Supported", icon: Star },
  { key: "apiLimits", label: "API Rate Limits", icon: TrendingUp },
]

export function CompetitiveAnalysisCharts() {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500/20 border-green-500/30"
    if (score >= 70) return "bg-yellow-500/20 border-yellow-500/30"
    return "bg-red-500/20 border-red-500/30"
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Competitive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Analysis Matrix
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive feature comparison showing MediaIntelligence.ai's competitive advantages
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-12">
          <Card className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white">Feature Comparison Matrix</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-white font-semibold">Feature</th>
                      {competitors.map((competitor) => (
                        <th key={competitor.name} className="text-center p-4 text-white font-semibold min-w-[150px]">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="text-2xl">{competitor.logo}</div>
                            <div className="text-sm">{competitor.name}</div>
                            <Badge className="bg-white/10 text-white text-xs">{competitor.pricing}</Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <tr key={feature.key} className="border-b border-white/10 hover:bg-white/5">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <Icon className="h-4 w-4 text-[#00D4FF]" />
                              <span className="text-white font-medium">{feature.label}</span>
                            </div>
                          </td>
                          {competitors.map((competitor) => {
                            const data = competitor[feature.key as keyof CompetitorData] as {
                              value: string
                              score: number
                            }
                            return (
                              <td key={`${competitor.name}-${feature.key}`} className="p-4 text-center">
                                <div className="space-y-2">
                                  <div className="text-white text-sm font-medium">{data.value}</div>
                                  <div className={`text-xs ${getScoreColor(data.score)}`}>Score: {data.score}/100</div>
                                </div>
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Positioning Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Market Positioning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {competitors.map((competitor, index) => (
                  <div key={competitor.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{competitor.logo}</div>
                        <div>
                          <div className="text-white font-medium">{competitor.name}</div>
                          <div className="text-gray-400 text-sm">{competitor.pricing}</div>
                        </div>
                      </div>
                      <Badge className={getScoreBg(competitor.overallScore)}>{competitor.overallScore}/100</Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          competitor.name === "MediaIntelligence.ai"
                            ? "bg-gradient-to-r from-[#00D4FF] to-[#A47864]"
                            : competitor.overallScore >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${competitor.overallScore}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Value Proposition Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-gray-300">AI Accuracy</div>
                    <div className="text-xs text-green-400">Industry Leading</div>
                  </div>
                  <div className="text-center p-4 bg-[#00D4FF]/20 rounded-lg border border-[#00D4FF]/30">
                    <div className="text-2xl font-bold text-[#00D4FF]">&lt;1s</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                    <div className="text-xs text-[#00D4FF]">Fastest Available</div>
                  </div>
                  <div className="text-center p-4 bg-[#A47864]/20 rounded-lg border border-[#A47864]/30">
                    <div className="text-2xl font-bold text-[#A47864]">30M+</div>
                    <div className="text-sm text-gray-300">Sources</div>
                    <div className="text-xs text-[#A47864]">Largest Coverage</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400">120</div>
                    <div className="text-sm text-gray-300">Languages</div>
                    <div className="text-xs text-purple-400">Global Reach</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-3">Competitive Advantages</h4>
                  <div className="space-y-2">
                    {[
                      "Sub-second real-time processing",
                      "Highest AI accuracy in market",
                      "Largest source coverage globally",
                      "Most comprehensive language support",
                      "Superior API rate limits",
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI Comparison */}
        <Card className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              ROI & Value Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D4FF] mb-2">40%</div>
                <div className="text-white font-medium">Higher Accuracy</div>
                <div className="text-gray-300 text-sm">vs. closest competitor</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A47864] mb-2">5x</div>
                <div className="text-white font-medium">Faster Processing</div>
                <div className="text-gray-300 text-sm">Real-time advantage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-white font-medium">More Sources</div>
                <div className="text-gray-300 text-sm">Comprehensive coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2x</div>
                <div className="text-white font-medium">API Capacity</div>
                <div className="text-gray-300 text-sm">Higher rate limits</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
