"use client";

import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import {
  HowIWorkFlowWrapper,
  ContactFormWrapper,
} from "@/components/LazyComponents";
import FadeInAnimation from "@/components/FadeInAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="py-32 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Let's Work Together"
            subtitle="Ready to transform your ideas into scalable, innovative solutions? I'm available for freelance projects, consulting, and full-time opportunities."
            description="Whether you need blockchain development, full-stack applications, or technical leadership, let's discuss how I can help drive your project forward."
          />

          <FadeInAnimation delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <FadeInAnimation delay={50}>
                <ContactFormWrapper />
              </FadeInAnimation>

              {/* Social Links Only */}
              <FadeInAnimation delay={100}>
                <div className="space-y-8">
                  {/* Availability */}
                  <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl">Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div>
                          <div className="font-medium text-green-400">
                            Currently Available
                          </div>
                          <div className="text-gray-300 text-sm">
                            Open for new projects and opportunities
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div>• Freelance & Contract Projects</div>
                        <div>• Technical Consulting</div>
                        <div>• Full-time Opportunities</div>
                        <div>• Speaking & Workshops</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Links */}
                  <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        Connect With Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {SOCIAL_LINKS.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/80 ${social.color}`}
                            >
                              <Icon size={32} />
                              <span className="text-sm font-medium">
                                {social.label}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeInAnimation>
            </div>
          </FadeInAnimation>

          {/* How I Work Section */}
          <FadeInAnimation delay={150}>
            <div className="mt-24">
              <HowIWorkFlowWrapper />
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </PageLayout>
  );
}
