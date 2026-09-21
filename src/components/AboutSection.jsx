import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer & Full-Stack Builder
            </h3>

            <p className="text-muted-foreground">
              I'm a Software Engineering student at Arizona State University,
              experienced in building full-stack web applications and
              responsive user interfaces with React, TypeScript, JavaScript,
              Node.js, Express, SQL, and PostgreSQL.
            </p>

            <p className="text-muted-foreground">
              Right now I'm building a full-stack tutoring platform as my
              Capstone project with Blue Marble at ASU. Before that, I spent
              over a year as a Salesforce IT Developer Intern at AGCO,
              shipping Lightning Web Components and pushing Apex unit test
              coverage past 75%. I also care a lot about accessibility—during
              my volunteer work at RIT, I evaluated thousands of websites
              using WCAG guidelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack apps with React, TypeScript, Node.js,
                    and Express—from REST APIs to responsive UI, testing, and
                    debugging.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Accessibility Focus</h4>
                  <p className="text-muted-foreground">
                    Evaluated 4,000+ websites for WCAG issues and improved UX
                    thinking with inclusive design in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Projects</h4>
                  <p className="text-muted-foreground">
                    Worked on projects like ThriftyBite, SunDevil, and a
                    full-stack tutoring platform for Blue Marble—
                    collaboration, planning, and delivery.
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
