"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import TypingEffect from "@/components/TypingEffect";
import FadeInAnimation from "@/components/FadeInAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ModernReveal from "@/components/ModernReveal";
import MagneticHover from "@/components/MagneticHover";
import MorphingText from "@/components/MorphingText";
import FloatingParticles from "@/components/FloatingParticles";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  Blocks,
  Download,
  Mail,
} from "lucide-react";
import { CORE_SKILLS } from "@/lib/constants";

export default function HomePage() {
  return (
    <PageLayout>
      <FloatingParticles count={60} />
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-8 py-32 relative z-10">
        <div className="text-center max-w-6xl">
          {/* Main Hero Section */}
          <div className="mb-12">
            <FadeInAnimation delay={0}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                <TypingEffect text="David Taylor" speed={100} delay={0} />
              </h1>
            </FadeInAnimation>

            <FadeInAnimation delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <StaggeredAnimation
                  staggerDelay={50}
                  initialDelay={0}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  {[
                    { icon: Code, text: "Full-Stack Developer", color: "blue" },
                    {
                      icon: Database,
                      text: "Backend Architect",
                      color: "green",
                    },
                    {
                      icon: Blocks,
                      text: "Blockchain Expert",
                      color: "purple",
                    },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 text-${badge.color}-300 bg-${badge.color}-500/10 px-3 sm:px-4 py-2 rounded-full border border-${badge.color}-500/20 hover:scale-105 transition-transform duration-300`}
                    >
                      <badge.icon size={16} className="sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-lg font-medium">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </StaggeredAnimation>
              </div>
            </FadeInAnimation>
            {/* Enhanced Subtitle */}
            <ModernReveal delay={200} type="elastic" duration={1000}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-light">
                <MorphingText
                  texts={[
                    "Senior Developer & Blockchain Architect",
                    "Full-Stack Innovation Leader",
                    "Enterprise Solutions Expert",
                    "DeFi Protocol Specialist",
                  ]}
                  duration={4000}
                  autoPlay={true}
                />
              </p>
            </ModernReveal>
            <FadeInAnimation delay={300}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                Transforming ideas into scalable digital solutions with 7+ years
                of experience in full-stack development and blockchain
                technology. Specialized in building enterprise-grade
                applications and DeFi protocols.
              </p>
            </FadeInAnimation>

            {/* Core Skills */}
            <FadeInAnimation delay={400}>
              <StaggeredAnimation
                staggerDelay={30}
                initialDelay={0}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {CORE_SKILLS.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-white/30 text-white/90 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </StaggeredAnimation>
            </FadeInAnimation>

            {/* CTA Buttons */}
            <ModernReveal delay={500} type="scale" duration={800}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <MagneticHover strength={0.2}>
                  <Link href="/projects" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25">
                      View My Portfolio
                      <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                    </Button>
                  </Link>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/10"
                    >
                      <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Let's Connect
                    </Button>
                  </Link>
                </MagneticHover>
                <MagneticHover strength={0.1}>
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/5 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Download CV
                  </Button>
                </MagneticHover>
              </div>
            </ModernReveal>
          </div>

          {/* Stats & Achievements Grid */}
          <ModernReveal delay={600} type="blur" duration={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 px-4">
              <ModernReveal delay={650} type="elastic" duration={600}>
                <MagneticHover strength={0.1}>
                  <StatsCard
                    value="50+"
                    label="Projects Delivered"
                    color="#3b82f6"
                  />
                </MagneticHover>
              </ModernReveal>
              <ModernReveal delay={680} type="elastic" duration={600}>
                <MagneticHover strength={0.1}>
                  <StatsCard
                    value="7+"
                    label="Years Experience"
                    color="#10b981"
                  />
                </MagneticHover>
              </ModernReveal>
              <ModernReveal delay={710} type="elastic" duration={600}>
                <MagneticHover strength={0.1}>
                  <StatsCard value="25+" label="Technologies" color="#8b5cf6" />
                </MagneticHover>
              </ModernReveal>
              <ModernReveal delay={740} type="elastic" duration={600}>
                <MagneticHover strength={0.1}>
                  <StatsCard
                    value="15+"
                    label="Team Members Led"
                    color="#f59e0b"
                  />
                </MagneticHover>
              </ModernReveal>
            </div>
          </ModernReveal>

          {/* Call to Action Section */}
          <FadeInAnimation delay={800}>
            <div className="text-center px-4">
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Ready to bring your next project to life?
              </p>
              <Link href="/contact">
                <Button className="bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </PageLayout>
  );
}
