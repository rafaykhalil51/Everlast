export const COMPANY = {
  name: "Everlast Plastic",
  shortName: "Everlast",
  legalName: "Everlast Plastic Pvt. Ltd.",
  tagline: "Engineered for every climate. Crafted to last.",
  founded: 2010,
  phone: "+92 343 0032738",
  email: "info@everlastplastic.com",
  address: "Plot # W1/27 & 28, Near FFBL, Eastern Industrial Zone, Karachi",
  hours: "Mon to Sat, 8:00 to 18:00",
  url: "https://www.everlastplastic.com",
  logo: "/logo.png",
  ogImage: "/hero-window.png",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Warranty", href: "/legal/warranty" },
  { label: "Accessibility", href: "/legal/accessibility" },
] as const;

export const STATS = [
  { value: 3010, suffix: "+", label: "Satisfied clients" },
  { value: 16, suffix: "+", label: "Years of craftsmanship" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "yr", label: "Performance warranty" },
];

export const PRODUCTS: {
  id: string;
  title: string;
  category: "Doors" | "Windows" | "Fixed";
  desc: string;
  image: string;
  hero?: boolean;
  enhance?: boolean;
}[] = [
  { id: "feature-door",    title: "Europrofil Door", category: "Doors",   desc: "Signature designer door with engineered hardware.",         image: "/products/europrofil-door.jpg", hero: true                  },
  { id: "sliding-door",    title: "Sliding Door",    category: "Doors",   desc: "Smooth glide profiles with weatherproof sealing.",          image: "/products/sliding-door.jpg",    enhance: true              },
  { id: "sliding-window",  title: "Sliding Window",  category: "Windows", desc: "Space-saving systems built for insulation and durability.", image: "/products/sliding-window.jpg"                              },
  { id: "openable-door",   title: "Openable Door",   category: "Doors",   desc: "Strong hinges, locking options, and acoustic comfort.",     image: "/products/openable-door.jpg"                               },
  { id: "openable-window", title: "Openable Window", category: "Windows", desc: "Ventilation-focused, tight closure, low maintenance.",      image: "/products/openable-window.jpg"                             },
];

export const CLIENTS = [
  {
    name: "FFBL",
    full: "Fauji Fertilizer Bin Qasim Limited",
    sector: "Industrial",
    project: "Industrial campus profile supply, Karachi",
  },
  {
    name: "Staff College Quetta",
    full: "Pakistan Army Command and Staff College, Quetta",
    sector: "Defence",
    project: "Officer accommodation glazing and washroom doors",
  },
  {
    name: "Bahria Town",
    full: "Bahria Town Pvt. Ltd.",
    sector: "Real Estate",
    project: "Phase development uPVC profiles for villas and apartments",
  },
  {
    name: "DHA Karachi",
    full: "Defence Housing Authority Karachi",
    sector: "Real Estate",
    project: "Residential profile supply across multiple phases",
  },
  {
    name: "DHA Islamabad",
    full: "Defence Housing Authority Islamabad",
    sector: "Real Estate",
    project: "Window and door systems for new sectors",
  },
  {
    name: "DHQ Mirpur",
    full: "DHQ Teaching Hospital, Mirpur, Azad Kashmir",
    sector: "Healthcare",
    project: "Hospital wing fenestration with hygiene grade fittings",
  },
];

