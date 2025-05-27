
import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TriggerNode } from './workflow/TriggerNode';
import { ActionNode } from './workflow/ActionNode';

const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
};

const initialNodes: Node[] = [
  {
    id: 'trigger-1',
    type: 'trigger',
    position: { x: 50, y: 100 },
    data: { triggerType: 'Webhook', label: 'Webhook' },
  },
  {
    id: 'action-1',
    type: 'action',
    position: { x: 250, y: 50 },
    data: { actionType: 'Send Email', label: 'Send Email' },
  },
  {
    id: 'action-2',
    type: 'action',
    position: { x: 250, y: 150 },
    data: { actionType: 'Send Solana', label: 'Send Solana' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'trigger-1',
    target: 'action-1',
    animated: true,
    style: { stroke: '#10b981' },
  },
  {
    id: 'e1-3',
    source: 'trigger-1',
    target: 'action-2',
    animated: true,
    style: { stroke: '#10b981' },
  },
];

export const WorkflowDemo = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);
  const onConnect = useCallback(() => {}, []);

  return (
    <div className="h-80 w-full rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="dots-bg"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Controls showInteractive={false} />
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};
