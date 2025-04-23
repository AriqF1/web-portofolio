import Image from "public/images/about.jpg";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Boostrap",
    "JavaScript",
    "Laravel",
    "PHP",
    "HTML5",
    "CSS3",
    "Git",
    "UI/UX Design",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with your about image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                About Image
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Frontend Developer & UI/UX Designer
            </h3>
            <p className="text-gray-600 mb-4">
              Hi there! I'm a passionate frontend developer with a strong focus
              on creating intuitive and engaging user experiences. With over 5
              years of experience in the field, I specialize in building modern
              web applications using cutting-edge technologies.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in web development started when I was in college, and
              since then, I've worked on numerous projects ranging from small
              business websites to complex web applications. I believe in
              writing clean, maintainable code and creating designs that are
              both aesthetically pleasing and functional.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              My Skills
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
