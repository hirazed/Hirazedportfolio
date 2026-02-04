import { useNavigate } from 'react-router-dom';
import { Share2, Image, TrendingUp, Award, Wand2, Layout, ArrowRight } from 'lucide-react';
import { niches } from '@/data/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ReactNode> = {
  'share-2': <Share2 className="w-10 h-10" />,
  'image': <Image className="w-10 h-10" />,
  'trending-up': <TrendingUp className="w-10 h-10" />,
  'award': <Award className="w-10 h-10" />,
  'wand-2': <Wand2 className="w-10 h-10" />,
  'layout': <Layout className="w-10 h-10" />,
};

const NicheCards = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What I Offer
          </h2>
          <p className="text-primary/80 mt-2">ምን አቀርባለሁ</p>
          <p className="text-muted-foreground mt-4 text-lg">
            Explore my specialized design services across different creative niches
          </p>
        </div>

        {/* Niche Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, index) => (
            <div
              key={niche.id}
              onClick={() => navigate(`/niche/${niche.id}`)}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer overflow-hidden ${
                isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[niche.icon]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {niche.title}
                </h3>
                <p className="text-primary/80 text-sm mb-3">{niche.titleAmharic}</p>
                <p className="text-muted-foreground line-clamp-2">{niche.description}</p>
                
                {/* Project Count & Arrow */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {niche.projects.length} Projects
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheCards;
