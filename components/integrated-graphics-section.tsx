"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Eye } from "lucide-react"

interface IntegratedGraphic {
  id: string
  name: string
  filename: string
  description: string
  relatedSections: string[]
  category: "architecture" | "process" | "analytics" | "roadmap"
  placeholder: string
}

const integratedGraphics: IntegratedGraphic[] = [
  {
    id: "bgi-flywheel",
    name: "BGI Flywheel",
    filename: "bgi-flywheel.svg",
    description:
      "Illustrates the continuous feedback loop of Business General Intelligence, showing how data flows through sensing, reasoning, deciding, acting, and learning phases.",
    relatedSections: ["BGI Framework", "Autonomous Systems", "Intelligence Layers"],
    category: "process",
    placeholder: "🔄",
  },
  {
    id: "ai-market-landscape",
    name: "AI Market Landscape",
    filename: "ai-market-landscape.png",
    description:
      "Comprehensive competitive analysis showing MediaIntelligence.ai's positioning relative to major players in the AI-powered media monitoring space.",
    relatedSections: ["Competitive Analysis", "Market Positioning", "Value Proposition"],
    category: "analytics",
    placeholder: "🗺️",
  },
  {
    id: "e-shkg-stack",
    name: "E-SHKG Stack",
    filename: "e-shkg-stack.svg",
    description:
      "Enterprise Semantic Hybrid Knowledge Graph architecture showing the layered approach to data processing, semantic understanding, and knowledge extraction.",
    relatedSections: ["Technical Architecture", "System Design", "Data Processing"],
    category: "architecture",
    placeholder: "🏗️",
  },
  {
    id: "cross-platform-loop",
    name: "Cross-Platform Loop",
    filename: "cross-platform-loop.svg",
    description:
      "Multi-platform data integration flow showing how information is collected, processed, and distributed across various channels and endpoints.",
    relatedSections: ["Integration Framework", "API Design", "Data Flow"],
    category: "process",
    placeholder: "🔗",
  },
  {
    id: "sepsis-causal-flow",
    name: "Sepsis Causal Flow",
    filename: "sepsis-causal-flow.png",
    description:
      "Healthcare-specific AI decision-making diagram showing causal relationships in sepsis detection and treatment recommendation systems.",
    relatedSections: ["Healthcare AI", "Decision Systems", "Causal Inference"],
    category: "process",
    placeholder: "🏥",
  },
  {
    id: "zero-trust-mesh",
    name: "Zero-Trust Mesh",
    filename: "zero-trust-mesh.svg",
    description:
      "Security architecture visualization showing the zero-trust network model with distributed access controls and verification points.",
    relatedSections: ["Security Framework", "Access Control", "Network Architecture"],
    category: "architecture",
    placeholder: "🛡️",
  },
  {
    id: "blended-roi-chart",
    name: "Blended ROI Chart",
    filename: "blended-roi-chart.svg",
    description:
      "Multi-dimensional ROI analysis showing financial returns, operational efficiency gains, and strategic value creation across different time horizons.",
    relatedSections: ["ROI Analysis", "Value Metrics", "Financial Projections"],
    category: "analytics",
    placeholder: "📈",
  },
  {
    id: "unified-roadmap",
    name: "Unified Roadmap",
    filename: "unified-roadmap.png",
    description:
      "Comprehensive product development timeline showing major milestones, feature releases, and strategic initiatives across the 12-month implementation plan.",
    relatedSections: ["Implementation Timeline", "Development Phases", "Milestone Tracking"],
    category: "roadmap",
    placeholder: "🛣️",
  },
]

export function IntegratedGraphicsSection() {
  const getCategoryColor = (category: string) => {
    const colors = {
      architecture: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      process: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      analytics: "bg-green-500/20 text-green-400 border-green-500/30",
      roadmap: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  return (
    <section id="graphics-library" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Integrated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Visual Assets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive visual documentation with 8 key diagrams and graphics that illustrate our complete framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {integratedGraphics.map((graphic) => (
            <Card
              key={graphic.id}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{graphic.placeholder}</div>
                    <div>
                      <CardTitle className="text-white text-lg">{graphic.name}</CardTitle>
                      <Badge className={getCategoryColor(graphic.category)}>{graphic.category}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{graphic.placeholder}</div>
                    <div className="text-sm text-gray-400">{graphic.filename}</div>
                    <div className="text-xs text-gray-500 mt-1">Ready for SVG/PNG drop-in</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm">{graphic.description}</p>

                <div className="space-y-2">
                  <h4 className="text-white font-medium text-sm">Related Sections:</h4>
                  <div className="flex flex-wrap gap-1">
                    {graphic.relatedSections.map((section) => (
                      <Badge key={section} variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                        {section}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Design Team Integration</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              All graphics are configured with standardized filenames for seamless asset replacement. Simply drop final
              SVG/PNG files into the referenced locations to render automatically.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-[#00D4FF] font-semibold">4</div>
                <div className="text-gray-400">Architecture Diagrams</div>
              </div>
              <div className="text-center">
                <div className="text-[#A47864] font-semibold">3</div>
                <div className="text-gray-400">Process Flows</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold">2</div>
                <div className="text-gray-400">Analytics Charts</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold">1</div>
                <div className="text-gray-400">Roadmap Visual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
