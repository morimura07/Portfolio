"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "@/lib/constants";

export default function HowIWorkFlow() {
  return (
    <div className="space-y-12 mx-auto max-w-7xl px-4 w-full overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          How I Work
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          My proven 6-step development process for successful project delivery
        </p>
      </div>

      {/* Compact Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full overflow-hidden">
        {WORKFLOW_STEPS.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.id}
              className="bg-black/30 border-white/20 text-white backdrop-blur-sm hover:border-white/40 transition-all duration-300 group relative overflow-hidden"
            >
              <CardContent className="p-6 w-full overflow-hidden">
                {/* Step Number Badge */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.id}
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`p-3 rounded-lg ${step.bgColor} border border-white/10`}
                  >
                    <Icon size={28} style={{ color: step.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {step.description}
                </p>

                {/* Key Points - Show only 2 main ones */}
                <div className="space-y-2">
                  {step.details.slice(0, 2).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <span className="text-sm text-gray-400 line-clamp-1">
                        {detail}
                      </span>
                    </div>
                  ))}
                  {step.details.length > 2 && (
                    <div className="text-sm text-gray-500 mt-2">
                      +{step.details.length - 2} more steps
                    </div>
                  )}
                </div>

                {/* Connect arrow for mobile */}
                {index < WORKFLOW_STEPS.length - 1 && index % 3 === 2 && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:hidden">
                    <ArrowRight size={16} className="text-gray-500 rotate-90" />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary Stats - More Compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="text-center p-4 bg-black/20 rounded-lg border border-white/10">
          <div className="text-xl font-bold text-blue-400">99%</div>
          <div className="text-sm text-gray-400">Success</div>
        </div>
        <div className="text-center p-4 bg-black/20 rounded-lg border border-white/10">
          <div className="text-xl font-bold text-green-400">24h</div>
          <div className="text-sm text-gray-400">Response</div>
        </div>
        <div className="text-center p-4 bg-black/20 rounded-lg border border-white/10">
          <div className="text-xl font-bold text-purple-400">50+</div>
          <div className="text-sm text-gray-400">Projects</div>
        </div>
        <div className="text-center p-4 bg-black/20 rounded-lg border border-white/10">
          <div className="text-xl font-bold text-yellow-400">7+</div>
          <div className="text-sm text-gray-400">Years</div>
        </div>
      </div>
    </div>
  );
}
