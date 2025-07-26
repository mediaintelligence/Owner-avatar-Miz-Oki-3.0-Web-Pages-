"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, TrendingUp, CheckCircle, Clock, BarChart3, Zap } from "lucide-react"

const conversionPaths = [
  {
    id: "immediate",
    name: "Immediate Trial",
    percentage: 20,
    color: "#00D4FF",
    icon: Zap,
    steps: [
      { name: "Landing Page", conversion: 100, visitors: 1000 },
      { name: "Value Proposition", conversion: 85, visitors: 850 },
      { name: "Trial Signup", conversion: 25, visitors: 213 },
      { name: "Onboarding", conversion: 80, visitors: 170 },
      { name: "First Value", conversion: 60, visitors: 102 },
      { name: "Paid Conversion", conversion: 15, visitors: 15 },
    ],
  },
  {
    id: "research",
    name: "Research Path",
    percentage: 50,
    color: "#A47864",
    icon: Search,
    steps: [
      { name: "Landing Page", conversion: 100, visitors: 1000 },
      { name: "Features Page", conversion: 70, visitors: 700 },
      { name: "Pricing Page", conversion: 60, visitors: 420 },
      { name: "Case Studies", conversion: 45, visitors: 189 },
      { name: "Demo Request", conversion: 35, visitors: 66 },
      { name: "Trial Signup", conversion: 80, visitors: 53 },
    ],
  },
  {
    id: "comparison",
    name: "Comparison Path",
    percentage: 30,
    color: "#10B981",
    icon: BarChart3,
    steps: [
      { name: "Landing Page", conversion: 100, visitors: 1000 },
      { name: "Competitors Page", conversion: 55, visitors: 550 },
      { name: "Pricing Comparison", conversion: 40, visitors: 220 },
      { name: "Feature Matrix", conversion: 30, visitors: 66 },
      { name: "Demo Booking", conversion: 45, visitors: 30 },
      { name: "Trial Conversion", conversion: 70, visitors: 21 },
    ],
  },
]

const leadMagnets = [
  {
    stage: "Top of Funnel",
    title: "2025 State of Media Intelligence Report",
    description: "Industry benchmarks and trends",
    conversionRate: "12%",
    leads: "2,400/month",
  },
  {
    stage: "Middle Funnel",
    title: "PR Crisis Prevention Playbook",
    description: "Step-by-step crisis management guide",
    conversionRate: "18%",
    leads: "1,800/month",
  },
  {
    stage: "Bottom Funnel",
    title: "Custom AI Training Session",
    description: "Industry-specific AI configuration",
    conversionRate: "35%",
    leads: "420/month",
  },
]

export function UserFlowDiagrams() {
  const [selectedPath, setSelectedPath] = useState("immediate")
  const [activeStep, setActiveStep] = useState(0)

  const currentPath = conversionPaths.find((path) => path.id === selectedPath)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1B365D] to-[#2A4A6B]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            User Journey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding how visitors convert through our optimized funnel paths
          </p>
        </div>

        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-md">
            {conversionPaths.map((path) => {
              const IconComponent = path.icon
              return (
                <TabsTrigger key={path.id} value={path.id} className="data-[state=active]:bg-white/20 text-white">
                  <IconComponent className="h-4 w-4 mr-2" />
                  {path.name}
                  <Badge className="ml-2" style={{ backgroundColor: path.color }}>
                    {path.percentage}%
                  </Badge>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {conversionPaths.map((path) => (
            <TabsContent key={path.id} value={path.id}>
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <path.icon className="h-6 w-6 mr-3" style={{ color: path.color }} />
                    {path.name} Journey
                    <Badge className="ml-3" style={{ backgroundColor: path.color }}>
                      {path.percentage}% of visitors
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {path.steps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                              style={{ backgroundColor: path.color }}
                            >
                              {index + 1}
                            </div>
                            <span className="text-white font-medium">{step.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">{step.visitors} visitors</div>
                            <div className="text-gray-400 text-sm">{step.conversion}% conversion</div>
                          </div>
                        </div>
                        <Progress
                          value={step.conversion}
                          className="h-2 mb-4"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                        />
                        {index < path.steps.length - 1 && (
                          <div className="absolute left-4 top-12 w-0.5 h-6 bg-gray-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lead Magnets Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Strategic Lead Magnets by Funnel Stage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadMagnets.map((magnet, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30">
                    {magnet.stage}
                  </Badge>
                  <CardTitle className="text-white text-lg">{magnet.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{magnet.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#00D4FF] font-semibold">{magnet.conversionRate}</div>
                      <div className="text-gray-400 text-sm">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-[#A47864] font-semibold">{magnet.leads}</div>
                      <div className="text-gray-400 text-sm">Monthly Leads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conversion Optimization Insights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-500/10 border-green-500/20">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400">8.5%</div>
              <div className="text-gray-300 text-sm">Overall Conversion Rate</div>
              <div className="text-green-400 text-xs mt-1">↑ 2.3% vs industry avg</div>
            </CardContent>
          </Card>

          <Card className="bg-[#00D4FF]/10 border-[#00D4FF]/20">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-[#00D4FF] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#00D4FF]">4.2 min</div>
              <div className="text-gray-300 text-sm">Avg. Time on Site</div>
              <div className="text-[#00D4FF] text-xs mt-1">Target: 3+ minutes</div>
            </CardContent>
          </Card>

          <Card className="bg-[#A47864]/10 border-[#A47864]/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-[#A47864] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#A47864]">18%</div>
              <div className="text-gray-300 text-sm">Trial to Paid Rate</div>
              <div className="text-[#A47864] text-xs mt-1">Target: 15-20%</div>
            </CardContent>
          </Card>

          <Card className="bg-purple-500/10 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-400">$2,400</div>
              <div className="text-gray-300 text-sm">Customer Acq. Cost</div>
              <div className="text-purple-400 text-xs mt-1">↓ 15% this quarter</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
