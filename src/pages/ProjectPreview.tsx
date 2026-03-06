import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectById, getAllProjects, Project } from '@/data/projects';

const ProjectPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentProject = getProjectById(id || '');
    setProject(currentProject || null);
    
    const projects = getAllProjects();
    setAllProjects(projects);
    
    if (currentProject) {
      const index = projects.findIndex(p => p.id === currentProject.id);
      setCurrentIndex(index);
      
      // Preload gallery images
      currentProject.images.forEach(img => {
        const image = new Image();
        image.src = img;
        image.onload = () => {
          setLoadedImages(prev => ({ ...prev, [img]: true }));
        };
      });
    }
  }, [id]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/project/${allProjects[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < allProjects.length - 1) {
      navigate(`/project/${allProjects[currentIndex + 1].id}`);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-foreground hover:text-primary hover:border-primary transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Next/Previous Navigation */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
          className={`p-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-foreground transition-all duration-300 ${
            currentIndex <= 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:text-primary hover:border-primary'
          }`}
          aria-label="Previous project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= allProjects.length - 1}
          className={`p-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-foreground transition-all duration-300 ${
            currentIndex >= allProjects.length - 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:text-primary hover:border-primary'
          }`}
          aria-label="Next project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Preview Modal - Same Page */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            onClick={() => setPreviewImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={previewImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Main Project Card */}
      <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
        <div className="bg-card rounded-3xl border border-border shadow-2xl shadow-primary/5 overflow-hidden">
          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden bg-black/5 flex items-center justify-center p-4">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
            
            {/* Category Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-primary font-medium">{project.client}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {project.title}
              </h1>
            </div>

            {/* Goal Section */}
            {project.goal && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Project Goal
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.goal}
                </p>
              </div>
            )}

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Overview
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tools */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Tools & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Project Gallery ({project.images.length} images)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden border border-border cursor-pointer group relative aspect-square bg-secondary/20"
                      onClick={() => setPreviewImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium bg-black/50 px-3 py-1.5 rounded-full text-sm">
                          Quick Preview
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </button>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Start a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Project Date */}
            {project.date && (
              <div className="text-sm text-muted-foreground border-t border-border pt-6">
                Completed: {new Date(project.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;