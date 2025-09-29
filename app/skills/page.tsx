"use client";

import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CircularProgress from "@/components/CircularProgress";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import LineChart from "@/components/LineChart";
import FadeInAnimation from "@/components/FadeInAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ModernReveal from "@/components/ModernReveal";
import MagneticHover from "@/components/MagneticHover";
import FloatingParticles from "@/components/FloatingParticles";
import { SKILL_CATEGORIES, TECHNOLOGY_ICONS } from "@/lib/constants";

export default function SkillsPage() {
  return (
    <PageLayout>
      <FloatingParticles
        count={40}
        colors={["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]}
      />
      <div className="py-32 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Technical Expertise"
            subtitle="7+ years of hands-on experience across the full technology stack, from frontend interfaces to blockchain protocols and cloud infrastructure."
            description="Continuously learning and adapting to emerging technologies while maintaining deep expertise in core development fundamentals."
          />

          {/* Professional Highlights */}
          <ModernReveal delay={300} type="slide" duration={800}>
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                Professional Highlights
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <ModernReveal delay={500} type="rotate" duration={600}>
                  <MagneticHover strength={0.1}>
                    <StatsCard
                      value="100+"
                      label="Smart Contracts Deployed"
                      color="#3b82f6"
                      bgColor="bg-black/20"
                      borderColor="border-blue-500/30"
                    />
                  </MagneticHover>
                </ModernReveal>
                <ModernReveal delay={650} type="rotate" duration={600}>
                  <MagneticHover strength={0.1}>
                    <StatsCard
                      value="99.99%"
                      label="System Uptime Achieved"
                      color="#10b981"
                      bgColor="bg-black/20"
                      borderColor="border-green-500/30"
                    />
                  </MagneticHover>
                </ModernReveal>
                <ModernReveal delay={800} type="rotate" duration={600}>
                  <MagneticHover strength={0.1}>
                    <StatsCard
                      value="10M+"
                      label="Daily API Requests"
                      color="#8b5cf6"
                      bgColor="bg-black/20"
                      borderColor="border-purple-500/30"
                    />
                  </MagneticHover>
                </ModernReveal>
                <ModernReveal delay={950} type="rotate" duration={600}>
                  <MagneticHover strength={0.1}>
                    <StatsCard
                      value="15+"
                      label="Team Members Led"
                      color="#f59e0b"
                      bgColor="bg-black/20"
                      borderColor="border-yellow-500/30"
                    />
                  </MagneticHover>
                </ModernReveal>
              </div>
            </div>
          </ModernReveal>

          {/* Skills Grid */}
          <FadeInAnimation delay={0}>
            <StaggeredAnimation
              staggerDelay={30}
              initialDelay={0}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
            >
              {SKILL_CATEGORIES.map((category, index) => {
                const Icon = category.icon;
                return (
                  <MagneticHover key={index} strength={0.05}>
                    <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm hover:border-white/40 hover:bg-black/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                          <Icon
                            style={{ color: category.color }}
                            size={20}
                            className="sm:w-6 sm:h-6"
                          />
                          <span>{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6 w-full overflow-hidden">
                        {/* Circular Progress Skills */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex justify-center"
                            >
                              <div className="block sm:hidden">
                                <CircularProgress
                                  percentage={skill.level}
                                  color={category.color}
                                  label={skill.name}
                                  size={70}
                                  strokeWidth={4}
                                />
                              </div>
                              <div className="hidden sm:block">
                                <CircularProgress
                                  percentage={skill.level}
                                  color={category.color}
                                  label={skill.name}
                                  size={100}
                                  strokeWidth={6}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Average Line Chart */}
                        <LineChart
                          percentage={Math.round(
                            category.skills.reduce(
                              (sum, skill) => sum + skill.level,
                              0
                            ) / category.skills.length
                          )}
                          color={category.color}
                          label="Category Average"
                        />

                        {/* Technologies */}
                        <div className="w-full overflow-hidden">
                          <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-300">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full">
                            {category.technologies.map((tech, techIndex) => {
                              const TechIcon = TECHNOLOGY_ICONS[tech];
                              return (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="border-white/30 text-white/90 text-xs bg-white/5 flex items-center gap-1 px-2 py-1 hover:bg-white/10 hover:scale-105 transition-all duration-200"
                                >
                                  {TechIcon && (
                                    <TechIcon
                                      size={10}
                                      className="text-white/70 sm:w-3 sm:h-3"
                                    />
                                  )}
                                  <span className="text-xs">{tech}</span>
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </MagneticHover>
                );
              })}
            </StaggeredAnimation>
          </FadeInAnimation>
        </div>
      </div>
    </PageLayout>
  );
}
