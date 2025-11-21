import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { STATUS_COLORS, type NodeStatus } from '@/types/flow.types';

interface CustomNodeProps {
  data: {
    label: string;
    status: NodeStatus;
    onClick: () => void;
  };
}

export const CustomNode = memo(({ data }: CustomNodeProps) => {
  const borderColor = STATUS_COLORS[data.status];

  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div
        onClick={data.onClick}
        className="px-8 py-4 bg-gray-600 text-white font-semibold rounded-full cursor-pointer transition-all hover:scale-105"
        style={{
          border: `4px solid ${borderColor}`,
          minWidth: '120px',
          textAlign: 'center',
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
});

CustomNode.displayName = 'CustomNode';
