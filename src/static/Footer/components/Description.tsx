import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { getVar } from "@/helper/var";

const socialLinks: Array<{
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}> = [
  {
    name: "GitHub",
    url: "https://github.com/AriqF1",
    icon: <Github size={22} />,
    ariaLabel: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ariqfarhan-dev",
    icon: <Linkedin size={22} />,
    ariaLabel: "LinkedIn Profile",
  },
  {
    name: "Email",
    url: "mailto:farhanariq.dev@gmail.com?subject=Halo%20Ariq&body=Pesan%20ini%20dari%20website%20Anda",
    icon: <Mail size={22} />,
    ariaLabel: "Send Email",
  },
];

export default function Description() {
  return (
    <>
      <Link
        href="/"
        className="text-3xl md:text-4xl font-extrabold mb-5 inline-block animate-fadeInDown"
      >
        <span
          className="text-transparent bg-clip-text"
          style={{ color: getVar("button-primary-bg") }}
        >
          Farhan Ariq
        </span>
      </Link>
      <p
        className="leading-relaxed mb-6 text-base md:text-lg max-w-lg animate-fadeIn delay-200"
        style={{ color: getVar("text-secondary") }}
      >
        I&apos;m a passionate developer focused on crafting intuitive,
        high-performance digital experiences. I constantly learn and adapt to
        build innovative solutions that truly make an impact.
      </p>
      <div className="flex space-x-5 mt-8 animate-fadeIn delay-400">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="transition-colors duration-300 transform hover:scale-125 hover:drop-shadow-lg"
            style={{ color: getVar("text-secondary") }}
            aria-label={social.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
}
