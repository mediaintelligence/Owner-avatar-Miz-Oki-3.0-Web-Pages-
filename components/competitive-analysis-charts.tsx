"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Star, TrendingUp, Users, Zap, Shield, Globe, BarChart3 } from "lucide-react"

const competitors = [
  {
    name: "MediaIntelligence.ai",
    logo: "MI",
    color: "#00D4FF",
    pricing: "$299",
    sources: "30M+",
    accuracy: 95,
    languages: 120,
    apiLimit: "10K/hour",
    realTime: "<1 second",
    position: { x: 85, y: 20 },
  },
  {
    name: "Brand24",
    logo: "B24",
    color: "#FF6B6B",
    pricing: "$119",
    sources: "25M",
    accuracy: 85,
    languages: 108,
    apiLimit: "5K/hour",
    realTime: "2-5 seconds",
    position: { x: 60, y: 60 },
  },
  {
    name: "Agility PR",
    logo: "APR",
    color: "#4ECDC4",
    pricing: "$450",
    sources: "20M",
    accuracy: 90,
    languages: 75,
    apiLimit: "3K/hour",
    realTime: "5-10 seconds",
    position: { x: 40, y: 30 },
  },
  {
    name: "Signal AI",
    logo: "SAI",
    color: "#45B7D1",
    pricing: "Enterprise",
    sources: "15M",
    accuracy: 92,
    languages: 50,
    apiLimit: "Custom",
    realTime: "2-5 seconds",
    position: { x: 70, y: 80 },
  },
]

const featureComparison = [
  {
    feature: "Real-time Monitoring",
    mediaIntelligence: { status: "best", value: "<1 second" },
    brand24: { status: "good", value: "2-5 seconds" },
    agilityPR: { status: "average", value: "5-10 seconds" },
    signalAI: { status: "good", value: "2-5 seconds" },
  },
  {
    feature: "AI Sentiment Analysis",
    mediaIntelligence: { status: "best", value: "95% accuracy" },
    brand24: { status: "good", value: "85% accuracy" },
    agilityPR: { status: "good", value: "90% accuracy" },
    signalAI: { status: "good", value: "92% accuracy" },
  },
  {
    feature: "Source Coverage",
    mediaIntelligence: { status: "best", value: "30M+ sources" },
    brand24: { status: "good", value: "25M sources" },
    agilityPR: { status: "average", value: "20M sources" },
    signalAI: { status: "average", value: "15M sources" },
  },
  {
    feature: "Languages Supported",
    mediaIntelligence: { status: "best", value: "120" },
    brand24: { status: "good", value: "108" },
    agilityPR: { status: "average", value: "75" },
    signalAI: { status: "poor", value: "50" },
  },
  {
    feature: "API Rate Limits",
    mediaIntelligence: { status: "best", value: "10K/hour" },
    brand24: { status: "good", value: "5K/hour" },
    agilityPR: { status: "average", value: "3K/hour" },
    signalAI: { status: "good", value: "Custom" },
  },
  {
    feature: "Starting Price",
    mediaIntelligence: { status: "good", value: "$299/mo" },
    brand24: { status: "best", value: "$119/mo" },
    agilityPR: { status: "poor", value: "$450/mo" },
    signalAI: { status: "poor", value: "Enterprise only" },
  },
]

const marketMetrics = [
  { name: "Market Share", value: 15, change: "+3.2%", color: "#00D4FF" },
  { name: "Customer Growth", value: 45, change: "+12%", color: "#10B981" },
  { name: "Feature Completeness", value: 92, change: "+8%", color: "#A47864" },
  { name: "Customer Satisfaction", value: 4.8, change: "+0.3", color: "#F59E0B" },
]

