import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const portfolioItems = [
  // Company/Organization Projects
  {
    id: 'gdg-aau',
    image: '/logos/CC1.png', // CC1 for GDG AAU
    title: 'Google Developer Groups AAU',
    category: 'Branding',
    description: 'Event branding, social media management, and community graphics for university tech community',
    type: 'company'
  },
  {
    id: 'alta-counseling',
    image: '/logos/CC2.png', // CC2 for Alta Counseling
    title: 'Alta Counseling Ethiopia',
    category: 'Branding',
    description: 'Mental health awareness campaigns, promotional visuals, and complete brand identity',
    type: 'company'
  },
  {
    id: 'nexus-tutorial',
    image: '/logos/CC3.png', // CC3 for Nexus Tutorial
    title: 'Nexus Tutorial',
    category: 'Digital Design',
    description: 'Tech tutorial graphics, LinkedIn content, and educational platform design',
    type: 'company'
  },
  {
    id: 'ambalay-maps',
    image: '/logos/CC4.png', // CC4 for Ambalay Maps
    title: 'Ambalay Maps',
    category: 'Digital Design',
    description: 'UI/UX design, poster designs, and digital visuals for Ethiopia Map API',
    type: 'company'
  },
  {
    id: '3d-lab',
    image: '/logos/CC5.png', // CC5 for The 3D Lab
    title: 'The 3D Lab',
    category: '3D Design',
    description: '3D modeling, photorealistic visualizations, and creative design projects',
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
    id: 'mint-projects',
    image: '/logos/CC7.png', // CC7 for MiNT Projects
    title: 'MiNT Projects',
    category: 'Branding',
    description: 'Creative design projects and brand collaborations with MiNT',
    type: 'company'
  },
  // Personal Projects
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
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);
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

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === filter);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  useEffect(() => {
    setVisibleCount(8);
  }, [filter]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            All Projects
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore my complete collection of design work by organization
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            All Projects ({portfolioItems.length})
          </button>
          <button
            onClick={() => setFilter('company')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'company'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            Organizations ({portfolioItems.filter(i => i.type === 'company').length})
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'personal'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            Personal Projects ({portfolioItems.filter(i => i.type === 'personal').length})
          </button>
        </div>

        {/* Portfolio Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, index) => (
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
              <div className="portfolio-card-overlay flex flex-col justify-end p-4 md:p-6">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-primary text-xs md:text-sm font-medium">{item.category}</span>
                  {item.type === 'personal' && (
                    <span className="bg-primary/20 text-primary text-[10px] md:text-xs px-2 py-1 rounded-full">
                      Personal
                    </span>
                  )}
                </div>
                <h3 className="text-foreground text-sm md:text-lg font-bold mt-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-foreground/80 text-xs md:text-sm mt-2 line-clamp-2 hidden md:block">
                  {item.description}
                </p>
                <span className="mt-2 md:mt-4 inline-flex items-center gap-1 md:gap-2 text-foreground/80 group-hover:text-primary transition-colors text-xs md:text-sm">
                  View Projects
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {visibleItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Load More Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;