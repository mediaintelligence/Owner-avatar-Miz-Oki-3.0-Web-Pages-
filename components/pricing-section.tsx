"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const pricingTiers = [
  {
    name: "Starter",
    price: { monthly: 299, annual: 239 },
    description: "Perfect for small teams getting started with media intelligence",
    features: [
      "10,000 mentions/month",
      "Basic sentiment analysis",
      "5 team members",
      "Email support",
      "Standard integrations",
      "Weekly reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 999, annual: 799 },
    description: "Advanced features for growing businesses and marketing teams",
    features: [
      "100,000 mentions/month",
      "AI-powered sentiment analysis",
      "25 team members",
      "Priority support",
      "Advanced integrations",
      "Real-time alerts",
      "Custom dashboards",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Comprehensive solution for large organizations",
    features: [
      "Unlimited mentions",
      "Advanced AI analytics",
      "Unlimited team members",
      "Dedicated support",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include our 14-day money-back guarantee.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-[#00D4FF]" />
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}>
              Annual
              <Badge className="ml-2 bg-[#A47864] text-white">Save 20%</Badge>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${
                tier.popular ? "ring-2 ring-[#00D4FF] scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00D4FF] text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  {typeof tier.price.monthly === "number" ? (
                    <div>
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? tier.price.annual : tier.price.monthly}
                      </span>
                      <span className="text-gray-400">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-[#A47864] mt-1">
                          Billed annually (${tier.price.annual * 12}/year)
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-white">{tier.price.monthly}</span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-[#00D4FF] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white"
                      : "bg-[#A47864] hover:bg-[#A47864]/90 text-white"
                  }`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center mb-3">
                <Check className="h-6 w-6 text-[#00D4FF]" />
              </div>
              <h4 className="text-white font-semibold mb-2">14-Day Free Trial</h4>
              <p className="text-gray-400 text-sm">No credit card required</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#A47864]/20 rounded-lg flex items-center justify-center mb-3">
                <Check className="h-6 w-6 text-[#A47864]" />
              </div>
              <h4 className="text-white font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-gray-400 text-sm">Full refund within 14 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center mb-3">
                <Check className="h-6 w-6 text-[#00D4FF]" />
              </div>
              <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
              <p className="text-gray-400 text-sm">SOC 2, GDPR, ISO 27001</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#A47864]/20 rounded-lg flex items-center justify-center mb-3">
                <Check className="h-6 w-6 text-[#A47864]" />
              </div>
              <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-400 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
