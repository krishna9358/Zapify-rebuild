
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Send, DollarSign, Database, MessageSquare, FileText } from "lucide-react";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (actionType: string) => void;
}

export const ActionModal = ({ isOpen, onClose, onSelect }: ActionModalProps) => {
  const actions = [
    {
      id: "send-email",
      name: "Send Email",
      description: "Send an email to specified recipients",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      id: "send-solana",
      name: "Send Solana",
      description: "Transfer SOL tokens to a wallet address",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      id: "webhook",
      name: "Send Webhook",
      description: "Send HTTP request to an external service",
      icon: <Send className="w-6 h-6" />,
    },
    {
      id: "database",
      name: "Update Database",
      description: "Create or update database records",
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: "slack",
      name: "Send Slack Message",
      description: "Post a message to a Slack channel",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      id: "generate-pdf",
      name: "Generate PDF",
      description: "Create a PDF document from data",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Choose an Action</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 p-4">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-accent"
              onClick={() => onSelect(action.name)}
            >
              <div className="flex items-center space-x-2 w-full">
                {action.icon}
                <span className="font-medium text-sm">{action.name}</span>
              </div>
              <p className="text-xs text-muted-foreground text-left">
                {action.description}
              </p>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
