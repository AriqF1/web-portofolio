"use client";
import { useState, useEffect } from "react";
import { certifications, Certification } from "@/data/certifications";
import {
  Award,
  GraduationCap,
  Calendar,
  ExternalLink,
  Code,
  Atom,
  Cpu,
  Cloud,
  Laptop,
  BookText,
  Ribbon,
  Briefcase,
  ChevronLeft, // Ikon untuk paginasi
  ChevronRight, // Ikon untuk paginasi
} from "lucide-react";

// Helper function untuk mendapatkan komponen ikon
const getIconComponent = (iconName: string) => {
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
    default:
      return <Award size={32} />;
  }
};

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(certifications.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certifications.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document
        .getElementById("certifications")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document
        .getElementById("certifications")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const section = document.getElementById("certifications");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-neutral-950 text-neutral-300 relative overflow-hidden"
    >
      {/* Background Gradients/Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-1/3 -right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2500"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-700 to-blue-800 text-neutral-400 rounded-full text-sm font-medium mb-4 border border-neutral-700 shadow-md">
            🏅 My Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Knowledge Backed By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-500">
              Credentials
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            A selection of my professional certifications and completed courses,
            showcasing my continuous learning and expertise.
          </p>
          <div className="mt-6 h-1.5 w-32 bg-gradient-to-r from-purple-300 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {currentItems.map((cert: Certification, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl p-7 shadow-2xl border border-neutral-700 transform hover:translate-y-[-8px] transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-5">
                  <div className="p-3.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full text-white mr-4 shadow-lg flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {cert.icon ? (
                      getIconComponent(cert.icon)
                    ) : (
                      <Award size={32} />
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight">
                    {cert.name}
                  </h3>
                </div>

                {/* Detail Sertifikasi */}
                <div className="mb-4 flex-grow">
                  <p className="text-neutral-400 text-base mb-2 flex items-center">
                    <span className="mr-2 text-purple-400 flex-shrink-0">
                      <GraduationCap size={18} />
                    </span>{" "}
                    {cert.issuer}
                  </p>
                  <p className="text-neutral-500 text-base mb-4 flex items-center">
                    <span className="mr-2 text-blue-500 flex-shrink-0">
                      <Calendar size={18} />
                    </span>{" "}
                    {cert.date}
                  </p>

                  {cert.description && (
                    <p className="text-neutral-300 text-base leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Tombol View Credential */}
                {cert.url && (
                  <div className="mt-auto pt-4 border-t border-neutral-700">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-neutral-700 text-purple-300 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
                    >
                      View Credential{" "}
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-3 bg-neutral-800 rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 shadow-md ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                }`}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-3 bg-neutral-800 rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
