// Types pour le diagramme de flux

export type NodeStatus = 'completed' | 'current' | 'error' | 'pending';

export interface FlowNodeData {
  id: string;
  label: string;
  status: NodeStatus;
  details?: Record<string, any>; // Détails à afficher dans la popup
}

export interface FlowDiagramData {
  nodes: FlowNodeData[];
  // Informations supplémentaires sur le document recherché
  documentInfo?: {
    type: string;
    value: string;
  };
}

// Mapping des statuts vers les couleurs de bordure
export const STATUS_COLORS: Record<NodeStatus, string> = {
  completed: '#22c55e', // Vert
  current: '#22c55e', // Vert (même couleur que completed)
  error: '#ef4444', // Rouge
  pending: '#6b7280', // Gris
};
