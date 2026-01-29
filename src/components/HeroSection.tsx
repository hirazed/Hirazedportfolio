import { useState, useEffect } from 'react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const heroSlides = [
  {
    id: 1,
    image: heroSlide1,
    titleAmharic: 'የግራፊክ ዲዛይን አገልግሎት',
    titleEnglish: 'Professional Graphic Design',
    subtitle: 'Creating stunning visuals that captivate and inspire',
  },
  {
    id: 2,
    image: heroSlide2,
    titleAmharic: 'ብራንድ ማንነት ዲዛይን',
    titleEnglish: 'Brand Identity Design',
    subtitle: 'Building memorable brands that stand out',
  },
  {
    id: 3,
    image: heroSlide3,
    titleAmharic: 'ዲጂታል አርት ፈጠራ',
    titleEnglish: 'Digital Art Creation',
    subtitle: 'Transforming ideas into visual masterpieces',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.titleEnglish}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-2xl">
          <div
            key={currentSlide}
            className="space-y-6"
          >
            {/* Amharic Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {heroSlides[currentSlide].titleAmharic}
            </h1>

            {/* English Subtitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {heroSlides[currentSlide].titleEnglish}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                View Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full decorative-circle animate-pulse-glow" />

      {/* Slider Navigation Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
