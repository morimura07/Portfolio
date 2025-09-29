"use client";

import { useEffect, useRef, useState } from "react";

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

export default function StaggeredAnimation({
  children,
  staggerDelay = 100,
  initialDelay = 0,
  className = "",
}: StaggeredAnimationProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, initialDelay + index * staggerDelay);
          });
        }
      },
      {
        threshold: 0.001,
        rootMargin: "400px 0px -100px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [children, staggerDelay, initialDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleItems.has(index) ? 1 : 0,
            transform: visibleItems.has(index)
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
