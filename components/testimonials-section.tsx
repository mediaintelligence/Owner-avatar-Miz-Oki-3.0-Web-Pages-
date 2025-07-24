import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechCorp",
    content:
      "MediaIntelligence.ai transformed how we monitor our brand. The AI insights are incredibly accurate and have helped us prevent two potential PR crises.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Rodriguez",
    role: "PR Director",
    company: "Global Dynamics",
    content:
      "The real-time monitoring and sentiment analysis are game-changers. We can now respond to mentions within minutes instead of hours.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Watson",
    role: "Chief Marketing Officer",
    company: "InnovateLabs",
    content:
      "The ROI has been exceptional. We've increased our response rate by 300% and our customer satisfaction scores have never been higher.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how teams worldwide are transforming their media intelligence with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-[#00D4FF] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">500+</div>
              <div className="text-gray-300 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A47864] mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">25M+</div>
              <div className="text-gray-300 text-sm">Sources Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A47864] mb-2">154</div>
              <div className="text-gray-300 text-sm">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
