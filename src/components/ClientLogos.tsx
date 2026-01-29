import { useEffect, useRef, useState } from 'react';

// Client logos - using SVG placeholders that will be styled monochromatically
const clients = [
  { name: 'TechCorp', id: 1 },
  { name: 'Innovate', id: 2 },
  { name: 'StartupX', id: 3 },
  { name: 'DesignHub', id: 4 },
  { name: 'BrandCo', id: 5 },
  { name: 'MediaPro', id: 6 },
  { name: 'CreativeAI', id: 7 },
  { name: 'GlobalTech', id: 8 },
];

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate logos for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        <div
          className={`text-center ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase">Trusted By</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Worked With
          </h2>
        </div>
      </div>

      {/* Scrolling Logo Strip */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div
          className={`flex items-center gap-16 ${isPaused ? '' : 'animate-scroll'}`}
          style={{
            width: 'fit-content',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer transition-all duration-300"
            >
              {/* Logo Placeholder - Styled as monochrome text logos */}
              <div className="w-40 h-16 flex items-center justify-center rounded-lg border border-border/50 bg-secondary/30 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-secondary/50">
                <span className="text-xl font-bold text-muted-foreground/60 group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
