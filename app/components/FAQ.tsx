'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What age group is InstaEdu designed for?',
    answer: 'InstaEdu is specifically designed for children aged 6-12, offering age-appropriate and engaging educational content.',
  },
  {
    question: "How does InstaEdu ensure my child's safety online?",
    answer: 'We prioritize safety with robust parental oversight features, individual child profiles, and a strictly moderated comment section by human moderators.',
  },
  {
    question: 'What kind of educational content can my child find on InstaEdu?',
    answer: 'Our platform features a wide range of curated educational short videos, images, and interactive posts across various subjects, tailored to keep learning fun.',
  },
  {
    question: 'Is InstaEdu free to use?',
    answer: 'InstaEdu offers a freemium model with basic content accessible for free. For full access, advanced parental controls, and an ad-free experience, a premium subscription is available.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about InstaEdu and how it works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
