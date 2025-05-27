
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Entangled
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              The modern workflow automation platform that connects your apps and automates your work.
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <div className="space-y-2">
              <Link to="/dashboard" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Dashboard
              </Link>
              <Link to="/workflows" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Workflows
              </Link>
              <Link to="/integrations" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Integrations
              </Link>
              <Link to="/templates" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Templates
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/docs" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Documentation
              </Link>
              <Link to="/help" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Help Center
              </Link>
              <Link to="/community" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Community
              </Link>
              <Link to="/status" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Entangled. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="text-gray-400 hover:text-white text-sm transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
