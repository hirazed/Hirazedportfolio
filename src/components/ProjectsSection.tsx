import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Featured projects only - Ambalay Maps, Solidworks, Personal Posters
const portfolioItems = [
  {
    id: 'ambalay-maps',
    image: '/logos/CC4.png', // CC4 for Ambalay Maps
    title: 'Ambalay Maps',
    category: 'Digital Design',
    description: 'Poster designs and digital visuals for Ethiopia Map API',
    type: 'company'
  },
  {
    id: 'solidworks-projects',
    image: '/logos/CC6.png', // CC6 for Solidworks Projects
    title: 'Solidworks Engineering Projects',
    category: '3D Design',
    description: 'Technical 3D CAD modeling, mechanical designs, and engineering visualizations',
    type: 'company'
  },
  {
    id: 'personal-posters',
    image: '/logos/PP1.png',
    title: 'Personal Poster Design Collection',
    category: 'Graphic Design',
    description: 'Independent poster designs, creative experiments, and typography explorations',
    type: 'personal'
  }
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  // Preload images for faster loading
  useEffect(() => {
    portfolioItems.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [item.id]: true }));
      };
    });
  }, []);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Recent Works
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore my latest design projects and creative works
          </p>
        </div>

        {/* Portfolio Grid - 3 columns for featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item.id)}
              className={`portfolio-card group rounded-2xl overflow-hidden aspect-square cursor-pointer ${
                isVisible ? 'animate-scale-in opacity-0' : 'opacity-0'
              }`}
              style={{ 
                animationFillMode: 'forwards', 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative w-full h-full bg-secondary/10">
                {!imagesLoaded[item.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
                    imagesLoaded[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="portfolio-card-overlay flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary text-sm font-medium">{item.category}</span>
                  {item.type === 'personal' && (
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                      Personal
                    </span>
                  )}
                </div>
                <h3 className="text-foreground text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-foreground/80 text-sm mt-2 line-clamp-2">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-foreground/80 group-hover:text-primary transition-colors">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Fixed to navigate to the main portfolio section */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              // Navigate to home page and scroll to the main portfolio section
              navigate('/');
              // Small delay to ensure navigation completes before scrolling
              setTimeout(() => {
                const mainPortfolioSection = document.getElementById('all-projects');
                if (mainPortfolioSection) {
                  mainPortfolioSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // If all-projects doesn't exist, scroll to the regular portfolio section
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;