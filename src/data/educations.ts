export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Dian Nuswantoro University",
    period: "2022 - Present",
    description:
      "Specialized in Web Technologies and Information Systems, focusing on practical application and innovative solutions.",
    achievements: [
      "Consistently maintained a high GPA of 3.6+ every semester (currently 3.76/4.00)",
      "Final year project: Developed a secure and scalable polyclinic system using Laravel and Filament",
      "Actively engaged in web development projects and collaborative learning environments",
    ],
  },
  {
    degree: "Science High School Diploma",
    institution: "SMA Mardisiswa Semarang",
    period: "2019 - 2022",
    description:
      "Completed a comprehensive science program, building a strong foundation in analytical thinking and problem-solving.",
    achievements: [
      "Actively participated in class discussions and group projects to enhance collaborative learning",
      "Consistently maintained strong performance in science and mathematics subjects",
      "Served as a reliable team member in school events and extracurricular activities",
    ],
  },
];
