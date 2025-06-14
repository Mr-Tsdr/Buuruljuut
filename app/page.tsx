"use client"

import { useTranslation } from "@/hooks/use-translation"
import HeroCarousel from "@/components/hero-carousel"
import ServicesSection from "@/components/services-section"
import CeoMessage from "@/components/ceo-message"
import ServicesShowcase from "@/components/services-showcase"
import TechnicalSolutions from "@/components/technical-solutions"
import ProjectsShowcase from "@/components/projects-showcase"
import Testimonials from "@/components/testimonials"
import ContactQuote from "@/components/contact-quote"
import CtaSection from "@/components/cta-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"

export default function Home() {
  const { isRTL } = useTranslation()

  return (
    <div className={`flex flex-col min-h-screen ${isRTL ? "rtl" : "ltr"}`}>
      <StickyHeader />
      <HeroCarousel />
      <ServicesSection />
      <CeoMessage />
      <ServicesShowcase />
      <TechnicalSolutions />
      <ProjectsShowcase />
      <Testimonials />
      <ContactQuote />
      <CtaSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
