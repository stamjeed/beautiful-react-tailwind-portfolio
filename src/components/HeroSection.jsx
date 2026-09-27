import { useEffect, useState } from "react";
import { ArrowDown, Telescope } from "lucide-react";

const focusAreas = [
  "Full-Stack Development",
  "Salesforce (LWC & Apex)",
  "REST APIs",
  "Machine Learning",
  "Web Accessibility",
  "Testing & QA",
];

const phrases = [
  "build full-stack apps.",
  "break down complex problems.",
  "sweat the small details.",
  "wonder about the universe.",
];

const useTypewriter = (words) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 35 : 75;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
};

const OrbitVisual = () => (
  <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] animate-float">
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

    <div className="absolute inset-[27%] rounded-full bg-gradient-to-br from-primary via-violet-400 to-cyan-300 shadow-[0_0_60px_hsl(var(--primary)/0.6)]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_55%)]" />
    </div>

    <div className="absolute inset-[14%] rounded-full border border-primary/40 animate-[spin_24s_linear_infinite]">
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(103_232_249)]" />
    </div>

    <div className="absolute inset-[3%] rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite_reverse]">
      <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
    </div>

    <div className="absolute inset-[-8%] rounded-full border border-primary/15 animate-[spin_60s_linear_infinite]">
      <span className="absolute -bottom-1 left-1/4 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_10px_rgb(196_181_253)]" />
    </div>
  </div>
);

export const HeroSection = () => {
  const typed = useTypewriter(phrases);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-24 pb-24"
    >
      <div className="container max-w-6xl mx-auto z-10 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
        <div className="order-2 md:order-1 space-y-5 text-center md:text-left">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              Software Engineer · ASU &apos;26
            </span>
          </div>

          <h1 className="font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in-delay-1 block text-foreground/90 text-2xl sm:text-3xl font-semibold mb-1">
              Hi, I&apos;m
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block pb-1 text-5xl sm:text-6xl lg:text-7xl">
              Saleha Tamjeed
            </span>
          </h1>

          <p
            className="opacity-0 animate-fade-in-delay-2 text-xl md:text-2xl font-medium text-foreground min-h-[2.25rem] md:min-h-[2.5rem]"
            aria-label={phrases.join(" ")}
          >
            I <span className="text-primary">{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] h-[1.1em] align-middle bg-primary animate-pulse" />
          </p>

          <div className="space-y-4 max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              I&apos;m a Software Engineering student at ASU passionate about
              building thoughtful, full-stack applications that solve real
              problems. I enjoy exploring new technologies, breaking down
              complex challenges, and finding the details that make systems
              reliable and intuitive.
            </p>

            <p className="flex items-start justify-center md:justify-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              <Telescope className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              <span>
                Beyond technology, I have a deep curiosity for physics and
                astronomy and the questions they raise about our universe.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 opacity-0 animate-fade-in-delay-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 text-sm rounded-full border bg-secondary/60 text-foreground/80"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="pt-1 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center opacity-0 animate-fade-in-delay-2">
          <OrbitVisual />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce [@media(max-height:850px)]:hidden">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
