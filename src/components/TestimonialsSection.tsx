import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Binyam Dele',
    role: 'Executive Officer at Ambalay Maps',
    content: 'Working with Hiruy Zerihun at Ambalay Maps was a great experience. He created compelling visuals that clearly showcased our map features and geo-spatial solutions, turning complex functionalities into engaging, easy-to-understand content. His creativity, attention to detail, and ability to align design with product goals significantly strengthened our digital presence. Hiruy delivers with precision and professionalism, making him a strong asset to any forward-thinking team.',
    contentAmharic: '',
  },
  {
    id: 2,
    name: 'Tsedeke Techane',
    role: 'CEO at Nexus Tutorial',
    content: 'Working with Hiruy at Nexus Tutorial as our Graphic Designer and Social Media Manager, he consistently delivers creative designs and manages campaigns effectively. Highly recommended for his expertise and reliability.',
    contentAmharic: '',
  },
  {
    id: 3,
    name: 'Kalkidan Semere',
    role: 'Former GDG AAU Lead',
    content: 'I had the pleasure of working closely with Hiruy Zerihun at Google Developers Group, where he served as Social Media Team Leader and Manager while I was the Community Organizer. Hiruy is an exceptionally creative, dedicated, and fast-learning professional who quickly understands expectations and consistently delivers outstanding results. He effectively led the social media and content strategy, managed the team with strong leadership, and played a vital role in strengthening the Developers community. His professionalism, initiative, and ability to execute ideas with excellence make him a truly valuable person to any organization.',
    contentAmharic: '',
  },
  {
    id: 4,
    name: 'Wondwossen Teshome',
    role: 'Executive Officer at Alta Counselling',
    content: 'Hiruy Zerihun contributed as a Visual Designer at Alta Counseling, creating engaging visuals that communicated psychological insights and motivational messages effectively. His ability to turn meaningful ideas into clear, impactful designs helped make our content more relatable and engaging for our audience.',
    contentAmharic: '',
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials with very slow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds - very slow scroll

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Clients Say
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Hear from the businesses and brands I've helped grow
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-primary/10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content with fade transition */}
            <div className="relative z-10 text-center space-y-6">
              <div key={activeIndex} className="animate-fade-in">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                
                {testimonials[activeIndex].contentAmharic && (
                  <p className="text-primary/70 text-sm mt-4">
                    {testimonials[activeIndex].contentAmharic}
                  </p>
                )}
                
                <div className="pt-6">
                  <p className="text-foreground font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Slow scroll indicator (optional) */}
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/50">
              {activeIndex + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;