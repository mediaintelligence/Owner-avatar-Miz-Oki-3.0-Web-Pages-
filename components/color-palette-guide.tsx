"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface ColorPalette {
  name: string
  hex: string
  rgb: string
  usage: string
  category: "primary" | "secondary" | "accent" | "neutral" | "semantic"
}

const colorPalettes: ColorPalette[] = [
  // Primary Colors
  {
    name: "Intelligence Blue",
    hex: "#1B365D",
    rgb: "rgb(27, 54, 93)",
    usage: "Primary brand color, backgrounds, headers",
    category: "primary",
  },
  {
    name: "AI Cyan",
    hex: "#00D4FF",
    rgb: "rgb(0, 212, 255)",
    usage: "Interactive elements, AI features, accents",
    category: "primary",
  },
  {
    name: "Mocha Mousse",
    hex: "#A47864",
    rgb: "rgb(164, 120, 100)",
    usage: "CTAs, warm accents, 2025 trend color",
    category: "primary",
  },

  // Secondary Colors
  {
    name: "Deep Navy",
    hex: "#2A4A6B",
    rgb: "rgb(42, 74, 107)",
    usage: "Secondary backgrounds, gradients",
    category: "secondary",
  },
  {
    name: "Electric Blue",
    hex: "#0099CC",
    rgb: "rgb(0, 153, 204)",
    usage: "Hover states, secondary interactions",
    category: "secondary",
  },
  {
    name: "Warm Taupe",
    hex: "#8B6F47",
    rgb: "rgb(139, 111, 71)",
    usage: "Secondary warm accents",
    category: "secondary",
  },

  // Neutral Colors
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "rgb(255, 255, 255)",
    usage: "Text, backgrounds, contrast",
    category: "neutral",
  },
  {
    name: "Light Gray",
    hex: "#F7FAFC",
    rgb: "rgb(247, 250, 252)",
    usage: "Light backgrounds, subtle elements",
    category: "neutral",
  },
  {
    name: "Medium Gray",
    hex: "#718096",
    rgb: "rgb(113, 128, 150)",
    usage: "Secondary text, borders",
    category: "neutral",
  },
  {
    name: "Dark Gray",
    hex: "#2D3748",
    rgb: "rgb(45, 55, 72)",
    usage: "Dark mode, text, strong contrast",
    category: "neutral",
  },

  // Semantic Colors
  {
    name: "Success Green",
    hex: "#10B981",
    rgb: "rgb(16, 185, 129)",
    usage: "Success states, positive sentiment",
    category: "semantic",
  },
  {
    name: "Warning Orange",
    hex: "#F59E0B",
    rgb: "rgb(245, 158, 11)",
    usage: "Warnings, alerts, attention",
    category: "semantic",
  },
  {
    name: "Error Red",
    hex: "#EF4444",
    rgb: "rgb(239, 68, 68)",
    usage: "Errors, negative sentiment, critical alerts",
    category: "semantic",
  },
  {
    name: "Info Purple",
    hex: "#8B5CF6",
    rgb: "rgb(139, 92, 246)",
    usage: "Information, analytics, data visualization",
    category: "semantic",
  },
]

export function ColorPaletteGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(colorName)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const getCategoryTitle = (category: string) => {
    const titles = {
      primary: "Primary Brand Colors",
      secondary: "Secondary Colors",
      accent: "Accent Colors",
      neutral: "Neutral Palette",
      semantic: "Semantic Colors",
    }
    return titles[category as keyof typeof titles] || category
  }

  const groupedColors = colorPalettes.reduce(
    (acc, color) => {
      if (!acc[color.category]) {
        acc[color.category] = []
      }
      acc[color.category].push(color)
      return acc
    },
    {} as Record<string, ColorPalette[]>,
  )

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Color Palette
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive color system for consistent brand application across all visual assets and diagrams
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedColors).map(([category, colors]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-white mb-6">{getCategoryTitle(category)}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colors.map((color) => (
                  <Card
                    key={color.name}
                    className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-lg">{color.name}</CardTitle>
                        <Badge
                          className={
                            category === "primary"
                              ? "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30"
                              : category === "secondary"
                                ? "bg-[#A47864]/20 text-[#A47864] border-[#A47864]/30"
                                : category === "semantic"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div
                        className="w-full h-24 rounded-lg border border-white/10 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      ></div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">HEX</span>
                          <div className="flex items-center space-x-2">
                            <code className="text-white bg-white/10 px-2 py-1 rounded text-sm">{color.hex}</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                            >
                              {copiedColor === `${color.name}-hex` ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">RGB</span>
                          <div className="flex items-center space-x-2">
                            <code className="text-white bg-white/10 px-2 py-1 rounded text-sm">{color.rgb}</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                            >
                              {copiedColor === `${color.name}-rgb` ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/10">
                          <p className="text-gray-300 text-sm">{color.usage}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl">Design Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Accessibility Standards</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• WCAG 2.1 Level AA compliance minimum</li>
                    <li>• 4.5:1 contrast ratio for normal text</li>
                    <li>• 3:1 contrast ratio for large text</li>
                    <li>• Color-blind friendly combinations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Usage Hierarchy</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Primary colors: 60% of design</li>
                    <li>• Secondary colors: 30% of design</li>
                    <li>• Accent colors: 10% of design</li>
                    <li>• Semantic colors: Status indicators only</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
