
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription,
  DrawerClose
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Mail, 
  Clock, 
  Database, 
  Send, 
  DollarSign, 
  MessageSquare,
  X,
  Settings,
  Play
} from "lucide-react";
import { useState } from "react";

interface WorkflowConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  workflowType: 'trigger' | 'action' | null;
  workflowName?: string;
}

export const WorkflowConfigDrawer = ({ 
  isOpen, 
  onClose, 
  workflowType, 
  workflowName 
}: WorkflowConfigDrawerProps) => {
  const [selectedType, setSelectedType] = useState("");

  const triggerTypes = [
    { value: "webhook", label: "Webhook", icon: Globe, description: "HTTP endpoint trigger" },
    { value: "schedule", label: "Schedule", icon: Clock, description: "Time-based trigger" },
    { value: "email", label: "Email Received", icon: Mail, description: "Incoming email trigger" },
    { value: "database", label: "Database Change", icon: Database, description: "Data change trigger" }
  ];

  const actionTypes = [
    { value: "email", label: "Send Email", icon: Mail, description: "Send email notification" },
    { value: "webhook", label: "Send Webhook", icon: Send, description: "HTTP request action" },
    { value: "payment", label: "Send Solana", icon: DollarSign, description: "Crypto payment action" },
    { value: "database", label: "Update Database", icon: Database, description: "Database operation" },
    { value: "slack", label: "Send Slack Message", icon: MessageSquare, description: "Slack notification" }
  ];

  const currentTypes = workflowType === 'trigger' ? triggerTypes : actionTypes;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-gray-900 border-gray-800 text-white">
        <DrawerHeader className="border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle className="text-2xl text-white">
                Configure {workflowType === 'trigger' ? 'Trigger' : 'Action'}
              </DrawerTitle>
              <DrawerDescription className="text-gray-400">
                Set up your {workflowType} for "{workflowName}" workflow
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Type Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-white">
              Select {workflowType === 'trigger' ? 'Trigger' : 'Action'} Type
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTypes.map((type) => (
                <div
                  key={type.value}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedType === type.value
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedType(type.value)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      selectedType === type.value 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{type.label}</h3>
                      <p className="text-sm text-gray-400 mt-1">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Configuration Form */}
          {selectedType && (
            <div className="space-y-6 border-t border-gray-800 pt-6">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Configuration</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter a name for this step"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe what this step does..."
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 resize-none"
                    rows={3}
                  />
                </div>

                {/* Dynamic fields based on selected type */}
                {selectedType === 'webhook' && (
                  <div className="space-y-2">
                    <Label htmlFor="url" className="text-white">Webhook URL</Label>
                    <Input 
                      id="url" 
                      placeholder="https://api.example.com/webhook"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                )}

                {selectedType === 'email' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input 
                        id="email" 
                        placeholder="user@example.com"
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Email subject"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </>
                )}

                {selectedType === 'schedule' && (
                  <div className="space-y-2">
                    <Label htmlFor="cron" className="text-white">Schedule (Cron Expression)</Label>
                    <Input 
                      id="cron" 
                      placeholder="0 0 * * *"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                    <p className="text-xs text-gray-400">
                      Example: "0 0 * * *" runs daily at midnight
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-800">
            <Button variant="outline" onClick={onClose} className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Cancel
            </Button>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                <Play className="w-4 h-4 mr-2" />
                Test
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Save Configuration
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
