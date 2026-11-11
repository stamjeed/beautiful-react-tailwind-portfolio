import { useEffect } from "react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found | Saleha Tamjeed";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
        <p className="text-7xl sm:text-8xl font-bold text-gradient">404</p>
        <h1 className="text-2xl sm:text-3xl font-semibold">
          This page drifted out of orbit
        </h1>
        <p className="max-w-md text-foreground/80">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a href="/" className="cosmic-button">
          Back to home
        </a>
      </main>
    </div>
  );
};
