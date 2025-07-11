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
      "Consistently maintained a high GPA (e.g., 3.8/4.0)", // Example achievement
      "Final year project: Developed a secure and scalable learning management system",
      "Active member and lead organizer for various tech workshops in the Computer Science Society",
    ],
  },
  {
    degree: "Science High School Diploma",
    institution: "SMA Mardisiswa Semarang",
    period: "2018",
    description:
      "Completed a comprehensive science program, building a strong foundation in analytical thinking and problem-solving.",
    achievements: [
      "Graduated with honors, demonstrating academic excellence",
      "Participated in science olympiads, securing regional recognition",
      "Led a student-led initiative for a school-wide recycling program",
    ],
  },
];
