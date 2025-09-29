interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 sm:mb-16 px-4 ${className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 leading-relaxed font-light max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
