"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is HIVE?",
    answer:
      "HIVE is a supportive community platform designed to empower job seekers with personalized guidance, essential resources, and a network of like-minded individuals to help you succeed in your career journey.",
  },
  {
    question: "How can HIVE help me in my job search?",
    answer:
      "HIVE provides various resources including mentorship programs, skill-building workshops, job market insights, and networking opportunities. Our platform is designed to give you the tools and support you need to stand out in the competitive job market.",
  },
  {
    question: "Is HIVE free to use?",
    answer:
      "HIVE offers both free and premium tiers. Our basic services are free, allowing you to access community forums and basic resources. Premium members get additional benefits such as one-on-one mentoring sessions and exclusive workshops.",
  },
  {
    question: "Can I become a mentor on HIVE?",
    answer:
      "We welcome experienced professionals who want to give back to the community. If you're interested in becoming a mentor, please reach out to our team through the 'Become a Mentor' section on our website.",
  },
  {
    question: "How do I get started with HIVE?",
    answer:
      "Getting started is easy! Simply sign up for an account on our website, complete your profile, and start exploring the resources available. We recommend joining our community forums and attending our next virtual networking event to get the most out of your HIVE experience.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

