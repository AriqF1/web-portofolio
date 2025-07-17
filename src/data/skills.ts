import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostman,
  SiVsco,
} from "react-icons/si";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  icon: React.ElementType;
  color: string;
}

export const skills: Skill[] = [
  { name: "React.js", category: "frontend", icon: SiReact, color: "#61DAFB" },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  { name: "Node.js", category: "backend", icon: SiNodedotjs, color: "#339933" },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  { name: "Laravel", category: "backend", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", category: "backend", icon: SiPython, color: "#3776AB" },
  { name: "Flask", category: "backend", icon: SiFlask, color: "#000000" },
  { name: "Fast API", category: "backend", icon: SiFastapi, color: "#009688" },
  { name: "Django", category: "backend", icon: SiDjango, color: "#092E20" },
  { name: "SQL", category: "backend", icon: SiMysql, color: "#4479A1" },
  { name: "PHP", category: "backend", icon: SiPhp, color: "#777BB4" },
  { name: "HTML5", category: "frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "frontend", icon: SiCss3, color: "#1572B6" },
  { name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
  { name: "Github", category: "tools", icon: SiGithub, color: "#181717" },
  { name: "Postman", category: "tools", icon: SiPostman, color: "#FF6C37" },
  { name: "VsCode", category: "tools", icon: SiVsco, color: "#007ACC" },
];
