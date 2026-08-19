export type EventData = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  date: string;
  updatedAt: string;
  summary: string;
  overview: string;
  image: {
    card: string;
    hero: string;
    alt: string;
    credit: string;
    href: string;
  };
  objectives: string[];
  workingGroups: { title: string; content: string }[];
  partners: string[];
  outcomes: string[];
};

export const events: EventData[] = [
  {
    slug: "global",
    title: "Global Faith Impact Forum & PenThropy+ 2026",
    shortTitle: "Global Forum",
    location: "Montreal, Canada",
    date: "October 1-2, 2026",
    updatedAt: "2026-03-24",
    summary:
      "A global convening that aligns faith-based philanthropy, social investment, and PenThropy+ collaborations for measurable impact.",
    overview:
      "Global Faith Impact Forum & PenThropy+ 2026 convenes faith-based organizations, philanthropic leaders, and impact investors to accelerate innovation and sustainable development. The forum highlights cross-border partnerships, capital alignment, and evidence-driven impact at a global scale.",
    image: {
      card: "/images/home-hero.jpg",
      hero: "/images/home-hero.jpg",
      alt: "Global forum audience gathering",
      credit: "Unsplash",
      href: "https://unsplash.com/photos/audience-in-a-conference-EVgsAbL51Rk"
    },
    objectives: [
      "Advance global collaboration among faith-based development leaders.",
      "Mobilize blended finance and philanthropic capital for scalable impact.",
      "Launch PenThropy+ initiatives and knowledge exchange.",
      "Strengthen evidence, accountability, and impact reporting frameworks.",
      "Catalyze cross-region partnerships and policy alignment."
    ],
    workingGroups: [
      {
        title: "Global Faith & Social Innovation",
        content:
          "Scaling models that blend faith-driven values with inclusive innovation across education, health, and livelihoods."
      },
      {
        title: "Impact Finance & Philanthropy",
        content:
          "Unlocking blended finance, grantmaking, and catalytic capital for grassroots solutions."
      },
      {
        title: "Policy, Evidence & Advocacy",
        content:
          "Building shared data systems and policy frameworks that recognize FBOs as development partners."
      },
      {
        title: "Community Resilience & Crisis Response",
        content:
          "Strengthening coordinated response systems for humanitarian and climate shocks."
      }
    ],
    partners: [
      "PenThropy+ Network",
      "Global Faith Leaders Council",
      "International Philanthropy Forum",
      "Impact Investors Alliance",
      "Academic Research Consortium"
    ],
    outcomes: [
      "Global agenda for faith-based social investment.",
      "Cross-border partnerships and pilot initiatives launched.",
      "PenThropy+ collaboration platform activated.",
      "Expanded network of strategic partners and funders."
    ]
  },
  {
    slug: "usa",
    title: "Faith Impact Forum - USA",
    shortTitle: "USA Forum",
    location: "New York, USA",
    date: "2027",
    updatedAt: "2026-03-24",
    summary:
      "A US-focused forum connecting faith-based organizations with philanthropic and investment partners for measurable social impact.",
    overview:
      "Faith Impact Forum - USA convenes faith leaders, philanthropic institutions, and social investors to align strategies for innovation and inclusive community development. The forum elevates FBOs as trusted delivery partners across health, education, and community resilience.",
    image: {
      card: "/images/partners-hero.jpg",
      hero: "/images/partners-hero.jpg",
      alt: "Forum participants collaborating in New York",
      credit: "Unsplash",
      href: "https://unsplash.com/photos/people-sitting-on-chair-inside-room-gvpK54EkbRE"
    },
    objectives: [
      "Strengthen US-based faith and philanthropy partnerships.",
      "Mobilize catalytic capital for community-scale impact.",
      "Advance policy dialogue and civic collaboration.",
      "Showcase innovation in health, education, and inclusion.",
      "Build an investment-ready pipeline of initiatives."
    ],
    workingGroups: [
      {
        title: "Faith & Community Innovation",
        content:
          "Scaling inclusive models for education, health access, and social cohesion."
      },
      {
        title: "Impact Investing & Philanthropy",
        content:
          "Designing capital blends and grantmaking strategies for measurable outcomes."
      },
      {
        title: "Policy & Civic Engagement",
        content:
          "Aligning faith-led initiatives with city and national development priorities."
      },
      {
        title: "Resilience & Social Inclusion",
        content:
          "Building resilience for underserved communities through coordinated action."
      }
    ],
    partners: [
      "US Faith Leaders Council",
      "Philanthropy Support Network",
      "City & Community Foundations",
      "Academic Institutions",
      "Private Sector Coalition"
    ],
    outcomes: [
      "US action agenda for faith-based social investment.",
      "New partnerships and funding commitments.",
      "Expanded evidence and accountability standards.",
      "Increased collaboration across sectors."
    ]
  },
  {
    slug: "africa",
    title: "Faith Impact Forum - Africa",
    shortTitle: "Africa Forum",
    location: "Nairobi, Kenya",
    date: "August 10-11, 2026",
    updatedAt: "2026-03-24",
    summary:
      "A continental convening for faith-based organizations and social investors to accelerate development outcomes across Africa.",
    overview:
      "The Faith Impact Forum - Africa convenes faith-based organizations (FBOs), philanthropy support organisations, and development partners to align strategies, evidence, and capital for inclusive growth. The forum highlights FBOs as co-creators of social innovation and long-term resilience.",
    image: {
      card: "/images/events/africa.jpg",
      hero: "/images/events/africa.jpg",
      alt: "African forum gathering in Nairobi",
      credit: "Unsplash",
      href: "https://unsplash.com/photos/a-photo-of-people-walking-down-a-pathway-4mz1bfBP6XQ"
    },
    objectives: [
      "Strengthen collaboration between FBOs and development partners.",
      "Promote data-driven, accountable faith-based philanthropy.",
      "Mobilize social investment toward scalable community impact.",
      "Advance policy dialogue for faith-informed development.",
      "Catalyze strategic partnerships for sustainable impact."
    ],
    workingGroups: [
      {
        title: "Faith & Social Innovation",
        content:
          "Accelerating models that blend faith-driven values with inclusive innovation across education, health, and livelihoods."
      },
      {
        title: "Impact Finance & Philanthropy",
        content:
          "Unlocking blended finance, grantmaking, and catalytic capital for grassroots solutions."
      },
      {
        title: "Policy, Evidence & Advocacy",
        content:
          "Building shared data systems and policy frameworks that recognize FBOs as development partners."
      },
      {
        title: "Community Resilience & Crisis Response",
        content:
          "Scaling coordinated response systems for humanitarian and climate shocks."
      }
    ],
    partners: [
      "Faith-Based Organizations Network",
      "African Philanthropy Forum",
      "Development Partners Alliance",
      "Social Impact Investors Council",
      "Academic Institutions Consortium"
    ],
    outcomes: [
      "Joint agenda for faith-based social investment across Africa.",
      "Partnership MOUs and pilot projects launched.",
      "Shared evidence framework for FBO impact reporting.",
      "Expanded network of strategic partners and funders."
    ]
  },
  {
    slug: "ghana",
    title: "Faith Impact Forum - Ghana",
    shortTitle: "Ghana Forum",
    location: "Accra, Ghana",
    date: "2027",
    updatedAt: "2026-03-24",
    summary:
      "Country-focused platform to align Ghanaian FBOs with philanthropic, public, and private sector actors for measurable impact.",
    overview:
      "Faith Impact Forum - Ghana is a national convening focused on partnership, capacity building, and coordinated action for local development priorities. It amplifies Ghanaian FBOs as trusted delivery partners across health, education, and community development.",
    image: {
      card: "/images/events/ghana.jpg",
      hero: "/images/events/ghana.jpg",
      alt: "Accra city skyline in Ghana",
      credit: "Unsplash",
      href: "https://unsplash.com/photos/sky-high-buildings-shot-dQ4HPQhzcT8"
    },
    objectives: [
      "Strengthen national coordination among FBOs.",
      "Improve accountability and impact measurement.",
      "Mobilize domestic philanthropy and social investment.",
      "Advance multi-sector partnerships for SDGs.",
      "Highlight Ghana-specific innovation models."
    ],
    workingGroups: [
      {
        title: "Health & Wellbeing",
        content:
          "Improving primary healthcare delivery, maternal health, and mental wellness through faith-based networks."
      },
      {
        title: "Education & Youth Empowerment",
        content:
          "Scaling education access and vocational pathways for youth-led impact."
      },
      {
        title: "Economic Inclusion",
        content:
          "Supporting micro-enterprise, skills development, and livelihoods."
      },
      {
        title: "Faith & Policy Alignment",
        content:
          "Building public-private-faith collaboration for national development frameworks."
      }
    ],
    partners: [
      "Pentvars University",
      "National Faith Council",
      "Ghana Philanthropy Network",
      "Private Sector Coalition",
      "Civil Society Partners"
    ],
    outcomes: [
      "Country action plan co-created with stakeholders.",
      "Capacity-building pipeline for FBO leaders.",
      "New funding partnerships for community projects.",
      "Increased public-private-faith coordination."
    ]
  }
];

export const eventNavItems = [
  {
    title: "Global Faith Impact Forum & PenThropy+ 2026",
    href: "/events/global"
  },
  {
    title: "Faith Impact Forum - USA",
    href: "/events/usa"
  },
  {
    title: "Faith Impact Forum - Africa",
    href: "/events/africa"
  },
  {
    title: "Faith Impact Forum - Ghana",
    href: "/events/ghana"
  }
];
