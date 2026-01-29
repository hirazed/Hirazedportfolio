import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const portfolioItems = [
  {
    id: '1',
    image: portfolio1,
    title: 'Brand Identity',
    category: 'Branding',
  },
  {
    id: '2',
    image: portfolio2,
    title: 'Digital Art',
    category: 'Digital',
  },
  {
    id: '3',
    image: portfolio3,
    title: 'Logo Design',
    category: 'Branding',
  },
  {
    id: '4',
    image: portfolio4,
    title: 'Social Media',
    category: 'Digital',
  },
  {
    id: '5',
    image: portfolio5,
    title: 'Packaging',
    category: 'Print',
  },
  {
    id: '6',
    image: portfolio6,
    title: 'Poster Design',
    category: 'Print',
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item.id)}
              className={`portfolio-card group rounded-2xl overflow-hidden aspect-square cursor-pointer ${
                isVisible ? 'animate-scale-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="portfolio-card-overlay flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium">{item.category}</span>
                <h3 className="text-foreground text-xl font-bold mt-1">{item.title}</h3>
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/project/1')}
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
