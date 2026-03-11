import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          style={{ color: "#d0f0e8" }}
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00ffaa, #00e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(0,255,150,0.4))",
            }}
          >
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Bio */}
          <div className="space-y-6">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "#c8efe0" }}
            >
              Full Stack Developer specializing in the PERN stack and building scalable web applications.
            </h3>

            <p style={{ color: "rgba(180, 230, 210, 0.7)" }}>
              I’m a Full Stack Developer passionate about building modern web
applications using the PERN stack (PostgreSQL, Express, React, Node.js).
I enjoy creating responsive user interfaces, developing backend APIs,
and learning new technologies to improve my development skills.
            </p>

            <p style={{ color: "rgba(180, 230, 210, 0.7)" }}>
              I'm a Full Stack Developer passionate about building modern web
applications using the PERN stack. I enjoy solving problems through
code and continuously learning new technologies to improve my
development skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 text-center"
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
                Get In Touch
              </a>

              <a
                href="cv.pdf"
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 text-center"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(160,100,255,0.35)",
                  color: "rgba(180,130,255,0.9)",
                  boxShadow: "0 0 20px rgba(160,100,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(160,100,255,0.3)";
                  e.currentTarget.style.borderColor = "rgba(160,100,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(160,100,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(160,100,255,0.35)";
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div
              className="p-6 rounded-xl transition-all duration-300 group"
              style={{
                background: "rgba(0,255,150,0.04)",
                border: "1px solid rgba(0,255,150,0.15)",
                boxShadow: "0 0 20px rgba(0,255,150,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,255,150,0.08)";
                e.currentTarget.style.borderColor = "rgba(0,255,150,0.35)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,150,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,255,150,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,255,150,0.15)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,150,0.05)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full shrink-0"
                  style={{
                    background: "rgba(0,255,150,0.1)",
                    border: "1px solid rgba(0,255,150,0.2)",
                    boxShadow: "0 0 12px rgba(0,255,150,0.15)",
                  }}
                >
                  <Code className="h-6 w-6" style={{ color: "#00ffaa" }} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1" style={{ color: "#c8efe0" }}>
                    Web Development
                  </h4>
                  <p style={{ color: "rgba(180, 230, 210, 0.65)", fontSize: "0.9rem" }}>
                    Building full-stack web applications using React, Node.js,
Express, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div
              className="p-6 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(0,200,255,0.04)",
                border: "1px solid rgba(0,200,255,0.15)",
                boxShadow: "0 0 20px rgba(0,200,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,200,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(0,200,255,0.35)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,200,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,200,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,200,255,0.15)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,200,255,0.05)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full shrink-0"
                  style={{
                    background: "rgba(0,200,255,0.1)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    boxShadow: "0 0 12px rgba(0,200,255,0.15)",
                  }}
                >
                  <User className="h-6 w-6" style={{ color: "#00e8ff" }} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1" style={{ color: "#c8efe0" }}>
                    Frontend Development

                  </h4>
                  <p style={{ color: "rgba(180, 230, 210, 0.65)", fontSize: "0.9rem" }}>
                    Frontend Development
Building responsive and modern user interfaces using React and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div
              className="p-6 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(160,100,255,0.04)",
                border: "1px solid rgba(160,100,255,0.15)",
                boxShadow: "0 0 20px rgba(160,100,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(160,100,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(160,100,255,0.35)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160,100,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(160,100,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(160,100,255,0.15)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(160,100,255,0.05)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full shrink-0"
                  style={{
                    background: "rgba(160,100,255,0.1)",
                    border: "1px solid rgba(160,100,255,0.2)",
                    boxShadow: "0 0 12px rgba(160,100,255,0.15)",
                  }}
                >
                  <Briefcase className="h-6 w-6" style={{ color: "#a855f7" }} />
                </div>
                <div className="text-left">
                 <h4 className="font-semibold text-lg mb-1" style={{ color: "#c8efe0" }}>
  Database Management
</h4>
<p style={{ color: "rgba(180, 230, 210, 0.65)", fontSize: "0.9rem" }}>
  Designing and managing databases using PostgreSQL to store,
  organize, and retrieve application data efficiently.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
