export const services = [
  {
    icon: "family_restroom",
    title: "Family Reunification",
    description:
      "Bringing your loved ones to Poland under stable legal conditions.",
  },
  {
    icon: "work",
    title: "Work Residence",
    description:
      "Securing your right to work and live legally for your career goals.",
  },
  {
    icon: "stars",
    title: "EU Blue Card",
    description:
      "Specialized permits for high-skilled professionals across the EU.",
  },
  {
    icon: "business_center",
    title: "Business Immigration",
    description:
      "Helping entrepreneurs establish and grow their ventures in Poland.",
  },
  {
    icon: "school",
    title: "Student & PhD",
    description:
      "Legal support for researchers and students at all levels of education.",
  },
  {
    icon: "verified_user",
    title: "Permanent Residency",
    description:
      "Securing your long-term future with stable permanent status.",
  },
  {
    icon: "public",
    title: "Citizenship",
    description: "Navigating the path to becoming a full citizen of Poland.",
  },
  {
    icon: "gavel",
    title: "Deportation Defense",
    description:
      "Urgent legal protection and representation in deportation cases.",
  },
  {
    icon: "shield",
    title: "International Protection",
    description:
      "Assistance with asylum and international refugee status claims.",
  },
  {
    icon: "more_horiz",
    title: "PESEL / Other",
    description: "Essential administrative tasks and various legal permits.",
  },
] as const;

