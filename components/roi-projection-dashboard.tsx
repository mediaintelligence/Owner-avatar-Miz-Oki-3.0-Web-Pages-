"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, DollarSign, Users, Target, Calculator, BarChart3, PieChart, LineChart } from "lucide-react"

const conversionFunnelData = [
  { stage: "Website Visitors", current: 10000, industry: 10000, improvement: 0 },
  { stage: "Leads Generated", current: 850, industry: 235, improvement: 261 },
  { stage: "Marketing Qualified", current: 425, industry: 94, improvement: 352 },
  { stage: "Sales Qualified", current: 255, industry: 47, improvement: 443 },
  { stage: "Opportunities", current: 128, industry: 19, improvement: 574 },
  { stage: "Closed Won", current: 38, industry: 8, improvement: 375 },
]

const revenueProjections = [
  { month: "Month 1", revenue: 45000, customers: 15, avgDeal: 3000 },
  { month: "Month 3", revenue: 78000, customers: 26, avgDeal: 3000 },
  { month: "Month 6", revenue: 135000, customers: 45, avgDeal: 3000 },
  { month: "Month 9", revenue: 198000, customers: 66, avgDeal: 3000 },
  { month: "Month 12", revenue: 285000, customers: 95, avgDeal: 3000 },
]

const cohortAnalysis = [
  { cohort: "Q1 2024", month1: 100, month3: 85, month6: 78, month12: 72 },
  { cohort: "Q2 2024", month1: 100, month3: 88, month6: 82, month12: 76 },
  { cohort: "Q3 2024", month1: 100, month3: 91, month6: 85, month12: 80 },
  { cohort: "Q4 2024", month1: 100, month3: 94, month6: 89, month12: 84 },
]

