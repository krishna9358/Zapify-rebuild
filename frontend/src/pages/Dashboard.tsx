
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Plus, Play, Pause, Settings, MoreHorizontal, Search, Filter, Zap, TrendingUp, Clock, Users, Eye } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { WorkflowConfigDrawer } from "@/components/WorkflowConfigDrawer";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<'trigger' | 'action' | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>("");

  const workflows = [
    {
      id: 1,
      name: "Webhook to Email Notification",
      status: "active",
      triggers: 125,
      lastRun: "2 minutes ago",
      category: "Communication",
      success_rate: 99.2
    },
    {
      id: 2,
      name: "Solana Payment Processor",
      status: "paused",
      triggers: 45,
      lastRun: "1 hour ago",
      category: "Finance",
      success_rate: 100
    },
    {
      id: 3,
      name: "Database Sync Workflow",
      status: "active",
      triggers: 78,
      lastRun: "5 minutes ago",
      category: "Data",
      success_rate: 97.8
    },
    {
      id: 4,
      name: "User Onboarding Flow",
      status: "active",
      triggers: 234,
      lastRun: "1 minute ago",
      category: "Marketing",
      success_rate: 98.5
    }
  ];

  const stats = [
    {
      title: "Total Workflows",
      value: "12",
      change: "+2 this week",
      icon: <Zap className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Success Rate",
      value: "98.7%",
      change: "+0.3% from last month",
      icon: <TrendingUp className="w-5 h-5 text-green-400" />
    },
    {
      title: "Total Executions",
      value: "1,247",
      change: "+156 today",
      icon: <Clock className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Active Users",
      value: "8",
      change: "+1 this week",
      icon: <Users className="w-5 h-5 text-purple-400" />
    }
  ];

  const handleConfigureWorkflow = (workflowName: string, type: 'trigger' | 'action') => {
    setSelectedWorkflow(workflowName);
    setDrawerType(type);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen flex workflow-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">Dashboard</h1>
              <p className="text-gray-400">Monitor and manage your automation workflows</p>
            </div>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-500 self-start lg:self-auto">
              <Link to="/create-workflow">
                <Plus className="w-4 h-4 mr-2" />
                Create New Workflow
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover-lift animate-fade-in border-gray-800 bg-gray-900/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-emerald-400 mt-1">{stat.change}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-800/50">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search workflows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-400"
              />
            </div>
            <Button variant="outline" className="shrink-0 border-gray-700 text-gray-300 hover:bg-gray-800">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Workflows Grid */}
          <div className="grid gap-6">
            {workflows.map((workflow, index) => (
              <Card key={workflow.id} className="glass-card hover-lift transition-all duration-300 animate-fade-in border-gray-800 bg-gray-900/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="text-xl text-white">{workflow.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">
                        {workflow.category}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <Badge 
                        variant={workflow.status === 'active' ? 'default' : 'secondary'}
                        className={workflow.status === 'active' ? 'bg-emerald-600 hover:bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300'}
                      >
                        {workflow.status}
                      </Badge>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {workflow.triggers} triggers
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Last run: {workflow.lastRun}
                      </span>
                      <span className="text-green-400">
                        {workflow.success_rate}% success
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400"
                      onClick={() => handleConfigureWorkflow(workflow.name, 'trigger')}
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-blue-500/20 text-gray-300 hover:text-blue-400"
                      onClick={() => handleConfigureWorkflow(workflow.name, 'action')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400">
                      {workflow.status === 'active' ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {workflows.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="p-4 rounded-full bg-emerald-500/20 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">No workflows yet</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Create your first workflow to start automating your tasks and boost productivity
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-500">
                <Link to="/create-workflow">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Workflow
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <WorkflowConfigDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        workflowType={drawerType}
        workflowName={selectedWorkflow}
      />
    </div>
  );
};

export default Dashboard;
