import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import FeaturesCarouselSection from "@/components/sections/features-carousel"
import Gallery17Section from "@/components/sections/gallery17"
import TestimonialsSection from "@/components/sections/testimonials"
import ShareCTASection from "@/components/sections/share-cta-section"
import FAQSection from "@/components/sections/faqs-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <FeaturesCarouselSection />
      <Gallery17Section />
      <TestimonialsSection />
      <FAQSection />
      <ShareCTASection />
    </main>
  )
}

