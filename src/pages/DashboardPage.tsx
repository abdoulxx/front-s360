import { DocumentCard } from '@/components/features/documents/DocumentCard';
import { LayoutGrid, AlertTriangle, FileText, BarChart3, Bot } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Cards Grid - First row */}
      <div className="flex flex-wrap gap-6">
        <DocumentCard
          title="Contrôle S360°"
          description="Rechercher et analyser un dossier à partir de n'importe quelle référence."
          icon={<LayoutGrid className="w-8 h-8" />}
          iconColor="#FF6B35"
        />
        <DocumentCard
          title="Liste Alerte"
          description="Consulter les écarts détectés entre les documents."
          icon={<AlertTriangle className="w-8 h-8" />}
          iconColor="#EF4444"
        />
        <DocumentCard
          title="Liste Documents"
          description="Afficher et filtrer l'ensemble des documents."
          icon={<FileText className="w-8 h-8" />}
          iconColor="#240078ff"
        />
      </div>

      {/* Cards Grid - Second row */}
      <div className="flex flex-wrap gap-6">
        <DocumentCard
          title="KPI - Dashboard"
          description="Visualiser les indicateurs pour le suivi et l'analyse des importations"
          icon={<BarChart3 className="w-8 h-8" />}
          iconColor="#10B981"
        />
        <DocumentCard
          title="Chat bot"
          description="Chatter et Obtenir une aide instantanée"
          icon={<Bot className="w-8 h-8" />}
          iconColor="#8B5CF6"
        />
      </div>
    </div>
  );
}
