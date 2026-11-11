import { ArrowRight, Clock, ExternalLink, Github } from "lucide-react";

const projects = [
  // Incomplete for now: uncomment once real links and screenshots are ready.
  // {
  //   id: 2,
  //   title: "SunDevil",
  //   description:
  //     "Book marketplace for ASU students, built with a team of four to handle listing, searching, and managing textbook transactions.",
  //   image: "/projects/project2.png",
  //   tags: ["React", "Team Project"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "GraphManager",
  //   description:
  //     "Java graph traversal algorithms (BFS/DFS) with automated testing and GitHub Actions CI/CD.",
  //   image: "/projects/project3.png",
  //   tags: ["Java", "GitHub Actions", "Testing"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 7,
    title: "Blue Marble Academy (Capstone)",
    description:
      "Full-stack website and booking platform for a tutoring and coding academy. Families explore programs, book sessions and pay online, while staff manage bookings and students from their own dashboards.",
    image: "/projects/blue-marble.webp",
    tags: ["React", "TypeScript", "Express", "Supabase", "Stripe"],
    demoUrl: "https://blue-marble-deploy-1.onrender.com/",
  },
  {
    id: 1,
    title: "KawaiiChat",
    description:
      "iOS messaging app with real-time chats, voice messages, photo sharing, read receipts and push notifications, wrapped in a playful, customizable kawaii theme.",
    image: "/projects/kawaiichat-placeholder.svg",
    imageAlt: "Illustration of the KawaiiChat messaging app (screenshots coming soon)",
    tags: ["SwiftUI", "Swift", "Firebase", "Firestore"],
    // TODO: add the live demo / App Store link once it is available
    demoUrl: null,
  },
  {
    id: 4,
    title: "ThriftyBite",
    description:
      "Full-stack app that matches recipes to the ingredients in your pantry and surfaces nearby grocery deals on whatever is missing.",
    image: "/projects/thriftybite.png",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    demoUrl: "https://thriftybite.vercel.app",
    githubUrl: "https://github.com/stamjeed",
  },
  {
    id: 5,
    title: "Fourier Series Visualizer",
    description:
      "Draw any shape and watch it rebuilt from spinning circles, using Fourier Series to model and graph periodic functions.",
    image: "/projects/fourier-series-visualizer.png",
    tags: ["JavaScript", "Fourier Series", "Data Visualization"],
    demoUrl: "https://fourier-art-generator.vercel.app",
    githubUrl: "https://github.com/stamjeed",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "This site: a responsive, space-themed portfolio with a light and dark mode, animated visuals, and a contact form that sends real email.",
    image: "/projects/portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://stamjeed.vercel.app",
    githubUrl: "https://github.com/stamjeed",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group flex flex-col w-full md:w-[calc(50%-1rem)] bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? `Screenshot of ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto pt-2 flex flex-wrap gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                      <span className="sr-only">
                        of {project.title} (opens in a new tab)
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-foreground/30 text-muted-foreground text-sm font-medium cursor-default">
                      <Clock size={16} aria-hidden="true" />
                      Demo Coming Soon
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5"
                    >
                      <Github size={16} aria-hidden="true" />
                      Code
                      <span className="sr-only">
                        for {project.title} on GitHub (opens in a new tab)
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/stamjeed"
          >
            Check My GitHub <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