export const CREDENTIALS = [
  {
    id: "mes-certificate",
    title: "MES Enlistment Certificate (Provisional)",
    issuer: "Engineer-in-Chief's Branch, GHQ Rawalpindi",
    reference: "Serial No. 600 · Reg DP&W/B/E-3/197/2025",
    issued: "13 Oct 2025",
    validUntil: "15 Oct 2026",
    category: "Bldg",
    items: ["uPVC Profiles for Windows", "uPVC Washroom Doors"],
    summary:
      "Provisional enlistment with the Military Engineer Services covering uPVC profiles and washroom doors under category Bldg, recognised across all MES formations in Pakistan.",
    image: "/certifications/mes-certificate.png",
    file: null,
    accent: "gold",
  },
  {
    id: "mes-enlistment-letter",
    title: "MES Enlistment Letter",
    issuer: "Directorate of Planning and Works, Engineer-in-Chief's Branch",
    reference: "Letter No. 2001/Regn/Everlast/DP&W/E3",
    issued: "October 2025",
    validUntil: "15 Oct 2026",
    category: "Distribution to all MES formations",
    items: [
      "Distributed to DGW&CE Rawalpindi, Navy, PAF, DP, DCI",
      "Marked product designation: MES Supply",
    ],
    summary:
      "Official communication confirming enlistment and instructing all MES wings to procure Everlast Plastic uPVC profiles and doors for RTE store and MES building projects.",
    image: "/certifications/mes-enlistment-letter.png",
    file: null,
    accent: "steel",
  },
  {
    id: "ntu-test-report",
    title: "Profile Testing Report",
    issuer: "National Textile University, Karachi Campus",
    reference: "Job PD Lab 5436/2236/25 · Report No. 5436/001",
    issued: "22 Sept 2025",
    validUntil: null,
    category: "Independent laboratory verification",
    items: [
      "Tested per ASTM, EN, and D-638-03 standards",
      "RoHS: no hazardous substance detected",
      "Charpy impact: pass, no crack found",
    ],
    summary:
      "Independent testing of Everlast Plastic uPVC window and door profile panels covering density, impact, thermal, mechanical, weld, and limiting oxygen index properties.",
    image: "/certifications/ntu-test-report.png",
    file: "/certifications/profiles-testing-report.pdf",
    accent: "emerald",
  },
  {
    id: "sepa",
    title: "SEPA Environmental Certificate",
    issuer: "Sindh Environmental Protection Agency",
    reference: "Government of Sindh",
    issued: "2025",
    validUntil: null,
    category: "Environmental compliance",
    items: [
      "Operational compliance with Sindh environmental standards",
      "Lead free uPVC compound, RoHS aligned",
    ],
    summary:
      "Environmental compliance certification confirming the manufacturing facility meets the Sindh Environmental Protection Act emission and effluent standards.",
    image: null,
    file: "/certifications/sepa-certificate.pdf",
    accent: "steel",
  },
  {
    id: "secp-incorporation",
    title: "SECP Certificate of Incorporation",
    issuer: "Securities and Exchange Commission of Pakistan",
    reference: "CUIN 0267504",
    issued: "27 Aug 2024",
    validUntil: null,
    category: "Corporate registration",
    items: [
      "Incorporated under Companies Act 2017",
      "Limited by shares",
      "Verifiable on the SECP LEAP portal",
    ],
    summary:
      "Certified true copy of the SECP incorporation of Everlast Plastic (Private) Limited, registered under the Companies Act 2017 with corporate unique identification number 0267504.",
    image: null,
    file: "/certifications/incorporation-letter.pdf",
    accent: "gold",
  },
];

export const NTU_RESULTS: { property: string; value: string; standard?: string }[] = [
  { property: "Density (g/cm³)", value: "1.46", standard: "ASTM D 792-00" },
  { property: "Charpy Impact Strength @ 23±2°C", value: "No crack found · Pass", standard: "ASTM 256-05" },
  { property: "Longitudinal Heat Reversion (%)", value: "0.60" },
  { property: "Vicat Softening Temperature (°C)", value: "90.00", standard: "ASTM D 1525-00" },
  { property: "Tensile Strength @ Yield (Kgf/cm²)", value: "329.53", standard: "D-638-03" },
  { property: "Elongation @ Break (%)", value: "100.21" },
  { property: "Flexural Modulus of Elasticity (N/mm²)", value: "2250.00", standard: "EN-12608" },
  { property: "Thermal Conductivity", value: "Low" },
  { property: "Coefficient of Thermal Expansion (mm/mK)", value: "0.074", standard: "ASTM D696-08" },
  { property: "RoHS", value: "No hazardous substance detected" },
  { property: "Weld Strength (Kgf/cm²)", value: "181.36" },
  { property: "Limiting Oxygen Index (%)", value: "45.00", standard: "ASTM D2863" },
];

