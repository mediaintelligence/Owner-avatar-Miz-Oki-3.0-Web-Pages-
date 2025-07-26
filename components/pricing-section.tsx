"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Check, Star, Zap, Crown, Building, ArrowRight, Calculator } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for growing businesses",
    monthlyPrice: 299,
    annualPrice: 2390, // 20% discount
    icon: Zap,
    color: "text-teal-400",
    borderColor: "border-teal-400/30",
    bgColor: "bg-teal-400/5",
    features: [
      "5 team members",
      "10K sources monitored",
      "Real-time alerts",
      "Basic AI insights",
      "Email support",
      "Standard integrations",
      "Mobile app access",
      "30-day data retention",
    ],
    limitations: ["No custom AI training", "Limited API calls", "Standard support only"],
  },
  {
    name: "Professional",
    description: "For scaling organizations",
    monthlyPrice: 999,
    annualPrice: 7992, // 33% discount
    icon: Star,
    color: "text-purple-400",
    borderColor: "border-purple-400/30",
    bgColor: "bg-purple-400/5",
    popular: true,
    features: [
      "25 team members",
      "100K sources monitored",
      "Advanced AI reasoning",
      "Predictive analytics",
      "Priority support",
      "Custom integrations",
      "White-label options",
      "1-year data retention",
      "Advanced reporting",
      "Crisis prevention AI",
    ],
    limitations: ["Limited custom models", "Standard SLA"],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: null,
    annualPrice: null,
    customPricing: true,
    icon: Crown,
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    bgColor: "bg-yellow-400/5",
    features: [
      "Unlimited team members",
      "Unlimited sources",
      "Custom AI training",
      "Dedicated success manager",
      "24/7 phone support",
      "Custom integrations",
      "On-premise deployment",
      "Unlimited data retention",
      "Custom reporting",
      "SLA guarantees",
      "Advanced security",
      "Compliance certifications",
    ],
    limitations: [],
  },
]

const roiCalculatorDefaults = {
  teamSize: [10],
  currentTools: [3],
  timeSpent: [20],
  avgSalary: [75000],
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorValues, setCalculatorValues] = useState(roiCalculatorDefaults)

  const calculateROI = () => {
    const teamSize = calculatorValues.teamSize[0]
    const currentTools = calculatorValues.currentTools[0]
    const timeSpent = calculatorValues.timeSpent[0]
    const avgSalary = calculatorValues.avgSalary[0]

    const currentCost = currentTools * 200 + (teamSize * avgSalary * (timeSpent / 100)) / 12
    const newCost = 999 // Professional tier
    const timeSaved = timeSpent * 0.75 // 75% time savings
    const timeSavingValue = (teamSize * avgSalary * (timeSaved / 100)) / 12

    return {
      currentCost: Math.round(currentCost),
      newCost,
      savings: Math.round(currentCost - newCost + timeSavingValue),
      roi: Math.round(((currentCost - newCost + timeSavingValue) / newCost) * 100),
    }
  }

  const roiResults = calculateROI()

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-green-400/10 border-green-400/30 text-green-400">
            <Calculator className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Intelligence Level
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees, no vendor lock-in, no surprises.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-slate-400"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-teal-400" />
            <span className={`text-sm ${isAnnual ? "text-white" : "text-slate-400"}`}>Annual</span>
            <Badge variant="secondary" className="bg-green-400/20 text-green-400">
              Save up to 33%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-2 ${tier.borderColor} ${tier.bgColor} hover:transform hover:scale-105 transition-all duration-300 ${
                tier.popular ? "ring-2 ring-purple-400/50" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-400 text-slate-900">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-3 rounded-full ${tier.bgColor} mb-4`}>
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                <CardDescription className="text-slate-400">{tier.description}</CardDescription>

                <div className="mt-6">
                  {tier.customPricing ? (
                    <div className="text-4xl font-bold text-white">Custom</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice}
                      </span>
                      <span className="text-slate-400 ml-2">/month</span>
                    </div>
                  )}
                  {!tier.customPricing && isAnnual && (
                    <div className="text-sm text-green-400 mt-1">${tier.annualPrice} billed annually</div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.limitations.length > 0 && (
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-sm text-slate-500 mb-2">Limitations:</div>
                    {tier.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="text-xs text-slate-500 mb-1">
                        • {limitation}
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-purple-400 hover:bg-purple-500 text-slate-900"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                  size="lg"
                >
                  {tier.customPricing ? "Contact Sales" : "Start Free Trial"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator */}
        <Card className="bg-slate-800/30 border-slate-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
              <Calculator className="w-6 h-6 mr-2 text-teal-400" />
              ROI Calculator
            </CardTitle>
            <CardDescription>See your potential savings with MediaIntelligence.ai</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Team Size: {calculatorValues.teamSize[0]} people
                  </label>
                  <Slider
                    value={calculatorValues.teamSize}
                    onValueChange={(value) => setCalculatorValues({ ...calculatorValues, teamSize: value })}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Current Tools: {calculatorValues.currentTools[0]} tools
                  </label>
                  <Slider
                    value={calculatorValues.currentTools}
                    onValueChange={(value) => setCalculatorValues({ ...calculatorValues, currentTools: value })}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Time Spent on Media Intelligence: {calculatorValues.timeSpent[0]}%
                  </label>
                  <Slider
                    value={calculatorValues.timeSpent}
                    onValueChange={(value) => setCalculatorValues({ ...calculatorValues, timeSpent: value })}
                    max={50}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Average Salary: ${calculatorValues.avgSalary[0].toLocaleString()}
                  </label>
                  <Slider
                    value={calculatorValues.avgSalary}
                    onValueChange={(value) => setCalculatorValues({ ...calculatorValues, avgSalary: value })}
                    max={200000}
                    min={40000}
                    step={5000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                <h4 className="text-lg font-bold text-white mb-4">Your ROI Projection</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Monthly Cost:</span>
                    <span className="text-white font-semibold">${roiResults.currentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">MediaIntelligence.ai Cost:</span>
                    <span className="text-white font-semibold">${roiResults.newCost.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monthly Savings:</span>
                      <span className="text-green-400 font-bold text-xl">${roiResults.savings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-slate-400">ROI:</span>
                      <span className="text-teal-400 font-bold text-xl">{roiResults.roi}%</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-teal-400 hover:bg-teal-500 text-slate-900">Get Custom Quote</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600">
          <Building className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Need Enterprise Features?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Custom AI training, on-premise deployment, dedicated support, and enterprise-grade security. Let's discuss
            your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
              Schedule Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
              Download Enterprise Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
