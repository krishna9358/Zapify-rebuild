
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Zap, 
  Home, 
  Settings, 
  User, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  BarChart3,
  Bell,
  HelpCircle
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Plus, label: "Create Workflow", path: "/create-workflow" },

  ];

  const bottomItems = [
    { icon: HelpCircle, label: "Help & Support", path: "/help" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-card/95 backdrop-blur-xl border-r border-border/50 transition-all duration-300 z-50 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            {isOpen && (
              <Link to="/" className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-emerald-500/20">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-bold gradient-text text-lg">Entangled</span>
              </Link>
            )}
            {!isOpen && (
              <div className="p-2 rounded-xl bg-emerald-500/20 mx-auto">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-2 hover:bg-muted/50 shrink-0"
            >
              {isOpen ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full hover:bg-muted/50 ${
                  !isOpen ? 'justify-center' : 'justify-start'
                } ${
                  isActive ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : ''
                }`}
                asChild
              >
                <Link to={item.path}>
                  <Icon className={`w-4 h-4 ${isOpen ? 'mr-3' : ''} shrink-0`} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 space-y-2 border-t border-border/50">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <Button
                key={item.path}
                variant="ghost"
                className={`w-full justify-start hover:bg-muted/50 ${!isOpen && 'px-3'}`}
                asChild
              >
                <Link to={item.path}>
                  <Icon className={`w-4 h-4 ${isOpen ? 'mr-3' : ''} shrink-0`} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </Button>
            );
          })}
          
          <Button
            variant="ghost"
            className={`w-full justify-start hover:bg-red-500/20 text-red-400 ${!isOpen && 'px-3'}`}
          >
            <LogOut className={`w-4 h-4 ${isOpen ? 'mr-3' : ''} shrink-0`} />
            {isOpen && <span>Sign Out</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
