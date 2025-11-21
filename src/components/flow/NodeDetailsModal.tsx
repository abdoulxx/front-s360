import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { FlowNodeData } from '@/types/flow.types';

interface NodeDetailsModalProps {
  node: FlowNodeData | null;
  open: boolean;
  onClose: () => void;
}

export function NodeDetailsModal({ node, open, onClose }: NodeDetailsModalProps) {
  if (!node) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#6B63C5]">
            {node.label}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#6B63C5] scrollbar-track-gray-200">
          {/* Afficher les détails du nœud */}
          {node.details && Object.keys(node.details).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(node.details).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start border-b border-gray-200 pb-3"
                >
                  <span className="font-semibold text-gray-700 min-w-[200px] capitalize">
                    {key.replace(/_/g, ' ')}:
                  </span>
                  <span className="text-gray-900 flex-1">
                    {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Aucun détail disponible pour ce nœud.
            </div>
          )}
        </div>

        {/* Statut */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-2">
          <span className="font-semibold text-gray-700">Statut:</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              node.status === 'completed' || node.status === 'current'
                ? 'bg-green-100 text-green-700'
                : node.status === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {node.status === 'completed' ? 'Complété' :
             node.status === 'current' ? 'En cours' :
             node.status === 'error' ? 'Erreur' : 'En attente'}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