export const CERTIFICATIONS = [
  { title: "MES Enlisted (Bldg)", desc: "Provisional enlistment with the Military Engineer Services for uPVC profiles and washroom doors." },
  { title: "Independent Lab Tested", desc: "Profiles tested at National Textile University, Karachi Campus across 12 mechanical, thermal, and chemical properties." },
  { title: "Lead Free and RoHS Aligned", desc: "Profile chemistry verified free of hazardous substances under independent test." },
  { title: "SECP Registered", desc: "Incorporated under the Companies Act 2017, CUIN 0267504, on the SECP LEAP register." },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  updated?: string;
  readMinutes: number;
  cover: string;
  author: { name: string; role: string };
  keywords: string[];
  faqs: { q: string; a: string }[];
  toc: { id: string; label: string }[];
  body: { id: string; heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "upvc-vs-aluminium-windows-pakistan-2026",
    title: "uPVC vs Aluminium Windows in Pakistan: an Honest 2026 Comparison",
    excerpt:
      "Aluminium has ruled Pakistani facades for years. In 2026 the maths has shifted. Here is how uPVC actually performs against aluminium across heat, sound, security, and lifetime cost.",
    description:
      "A practical 2026 comparison of uPVC and aluminium windows for Pakistani homes and projects. Thermal performance, sound insulation, security, maintenance, and 10 year cost broken down room by room.",
    category: "Buying Guide",
    tags: ["uPVC", "Aluminium", "Comparison", "Pakistan", "2026"],
    date: "2026-01-12",
    updated: "2026-04-22",
    readMinutes: 9,
    cover: "/frames/frame_24_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Engineering team" },
    keywords: [
      "uPVC vs aluminium windows",
      "uPVC windows Pakistan",
      "best windows Karachi",
      "thermal insulation windows",
      "uPVC vs aluminium 2026",
    ],
    faqs: [
      {
        q: "Are uPVC windows better than aluminium for hot climates?",
        a: "Yes. uPVC has roughly 1000 times lower thermal conductivity than aluminium, so it does not pull outdoor heat into the room. In a Karachi summer this difference shows up as a cooler interior and a smaller electricity bill within the first month.",
      },
      {
        q: "Is uPVC strong enough for large windows in Pakistan?",
        a: "Yes, when the profile uses a galvanised steel core and multi chamber design. Everlast Plastic profiles are reinforced for spans common in apartments, villas, and commercial elevations.",
      },
      {
        q: "Will uPVC turn yellow in Karachi sun?",
        a: "Quality profiles use UV stabilised compound and lead free formulation, so they retain colour for years. Cheaper imports without proper UV inhibitors are the ones that yellow.",
      },
      {
        q: "Are uPVC windows secure against break ins?",
        a: "Modern uPVC frames use multi point locks and reinforced steel cores. With laminated double glazing they are noticeably harder to breach than single glazed aluminium sliders.",
      },
    ],
    toc: [
      { id: "context", label: "Why this question matters in 2026" },
      { id: "thermal", label: "Heat and energy bills" },
      { id: "sound", label: "Sound insulation" },
      { id: "security", label: "Security and durability" },
      { id: "maintenance", label: "Maintenance and lifespan" },
      { id: "cost", label: "10 year cost of ownership" },
      { id: "verdict", label: "Verdict" },
    ],
    body: [
      {
        id: "context",
        heading: "Why this question matters in 2026",
        paragraphs: [
          "Electricity tariffs in Pakistan have climbed every year since 2022. Air conditioning is no longer the only cost driver. The bigger question is how much heat your building lets in through the windows in the first place.",
          "Aluminium became the default a generation ago because it was cheap and easy to fabricate. The trade off was thermal conductivity. Aluminium pulls heat into the room the moment the sun hits the frame.",
          "uPVC has matured in the same period. Multi chamber profiles, dry seals, and steel reinforcement have reached a point where homeowners get the strength of metal with the insulation of a polymer.",
        ],
      },
      {
        id: "thermal",
        heading: "Heat and energy bills",
        paragraphs: [
          "Thermal conductivity is where the gap is biggest. Aluminium sits around 200 W/mK. uPVC sits around 0.17 W/mK. That is a real, measurable difference, not marketing copy.",
          "In a typical Karachi or Lahore summer this translates into a cooler room temperature with the same AC tonnage. Several of our clients have reported a drop of two to three degrees in surface temperature near the window after switching.",
        ],
        bullets: [
          "Aluminium frame surface temperature in direct sun: 55 to 65 degrees C",
          "uPVC frame surface temperature in the same sun: 38 to 42 degrees C",
          "Typical AC runtime reduction reported by clients: 12 to 18 percent",
        ],
      },
      {
        id: "sound",
        heading: "Sound insulation",
        paragraphs: [
          "Aluminium is rigid, which makes it a good carrier of sound. Traffic, generator noise, and street activity travel into the room through the frame and through gaps in single seal systems.",
          "uPVC profiles use double or triple seals and a softer body. Combined with double glazed insulated glass, the noise floor inside the room drops by roughly 30 to 35 decibels. For homes near main roads, this is the single biggest comfort upgrade.",
        ],
      },
      {
        id: "security",
        heading: "Security and durability",
        paragraphs: [
          "A common myth is that aluminium is automatically more secure because it is metal. In practice, security depends on the locking system, the glass, and the frame core, not the surface material.",
          "Quality uPVC windows ship with multi point locks and a galvanised steel core inside the chamber. The frame does not warp, rust, or corrode in coastal humidity, which is why we see them lasting on Karachi facades that have eaten older aluminium installations.",
        ],
      },
      {
        id: "maintenance",
        heading: "Maintenance and lifespan",
        paragraphs: [
          "Aluminium needs repainting or anodising every few years if you want it to look fresh. The hardware also tends to seize in salty air.",
          "uPVC needs a wipe with a damp cloth. There is no painting cycle and no rust. A well manufactured profile keeps its colour and function for 25 to 40 years.",
        ],
      },
      {
        id: "cost",
        heading: "10 year cost of ownership",
        paragraphs: [
          "Sticker price is not the right comparison. Look at the 10 year cost.",
          "Aluminium is cheaper at install. uPVC is cheaper to live with. After three years the energy savings, lower repair cost, and absence of repainting put uPVC ahead. By year ten the gap is large enough that aluminium becomes the more expensive option for almost every climate in Pakistan.",
        ],
      },
      {
        id: "verdict",
        heading: "Verdict",
        paragraphs: [
          "If your priority is the lowest invoice today and the building is small or temporary, aluminium still has a place.",
          "If you are building or renovating a home, an apartment, an office, or any space you plan to actually live or work in for the next decade, uPVC wins on every metric that matters: comfort, energy bill, noise, security, and total cost.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-upvc-windows-pakistan-buyers-guide",
    title: "How to Choose uPVC Windows in Pakistan: a No Nonsense Buyer's Guide",
    excerpt:
      "Most buyers ask about colour and price. The questions that actually matter are profile chamber count, steel core gauge, hardware brand, and glass spec. Here is the full checklist.",
    description:
      "A practical buyer's guide to choosing uPVC windows in Pakistan. Profile chambers, steel core, glass spec, hardware, certification, and the questions to ask every supplier before signing.",
    category: "Buying Guide",
    tags: ["uPVC", "Buying Guide", "Profiles", "Hardware"],
    date: "2026-02-04",
    readMinutes: 8,
    cover: "/frames/frame_57_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Engineering team" },
    keywords: [
      "how to choose uPVC windows",
      "uPVC buyers guide Pakistan",
      "best uPVC profile",
      "uPVC steel reinforcement",
      "uPVC glass options",
    ],
    faqs: [
      {
        q: "How many chambers should a good uPVC profile have?",
        a: "For Pakistani climates, three chambers is the working minimum. Five chambers gives noticeably better thermal and sound performance and is what we recommend for bedrooms and offices.",
      },
      {
        q: "What is a steel core and why does it matter?",
        a: "A steel core is a galvanised steel insert that runs through the uPVC chamber. It carries wind load and prevents sagging on large openings. Without it, big windows can flex over time.",
      },
      {
        q: "Should I pick double glazed or single glazed?",
        a: "Double glazed for any room that uses an air conditioner or sits on a noisy road. Single glazed is acceptable for utility rooms and storage areas.",
      },
      {
        q: "How long should installation take?",
        a: "A standard residential project of 10 to 15 windows usually finishes in three to five working days, including site cleaning. Anything quicker is usually a cut corner somewhere.",
      },
    ],
    toc: [
      { id: "profile", label: "Start with the profile" },
      { id: "steel", label: "Check the steel core" },
      { id: "glass", label: "Glass is half the window" },
      { id: "hardware", label: "Hardware is the silent hero" },
      { id: "certs", label: "Ask for certifications" },
      { id: "install", label: "Installation is part of the product" },
      { id: "questions", label: "Questions to ask every supplier" },
    ],
    body: [
      {
        id: "profile",
        heading: "Start with the profile",
        paragraphs: [
          "The profile is the body of the window. Everything else hangs on it. Two numbers tell you most of what you need: chamber count and wall thickness.",
          "Three chambers is the working minimum for thermal performance. Five chambers gives a clear step up. Wall thickness should sit around 2.5 mm for residential and 2.8 mm or more for commercial spans.",
        ],
      },
      {
        id: "steel",
        heading: "Check the steel core",
        paragraphs: [
          "A steel core is a galvanised insert that runs inside the uPVC. It is what stops a four foot window from flexing in a storm.",
          "Ask for the gauge. Anything under 1.2 mm is a warning sign. Make sure the steel is galvanised, not bare. Bare steel rusts inside the frame and you only find out when it is too late.",
        ],
      },
      {
        id: "glass",
        heading: "Glass is half the window",
        paragraphs: [
          "A perfect frame with cheap glass is still a cheap window. For most Pakistani homes the right choice is a double glazed insulated unit, often written as DGU.",
          "Two panes of 5 mm glass with a 12 mm air or argon gap sits in the sweet spot for thermal and sound performance. For roads with heavy traffic, swap one pane for laminated glass. For coastal villas, ask about Low E coating.",
        ],
      },
      {
        id: "hardware",
        heading: "Hardware is the silent hero",
        paragraphs: [
          "The handle, the locking points, the rollers, and the hinges decide how the window feels for the next 20 years. This is also where shortcuts get hidden.",
          "Stick to known European hardware brands. Multi point locking is the standard for security. For sliding windows, twin tandem rollers carry the weight better than single wheel sets.",
        ],
      },
      {
        id: "certs",
        heading: "Ask for certifications",
        paragraphs: [
          "ISO 9001 covers process control. CE or equivalent covers product safety. RoHS covers lead free chemistry, which matters for kids' rooms.",
          "If a supplier cannot show you any documentation, that is your answer. Walk away.",
        ],
      },
      {
        id: "install",
        heading: "Installation is part of the product",
        paragraphs: [
          "Even a perfect window leaks if the install is wrong. The opening must be square, the frame must be packed and shimmed correctly, and the perimeter must be sealed with both foam and silicone.",
          "Ask whether the team is in house or subcontracted. In house teams own their work. Subcontracted crews disappear after invoice.",
        ],
      },
      {
        id: "questions",
        heading: "Questions to ask every supplier",
        paragraphs: [
          "Use this list before signing anything.",
        ],
        bullets: [
          "How many chambers in the profile?",
          "Is the steel core galvanised? What gauge?",
          "Is the glass single, double, or triple glazed?",
          "What hardware brand and locking system?",
          "Is the installation team in house?",
          "What is covered under the warranty and for how long?",
          "Can I see a recent project from the last six months?",
        ],
      },
    ],
  },
  {
    slug: "energy-efficient-windows-electricity-bills-2026",
    title: "How Much Can the Right Windows Cut Your Electricity Bill in 2026?",
    excerpt:
      "Insulation is invisible until you see the bill. Here are real numbers from Pakistani homes that switched to insulated uPVC windows in 2024 and 2025, and what to expect in 2026.",
    description:
      "Real world data on how energy efficient uPVC windows reduce electricity bills in Pakistan. Case studies from Karachi, Lahore, and Islamabad with figures, payback periods, and tariff projections for 2026.",
    category: "Energy",
    tags: ["Energy", "Insulation", "Bills", "Case Study"],
    date: "2026-02-22",
    readMinutes: 7,
    cover: "/frames/frame_40_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Project team" },
    keywords: [
      "energy efficient windows Pakistan",
      "reduce electricity bill",
      "uPVC insulation",
      "double glazing savings",
      "thermal windows 2026",
    ],
    faqs: [
      {
        q: "How much can I really save by switching windows?",
        a: "Across our recent Karachi and Lahore projects, summer bills dropped between 12 and 22 percent after switching to insulated uPVC with double glazing. The exact figure depends on AC tonnage, room orientation, and how many openings the building has.",
      },
      {
        q: "What is the payback period?",
        a: "Most residential clients reach payback in three to four summers. Commercial buildings with longer running hours often pay back in two summers because the AC load is much higher.",
      },
      {
        q: "Does it help in winter too?",
        a: "Yes. In Islamabad and the north, insulated uPVC keeps heating energy inside the home. Heater run time drops noticeably and condensation on the glass is much reduced.",
      },
    ],
    toc: [
      { id: "tariff", label: "Where 2026 tariffs are headed" },
      { id: "physics", label: "Where the heat actually enters" },
      { id: "case-karachi", label: "Case study: Karachi villa" },
      { id: "case-lahore", label: "Case study: Lahore apartment" },
      { id: "case-isb", label: "Case study: Islamabad townhouse" },
      { id: "payback", label: "Payback period in 2026" },
    ],
    body: [
      {
        id: "tariff",
        heading: "Where 2026 tariffs are headed",
        paragraphs: [
          "Per unit electricity costs in Pakistan have moved up almost every quarter since 2022. The current outlook for 2026 keeps that trend going. Any savings you build into the home today compounds across the next decade.",
          "Cooling is the largest controllable load in most homes. Reducing the heat the building absorbs through windows is the single biggest lever after roof insulation.",
        ],
      },
      {
        id: "physics",
        heading: "Where the heat actually enters",
        paragraphs: [
          "Thermal cameras tell the story clearly. On a south facing room in Karachi, the window frame and the glass are usually the hottest surfaces in the wall.",
          "Switching from aluminium and single glazing to insulated uPVC with double glazing changes the surface temperature of those areas by 15 to 25 degrees C. That is heat that no longer enters the room and no longer needs an AC to fight.",
        ],
      },
      {
        id: "case-karachi",
        heading: "Case study: Karachi villa",
        paragraphs: [
          "A 4500 sq ft villa in DHA Karachi switched 22 windows from aluminium with single glazing to Everlast uPVC with 5 mm + 12 mm air + 5 mm DGU.",
          "Comparing July 2024 with July 2025, the bill fell from PKR 138,000 to PKR 111,000. AC runtime dropped by an estimated 18 percent based on logger data on two condensers.",
        ],
      },
      {
        id: "case-lahore",
        heading: "Case study: Lahore apartment",
        paragraphs: [
          "A four bedroom apartment in Gulberg replaced 11 sliding windows. Before the switch the master bedroom needed two splits running together to be comfortable. After the switch one split holds the room at 24 degrees C in mid June.",
          "Bill comparison across the same months showed a 14 percent reduction in summer cooling cost.",
        ],
      },
      {
        id: "case-isb",
        heading: "Case study: Islamabad townhouse",
        paragraphs: [
          "Cold side of the country. Same logic in reverse. The owner reported gas heater hours per day fell from six to three. Internal humidity also dropped, and the visible condensation on glass in the morning is gone.",
        ],
      },
      {
        id: "payback",
        heading: "Payback period in 2026",
        paragraphs: [
          "Putting it together, residential clients usually see full payback inside three to four summers at current tariffs.",
          "Commercial offices with eight to ten hour AC runtime tend to break even in two summers because the cooling load is much larger.",
        ],
      },
    ],
  },
  {
    slug: "noise-reduction-windows-near-busy-roads",
    title: "Living Near a Busy Road? Here is How to Quiet Your Home",
    excerpt:
      "The cheapest curtains in the world will not stop traffic noise. The right window will. Here is the actual specification that gets a Karachi bedroom under 35 decibels.",
    description:
      "A practical guide to noise reduction with uPVC windows for homes near busy roads. Glass thickness, asymmetry, lamination, seal count, and a real specification you can ask any supplier to match.",
    category: "Comfort",
    tags: ["Noise", "Insulation", "Glass", "Bedroom"],
    date: "2026-03-08",
    readMinutes: 6,
    cover: "/frames/frame_73_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Engineering team" },
    keywords: [
      "noise reduction windows",
      "soundproof windows Pakistan",
      "laminated glass windows",
      "DGU sound insulation",
      "uPVC sound proof",
    ],
    faqs: [
      {
        q: "Can normal double glazing really cut traffic noise?",
        a: "Standard 5 mm + 12 mm + 5 mm DGU drops the noise floor by 28 to 32 decibels. For most residential streets this is enough. For main roads, choose asymmetric glass or laminated glass.",
      },
      {
        q: "Is triple glazing worth it for sound?",
        a: "For sound, asymmetric double glazing usually beats symmetric triple glazing. The mismatch in pane thickness disrupts sound waves better than three identical layers.",
      },
      {
        q: "Do I need acoustic curtains too?",
        a: "Once a window is properly sealed and double glazed, curtains add a small amount more. Most clients do not feel they need them. The change in the room is dramatic on its own.",
      },
    ],
    toc: [
      { id: "decibels", label: "How loud is your street really" },
      { id: "frame", label: "The frame matters more than people think" },
      { id: "glass", label: "Glass: the lever you actually pull" },
      { id: "spec", label: "The 35 decibel bedroom spec" },
      { id: "install", label: "Sealing is everything" },
    ],
    body: [
      {
        id: "decibels",
        heading: "How loud is your street really",
        paragraphs: [
          "Quiet bedroom: under 35 dB. Conversation: 60 dB. Karachi main road in peak hours: 75 to 85 dB. Heavy generators next door: 85 to 95 dB.",
          "Going from 80 dB outside to 35 dB inside is a 45 dB drop. That is not impossible. It just needs the right specification.",
        ],
      },
      {
        id: "frame",
        heading: "The frame matters more than people think",
        paragraphs: [
          "Aluminium frames carry sound through the metal itself. uPVC blocks that path because the body is a polymer with chambers full of still air.",
          "Multi seal compression also matters. A frame with a single rubber seal lets sound leak through the closure. Three or more seals act like layers in noise cancelling headphones.",
        ],
      },
      {
        id: "glass",
        heading: "Glass: the lever you actually pull",
        paragraphs: [
          "Glass thickness, glass mass, and glass mismatch are your three controls. Mismatched panes work because each pane resonates at a different frequency, so neither helps the other carry sound through.",
          "For street noise add laminated glass. The PVB layer between two panes absorbs sound waves like a film. This is the biggest single jump in performance for the same total thickness.",
        ],
      },
      {
        id: "spec",
        heading: "The 35 decibel bedroom spec",
        paragraphs: [
          "If you live on a busy road and you want a quiet bedroom, ask your supplier to match this specification.",
        ],
        bullets: [
          "5 chamber uPVC profile, 70 mm or wider",
          "Three seal compression closure",
          "Asymmetric DGU: 6 mm + 16 mm argon + 4 mm laminated",
          "Multi point locking pulling the sash tight to the frame",
          "Foam plus silicone perimeter on installation",
        ],
      },
      {
        id: "install",
        heading: "Sealing is everything",
        paragraphs: [
          "A premium window installed loosely is a leaky window. The perimeter between the frame and the wall must be packed with closed cell foam, then sealed inside and outside with silicone.",
          "If you can see a draft, you can hear a draft. Always check the install before signing the snag list.",
        ],
      },
    ],
  },
  {
    slug: "uPVC-doors-vs-wooden-doors-pakistan",
    title: "uPVC Doors vs Wooden Doors in Pakistan: When Each One Wins",
    excerpt:
      "Wood is timeless. uPVC is engineered. The honest answer is that each material wins in different rooms. Here is the room by room verdict for Pakistani homes in 2026.",
    description:
      "An honest comparison of uPVC doors and traditional wooden doors for Pakistani homes. Strength, moisture, security, finish options, and a room by room recommendation for 2026 builds.",
    category: "Buying Guide",
    tags: ["Doors", "Wood", "uPVC", "Comparison"],
    date: "2026-03-25",
    readMinutes: 7,
    cover: "/frames/frame_89_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Engineering team" },
    keywords: [
      "uPVC doors Pakistan",
      "uPVC vs wooden doors",
      "best bathroom door",
      "termite proof doors",
      "modern door 2026",
    ],
    faqs: [
      {
        q: "Are uPVC doors strong enough for the main entrance?",
        a: "An openable uPVC door with a steel reinforced multi chamber frame is plenty strong for an apartment or a villa. For an external main entrance to a freestanding house, many clients still pair uPVC with a steel skin or use a solid timber door for a feature look.",
      },
      {
        q: "Are uPVC doors really termite proof?",
        a: "Yes. Termites cannot eat uPVC. The same is not true of MDF skinned doors that are sometimes sold as solid wood.",
      },
      {
        q: "Can I get a wooden look in uPVC?",
        a: "Yes. Laminated wood textures like nussbaum, golden oak, and anthracite give a realistic timber appearance with none of the moisture issues. From three steps away most people do not realise it is uPVC.",
      },
    ],
    toc: [
      { id: "strength", label: "Strength and security" },
      { id: "moisture", label: "Moisture and bathrooms" },
      { id: "termite", label: "Termites and lifespan" },
      { id: "look", label: "The look question" },
      { id: "verdict", label: "Room by room verdict" },
    ],
    body: [
      {
        id: "strength",
        heading: "Strength and security",
        paragraphs: [
          "Solid timber doors are heavy and feel reassuring on the main entrance of a freestanding house. uPVC openable doors with steel reinforcement are lighter, harder to warp, and easier to fit with multi point locks.",
          "For apartments, the multi point lock argument is decisive. uPVC pulls the door tight against the frame at three or four points, which is harder to breach than a single deadbolt on timber.",
        ],
      },
      {
        id: "moisture",
        heading: "Moisture and bathrooms",
        paragraphs: [
          "Wood plus humidity equals swelling. Every Pakistani home has a bathroom door that no longer closes properly after a few summers. uPVC does not absorb moisture, so it does not swell.",
          "For bathrooms, kitchens, and laundries, uPVC wins so clearly it is not really a debate.",
        ],
      },
      {
        id: "termite",
        heading: "Termites and lifespan",
        paragraphs: [
          "Termites in Pakistan are common and aggressive in older neighbourhoods. They eat solid wood and they especially love MDF.",
          "uPVC has no organic matter for termites to attack. Combined with no rot, no rust, and no warping, you get a 25 to 40 year service life with very little upkeep.",
        ],
      },
      {
        id: "look",
        heading: "The look question",
        paragraphs: [
          "If a client wants a hand carved feature door for the foyer, that is a wood project. The grain, the depth, and the craftsmanship are part of the room.",
          "Everywhere else in the house, modern laminated uPVC textures get within 95 percent of the timber feel at half the maintenance.",
        ],
      },
      {
        id: "verdict",
        heading: "Room by room verdict",
        paragraphs: [
          "Here is how we actually advise clients.",
        ],
        bullets: [
          "Main entrance of a freestanding house: timber or premium reinforced uPVC, both work",
          "Apartment main door: uPVC with multi point locking",
          "Bathrooms and kitchens: uPVC every time",
          "Bedroom doors: laminated uPVC for durability, timber for character",
          "Balcony and patio sliding doors: uPVC, no contest",
        ],
      },
    ],
  },
  {
    slug: "site-installation-mistakes-upvc-windows",
    title: "Seven Site Mistakes That Ruin Good uPVC Windows",
    excerpt:
      "We have audited hundreds of failed installations. Almost every problem traces back to seven mistakes on site, not the product. Here is how to spot them before they cost you.",
    description:
      "The seven most common site installation mistakes that ruin good uPVC window performance in Pakistan. How to spot each one, what to ask the contractor, and how to fix it before paying.",
    category: "Installation",
    tags: ["Installation", "Site", "Quality"],
    date: "2026-04-10",
    readMinutes: 6,
    cover: "/frames/frame_30_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Project team" },
    keywords: [
      "uPVC installation mistakes",
      "window installation Pakistan",
      "uPVC site quality",
      "window leaks fix",
      "install checklist",
    ],
    faqs: [
      {
        q: "Why is my new uPVC window leaking?",
        a: "Almost always a perimeter sealing issue, not a product fault. The gap between the frame and the wall must be filled with foam and silicone. If it is only silicone on top of bare wall, water finds its way around it within months.",
      },
      {
        q: "Why does my window not close flush?",
        a: "The frame was not installed square. uPVC frames must be packed and shimmed level. If diagonals are off by more than 2 mm, the sash will not close cleanly.",
      },
      {
        q: "How long should I wait before passing the site?",
        a: "Open and close every window. Spray the outside with a hose. Check inside for damp. Check that all hardware is from the agreed brand. Sign only after all four pass.",
      },
    ],
    toc: [
      { id: "square", label: "1. Frame not installed square" },
      { id: "perimeter", label: "2. Bad perimeter sealing" },
      { id: "shim", label: "3. Missing shims and packers" },
      { id: "hardware", label: "4. Substituted hardware" },
      { id: "glass", label: "5. Wrong glass spec" },
      { id: "tape", label: "6. Protective tape left in sun" },
      { id: "snag", label: "7. No snag list at handover" },
    ],
    body: [
      {
        id: "square",
        heading: "1. Frame not installed square",
        paragraphs: [
          "uPVC frames are precise. They expect a square opening. If the wall is out of plumb, the team must shim the frame so the diagonals match within two millimetres.",
          "Skipping this step is the most common reason a sash drags or fails to lock cleanly.",
        ],
      },
      {
        id: "perimeter",
        heading: "2. Bad perimeter sealing",
        paragraphs: [
          "The gap between the frame and the wall is the leak path. It must be packed with closed cell expanding foam, trimmed flush, and finished with silicone on both inside and outside.",
          "If you only see silicone on the outside, water will find its way in through capillary action within the first monsoon.",
        ],
      },
      {
        id: "shim",
        heading: "3. Missing shims and packers",
        paragraphs: [
          "Shims hold the frame in place during foaming. Without them, the foam expansion can deform the frame and lock that deformation in place.",
          "Walk the site during install and confirm every frame has shims at the corners and mid points.",
        ],
      },
      {
        id: "hardware",
        heading: "4. Substituted hardware",
        paragraphs: [
          "The contract says one hardware brand and what arrives is something else. This happens more often than people think.",
          "Always check the brand stamp on handles, hinges, and rollers before signing the bill.",
        ],
      },
      {
        id: "glass",
        heading: "5. Wrong glass spec",
        paragraphs: [
          "Sometimes the order says 5 + 12 + 5 DGU and what shows up is 4 + 9 + 4. The sash still closes. The thermal performance is gone.",
          "Spec stickers should be visible on the glass at delivery. Photograph them before installation.",
        ],
      },
      {
        id: "tape",
        heading: "6. Protective tape left in sun",
        paragraphs: [
          "uPVC arrives with a protective film on the laminate. If it is left on the profile in direct sun for weeks, the adhesive bakes onto the surface.",
          "Remove the film as soon as the install is complete.",
        ],
      },
      {
        id: "snag",
        heading: "7. No snag list at handover",
        paragraphs: [
          "Money paid before snagging is money you will fight to recover. Walk the site, open and close everything, hose the outside, check the inside for damp. Sign only when each item passes.",
        ],
      },
    ],
  },
  {
    slug: "best-window-colors-2026-pakistani-homes",
    title: "Window Colours That Will Define Pakistani Homes in 2026",
    excerpt:
      "Pure white is no longer the default. Anthracite grey, jet black, and warm laminated wood are taking over modern Pakistani facades. Here is what is actually working in 2026.",
    description:
      "A look at the window colours and finishes that are defining new Pakistani homes in 2026. Anthracite grey, jet black, golden oak, premium white, and how to choose without dating the building.",
    category: "Design",
    tags: ["Design", "Colours", "Trends", "2026"],
    date: "2026-04-21",
    readMinutes: 5,
    cover: "/frames/frame_10_delay-0.041s.png",
    author: { name: "Everlast Plastic Editorial", role: "Design team" },
    keywords: [
      "window colours 2026",
      "best uPVC colour Pakistan",
      "anthracite windows",
      "black windows Pakistan",
      "modern facade trends",
    ],
    faqs: [
      {
        q: "Are dark coloured windows a fad?",
        a: "No. Anthracite grey and jet black have been the dominant choice on European facades for over ten years and the look has aged well. We expect the same in Pakistan.",
      },
      {
        q: "Will dark windows absorb too much heat?",
        a: "The frame surface heats up more than a white profile, but a quality multi chamber uPVC body still keeps that heat outside the room. Pair with double glazing and the inside stays cool.",
      },
      {
        q: "What works for a heritage style home?",
        a: "Laminated wood textures such as golden oak and nussbaum. They give the warmth of timber with the performance of uPVC.",
      },
    ],
    toc: [
      { id: "anthracite", label: "Anthracite grey is the new white" },
      { id: "black", label: "Jet black for confident facades" },
      { id: "wood", label: "Laminated wood for warmth" },
      { id: "white", label: "When white still wins" },
      { id: "match", label: "Matching to your facade" },
    ],
    body: [
      {
        id: "anthracite",
        heading: "Anthracite grey is the new white",
        paragraphs: [
          "Anthracite is doing for the 2020s what white did for the 2000s. It works on minimalist concrete, on textured plaster, and on stone. It frames the glass instead of disappearing into the wall.",
          "Inside the room, anthracite reads as quiet luxury. It pairs well with both warm timber furniture and cool marble surfaces.",
        ],
      },
      {
        id: "black",
        heading: "Jet black for confident facades",
        paragraphs: [
          "Black windows used to be reserved for industrial loft conversions. In 2026 they have moved into family villas and boutique offices because they create a graphic frame around the view.",
          "If you have garden views, black windows work like a photo border that pulls your eye outside.",
        ],
      },
      {
        id: "wood",
        heading: "Laminated wood for warmth",
        paragraphs: [
          "Laminated textures such as golden oak, nussbaum, and rustic walnut give a real timber feel without the swelling and termite issues of solid wood.",
          "These finishes pair beautifully with traditional homes, with cottages in the north, and with hotels chasing a heritage feel.",
        ],
      },
      {
        id: "white",
        heading: "When white still wins",
        paragraphs: [
          "Pure white still works for clean modern villas and for bathrooms and kitchens where you want the window to step out of the way.",
          "Choose premium white that uses UV stabilised compound. Cheaper imports turn cream within a few summers.",
        ],
      },
      {
        id: "match",
        heading: "Matching to your facade",
        paragraphs: [
          "Pick the colour you would want to see for the next 15 years, not the colour that is in this season. The window is part of the architecture, not the furniture.",
          "If in doubt, anthracite grey is the most flexible single choice on the Pakistani market right now.",
        ],
      },
    ],
  },
];

export const POST_CATEGORIES = Array.from(
  new Set(POSTS.map((p) => p.category)),
);
