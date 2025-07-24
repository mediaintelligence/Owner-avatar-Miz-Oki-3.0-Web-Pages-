import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield, Globe, BarChart3, Users, Clock, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Sentiment Analysis",
    description: "95% accuracy in real-time sentiment detection across 120+ languages",
    size: "large",
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "Sub-second processing of 30M+ sources globally",
    size: "medium",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2, GDPR, ISO 27001 compliant",
    size: "small",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "154 countries, 120+ languages",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "AI-powered trend prediction and risk detection",
    size: "medium",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflow integration",
    size: "small",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Never miss a critical mention",
    size: "small",
  },
  {
    icon: Target,
    title: "Crisis Prevention",
    description: "Early warning system for PR risks",
    size: "medium",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Intelligent Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of autonomous intelligence with our comprehensive suite of AI-driven tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-2",
              small: "md:col-span-1",
            }

            return (
              <Card
                key={index}
                className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${sizeClasses[feature.size as keyof typeof sizeClasses]}`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#00D4FF]/20 to-[#A47864]/20 rounded-lg border border-[#00D4FF]/30">
                      <Icon className="h-6 w-6 text-[#00D4FF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
