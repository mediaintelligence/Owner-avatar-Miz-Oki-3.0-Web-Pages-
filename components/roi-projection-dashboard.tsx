"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, DollarSign, Users, Target, Calculator, BarChart3 } from "lucide-react"

interface ROIMetric {
  name: string
  current: number
  projected: number
  improvement: number
  unit: string
  icon: any
  color: string
}

const roiMetrics: ROIMetric[] = [
  {
    name: "Conversion Rate",
    current: 2.5,
    projected: 3.5,
    improvement: 40,
    unit: "%",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    name: "Customer Acquisition Cost",
    current: 400,
    projected: 300,
    improvement: -25,
    unit: "$",
    icon: DollarSign,
    color: "text-[#00D4FF]",
  },
  {
    name: "Average Deal Size",
    current: 1200,
    projected: 1560,
    improvement: 30,
    unit: "$",
    icon: Target,
    color: "text-[#A47864]",
  },
  {
    name: "Time to Close",
    current: 45,
    projected: 36,
    improvement: -20,
    unit: " days",
    icon: Users,
    color: "text-purple-400",
  },
  {
    name: "Customer Lifetime Value",
    current: 5000,
    projected: 6750,
    improvement: 35,
    unit: "$",
    icon: BarChart3,
    color: "text-yellow-400",
  },
]

interface CohortData {
  month: string
  visitors: number
  trials: number
  conversions: number
  revenue: number
}

const cohortData: CohortData[] = [
  { month: "Jan", visitors: 10000, trials: 2500, conversions: 625, revenue: 750000 },
  { month: "Feb", visitors: 12000, trials: 3000, conversions: 750, revenue: 900000 },
  { month: "Mar", visitors: 15000, trials: 3750, conversions: 938, revenue: 1125000 },
  { month: "Apr", visitors: 18000, trials: 4500, conversions: 1125, revenue: 1350000 },
  { month: "May", visitors: 22000, trials: 5500, conversions: 1375, revenue: 1650000 },
  { month: "Jun", visitors: 25000, trials: 6250, conversions: 1563, revenue: 1875000 },
]

export function ROIProjectionDashboard() {
  const [timeHorizon, setTimeHorizon] = useState([12])
  const [investmentLevel, setInvestmentLevel] = useState([100])

  const calculateROI = () => {
    const months = timeHorizon[0]
    const investment = investmentLevel[0] * 10000 // Scale to realistic investment
    const monthlyRevenue = 1875000 // Based on June projection
    const totalRevenue = monthlyRevenue * months
    const roi = ((totalRevenue - investment) / investment) * 100
    return Math.round(roi)
  }

  const calculateBreakEven = () => {
    const investment = investmentLevel[0] * 10000
    const monthlyRevenue = 1875000
    return Math.ceil(investment / monthlyRevenue)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ROI Projection{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive ROI calculator with real-time projections and performance metrics
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {roiMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.name} className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                    <Badge
                      className={
                        metric.improvement > 0
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30"
                      }
                    >
                      {metric.improvement > 0 ? "+" : ""}
                      {metric.improvement}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-sm">{metric.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-gray-400 text-sm line-through">
                        {metric.unit}
                        {metric.current.toLocaleString()}
                      </span>
                      <span className={`text-lg font-bold ${metric.color}`}>
                        {metric.unit}
                        {metric.projected.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Interactive ROI Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium mb-3 block">
                  Time Horizon: {timeHorizon[0]} months
                </label>
                <Slider
                  value={timeHorizon}
                  onValueChange={setTimeHorizon}
                  max={36}
                  min={3}
                  step={3}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>3 months</span>
                  <span>36 months</span>
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-3 block">
                  Investment Level: ${(investmentLevel[0] * 10000).toLocaleString()}
                </label>
                <Slider
                  value={investmentLevel}
                  onValueChange={setInvestmentLevel}
                  max={500}
                  min={50}
                  step={25}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$500K</span>
                  <span>$5M</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#00D4FF]/20 rounded-lg border border-[#00D4FF]/30">
                    <div className="text-2xl font-bold text-[#00D4FF]">{calculateROI()}%</div>
                    <div className="text-sm text-gray-300">Projected ROI</div>
                  </div>
                  <div className="text-center p-4 bg-[#A47864]/20 rounded-lg border border-[#A47864]/30">
                    <div className="text-2xl font-bold text-[#A47864]">{calculateBreakEven()}</div>
                    <div className="text-sm text-gray-300">Months to Break-even</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Revenue Projection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cohortData.map((data, index) => (
                  <div key={data.month} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{data.month}</span>
                      <span className="text-[#00D4FF] font-semibold">${(data.revenue / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#00D4FF] to-[#A47864] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(data.revenue / 2000000) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{data.visitors.toLocaleString()} visitors</span>
                      <span>{data.conversions} conversions</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel Analysis */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10 mb-12">
          <CardHeader>
            <CardTitle className="text-white">Conversion Funnel Benchmarking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">MediaIntelligence.ai Performance</h4>
                <div className="space-y-4">
                  {[
                    { stage: "Homepage → Trial", rate: 25, industry: 15 },
                    { stage: "Trial → Active", rate: 60, industry: 40 },
                    { stage: "Active → Paid", rate: 30, industry: 20 },
                    { stage: "Paid → Expansion", rate: 40, industry: 25 },
                  ].map((funnel) => (
                    <div key={funnel.stage} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white text-sm">{funnel.stage}</span>
                        <div className="flex space-x-4">
                          <span className="text-[#00D4FF] font-semibold">{funnel.rate}%</span>
                          <span className="text-gray-400">{funnel.industry}%</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-[#00D4FF] h-2 rounded-full" style={{ width: `${funnel.rate}%` }}></div>
                        </div>
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${funnel.industry}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Optimization Opportunities</h4>
                <div className="space-y-4">
                  {[
                    {
                      opportunity: "Homepage CTA Optimization",
                      impact: "High",
                      effort: "Low",
                      roi: "+15% conversion",
                    },
                    {
                      opportunity: "Trial Onboarding UX",
                      impact: "High",
                      effort: "Medium",
                      roi: "+25% activation",
                    },
                    {
                      opportunity: "Pricing Page Redesign",
                      impact: "Medium",
                      effort: "Medium",
                      roi: "+10% conversion",
                    },
                    {
                      opportunity: "Mobile Experience",
                      impact: "High",
                      effort: "High",
                      roi: "+30% mobile conv.",
                    },
                  ].map((opp, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-white font-medium text-sm">{opp.opportunity}</h5>
                        <Badge
                          className={
                            opp.impact === "High"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }
                        >
                          {opp.impact}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Effort: {opp.effort}</span>
                        <span className="text-[#00D4FF]">{opp.roi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Indicators */}
        <Card className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Success Indicators & KPIs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">↗️ 40%</div>
                <div className="text-white font-medium">Conversion Rate</div>
                <div className="text-gray-300 text-sm">Improvement Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D4FF] mb-2">📈 25%</div>
                <div className="text-white font-medium">CAC Reduction</div>
                <div className="text-gray-300 text-sm">Cost Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A47864] mb-2">⚡ 3s</div>
                <div className="text-white font-medium">Load Time</div>
                <div className="text-gray-300 text-sm">Performance Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">🎯 35%</div>
                <div className="text-white font-medium">LTV Increase</div>
                <div className="text-gray-300 text-sm">Revenue Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
