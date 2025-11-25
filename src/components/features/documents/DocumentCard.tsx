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
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-auto min-h-[194px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden flex"
    >
      {/* Partie gauche colorée avec l'icône */}
      <div
        className="w-[140px] flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: iconColor }}
      >
        <div className="w-[80px] h-[80px] rounded-full bg-white/20 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white/30 flex items-center justify-center">
            <div style={{ color: 'white' }}>
              {icon}
            </div>
          </div>
        </div>
      </div>

      {/* Partie droite blanche avec le texte */}
      <div className="flex-1 bg-white p-6 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-3" style={{ color: iconColor }}>
          {title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
