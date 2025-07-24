"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, BookOpen, BarChart3, Cog, Map, Users } from "lucide-react"

interface NavigationSegment {
  id: string
  title: string
  description: string
  icon: any
  subsections: {
    id: string
    title: string
    anchor: string
    graphics?: string[]
  }[]
  color: string
}

const navigationSegments: NavigationSegment[] = [
  {
    id: "business-intelligence",
    title: "Business General Intelligence",
    description: "Core BGI framework and autonomous decision-making systems",
    icon: BookOpen,
    color: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
    subsections: [
      {
        id: "bgi-overview",
        title: "BGI Framework Overview",
        anchor: "#bgi-framework",
        graphics: ["bgi-flywheel"],
      },
      {
        id: "autonomous-systems",
        title: "Autonomous Decision Systems",
        anchor: "#autonomous-systems",
      },
      {
        id: "intelligence-layers",
        title: "Intelligence Architecture Layers",
        anchor: "#intelligence-layers",
        graphics: ["e-shkg-stack"],
      },
    ],
  },
  {
    id: "market-analysis",
    title: "Market Landscape & Positioning",
    description: "Competitive analysis and market positioning strategies",
    icon: BarChart3,
    color: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
    subsections: [
      {
        id: "competitive-landscape",
        title: "Competitive Landscape Analysis",
        anchor: "#competitive-landscape",
        graphics: ["ai-market-landscape"],
      },
      {
        id: "market-positioning",
        title: "Strategic Market Positioning",
        anchor: "#market-positioning",
      },
      {
        id: "roi-analysis",
        title: "ROI & Value Proposition",
        anchor: "#roi-analysis",
        graphics: ["blended-roi-chart"],
      },
    ],
  },
  {
    id: "technical-architecture",
    title: "Technical Architecture",
    description: "System architecture, security, and integration frameworks",
    icon: Cog,
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    subsections: [
      {
        id: "system-architecture",
        title: "Core System Architecture",
        anchor: "#system-architecture",
        graphics: ["e-shkg-stack", "cross-platform-loop"],
      },
      {
        id: "security-framework",
        title: "Zero-Trust Security Model",
        anchor: "#security-framework",
        graphics: ["zero-trust-mesh"],
      },
      {
        id: "integration-patterns",
        title: "Integration & API Framework",
        anchor: "#integration-patterns",
      },
    ],
  },
  {
    id: "implementation-roadmap",
    title: "Implementation Roadmap",
    description: "Development timeline, milestones, and deployment strategy",
    icon: Map,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    subsections: [
      {
        id: "development-phases",
        title: "Development Phases",
        anchor: "#development-phases",
        graphics: ["unified-roadmap"],
      },
      {
        id: "milestone-tracking",
        title: "Milestone & KPI Tracking",
        anchor: "#milestone-tracking",
      },
      {
        id: "deployment-strategy",
        title: "Deployment & Scaling Strategy",
        anchor: "#deployment-strategy",
      },
    ],
  },
  {
    id: "use-cases",
    title: "Industry Use Cases",
    description: "Sector-specific applications and implementation examples",
    icon: Users,
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    subsections: [
      {
        id: "healthcare-ai",
        title: "Healthcare AI Applications",
        anchor: "#healthcare-ai",
        graphics: ["sepsis-causal-flow"],
      },
      {
        id: "financial-services",
        title: "Financial Services Integration",
        anchor: "#financial-services",
      },
      {
        id: "enterprise-deployment",
        title: "Enterprise Deployment Models",
        anchor: "#enterprise-deployment",
      },
    ],
  },
]

export function CrossSegmentNavigation() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null)

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Navigate the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
            Complete Framework
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore interconnected segments of our comprehensive MediaIntelligence.ai documentation with integrated visual
          assets
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {navigationSegments.map((segment) => {
          const Icon = segment.icon
          const isActive = activeSegment === segment.id

          return (
            <Card
              key={segment.id}
              className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                isActive ? "ring-2 ring-[#00D4FF]" : ""
              }`}
              onClick={() => setActiveSegment(isActive ? null : segment.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${segment.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{segment.title}</CardTitle>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform ${isActive ? "rotate-90" : ""}`}
                  />
                </div>
                <p className="text-gray-300 text-sm mt-2">{segment.description}</p>
              </CardHeader>

              {isActive && (
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {segment.subsections.map((subsection) => (
                      <div
                        key={subsection.id}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          scrollToSection(subsection.anchor)
                        }}
                      >
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{subsection.title}</h4>
                          {subsection.graphics && subsection.graphics.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {subsection.graphics.map((graphic) => (
                                <Badge
                                  key={graphic}
                                  variant="outline"
                                  className="text-xs border-[#00D4FF]/30 text-[#00D4FF]"
                                >
                                  📊 {graphic}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 rounded-lg border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold mb-2">Visual Asset Library</h3>
            <p className="text-gray-300 text-sm">
              Access all 8 integrated graphics and diagrams referenced throughout the documentation
            </p>
          </div>
          <Button
            className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white"
            onClick={() => scrollToSection("#graphics-library")}
          >
            View Graphics Library
          </Button>
        </div>
      </div>
    </div>
  )
}
