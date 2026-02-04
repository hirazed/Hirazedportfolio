// Project data organized by niche categories
export interface Project {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  tools: string[];
  goal: string;
  images: string[];
  featured?: boolean;
  date: string;
}

export interface Niche {
  id: string;
  title: string;
  titleAmharic: string;
  description: string;
  icon: string;
  projects: Project[];
}

export const niches: Niche[] = [
  {
    id: 'social-media',
    title: 'Social Media Design',
    titleAmharic: 'ሶሻል ሚዲያ ዲዛይን',
    description: 'Eye-catching social media graphics that drive engagement and build brand presence.',
    icon: 'share-2',
    projects: [
      {
        id: 'sm-1',
        title: 'Ethiopian Coffee Brand Campaign',
        category: 'Instagram Carousel',
        subCategory: 'carousel',
        description: 'A vibrant social media campaign for a premium Ethiopian coffee brand, featuring traditional patterns with modern aesthetics.',
        tools: ['Photoshop', 'Illustrator'],
        goal: 'Increase brand awareness and engagement by 40% through visually striking content.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'sm-2',
        title: 'Tech Startup Launch Posts',
        category: 'Instagram Posts',
        subCategory: 'post',
        description: 'Launch campaign for a fintech startup targeting young professionals.',
        tools: ['Photoshop', 'Figma'],
        goal: 'Create buzz and anticipation for product launch.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-02'
      },
      {
        id: 'sm-3',
        title: 'Restaurant Menu Highlights',
        category: 'Story Templates',
        subCategory: 'story',
        description: 'Interactive story templates showcasing daily specials and menu items.',
        tools: ['Photoshop', 'Canva'],
        goal: 'Drive foot traffic through appetizing food visuals.',
        images: ['/placeholder.svg'],
        date: '2023-12'
      },
      {
        id: 'sm-4',
        title: 'Fitness Brand Motivation Series',
        category: 'Quote Graphics',
        subCategory: 'post',
        description: 'Motivational quote series for a fitness brand.',
        tools: ['Illustrator', 'Photoshop'],
        goal: 'Build community engagement through shareable content.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-11'
      },
      {
        id: 'sm-5',
        title: 'E-commerce Product Showcase',
        category: 'Product Posts',
        subCategory: 'carousel',
        description: 'Clean product photography layouts for an online fashion store.',
        tools: ['Photoshop', 'Lightroom'],
        goal: 'Highlight product features and drive sales.',
        images: ['/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'sm-6',
        title: 'Music Festival Announcement',
        category: 'Event Graphics',
        subCategory: 'post',
        description: 'Bold announcement graphics for a local music festival.',
        tools: ['Illustrator', 'After Effects'],
        goal: 'Generate excitement and ticket sales.',
        images: ['/placeholder.svg'],
        date: '2023-10'
      }
    ]
  },
  {
    id: 'posters-flyers',
    title: 'Posters & Flyers',
    titleAmharic: 'ፖስተሮች እና ፍላየሮች',
    description: 'Bold, attention-grabbing posters and flyers that communicate your message effectively.',
    icon: 'image',
    projects: [
      {
        id: 'pf-1',
        title: 'Cultural Festival Poster',
        category: 'Event Poster',
        subCategory: 'event',
        description: 'A vibrant poster celebrating Ethiopian cultural heritage with traditional motifs.',
        tools: ['Photoshop', 'Illustrator'],
        goal: 'Attract attendees and celebrate cultural identity.',
        images: ['/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'pf-2',
        title: 'Movie Premiere Poster',
        category: 'Entertainment',
        subCategory: 'movie',
        description: 'Dramatic movie poster with dynamic composition and typography.',
        tools: ['Photoshop'],
        goal: 'Create anticipation for film release.',
        images: ['/placeholder.svg'],
        featured: true,
        date: '2023-12'
      },
      {
        id: 'pf-3',
        title: 'Charity Gala Invitation',
        category: 'Event Flyer',
        subCategory: 'event',
        description: 'Elegant invitation design for a charity fundraising event.',
        tools: ['Illustrator', 'InDesign'],
        goal: 'Convey elegance and encourage donations.',
        images: ['/placeholder.svg'],
        date: '2023-11'
      },
      {
        id: 'pf-4',
        title: 'Concert Series Posters',
        category: 'Music',
        subCategory: 'music',
        description: 'Series of concert posters for local artists.',
        tools: ['Photoshop', 'Illustrator'],
        goal: 'Build artist brand and sell tickets.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-10'
      },
      {
        id: 'pf-5',
        title: 'Product Launch Flyer',
        category: 'Commercial',
        subCategory: 'product',
        description: 'Eye-catching product launch flyer for retail distribution.',
        tools: ['Photoshop'],
        goal: 'Drive store visits and product awareness.',
        images: ['/placeholder.svg'],
        date: '2023-09'
      }
    ]
  },
  {
    id: 'marketing-graphics',
    title: 'Marketing Graphics',
    titleAmharic: 'ማርኬቲንግ ግራፊክስ',
    description: 'Strategic marketing visuals that convert viewers into customers.',
    icon: 'trending-up',
    projects: [
      {
        id: 'mg-1',
        title: 'Digital Ad Campaign',
        category: 'Display Ads',
        subCategory: 'ads',
        description: 'Multi-platform digital ad campaign for an e-commerce brand.',
        tools: ['Photoshop', 'Figma'],
        goal: 'Increase click-through rates and conversions.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-02'
      },
      {
        id: 'mg-2',
        title: 'Email Marketing Templates',
        category: 'Email Design',
        subCategory: 'email',
        description: 'Responsive email templates for promotional campaigns.',
        tools: ['Figma', 'Photoshop'],
        goal: 'Improve email open rates and engagement.',
        images: ['/placeholder.svg'],
        date: '2024-01'
      },
      {
        id: 'mg-3',
        title: 'Trade Show Banner',
        category: 'Large Format',
        subCategory: 'banner',
        description: 'Impactful trade show banners for a tech company.',
        tools: ['Illustrator', 'Photoshop'],
        goal: 'Attract booth visitors and generate leads.',
        images: ['/placeholder.svg'],
        featured: true,
        date: '2023-12'
      },
      {
        id: 'mg-4',
        title: 'Infographic Series',
        category: 'Content Marketing',
        subCategory: 'infographic',
        description: 'Educational infographics for a healthcare company.',
        tools: ['Illustrator', 'Photoshop'],
        goal: 'Simplify complex information and build trust.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-11'
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    titleAmharic: 'ብራንዲንግ',
    description: 'Complete brand identity systems that tell your unique story.',
    icon: 'award',
    projects: [
      {
        id: 'br-1',
        title: 'LUXE Streetwear',
        category: 'Streetwear Brand',
        subCategory: 'fashion',
        description: 'A bold streetwear brand identity combining urban aesthetics with luxury appeal. Includes logo, color palette, typography, packaging, and social media presence.',
        tools: ['Illustrator', 'Photoshop', 'InDesign'],
        goal: 'Create a distinctive brand that resonates with young urban consumers.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-02'
      },
      {
        id: 'br-2',
        title: 'Habesha Beans',
        category: 'Coffee Shop',
        subCategory: 'food',
        description: 'Artisanal coffee shop branding that celebrates Ethiopian coffee heritage with modern design sensibilities.',
        tools: ['Illustrator', 'Photoshop'],
        goal: 'Blend tradition with modernity to attract coffee enthusiasts.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'br-3',
        title: 'NexTech Solutions',
        category: 'Tech Startup',
        subCategory: 'tech',
        description: 'Clean, innovative branding for a B2B technology startup focusing on AI solutions.',
        tools: ['Figma', 'Illustrator'],
        goal: 'Convey innovation, trust, and technical expertise.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2023-12'
      },
      {
        id: 'br-4',
        title: 'Wellness Spa',
        category: 'Health & Wellness',
        subCategory: 'wellness',
        description: 'Serene and luxurious branding for a high-end wellness spa.',
        tools: ['Illustrator', 'Photoshop'],
        goal: 'Evoke relaxation and premium service.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-11'
      }
    ]
  },
  {
    id: 'photo-manipulation',
    title: 'Photo Manipulation',
    titleAmharic: 'ፎቶ ማኒፑሌሽን',
    description: 'Creative photo composites and surreal imagery that push visual boundaries.',
    icon: 'wand-2',
    projects: [
      {
        id: 'pm-1',
        title: 'Surreal Landscapes',
        category: 'Concept Art',
        subCategory: 'surreal',
        description: 'A series of surreal landscape compositions blending reality with imagination.',
        tools: ['Photoshop', 'Lightroom'],
        goal: 'Create dreamlike visuals for artistic expression.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'pm-2',
        title: 'Product Composite',
        category: 'Commercial',
        subCategory: 'commercial',
        description: 'High-end product composites for luxury watch brand.',
        tools: ['Photoshop'],
        goal: 'Showcase product in aspirational context.',
        images: ['/placeholder.svg'],
        featured: true,
        date: '2023-12'
      },
      {
        id: 'pm-3',
        title: 'Fantasy Portraits',
        category: 'Portrait Art',
        subCategory: 'portrait',
        description: 'Fantasy-themed portrait manipulations with magical elements.',
        tools: ['Photoshop', 'Lightroom'],
        goal: 'Transform portraits into fantastical artwork.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-11'
      },
      {
        id: 'pm-4',
        title: 'Architectural Visualization',
        category: 'Architectural',
        subCategory: 'architecture',
        description: 'Photo manipulation for architectural concept visualization.',
        tools: ['Photoshop', '3ds Max'],
        goal: 'Visualize architectural concepts before construction.',
        images: ['/placeholder.svg'],
        date: '2023-10'
      }
    ]
  },
  {
    id: 'ui-design',
    title: 'UI / Web Design',
    titleAmharic: 'UI / ዌብ ዲዛይን',
    description: 'User-centered interface designs that combine aesthetics with functionality.',
    icon: 'layout',
    projects: [
      {
        id: 'ui-1',
        title: 'E-commerce Mobile App',
        category: 'Mobile App',
        subCategory: 'mobile',
        description: 'Complete UI design for a fashion e-commerce mobile application.',
        tools: ['Figma', 'Photoshop'],
        goal: 'Create seamless shopping experience on mobile.',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-02'
      },
      {
        id: 'ui-2',
        title: 'SaaS Dashboard',
        category: 'Web Application',
        subCategory: 'webapp',
        description: 'Analytics dashboard design for a SaaS platform.',
        tools: ['Figma'],
        goal: 'Present complex data in an intuitive interface.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        featured: true,
        date: '2024-01'
      },
      {
        id: 'ui-3',
        title: 'Restaurant Website',
        category: 'Website',
        subCategory: 'website',
        description: 'Modern website design for an upscale restaurant.',
        tools: ['Figma', 'Photoshop'],
        goal: 'Showcase menu and ambiance, drive reservations.',
        images: ['/placeholder.svg'],
        date: '2023-12'
      },
      {
        id: 'ui-4',
        title: 'Fitness App UI',
        category: 'Mobile App',
        subCategory: 'mobile',
        description: 'Workout tracking app with gamification elements.',
        tools: ['Figma'],
        goal: 'Motivate users through engaging interface design.',
        images: ['/placeholder.svg', '/placeholder.svg'],
        date: '2023-11'
      },
      {
        id: 'ui-5',
        title: 'Landing Page Templates',
        category: 'Website',
        subCategory: 'website',
        description: 'Collection of conversion-optimized landing page designs.',
        tools: ['Figma', 'Webflow'],
        goal: 'Maximize conversion rates through strategic design.',
        images: ['/placeholder.svg'],
        date: '2023-10'
      }
    ]
  }
];

export const getFeaturedProjects = (): Project[] => {
  return niches.flatMap(niche => 
    niche.projects.filter(project => project.featured)
  ).slice(0, 6);
};

export const getNicheById = (id: string): Niche | undefined => {
  return niches.find(niche => niche.id === id);
};

export const getProjectById = (projectId: string): { project: Project; niche: Niche } | undefined => {
  for (const niche of niches) {
    const project = niche.projects.find(p => p.id === projectId);
    if (project) {
      return { project, niche };
    }
  }
  return undefined;
};

export const getAllProjects = (): Project[] => {
  return niches.flatMap(niche => niche.projects);
};
