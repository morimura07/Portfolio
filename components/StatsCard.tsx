import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: string;
  label: string;
  color: string;
  bgColor?: string;
  borderColor?: string;
}

export default function StatsCard({
  value,
  label,
  color,
  bgColor = "bg-black/20",
  borderColor = "border-white/20",
}: StatsCardProps) {
  return (
    <Card
      className={`${bgColor} ${borderColor} text-white backdrop-blur-sm hover:bg-black/30 hover:border-white/40 hover:scale-105 transition-all duration-300 group cursor-default`}
    >
      <CardContent className="p-6 text-center">
        <div
          className={`text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300`}
          style={{ color }}
        >
          {value}
        </div>
        <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}
