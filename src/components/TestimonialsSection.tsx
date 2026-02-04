import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Abebe Kebede',
    role: 'CEO, Tech Startup',
    content: 'Nigus Graphics transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations.',
    contentAmharic: 'ኒጉስ ግራፊክስ የብራንድ ማንነታችንን ሙሉ በሙሉ ቀይሮታል።',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    role: 'Marketing Director',
    content: 'Working with Nigus was a fantastic experience. Professional, creative, and always delivers on time.',
    contentAmharic: 'ከኒጉስ ጋር መስራት አስደናቂ ተሞክሮ ነበር።',
  },
  {
    id: 3,
    name: 'Michael Tesfaye',
    role: 'Founder, Restaurant Chain',
    content: 'The packaging design helped us stand out in a competitive market. Highly recommend their services!',
    contentAmharic: 'የፓኬጂንግ ዲዛይኑ በተወዳዳሪ ገበያ ውስጥ እንድንታወቅ አግዞናል።',
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Clients Say
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Hear from the businesses and brands I've helped grow
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-3xl mx-auto ${
            isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
          }`}
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>
              <p className="text-primary/80 text-sm">
                {testimonials[activeIndex].contentAmharic}
              </p>
              <div className="pt-4">
                <p className="text-foreground font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
