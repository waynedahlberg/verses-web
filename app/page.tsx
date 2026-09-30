import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import VolumeListSection from "@/components/sections/volume-list-section"
import DescriptionListSection from "@/components/sections/description-list-section"
import FeaturesCarouselSection from "@/components/sections/features-carousel"
import TestimonialsSection from "@/components/sections/testimonials"
import NoteFromMeSection from "@/components/sections/note-from-me"
import CallToActionSection from "@/components/sections/call-to-action-section"
import FAQSection from "@/components/sections/faqs-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <VolumeListSection />
      <FeaturesCarouselSection />
      <DescriptionListSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
      <NoteFromMeSection />
    </main>
  )
}
