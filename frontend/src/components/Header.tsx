
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Entangled
            </span>
          </Link>
          <Badge variant="secondary" className="hidden sm:flex bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Beta
          </Badge>
        </div>

        {/* <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/dashboard" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Dashboard
          </Link>
          <Link 
            to="/pricing" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Pricing
          </Link>
          <Link 
            to="/docs" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Docs
          </Link>
        </nav> */}

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/krishna9358" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/krishna-mohan-194124167/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://krishnamohan.tech" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link to="/signup">Start Free</Link>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