export function ROIProjectionDashboard() {
  const [timeHorizon, setTimeHorizon] = useState([12])
  const [investment, setInvestment] = useState([230000])
  const [conversionRate, setConversionRate] = useState([8.5])
  const [avgDealSize, setAvgDealSize] = useState([3000])

  const calculateROI = () => {
    const months = timeHorizon[0]
    const monthlyVisitors = 10000
    const leads = (monthlyVisitors * conversionRate[0]) / 100
    const customers = leads * 0.15 // 15% lead to customer conversion
    const monthlyRevenue = customers * avgDealSize[0]
    const totalRevenue = monthlyRevenue * months
    const roi = ((totalRevenue - investment[0]) / investment[0]) * 100

    return {
      totalRevenue,
      monthlyRevenue,
      customers: customers * months,
      roi,
      breakEven: Math.ceil(investment[0] / monthlyRevenue),
    }
  }

  const projections = calculateROI()

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
            Interactive calculator showing projected returns on your MediaIntelligence.ai investment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* ROI Calculator */}
          <Card className="lg:col-span-1 bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Time Horizon: {timeHorizon[0]} months
                </label>
                <Slider
                  value={timeHorizon}
                  onValueChange={setTimeHorizon}
                  max={24}
                  min={3}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Investment: ${investment[0].toLocaleString()}
                </label>
                <Slider
                  value={investment}
                  onValueChange={setInvestment}
                  max={500000}
                  min={100000}
                  step={10000}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Conversion Rate: {conversionRate[0]}%
                </label>
                <Slider
                  value={conversionRate}
                  onValueChange={setConversionRate}
                  max={15}
                  min={2}
                  step={0.5}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Avg Deal Size: ${avgDealSize[0].toLocaleString()}
                </label>
                <Slider
                  value={avgDealSize}
                  onValueChange={setAvgDealSize}
                  max={10000}
                  min={1000}
                  step={100}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/10 border-[#00D4FF]/20">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-[#00D4FF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  {projections.roi > 0 ? "+" : ""}
                  {projections.roi.toFixed(0)}%
                </div>
                <div className="text-[#00D4FF] text-sm">Total ROI</div>
                <div className="text-gray-300 text-xs mt-1">Over {timeHorizon[0]} months</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#A47864]/20 to-[#A47864]/10 border-[#A47864]/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-[#A47864] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">${projections.totalRevenue.toLocaleString()}</div>
                <div className="text-[#A47864] text-sm">Total Revenue</div>
                <div className="text-gray-300 text-xs mt-1">
                  ${projections.monthlyRevenue.toLocaleString()}/month avg
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/10 border-[#10B981]/20">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-[#10B981] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{Math.round(projections.customers)}</div>
                <div className="text-[#10B981] text-sm">New Customers</div>
                <div className="text-gray-300 text-xs mt-1">
                  {Math.round(projections.customers / timeHorizon[0])}/month avg
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/10 border-[#F59E0B]/20">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-[#F59E0B] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{projections.breakEven}</div>
                <div className="text-[#F59E0B] text-sm">Break-even</div>
                <div className="text-gray-300 text-xs mt-1">Months to profitability</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="funnel" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-md">
            <TabsTrigger value="funnel" className="data-[state=active]:bg-white/20 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Conversion Funnel
            </TabsTrigger>
            <TabsTrigger value="revenue" className="data-[state=active]:bg-white/20 text-white">
              <LineChart className="h-4 w-4 mr-2" />
              Revenue Growth
            </TabsTrigger>
            <TabsTrigger value="cohorts" className="data-[state=active]:bg-white/20 text-white">
              <PieChart className="h-4 w-4 mr-2" />
              Cohort Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="funnel">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Conversion Funnel Benchmarking</CardTitle>
                <p className="text-gray-300">MediaIntelligence.ai vs Industry Average</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {conversionFunnelData.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{stage.stage}</span>
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-[#00D4FF]/20 text-[#00D4FF]">{stage.current.toLocaleString()}</Badge>
                          <Badge className="bg-gray-600/20 text-gray-400">
                            Industry: {stage.industry.toLocaleString()}
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-400">+{stage.improvement}%</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">MediaIntelligence.ai</span>
                            <span className="text-[#00D4FF]">{stage.current.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-[#00D4FF] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(stage.current / conversionFunnelData[0].current) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Industry Average</span>
                            <span className="text-gray-400">{stage.industry.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gray-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(stage.industry / conversionFunnelData[0].industry) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Revenue Growth Projection</CardTitle>
                <p className="text-gray-300">Monthly recurring revenue and customer acquisition</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {revenueProjections.map((projection, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">{projection.month}</div>
                          <div className="text-gray-400 text-sm">{projection.customers} customers</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#00D4FF] font-bold text-lg">${projection.revenue.toLocaleString()}</div>
                          <div className="text-gray-400 text-sm">${projection.avgDeal.toLocaleString()} avg deal</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#A47864] mb-2">$285K</div>
                      <div className="text-gray-300">Month 12 Revenue</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#10B981]">95</div>
                        <div className="text-gray-400 text-sm">Total Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#F59E0B]">$3,000</div>
                        <div className="text-gray-400 text-sm">Avg Deal Size</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customer LTV</span>
                        <span className="text-white">$18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">CAC Payback</span>
                        <span className="text-white">4.2 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">LTV:CAC Ratio</span>
                        <span className="text-white">7.5:1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cohorts">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Customer Cohort Analysis</CardTitle>
                <p className="text-gray-300">Retention rates by customer acquisition cohort</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white font-semibold py-3 px-4">Cohort</th>
                        <th className="text-center text-white font-semibold py-3 px-4">Month 1</th>
                        <th className="text-center text-white font-semibold py-3 px-4">Month 3</th>
                        <th className="text-center text-white font-semibold py-3 px-4">Month 6</th>
                        <th className="text-center text-white font-semibold py-3 px-4">Month 12</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cohortAnalysis.map((cohort, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="text-white py-4 px-4 font-medium">{cohort.cohort}</td>
                          <td className="py-4 px-4 text-center">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                              {cohort.month1}%
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                              {cohort.month3}%
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400">
                              {cohort.month6}%
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                              {cohort.month12}%
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-green-500/10 border-green-500/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">84%</div>
                      <div className="text-gray-300 text-sm">12-Month Retention</div>
                      <div className="text-green-400 text-xs mt-1">Latest cohort</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#00D4FF]/10 border-[#00D4FF]/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-[#00D4FF] mb-2">+12%</div>
                      <div className="text-gray-300 text-sm">Retention Improvement</div>
                      <div className="text-[#00D4FF] text-xs mt-1">Year over year</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#A47864]/10 border-[#A47864]/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-[#A47864] mb-2">$18K</div>
                      <div className="text-gray-300 text-sm">Customer LTV</div>
                      <div className="text-[#A47864] text-xs mt-1">Average lifetime value</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
