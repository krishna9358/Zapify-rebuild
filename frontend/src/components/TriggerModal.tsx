
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, Clock, Mail, Database } from "lucide-react";

interface TriggerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (triggerType: string) => void;
}

export const TriggerModal = ({ isOpen, onClose, onSelect }: TriggerModalProps) => {
  const triggers = [
    {
      id: "webhook",
      name: "Webhook",
      description: "Trigger when a HTTP request is received",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "schedule",
      name: "Schedule",
      description: "Trigger on a time-based schedule",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      id: "email",
      name: "Email Received",
      description: "Trigger when an email is received",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      id: "database",
      name: "Database Change",
      description: "Trigger when database records change",
      icon: <Database className="w-6 h-6" />,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Choose a Trigger</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 p-4">
          {triggers.map((trigger) => (
            <Button
              key={trigger.id}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-accent"
              onClick={() => onSelect(trigger.name)}
            >
              <div className="flex items-center space-x-2 w-full">
                {trigger.icon}
                <span className="font-medium">{trigger.name}</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                {trigger.description}
              </p>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
