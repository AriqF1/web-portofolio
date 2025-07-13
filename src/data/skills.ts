export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
}

export const skills: Skill[] = [
  { name: "React.js", category: "frontend"},
  { name: "Next.js", category: "frontend"},
  { name: "TypeScript", category: "frontend"},
  { name: "Node.js", category: "backend",},
  { name: "Tailwind CSS", category: "frontend"},
  { name: "Bootstrap", category: "frontend"},
  { name: "JavaScript", category: "frontend"},
  { name: "Laravel", category: "backend"},
  { name: "Python", category: "backend"},
  { name: "Flask", category: "backend"},
  { name: "Fast API", category: "backend"},
  { name: "Django", category: "backend"},
  { name: "SQL", category: "backend"},
  { name: "PHP", category: "backend"},
  { name: "HTML5", category: "frontend"},
  { name: "CSS3", category: "frontend"},
  { name: "Git", category: "tools"},
  { name: "Github", category: "tools"},
  { name: "Postman", category: "tools"},
  { name: "VsCode", category: "tools"},
  
];
