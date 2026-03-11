import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Aurora glow ring behind name */}
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(0,255,150,0.5) 0%, rgba(0,200,255,0.3) 40%, transparent 70%)",
                transform: "scale(2.5)",
              }}
            />

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative">
              <span className="opacity-0 animate-fade-in" style={{ color: "#d0f0e8" }}>
                Hello, I'm
              </span>
              <span
                className="opacity-0 animate-fade-in-delay-1 ml-2"
                style={{
                  color: "#00ffaa",
                  textShadow: "0 0 30px rgba(0,255,150,0.6), 0 0 60px rgba(0,255,150,0.3)",
                }}
              >
                Rohit
              </span>
              <span
                className="ml-2 opacity-0 animate-fade-in-delay-2"
                style={{
                  background: "linear-gradient(90deg, #00e8ff, #a855f7, #00ffaa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 20px rgba(0,200,255,0.4))",
                }}
              >
                Shukla
              </span>
            </h1>
          </div>

          {/* Frosted glass badge */}
          <div className="opacity-0 animate-fade-in-delay-1 flex justify-center">
            <span
              className="text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{
                background: "rgba(0,255,150,0.07)",
                borderColor: "rgba(0,255,150,0.25)",
                color: "rgba(0,255,180,0.85)",
                letterSpacing: "0.2em",
              }}
            >
              ✦ Full Stack Developer ✦
            </span>
          </div>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed"
            style={{ color: "rgba(180, 230, 210, 0.75)" }}
          >
           I build modern full-stack web applications using React, Node.js, Express, and PostgreSQL, focusing on clean UI and scalable backend systems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
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
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
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
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "rgba(0,255,150,0.5)" }}
        >
          Scroll
        </span>
        <div
          className="rounded-full p-1"
          style={{
            border: "1px solid rgba(0,255,150,0.3)",
            boxShadow: "0 0 10px rgba(0,255,150,0.2)",
          }}
        >
          <ArrowDown className="h-4 w-4" style={{ color: "rgba(0,255,150,0.8)" }} />
        </div>
      </div>
    </section>
  );
};
