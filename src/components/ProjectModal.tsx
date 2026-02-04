import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex]);

  if (!project || !isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md animate-fade-in" />
      
      {/* Modal Content */}
      <div 
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-secondary/50">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-150 cursor-zoom-out' : ''
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          
          {/* Zoom Indicator */}
          <button 
            className="absolute bottom-4 right-4 p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-primary w-6' : 'bg-foreground/50 hover:bg-foreground'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                {project.title}
              </h2>
            </div>
            <span className="text-muted-foreground text-sm">
              {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Goal */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              Project Goal
            </h3>
            <p className="text-muted-foreground">{project.goal}</p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
