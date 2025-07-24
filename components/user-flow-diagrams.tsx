"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Search, MousePointer, Eye, CreditCard } from "lucide-react"

interface FlowStep {
  id: string
  title: string
  description: string
  percentage?: number
  icon: any
  color: string
}

interface UserFlow {
  id: string
  name: string
  description: string
  percentage: number
  color: string
  steps: FlowStep[]
}

const userFlows: UserFlow[] = [
  {
    id: "immediate-trial",
    name: "Immediate Trial Path",
    description: "High-intent visitors who convert immediately",
    percentage: 20,
    color: "bg-green-500",
    steps: [
      {
        id: "landing",
        title: "Homepage Landing",
        description: "Visitor arrives from high-intent search",
        percentage: 100,
        icon: MousePointer,
        color: "bg-green-500/20 text-green-400 border-green-500/30",
      },
      {
        id: "cta-click",
        title: "CTA Click",
        description: "Clicks 'Start Free Trial' button",
        percentage: 85,
        icon: CreditCard,
        color: "bg-green-500/20 text-green-400 border-green-500/30",
      },
      {
        id: "signup",
        title: "Quick Signup",
        description: "Email capture (no password required)",
        percentage: 75,
        icon: Users,
        color: "bg-green-500/20 text-green-400 border-green-500/30",
      },
      {
        id: "onboarding",
        title: "Guided Onboarding",
        description: "3-step setup wizard completion",
        percentage: 60,
        icon: Eye,
        color: "bg-green-500/20 text-green-400 border-green-500/30",
      },
    ],
  },
  {
    id: "research-path",
    name: "Research Path",
    description: "Visitors who need to evaluate features and pricing",
    percentage: 50,
    color: "bg-[#00D4FF]",
    steps: [
      {
        id: "homepage",
        title: "Homepage",
        description: "Initial landing and overview",
        percentage: 100,
        icon: MousePointer,
        color: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      },
      {
        id: "features",
        title: "Features Page",
        description: "Detailed feature exploration",
        percentage: 70,
        icon: Search,
        color: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      },
      {
        id: "pricing",
        title: "Pricing Page",
        description: "Plan comparison and evaluation",
        percentage: 45,
        icon: CreditCard,
        color: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      },
      {
        id: "demo",
        title: "Demo Request",
        description: "Books personalized demonstration",
        percentage: 25,
        icon: Eye,
        color: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      },
    ],
  },
  {
    id: "comparison-path",
    name: "Comparison Path",
    description: "Visitors comparing with competitors",
    percentage: 30,
    color: "bg-[#A47864]",
    steps: [
      {
        id: "homepage",
        title: "Homepage",
        description: "Initial brand impression",
        percentage: 100,
        icon: MousePointer,
        color: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      },
      {
        id: "competitors",
        title: "Competitors Page",
        description: "Feature and pricing comparison",
        percentage: 60,
        icon: Search,
        color: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      },
      {
        id: "pricing",
        title: "Pricing Analysis",
        description: "ROI and value assessment",
        percentage: 40,
        icon: CreditCard,
        color: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      },
      {
        id: "trial",
        title: "Trial Signup",
        description: "Converts to trial after comparison",
        percentage: 20,
        icon: Users,
        color: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      },
    ],
  },
]

export function UserFlowDiagrams() {
  const [selectedFlow, setSelectedFlow] = useState<UserFlow>(userFlows[0])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            User Journey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Flow Analysis
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-path conversion flows showing how different visitor types navigate through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Flow Selection */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Visitor Paths</h3>
            {userFlows.map((flow) => (
              <Card
                key={flow.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedFlow.id === flow.id
                    ? "bg-white/10 border-[#00D4FF] ring-2 ring-[#00D4FF]/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                onClick={() => setSelectedFlow(flow)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{flow.name}</h4>
                    <Badge className="bg-white/10 text-white">{flow.percentage}%</Badge>
                  </div>
                  <p className="text-gray-300 text-xs">{flow.description}</p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`h-2 rounded-full ${flow.color}`} style={{ width: `${flow.percentage}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flow Visualization */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  {selectedFlow.name}
                  <Badge className="bg-white/10 text-white">{selectedFlow.percentage}% of visitors</Badge>
                </CardTitle>
                <p className="text-gray-300">{selectedFlow.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedFlow.steps.map((step, index) => {
                    const Icon = step.icon
                    const isLast = index === selectedFlow.steps.length - 1

                    return (
                      <div key={step.id} className="relative">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${step.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-white font-semibold">{step.title}</h4>
                              {step.percentage && (
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-300 text-sm">{step.percentage}%</span>
                                  <div className="w-20 bg-gray-700 rounded-full h-2">
                                    <div
                                      className={`h-2 rounded-full ${selectedFlow.color}`}
                                      style={{ width: `${step.percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                          </div>
                        </div>

                        {!isLast && (
                          <div className="flex items-center justify-center my-4">
                            <ArrowRight className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Conversion Insights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-[#00D4FF] font-semibold">Drop-off Points</div>
                      <div className="text-gray-300">Identified at each step</div>
                    </div>
                    <div>
                      <div className="text-[#A47864] font-semibold">Optimization</div>
                      <div className="text-gray-300">A/B testing opportunities</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-semibold">Success Rate</div>
                      <div className="text-gray-300">Above industry average</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
