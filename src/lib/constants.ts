export const COMPANY = {
  name: "Everlast Plastic",
  shortName: "Everlast",
  legalName: "Everlast Plastic Pvt. Ltd.",
  tagline: "Engineered for every climate. Crafted to last.",
  founded: 2010,
  phone: "+92 343 0032738",
  email: "info@everlastplastic.com",
  address: "Plot # W1/27 & 28, Near FFBL, Eastern Industrial Zone, Karachi",
  hours: "Mon – Sat · 8:00 – 18:00",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Advantages", href: "/advantages" },
  { label: "Products", href: "/products" },
  { label: "Colors", href: "/colors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
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

export const ADVANTAGES = [
  { title: "Strength & Durability", featured: true, desc: "Multi-chamber profiles reinforced with steel cores for structural strength." },
  { title: "Energy Saving", featured: true, desc: "Thermal-break design and tight sealing reduce heating and cooling loads." },
  { title: "Pollution Resistant" },
  { title: "Noise-proof" },
  { title: "Corrosion-proof" },
  { title: "Highly Secure" },
  { title: "Recyclable" },
  { title: "Weatherproof" },
  { title: "Lead Free" },
  { title: "Easy to Install" },
  { title: "Termite Resistant" },
  { title: "Fireproof" },
];

export const COLORS = [
  { name: "Nussbaum", hex: "#5b3c29", group: "Laminated Wooden Texture" },
  { name: "Jet Black", hex: "#18181b", group: "Laminated Wooden Texture" },
  { name: "Golden Oak", hex: "#9a6a38", group: "Laminated Wooden Texture" },
  { name: "Anthracite Grey", hex: "#4a4f58", group: "Laminated Wooden Texture" },
  { name: "Premium White", hex: "#f4f4f5", group: "Solid Colors" },
  { name: "Premium Black", hex: "#09090b", group: "Solid Colors" },
];

export const PRODUCTS = [
  { id: "sliding-door", title: "Sliding Door", category: "Doors", desc: "Smooth-glide profiles with weatherproof sealing.", image: "/frames/frame_10_delay-0.041s.png" },
  { id: "sliding-window", title: "Sliding Window", category: "Windows", desc: "Space-saving systems built for insulation and durability.", image: "/frames/frame_24_delay-0.041s.png" },
  { id: "openable-door", title: "Openable Door", category: "Doors", desc: "Strong hinges, locking options and acoustic comfort.", image: "/frames/frame_40_delay-0.041s.png" },
  { id: "openable-window", title: "Openable Window", category: "Windows", desc: "Ventilation-focused, tight closure, low maintenance.", image: "/frames/frame_57_delay-0.041s.png" },
  { id: "fixed", title: "Fixed Lite", category: "Fixed", desc: "Frameless aesthetics with maximum daylight admission.", image: "/frames/frame_73_delay-0.041s.png" },
  { id: "feature-door", title: "Europrofil Door", category: "Doors", desc: "Signature designer door with engineered hardware.", image: "/frames/frame_89_delay-0.041s.png" },
];

export const CERTIFICATIONS = [
  { title: "ISO Quality Management", desc: "Documented process control from raw input to finished profile." },
  { title: "Lead-Free Compliance", desc: "Profile chemistry aligned with international safety requirements." },
  { title: "Weather Performance Testing", desc: "Validated resistance against heat, moisture, UV and wind load." },
  { title: "Security & Durability", desc: "Hardware, frame strength and lifecycle testing for long service." },
];

export const TESTIMONIALS = [
  {
    client: "Aftab Builders",
    quote: "Excellent profile finish and timely delivery on our residential project.",
  },
  {
    client: "Urban Arch Studio",
    quote: "The texture options and quality consistency are genuinely impressive.",
  },
  {
    client: "Nexa Homes",
    quote: "Strong after-sales support and durable performance over time.",
  },
];
