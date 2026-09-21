import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 80, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "Apex", level: 75, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },

  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "SwiftUI", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },

  // Databases
  { name: "Supabase", level: 80, category: "databases" },
  { name: "PostgreSQL", level: 80, category: "databases" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Salesforce CLI", level: 75, category: "tools" },
  { name: "GitHub Actions", level: 75, category: "tools" },

  // AI Tools
  { name: "Claude Code", level: 85, category: "ai" },
  { name: "GitHub Copilot", level: 80, category: "ai" },

  // Testing
  { name: "Unit Testing", level: 80, category: "testing" },
  { name: "QA Testing", level: 75, category: "testing" },
  { name: "Accessibility Testing", level: 85, category: "testing" },
  { name: "Vitest", level: 75, category: "testing" },
  { name: "Playwright", level: 70, category: "testing" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "databases",
  "tools",
  "ai",
  "testing",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
