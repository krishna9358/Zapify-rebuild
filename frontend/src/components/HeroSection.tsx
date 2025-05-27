
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Bot, Code, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const stats = [
    { value: "10M+", label: "Workflows Executed" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "200+", label: "Integrations" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.1),transparent_70%)]" />
        
        {/* Neural Network Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="neural-network">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`neural-node animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container px-4 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-fade-in">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Workflow Automation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Build AI Agents.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Automate Everything.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Create intelligent workflows with AI agents that understand, learn, and adapt. 
            Connect APIs, automate complex tasks, and scale your operations with neural workflow automation.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            <div className="flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400">
              <Zap className="w-4 h-4 mr-2" />
              Lightning Fast
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400">
              <Code className="w-4 h-4 mr-2" />
              Code-First
            </div>
            <div className="flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400">
              <Workflow className="w-4 h-4 mr-2" />
              Visual Builder
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group" asChild>
              <Link to="/signup">
                Start Building Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800" asChild>
              <Link to="/demo">
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 counter">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