export function CompetitiveAnalysisCharts() {
  const [selectedView, setSelectedView] = useState("features")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "best":
        return "text-green-400 bg-green-400/20"
      case "good":
        return "text-blue-400 bg-blue-400/20"
      case "average":
        return "text-yellow-400 bg-yellow-400/20"
      case "poor":
        return "text-red-400 bg-red-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "best":
        return <Check className="h-4 w-4" />
      case "good":
        return <Check className="h-4 w-4" />
      case "average":
        return <Star className="h-4 w-4" />
      case "poor":
        return <X className="h-4 w-4" />
      default:
        return <X className="h-4 w-4" />
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Competitive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How MediaIntelligence.ai leads the market in key performance metrics
          </p>
        </div>

        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-md">
            <TabsTrigger value="features" className="data-[state=active]:bg-white/20 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Feature Matrix
            </TabsTrigger>
            <TabsTrigger value="positioning" className="data-[state=active]:bg-white/20 text-white">
              <TrendingUp className="h-4 w-4 mr-2" />
              Market Position
            </TabsTrigger>
            <TabsTrigger value="metrics" className="data-[state=active]:bg-white/20 text-white">
              <Users className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Feature Comparison Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white font-semibold py-3 px-4">Feature</th>
                        <th className="text-center text-[#00D4FF] font-semibold py-3 px-4">MediaIntelligence.ai</th>
                        <th className="text-center text-gray-300 font-semibold py-3 px-4">Brand24</th>
                        <th className="text-center text-gray-300 font-semibold py-3 px-4">Agility PR</th>
                        <th className="text-center text-gray-300 font-semibold py-3 px-4">Signal AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureComparison.map((row, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="text-white py-4 px-4 font-medium">{row.feature}</td>
                          <td className="py-4 px-4">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(row.mediaIntelligence.status)}`}
                            >
                              {getStatusIcon(row.mediaIntelligence.status)}
                              <span className="ml-2">{row.mediaIntelligence.value}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(row.brand24.status)}`}
                            >
                              {getStatusIcon(row.brand24.status)}
                              <span className="ml-2">{row.brand24.value}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(row.agilityPR.status)}`}
                            >
                              {getStatusIcon(row.agilityPR.status)}
                              <span className="ml-2">{row.agilityPR.value}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(row.signalAI.status)}`}
                            >
                              {getStatusIcon(row.signalAI.status)}
                              <span className="ml-2">{row.signalAI.value}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="positioning">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Market Positioning Map</CardTitle>
                <p className="text-gray-300">Price vs Feature Completeness</p>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-8">
                  {/* Axes */}
                  <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-white/20"></div>
                  <div className="absolute bottom-8 left-8 top-8 w-0.5 bg-white/20"></div>

                  {/* Labels */}
                  <div className="absolute bottom-2 right-2 text-gray-400 text-sm">Feature Completeness →</div>
                  <div className="absolute top-2 left-2 text-gray-400 text-sm transform -rotate-90 origin-left">
                    Price →
                  </div>

                  {/* Quadrant Labels */}
                  <div className="absolute top-4 right-4 text-gray-500 text-xs">Premium Leaders</div>
                  <div className="absolute bottom-4 right-4 text-gray-500 text-xs">Value Leaders</div>
                  <div className="absolute top-4 left-16 text-gray-500 text-xs">Niche Players</div>
                  <div className="absolute bottom-4 left-16 text-gray-500 text-xs">Budget Options</div>

                  {/* Competitors */}
                  {competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                      style={{
                        left: `${competitor.position.x}%`,
                        top: `${competitor.position.y}%`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm border-2"
                        style={{
                          backgroundColor: competitor.color,
                          borderColor: competitor.name === "MediaIntelligence.ai" ? "#fff" : competitor.color,
                        }}
                      >
                        {competitor.logo}
                      </div>
                      <div className="text-center mt-2">
                        <div className="text-white text-xs font-medium">{competitor.name}</div>
                        <div className="text-gray-400 text-xs">{competitor.pricing}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketMetrics.map((metric, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {metric.name === "Customer Satisfaction" ? metric.value : `${metric.value}%`}
                    </div>
                    <div className="text-gray-300 text-sm mb-3">{metric.name}</div>
                    <div className="text-sm font-semibold" style={{ color: metric.color }}>
                      {metric.change} vs last quarter
                    </div>
                    <Progress
                      value={metric.name === "Customer Satisfaction" ? metric.value * 20 : metric.value}
                      className="mt-3 h-2"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Competitive Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-[#00D4FF] mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Fastest Processing</h4>
                      <p className="text-gray-300 text-sm">Sub-second real-time monitoring beats all competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-[#A47864] mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Highest Accuracy</h4>
                      <p className="text-gray-300 text-sm">95% AI sentiment accuracy with context understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-[#10B981] mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Widest Coverage</h4>
                      <p className="text-gray-300 text-sm">30M+ sources across 120 languages globally</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
