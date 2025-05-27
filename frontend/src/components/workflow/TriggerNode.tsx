
import { Handle, Position } from "@xyflow/react";
import { Card } from "@/components/ui/card";
import { Globe, Clock, Mail, Database } from "lucide-react";

interface TriggerNodeProps {
  data: {
    triggerType: string;
    label: string;
  };
}

export const TriggerNode = ({ data }: TriggerNodeProps) => {
  const getIcon = () => {
    switch (data.triggerType) {
      case 'Webhook':
        return <Globe className="w-5 h-5" />;
      case 'Schedule':
        return <Clock className="w-5 h-5" />;
      case 'Email Received':
        return <Mail className="w-5 h-5" />;
      case 'Database Change':
        return <Database className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <Card className="p-3 bg-purple-500/20 border-purple-500/50 min-w-[150px]">
      <div className="flex items-center space-x-2">
        <div className="text-purple-400">
          {getIcon()}
        </div>
        <div>
          <div className="font-medium text-sm">{data.triggerType}</div>
          <div className="text-xs text-muted-foreground">Trigger</div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-purple-500 border-purple-400"
      />
    </Card>
  );
};
