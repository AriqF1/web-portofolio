export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
  icon?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    name: "Complete Web Development Bootcamp",
    issuer: "Udemy (Angela Yu)",
    date: "Januari 2023",
    url: "https://www.udemy.com/certificate/UC-...",
    icon: "Code",
    description:
      "Mastered full-stack development with a focus on web fundamentals, Node.js, Express, React, and MongoDB.",
  },
  {
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    issuer: "Udemy (Maximilian Schwarzmüller)",
    date: "Maret 2023",
    url: "https://www.udemy.com/certificate/UC-...",
    icon: "Atom",
    description:
      "Deep dive into React, state management, routing, and optimizing performance for complex applications.",
  },
  {
    name: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy (Jose Portilla)",
    date: "Mei 2023",
    url: "https://www.udemy.com/certificate/UC-...",
    icon: "Cpu",
    description:
      "Fundamental concepts of Python for data analysis, machine learning algorithms, and data visualization.",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Agustus 2024",
    url: "https://www.credly.com/badges/...",
    icon: "Cloud",
    description:
      "Demonstrated foundational knowledge of AWS cloud concepts, services, security, and economics.",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Coursera (Google)",
    date: "November 2022",
    url: "https://www.coursera.org/account/accomplishments/certificate/...",
    icon: "Laptop",
    description:
      "Covered troubleshooting, customer service, networking, operating systems, and system administration.",
  },
];
