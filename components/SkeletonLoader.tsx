"use client";

import { ReactNode } from "react";

interface SkeletonLoaderProps {
  className?: string;
  children?: ReactNode;
  animate?: boolean;
}

export function SkeletonBox({
  className = "",
  animate = true,
}: SkeletonLoaderProps) {
  return (
    <div
      className={`bg-gray-800/50 rounded ${
        animate ? "animate-pulse" : ""
      } ${className}`}
    />
  );
}

export function SkeletonText({
  lines = 1,
  className = "",
  animate = true,
}: {
  lines?: number;
  className?: string;
  animate?: boolean;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBox
          key={index}
          className={`h-4 ${index === lines - 1 ? "w-3/4" : "w-full"}`}
          animate={animate}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-black/30 border-white/20 rounded-lg p-6 ${className}`}>
      <SkeletonBox className="aspect-video mb-4" />
      <SkeletonText lines={2} className="mb-4" />
      <div className="flex gap-2 mb-4">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-6 w-20" />
        <SkeletonBox className="h-6 w-14" />
      </div>
      <div className="flex gap-2">
        <SkeletonBox className="h-8 flex-1" />
        <SkeletonBox className="h-8 flex-1" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <SkeletonBox className={`${sizeClasses[size]} rounded-full ${className}`} />
  );
}

export function SkeletonButton({ className = "" }: { className?: string }) {
  return <SkeletonBox className={`h-10 w-24 rounded ${className}`} />;
}

export function SkeletonGrid({
  items = 6,
  className = "",
  itemClassName = "",
}: {
  items?: number;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {Array.from({ length: items }).map((_, index) => (
        <SkeletonCard key={index} className={itemClassName} />
      ))}
    </div>
  );
}

export default function SkeletonLoader({
  children,
  className = "",
  animate = true,
}: SkeletonLoaderProps) {
  return (
    <div className={`${animate ? "animate-pulse" : ""} ${className}`}>
      {children}
    </div>
  );
}
