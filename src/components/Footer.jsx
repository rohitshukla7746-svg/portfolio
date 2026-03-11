import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-8 px-8 relative mt-12 flex flex-wrap justify-between items-center"
      style={{
        background: "rgba(0,10,6,0.8)",
        borderTop: "1px solid rgba(0,255,150,0.15)",
      }}
    >
      {/* Left — copyright */}
      <p
        className="text-sm"
        style={{ color: "rgba(180,230,210,0.5)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #00ffaa, #00e8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Rohit Shukla
        </span>
        PORTFOLIO
      </p>

      {/* Right — back to top */}
      <a
        href="#hero"
        className="p-2.5 rounded-full transition-all duration-300"
        style={{
          background: "rgba(0,255,150,0.08)",
          border: "1px solid rgba(0,255,150,0.25)",
          color: "#00ffaa",
          boxShadow: "0 0 12px rgba(0,255,150,0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,255,150,0.18)";
          e.currentTarget.style.boxShadow = "0 0 24px rgba(0,255,150,0.3)";
          e.currentTarget.style.borderColor = "rgba(0,255,150,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0,255,150,0.08)";
          e.currentTarget.style.boxShadow = "0 0 12px rgba(0,255,150,0.1)";
          e.currentTarget.style.borderColor = "rgba(0,255,150,0.25)";
        }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
