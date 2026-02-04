import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed', labelAmharic: 'የተጠናቀቁ ፕሮጀክቶች' },
  { value: 50, suffix: '+', label: 'Happy Clients', labelAmharic: 'ደስተኛ ደንበኞች' },
  { value: 5, suffix: '+', label: 'Years Experience', labelAmharic: 'ዓመታት ልምድ' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', labelAmharic: 'የደንበኛ እርካታ' },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((stat) => Math.floor(stat.value * easeOutQuart)));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(stats.map((stat) => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center space-y-2 ${
                isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                {counts[index]}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-foreground font-semibold text-sm md:text-base">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {stat.labelAmharic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
