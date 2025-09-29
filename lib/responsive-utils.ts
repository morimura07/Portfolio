import { BREAKPOINTS } from "@/hooks/use-mobile";

// Responsive utility functions
export const getResponsiveClasses = (classes: {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
}) => {
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      if (breakpoint === "xs") return className;
      return `${breakpoint}:${className}`;
    })
    .join(" ");
};

// Device-specific optimizations
export const getDeviceOptimizedProps = (deviceType: 'mobile' | 'tablet' | 'desktop' | undefined) => {
  switch (deviceType) {
    case 'mobile':
      return {
        particleCount: 20,
        animationDuration: 300,
        enableMagneticHover: false,
        enableComplexAnimations: false,
      };
    case 'tablet':
      return {
        particleCount: 40,
        animationDuration: 500,
        enableMagneticHover: true,
        enableComplexAnimations: true,
      };
    case 'desktop':
      return {
        particleCount: 60,
        animationDuration: 800,
        enableMagneticHover: true,
        enableComplexAnimations: true,
      };
    default:
      return {
        particleCount: 30,
        animationDuration: 500,
        enableMagneticHover: false,
        enableComplexAnimations: false,
      };
  }
};

// Responsive spacing utilities
export const getResponsiveSpacing = (base: number, multiplier: number = 1) => ({
  xs: `${base * 0.5}px`,
  sm: `${base * 0.75}px`,
  md: `${base}px`,
  lg: `${base * 1.25}px`,
  xl: `${base * 1.5}px`,
  "2xl": `${base * 2}px`,
});

// Responsive font sizes
export const getResponsiveFontSize = (base: number) => ({
  xs: `${base * 0.75}rem`,
  sm: `${base * 0.875}rem`,
  md: `${base}rem`,
  lg: `${base * 1.125}rem`,
  xl: `${base * 1.25}rem`,
  "2xl": `${base * 1.5}rem`,
});
