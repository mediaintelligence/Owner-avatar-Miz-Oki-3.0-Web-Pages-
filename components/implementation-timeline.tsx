"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Users, DollarSign, Target, CheckCircle, Clock, AlertTriangle } from "lucide-react"

interface Milestone {
  id: string
  title: string
  description: string
  startWeek: number
  duration: number
  status: "completed" | "in-progress" | "upcoming" | "at-risk"
  team: string[]
  deliverables: string[]
}

interface Phase {
  id: string
  name: string
  description: string
  duration: string
  color: string
  milestones: Milestone[]
}

const implementationPhases: Phase[] = [
  {
    id: "foundation",
    name: "Foundation",
    description: "Design system creation and core infrastructure",
    duration: "Months 1-3",
    color: "bg-[#00D4FF]",
    milestones: [
      {
        id: "design-system",
        title: "Design System Creation",
        description: "Brand guidelines, component library, and style guide",
        startWeek: 1,
        duration: 2,
        status: "completed",
        team: ["UI/UX Designers", "Frontend Developers"],
        deliverables: ["Component Library", "Brand Guidelines", "Design Tokens"],
      },
      {
        id: "homepage-redesign",
        title: "Homepage Redesign",
        description: "New hero section with split-screen design and live dashboard",
        startWeek: 3,
        duration: 2,
        status: "completed",
        team: ["UI/UX Designers", "Frontend Developers"],
        deliverables: ["Homepage Mockups", "Interactive Prototypes", "A/B Test Variants"],
      },
      {
        id: "core-templates",
        title: "Core Page Templates",
        description: "Product, pricing, and landing page templates",
        startWeek: 5,
        duration: 4,
        status: "in-progress",
        team: ["Frontend Developers", "Backend Developers"],
        deliverables: ["Page Templates", "CMS Integration", "SEO Optimization"],
      },
      {
        id: "mobile-optimization",
        title: "Mobile Optimization",
        description: "Responsive design and PWA implementation",
        startWeek: 9,
        duration: 4,
        status: "upcoming",
        team: ["Frontend Developers", "QA Engineers"],
        deliverables: ["Mobile Designs", "PWA Features", "Performance Optimization"],
      },
    ],
  },
  {
    id: "conversion-optimization",
    name: "Conversion Optimization",
    description: "A/B testing framework and personalization engine",
    duration: "Months 4-6",
    color: "bg-[#A47864]",
    milestones: [
      {
        id: "ab-testing",
        title: "A/B Testing Framework",
        description: "Experimentation platform for continuous optimization",
        startWeek: 13,
        duration: 4,
        status: "upcoming",
        team: ["Frontend Developers", "Data Scientists"],
        deliverables: ["Testing Platform", "Analytics Integration", "Reporting Dashboard"],
      },
      {
        id: "personalization",
        title: "Personalization Engine",
        description: "Dynamic content based on visitor behavior and demographics",
        startWeek: 17,
        duration: 4,
        status: "upcoming",
        team: ["Backend Developers", "Data Scientists"],
        deliverables: ["ML Models", "Content Engine", "User Segmentation"],
      },
      {
        id: "analytics-integration",
        title: "Advanced Analytics",
        description: "Comprehensive tracking and attribution modeling",
        startWeek: 21,
        duration: 4,
        status: "upcoming",
        team: ["Data Scientists", "Backend Developers"],
        deliverables: ["Attribution Models", "Custom Events", "ROI Tracking"],
      },
    ],
  },
  {
    id: "ai-features",
    name: "AI Features",
    description: "AI chatbot, predictive analytics, and automated insights",
    duration: "Months 7-9",
    color: "bg-green-500",
    milestones: [
      {
        id: "ai-chatbot",
        title: "AI Chatbot Implementation",
        description: "Intelligent customer support and lead qualification",
        startWeek: 25,
        duration: 4,
        status: "upcoming",
        team: ["AI Engineers", "Backend Developers"],
        deliverables: ["Chatbot Engine", "Knowledge Base", "Integration APIs"],
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        description: "Visitor behavior prediction and conversion forecasting",
        startWeek: 29,
        duration: 4,
        status: "upcoming",
        team: ["Data Scientists", "AI Engineers"],
        deliverables: ["Prediction Models", "Real-time Scoring", "Alert System"],
      },
      {
        id: "automated-insights",
        title: "Automated Insights",
        description: "AI-generated recommendations and optimization suggestions",
        startWeek: 33,
        duration: 4,
        status: "upcoming",
        team: ["AI Engineers", "Data Scientists"],
        deliverables: ["Insight Engine", "Recommendation System", "Automated Reports"],
      },
    ],
  },
  {
    id: "scale-optimize",
    name: "Scale & Optimize",
    description: "Performance optimization and international expansion",
    duration: "Months 10-12",
    color: "bg-purple-500",
    milestones: [
      {
        id: "performance-optimization",
        title: "Performance Optimization",
        description: "Sub-3 second load times globally with CDN optimization",
        startWeek: 37,
        duration: 4,
        status: "upcoming",
        team: ["DevOps Engineers", "Frontend Developers"],
        deliverables: ["CDN Setup", "Image Optimization", "Code Splitting"],
      },
      {
        id: "international-expansion",
        title: "International Expansion",
        description: "Multi-language support and regional customization",
        startWeek: 41,
        duration: 4,
        status: "upcoming",
        team: ["Frontend Developers", "Content Team"],
        deliverables: ["i18n Framework", "Regional Content", "Local SEO"],
      },
      {
        id: "continuous-improvement",
        title: "Continuous Improvement",
        description: "Ongoing optimization and feature enhancement pipeline",
        startWeek: 45,
        duration: 8,
        status: "upcoming",
        team: ["All Teams"],
        deliverables: ["Optimization Pipeline", "Feature Roadmap", "Success Metrics"],
      },
    ],
  },
]

