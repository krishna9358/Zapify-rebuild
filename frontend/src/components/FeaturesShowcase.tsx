
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  Zap, 
  Code, 
  Database, 
  Globe,
  Shield,
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const FeaturesShowcase = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Deploy intelligent agents that understand context and make decisions autonomously.",
      badge: "AI",
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Neural Processing",
      description: "Advanced machine learning algorithms optimize workflow execution in real-time.",
      badge: "ML",
      color: "purple"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Automatically generate code snippets and API integrations using AI.",
      badge: "Gen AI",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Event-Driven",
      description: "Reactive workflows that respond to events across your entire tech stack.",
      badge: "Fast",
      color: "yellow"
    },
    {
      icon: Database,
      title: "Smart Data Ops",
      description: "Intelligent data transformations and automated database operations.",
      badge: "Data",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description: "Enterprise-grade security with AI-powered threat detection and prevention.",
      badge: "Secure",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      red: "bg-red-500/10 text-red-400 border-red-500/20"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Gen Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Future of Workflow Automation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powered by advanced AI and machine learning, our platform brings intelligence to every workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(feature.color)} transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className={getColorClasses(feature.color)}>
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-emerald-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
