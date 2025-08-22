import { getVar } from "@/helper/var";
import { Mail, Phone } from "lucide-react";

export default function Touch() {
  return (
    <>
      <h3
        className="text-xl font-bold mb-6 pb-3 inline-block animate-fadeInUp delay-100"
        style={{
          color: getVar("text-primary"),
          borderBottom: `1px solid ${getVar("border-divider")}`,
        }}
      >
        Get In Touch
      </h3>
      <p
        className="mb-3 flex items-center text-base md:text-lg animate-fadeIn delay-400"
        style={{ color: getVar("text-secondary") }}
      >
        <span
          className="mr-3"
          style={{ color: getVar("button-secondary-text") }}
        >
          📍
        </span>{" "}
        Semarang City, Central Java, Indonesia
      </p>
      <p
        className="mb-6 flex items-center text-base md:text-lg animate-fadeIn delay-500"
        style={{ color: getVar("text-secondary") }}
      >
        <span
          className="mr-3"
          style={{ color: getVar("button-secondary-text-alt") }}
        >
          ✉️
        </span>{" "}
        farhanariq.dev@gmail.com
      </p>
      {/* Call to action button */}
      <div className="flex mt-6 gap-x-4 animate-fadeIn delay-600">
        <a
          href="mailto:farhanariq.dev@gmail.com?subject=Halo%20Ariq&body=Saya%20tertarik%20dengan%20website%20portofolio%20Anda!"
          className="inline-flex items-center px-6 py-3 border-1 border-solid rounded hover:shadow-xl transition-all duration-300 font-semibold text-sm md:text-base transform hover:scale-105"
        >
          <Mail size={26} className="mr-2" />
          Mail
        </a>
        <a
          href="https://wa.me/6285156181393?text=Halo%20Ariq%2C%20saya%20tertarik%20dengan%20portofolio%20Anda"
          className="inline-flex items-center px-6 py-3 border-1 border-solid rounded hover:shadow-xl transition-all duration-300 font-semibold text-sm md:text-base transform hover:scale-105"
        >
          <Phone size={26} className="mr-2" />
          Chat
        </a>
      </div>
    </>
  );
}
