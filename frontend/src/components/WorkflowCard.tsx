
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface WorkflowCardProps {
  title: string;
  description: string;
  triggerIcon: ReactNode;
  actionIcon: ReactNode;
}

export const WorkflowCard = ({ title, description, triggerIcon, actionIcon }: WorkflowCardProps) => {
  return (
    <Card className="glass-card hover-lift transition-all duration-300 cursor-pointer group h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center justify-center space-x-4">
          <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
            {triggerIcon}
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
          <div className="p-4 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
            {actionIcon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
