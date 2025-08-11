"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Reclaim Your Masculine Power</h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8">
          A 12-week email series designed to help you build confidence, strength, and purpose in every area of your
          life.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-amber-600 hover:bg-amber-700"
          onClick={() => {
            const element = document.getElementById("signup")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Start Your Journey Now
        </Button>
      </div>
    </section>
  )
}
