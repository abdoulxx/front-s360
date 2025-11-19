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
      className="w-[439px] h-[194px] rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black/35"
    >
      <div className="flex items-start gap-4 h-full">
        <div
          className="flex-shrink-0 w-[70px] h-[70px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconColor, color: 'white' }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-base text-white/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
