import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { getNicheById } from '@/data/projects';

const NichePage = () => {
  const { nicheId } = useParams();
  const navigate = useNavigate();
  const niche = getNicheById(nicheId || '');

  if (!niche) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Niche not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2">
              {niche.title}
            </h1>
            <p className="text-primary/80 text-xl mt-2">{niche.titleAmharic}</p>
            <p className="text-muted-foreground mt-6 text-lg">
              {niche.description}
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              {niche.projects.length} {niche.projects.length === 1 ? 'Project' : 'Projects'}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - 3 COLUMNS */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niche.projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  {/* Show first image or placeholder */}
                  <img
                    src={project.images[0] || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* For Posters: Show only image without title overlay */}
                  {niche.id === 'posters-flyers' ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{project.category}</p>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                </div>
                
                {/* Content - Only show for non-poster niches */}
                {niche.id !== 'posters-flyers' && (
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-xs rounded">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {niche.projects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-muted-foreground text-lg">No projects yet</div>
              <p className="text-muted-foreground mt-2">Projects will be added soon</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NichePage;