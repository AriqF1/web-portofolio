import Link from "next/link";
import { Link2 } from "lucide-react";

const getVar = (varName: string) => `var(--${varName})`;
export default function QuickLinks() {
  return (
    <>
      {" "}
      <h3
        className="text-xl font-bold mb-6 pb-3 inline-block animate-fadeInUp"
        style={{
          color: getVar("text-primary"),
          borderBottom: `1px solid ${getVar("border-divider")}`,
        }}
      >
        Quick Links
      </h3>
      <ul className="space-y-4 animate-fadeIn delay-300">
        <li>
          <Link
            href="#about"
            className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
            style={{ color: getVar("text-secondary") }}
          >
            <Link2
              size={16}
              className="mr-2 transition-colors"
              style={{ color: getVar("text-secondary") }}
            />{" "}
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
            style={{ color: getVar("text-secondary") }}
          >
            <Link2
              size={16}
              className="mr-2 transition-colors"
              style={{ color: getVar("text-secondary") }}
            />{" "}
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
            style={{ color: getVar("text-secondary") }}
          >
            <Link2
              size={16}
              className="mr-2 transition-colors"
              style={{ color: getVar("text-secondary") }}
            />{" "}
            Contact
          </Link>
        </li>
        <li>
          <a
            href="/resume.pdf"
            className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
            style={{ color: getVar("text-secondary") }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2
              size={16}
              className="mr-2 transition-colors"
              style={{ color: getVar("text-secondary") }}
            />{" "}
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
