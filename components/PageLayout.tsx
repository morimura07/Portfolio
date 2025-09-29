"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Waves from "./Waves";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed background waves */}
      <div className="fixed inset-0 z-0">
        <Waves
          lineColor="rgba(255, 255, 255, 0.3)"
          backgroundColor="#0f172a"
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={32}
          waveAmpY={16}
          xGap={10}
          yGap={32}
          friction={0.925}
          tension={0.005}
          maxCursorMove={100}
        />
      </div>
      <Navigation />
      <main
        className={`relative z-10 transition-all duration-700 w-full overflow-x-hidden ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
