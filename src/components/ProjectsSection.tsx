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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Hand-picked projects that showcase creative excellence
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center ${
                isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div
                  onClick={() => handleProjectClick(project.id)}
                  className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-primary/80">{project.titleAmharic}</p>
                <p className="text-muted-foreground text-lg">{project.description}</p>
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors pt-2"
                >
                  View Project Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
