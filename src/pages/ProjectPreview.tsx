import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const projectsData = [
  {
    id: '1',
    image: portfolio1,
    title: 'Brand Identity',
    titleAmharic: 'ብራንድ ማንነት',
    client: 'Premium Fashion Co.',
    category: 'Branding',
    description: 'Complete brand identity package including logo design, color palette, typography system, and comprehensive brand guidelines. This project involved extensive research into the luxury fashion market to create a distinctive visual language that resonates with the target audience.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    gallery: [portfolio1, portfolio2],
  },
  {
    id: '2',
    image: portfolio2,
    title: 'Digital Art',
    titleAmharic: 'ዲጂታል አርት',
    client: 'Tech Innovation Labs',
    category: 'Digital',
    description: 'Abstract digital artwork created for a technology company\'s marketing campaign. The vibrant neon colors and geometric shapes represent innovation, creativity, and forward-thinking vision.',
    tools: ['Procreate', 'Adobe Photoshop', 'After Effects', 'Blender'],
    gallery: [portfolio2, portfolio3],
  },
  {
    id: '3',
    image: portfolio3,
    title: 'Logo Design',
    titleAmharic: 'ሎጎ ዲዛይን',
    client: 'Lainlae Studios',
    category: 'Branding',
    description: 'Minimalist logo design featuring clean typography and abstract mark. The design emphasizes simplicity and memorability while conveying professionalism and modern aesthetics.',
    tools: ['Adobe Illustrator', 'Figma', 'Sketch'],
    gallery: [portfolio3, portfolio1],
  },
  {
    id: '4',
    image: portfolio4,
    title: 'Social Media',
    titleAmharic: 'ሶሻል ሚዲያ',
    client: 'Digital Marketing Agency',
    category: 'Digital',
    description: 'Comprehensive social media graphics package including Instagram posts, stories, and carousel templates. Designed to increase engagement and maintain brand consistency across platforms.',
    tools: ['Canva Pro', 'Adobe Photoshop', 'Illustrator', 'After Effects'],
    gallery: [portfolio4, portfolio2],
  },
  {
    id: '5',
    image: portfolio5,
    title: 'Packaging',
    titleAmharic: 'ፓኬጂንግ',
    client: 'Sendbly Premium',
    category: 'Print',
    description: 'Luxury product packaging design featuring premium materials and elegant finishing. The dark theme with gold accents creates a sophisticated unboxing experience for customers.',
    tools: ['Adobe Illustrator', 'Dimension', 'Photoshop', 'InDesign'],
    gallery: [portfolio5, portfolio6],
  },
  {
    id: '6',
    image: portfolio6,
    title: 'Poster Design',
    titleAmharic: 'ፖስተር ዲዛይን',
    client: 'Music Festival Ethiopia',
    category: 'Print',
    description: 'Event poster design featuring bold typography and vibrant colors. Created to capture attention and convey the energy of a live music festival experience.',
    tools: ['Adobe Photoshop', 'Illustrator', 'InDesign'],
    gallery: [portfolio6, portfolio4],
  },
];

const ProjectPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    // Scroll to top when opening project
    window.scrollTo(0, 0);
  }, []);

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
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-foreground hover:text-primary hover:border-primary transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Floating Project Card */}
      <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
        <div className="bg-card rounded-3xl border border-border shadow-2xl shadow-primary/5 overflow-hidden">
          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
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
              <p className="text-muted-foreground text-lg">{project.titleAmharic}</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>

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
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Project Gallery
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-border"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

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
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Start a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
