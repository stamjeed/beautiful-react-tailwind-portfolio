import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // Incomplete for now: uncomment once real links and screenshots are ready.
  // {
  //   id: 1,
  //   title: "Messaging & Social App",
  //   description:
  //     "Cross-platform social messaging app with user authentication, messaging workflows, and responsive UI components.",
  //   image: "/projects/project1.png",
  //   tags: ["React", "SwiftUI", "JavaScript", "Tailwind CSS"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
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
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/stamjeed"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
