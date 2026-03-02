import React from "react";

import * as Accordion from "@radix-ui/react-accordion";

const altairaFaq = [
  {
    id: "faq-1",
    question: "What is Altaira – Above The Clouds?",
    answer:
      "Altaira is a 26-acre, ultra-luxury hilltop development in Bulathkohupitiya, Sri Lanka, offering villas, sky-residences, a boutique hotel, adventure valley, tea estate, wellness retreat, and curated hospitality experiences. It is positioned as a first-of-its-kind UHNI destination in South Asia."
  },
  {
    id: "faq-2",
    question: "Who is developing Altaira?",
    answer:
      "Altaira is developed by Fracspace Private Limited (India) through its Sri Lanka subsidiary, in collaboration with Sri Lankan architects, consultants, and the Board of Investment (BOI)."
  },
  {
    id: "faq-3",
    question: "What makes Altaira unique?",
    answer:
      "• 26 acres at 2,000+ ft elevation\n• Low-density development\n• Curated UHNI experiences (choppers, private chefs, wellness)\n• Only 60–90 exclusive keys (final master plan dependent)\n• USD 20 million+ project scale\n• “Above the clouds” year-round ambience\n• Indo–Lanka cultural and investment bridge"
  },
  {
    id: "faq-4",
    question: "What types of units are available?",
    answer:
      "• Sky Villas\n• Cliffside Cottages\n• Tea Estate Residences\n• Hotel Suites (Investment Model)\n• Adventure & Wellness Pods (Phase II)\nUnit mix will be released at launch after architectural approvals."
  },
  {
    id: "faq-5",
    question: "When does the project launch?",
    answer:
      "The grand private black-tie global launch is scheduled for 14th February 2026 at an undisclosed venue in Colombo. Entry is by invite only."
  },
  {
    id: "faq-6",
    question: "Can foreign nationals purchase a property at Altaira?",
    answer:
      "Yes. Foreigners can legally purchase Altaira units, either outright or through structured investment models."
  },
  {
    id: "faq-7",
    question: "Is this a freehold or leasehold development?",
    answer:
      "Altaira will offer long-term, BOI-approved 99-year leasehold interests and foreign-eligible ownership structures depending on the unit type."
  },
  {
    id: "faq-8",
    question: "What is the investment opportunity?",
    answer:
      "Early investors may be eligible for up to 200% maturity at the end of 48 months, along with Founder Investor Program perks. Terms vary based on category."
  },
  {
    id: "faq-9",
    question: "What is the total project cost?",
    answer:
      "The estimated project cost is USD 20 million plus a 10% contingency."
  },
  {
    id: "faq-10",
    question: "How secure is my investment?",
    answer:
      "Altaira uses BOI regulatory frameworks, escrow-managed fund flows, SPV structures for investor protection, detailed legal agreements, and transparent land titles with government-verified documentation."
  },
  {
    id: "faq-11",
    question: "When will construction begin?",
    answer:
      "Construction is expected to begin in February 2026, post the global launch."
  },
  {
    id: "faq-12",
    question: "Can investors exit early?",
    answer:
      "Early exits depend on the chosen investment plan. The standard tenure is 48 months, with structured exit mechanisms."
  },
  {
    id: "faq-13",
    question: "Is this a hotel investment or a real estate purchase?",
    answer:
      "Altaira offers both luxury real estate (villas and residences) and hospitality-linked investment units such as hotel suites and revenue-share programs."
  },
  {
    id: "faq-14",
    question: "Will Altaira offer rental income?",
    answer:
      "Yes. Select categories will provide rental pool–based income managed by Fracspace Hospitality."
  },
  {
    id: "faq-15",
    question: "What amenities will be available?",
    answer:
      "• 5-star resort\n• Global cuisine restaurant\n• Infinity decks\n• Tea estate walkways\n• Adventure valley\n• Wellness & spa\n• Private event spaces\n• Helipad & helicopter transportation"
  },
  {
    id: "faq-16",
    question: "Is financing available?",
    answer:
      "Local Sri Lankan mortgage solutions and international banking partners will be available for eligible investors."
  },
  {
    id: "faq-17",
    question: "Can buyers resell their units?",
    answer:
      "Yes. Units can be resold, assigned, or transferred, subject to BOI and project guidelines."
  },
  {
    id: "faq-18",
    question: "Will owners receive visas or residency benefits?",
    answer:
      "Sri Lanka offers multiple investor and long-stay visas. Altaira’s legal team will assist qualifying buyers with BOI-facilitated visa pathways."
  },
  {
    id: "faq-19",
    question: "What is the timeline for delivery?",
    answer:
      "Altaira Resort: December 2027\nAltaira Residences: June 2028\nAn additional 12 months leniency applies in case of unfavourable weather conditions."
  },
  {
    id: "faq-20",
    question: "How do I register my interest?",
    answer:
      "Investors can join the Altaira Global Guestlist for early access, invitations, and priority pricing."
  }
];

