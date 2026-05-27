import { Link } from "react-router-dom";
import { Mail, MessageSquare, Share2, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              PORTFOLIO<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              © 2024 Design Studio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Twitter">
              <MessageSquare size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Instagram">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;