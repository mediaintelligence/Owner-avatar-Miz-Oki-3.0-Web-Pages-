import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A47864]">
                Media Intelligence?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who trust MediaIntelligence.ai to monitor, analyze, and act on media mentions in
              real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-[#A47864] hover:bg-[#A47864]/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Start Your Free 14-Day Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                No credit card required
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-2"></span>
                Setup in under 5 minutes
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#A47864] rounded-full mr-2"></span>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
