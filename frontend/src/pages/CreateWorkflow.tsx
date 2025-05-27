
import { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/Sidebar";
import { TriggerModal } from "@/components/TriggerModal";
import { ActionModal } from "@/components/ActionModal";
import { ConfigPanel } from "@/components/ConfigPanel";
import { Plus, Play, Save } from "lucide-react";
import { TriggerNode } from "@/components/workflow/TriggerNode";
import { ActionNode } from "@/components/workflow/ActionNode";

const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const CreateWorkflow = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showTriggerModal, setShowTriggerModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setShowConfigPanel(true);
  }, []);

  const addTriggerNode = (triggerType: string) => {
    const newNode: Node = {
      id: `trigger-${Date.now()}`,
      type: 'trigger',
      position: { x: 100, y: 100 },
      data: { triggerType, label: triggerType },
    };
    setNodes((nds) => [...nds, newNode]);
    setShowTriggerModal(false);
  };

  const addActionNode = (actionType: string) => {
    const newNode: Node = {
      id: `action-${Date.now()}`,
      type: 'action',
      position: { x: 300, y: 100 },
      data: { actionType, label: actionType },
    };
    setNodes((nds) => [...nds, newNode]);
    setShowActionModal(false);
  };

  return (
    <div className="min-h-screen flex workflow-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Top Bar */}
        <div className="bg-card/95 backdrop-blur border-b border-border/50 p-4">
          <div className="flex justify-between items-center">
            <div>
              {/* <h1 className="text-xl font-semibold">Workflow Builder</h1>
              <p className="text-sm text-muted-foreground">Design your automation workflow</p> */}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button>
                <Play className="w-4 h-4 mr-2" />
                Deploy
              </Button>
            </div>
          </div>
        </div>

        {/* Workflow Canvas */}
        <div className="flex-1 relative">
          <div className="h-[calc(100vh-80px)]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              fitView
              className="dots-bg"
            >
              <Controls />
              <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
            </ReactFlow>
          </div>

          {/* Floating Action Buttons */}
          <div className="absolute top-4 left-4 space-y-2">
            <Card className="p-2 bg-card/95 backdrop-blur border-border/50">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTriggerModal(true)}
                className="w-full mb-2"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Trigger
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowActionModal(true)}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Action
              </Button>
            </Card>
          </div>

          {/* Empty State */}
          {nodes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Card className="p-8 text-center bg-card/95 backdrop-blur border-border/50">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Start Building Your Workflow</h3>
                <p className="text-muted-foreground mb-4">
                  Add a trigger to get started, then connect actions to automate your tasks
                </p>
                <Button onClick={() => setShowTriggerModal(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Trigger
                </Button>
              </Card>
            </div>
          )}
        </div>

        {/* Modals */}
        <TriggerModal
          isOpen={showTriggerModal}
          onClose={() => setShowTriggerModal(false)}
          onSelect={addTriggerNode}
        />
        <ActionModal
          isOpen={showActionModal}
          onClose={() => setShowActionModal(false)}
          onSelect={addActionNode}
        />

        {/* Configuration Panel */}
        <ConfigPanel
          isOpen={showConfigPanel}
          onClose={() => setShowConfigPanel(false)}
          node={selectedNode}
        />
      </div>
    </div>
  );
};

export default CreateWorkflow;
