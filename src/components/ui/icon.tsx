import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = icons[name] || icons[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Using fallback "${fallback}".`);
    return <icons.CircleAlert size={size} className={className} />;
  }

  return (
    <div className="relative inline-block">
      <IconComponent size={size} className={className} />
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse opacity-0 animate-[fadeUp_2s_ease-in-out_infinite]"></div>
        <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 animate-[fadeUp_2s_ease-in-out_infinite_0.5s] absolute -top-1 left-0.5"></div>
      </div>
    </div>
  );
};

export default Icon;
