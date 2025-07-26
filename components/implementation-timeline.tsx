"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, Users, DollarSign, Target, Rocket, Settings, BarChart3, Zap } from "lucide-react"

const phases = [
  {
    id: "foundation",
    name: "Foundation & Planning",
    duration: "Weeks 1-4",
    status: "completed",
    progress: 100,
    color: "#10B981",
    icon: Settings,
    deliverables: [
      "Market research & competitive analysis",
      "Technical architecture decisions",
      "User journey mapping",
      "Brand guidelines & messaging",
      "Content strategy & SEO research",
      "Development infrastructure setup",
    ],
    team: ["PM", "UX Designer", "Developer", "Content Strategist"],
    budget: "$45,000",
  },
  {
    id: "design",
    name: "Design & Prototyping",
    duration: "Weeks 5-8",
    status: "in-progress",
    progress: 75,
    color: "#00D4FF",
    icon: Target,
    deliverables: [
      "Comprehensive wireframes",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Usability testing results",
      "Responsive design system",
      "Component library documentation",
    ],
    team: ["UX Designer", "UI Designer", "Frontend Dev", "QA"],
    budget: "$38,000",
  },
  {
    id: "development",
    name: "Core Development",
    duration: "Weeks 9-16",
    status: "upcoming",
    progress: 0,
    color: "#A47864",
    icon: Rocket,
    deliverables: [
      "Frontend architecture implementation",
      "CMS integration & content management",
      "Conversion features & forms",
      "Core functionality & AI features",
      "Landing pages & user flows",
      "Analytics & tracking setup",
    ],
    team: ["Frontend Dev", "Backend Dev", "DevOps", "QA"],
    budget: "$85,000",
  },
  {
    id: "optimization",
    name: "Enhancement & Optimization",
    duration: "Weeks 17-24",
    status: "upcoming",
    progress: 0,
    color: "#F59E0B",
    icon: BarChart3,
    deliverables: [
      "Advanced AI capabilities",
      "Performance optimization",
      "Conversion rate optimization",
      "Content library development",
      "Lead magnets & nurture sequences",
      "A/B testing framework",
    ],
    team: ["Full Stack Dev", "Data Scientist", "Content", "Marketing"],
    budget: "$62,000",
  },
]

const teamComposition = [
  { role: "Frontend Developers", count: 4, color: "#00D4FF" },
  { role: "Backend Developers", count: 6, color: "#A47864" },
  { role: "UI/UX Designers", count: 3, color: "#10B981" },
  { role: "Data Scientists", count: 2, color: "#F59E0B" },
  { role: "DevOps Engineers", count: 2, color: "#8B5CF6" },
  { role: "QA Engineers", count: 2, color: "#EF4444" },
  { role: "Project Manager", count: 1, color: "#06B6D4" },
]

const budgetAllocation = [
  { category: "Development", percentage: 40, amount: "$92,000", color: "#00D4FF" },
  { category: "Infrastructure", percentage: 25, amount: "$57,500", color: "#A47864" },
  { category: "Third-party Services", percentage: 15, amount: "$34,500", color: "#10B981" },
  { category: "Security & Compliance", percentage: 10, amount: "$23,000", color: "#F59E0B" },
  { category: "Marketing & Launch", percentage: 10, amount: "$23,000", color: "#8B5CF6" },
]

const kpiTargets = [
  { metric: "Conversion Rate", current: "2.3%", target: "8-10%", status: "on-track" },
  { metric: "Page Load Time", current: "4.2s", target: "3s", status: "needs-attention" },
  { metric: "Core Web Vitals", current: "65%", target: "90%+", status: "on-track" },
  { metric: "Lead Quality Score", current: "6.2/10", target: "8.5/10", status: "ahead" },
]

