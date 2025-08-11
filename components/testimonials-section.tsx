import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael R.",
      avatar: "MR",
      text: "This email series completely changed my perspective on what it means to be a man in today's world. I've gained confidence I never thought possible.",
    },
    {
      name: "David T.",
      avatar: "DT",
      text: "After years of feeling lost, these emails helped me find direction and purpose. My relationships have improved and I finally feel in control of my life.",
    },
    {
      name: "James K.",
      avatar: "JK",
      text: "The practical advice in these emails helped me transform from a passive observer in my own life to an active leader. Worth every penny.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Others Are Saying</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4 bg-gray-800 text-white">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
