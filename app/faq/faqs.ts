export type Faq = { question: string; answer: string }
export type FaqGroup = { id: string; title: string; items: Faq[] }

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "basics",
    title: "The basics",
    items: [
      {
        question: "What is WaterLeMON?",
        answer:
          "An app that helps you move from saving to investing. You see your options explained in plain words, including the risks, and you decide what’s next.",
      },
      {
        question: "Who is it for?",
        answer:
          "Anyone who wants to start investing, wherever you live and whatever your age. If it’s your first time, you’re in the right place.",
      },
      {
        question: "Do I need to know about investing or crypto?",
        answer:
          "No. There’s no seed phrase and no wallet to connect, just one simple account. We explain each option before you choose it.",
      },
      {
        question: "What does the AI Companion do?",
        answer:
          "It answers your questions about your options in plain language, so you understand what you’re choosing. It explains. You decide.",
      },
    ],
  },
  {
    id: "money",
    title: "Your money",
    items: [
      {
        question: "Can I lose money?",
        answer:
          "Yes. Investments can lose value, and returns are variable and not guaranteed. Before you invest, we show you what could change and why.",
      },
      {
        question: "Will you promise a return?",
        answer:
          "No. Nobody can promise growth. We show every return next to its risk, so you can see the full picture before you choose.",
      },
    ],
  },
  {
    id: "waitlist",
    title: "The waitlist",
    items: [
      {
        question: "When does WaterLeMON open?",
        answer:
          "We haven’t set a date yet. Join the waitlist and we’ll email you the day it opens.",
      },
      {
        question: "What happens after I join?",
        answer: "You get one email when we launch. No newsletters, no spam.",
      },
      {
        question: "Can I leave the waitlist?",
        answer:
          "Yes. Email hello@waterlemon.app and we’ll remove your address.",
      },
    ],
  },
]
