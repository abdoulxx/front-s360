import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { FileText, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocumentCardProps {
  title: string;
  description: string;
  date: string;
  color: 'dark' | 'purple';
  icon?: React.ReactNode;
}

const colorMap = {
  dark: 'bg-[#2c2c2c]',
  purple: 'bg-[#5c55b1]',
};

export function DocumentCard({
  title,
  description,
  date,
  color,
  icon,
}: DocumentCardProps) {
  return (
    <Card
      className={`${colorMap[color]} text-white border-0 hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer group`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon || <FileText className="w-8 h-8" />}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white group-hover:text-gray-800 hover:bg-gray-100/20 h-8 w-8"
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-white/90 group-hover:text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-4 border-t border-white/20 group-hover:border-gray-300 flex items-center justify-between">
        <span className="text-sm text-white/80 group-hover:text-gray-600">{date}</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-white group-hover:text-gray-800 hover:bg-gray-100/20 font-medium"
        >
          voir
        </Button>
      </CardFooter>
    </Card>
  );
}