const teamComposition = [
  { role: "Frontend Developers", count: 4, color: "bg-[#00D4FF]/20 text-[#00D4FF]" },
  { role: "Backend Developers", count: 6, color: "bg-[#A47864]/20 text-[#A47864]" },
  { role: "UI/UX Designers", count: 3, color: "bg-green-500/20 text-green-400" },
  { role: "Data Scientists", count: 2, color: "bg-purple-500/20 text-purple-400" },
  { role: "DevOps Engineers", count: 2, color: "bg-yellow-500/20 text-yellow-400" },
  { role: "QA Engineers", count: 2, color: "bg-red-500/20 text-red-400" },
  { role: "Project Manager", count: 1, color: "bg-gray-500/20 text-gray-400" },
]

export function ImplementationTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<Phase>(implementationPhases[0])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-400" />
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-red-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "at-risk":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const calculateProgress = (phase: Phase) => {
    const completedMilestones = phase.milestones.filter((m) => m.status === "completed").length
    return (completedMilestones / phase.milestones.length) * 100
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Implementation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            12-month visual roadmap with milestones, resource allocation, and progress tracking
          </p>
        </div>

        {/* Phase Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {implementationPhases.map((phase) => (
            <Card
              key={phase.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedPhase.id === phase.id
                  ? "bg-white/10 border-[#00D4FF] ring-2 ring-[#00D4FF]/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setSelectedPhase(phase)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-4 h-4 rounded-full ${phase.color}`}></div>
                  <Badge className="bg-white/10 text-white text-xs">{phase.duration}</Badge>
                </div>
                <h3 className="text-white font-semibold mb-2">{phase.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{Math.round(calculateProgress(phase))}%</span>
                  </div>
                  <Progress value={calculateProgress(phase)} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {selectedPhase.name} - Detailed Milestones
                </CardTitle>
                <p className="text-gray-300">{selectedPhase.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedPhase.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{getStatusIcon(milestone.status)}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-semibold">{milestone.title}</h4>
                            <Badge className={getStatusColor(milestone.status)}>{milestone.status}</Badge>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{milestone.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="text-white text-sm font-medium mb-2">Timeline</h5>
                              <div className="text-gray-300 text-sm">
                                Week {milestone.startWeek} - {milestone.startWeek + milestone.duration - 1} (
                                {milestone.duration} weeks)
                              </div>
                            </div>
                            <div>
                              <h5 className="text-white text-sm font-medium mb-2">Team</h5>
                              <div className="flex flex-wrap gap-1">
                                {milestone.team.map((member) => (
                                  <Badge key={member} variant="outline" className="text-xs border-gray-500/30">
                                    {member}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-white text-sm font-medium mb-2">Key Deliverables</h5>
                            <div className="space-y-1">
                              {milestone.deliverables.map((deliverable, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full"></div>
                                  <span className="text-gray-300 text-sm">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {index < selectedPhase.milestones.length - 1 && (
                        <div className="ml-2 mt-4 mb-2 w-px h-6 bg-gray-600"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Team Composition */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Team Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teamComposition.map((team) => (
                    <div key={team.role} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge className={team.color}>{team.count} FTE</Badge>
                        <span className="text-white text-sm">{team.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Budget Allocation */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Budget Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Development", percentage: 40, color: "bg-[#00D4FF]" },
                    { category: "Infrastructure", percentage: 25, color: "bg-[#A47864]" },
                    { category: "Third-party Services", percentage: 15, color: "bg-green-500" },
                    { category: "Security & Compliance", percentage: 10, color: "bg-purple-500" },
                    { category: "Marketing & Launch", percentage: 10, color: "bg-yellow-500" },
                  ].map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{item.category}</span>
                        <span className="text-gray-300">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Metrics */}
            <Card className="bg-gradient-to-r from-[#00D4FF]/10 to-[#A47864]/10 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { metric: "Conversion Rate", target: "+40%", status: "on-track" },
                    { metric: "Page Load Time", target: "<3s", status: "on-track" },
                    { metric: "Mobile Performance", target: "95+ Score", status: "at-risk" },
                    { metric: "User Engagement", target: "+60%", status: "ahead" },
                  ].map((item) => (
                    <div key={item.metric} className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">{item.metric}</div>
                        <div className="text-gray-300 text-xs">{item.target}</div>
                      </div>
                      <Badge
                        className={
                          item.status === "ahead"
                            ? "bg-green-500/20 text-green-400"
                            : item.status === "on-track"
                              ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                              : "bg-red-500/20 text-red-400"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
