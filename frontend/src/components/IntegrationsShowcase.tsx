
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Mail, 
  Smartphone, 
  Database, 
  Clock,
  BarChart3,
  Slack,
  Github,
  Linkedin,
  Youtube,
  MessageSquare,
  FileText,
  Camera,
  ShoppingCart,
  CreditCard,
  Users,
  Settings,
  Search,
  Calendar,
  Archive,
  Bookmark,
  Download,
  Upload,
  Share,
  Bell,
  Lock,
  Key,
  Shield,
  Cloud,
  Server,
  Code,
  Terminal,
  Cpu,
  Zap
} from "lucide-react";

export const IntegrationsShowcase = () => {
  const integrations1 = [
    { name: "Webhook", icon: Globe, color: "bg-blue-500" },
    { name: "Gmail", icon: Mail, color: "bg-red-500" },
    { name: "Slack", icon: MessageSquare, color: "bg-purple-500" },
    { name: "GitHub", icon: Github, color: "bg-gray-900" },
    { name: "Database", icon: Database, color: "bg-green-500" },
    { name: "Calendar", icon: Calendar, color: "bg-orange-500" },
    { name: "Stripe", icon: CreditCard, color: "bg-indigo-500" },
    { name: "Analytics", icon: BarChart3, color: "bg-yellow-500" },
    { name: "SMS", icon: Smartphone, color: "bg-cyan-500" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-600" },
    { name: "YouTube", icon: Youtube, color: "bg-red-600" },
    { name: "Scheduler", icon: Clock, color: "bg-emerald-500" },
    { name: "Cloud", icon: Cloud, color: "bg-sky-500" },
    { name: "Security", icon: Shield, color: "bg-red-700" },
    { name: "Code", icon: Code, color: "bg-purple-600" }
  ];

  const integrations2 = [
    { name: "Terminal", icon: Terminal, color: "bg-gray-800" },
    { name: "API", icon: Server, color: "bg-green-600" },
    { name: "Search", icon: Search, color: "bg-blue-400" },
    { name: "Files", icon: FileText, color: "bg-orange-600" },
    { name: "Users", icon: Users, color: "bg-pink-500" },
    { name: "Shopping", icon: ShoppingCart, color: "bg-amber-500" },
    { name: "Archive", icon: Archive, color: "bg-gray-600" },
    { name: "Bookmark", icon: Bookmark, color: "bg-yellow-600" },
    { name: "Download", icon: Download, color: "bg-green-400" },
    { name: "Upload", icon: Upload, color: "bg-blue-300" },
    { name: "Share", icon: Share, color: "bg-purple-400" },
    { name: "Alerts", icon: Bell, color: "bg-red-400" },
    { name: "Auth", icon: Key, color: "bg-indigo-600" },
    { name: "CPU", icon: Cpu, color: "bg-cyan-600" },
    { name: "Power", icon: Zap, color: "bg-yellow-400" }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mb-16">
        <div className="text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Integrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Plug AI into your own data &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              over 100+ integrations
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect to your favorite tools and services seamlessly with our extensive integration library.
          </p>
        </div>
      </div>

      {/* First row - moving left to right */}
      <div className="relative">
        <div className="flex animate-scroll-left space-x-6 mb-8">
          {[...integrations1, ...integrations1].map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:border-emerald-500/50"
            >
              <div className={`p-2 rounded-xl ${integration.color}/20`}>
                <integration.icon className={`w-8 h-8 text-white`} />
              </div>
            </div>
          ))}
        </div>

        {/* Second row - moving right to left */}
        <div className="flex animate-scroll-right space-x-6">
          {[...integrations2, ...integrations2].map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:border-emerald-500/50"
            >
              <div className={`p-2 rounded-xl ${integration.color}/20`}>
                <integration.icon className={`w-8 h-8 text-white`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
