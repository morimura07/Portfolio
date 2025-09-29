"use client";

import { useEffect, useState } from "react";

interface ResponsiveAnimationProps {
  children: React.ReactNode;
  mobileEnabled?: boolean;
  className?: string;
}

export default function ResponsiveAnimation({
  children,
  mobileEnabled = true,
  className = "",
}: ResponsiveAnimationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Check if mobile device
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Disable animations if user prefers reduced motion or on mobile (if not enabled)
  const shouldAnimate = !prefersReducedMotion && (mobileEnabled || !isMobile);

  return (
    <div className={className}>
      {shouldAnimate ? children : <div className="opacity-100">{children}</div>}
    </div>
  );
}
