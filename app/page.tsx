import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { CrossSegmentNavigation } from "@/components/cross-segment-navigation"
import { IntegratedGraphicsSection } from "@/components/integrated-graphics-section"
import { UserFlowDiagrams } from "@/components/user-flow-diagrams"
import { CompetitiveAnalysisCharts } from "@/components/competitive-analysis-charts"
import { ImplementationTimeline } from "@/components/implementation-timeline"
import { ROIProjectionDashboard } from "@/components/roi-projection-dashboard"
import { ColorPaletteGuide } from "@/components/color-palette-guide"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B365D] via-[#2A4A6B] to-[#1B365D]">
      <Header />
      <main>
        <HeroSection />
        <CrossSegmentNavigation />
        <FeaturesSection />
        <DashboardPreview />
        <UserFlowDiagrams />
        <CompetitiveAnalysisCharts />
        <ImplementationTimeline />
        <ROIProjectionDashboard />
        <IntegratedGraphicsSection />
        <ColorPaletteGuide />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
