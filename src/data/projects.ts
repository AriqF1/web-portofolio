export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  fullDescription?: string;
  client?: string;
  duration?: string;
  role?: string;
  features?: string[];
  technologies?: string[];
  images?: string[];
  challenges?: string;
  solutions?: string;
}
export const projects: Project[] = [
  {
    id: "student-website",
    title: "Student Dashboard - University Management System",
    description:
      "A fully responsive student platform built with React.js and integrated with json-server.",
    image: "/images/dashboard_page.png",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/AriqF1/web-mhs",
    fullDescription:
      "This student dashboard application provides a comprehensive solution for managing academic activities, tracking performance, and accessing course materials. Built with Next.js and React, it offers a seamless experience across all devices.",
    client: "University Assignment",
    duration: "3 months",
    role: "Fullstack Developer",
    features: [
      "tracking and visualization using chart.js",
      "Lecturers management",
      "Course material organization and search",
      "Calendar integration with deadline reminders",
      "Direct messaging with instructors",
      "Mobile-responsive design for on-the-go access",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Chart.js"],
    images: [
      "/images/dashboard_page.png",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "One of the main challenges was integrating with the university's existing student information system while maintaining data security and privacy. We also needed to ensure the application was accessible and performed well on low-bandwidth connections for students in remote areas.",
    solutions:
      "We implemented a secure API layer that interfaced with the university's systems, using OAuth 2.0 for authentication. For performance, we utilized static generation where possible and dynamic imports to reduce initial load times. We also developed an offline mode using service workers that allowed students to access cached materials without an internet connection.",
  },
  {
    id: "polyclinic-webapp",
    title: "Sismenkes - Healthcare Management System",
    description:
      "A drag-and-drop task management application with user authentication and real-time updates.",
    image: "/api/placeholder/400/320",
    tags: ["React", "Firebase", "TypeScript", "CSS"],
    githubUrl: "https://github.com/yourusername/project2",
    fullDescription:
      "The Polyclinic WebApp is a comprehensive healthcare management system designed to streamline patient registration, appointment scheduling, and medical record management. It enables doctors to efficiently manage their schedules and access patient information securely.",
    client: "Polyclinic Health Services",
    duration: "4 months",
    role: "Full Stack Developer",
    features: [
      "Patient registration and profile management",
      "Appointment scheduling with automatic reminders",
      "Medical records management with secure access",
      "Doctor availability and schedule management",
      "Prescription and medication tracking",
      "Integrated billing and payment system",
    ],
    technologies: [
      "React",
      "Firebase",
      "TypeScript",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "JWT Authentication",
      "Socket.io",
    ],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge was creating a system that balanced comprehensive functionality with ease of use for both medical staff and patients. We also needed to ensure strict compliance with healthcare data regulations while providing seamless access to authorized personnel.",
    solutions:
      "We implemented a role-based authentication system with granular permissions and audit logging. The UI was designed with extensive user testing involving actual healthcare providers to ensure intuitive workflows. Data is encrypted both in transit and at rest, with automated backups and disaster recovery procedures.",
  },
  {
    id: "soccer-score-website",
    title: "Premier HUB - Soccer Score Website",
    description:
      "A modern portfolio website showcasing creative work with smooth animations and transitions.",
    image: "/api/placeholder/400/320",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project3",
    fullDescription:
      "This portfolio website was designed to showcase creative work with a focus on visual appeal and smooth interactions. Built with Next.js and enhanced with Framer Motion animations, it delivers an engaging user experience while maintaining excellent performance metrics.",
    client: "Creative Designer",
    duration: "1 month",
    role: "Frontend Developer",
    features: [
      "Interactive project gallery with filtering capabilities",
      "Smooth page transitions and scroll animations",
      "Responsive design that works flawlessly on all devices",
      "Dark/light mode toggle with saved preferences",
      "Contact form with form validation and submission handling",
      "Optimized image loading for fast page loads",
    ],
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "React",
      "SendGrid API",
      "Vercel Hosting",
      "Google Analytics",
      "Figma",
    ],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge was creating a website that stood out visually while maintaining excellent performance. We needed to implement complex animations and transitions without compromising load times or causing visual jank on mobile devices.",
    solutions:
      "We utilized Framer Motion for performant animations with GPU acceleration. Images were optimized using Next.js built-in image optimization, and we implemented lazy loading for off-screen content. The design was implemented using Tailwind CSS for consistent styling and reduced CSS bundle size.",
  },
];
