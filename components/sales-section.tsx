import { CheckCircle } from "lucide-react"

export default function SalesSection() {
  const benefits = [
    "Develop unshakeable confidence in any situation",
    "Build mental toughness to overcome life's challenges",
    "Create deeper, more meaningful relationships",
    "Discover your purpose and live with intention",
    "Learn to lead effectively in your family and community",
    "Master emotional control and resilience",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Life With Our Proven System</h2>
          <p className="text-lg text-gray-700">
            Our email series delivers powerful, actionable content directly to your inbox each week, guiding you
            step-by-step toward becoming the strong, confident man you were meant to be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">What You'll Gain:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">The Program Includes:</h3>
            <ul className="space-y-3 text-lg">
              <li>• 36 in-depth emails over 12 weeks</li>
              <li>• Weekly action steps and challenges</li>
              <li>• Exclusive resources and worksheets</li>
              <li>• Access to private community (optional)</li>
              <li>• Lifetime access to all materials</li>
            </ul>
            <div className="mt-8 text-center">
              <p className="text-xl font-bold mb-2">
                Regular Price: <span className="line-through">$197</span>
              </p>
              <p className="text-3xl font-bold text-amber-600 mb-4">Today: $97</p>
              <p className="text-sm text-gray-600">One-time payment, lifetime access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
