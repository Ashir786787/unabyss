import type { RegulaminSection } from "./regulamin";

export type PromotionTerms = {
  slug: string;
  name: string;
  preamble: string[];
  sections: RegulaminSection[];
};

export const promotionTermsList: PromotionTerms[] = [
  {
    slug: "launch4",
    name: "LAUNCH4",
    preamble: [
        "Update:",
        "Promotion name: LAUNCH3 is cancelled on June 22, 2026",
        "In its place, the Promotion name: LAUNCH4 (described below) comes into force on June 22, 2026",
        "(Promotion name: LAUNCH4)",
        "Promotion period: June 22, 2026 - July 9, 2026 (inclusive, Warsaw time)",
        "Promoter: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland, KRS 0001224271, NIP 7011299839 (\"Unabyss\").",
      ],
    sections: [
      {
        id: "1",
        heading: "1. Scope of this document",
        paragraphs: [
          "1.1 Scope and definitions. These Promotion Terms govern the promotional offer described below (the \"Promotion\") and are made available together with, and are supplementary to, the Unabyss Terms and Conditions available at unabyss.com (the \"Main Terms\"). Definitions used in the Main Terms apply here.",
          "1.2 Precedence. In the event of any conflict between these Promotion Terms and the Main Terms, these Promotion Terms prevail with respect to the Promotion. All other relationships between the User and Unabyss continue to be governed by the Main Terms.",
        ]
      },
      {
        id: "2",
        heading: "2. The Promotion",
        paragraphs: [
          "2.1 Description. Unabyss grants eligible Users a one-time benefit consisting of free Credits in the amount of 25 USD added to the User's Account.",
          "2.2 Period. The Promotion is available from June 22, 2026 to July 9, 2026 (inclusive) or, if earlier, until Unabyss withdraws the Promotion in accordance with section 6.",
          "2.3 Channel. The Promotion is communicated in-product. Participation does not require a separate code unless one is expressly indicated in the communication.",
        ]
      },
      {
        id: "3",
        heading: "3. Eligibility",
        paragraphs: [
          "3.1 Eligibility criteria. The Promotion is available to Users who, during the promotional period: (a) hold an active Account in good standing; (b) meet any additional eligibility criteria described in the Promotion communication (for example, being a new User, having verified a payment method, or having completed onboarding); and (c) accept these Promotion Terms.",
          "3.2 One participation per User. Each User may participate in the Promotion only once. The benefit is personal, non-transferable, and not redeemable for cash.",
          "3.3 Combination with other offers. The Promotion may not be combined with other promotional offers from Unabyss unless expressly stated. Where multiple offers apply, only the most favourable to the User is granted.",
        ]
      },
      {
        id: "4",
        heading: "4. Granted benefit",
        paragraphs: [
          "4.1 Nature. The benefit is granted free of charge as a gratuitous performance by Unabyss. It does not constitute the sale of Credits or any other paid service.",
          "4.2 Use. Where the benefit consists of free Credits, those Credits are credited to the User's Account and may be used to access AI-powered features in accordance with the Main Terms. The amount of Credits consumed by a given operation is determined as set out in the Main Terms.",
          "4.3 Validity. Credits granted under the Promotion remain valid for 30 days from the date they are credited to the Account, unless a different validity period is stated in the Promotion communication. After this period, any unused promotional Credits expire and may be removed from the Account.",
          "4.4 No cash equivalent. Promotional Credits are not refundable, are not exchangeable for cash, and are excluded from any pro-rata refund of Credits that may be available under the Main Terms.",
        ]
      },
      {
        id: "5",
        heading: "5. Consumer rights",
        paragraphs: [
          "5.1 Withdrawal. Because the Promotion is granted free of charge, the consumer's right of withdrawal from a distance contract under Article 27 of the Polish Act of 30 May 2014 on Consumer Rights does not generate any payment obligation toward the Consumer. A Consumer who does not wish to benefit from the Promotion may, at any time, request that the promotional Credits be removed from their Account by contacting [legal@unabyss.com](mailto:legal@unabyss.com).",
          "5.2 Mandatory consumer rights. Nothing in these Promotion Terms limits or excludes any mandatory consumer rights under Polish or EU law.",
        ]
      },
      {
        id: "6",
        heading: "6. Changes and withdrawal of the Promotion",
        paragraphs: [
          "6.1 Amendments and withdrawal. Unabyss may amend these Promotion Terms or withdraw the Promotion at any time for important reasons, including in particular: changes in applicable law, fraud or abuse, technical issues, or material changes to the cost structure of the Service. Any such change will not affect benefits already granted to Users in good faith before the change takes effect.",
          "6.2 Notification. Notification of changes will be made by email or by publishing the updated Promotion Terms on the Unabyss website. Users who have already received the promotional benefit will retain it for the validity period set out in section 4.3.",
        ]
      },
      {
        id: "7",
        heading: "7. Abuse and exclusion",
        paragraphs: [
          "7.1 Abuse and exclusion. Unabyss may, at its discretion, exclude from the Promotion or revoke promotional Credits granted to Users who attempt to participate more than once (including by creating multiple Accounts), provide false information, breach the Main Terms, or otherwise act in bad faith. In the case of Consumers, the procedure set out in the Main Terms for breach of those terms applies.",
        ]
      },
      {
        id: "8",
        heading: "8. Personal data",
        paragraphs: [
          "8.1 Processing. Personal data of Users participating in the Promotion is processed by Unabyss in accordance with the Unabyss Privacy Policy available at unabyss.com/privacy. Participation in the Promotion does not require the processing of any personal data beyond what is already processed under the Main Terms.",
        ]
      },
      {
        id: "9",
        heading: "9. Complaints",
        paragraphs: [
          "9.1 Complaints procedure. Complaints concerning the Promotion may be submitted by email to [legal@unabyss.com](mailto:legal@unabyss.com). Unabyss will examine each complaint and respond within 14 days of receipt. Consumers retain all rights to use out-of-court dispute resolution mechanisms as described in the Main Terms.",
        ]
      },
      {
        id: "10",
        heading: "10. Governing law and final provisions",
        paragraphs: [
          "10.1 Governing law. These Promotion Terms are governed by the laws of Poland, without prejudice to mandatory protections of consumer law applicable in the User's country of habitual residence.",
          "10.2 Language. These Promotion Terms are available in English and Polish. For Users habitually residing in Poland, the Polish version prevails. For other Users, the English version prevails.",
          "10.3 Residual matters. Matters not regulated by these Promotion Terms are governed by the Main Terms and applicable law.",
          "Effective date: June 22, 2026",
        ]
      },
    ],
  },
  {
    slug: "launch3",
    name: "LAUNCH3",
    preamble: [
        "Update:",
        "Promotion name: LAUNCH2 is cancelled on June 15, 2026",
        "In its place, the Promotion name: LAUNCH3 (described below) comes into force on June 15, 2026",
        "For the avoidance of doubt, promotional Credits already granted to Users under LAUNCH2 in good faith before the date of this Update remain valid in accordance with the LAUNCH2 terms in force at the time of the grant and are not affected by the cancellation.",
        "(Promotion name: LAUNCH3)",
        "Promotion period: June 15, 2026 - June 22, 2026 (inclusive, Warsaw time)",
        "Promoter: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland, KRS 0001224271, NIP 7011299839 (\"Unabyss\").",
      ],
    sections: [
      {
        id: "1",
        heading: "1. Scope of this document",
        paragraphs: [
          "1.1 Scope and definitions. These Promotion Terms govern the promotional offer described below (the \"Promotion\") and are made available together with, and are supplementary to, the Unabyss Terms and Conditions available at unabyss.com (the \"Main Terms\"). Definitions used in the Main Terms apply here.",
          "1.2 Precedence. In the event of any conflict between these Promotion Terms and the Main Terms, these Promotion Terms prevail with respect to the Promotion. All other relationships between the User and Unabyss continue to be governed by the Main Terms.",
        ]
      },
      {
        id: "2",
        heading: "2. The Promotion",
        paragraphs: [
          "2.1 Description. Unabyss grants eligible Users a one-time benefit consisting of free Credits in the amount of 50 USD added to the User's Account.",
          "2.2 Period. The Promotion is available from June 15, 2026 to June 22, 2026 (inclusive) or, if earlier, until Unabyss withdraws the Promotion in accordance with section 6.",
          "2.3 Channel. The Promotion is communicated in-product. Participation does not require a separate code unless one is expressly indicated in the communication.",
        ]
      },
      {
        id: "3",
        heading: "3. Eligibility",
        paragraphs: [
          "3.1 Eligibility criteria. The Promotion is available to Users who, during the promotional period: (a) hold an active Account in good standing; (b) meet any additional eligibility criteria described in the Promotion communication (for example, being a new User, having verified a payment method, or having completed onboarding); and (c) accept these Promotion Terms.",
          "3.2 One participation per User. Each User may participate in the Promotion only once. The benefit is personal, non-transferable, and not redeemable for cash.",
          "3.3 Combination with other offers. The Promotion may not be combined with other promotional offers from Unabyss unless expressly stated. Where multiple offers apply, only the most favourable to the User is granted.",
        ]
      },
      {
        id: "4",
        heading: "4. Granted benefit",
        paragraphs: [
          "4.1 Nature. The benefit is granted free of charge as a gratuitous performance by Unabyss. It does not constitute the sale of Credits or any other paid service.",
          "4.2 Use. Where the benefit consists of free Credits, those Credits are credited to the User's Account and may be used to access AI-powered features in accordance with the Main Terms. The amount of Credits consumed by a given operation is determined as set out in the Main Terms.",
          "4.3 Validity. Credits granted under the Promotion remain valid for 30 days from the date they are credited to the Account, unless a different validity period is stated in the Promotion communication. After this period, any unused promotional Credits expire and may be removed from the Account.",
          "4.4 No cash equivalent. Promotional Credits are not refundable, are not exchangeable for cash, and are excluded from any pro-rata refund of Credits that may be available under the Main Terms.",
        ]
      },
      {
        id: "5",
        heading: "5. Consumer rights",
        paragraphs: [
          "5.1 Withdrawal. Because the Promotion is granted free of charge, the consumer's right of withdrawal from a distance contract under Article 27 of the Polish Act of 30 May 2014 on Consumer Rights does not generate any payment obligation toward the Consumer. A Consumer who does not wish to benefit from the Promotion may, at any time, request that the promotional Credits be removed from their Account by contacting [legal@unabyss.com](mailto:legal@unabyss.com).",
          "5.2 Mandatory consumer rights. Nothing in these Promotion Terms limits or excludes any mandatory consumer rights under Polish or EU law.",
        ]
      },
      {
        id: "6",
        heading: "6. Changes and withdrawal of the Promotion",
        paragraphs: [
          "6.1 Amendments and withdrawal. Unabyss may amend these Promotion Terms or withdraw the Promotion at any time for important reasons, including in particular: changes in applicable law, fraud or abuse, technical issues, or material changes to the cost structure of the Service. Any such change will not affect benefits already granted to Users in good faith before the change takes effect.",
          "6.2 Notification. Notification of changes will be made by email or by publishing the updated Promotion Terms on the Unabyss website. Users who have already received the promotional benefit will retain it for the validity period set out in section 4.3.",
        ]
      },
      {
        id: "7",
        heading: "7. Abuse and exclusion",
        paragraphs: [
          "7.1 Abuse and exclusion. Unabyss may, at its discretion, exclude from the Promotion or revoke promotional Credits granted to Users who attempt to participate more than once (including by creating multiple Accounts), provide false information, breach the Main Terms, or otherwise act in bad faith. In the case of Consumers, the procedure set out in the Main Terms for breach of those terms applies.",
        ]
      },
      {
        id: "8",
        heading: "8. Personal data",
        paragraphs: [
          "8.1 Processing. Personal data of Users participating in the Promotion is processed by Unabyss in accordance with the Unabyss Privacy Policy available at unabyss.com/privacy. Participation in the Promotion does not require the processing of any personal data beyond what is already processed under the Main Terms.",
        ]
      },
      {
        id: "9",
        heading: "9. Complaints",
        paragraphs: [
          "9.1 Complaints procedure. Complaints concerning the Promotion may be submitted by email to [legal@unabyss.com](mailto:legal@unabyss.com). Unabyss will examine each complaint and respond within 14 days of receipt. Consumers retain all rights to use out-of-court dispute resolution mechanisms as described in the Main Terms.",
        ]
      },
      {
        id: "10",
        heading: "10. Governing law and final provisions",
        paragraphs: [
          "10.1 Governing law. These Promotion Terms are governed by the laws of Poland, without prejudice to mandatory protections of consumer law applicable in the User's country of habitual residence.",
          "10.2 Language. These Promotion Terms are available in English and Polish. For Users habitually residing in Poland, the Polish version prevails. For other Users, the English version prevails.",
          "10.3 Residual matters. Matters not regulated by these Promotion Terms are governed by the Main Terms and applicable law.",
          "Effective date: June 15, 2026",
        ]
      },
    ],
  },
  {
    slug: "launch2",
    name: "LAUNCH2",
    preamble: [
        "(Promotion name: LAUNCH2)",
        "Promotion period: May 30, 2026 - June 15, 2026 (inclusive, Warsaw time)",
        "Promoter: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland, KRS 0001224271, NIP 7011299839 (\"Unabyss\").",
      ],
    sections: [
      {
        id: "1",
        heading: "1. Scope of this document",
        paragraphs: [
          "1.1 Scope and definitions. These Promotion Terms govern the promotional offer described below (the \"Promotion\") and are made available together with, and are supplementary to, the Unabyss Terms and Conditions available at unabyss.com (the \"Main Terms\"). Definitions used in the Main Terms apply here.",
          "1.2 Precedence. In the event of any conflict between these Promotion Terms and the Main Terms, these Promotion Terms prevail with respect to the Promotion. All other relationships between the User and Unabyss continue to be governed by the Main Terms.",
        ]
      },
      {
        id: "2",
        heading: "2. The Promotion",
        paragraphs: [
          "2.1 Description. Unabyss grants eligible Users a one-time benefit consisting of [describe the benefit, e.g. \"free Credits in the amount of 5 USD added to the User's Account\"].",
          "2.2 Period. The Promotion is available from May 30, 2026 to June 15, 2026 (inclusive) or, if earlier, until Unabyss withdraws the Promotion in accordance with section 6.",
          "2.3 Channel. The Promotion is communicated in-product. Participation does not require a separate code unless one is expressly indicated in the communication.",
        ]
      },
      {
        id: "3",
        heading: "3. Eligibility",
        paragraphs: [
          "3.1 Eligibility criteria. The Promotion is available to Users who, during the promotional period: (a) hold an active Account in good standing; (b) meet any additional eligibility criteria described in the Promotion communication (for example, being a new User, having verified a payment method, or having completed onboarding); and (c) accept these Promotion Terms.",
          "3.2 One participation per User. Each User may participate in the Promotion only once. The benefit is personal, non-transferable, and not redeemable for cash.",
          "3.3 Combination with other offers. The Promotion may not be combined with other promotional offers from Unabyss unless expressly stated. Where multiple offers apply, only the most favourable to the User is granted.",
        ]
      },
      {
        id: "4",
        heading: "4. Granted benefit",
        paragraphs: [
          "4.1 Nature. The benefit is granted free of charge as a gratuitous performance by Unabyss. It does not constitute the sale of Credits or any other paid service.",
          "4.2 Use. Where the benefit consists of free Credits, those Credits are credited to the User's Account and may be used to access AI-powered features in accordance with the Main Terms. The amount of Credits consumed by a given operation is determined as set out in the Main Terms.",
          "4.3 Validity. Credits granted under the Promotion remain valid for [number] days from the date they are credited to the Account, unless a different validity period is stated in the Promotion communication. After this period, any unused promotional Credits expire and may be removed from the Account.",
          "4.4 No cash equivalent. Promotional Credits are not refundable, are not exchangeable for cash, and are excluded from any pro-rata refund of Credits that may be available under the Main Terms.",
        ]
      },
      {
        id: "5",
        heading: "5. Consumer rights",
        paragraphs: [
          "5.1 Withdrawal. Because the Promotion is granted free of charge, the consumer's right of withdrawal from a distance contract under Article 27 of the Polish Act of 30 May 2014 on Consumer Rights does not generate any payment obligation toward the Consumer. A Consumer who does not wish to benefit from the Promotion may, at any time, request that the promotional Credits be removed from their Account by contacting [legal@unabyss.com](mailto:legal@unabyss.com).",
          "5.2 Mandatory consumer rights. Nothing in these Promotion Terms limits or excludes any mandatory consumer rights under Polish or EU law.",
        ]
      },
      {
        id: "6",
        heading: "6. Changes and withdrawal of the Promotion",
        paragraphs: [
          "6.1 Amendments and withdrawal. Unabyss may amend these Promotion Terms or withdraw the Promotion at any time for important reasons, including in particular: changes in applicable law, fraud or abuse, technical issues, or material changes to the cost structure of the Service. Any such change will not affect benefits already granted to Users in good faith before the change takes effect.",
          "6.2 Notification. Notification of changes will be made by email or by publishing the updated Promotion Terms on the Unabyss website. Users who have already received the promotional benefit will retain it for the validity period set out in section 4.3.",
        ]
      },
      {
        id: "7",
        heading: "7. Abuse and exclusion",
        paragraphs: [
          "7.1 Abuse and exclusion. Unabyss may, at its discretion, exclude from the Promotion or revoke promotional Credits granted to Users who attempt to participate more than once (including by creating multiple Accounts), provide false information, breach the Main Terms, or otherwise act in bad faith. In the case of Consumers, the procedure set out in the Main Terms for breach of those terms applies.",
        ]
      },
      {
        id: "8",
        heading: "8. Personal data",
        paragraphs: [
          "8.1 Processing. Personal data of Users participating in the Promotion is processed by Unabyss in accordance with the Unabyss Privacy Policy available at unabyss.com/privacy. Participation in the Promotion does not require the processing of any personal data beyond what is already processed under the Main Terms.",
        ]
      },
      {
        id: "9",
        heading: "9. Complaints",
        paragraphs: [
          "9.1 Complaints procedure. Complaints concerning the Promotion may be submitted by email to [legal@unabyss.com](mailto:legal@unabyss.com). Unabyss will examine each complaint and respond within 14 days of receipt. Consumers retain all rights to use out-of-court dispute resolution mechanisms as described in the Main Terms.",
        ]
      },
      {
        id: "10",
        heading: "10. Governing law and final provisions",
        paragraphs: [
          "10.1 Governing law. These Promotion Terms are governed by the laws of Poland, without prejudice to mandatory protections of consumer law applicable in the User's country of habitual residence.",
          "10.2 Language. These Promotion Terms are available in English and Polish. For Users habitually residing in Poland, the Polish version prevails. For other Users, the English version prevails.",
          "10.3 Residual matters. Matters not regulated by these Promotion Terms are governed by the Main Terms and applicable law.",
          "Effective date: May 30, 2026",
        ]
      },
    ],
  },
  {
    slug: "product-hunt",
    name: "LAUNCH",
    preamble: [
        "(Promotion name: LAUNCH)",
        "Promotion period: May 25, 2026 – May 29, 2026 (inclusive, Warsaw time)",
        "Promoter: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland, KRS 0001224271, NIP 7011299839 (“Unabyss”).",
      ],
    sections: [
      {
        id: "1",
        heading: "1. Scope of this document",
        paragraphs: [
          "1.1 Scope and definitions. These Promotion Terms govern the promotional offer described below (the “Promotion”) and are made available together with, and are supplementary to, the Unabyss Terms and Conditions available at unabyss.com (the “Main Terms”). Definitions used in the Main Terms apply here.",
          "1.2 Precedence. In the event of any conflict between these Promotion Terms and the Main Terms, these Promotion Terms prevail with respect to the Promotion. All other relationships between the User and Unabyss continue to be governed by the Main Terms.",
        ]
      },
      {
        id: "2",
        heading: "2. The Promotion",
        paragraphs: [
          "2.1 Description. Unabyss grants eligible Users a one-time benefit consisting of describe the benefit, e.g. “free Credits in the amount of 15 USD added to the User’s Account”.",
          "2.2 Period. The Promotion is available from May 25, 2026 to May 29, 2026 (inclusive) or, if earlier, until Unabyss withdraws the Promotion in accordance with section 6.",
          "2.3 Channel. The Promotion is communicated in-product. Participation does not require a separate code unless one is expressly indicated in the communication.",
        ]
      },
      {
        id: "3",
        heading: "3. Eligibility",
        paragraphs: [
          "3.1 Eligibility criteria. The Promotion is available to Users who, during the promotional period: (a) hold an active Account in good standing; (b) meet any additional eligibility criteria described in the Promotion communication (for example, being a new User, having verified a payment method, or having completed onboarding); and (c) accept these Promotion Terms.",
          "3.2 One participation per User. Each User may participate in the Promotion only once. The benefit is personal, non-transferable, and not redeemable for cash.",
          "3.3 Combination with other offers. The Promotion may not be combined with other promotional offers from Unabyss unless expressly stated. Where multiple offers apply, only the most favourable to the User is granted.",
        ]
      },
      {
        id: "4",
        heading: "4. Granted benefit",
        paragraphs: [
          "4.1 Nature. The benefit is granted free of charge as a gratuitous performance by Unabyss. It does not constitute the sale of Credits or any other paid service.",
          "4.2 Use. Where the benefit consists of free Credits, those Credits are credited to the User’s Account and may be used to access AI-powered features in accordance with the Main Terms. The amount of Credits consumed by a given operation is determined as set out in the Main Terms.",
          "4.3 Validity. Credits granted under the Promotion remain valid for number days from the date they are credited to the Account, unless a different validity period is stated in the Promotion communication. After this period, any unused promotional Credits expire and may be removed from the Account.",
          "4.4 No cash equivalent. Promotional Credits are not refundable, are not exchangeable for cash, and are excluded from any pro-rata refund of Credits that may be available under the Main Terms.",
        ]
      },
      {
        id: "5",
        heading: "5. Consumer rights",
        paragraphs: [
          "5.1 Withdrawal. Because the Promotion is granted free of charge, the consumer’s right of withdrawal from a distance contract under Article 27 of the Polish Act of 30 May 2014 on Consumer Rights does not generate any payment obligation toward the Consumer. A Consumer who does not wish to benefit from the Promotion may, at any time, request that the promotional Credits be removed from their Account by contacting [legal@unabyss.com](mailto:legal@unabyss.com).",
          "5.2 Mandatory consumer rights. Nothing in these Promotion Terms limits or excludes any mandatory consumer rights under Polish or EU law.",
        ]
      },
      {
        id: "6",
        heading: "6. Changes and withdrawal of the Promotion",
        paragraphs: [
          "6.1 Amendments and withdrawal. Unabyss may amend these Promotion Terms or withdraw the Promotion at any time for important reasons, including in particular: changes in applicable law, fraud or abuse, technical issues, or material changes to the cost structure of the Service. Any such change will not affect benefits already granted to Users in good faith before the change takes effect.",
          "6.2 Notification. Notification of changes will be made by email or by publishing the updated Promotion Terms on the Unabyss website. Users who have already received the promotional benefit will retain it for the validity period set out in section 4.3.",
        ]
      },
      {
        id: "7",
        heading: "7. Abuse and exclusion",
        paragraphs: [
          "7.1 Abuse and exclusion. Unabyss may, at its discretion, exclude from the Promotion or revoke promotional Credits granted to Users who attempt to participate more than once (including by creating multiple Accounts), provide false information, breach the Main Terms, or otherwise act in bad faith. In the case of Consumers, the procedure set out in the Main Terms for breach of those terms applies.",
        ]
      },
      {
        id: "8",
        heading: "8. Personal data",
        paragraphs: [
          "8.1 Processing. Personal data of Users participating in the Promotion is processed by Unabyss in accordance with the Unabyss Privacy Policy available at unabyss.com/privacy. Participation in the Promotion does not require the processing of any personal data beyond what is already processed under the Main Terms.",
        ]
      },
      {
        id: "9",
        heading: "9. Complaints",
        paragraphs: [
          "9.1 Complaints procedure. Complaints concerning the Promotion may be submitted by email to [legal@unabyss.com](mailto:legal@unabyss.com). Unabyss will examine each complaint and respond within 14 days of receipt. Consumers retain all rights to use out-of-court dispute resolution mechanisms as described in the Main Terms.",
        ]
      },
      {
        id: "10",
        heading: "10. Governing law and final provisions",
        paragraphs: [
          "10.1 Governing law. These Promotion Terms are governed by the laws of Poland, without prejudice to mandatory protections of consumer law applicable in the User’s country of habitual residence.",
          "10.2 Language. These Promotion Terms are available in English and Polish. For Users habitually residing in Poland, the Polish version prevails. For other Users, the English version prevails.",
          "10.3 Residual matters. Matters not regulated by these Promotion Terms are governed by the Main Terms and applicable law.",
          "Effective date: May 25, 2026",
        ]
      },
    ],
  },
];