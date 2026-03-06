import { useEffect, useRef, useState } from 'react';
import designerPortrait from '@/assets/designer-portrait.jpg';


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-left opacity-0' : 'opacity-0'}`}
            style={{ animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img
                  src={designerPortrait}
                  alt="Nigus Graphics Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/40 rounded-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`space-y-8 ${isVisible ? 'animate-fade-in-right opacity-0' : 'opacity-0'}`}
            style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase">About Me</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Visual Designer & Creative Thinker
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a Mechanical Engineering student and graphic designer based in Addis Ababa, creating meaningful visuals through digital design and visual storytelling—while also working with SolidWorks and basic AutoCAD.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
             I combine technical thinking with creativity to craft modern, purpose-driven designs that turn ideas into impactful visual experiences.
            </p>

          
                        </div>
          </div>
        </div>
    
    </section>
  );
};

export default AboutSection;
