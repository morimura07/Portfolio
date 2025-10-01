"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import FadeInAnimation from "@/components/FadeInAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ModernReveal from "@/components/ModernReveal";
import MagneticHover from "@/components/MagneticHover";
import { FloatingParticlesWrapper } from "@/components/LazyComponents";
import LazySection from "@/components/LazySection";
import { SkeletonGrid } from "@/components/SkeletonLoader";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import {
  filterProjectsByCategory,
  getProjectCountByCategory,
} from "@/lib/portfolio-utils";
import type { ProjectCategory } from "@/types";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  // Filter projects based on active filter
  const filteredProjects = filterProjectsByCategory(PROJECTS, activeFilter);

  return (
    <PageLayout>
      <FloatingParticlesWrapper
        count={35}
        colors={["#3b82f6", "#8b5cf6", "#10b981"]}
        speed={0.3}
      />
      <div className="py-32 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Portfolio & Projects"
            subtitle="A curated selection of enterprise-grade projects showcasing expertise in blockchain development, full-stack applications, and scalable backend systems."
            description="Each project represents real-world solutions with measurable impact and production-ready implementations."
          />

          {/* Category Filter */}
          <FadeInAnimation delay={300}>
            <div className="mb-12">
              {/* Mobile Filter (Stack) */}
              <div className="sm:hidden flex flex-col gap-3 px-4">
                <h3 className="text-white text-sm font-medium text-center">
                  Filter by Category
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {PROJECT_CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className={`rounded-lg transition-all duration-300 text-sm ${
                        activeFilter === category
                          ? "bg-white/20 text-white shadow-lg border border-white/30"
                          : "text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {category}
                      <span className="ml-1 text-xs opacity-70">
                        ({getProjectCountByCategory(PROJECTS, category)})
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Desktop Filter (Horizontal) */}
              <div className="hidden sm:flex justify-center px-4">
                <div className="flex flex-wrap justify-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-3 max-w-full">
                  {PROJECT_CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className={`rounded-full transition-all duration-300 whitespace-nowrap ${
                        activeFilter === category
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-sm">{category}</span>
                      <span className="ml-1 text-xs opacity-70">
                        ({getProjectCountByCategory(PROJECTS, category)})
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </FadeInAnimation>

          {/* Results Counter */}
          <FadeInAnimation delay={600}>
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm">
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
                {activeFilter !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="text-white font-medium">
                      {activeFilter}
                    </span>
                  </span>
                )}
              </p>
            </div>
          </FadeInAnimation>

          {/* Projects Grid */}
          <LazySection
            className="w-full"
            threshold={0.1}
            rootMargin="100px"
            fallback={
              <SkeletonGrid items={6} className="w-full items-stretch" />
            }
          >
            <FadeInAnimation delay={0}>
              <StaggeredAnimation
                staggerDelay={50}
                initialDelay={0}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch"
              >
                {filteredProjects.map((project, index) => (
                  <MagneticHover
                    key={`${project.title}-${index}`}
                    strength={0.03}
                    className="h-full"
                  >
                    <ProjectCard project={project} index={index} />
                  </MagneticHover>
                ))}
              </StaggeredAnimation>
            </FadeInAnimation>
          </LazySection>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">
                No projects found in this category.
              </p>
              <Button
                onClick={() => setActiveFilter("All")}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
