"use client";

import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import FadeInAnimation from "@/components/FadeInAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import TypingEffect from "@/components/TypingEffect";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-32 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="About David Taylor"
            subtitle="Senior Full-Stack & Blockchain Developer with 7+ years of experience building enterprise-grade applications and decentralized systems that serve millions of users worldwide."
            description="Specialized in architecting scalable solutions, leading development teams, and delivering high-impact projects that drive business growth and technological innovation."
          />

          {/* Professional Summary */}
          <FadeInAnimation delay={0}>
            <div className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                <TypingEffect
                  text="Professional Summary"
                  speed={50}
                  delay={0}
                  cursor={false}
                />
              </h2>
              <StaggeredAnimation
                staggerDelay={30}
                initialDelay={50}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6"
              >
                {[
                  <StatsCard
                    value="7+"
                    label="Years Experience"
                    color="#3b82f6"
                  />,
                  <StatsCard
                    value="$100M+"
                    label="Value Managed"
                    color="#10b981"
                  />,
                  <StatsCard
                    value="50+"
                    label="Projects Delivered"
                    color="#8b5cf6"
                  />,
                ]}
              </StaggeredAnimation>
              <FadeInAnimation delay={150}>
                <div className="text-center">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
                    Passionate about building scalable, secure, and innovative
                    solutions that drive business growth. Experienced in leading
                    cross-functional teams and delivering enterprise-grade
                    applications used by millions of users worldwide.
                  </p>
                </div>
              </FadeInAnimation>
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Experience */}
              <FadeInAnimation delay={250} direction="left">
                <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm hover:bg-black/40 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                      <Calendar className="text-blue-400" size={24} />
                      Experience
                    </h2>
                    <StaggeredAnimation
                      staggerDelay={50}
                      initialDelay={50}
                      className="space-y-6"
                    >
                      {EXPERIENCES.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-blue-400/30 pl-4 pb-6 hover:border-blue-400/60 transition-all duration-300 group"
                        >
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-blue-400 mb-3">
                            <MapPin size={16} />
                            <span>{exp.company}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">
                            {exp.description}
                          </p>
                          {exp.achievements && (
                            <div className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div
                                  key={achIndex}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                  <span className="text-blue-300 text-xs">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </StaggeredAnimation>
                  </CardContent>
                </Card>
              </FadeInAnimation>

              {/* Education & Certifications */}
              <FadeInAnimation delay={300} direction="right">
                <div className="space-y-8">
                  <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm hover:bg-black/40 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-4 sm:p-6">
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                        <GraduationCap className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                        Education
                      </h2>
                      <StaggeredAnimation
                        staggerDelay={250}
                        initialDelay={400}
                        className="space-y-4"
                      >
                        {EDUCATION.map((edu, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-green-400/30 pl-4 pb-4 hover:border-green-400/60 transition-all duration-300 group"
                          >
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <p className="text-green-400 font-medium">
                              {edu.school}
                            </p>
                            <p className="text-gray-300 text-sm">
                              {edu.specialization}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-gray-400 text-sm">
                                {edu.year}
                              </p>
                              <p className="text-green-300 text-sm font-medium">
                                GPA: {edu.gpa}
                              </p>
                            </div>
                          </div>
                        ))}
                      </StaggeredAnimation>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm hover:bg-black/40 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-4 sm:p-6">
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                        <Award className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
                        Certifications
                      </h2>
                      <StaggeredAnimation
                        staggerDelay={100}
                        initialDelay={600}
                        className="flex flex-wrap gap-2"
                      >
                        {CERTIFICATIONS.map((cert, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-purple-400/30 text-purple-400 bg-white/5 hover:bg-purple-400/10 hover:border-purple-400/50 hover:scale-110 transition-all duration-300"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </StaggeredAnimation>
                    </CardContent>
                  </Card>
                </div>
              </FadeInAnimation>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </PageLayout>
  );
}
