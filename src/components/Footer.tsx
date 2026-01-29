const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-foreground font-medium">nigus_graphics</span>
            <a href="https://www.nigusgraphics.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              www.nigusgraphics.com
            </a>
          </div>

          {/* Center - Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nigus Graphics. All rights reserved.
          </p>

          {/* Right Side - Agency/Credit Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Designed by</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs font-bold">NG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
