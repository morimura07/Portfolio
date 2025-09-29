"use client";

interface LineChartProps {
  percentage: number;
  color: string;
  label?: string;
}

export default function LineChart({
  percentage,
  color,
  label = "Category Average",
}: LineChartProps) {
  return (
    <div className="pt-4 border-t border-white/20">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-lg font-bold" style={{ color }}>
          {percentage}%
        </span>
      </div>

      {/* Line Chart Visualization */}
      <div className="relative">
        {/* Background line */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          {/* Progress line */}
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}40`,
            }}
          />
        </div>

        {/* Percentage markers */}
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