const foreignOwnershipFaq = [
  {
    id: "foreign-1",
    question: "Can foreigners legally own property in Sri Lanka?",
    answer:
      "Yes. Sri Lanka allows foreign ownership through BOI-approved structures, condominium ownership, and long-term leasehold interests. Altaira is structured under the BOI to enable foreigners to purchase and hold units safely."
  },
  {
    id: "foreign-2",
    question: "What ownership model is Altaira using?",
    answer:
      "A. Condominium Villa – Foreigners can legally purchase condominium units within approved developments.\nB. SPV Ownership Model – Foreign buyers may own shares in a BOI-approved project company (SPV), similar to structures in Dubai, Bali, and Thailand.\nC. Corporate Ownership – Foreigners can incorporate a Sri Lankan company (100% foreign shareholding permitted under BOI) to purchase property legally."
  },
  {
    id: "foreign-3",
    question: "What documents are required from a foreign buyer?",
    answer:
      "• Passport copy\n• Proof of address\n• KYC / AML documents\n• Investment declaration form\n• Shareholding or lease agreement (depending on ownership model)"
  },
  {
    id: "foreign-4",
    question: "What is the payment process?",
    answer:
      "Foreign investors must open an Inward Investment Account (IIA) with a Sri Lankan bank. Payments can be made via inward remittances (USD preferred), BOI-authorized banking channels, and escrow accounts for investment security."
  },
  {
    id: "foreign-5",
    question: "What is the exit process for foreign investors?",
    answer:
      "Funds can be legally repatriated with profit via BOI-approved channels, ensuring full compliance and documentation."
  },
  {
    id: "foreign-6",
    question: "Is the purchase protected by law?",
    answer:
      "Yes. BOI approvals provide government-recognized status, secure investment pathways, clear land title verification, permission for foreign inflows and outflows, and legal protection under Sri Lankan investment law."
  }
];

function FaqContainer() {
  return (
    <div className="pb-6 mb-6">
      <div className="py-6 px-4">
        <h2 className="text-center mx-auto max-w-5xl text-xl lg:text-3xl font-cormorant font-semibold">
          ALTAIRA – FREQUENTLY ASKED QUESTIONS (FAQ)
        </h2>
        <p className="text-center mx-auto max-w-5xl mt-4">
          A curated guide for investors, buyers, and global residents
        </p>
      </div>

      <div className="w-full flex px-4 justify-center">
        <Accordion.Root
          type="single"
          collapsible
          className="w-full max-w-5xl space-y-4"
        >
          {altairaFaq.map((item, index) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="rounded-md"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex font-cormorant">
                  {/* MOBILE + DESKTOP QUESTION */}
                  <div className="flex items-center w-full justify-between bg-[#EEE9E2] px-4 py-4 rounded-lg text-start text-lg lg:text-xl font-semibold">
                    <span className="pr-4 dark:text-black">
                      {index + 1}. {item.question}
                    </span>

                    {/* MOBILE + / − (inside question) */}
                    <span className="lg:hidden text-[#AD9273] text-2xl font-semibold">
                      <span className="group-data-[state=open]:hidden">+</span>
                      <span className="hidden group-data-[state=open]:inline">
                        −
                      </span>
                    </span>
                  </div>

                  {/* DESKTOP + / − (separate box) */}
                  <span className="hidden md:flex  bg-[#EEE9E2] px-5 py-3 text-[#AD9273] font-semibold rounded-lg text-3xl ml-4">
                    <span className="group-data-[state=open]:hidden">+</span>
                    <span className="hidden group-data-[state=open]:inline">
                      −
                    </span>
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="mt-2  bg-[#EEE9E2] rounded-lg px-6 py-4 text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  {item.answer.split("\n").map((line, i) => (
                    <li className="dark:text-black" key={i}>{line.replace("•", "").trim()}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <div className="py-6 px-4">
        <h2 className="text-center mx-auto max-w-5xl text-xl lg:text-3xl font-cormorant font-semibold">
          HOW CAN A FOREIGNER PURCHASE PROPERTY AT ALTAIRA?
        </h2>
        <p className="text-center mx-auto max-w-5xl mt-4">
          A simple, clear, confidence-building explanation for global investors
        </p>
      </div>

      <div className="w-full px-4 flex justify-center">
        <Accordion.Root
          type="single"
          collapsible
          className="w-full max-w-5xl space-y-4"
        >
          {foreignOwnershipFaq.map((item, index) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="rounded-md"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex font-cormorant">
                  {/* MOBILE + DESKTOP QUESTION */}
                  <div className="flex items-center w-full justify-between bg-[#EEE9E2] px-4 py-4 rounded-lg text-start text-lg lg:text-xl font-semibold">
                    <span className="pr-4 dark:text-black">
                      {index + 1}. {item.question}
                    </span>

                    {/* MOBILE + / − (inside question) */}
                    <span className="lg:hidden text-[#AD9273] text-2xl font-semibold">
                      <span className="group-data-[state=open]:hidden">+</span>
                      <span className="hidden group-data-[state=open]:inline">
                        −
                      </span>
                    </span>
                  </div>

                  {/* DESKTOP + / − (separate box) */}
                  <span className="hidden md:flex  bg-[#EEE9E2] px-5 py-3 text-[#AD9273] font-semibold rounded-lg text-3xl ml-4">
                    <span className="group-data-[state=open]:hidden">+</span>
                    <span className="hidden group-data-[state=open]:inline">
                      −
                    </span>
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="mt-2  bg-[#EEE9E2] rounded-lg px-6 py-4 text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  {item.answer.split("\n").map((line, i) => (
                    <li className="dark:text-black" key={i}>{line.replace("•", "").trim()}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

export default FaqContainer;
