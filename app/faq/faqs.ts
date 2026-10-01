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
          "A financial app designed to meet you where you are, and help you grow. ",
      },
      {
        question: "Is WaterLeMON for me?",
        answer:
          " Yes, you're who we’re building for. Designed to bring guidance into the experience.",
      },
      {
        question: "What will I be able to do with my money?",
        answer:
          "There will be different strategies and yielding/investing options you can choose, based on your risk profile. You will be able to grow it.",
      },
      {
        question: "How much money will I need to start?",
        answer:
          "You can start with $5. If you join the waitlist, we add them for you.",
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
          "Not really",
      },
      {
        question: "Will you promise a return?",
        answer:
          "No. We're not pormising anything, but you're invited to share the pie with us.",
      },
    ],
  },
  {
    id: "waitlist",
    title: "The waitlist",
    items: [
      {
        question: "When does WaterLeMON launch?",
        answer:
          "Soon",
      },
      {
        question: "What happens after I join?",
        answer: "You get early beta access to our app.",
      }
    ],
  },
]
