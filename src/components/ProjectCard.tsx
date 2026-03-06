// components/ProjectCard.tsx
import { useState } from 'react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index?: number;
  isVisible?: boolean;
}

const ProjectCard = ({ project, onClick, index = 0, isVisible = true }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
      }`}
      style={{ 
        animationFillMode: 'forwards', 
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image - Use project.image (thumbnail) */}
      <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
            {project.category}
          </span>
          <h3 className={`text-lg font-bold text-foreground transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-4'
          }`}>
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
          <div className={`flex gap-2 mt-2 transition-all duration-300 delay-100 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {project.tools.slice(0, 2).map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-primary text-primary-foreground">
          Featured
        </div>
      )}
    </div>
  );
};

export default ProjectCard;