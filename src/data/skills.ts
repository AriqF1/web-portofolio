export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "tools";
}
export const skills: Skill[] = [
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Laravel", level: 90, category: "backend" },
  { name: "PHP", level: 90, category: "backend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "UI/UX Design", level: 80, category: "design" },
];
