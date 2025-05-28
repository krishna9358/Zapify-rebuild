
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { LiveWorkflowDemo } from "@/components/LiveWorkflowDemo";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  Globe, 
  Mail, 
  Smartphone, 
  Database, 
  Clock,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Home = () => {



  const stats = [
    { number: "500+", label: "Integrations", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "10M+", label: "Workflows", icon: Zap },
    { number: "50K+", label: "Developers", icon: Code }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute workflows in milliseconds with our optimized infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance"
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Built by developers, for developers with extensive APIs and SDKs"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 counter">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Live Workflow Demo */}
      <LiveWorkflowDemo />

      {/* Integrations Showcase */}
      <IntegrationsShowcase />

      {/* Feature Cards Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Entangled?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for scale, designed for simplicity, powered by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-20 border-t border-gray-800">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Trusted by Developers Worldwide
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass-card border-gray-800 bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Entangled has transformed how we handle automation. The AI-powered workflows are incredible."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-400 font-semibold">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Alex Chen</div>
                      <div className="text-sm text-gray-400">Senior Developer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl border border-emerald-500/20 p-12 glass-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and teams using Entangled to build intelligent workflows and AI-powered automations.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
                <span className="text-gray-400 ml-2">4.9/5 from 1000+ reviews</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 group" asChild>
                  <Link to="/signup">
                    Start Building Today
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800" asChild>
                  <Link to="/contact">
                    Talk to Sales
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
