"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Maximize2 } from "lucide-react"

interface GraphicAsset {
  id: string
  name: string
  filename: string
  description: string
  category: "architecture" | "process" | "analytics" | "roadmap"
  status: "placeholder" | "draft" | "final"
  dimensions: string
  lastUpdated: string
}

const graphicAssets: GraphicAsset[] = [
  {
    id: "bgi-flywheel",
    name: "BGI Flywheel",
    filename: "bgi-flywheel.svg",
    description: "Business General Intelligence feedback loop visualization",
    category: "process",
    status: "placeholder",
    dimensions: "1200x800",
    lastUpdated: "2025-01-24",
  },
  {
    id: "ai-market-landscape",
    name: "AI Market Landscape",
    filename: "ai-market-landscape.png",
    description: "Competitive positioning and market analysis diagram",
    category: "analytics",
    status: "placeholder",
    dimensions: "1600x1000",
    lastUpdated: "2025-01-24",
  },
  {
    id: "e-shkg-stack",
    name: "E-SHKG Stack",
    filename: "e-shkg-stack.svg",
    description: "Enterprise Semantic Hybrid Knowledge Graph architecture",
    category: "architecture",
    status: "placeholder",
    dimensions: "1400x900",
    lastUpdated: "2025-01-24",
  },
  {
    id: "cross-platform-loop",
    name: "Cross-Platform Loop",
    filename: "cross-platform-loop.svg",
    description: "Multi-platform data integration and processing flow",
    category: "process",
    status: "placeholder",
    dimensions: "1300x700",
    lastUpdated: "2025-01-24",
  },
  {
    id: "sepsis-causal-flow",
    name: "Sepsis Causal Flow",
    filename: "sepsis-causal-flow.png",
    description: "Healthcare AI decision-making causal relationship diagram",
    category: "process",
    status: "placeholder",
    dimensions: "1500x1100",
    lastUpdated: "2025-01-24",
  },
  {
    id: "zero-trust-mesh",
    name: "Zero-Trust Mesh",
    filename: "zero-trust-mesh.svg",
    description: "Security architecture and access control visualization",
    category: "architecture",
    status: "placeholder",
    dimensions: "1200x900",
    lastUpdated: "2025-01-24",
  },
  {
    id: "blended-roi-chart",
    name: "Blended ROI Chart",
    filename: "blended-roi-chart.svg",
    description: "Multi-dimensional ROI analysis and projection visualization",
    category: "analytics",
    status: "placeholder",
    dimensions: "1000x600",
    lastUpdated: "2025-01-24",
  },
  {
    id: "unified-roadmap",
    name: "Unified Roadmap",
    filename: "unified-roadmap.png",
    description: "Product development timeline and milestone visualization",
    category: "roadmap",
    status: "placeholder",
    dimensions: "1800x1000",
    lastUpdated: "2025-01-24",
  },
]

export function GraphicsManager() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicAsset | null>(null)

  const categories = ["all", "architecture", "process", "analytics", "roadmap"]

  const filteredAssets =
    selectedCategory === "all" ? graphicAssets : graphicAssets.filter((asset) => asset.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors = {
      architecture: "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30",
      process: "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30",
      analytics: "bg-green-500/20 text-green-400 border-green-500/30",
      roadmap: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      placeholder: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      draft: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      final: "bg-green-500/20 text-green-400 border-green-500/30",
    }
    return colors[status as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "bg-[#00D4FF] text-white"
                : "border-white/20 text-gray-300 hover:bg-white/10"
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card
            key={asset.id}
            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
                <div className="flex gap-2">
                  <Badge className={getCategoryColor(asset.category)}>{asset.category}</Badge>
                  <Badge className={getStatusColor(asset.status)}>{asset.status}</Badge>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm text-gray-400">{asset.filename}</div>
                  <div className="text-xs text-gray-500 mt-1">{asset.dimensions}</div>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{asset.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>Updated: {asset.lastUpdated}</span>
                <span>{asset.dimensions}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                  onClick={() => setSelectedGraphic(asset)}
                >
                  <Maximize2 className="h-3 w-3 mr-1" />
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

      {selectedGraphic && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">{selectedGraphic.name}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedGraphic(null)}
                className="text-white hover:bg-white/10"
              >
                ✕
              </Button>
            </div>

            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-xl text-gray-300 mb-2">{selectedGraphic.filename}</div>
                <div className="text-sm text-gray-400">{selectedGraphic.description}</div>
                <div className="text-xs text-gray-500 mt-2">{selectedGraphic.dimensions}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download Asset
              </Button>
              <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Editor
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
