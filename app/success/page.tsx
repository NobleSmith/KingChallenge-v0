import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for purchasing the Masculine Growth Email Series. Your first email will arrive in your inbox
          shortly.
        </p>
        <div className="space-y-4">
          <p className="font-medium">What happens next:</p>
          <ul className="text-left space-y-2 text-gray-700">
            <li>• You'll receive a welcome email within 15 minutes</li>
            <li>• Your first lesson will arrive tomorrow</li>
            <li>• Check your spam folder if you don't see our emails</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/">
            <Button className="w-full">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
