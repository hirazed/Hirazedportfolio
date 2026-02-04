import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const projects = [
  {
    id: '1',
    image: portfolio1,
    title: 'Premium Brand Package',
    titleAmharic: 'ፕሪሚየም ብራንድ ፓኬጅ',
    description: 'Complete brand identity for a luxury fashion brand',
    category: 'Branding',
  },
  {
    id: '2',
    image: portfolio2,
    title: 'Digital Campaign',
    titleAmharic: 'ዲጂታል ካምፔይን',
    description: 'Social media and digital marketing materials',
    category: 'Digital',
  },
  {
    id: '3',
    image: portfolio3,
    title: 'Logo Collection',
    titleAmharic: 'ሎጎ ስብስብ',
    description: 'Modern logo designs for various clients',
    category: 'Branding',
  },
];

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Projects</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Hand-picked projects that showcase creative excellence
          </p>
        </div>

        {/* Projects Grid - 3 per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/80 text-sm">{project.titleAmharic}</p>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-1 text-foreground/70 group-hover:text-primary transition-colors pt-1 text-sm">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
