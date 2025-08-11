import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import SalesSection from "@/components/sales-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import SignupForm from "@/components/signup-form"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Masculine Growth - Email Series",
  description:
    "Transform your masculinity with our premium email series designed to help you become the man you were meant to be.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSection />
      <SalesSection />
      <TestimonialsSection />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Ready to Begin Your Journey?</h2>
        <SignupForm />
      </div>
      <FaqSection />
      <Footer />
    </main>
  )
}
