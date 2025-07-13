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
      "This project website is an assignment from the course to create a university dashboard that can be used to manage students, courses, and lecturers. This website is built using React Js for the frontend and styled with Tailwindcss to achieve a modern and responsive appearance.",
    client: "University Project",
    duration: "Jan - May 2025",
    role: "Frontend Developer",
    features: [
      "Auto redirect login with role management",
      "Tracking and visualization using chart.js",
      "Lecturers management",
      "Courses management",
      "Json-server integration for mock API",
      "Mobile-responsive design for on-the-go access",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Chart.js"],
    images: [
      "/images/dashboard_page.png",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge I faced in this project was creating an interactive and responsive website design. I was also quite unfamiliar with json-server at first.",
    solutions:
      "My solution in this project is to research the dashboard appearance that my university has and then implement it into my own project. I also learned how to configure json-server from the documentation.  ",
  },
  {
    id: "polyclinic-webapp",
    title: "PoliCare - Healthcare Management System",
    description:
      "A drag-and-drop task management application with user authentication and real-time updates.",
    image: "/api/placeholder/400/320",
    tags: ["Laravel", "Filament", "MySQL", "CSS"],
    githubUrl: "https://github.com/AriqF1/web_poliklinik2",
    fullDescription:
      "The Polyclinic WebApp is a comprehensive healthcare management system designed to streamline patient registration, appointment scheduling, and medical record management. It enables doctors to efficiently manage their schedules and access patient information securely.",
    client: "University Project",
    duration: "May - Jun 2025",
    role: "Full Stack Developer",
    features: [
      "Patient registration and profile management",
      "Admin dashboard using filament for managing users, medicine and clinics",
      "Appointment scheduling",
      "Medical patient records management for doctors",
      "Doctor availability and schedule management",
      "Responsive design for desktop and mobile access",
    ],
    technologies: [
      "Laravel",
      "Filament",
      "MySQL",
      "CSS",
      "Tailwind CSS",
    ],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge I face is the flow of examinations from the doctor for the patient, and creating an interface that is not confusing for both the doctors and the patients using it.",
    solutions:
      "The solution is that I study the inspection flow from the existing polyclinic website and create a database structure before it is implemented. Also, I research a minimalist and easy-to-understand design from various websites.",
  },
  {
    id: "soccer-score-website",
    title: "Premier HUB - Soccer Score Website",
    description:
      "A website displays score data from premier club soccer matches. data is retrieved using public fetch API",
    image: "/api/placeholder/400/320",
    tags: ["React","Tailwind CSS"],
    githubUrl: "https://github.com/AriqF1/web-soccer",
    fullDescription:
      "This website is created using React Js and styling from tailwindcss. The data from this website is taken from the public API of the Premier League.",
    client: "Course Project",
    duration: " - ",
    role: "Frontend Developer",
    features: [
      "Interactive website with smooth animations",
      "Soccer scoer data fetched from public API",
      "Responsive design that works flawlessly on all devices",
      "Dark / light mode toggle with saved preferences",
      "Optimized image loading for fast page loads",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Netifly Hosting",
    ],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge of this course project was that at that time I was unable to fetch APIs using clean code principles, as well as access the APIs publicly.",
    solutions:
      "The solution is to follow the guidelines and documentation from my mentor, which allows me to fetch APIs with clean code principles and also gain knowledge to find public APIs suitable for future projects.",
  },
   {
    id: "learning-website",
    title: "Belajar Pintar - Learning Website",
    description:
      "A learning website for students and college students with an interactive and dynamic design.",
    image: "/api/placeholder/400/320",
    tags: ["React","Tailwind CSS"],
    githubUrl: "https://github.com/AriqF1/web-belajar",
    fullDescription:
      "Belajar Pintar is a website created from a university project for the mid-semester exam. This website was built using React Js for the frontend and Tailwindcss for styling. The data is stored statically in Json-server which will be fetched with AxiosInstance on each page. The data needed by users on this website is also well visualized using Chart Js on the dashboard.",
    client: "University Project",
    duration: "Jun - Jul 2025",
    role: "Frontend Developer",
    features: [
      "Login and registration system with role management",
      "Interactive website with smooth animations",
      "Course and material management",
      "Quizz and assessment system",
      "Data visualization using chart.js",
      "Responsive design that works flawlessly on all devices",
      "Achievements and progress tracking",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Json-server",
    ],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    challenges:
      "The main challenge when I created this website was to make interesting features in the context of learning for users. And to think of ways in which this website can be easily developed in the future.",
    solutions:
      "The solution is that I research learning websites like Dicoding to obtain the important features that must be present on a learning website. I also apply clean code with axios instance to facilitate development with fetch API from the backend in the future.",
  },
];
