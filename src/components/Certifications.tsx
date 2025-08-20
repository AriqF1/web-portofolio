"use client";
import { useState, useEffect } from "react";
import { certifications, Certification } from "@/data/certifications";
import {
  GraduationCap,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Award as AwardIcon,
  MonitorPlay,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { getIconComponent } from "@/helper/iconComponent";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"course" | "webinar">(
    "course"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  useTheme();

  const filteredItems = certifications.filter(
    (cert) => cert.category === activeCategory
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("certifications")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const totalCertifications = (typeCertification: string) => {
    return certifications.filter((cert) => cert.category === typeCertification)
      .length;
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

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
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
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border shadow-md"
            style={{
              background: getVar("button-primary-bg"),
              borderColor: getVar("border-divider"),
              color: "white",
            }}
          >
            🏅 My Certifications
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: getVar("text-primary") }}
          >
            Knowledge Backed By{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ color: getVar("button-primary-bg") }}
            >
              Credentials
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: getVar("text-secondary") }}
          >
            A selection of my professional certifications and completed courses,
            showcasing my continuous learning and expertise.
          </p>
          <div
            className="mt-6 h-1.5 w-32 mx-auto rounded-full"
            style={{ background: getVar("button-primary-bg") }}
          ></div>
        </div>

        {/* Tab Navigation for Categories */}
        <div className="mb-8 items-center justify-center flex space-x-4">
          <div
            className="flex p-1 rounded-xl mb-8 shadow-xl border max-w-full lg:max-w-xl mx-auto lg:mx-0"
            style={{
              backgroundColor: getVar("card-border"),
              borderColor: getVar("border-divider"),
            }}
          >
            <button
              className={`py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center flex-1 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                activeCategory === "course" ? "shadow-lg" : ""
              }`}
              style={{
                background:
                  activeCategory === "course"
                    ? getVar("button-primary-bg")
                    : "transparent",
                color:
                  activeCategory === "course"
                    ? "white"
                    : getVar("text-secondary"),
              }}
              onClick={() => setActiveCategory("course")}
            >
              <AwardIcon size={18} className="mr-2" />
              <span className="hidden lg:inline">
                Course({totalCertifications("course")})
              </span>
            </button>
            <button
              className={`py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center flex-1 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                activeCategory === "webinar" ? "shadow-lg" : ""
              }`}
              style={{
                background:
                  activeCategory === "webinar"
                    ? getVar("button-primary-bg")
                    : "transparent",
                color:
                  activeCategory === "webinar"
                    ? "white"
                    : getVar("text-secondary"),
              }}
              onClick={() => setActiveCategory("webinar")}
            >
              <MonitorPlay size={18} className="mr-2" />{" "}
              <span className="hidden lg:inline">
                Webinar({totalCertifications("webinar")})
              </span>
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {currentItems.length > 0 ? (
            currentItems.map((cert: Certification, index) => (
              <div
                key={index}
                className="rounded-2xl p-7 shadow-2xl border transform hover:translate-y-[-8px] transition-all duration-300 group relative overflow-hidden flex flex-col"
                style={{
                  backgroundColor: getVar("card-bg"),
                  borderColor: getVar("border-divider"),
                }}
              >
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"></div>

                {/* Hover overlay for the card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl z-0"
                  style={{ background: getVar("button-primary-bg") }}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-5">
                    <div
                      className="p-3.5 rounded-full text-white mr-4 shadow-lg flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ background: getVar("button-primary-bg") }}
                    >
                      {cert.icon ? (
                        getIconComponent(cert.icon)
                      ) : (
                        <AwardIcon size={32} />
                      )}
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-bold leading-tight"
                      style={{ color: getVar("text-primary") }}
                    >
                      {cert.name}
                    </h3>
                  </div>

                  {/* Detail Sertifikasi */}
                  <div className="mb-4 flex-grow">
                    <p
                      className="text-base mb-2 flex items-center"
                      style={{ color: getVar("text-secondary") }}
                    >
                      <span
                        className="mr-2 flex-shrink-0"
                        style={{ color: getVar("button-secondary-text") }}
                      >
                        <GraduationCap size={18} />
                      </span>{" "}
                      {cert.issuer}
                    </p>
                    <p
                      className="text-base mb-4 flex items-center"
                      style={{ color: getVar("text-secondary") }}
                    >
                      <span
                        className="mr-2 flex-shrink-0"
                        style={{ color: getVar("button-secondary-text-alt") }}
                      >
                        <Calendar size={18} />
                      </span>{" "}
                      {cert.date}
                    </p>

                    {cert.description && (
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: getVar("text-secondary") }}
                      >
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* View Credential */}
                  {cert.url && (
                    <div
                      className="mt-auto pt-4"
                      style={{
                        borderTop: `1px solid ${getVar("border-divider")}`,
                      }}
                    >
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={
                          {
                            backgroundColor: getVar("button-secondary-bg"),
                            color: getVar("button-secondary-text"),
                            "--tw-ring-color": getVar(
                              "button-secondary-text-alt"
                            ),
                            "--tw-ring-offset-color": getVar("card-bg"),
                          } as React.CSSProperties
                        }
                      >
                        View Credential{" "}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div
              className="md:col-span-3 text-center py-10"
              style={{ color: getVar("text-secondary") }}
            >
              No items found for this category.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="cursor-pointer p-3 rounded-full shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: getVar("button-secondary-bg"),
                color: getVar("foreground"),
              }}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className="cursor-pointer px-4 py-2 rounded-full font-semibold transition-colors duration-300 shadow-md"
                style={{
                  background:
                    currentPage === i + 1
                      ? getVar("button-primary-bg")
                      : getVar("button-secondary-bg"),
                  color: currentPage === i + 1 ? "white" : getVar("foreground"),
                }}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="cursor-pointer p-3 rounded-full shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: getVar("button-secondary-bg"),
                color: getVar("foreground"),
              }}
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
