export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
  icon?: string;
  description?: string;
  category: "course" | "webinar";
}

export const certifications: Certification[] = [
  {
    name: "Next Js: Fullstack POS System",
    issuer: "Dunia Coding (Theodore Rivaldo D.M)",
    date: "June 2025",
    url: "https://duniacoding.id/certificate/E-MC15-0032",
    icon: "Code",
    description:
      "Building POS system using next js and integrated with supabase using prisma ORM.",
    category: "course",
  },
  {
    name: "Ai Practice: For Productivity and Efficiency",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    url: "https://www.dicoding.com/certificates/53XED8D7KPRN",
    icon: "Atom",
    description:
      "This program is part of the AI Opportunity Fund: Asia Pacific, in collaboration with AVPN and supported by Google.",
    category: "course",
  },
  {
    name: "Learning Javascript For Backend Development",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    url: "https://www.dicoding.com/certificates/MRZMN125KPYQ",
    icon: "Cpu",
    description:
      "Step up to become a Back-End Developer with international competency standards owned by AWS.",
    category: "course",
  },
  {
    name: "Learning Cloud And AWS Gen Ai",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    url: "https://www.dicoding.com/certificates/ERZREO4DMXYV",
    icon: "Cloud",
    description:
      "Learning cloud computing by referring to AWS's international competency standards.",
    category: "course",
  },
  {
    name: "Learning Cloud Basics",
    issuer: "Dicoding Indonesia",
    date: "April 2025",
    url: "https://www.dicoding.com/certificates/NVP75EG8WXR0",
    icon: "Cloud",
    description:
      "Studying the world of cloud computing based on Google's international competency standards.",
    category: "course",
  },
  {
    name: "Laravel Filament: HR Management System",
    issuer: "Dunia Coding (Arsadi)",
    date: "April 2025",
    url: "https://duniacoding.id/certificate/E-MC13-0004",
    icon: "Code",
    description:
      "Building a HR management system website with laravel and using MySQL as a database.",
    category: "course",
  },
  {
    name: "React Js: Soccer Score Website",
    issuer: "Dunia Coding (Arsadi)",
    date: "April 2025",
    url: "https://duniacoding.id/certificate/E-WO67-0001",
    icon: "Volleyball",
    description:
      "Building a soccer score website using React JS and Tailwind CSS.",
    category: "course",
  },
  {
    name: "Laravel: Donation App Website",
    issuer: "Dunia Coding (Yunus Febriansyah)",
    date: "March 2025",
    url: "https://duniacoding.id/certificate/E-WO66-0005",
    icon: "Code",
    description:
      "Building a donation website using laravel and integrated with midtrans payment.",
    category: "course",
  },
  {
    name: "DevCoach 197: Back-End Python | REST API",
    issuer: "Dicoding Indonesia (DevCoach 197)",
    date: "June 2025",
    url: "https://www.dicoding.com/events/9287",
    icon: "",
    description: "learning to create a web service using Django from scratch.",
    category: "webinar",
  },
  {
    name: "Failing Forward: Turning Setbacks into Growth in Tech",
    issuer: "Indosat Ooredoo Hutchison Digital Camp",
    date: "May 2025",
    url: "https://www.dicoding.com/events/9237",
    icon: "",
    description:
      "An exclusive webinar specifically for IDCamp Alumni that will discuss career preparation and soft skill development in the technology industry.",
    category: "webinar",
  },
  {
    name: "DevCoach 194: Data Engineering | ETL: Data Engineer",
    issuer: "Dicoding Indonesia (DevCoach 194)",
    date: "May 2025",
    url: "https://www.dicoding.com/events/9260",
    icon: "",
    description:
      "building a solid data engineering foundation! Starting from understanding the basic concepts of data processing to building ETL pipelines using Python.",
    category: "webinar",
  },
  {
    name: "DevCoach 193: React | Hooks and State Management",
    issuer: "Dicoding Indonesia (DevCoach 193)",
    date: "May 2025",
    url: "https://www.dicoding.com/events/9252",
    icon: "",
    description:
      "React Hooks come as a new approach that simplifies the way we manage state and side effects in React.",
    category: "webinar",
  },
  {
    name: "IDCamp x Dicoding - Web3 Engineering for Developers",
    issuer: "Indosat Ooredoo Hutchison Digital Camp",
    date: "April 2025",
    url: "https://www.dicoding.com/events/9222",
    icon: "",
    description:
      "begin to change the way applications and digital services are built, now Web3 comes with a system that is more transparent, secure, and empowers users.",
    category: "webinar",
  },
  {
    name: "DevCoach 189: React | Lifecycle Component",
    issuer: "Dicoding Indonesia (DevCoach 189)",
    date: "April 2025",
    url: "https://www.dicoding.com/events/9217",
    icon: "",
    description:
      "discussing what the lifecycle is in React components, starting from when the component is created, rendered, and then removed.",
    category: "webinar",
  },
  {
    name: "DevCoach 188: Soft Skill | Build a Positive Mindset for Progressive Skills",
    issuer: "Dicoding Indonesia (DevCoach 188)",
    date: "March 2025",
    url: "https://www.dicoding.com/events/9212",
    icon: "",
    description:
      "The strength of the mindset depends on us: to give up or to fully optimize it.",
    category: "webinar",
  },
];
