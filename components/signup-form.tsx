"use client"
import { useActionState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitSignup } from "@/app/actions"
import { Loader2 } from "lucide-react"

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(submitSignup, {
    message: "",
    success: false,
    error: false,
    checkoutUrl: "",
  })

  return (
    <Card className="border-0 shadow-lg" id="signup">
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="John Smith" required className="text-lg p-6" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="text-lg p-6"
            />
          </div>

          <Button type="submit" className="w-full text-lg py-6 bg-amber-600 hover:bg-amber-700" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Get Instant Access - $97"
            )}
          </Button>

          <div className="text-center text-sm text-gray-500">Secure payment via Stripe. Cancel anytime.</div>
        </form>

        {state.message && (
          <div
            className={`mt-4 p-4 rounded-md ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {state.message}
            {state.checkoutUrl && (
              <div className="mt-2">
                <Button
                  onClick={() => (window.location.href = state.checkoutUrl)}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  Continue to Payment
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
