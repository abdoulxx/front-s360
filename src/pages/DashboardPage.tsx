import { DocumentCard } from '@/components/features/documents/DocumentCard';

// Mock data
const documents = [
  {
    id: 1,
    title: 'Contrôle S360°',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'dark' as const,
  },
  {
    id: 2,
    title: 'FCVR SG',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 3,
    title: 'FCVR - Article',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 4,
    title: 'FDI SG',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 5,
    title: 'FDI - Article',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 6,
    title: 'Manifeste SG',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 7,
    title: 'BR / LTA / CMR',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 8,
    title: 'Conteneurs Manifeste',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 9,
    title: 'Bon Provisoire',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 10,
    title: 'Bon Provisoire - Articles',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 11,
    title: 'Sydam Auto',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 12,
    title: 'Déclarations en Détail',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 13,
    title: 'Déclarations Articles',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 14,
    title: 'Conteneurs Déclaré',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 15,
    title: 'Banque TVF',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 16,
    title: 'Banque SAD',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 17,
    title: 'Contrôle ManDec',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
  {
    id: 18,
    title: 'Info Différentiels',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...",
    date: '27 octobre 2025',
    color: 'purple' as const,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            title={doc.title}
            description={doc.description}
            date={doc.date}
            color={doc.color}
          />
        ))}
      </div>
    </div>
  );
}
