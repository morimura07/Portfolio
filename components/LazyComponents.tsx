"use client";

import { lazy, Suspense } from "react";
import { SkeletonCard, SkeletonGrid } from "./SkeletonLoader";

// Lazy load heavy components
export const LazyFloatingParticles = lazy(() => import("./FloatingParticles"));
export const LazyWaves = lazy(() => import("./Waves"));
export const LazyContactForm = lazy(() => import("./ContactForm"));
export const LazyHowIWorkFlow = lazy(() => import("./HowIWorkFlow"));

// Wrapper components with Suspense
export function FloatingParticlesWrapper(props: any) {
  return (
    <Suspense
      fallback={<div className="fixed inset-0 pointer-events-none z-0" />}
    >
      <LazyFloatingParticles {...props} />
    </Suspense>
  );
}

export function WavesWrapper(props: any) {
  return (
    <Suspense fallback={<div className="fixed inset-0 z-0 bg-slate-900" />}>
      <LazyWaves {...props} />
    </Suspense>
  );
}

export function ContactFormWrapper(props: any) {
  return (
    <Suspense fallback={<SkeletonCard className="h-96" />}>
      <LazyContactForm {...props} />
    </Suspense>
  );
}

export function HowIWorkFlowWrapper(props: any) {
  return (
    <Suspense fallback={<SkeletonGrid items={3} className="mt-24" />}>
      <LazyHowIWorkFlow {...props} />
    </Suspense>
  );
}
