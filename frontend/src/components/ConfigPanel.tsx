
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { Node } from "@xyflow/react";

interface ConfigPanelProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
}

export const ConfigPanel = ({ isOpen, onClose, node }: ConfigPanelProps) => {
  if (!isOpen || !node) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-card border-l border-border shadow-lg z-50 overflow-y-auto">
      <CardHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Configure Node</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Node Name</Label>
          <Input id="name" defaultValue={node.data?.label || ''} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Enter node description..."
            className="resize-none"
          />
        </div>
        
        {node.type === 'trigger' && (
          <div className="space-y-2">
            <Label htmlFor="trigger-type">Trigger Type</Label>
            <Select defaultValue={node.data?.triggerType || 'Webhook'}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Webhook">Webhook</SelectItem>
                <SelectItem value="Schedule">Schedule</SelectItem>
                <SelectItem value="Email Received">Email Received</SelectItem>
                <SelectItem value="Database Change">Database Change</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        {node.type === 'action' && (
          <div className="space-y-2">
            <Label htmlFor="action-type">Action Type</Label>
            <Select defaultValue={node.data?.actionType || 'Send Email'}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Send Email">Send Email</SelectItem>
                <SelectItem value="Send Webhook">Send Webhook</SelectItem>
                <SelectItem value="Update Database">Update Database</SelectItem>
                <SelectItem value="Send Slack Message">Send Slack Message</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="pt-4 border-t border-border">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            Save Configuration
          </Button>
        </div>
      </CardContent>
    </div>
  );
};
