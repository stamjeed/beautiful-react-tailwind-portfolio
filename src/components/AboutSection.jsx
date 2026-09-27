import { Accessibility, Cloud, Code } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Builder",
    description:
      "From databases and APIs to polished interfaces, I like owning a feature end to end.",
  },
  {
    icon: Cloud,
    title: "Real-World Experience",
    description:
      "Enterprise Salesforce work and a production web app taught me to ship reliable code.",
  },
  {
    icon: Accessibility,
    title: "Inclusive by Default",
    description:
      "I care about accessible, intuitive design and have checked thousands of sites for WCAG.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Curious Mind, Careful Builder
            </h3>

            <p className="text-muted-foreground">
              I love turning ideas into reliable, well-designed software, from
              the first sketch to the final deploy.
            </p>

            <p className="text-muted-foreground">
              On the web, I work across the whole stack: React and TypeScript
              for the interface, Node and Express for the APIs, and SQL
              databases like PostgreSQL behind them, including sign-in and
              payment flows.
            </p>

            <p className="text-muted-foreground">
              Beyond the web, I&apos;ve built Salesforce components with Apex,
              trained a machine learning model, and written Java algorithms
              with automated tests and CI. I test what I build, and I care
              about how real people, including those using screen readers,
              experience it.
            </p>

            <p className="text-muted-foreground">
              Most of all, I&apos;m happiest when I&apos;m learning something
              new.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
