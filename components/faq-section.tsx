import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How is the content delivered?",
      answer:
        "You'll receive 3 emails per week for 12 weeks. Each email contains actionable advice, exercises, and resources to help you develop your masculine traits.",
    },
    {
      question: "Is this just for young men?",
      answer:
        "No, our content is valuable for men of all ages. Whether you're in your 20s or your 60s, the principles of authentic masculinity remain relevant and transformative.",
    },
    {
      question: "What if I'm not satisfied with the content?",
      answer:
        "We offer a 30-day money-back guarantee. If you don't find value in the first month of emails, simply reply to any email and request a refund.",
    },
    {
      question: "Can I access previous emails if I sign up late?",
      answer: "Yes, you'll have access to all previous emails from day one. You can go through them at your own pace.",
    },
    {
      question: "Do I need to buy anything else to benefit from this program?",
      answer:
        "No, everything you need is included in the email series. We may recommend optional books or resources, but they're not required to benefit from the program.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
