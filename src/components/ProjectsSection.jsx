import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  
    {
  id: 1,
  title: "PERN Authentication System",
  description: "A full-stack authentication system built with React, Node.js, Express, and PostgreSQL featuring secure user registration, login, JWT authentication, and email verification.",
  image: "/projects/project1.png",
  tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
  demoUrl: "https://pern-auth-frontend.onrender.com",
  githubUrl: "https://github.com/rohitshukla7746-svg/Pern-auth"
},
,
  {
  id: 2,
  title: "Upcoming Project",
  description:
    "A new full-stack project currently in development. This project will showcase modern web technologies and real-world application features.",
  image: "/projects/project2.png",
  tags: ["Coming Soon"],
  demoUrl: "#",
  githubUrl: "#",
},
{
  id: 3,
  title: "Future Project",
  description:
    "Another project that will be added soon as part of my portfolio to demonstrate additional full-stack development skills.",
  image: "/projects/project3.png",
  tags: ["Coming Soon"],
  demoUrl: "#",
  githubUrl: "#",
},
];

// Aurora color per project card
const projectColors = [
  {
    border: "rgba(0,255,150,0.2)",
    hoverBorder: "rgba(0,255,150,0.5)",
    glow: "rgba(0,255,150,0.08)",
    hoverGlow: "rgba(0,255,150,0.18)",
    tag: "rgba(0,255,150,0.1)",
    tagBorder: "rgba(0,255,150,0.25)",
    tagText: "#00ffaa",
  },
  {
    border: "rgba(0,200,255,0.2)",
    hoverBorder: "rgba(0,200,255,0.5)",
    glow: "rgba(0,200,255,0.08)",
    hoverGlow: "rgba(0,200,255,0.18)",
    tag: "rgba(0,200,255,0.1)",
    tagBorder: "rgba(0,200,255,0.25)",
    tagText: "#00e8ff",
  },
  {
    border: "rgba(160,100,255,0.2)",
    hoverBorder: "rgba(160,100,255,0.5)",
    glow: "rgba(160,100,255,0.08)",
    hoverGlow: "rgba(160,100,255,0.18)",
    tag: "rgba(160,100,255,0.1)",
    tagBorder: "rgba(160,100,255,0.25)",
    tagText: "#a855f7",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#d0f0e8" }}>
          Featured{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00ffaa, #00e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(0,255,150,0.4))",
            }}
          >
            Projects
          </span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "rgba(180,230,210,0.65)" }}>
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const color = projectColors[index % projectColors.length];
            return (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(0,20,12,0.6)",
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 0 20px ${color.glow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color.hoverBorder;
                  e.currentTarget.style.boxShadow = `0 0 35px ${color.hoverGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = color.border;
                  e.currentTarget.style.boxShadow = `0 0 20px ${color.glow}`;
                }}
              >
                {/* Image with aurora overlay on hover */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, ${color.hoverGlow})`,
                    }}
                  />
                </div>

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: color.tag,
                          border: `1px solid ${color.tagBorder}`,
                          color: color.tagText,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1" style={{ color: "#c8efe0" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(180,230,210,0.65)" }}>
                    {project.description}
                  </p>

                  {/* Icon links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300"
                      style={{ color: "rgba(180,230,210,0.5)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = color.tagText;
                        e.currentTarget.style.filter = `drop-shadow(0 0 6px ${color.tagBorder})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(180,230,210,0.5)";
                        e.currentTarget.style.filter = "none";
                      }}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300"
                      style={{ color: "rgba(180,230,210,0.5)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = color.tagText;
                        e.currentTarget.style.filter = `drop-shadow(0 0 6px ${color.tagBorder})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(180,230,210,0.5)";
                        e.currentTarget.style.filter = "none";
                      }}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rohitshukla7746-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,150,0.2), rgba(0,200,255,0.2))",
              border: "1px solid rgba(0,255,150,0.4)",
              color: "#00ffaa",
              boxShadow: "0 0 20px rgba(0,255,150,0.15), inset 0 0 20px rgba(0,255,150,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,150,0.35), inset 0 0 20px rgba(0,255,150,0.1)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,255,150,0.3), rgba(0,200,255,0.3))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,150,0.15), inset 0 0 20px rgba(0,255,150,0.05)";
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,255,150,0.2), rgba(0,200,255,0.2))";
            }}
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
