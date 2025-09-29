"use client";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label: string;
  icon?: any; // Lucide icon component
  className?: string;
}

export default function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = "#3b82f6",
  label,
  icon: Icon,
  className = "",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`flex flex-col items-center group cursor-default ${className}`}
    >
      <div
        className="relative group-hover:scale-105 transition-transform duration-300"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Icon and Percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {Icon && (
            <Icon size={size * 0.25} style={{ color }} className="mb-1" />
          )}
          <span className="text-lg font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm text-gray-300 mt-2 text-center group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}
