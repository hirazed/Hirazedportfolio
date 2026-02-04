import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Image, TrendingUp, Award, Wand2, Layout } from 'lucide-react';
import { getNicheById, Project } from '@/data/projects';
import FilterBar from '@/components/FilterBar';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ReactNode> = {
  'share-2': <Share2 className="w-8 h-8" />,
  'image': <Image className="w-8 h-8" />,
  'trending-up': <TrendingUp className="w-8 h-8" />,
  'award': <Award className="w-8 h-8" />,
  'wand-2': <Wand2 className="w-8 h-8" />,
  'layout': <Layout className="w-8 h-8" />,
};

const NichePage = () => {
  const { nicheId } = useParams<{ nicheId: string }>();
  const navigate = useNavigate();
  const niche = getNicheById(nicheId || '');
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'featured'>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const categories = useMemo(() => {
    if (!niche) return [];
    const uniqueCategories = [...new Set(niche.projects.map(p => p.subCategory || p.category))];
    return uniqueCategories;
  }, [niche]);

  const filteredProjects = useMemo(() => {
    if (!niche) return [];
    
    let projects = [...niche.projects];
    
    // Filter by category
    if (activeFilter !== 'all') {
      projects = projects.filter(p => 
        p.subCategory === activeFilter || p.category === activeFilter
      );
    }
    
    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tools.some(t => t.toLowerCase().includes(query))
      );
    }
    
    // Sort
    if (sortBy === 'newest') {
      projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    return projects;
  }, [niche, activeFilter, sortBy, searchQuery]);

  if (!niche) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        ref={headerRef as React.RefObject<HTMLElement>}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 ${
              headerVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Title */}
          <div className={`flex items-start gap-6 ${
            headerVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
          }`} style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
              {iconMap[niche.icon]}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                {niche.title}
              </h1>
              <p className="text-primary/80 mt-1">{niche.titleAmharic}</p>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                {niche.description}
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                {niche.projects.length} Projects
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <main className="container mx-auto px-6 lg:px-12 pb-20">
        <FilterBar
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'masonry' 
              ? 'columns-1 md:columns-2 lg:columns-3 space-y-6' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={true}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default NichePage;