export const howItWorksSteps = [
  {
    icon: "event_available",
    title: "1. Book",
    description: "Schedule a session to discuss your case details and options.",
  },
  {
    icon: "fact_check",
    title: "2. Review",
    description:
      "We analyze your documents and prepare a robust legal strategy.",
  },
  {
    icon: "account_balance",
    title: "3. Represent",
    description: "We handle all communications with the authorities for you.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Consultation",
    price: "489 PLN",
    features: [
      "60-min in-depth session",
      "Case analysis & roadmap",
      "Document checklist",
    ],
    buttonText: "Book Now",
    buttonVariant: "primary" as const,
    popular: false,
  },
  {
    name: "Temporary Residence",
    price: "from 2800 PLN",
    features: [
      "Full case preparation",
      "Office of Voivode visits",
      "Unlimited consultations",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    popular: true,
  },
  {
    name: "Citizenship",
    price: "6500-7000 PLN",
    features: [
      "Grant of citizenship",
      "Confirmation of status",
      "Complete legal file",
    ],
    buttonText: "Consult Case",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Other Services",
    price: "Custom Quote",
    features: [
      "PESEL assignments",
      "Business registrations",
      "Appeals & defenses",
    ],
    buttonText: "Inquire Now",
    buttonVariant: "outline" as const,
    popular: false,
  },
] as const;

export const whyChooseUs = [
  {
    icon: "translate",
    title: "Multilingual",
    description:
      "We speak your language to ensure clarity and comfort at every step.",
  },
  {
    icon: "location_on",
    title: "Warsaw-based",
    description:
      "Our office is located in the heart of Poland's legal and administrative hub.",
  },
  {
    icon: "support_agent",
    title: "Unlimited Support",
    description:
      "Ongoing consultations for active clients without extra hidden costs.",
  },
  {
    icon: "payments",
    title: "Instalments",
    description:
      "Flexible payment plans to help manage your financial commitments.",
  },
] as const;

export const blogArticles = [
  {
    date: "May 2026",
    title: "New Regulations for Work Permit Extensions",
    excerpt:
      "A detailed analysis of the recent changes affecting non-EU workers and their path to residency in Poland.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeHT-nRb23ACDS2j0UD0_UZDGRFeLhQEP7z8kZkfMhgTQq45wvCdDauxtaSWqxhTNGNxjnBvuh7tCqMvLKXALT6oQia_t4LhNgD5FJYsh46gcwSgZ0AvPXp4c-80tt3hHjWYaSe1SKhEvsWA6ZeW10DM4THxmY9ObasxxncxN4LdaUuXRcuJU_OEgkJcO_f5gr8BlFk6ohvr9cJBlgpnCVvPJtyKwvsW9_0Dbg-D64m_SGuuCk_i9UjauriRwv5gAU6sO2VqHsuF8",
    alt: "A clean, minimalist desk with a legal document, a high-end pen, and a laptop. The lighting is soft and bright, using the light mode aesthetic. A cool blue color palette is integrated into the workspace accessories, creating a professional and focused environment suitable for a blog post about legal procedures in Poland.",
  },
  {
    date: "April 2026",
    title: "Navigating the EU Blue Card Path",
    excerpt:
      "How highly skilled professionals can leverage the EU Blue Card for faster permanent residency and family mobility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAls2x3h-wsi8F1p4Ul3_DofzOx3InjPSKjxmDuYO5qJ-9xnCXM0UAjzIZrRQJ7gujZU7shFrAV_QfHHn1ZMbNRXKAnQlcxMCnnYc4hpTJh63mzcGaxOYNWyua5KbWB7lyXtsoxgsi0x25_FmhBFPLnqxDsTd2oUnLk1l6KYK0vXRb8f0xz63w4KCfFyVqJx6q9UfHLPs4YSLmby9z4KGud4p6fTraGdbd1-qRlF0g37VlkXIULoDYvx8wyZTDIvGI7AzaEWyRWc3c",
    alt: "An architectural detail of a modern Polish office building under a clear blue sky. The geometric patterns of the glass and steel reflect a sense of progress and stability. The overall image has a subtle blue tint and high-key lighting, maintaining the clean, minimalist brand aesthetic of the immigration law practice.",
  },
  {
    date: "June 2024",
    title: "Your First PESEL: A Step-by-Step Guide",
    excerpt:
      "Everything you need to know about obtaining your first national identification number as a foreigner in Poland.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIMXPPTOYfGe6Trr_eHgib_VmOfeCBeTccgDCSYp48NNKZdc2JoQcEKspY8PDx4f-GKCDeqdJiBhplTiCJTuk_XQO52cXOYiotPCkP3Ums1AbPTuGpBRlGNZ0BOrUy7K3PY1SVq36HXMfsV7wRljTFuTxvL7J6L7oWBrvpj3kHHpdhruWEB7qCR5yC2YB-hNrtcx_42X69rWUTiXAEA63utt9YBRi4gnQAaV-vVYQ7WXCenY6LGr24W_pIAYnamd4M-JpU5KVFMuU",
    alt: "A handshake between two professionals in a light-filled boardroom, symbolizing a successful partnership. The background is clean and airy, with soft blue and white tones that match the law firm's corporate identity. The focus is on the professionalism and trust established through legal representation.",
  },
] as const;

export const teamMembers = [
  {
    name: "Anna Trylińska",
    role: "Founder & Lead Attorney",
    description:
      "Expert in complex residence and citizenship cases with a focus on human rights.",
    image: "/images/anna-trylinska-team.png",
    alt: "Portrait of Anna Trylińska, Founder and Lead Attorney",
  },
  {
    name: "Joanna Trylińska",
    role: "Senior Legal Consultant",
    description:
      "Over 30 years of legal experience in Polish administrative and civil law.",
    image: "/images/joanna-trylinska-team.png",
    alt: "Portrait of Joanna Trylińska, Senior Legal Consultant",
  },
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export const credentials = [
  { icon: "school", label: "University of Wrocław" },
  { icon: "history_edu", label: "Louvain Academy" },
  { icon: "workspace_premium", label: "US State Dept Scholar" },
] as const;

export const contactInfo = [
  {
    icon: "location_on",
    title: "Office Address",
    value: "Fryderyka Chopina 7/68, 00-559 Warsaw, Poland",
  },
  {
    icon: "call",
    title: "Phone Number",
    value: "+48 798 107 769",
  },
  {
    icon: "mail",
    title: "Email Support",
    value: "office@t-immigration.com",
  },
  {
    icon: "schedule",
    title: "Working Hours",
    value: "Mon–Thu 9:00–17:00, Fri 9:00–15:00, Sat 10:00–15:00",
  },
] as const;
