"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ArrowLeft, ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "TechCorp Global",
    companySize: "Fortune 500",
    industry: "Technology",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "MediaIntelligence.ai transformed our crisis management. We now detect potential issues 72 hours before they escalate, saving us millions in reputation damage.",
    metrics: {
      "Crisis Prevention": "94%",
      "Response Time": "72hrs faster",
      "Cost Savings": "$2.3M annually",
    },
    videoTestimonial: true,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Chief Data Officer",
    company: "Global Retail Inc",
    companySize: "10,000+ employees",
    industry: "Retail",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The autonomous decision-making capabilities are game-changing. Our ROAS improved by 850% in the first quarter alone.",
    metrics: {
      "ROAS Improvement": "850%",
      "Decision Speed": "50x faster",
      "Accuracy Rate": "95%",
    },
    videoTestimonial: false,
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Head of Communications",
    company: "MedTech Solutions",
    companySize: "5,000+ employees",
    industry: "Healthcare",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The AI's ability to understand context and sentiment across 120 languages is incredible. We're now truly global in our intelligence gathering.",
    metrics: {
      "Global Coverage": "120 languages",
      "Source Monitoring": "30M+ sources",
      "Processing Speed": "<1 second",
    },
    videoTestimonial: true,
    featured: false,
  },
  {
    id: 4,
    name: "James Thompson",
    title: "Director of Brand Strategy",
    company: "Consumer Brands Co",
    companySize: "2,500+ employees",
    industry: "Consumer Goods",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "Implementation was seamless - 2 weeks from signup to full deployment. The ROI was immediate and continues to compound monthly.",
    metrics: {
      Implementation: "2 weeks",
      "ROI Timeline": "Immediate",
      "Monthly Growth": "15%",
    },
    videoTestimonial: false,
    featured: false,
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "VP of Digital Marketing",
    company: "FinanceFirst",
    companySize: "8,000+ employees",
    industry: "Financial Services",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The competitive intelligence features give us an unfair advantage. We know what our competitors are planning before they execute.",
    metrics: {
      "Competitive Tracking": "1000+ competitors",
      "Early Detection": "15x faster",
      "Market Share Growth": "23%",
    },
    videoTestimonial: true,
    featured: true,
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Chief Marketing Officer",
    company: "Enterprise Solutions Ltd",
    companySize: "15,000+ employees",
    industry: "B2B Software",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "Security and compliance were our biggest concerns. MediaIntelligence.ai exceeded all our enterprise requirements with SOC 2 Type II compliance.",
    metrics: {
      "Uptime SLA": "99.9%",
      "Security Compliance": "SOC 2 Type II",
      "Data Protection": "Enterprise-grade",
    },
    videoTestimonial: false,
    featured: false,
  },
]

const caseStudies = [
  {
    company: "Global Tech Corp",
    industry: "Technology",
    challenge: "Crisis Management",
    result: "$2.3M saved in reputation damage",
    improvement: "94% crisis prevention rate",
    icon: Shield,
    color: "text-red-400",
  },
  {
    company: "Retail Giant Inc",
    industry: "Retail",
    challenge: "Campaign Optimization",
    result: "850% ROAS improvement",
    improvement: "50x faster decisions",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    company: "FinanceFirst",
    industry: "Financial Services",
    challenge: "Competitive Intelligence",
    result: "23% market share growth",
    improvement: "15x faster competitor detection",
    icon: Zap,
    color: "text-yellow-400",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const currentTestimonialData = featuredTestimonials[currentTestimonial]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? featuredTestimonials.length - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-yellow-400/10 border-yellow-400/30 text-yellow-400">
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how Fortune 500 companies are transforming their operations with autonomous intelligence
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-16">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-teal-400 mr-4" />
                    <div className="flex">
                      {[...Array(currentTestimonialData.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                    "{currentTestimonialData.quote}"
                  </blockquote>

                  <div className="flex items-center mb-6">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={currentTestimonialData.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {currentTestimonialData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{currentTestimonialData.name}</div>
                      <div className="text-slate-400 text-sm">{currentTestimonialData.title}</div>
                      <div className="text-teal-400 text-sm">
                        {currentTestimonialData.company} • {currentTestimonialData.companySize}
                      </div>
                    </div>
                  </div>

                  {currentTestimonialData.videoTestimonial && (
                    <Button
                      variant="outline"
                      className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video Testimonial
                    </Button>
                  )}
                </div>

                {/* Metrics */}
                <div className="bg-slate-700/30 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-white mb-6">Key Results Achieved</h4>
                  <div className="space-y-6">
                    {Object.entries(currentTestimonialData.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-400">{key}:</span>
                        <span className="text-2xl font-bold text-teal-400">{value}</span>
                      </div>
                    ))}
                  </div>
                  <Badge variant="secondary" className="mt-6 w-fit">
                    {currentTestimonialData.industry}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-slate-600 text-slate-400 hover:text-white bg-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-teal-400" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-slate-600 text-slate-400 hover:text-white bg-transparent"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Success Stories by Use Case</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-slate-700/50 ${study.color} mr-3`}>
                      <study.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-white mb-2">{study.company}</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <div className="space-y-2">
                    <div className="text-teal-400 font-semibold">{study.result}</div>
                    <div className="text-sm text-slate-400">{study.improvement}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials
            .filter((t) => !t.featured)
            .map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-slate-800/30 border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-slate-400 text-xs">{testimonial.title}</div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-slate-300 text-sm mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>

                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                    {testimonial.videoTestimonial && (
                      <Button variant="ghost" size="sm" className="text-teal-400 hover:text-teal-300 p-0 h-auto">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Social Proof Stats */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">2,500+</div>
              <div className="text-sm text-slate-400">Enterprise Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-slate-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-slate-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-sm text-slate-400">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
