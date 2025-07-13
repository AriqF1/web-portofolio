import {
  Code,
  Atom,
  Cpu,
  Cloud,
  Laptop,
  BookText,
  Ribbon,
  Briefcase,
  Volleyball,
  Award as AwardIcon,
  MonitorPlay,
} from "lucide-react";

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Code":
      return <Code size={32} />;
    case "Atom":
      return <Atom size={32} />;
    case "Cpu":
      return <Cpu size={32} />;
    case "Cloud":
      return <Cloud size={32} />;
    case "Laptop":
      return <Laptop size={32} />;
    case "BookText":
      return <BookText size={32} />;
    case "Ribbon":
      return <Ribbon size={32} />;
    case "Briefcase":
      return <Briefcase size={32} />;
    case "Volleyball":
      return <Volleyball size={32} />;
    case "MonitorPlay":
      return <MonitorPlay size={32} />;
    default:
      return <AwardIcon size={32} />;
  }
};