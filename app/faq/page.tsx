import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { ColorFields } from "@/components/brand/color-fields"
import { PageTransition } from "@/components/page-transition"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { stagger } from "@/lib/motion"

import { FAQ_GROUPS } from "./faqs"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "What WaterLeMON is, who it’s for, how risk works and what happens when you join the waitlist.",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
}

export default function FaqPage() {
  return (
    <PageTransition>
      <div className="flex flex-1 flex-col">
        <ColorFields placement="top" className="absolute inset-x-0 top-0 -z-10" />

        <main className="flex flex-1 flex-col items-center px-4 pt-16 pb-20 sm:px-10 sm:pt-26">
          <header className="flex flex-col items-center text-center">
            <Badge variant="accent" size="eyebrow" className="animate-enter" style={stagger(0)}>
              FAQ
            </Badge>
            <h1
              className="animate-enter mt-6 font-display text-[clamp(44px,8vw,72px)] leading-[0.98] font-extrabold tracking-[-0.04em] text-balance text-forest"
              style={stagger(1)}
            >
              Questions, answered.
            </h1>
            <p
              className="animate-enter mt-5 max-w-120 text-lg leading-normal text-pretty text-body sm:text-[19px]"
              style={stagger(2)}
            >
              What we can tell you before launch, in plain words.
            </p>
          </header>

          <div className="animate-enter mt-14 w-full max-w-180 sm:mt-16" style={stagger(3)}>
            {FAQ_GROUPS.map((group) => (
              <section
                key={group.id}
                aria-labelledby={`faq-${group.id}`}
                className="not-first:mt-12"
              >
                <h2
                  id={`faq-${group.id}`}
                  className="mb-4 font-display text-[22px] leading-tight font-extrabold tracking-[-0.02em] text-forest sm:text-[26px]"
                >
                  {group.title}
                </h2>
                <Accordion type="single" collapsible>
                  {group.items.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}

            <section className="mt-14 flex flex-col items-start gap-5 rounded-[22px] bg-forest p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="font-display text-[22px] leading-tight font-extrabold tracking-[-0.02em] text-cream">
                  Still have a question?
                </h2>
                <p className="mt-1.5 text-base text-sage">
                  Write to us and we’ll get back to you.
                </p>
              </div>
              <Button asChild className="bg-cream text-forest">
                <a href="mailto:hello@waterlemon.app">
                  Email us
                  <ArrowUpRight className="size-4.5" strokeWidth={2} aria-hidden="true" />
                </a>
              </Button>
            </section>
          </div>
        </main>

        <footer className="px-4 pb-8 text-center text-sm text-muted-foreground sm:px-10">
          © 2026 WaterLeMON · Investments can lose value.
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </div>
    </PageTransition>
  )
}
