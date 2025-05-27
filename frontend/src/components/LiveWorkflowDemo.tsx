
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkflowDemo } from "./WorkflowDemo";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useState } from "react";

export const LiveWorkflowDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [executionCount, setExecutionCount] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setExecutionCount(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setExecutionCount(0);
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our visual workflow builder. Drag, drop, and connect nodes to create powerful automations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CardTitle className="text-white">Email Automation Workflow</CardTitle>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    Live Demo
                  </Badge>
                  {isPlaying && (
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse">
                      Running
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">
                    Executions: {executionCount}
                  </span>
                  <Button size="sm" variant="outline" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button size="sm" onClick={handlePlayPause} className="bg-emerald-600 hover:bg-emerald-700">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Run'}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <WorkflowDemo />
            </CardContent>
          </Card>
          
          {/* Workflow Description */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Trigger Event</h3>
                <p className="text-sm text-gray-400">Webhook receives new user registration data</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Process Data</h3>
                <p className="text-sm text-gray-400">AI agent validates and enriches user information</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Execute Actions</h3>
                <p className="text-sm text-gray-400">Send welcome email and store in database</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
