"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

export default function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  fallback,
}: LazySectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {hasIntersected
        ? children
        : fallback || (
            <div className="animate-pulse bg-gray-800/20 rounded-lg h-32 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          )}
    </div>
  );
}
