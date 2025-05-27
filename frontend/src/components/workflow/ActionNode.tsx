
import { Handle, Position } from "@xyflow/react";
import { Card } from "@/components/ui/card";
import { Mail, Send, DollarSign, Database, MessageSquare, FileText } from "lucide-react";

interface ActionNodeProps {
  data: {
    actionType: string;
    label: string;
  };
}

export const ActionNode = ({ data }: ActionNodeProps) => {
  const getIcon = () => {
    switch (data.actionType) {
      case 'Send Email':
        return <Mail className="w-5 h-5" />;
      case 'Send Solana':
        return <DollarSign className="w-5 h-5" />;
      case 'Send Webhook':
        return <Send className="w-5 h-5" />;
      case 'Update Database':
        return <Database className="w-5 h-5" />;
      case 'Send Slack Message':
        return <MessageSquare className="w-5 h-5" />;
      case 'Generate PDF':
        return <FileText className="w-5 h-5" />;
      default:
        return <Send className="w-5 h-5" />;
    }
  };

  return (
    <Card className="p-3 bg-blue-500/20 border-blue-500/50 min-w-[150px]">
      <div className="flex items-center space-x-2">
        <div className="text-blue-400">
          {getIcon()}
        </div>
        <div>
          <div className="font-medium text-sm">{data.actionType}</div>
          <div className="text-xs text-muted-foreground">Action</div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-blue-500 border-blue-400"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-blue-500 border-blue-400"
      />
    </Card>
  );
};
