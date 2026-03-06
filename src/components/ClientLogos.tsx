import { useEffect, useRef, useState } from 'react';

// Import your logo images
import logo2 from '@/assets/logos/logo2.png';
import logo3 from '@/assets/logos/logo3.png';
import logo4 from '@/assets/logos/logo4.png';
import logo5 from '@/assets/logos/logo5.png';
import logo6 from '@/assets/logos/logo6.png';
import logo1 from '@/assets/logos/logo1.png';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { 
      id: 2, 
      image: logo2, 
      name: 'Google Developer Groups AAU',
      scale: 'scale-125',
    },
    { 
      id: 3, 
      image: logo3, 
      name: 'Ambalay Maps',
      scale: 'scale-100',
    },
    { 
      id: 4, 
      image: logo4, 
      name: 'Mint',
      scale: 'scale-120',
    },
    { 
      id: 5, 
      image: logo5, 
      name: 'Nexus Tutorials',
      scale: 'scale-110',
    },
    { 
      id: 6, 
      image: logo6, 
      name: 'The 3D Lab',
      scale: 'scale-105',
    },
    { 
      id: 1, 
      image: logo1, 
      name: 'Alta Counsiling',
      scale: 'scale-115',
    },
  ];

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

  const duplicatedLogos = [...logos, ...logos];

  const handleLogoHover = (isHovering: boolean) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (isHovering) {
        container.style.animationPlayState = 'paused';
      } else {
        container.style.animationPlayState = 'running';
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 overflow-hidden"> {/* REDUCED: py-20 to py-12 */}
      <div className="container mx-auto px-6 lg:px-12 mb-10"> {/* REDUCED: mb-16 to mb-10 */}
        <div
          className={`text-center ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Trusted By Leading Organizations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Companies & Institutions I've Worked With
          </h2>
        </div>
      </div>

      {/* Scrolling Logo Strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className={`flex items-center gap-20 animate-scroll`}
          style={{ width: 'fit-content' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer transition-all duration-500"
              onMouseEnter={() => handleLogoHover(true)}
              onMouseLeave={() => handleLogoHover(false)}
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-white/5">
                <div className="relative w-48 h-32 flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`${logo.scale} object-contain transition-all duration-500 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110`}
                    style={{ 
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </div>
                
                <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-2">
                  <div className="text-sm font-medium text-foreground/80">{logo.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REMOVED the dots indicator container entirely to eliminate space */}
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        .scale-100 { transform: scale(1); }
        .scale-110 { transform: scale(1.1); }
        .scale-115 { transform: scale(1.15); }
        .scale-120 { transform: scale(1.2); }
        .scale-125 { transform: scale(1.25); }
        .scale-130 { transform: scale(1.3); }
      `}</style>
    </section>
  );
};

export default ClientLogos;