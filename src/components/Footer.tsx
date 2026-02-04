import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Dribbble, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { niches } from '@/data/projects';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">HZ</span>
              </div>
              <span className="text-foreground font-semibold">
                HIRUY <span className="text-primary">DESIGN</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Designing visual stories that connect and convert. Based in Addis Ababa, Ethiopia.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
                { icon: <Instagram className="w-4 h-4" />, href: '#' },
                { icon: <Dribbble className="w-4 h-4" />, href: '#' },
                { icon: <Globe className="w-4 h-4" />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : `/#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {niches.slice(0, 5).map((niche) => (
                <li key={niche.id}>
                  <Link
                    to={`/niche/${niche.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {niche.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                hiruy@example.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +251 91 234 5678
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hiruy Zerihun. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Crafted with passion</span>
            <span className="text-primary">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
