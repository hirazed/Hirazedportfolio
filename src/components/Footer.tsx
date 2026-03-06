import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { niches } from '@/data/projects';

// Import your logo and social media icons
import logo7 from '@/assets/logos/logo7.png';
import behanceIcon from '@/assets/logos/logo8.png'; // Behance
import linkedinIcon from '@/assets/logos/logo9.png'; // LinkedIn
import telegramIcon from '@/assets/logos/logo10.png'; // Telegram
import emailIcon from '@/assets/logos/logo11.png'; // Email

const Footer = () => {
  // Set last updated date
  const lastUpdated = "February 2026";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src={logo7}
                  alt="Hirazed Design Logo"
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <span className="text-foreground font-semibold text-lg">
                HIRAZED <span className="text-primary">DESIGN</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Designing visual stories that connect and convert. Based in Addis Ababa, Ethiopia.
            </p>
            <div className="flex gap-4">
              {/* Updated Social Media Links with LARGER icons */}
              {[
                { 
                  icon: behanceIcon, 
                  href: 'https://www.behance.net/hiruyzerihun',
                  label: 'Behance'
                },
                { 
                  icon: linkedinIcon, 
                  href: 'https://www.linkedin.com/in/hiruy-zerihun250997/',
                  label: 'LinkedIn'
                },
                { 
                  icon: telegramIcon, 
                  href: 'https://t.me/Hirazed',
                  label: 'Telegram'
                },
                { 
                  icon: emailIcon, 
                  href: 'mailto:Hirazed97@gmail.com',
                  label: 'Email'
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/30 hover:bg-primary/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  title={social.label}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-6 h-6 object-contain"
                  />
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
                hirazed97@gmail.com
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
            <span className="text-xs text-muted-foreground">
              Last updated: <span className="text-primary font-medium">{lastUpdated}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;