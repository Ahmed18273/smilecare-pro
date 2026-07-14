import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-18"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-4 text-slate-600">
            Here are answers to the questions we receive most often.
          </p>

        </div>

        <Accordion className="mt-12">
  {faqs.map((faq) => (
    <AccordionItem
      key={faq.question}
      value={faq.question}
    >
      <AccordionTrigger className="text-left text-lg">
        {faq.question}
      </AccordionTrigger>

      <AccordionContent className="text-slate-600 leading-7">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

      </div>
    </section>
  );
}