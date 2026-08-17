export type ReferralFaq = {
  question: string;
  answer: string[];
};

export const referralSteps: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Share your link",
    body: "Every account has one. Copy it, or send invites straight from your dashboard.",
  },
  {
    number: "02",
    title: "They try Unabyss",
    body: "Trial first, same as everyone. No credit card games, no gated signup.",
  },
  {
    number: "03",
    title: "They subscribe - you both get a month",
    body: "Their second month of Pro is on us. Your next invoice drops by a month of Pro. Applied automatically, nothing to claim.",
  },
];

export const referralRewards: {
  title: string;
  body: string;
  highlight?: boolean;
}[] = [
  {
    title: "Your friend",
    body: "A free second month of Pro. They pay for month one, month two is on us.",
  },
  {
    title: "You",
    body: "One month of Pro value off your next Unabyss invoice, per referral. No cap on how many.",
  },
  {
    title: "At 3 referrals",
    body: "We buy you a month of Claude Pro and email you the gift link. Because that's probably where you're using Unabyss anyway.",
    highlight: true,
  },
];

export const referralFaqs: ReferralFaq[] = [
  {
    question: "When do I actually get the credit?",
    answer: [
      "After your referral's first payment clears and a 7-day hold passes. The hold is there to catch refunds and chargebacks - nothing else. Once it's through, the credit lands on your account automatically.",
    ],
  },
  {
    question: "How much is \"a month of Pro\"?",
    answer: [
      "$15. Rewards are always denominated in Pro, so if you're on Unlimited you get $15 off, not a free Unlimited month.",
    ],
  },
  {
    question: "I'm on annual billing.",
    answer: [
      "The credit sits on your account and comes off your next renewal invoice.",
    ],
  },
  {
    question: "Does a signup count, or a trial?",
    answer: [
      "Neither. The reward triggers on a real paid subscription.",
    ],
  },
  {
    question: "Can I refer myself with another email?",
    answer: [
      "No. Self-referrals and same-device signups don't qualify.",
    ],
  },
  {
    question: "Does my friend need to click the link right away?",
    answer: [
      "No. We remember them for 30 days after the click.",
    ],
  },
  {
    question: "What if someone's already an Unabyss user?",
    answer: [
      "Referrals only apply to new accounts.",
    ],
  },
  {
    question: "How do I get the Claude Pro month?",
    answer: [
      "3 referrals that convert to paid and clear the hold. We buy the gift and email you the link - Anthropic's gift links are good for a year.",
    ],
  },
  {
    question: "Is there a limit?",
    answer: [
      "Not on referrals. Email invites are capped at 100 a day to keep things clean.",
    ],
  },
];
