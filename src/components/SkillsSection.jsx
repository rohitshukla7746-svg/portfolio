import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Aurora color per category
const categoryColors = {
  all:      { bar: "rgba(0,255,150,1)",   glow: "rgba(0,255,150,0.5)",  border: "rgba(0,255,150,0.35)",  text: "#00ffaa" },
  frontend: { bar: "rgba(0,232,255,1)",   glow: "rgba(0,232,255,0.5)",  border: "rgba(0,232,255,0.35)",  text: "#00e8ff" },
  backend:  { bar: "rgba(160,100,255,1)", glow: "rgba(160,100,255,0.5)", border: "rgba(160,100,255,0.35)", text: "#a855f7" },
  tools:    { bar: "rgba(255,100,180,1)", glow: "rgba(255,100,180,0.5)", border: "rgba(255,100,180,0.35)", text: "#ff64b4" },
};

const getSkillColor = (category) => categoryColors[category] || categoryColors.all;

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const activeCategoryColor = categoryColors[activeCategory];

  return (
    <section
      id="skills"
      className="py-24 px-4 relative"
      style={{ background: "rgba(0,10,6,0.6)" }}
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: "#d0f0e8" }}>
          My{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00ffaa, #00e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(0,255,150,0.4))",
            }}
          >
            Skills
          </span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const color = categoryColors[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-5 py-2 rounded-full capitalize font-medium text-sm tracking-wide transition-all duration-300"
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${color.bar.replace("1)", "0.2)")}, ${color.bar.replace("1)", "0.1)")})`,
                        border: `1px solid ${color.border.replace("0.35", "0.7")}`,
                        color: color.text,
                        boxShadow: `0 0 20px ${color.glow.replace("0.5", "0.3")}`,
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(180,230,210,0.5)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = color.border;
                    e.currentTarget.style.color = color.text;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(180,230,210,0.5)";
                  }
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const color = getSkillColor(skill.category);
            return (
              <div
                key={skill.name}
                className="p-6 rounded-xl transition-all duration-300"
                style={{
                  background: `${color.bar.replace("1)", "0.04)")}`,
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 0 16px ${color.glow.replace("0.5", "0.06")}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${color.bar.replace("1)", "0.09)")}`;
                  e.currentTarget.style.borderColor = color.border.replace("0.35", "0.6");
                  e.currentTarget.style.boxShadow = `0 0 28px ${color.glow.replace("0.5", "0.18")}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${color.bar.replace("1)", "0.04)")}`;
                  e.currentTarget.style.borderColor = color.border;
                  e.currentTarget.style.boxShadow = `0 0 16px ${color.glow.replace("0.5", "0.06")}`;
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-base" style={{ color: "#c8efe0" }}>
                    {skill.name}
                  </h3>
                  <span
                    className="text-sm font-bold"
                    style={{ color: color.text }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar track */}
                <div
                  className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${color.bar.replace("1)", "0.7)")}, ${color.bar})`,
                      boxShadow: `0 0 8px ${color.glow}`,
                      transition: "width 1.5s ease-out",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
