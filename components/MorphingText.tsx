"use client";

import { useState, useEffect, useRef } from "react";

interface MorphingTextProps {
  texts: string[];
  duration?: number;
  className?: string;
  autoPlay?: boolean;
  trigger?: "scroll" | "auto" | "hover";
}

export default function MorphingText({
  texts,
  duration = 3000,
  className = "",
  autoPlay = true,
  trigger = "auto",
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay || trigger !== "auto") return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration, autoPlay, trigger]);

  useEffect(() => {
    if (trigger !== "scroll") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setIsAnimating(false);
          }, 300);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [texts.length, trigger]);

  const handleHover = () => {
    if (trigger === "hover") {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div
      ref={elementRef}
      className={`inline-block ${className}`}
      onMouseEnter={handleHover}
    >
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating
            ? "scale-95 opacity-50 blur-sm rotate-1"
            : "scale-100 opacity-100 blur-0 rotate-0"
        }`}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
}
