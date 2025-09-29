"use client";

import { useEffect, useRef, useState } from "react";

interface ModernRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  type?: "slide" | "scale" | "rotate" | "blur" | "elastic";
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ModernReveal({
  children,
  delay = 0,
  duration = 800,
  type = "slide",
  direction = "up",
  className = "",
}: ModernRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.001,
        rootMargin: "350px 0px -100px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (type) {
      case "slide":
        switch (direction) {
          case "up":
            return "translate3d(0, 60px, 0)";
          case "down":
            return "translate3d(0, -60px, 0)";
          case "left":
            return "translate3d(60px, 0, 0)";
          case "right":
            return "translate3d(-60px, 0, 0)";
          default:
            return "translate3d(0, 60px, 0)";
        }
      case "scale":
        return "scale(0.8)";
      case "rotate":
        return "rotate3d(1, 0, 0, 45deg) scale(0.9)";
      case "blur":
        return "scale(1.05)";
      case "elastic":
        return "scale(0.3) rotate(-10deg)";
      default:
        return "translate3d(0, 60px, 0)";
    }
  };

  const getFinalTransform = () => {
    return "translate3d(0, 0, 0) scale(1) rotate(0deg)";
  };

  const getEasing = () => {
    switch (type) {
      case "elastic":
        return "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
      case "scale":
      case "rotate":
        return "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      case "blur":
        return "cubic-bezier(0.4, 0, 0.2, 1)";
      default:
        return "cubic-bezier(0.4, 0, 0.2, 1)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        filter:
          type === "blur" ? (isVisible ? "blur(0px)" : "blur(10px)") : "none",
        transition: `all ${duration}ms ${getEasing()}`,
      }}
    >
      {children}
    </div>
  );
}
