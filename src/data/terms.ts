export type TermsSection = {
  title: string;
  paragraphs: string[];
};

export const termsMeta = {
  published: "30 July 2026",
  effective: "14 August 2026",
};

export const termsIntro =
  "Please read these Terms and Conditions carefully before using the Unabyss Service. By creating an Account or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.";

export const termsSections: TermsSection[] = [
  {
    title: "1. General Provisions",
    paragraphs: [
      "1.1. These Terms and Conditions (\"Terms\") govern the use of the Unabyss service (\"Service\") provided by OneType Prosta Spółka Akcyjna (\"Unabyss\", \"we\", \"us\", or \"our\"), a company registered in Poland with its registered office in Warsaw (ul. Fabryczna 4A/11, 00-446 Warszawa, Poland), entered in the Register of Entrepreneurs of the National Court Register under KRS number: 0001224271; NIP: 7011299839; share capital: PLN 200,000.",
      "1.2. By creating an Account, subscribing to a plan, or otherwise using the Service, you (\"User\", \"you\") accept these Terms and the Privacy Policy, which form an integral part of these Terms. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization.",
      "1.3. You may not use the Service if you are located in a restricted jurisdiction or are subject to sanctions, as described in Section 3.9 below.",
      "1.4. These Terms may be updated from time to time as described in Section 13. The latest version is always available at unabyss.com/terms.",
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: [
      "2.1. \"Account\" means the User's registered account for the Service.",
      "2.2. \"Context Data\" means the structured context files, documents, and other content that a User uploads to or synchronizes through the Service, including data imported from connected third-party services.",
      "2.3. \"AI Output\" means content generated or produced by the Service using artificial intelligence systems.",
      "2.4. \"Integrations\" means connections between the Service and third-party platforms or services chosen by the User.",
      "2.5. \"MCP\" means the Model Context Protocol, used to distribute Context Data to AI clients chosen by the User.",
      "2.6. \"Subscription\" means a paid plan (Personal, Team, or another plan offered by Unabyss from time to time) that provides access to the Service for a defined period.",
      "2.7. \"Team\" means a group of Users organized by a Team Administrator under a Team Subscription, as described in Section 9.",
      "2.8. \"Seat\" means a single user slot within a Team Subscription.",
      "2.9. \"Content\" means Context Data, AI Output, files, and any other material processed within a User's Account.",
    ],
  },
  {
    title: "3. Account Registration and Use of the Service",
    paragraphs: [
      "3.1. To use the Service you must create an Account with a valid email address and, where applicable, connect the third-party accounts you want to synchronize.",
      "3.2. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your Account. You must notify us promptly of any unauthorized use.",
      "3.3. You may create only one Account. Where the Service detects duplicate accounts belonging to the same individual, Unabyss may merge or suspend them.",
      "3.4. The Service is intended for users who are at least 16 years old.",
      "3.5. The Service is provided on a subscription basis. Free plans may be offered from time to time with limited functionality.",
      "3.6. Unabyss may introduce, modify, or remove features of the Service, including functionality available under free plans.",
      "3.7. You agree not to attempt to access the Service through automated means, reverse engineer, or interfere with its operation, except as permitted by law.",
      "3.8. Unabyss may suspend or terminate access to the Service if we reasonably believe that use of the Service violates these Terms, the law, or the rights of third parties.",
      "3.9. Eligibility and Sanctions. The Service may not be used by persons or entities that are subject to restrictive measures (sanctions) adopted by the European Union, the United Nations and applied in Poland, or, where relevant to a given transaction, sanctions regimes of the United States or the United Kingdom; by persons residing in restricted jurisdictions designated by Unabyss; or by persons otherwise prohibited from using the Service by applicable law. Unabyss may screen registration and payment data against applicable sanctions lists. Unabyss may refuse registration or suspend an Account where required or permitted by law; a potential match is reviewed by a member of Unabyss's staff before any adverse decision, and affected Users may contest the decision by contacting legal@unabyss.com. A current list of restricted jurisdictions is available at unabyss.com/restricted-jurisdictions.",
    ],
  },
  {
    title: "4. Subscriptions, Payments, and Billing",
    paragraphs: [
      "4.1. Paid plans are billed in advance on a monthly or annual basis, as selected at checkout. Subscriptions renew automatically until cancelled.",
      "4.2. Prices are displayed in the plan pricing and may be changed by Unabyss. Price changes for existing Subscriptions take effect at the next renewal, after reasonable notice.",
      "4.3. Payments are processed by Stripe. You authorize Unabyss to charge your chosen payment method for the applicable fees, including any taxes.",
      "4.4. Refunds are available within 14 days of the initial payment for new Subscriptions, in accordance with applicable consumer law.",
      "4.5. Unpaid invoices may result in suspension of the Account. Repeated payment failures may result in termination of the Subscription.",
      "4.6. Annual plans may be billed in full for the year. Credits, including referral credits, are applied to the next invoice as described on the applicable offer page.",
      "4.7. Team Subscriptions are billed per Seat. The number of Seats can be changed by the Team Administrator; changes are prorated.",
      "4.8. Referral credits and promotional offers are subject to the terms published on the relevant page and may not be combined with other offers except as stated.",
      "4.9. Consumers have the right to withdraw from a distance contract within 14 days as described in Annex 1.",
      "4.10. Any taxes (including VAT) are charged in accordance with applicable law. Billing addresses and tax identification numbers may be required for invoicing.",
      "4.11. Marketing communications. When you provide or maintain an electronic address (such as an email address) in connection with your Account and accept these Terms, you make that address available for receiving commercial information concerning Unabyss's own Services, in accordance with applicable electronic communications laws. You may opt out of such communications at any time without affecting essential service communications.",
    ],
  },
  {
    title: "5. Context Data and User Content",
    paragraphs: [
      "5.1. As between you and Unabyss, you retain all rights in your Context Data and Content. Unabyss does not claim ownership of your Content.",
      "5.2. You grant Unabyss a limited, non-exclusive license to process, store, and display your Content solely to provide the Service to you.",
      "5.3. You are responsible for the Content you import, for ensuring that you have the right to import it, and for the accuracy of the information you provide.",
      "5.4. Unabyss processes Context Data in accordance with the Privacy Policy and applicable data protection law.",
      "5.5. Context Data is not used to train AI models and is not sold or rented to third parties.",
    ],
  },
  {
    title: "6. AI Output and Intellectual Property",
    paragraphs: [
      "6.1. AI Output is generated by third-party AI providers (including OpenAI, Anthropic, and Google) at your direction. You are responsible for how you use and publish AI Output.",
      "6.2. AI Output may be inaccurate, incomplete, or unsuitable for a particular purpose. You should verify important output before relying on it.",
      "6.3. Unabyss and its licensors retain all rights in the Service, its software, design, and branding. Nothing in these Terms transfers those rights to you.",
      "6.4. You may use AI Output within the scope permitted by your Subscription. You may not resell access to the Service or use it to train competing AI systems.",
    ],
  },
  {
    title: "7. Integrations and Third-Party Services",
    paragraphs: [
      "7.1. The Service connects to third-party services you choose (\"Third-Party Services\"). Your use of those services is governed by their own terms.",
      "7.2. Unabyss accesses Third-Party Services only through official APIs and OAuth flows where available, with the narrowest permissions needed. Unabyss does not store your credentials for Third-Party Services.",
      "7.3. Unabyss is not responsible for the availability, accuracy, or security of Third-Party Services, and their data policies apply to data held by them.",
      "7.4. You may revoke an Integration at any time. Revoking an Integration stops future imports; existing imported Context Data is handled in accordance with the Privacy Policy.",
    ],
  },
  {
    title: "8. MCP Distribution and External Destinations",
    paragraphs: [
      "8.1. The Service can distribute Context Data to AI clients you control via MCP, and to external destinations you configure (such as a local Gbrain instance, a webhook, or an S3-compatible bucket).",
      "8.2. You choose the destinations and the data they receive. Once Context Data is delivered to a destination you control, its subsequent processing is governed by your arrangement with that destination, not by Unabyss.",
      "8.3. Depending on your settings and plan, Context Data may be transferred to an external destination without persistent storage by Unabyss.",
      "8.4. You are responsible for the security and configuration of the destinations you select.",
    ],
  },
  {
    title: "9. Team Accounts",
    paragraphs: [
      "9.1. A Team Administrator may create an Organization, invite members, allocate Seats, and manage the Team Subscription.",
      "9.2. One Organization per User: each User may belong to a limited number of Organizations as set out in the Service. Unabyss may enforce this rule to prevent misuse.",
      "9.3. Invitation tokens expire after seven (7) days unless a different period is displayed.",
      "9.4. Team Administrators can access membership, role, invitation, Seat, subscription, invoice, and billing information. Team Administrators do not access Members' private Context Data, AI Output, memory, or Integrations.",
      "9.5. The Organization is responsible for ensuring that Team administration and offboarding instructions comply with applicable law, including providing required workforce notices.",
      "9.6. The Service does not technically separate work and personal Content within a Member Account.",
    ],
  },
  {
    title: "10. Acceptable Use",
    paragraphs: [
      "10.1. You may not use the Service to: (a) store or transmit unlawful, harmful, or infringing content; (b) harm minors; (c) distribute malware; (d) attempt to gain unauthorized access; (e) engage in spam, fraud, or deceptive conduct; or (f) violate any applicable law.",
      "10.2. Unabyss may remove Content that violates these Terms and may suspend or terminate the responsible Account.",
      "10.3. You may not use the Service in any manner that could damage, disable, overburden, or impair the Service or interfere with other users' use of it.",
    ],
  },
  {
    title: "11. Termination, Suspension, and Deletion",
    paragraphs: [
      "11.1. You may cancel your Subscription at any time in account settings. Cancellation takes effect at the end of the current billing period.",
      "11.2. Unabyss may suspend or terminate the Service: (a) if you breach these Terms; (b) if required by law; or (c) to protect the security or integrity of the Service.",
      "11.3. Upon termination, you may export your Content during the applicable grace period described below.",
      "11.4. Following Account deletion, Context Data is removed from active storage and purged from backups on the next scheduled rotation, as described in the Privacy Policy.",
      "11.5. Unabyss may refuse registration or suspend an Account under Section 3.9 where required or permitted by law.",
      "11.6. If you are removed from a Team or a Team is dissolved, your Account is deactivated and scheduled for purge unless you reactivate it.",
      "11.7. Deleting a connected source does not delete your Account. Account deletion removes your Account and its associated Content.",
      "11.8. Grace Period. If your Account is deactivated or scheduled for purge following removal from a Team or Team dissolution, you may export your own Content during the grace period offered by the Service (generally 14 days) before purge.",
    ],
  },
  {
    title: "12. Limitation of Liability",
    paragraphs: [
      "12.1. To the maximum extent permitted by law, Unabyss shall not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising out of or related to the use of the Service.",
      "12.2. Unabyss's total aggregate liability arising out of or related to these Terms or the Service shall not exceed the amounts paid by you to Unabyss in the twelve (12) months preceding the claim.",
      "12.3. Nothing in these Terms limits liability for fraud, gross negligence, willful misconduct, or death or personal injury caused by negligence, or any liability that cannot be limited under applicable law.",
    ],
  },
  {
    title: "13. Changes to the Terms and the Service",
    paragraphs: [
      "13.1. Unabyss may update these Terms from time to time. Material changes will be communicated to Users by email or in-app notification before they take effect.",
      "13.2. Continued use of the Service after a change takes effect constitutes acceptance of the updated Terms.",
      "13.3. Unabyss may also modify, suspend, or discontinue any part of the Service, with reasonable notice where practicable.",
      "13.4. The latest version of the Terms is always available at unabyss.com/terms.",
    ],
  },
  {
    title: "14. Disclaimers",
    paragraphs: [
      "14.1. The Service is provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "14.2. Unabyss does not warrant that the Service will be uninterrupted, error-free, or secure, or that AI Output will be accurate or fit for a particular purpose.",
      "14.3. To the extent permitted by law, the disclaimers in this Section apply even if the Service is used together with Third-Party Services.",
    ],
  },
  {
    title: "15. Governing Law and Dispute Resolution",
    paragraphs: [
      "15.1. These Terms are governed by the laws of Poland, without regard to conflict-of-law principles.",
      "15.2. For consumers residing in the European Union, nothing in these Terms limits mandatory consumer protection rights under the law of their country of residence.",
      "15.3. Disputes that cannot be resolved amicably shall be submitted to the courts competent for Warsaw, Poland, unless mandatory law provides otherwise.",
      "15.4. European consumers may also access the European Commission's online dispute resolution platform at ec.europa.eu/consumers/odr.",
    ],
  },
  {
    title: "16. Final Provisions",
    paragraphs: [
      "16.1. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions continue in full force and effect.",
      "16.2. Unabyss may assign these Terms or any rights under them; you may not assign your Account or these Terms without prior written consent.",
      "16.3. No waiver of any provision of these Terms is effective unless in writing and signed by the waiving party.",
      "16.4. These Terms, together with the Privacy Policy, constitute the entire agreement between you and Unabyss regarding the Service.",
      "16.5. Contact. For any questions regarding these Terms, contact legal@unabyss.com.",
    ],
  },
  {
    title: "Annex 1. Model Withdrawal Form",
    paragraphs: [
      "If you are a consumer, you have the right to withdraw from this contract within 14 days without giving any reason. The withdrawal period expires 14 days from the day of the conclusion of the contract.",
      "To exercise the right of withdrawal, you must inform us of your decision by an unequivocal statement sent to legal@unabyss.com or to: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland.",
      "Model withdrawal form:\nTo: OneType Prosta Spółka Akcyjna, ul. Fabryczna 4A/11, 00-446 Warszawa, Poland, legal@unabyss.com\nI hereby give notice that I withdraw from my contract of sale of the following service: [Subscription to Unabyss Service] ordered on [date] / received on [date].\nName of consumer(s):\nAddress of consumer(s):\nSignature of consumer(s) (only if this form is notified on paper):\nDate:",
    ],
  },
];

export const promotionTermsLinks: { label: string; href: string }[] = [
  { label: "Product Hunt launch (May 25-29, 2026)", href: "/terms/promotion/product-hunt" },
  { label: "Launch 2 (May 30 - Jun 15, 2026)", href: "/terms/promotion/launch2" },
  { label: "Launch 3 (Jun 15-22, 2026)", href: "/terms/promotion/launch3" },
  { label: "Launch 4 (Jun 22 - Jul 9, 2026)", href: "/terms/promotion/launch4" },
];
