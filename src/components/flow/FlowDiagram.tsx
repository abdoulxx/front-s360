import { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CustomNode } from './CustomNode';
import type { FlowDiagramData } from '@/types/flow.types';

interface FlowDiagramProps {
  data: FlowDiagramData;
  onNodeClick: (nodeId: string) => void;
}

export function FlowDiagram({ data, onNodeClick }: FlowDiagramProps) {
  const nodeTypes: NodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  // Créer les nœuds avec positions fixes
  const nodes: Node[] = useMemo(() => {
    const nodePositions: Record<string, { x: number; y: number }> = {
      AC1: { x: 50, y: 150 }, // AC 
      FDI: { x: 200, y: 50 }, // FDI 
      RFCV: { x: 400, y: 50 }, // RFCV
      Manifeste: { x: 600, y: 50 }, // Manifeste
      Declaration: { x: 800, y: 50 }, // Déclaration
      AC2: { x: 980, y: 150 }, // AC 
    };

    return data.nodes.map((nodeData) => ({
      id: nodeData.id,
      type: 'custom',
      position: nodePositions[nodeData.id] || { x: 0, y: 0 },
      data: {
        label: nodeData.label,
        status: nodeData.status,
        onClick: () => onNodeClick(nodeData.id),
      },
    }));
  }, [data.nodes, onNodeClick]);

  // Créer les connexions entre les nœuds
  const edges: Edge[] = useMemo(() => {
    return [
      {
        id: 'ac1-fdi',
        source: 'AC1',
        target: 'FDI',
        animated: true,
        style: { stroke: '#6b7280', strokeWidth: 2 },
      },
      {
        id: 'fdi-rfcv',
        source: 'FDI',
        target: 'RFCV',
        animated: true,
        style: { stroke: '#6b7280', strokeWidth: 2 },
      },
      {
        id: 'rfcv-manifeste',
        source: 'RFCV',
        target: 'Manifeste',
        animated: true,
        style: { stroke: '#6b7280', strokeWidth: 2 },
      },
      {
        id: 'manifeste-declaration',
        source: 'Manifeste',
        target: 'Declaration',
        animated: true,
        style: { stroke: '#6b7280', strokeWidth: 2 },
      },
      {
        id: 'declaration-ac2',
        source: 'Declaration',
        target: 'AC2',
        animated: true,
        style: { stroke: '#6b7280', strokeWidth: 2 },
      },
    ];
  }, []);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
