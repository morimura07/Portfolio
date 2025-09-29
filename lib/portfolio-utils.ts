import type { Project, ProjectCategory } from "@/types";

/**
 * Filter projects by category
 */
export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategory
): Project[] {
  if (category === "All") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * Get project count for a specific category
 */
export function getProjectCountByCategory(
  projects: Project[],
  category: ProjectCategory
): number {
  if (category === "All") {
    return projects.length;
  }
  return projects.filter((project) => project.category === category).length;
}

/**
 * Get unique project categories from projects array
 */
export function getProjectCategories(projects: Project[]): string[] {
  const categories = projects.map((project) => project.category);
  return ["All", ...Array.from(new Set(categories))];
}

/**
 * Format metrics text for display
 */
export function formatMetrics(metrics: string): string {
  return metrics.replace(/\+/g, "+").replace(/\$/g, "$");
}

/**
 * Generate project card delay for animations
 */
export function getProjectCardDelay(index: number): string {
  return `${index * 100}ms`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate SEO-friendly slugs
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

/**
 * Calculate years of experience from start year
 */
export function calculateExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

/**
 * Format large numbers for display (e.g., 1000000 -> 1M)
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

/**
 * Get skill level color based on percentage
 */
export function getSkillLevelColor(level: number): string {
  if (level >= 90) return "#10b981"; // green
  if (level >= 80) return "#3b82f6"; // blue
  if (level >= 70) return "#f59e0b"; // yellow
  if (level >= 60) return "#f97316"; // orange
  return "#ef4444"; // red
}

/**
 * Get status badge color
 */
export function getStatusBadgeColor(status: string): string {
  const statusColors: Record<string, string> = {
    "Live in Production": "#10b981",
    "Enterprise Solution": "#3b82f6",
    "App Store Featured": "#8b5cf6",
    "Production Ready": "#10b981",
    "Live Marketplace": "#10b981",
    "SaaS Platform": "#3b82f6",
    "Licensed Exchange": "#f59e0b",
    "Enterprise Tool": "#3b82f6",
    "HIPAA Certified": "#10b981",
    "Municipal Deployment": "#8b5cf6",
    "Security Tool": "#ef4444",
    "Enterprise Platform": "#3b82f6",
  };
  return statusColors[status] || "#6b7280";
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Check if link is external
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith("http") || href.startsWith("https");
}

/**
 * Get current availability status
 */
export function getAvailabilityStatus(): {
  status: "available" | "busy" | "unavailable";
  message: string;
} {
  // This could be dynamic based on calendar API or manual setting
  return {
    status: "available",
    message: "Currently Available for new projects and opportunities",
  };
}
