import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  return (
    <nav aria-label="Main" className="fixed top-0 w-full z-40">
      {/*
        Background layer lives on its own element instead of on <nav> itself.
        backdrop-filter on an ancestor makes it the containing block for any
        `position: fixed` descendant (like the mobile menu below), which was
        collapsing the mobile menu down to the navbar's own height once you
        scrolled. Keeping it as a non-ancestor sibling avoids that entirely.
      */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : ""
        )}
      />

      <div className="container flex items-center justify-between py-4">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Saleha </span>{" "}
            Portfolio
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/*
            Rendered here (inside the navbar's own flex row) instead of as an
            independently `fixed` element elsewhere on the page, so it shares
            the exact same vertical centering as the nav links and the
            burger button on every breakpoint instead of needing hand-tuned
            offsets that drift out of alignment.
          */}
          <ThemeToggle />

          {/* mobile nav */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          )}
        >
          <div className="flex flex-col space-y-4 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
