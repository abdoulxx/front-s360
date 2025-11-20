interface DocumentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
  onClick?: () => void;
}

export function DocumentCard({
  title,
  description,
  icon,
  iconColor = '#FF6B35',
  onClick,
}: DocumentCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-auto min-h-[194px] rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black/35 border border-white/50"
    >
      <div className="flex items-start gap-3 sm:gap-4 h-full">
        <div
          className="flex-shrink-0 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconColor, color: 'white' }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
