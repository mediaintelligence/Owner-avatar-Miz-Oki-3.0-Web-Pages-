"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Eye, Lightbulb, Zap, Target, TrendingUp, Shield, Globe, Network, Cpu, ArrowRight } from "lucide-react"

const features = [
  {
    category: "Intelligence Core",
    items: [
      {
        icon: Brain,
        title: "Autonomous Decision Engine",
        description: "AI that makes strategic decisions without human intervention, learning from every interaction.",
        metrics: "89% autonomous decisions",
        color: "text-purple-400",
      },
      {
        icon: Eye,
        title: "Real-Time Sensing",
        description: "Monitor 30M+ sources across 120 languages with context-aware sentiment analysis.",
        metrics: "<1 second processing",
        color: "text-blue-400",
      },
      {
        icon: Lightbulb,
        title: "Predictive Reasoning",
        description: "Advanced causal inference that predicts market movements before they happen.",
        metrics: "95% accuracy rate",
        color: "text-yellow-400",
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        icon: Zap,
        title: "Lightning Speed",
        description: "Process millions of data points in real-time with sub-second response times.",
        metrics: "50-75x faster",
        color: "text-teal-400",
      },
      {
        icon: Target,
        title: "Precision Targeting",
        description: "AI-powered audience segmentation with 95% accuracy in behavioral prediction.",
        metrics: "95% targeting accuracy",
        color: "text-green-400",
      },
      {
        icon: TrendingUp,
        title: "ROI Optimization",
        description: "Continuous optimization delivering 10x average ROAS improvements.",
        metrics: "10x ROAS improvement",
        color: "text-pink-400",
      },
    ],
  },
  {
    category: "Enterprise",
    items: [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC 2 Type II compliant with end-to-end encryption and audit trails.",
        metrics: "99.9% uptime SLA",
        color: "text-red-400",
      },
      {
        icon: Globe,
        title: "Global Coverage",
        description: "Monitor media across 195 countries with local language understanding.",
        metrics: "195 countries",
        color: "text-indigo-400",
      },
      {
        icon: Network,
        title: "Seamless Integration",
        description: "Connect with 500+ tools through native APIs and pre-built connectors.",
        metrics: "500+ integrations",
        color: "text-orange-400",
      },
    ],
  },
]

const useCases = [
  {
    id: "crisis",
    title: "Crisis Prevention",
    description: "Detect potential crises 72 hours before they escalate",
    icon: Shield,
    metrics: {
      "Early Detection": "72 hours",
      "False Positives": "<2%",
      "Crisis Prevented": "94%",
    },
  },
  {
    id: "competitive",
    title: "Competitive Intelligence",
    description: "Track competitor moves and market opportunities in real-time",
    icon: Target,
    metrics: {
      "Competitor Tracking": "1000+",
      "Market Signals": "Real-time",
      "Opportunity ID": "15x faster",
    },
  },
  {
    id: "campaign",
    title: "Campaign Optimization",
    description: "Optimize campaigns automatically for maximum ROI",
    icon: TrendingUp,
    metrics: {
      "ROAS Improvement": "10x",
      "Optimization Speed": "50x faster",
      "Attribution Accuracy": "95%",
    },
  },
]

export function FeaturesSection() {
  const [activeUseCase, setActiveUseCase] = useState("crisis")

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-teal-400/10 border-teal-400/30 text-teal-400">
            <Cpu className="w-4 h-4 mr-2" />
            Advanced AI Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligence That{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Actually Thinks
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Move beyond reactive monitoring to predictive, autonomous intelligence that makes decisions at machine speed
            with human-level understanding.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
              {category.items.map((feature, featureIndex) => (
                <Card
                  key={featureIndex}
                  className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-slate-700/50 ${feature.color}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {feature.metrics}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Use Cases Tabs */}
        <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Real-World Applications</h3>
            <p className="text-slate-400">
              See how leading organizations use MediaIntelligence.ai to transform their operations
            </p>
          </div>

          <Tabs value={activeUseCase} onValueChange={setActiveUseCase} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-700/50 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="data-[state=active]:bg-teal-400 data-[state=active]:text-slate-900"
                >
                  <useCase.icon className="w-4 h-4 mr-2" />
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">{useCase.title}</h4>
                    <p className="text-lg text-slate-400 mb-6">{useCase.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(useCase.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-teal-400 mb-1">{value}</div>
                          <div className="text-sm text-slate-500">{key}</div>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-teal-400 hover:bg-teal-500 text-slate-900">
                      See Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                    <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-16 h-16 text-teal-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Measurable Performance Advantages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-teal-400 mb-2">50-75x</div>
              <div className="text-sm text-slate-400">Faster Decisions</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-slate-400">AI Accuracy</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">30M+</div>
              <div className="text-sm text-slate-400">Sources Monitored</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-sm text-slate-400">ROAS Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