export function ImplementationTimeline() {
  const [selectedView, setSelectedView] = useState("timeline")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "upcoming":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getKPIStatusColor = (status: string) => {
    switch (status) {
      case "ahead":
        return "text-green-400"
      case "on-track":
        return "text-blue-400"
      case "needs-attention":
        return "text-yellow-400"
      case "behind":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2A4A6B] to-[#1B365D]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Implementation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic 6-month transformation from concept to market leader
          </p>
        </div>

        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/10 backdrop-blur-md">
            <TabsTrigger value="timeline" className="data-[state=active]:bg-white/20 text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-white/20 text-white">
              <Users className="h-4 w-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="budget" className="data-[state=active]:bg-white/20 text-white">
              <DollarSign className="h-4 w-4 mr-2" />
              Budget
            </TabsTrigger>
            <TabsTrigger value="kpis" className="data-[state=active]:bg-white/20 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              KPIs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <Card key={phase.id} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: phase.color }}
                        >
                          <phase.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">{phase.name}</CardTitle>
                          <p className="text-gray-300">{phase.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(phase.status)}>{phase.status.replace("-", " ")}</Badge>
                        <div className="text-right">
                          <div className="text-white font-semibold">{phase.progress}%</div>
                          <div className="text-gray-400 text-sm">Complete</div>
                        </div>
                      </div>
                    </div>
                    <Progress value={phase.progress} className="mt-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Deliverables</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Team Members</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.team.map((member, idx) => (
                            <Badge key={idx} variant="outline" className="text-gray-300 border-gray-600">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Budget Allocation</h4>
                        <div className="text-2xl font-bold" style={{ color: phase.color }}>
                          {phase.budget}
                        </div>
                        <div className="text-gray-400 text-sm">Phase budget</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamComposition.map((team, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: team.color }}>
                      {team.count}
                    </div>
                    <div className="text-white font-semibold mb-2">{team.role}</div>
                    <div className="text-gray-400 text-sm">Full-time equivalent</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Team Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamComposition.map((team, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: team.color }}></div>
                        <span className="text-white">{team.role}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32">
                          <Progress value={(team.count / 20) * 100} className="h-2" />
                        </div>
                        <span className="text-gray-300 w-8 text-right">{team.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Budget Allocation</CardTitle>
                  <p className="text-gray-300">Total Project Budget: $230,000</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {budgetAllocation.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{item.category}</span>
                          <div className="text-right">
                            <div className="text-white font-semibold">{item.amount}</div>
                            <div className="text-gray-400 text-sm">{item.percentage}%</div>
                          </div>
                        </div>
                        <Progress value={item.percentage} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">ROI Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#00D4FF] mb-2">340%</div>
                      <div className="text-gray-300">Projected 12-month ROI</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#A47864]">6 months</div>
                        <div className="text-gray-400 text-sm">Break-even point</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#10B981]">$780K</div>
                        <div className="text-gray-400 text-sm">Year 1 revenue</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customer Acquisition</span>
                        <span className="text-white">-25% cost reduction</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Conversion Rate</span>
                        <span className="text-white">+40% improvement</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Average Deal Size</span>
                        <span className="text-white">+30% increase</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kpis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {kpiTargets.map((kpi, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-semibold">{kpi.metric}</h3>
                      <Badge className={getKPIStatusColor(kpi.status)}>{kpi.status.replace("-", " ")}</Badge>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-gray-400 text-sm">Current</div>
                        <div className="text-2xl font-bold text-white">{kpi.current}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm">Target</div>
                        <div className={`text-2xl font-bold ${getKPIStatusColor(kpi.status)}`}>{kpi.target}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Success Metrics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-[#00D4FF] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">2.8s</div>
                    <div className="text-gray-300 text-sm">Average Load Time</div>
                    <div className="text-[#00D4FF] text-xs mt-1">Target: 3s</div>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-[#A47864] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">94%</div>
                    <div className="text-gray-300 text-sm">Core Web Vitals</div>
                    <div className="text-[#A47864] text-xs mt-1">Target: 90%+</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-[#10B981] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">9.2%</div>
                    <div className="text-gray-300 text-sm">Conversion Rate</div>
                    <div className="text-[#10B981] text-xs mt-1">Target: 8-10%</div>
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
