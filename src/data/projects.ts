export interface Project {
  id: string;
  image: string; // Thumbnail image
  title: string;
  client: string;
  category: string;
  description: string;
  tools: string[];
  images: string[]; // Gallery images
  goal: string;
  featured?: boolean;
  date: string;
  type: 'company' | 'personal';
}

export interface Niche {
  id: string;
  title: string;
  description: string;
  icon: string;
  projects: Project[];
}

// Helper function to generate image paths from public folder
const generateImages = (prefix: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `/logos/${prefix}${i + 1}.png`);
};

// Additional tools for random selection
const additionalTools = [
  'Affinity Designer',
  'Affinity Photo',
  'Adobe Express',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe After Effects',
  'Adobe Lightroom',
  'Blender',
  '3ds Max'
];

const getTools = (customTools: string[] = []): string[] => {
  const baseTools = ['Photoshop', 'Canva'];
  const shuffled = [...additionalTools].sort(() => 0.5 - Math.random());
  const randomCount = Math.floor(Math.random() * 3) + 2;
  const randomTools = shuffled.slice(0, randomCount);
  return [...baseTools, ...randomTools, ...customTools].filter(
    (tool, index, self) => self.indexOf(tool) === index
  );
};

// All projects with public folder paths
const allProjects: Project[] = [
  // Alta Counseling
  {
    id: 'alta-counseling',
    image: '/logos/CC2.png', // CC2 for Alta
    title: 'Alta Counseling Ethiopia',
    client: 'Alta Counseling Ethiopia',
    category: 'Branding',
    description: 'Comprehensive branding and marketing materials for a mental health counseling service. Created a warm, trustworthy visual identity including logo design, business cards, brochures, and social media graphics. The design system emphasizes compassion and professionalism while making mental health services feel accessible and welcoming.',
    tools: getTools(),
    images: generateImages('AC', 31),
    goal: 'Develop a brand identity that reduces stigma around mental health and positions Alta Counseling as a trusted, compassionate resource for mental wellness in Ethiopia.',
    featured: false,
    date: '2024-03',
    type: 'company'
  },
  
  // Ambalay Maps - FEATURED (UI/UX removed)
  {
    id: 'ambalay-maps',
    image: '/logos/CC4.png', // CC4 for Ambalay Maps
    title: 'Ambalay Maps',
    client: 'Ambalay Maps',
    category: 'Digital Design',
    description: 'Poster designs and promotional materials for Ethiopia\'s first comprehensive mapping API. Created marketing collateral including posters, social media assets, and presentation decks. Focused on making complex geographical data visually intuitive and accessible through compelling graphics.',
    tools: getTools(), // Removed 'Figma' from custom tools
    images: generateImages('AM', 15),
    goal: 'Create compelling visual assets that showcase Ambalay Maps as an innovative Ethiopian tech solution while making geographical data easy to understand and navigate.',
    featured: true,
    date: '2024-02',
    type: 'company'
  },
  
  // GDG AAU
  {
    id: 'gdg-aau',
    image: '/logos/CC1.png', // CC1 for GDG AAU
    title: 'Google Developer Groups AAU',
    client: 'Google Developer Groups - Addis Ababa University',
    category: 'Branding',
    description: 'Event branding and social media management for GDG AAU\'s tech community. Created visual assets for hackathons, study jams, dev fests, and regular meetups. Designed posters, banners, certificates, and social media templates that maintain brand consistency while being energetic and youth-focused.',
    tools: getTools(),
    images: generateImages('GA', 25),
    goal: 'Build a strong, recognizable visual identity that energizes the university tech community and increases student participation in developer events and workshops.',
    featured: false,
    date: '2024-01',
    type: 'company'
  },
  
  // MiNT Projects
  {
    id: 'mint-projects',
    image: '/logos/CC7.png', // CC7 for MiNT
    title: 'MiNT Projects',
    client: 'MiNT Projects',
    category: 'Branding',
    description: 'Brand identity and marketing materials for MiNT, a creative technology initiative. Developed a versatile visual system that works across digital platforms, print materials, and event collateral. Includes logo design, color palette, typography, and branded templates for various applications.',
    tools: getTools(['Adobe Illustrator']),
    images: generateImages('MT', 3),
    goal: 'Establish a distinctive brand presence for MiNT that communicates innovation and creativity while maintaining flexibility for diverse project applications.',
    featured: false,
    date: '2023-12',
    type: 'company'
  },
  
  // Nexus Tutorial
  {
    id: 'nexus-tutorial',
    image: '/logos/CC3.png', // CC3 for Nexus
    title: 'Nexus Tutorial',
    client: 'Nexus Tutorial Platform',
    category: 'Digital Design',
    description: 'Complete visual identity and content design for an educational technology platform. Created engaging tutorial graphics, social media content for LinkedIn and Telegram, presentation decks, and marketing materials. Focused on making technical education visually appealing and easy to digest.',
    tools: getTools(),
    images: generateImages('NT', 22),
    goal: 'Design an engaging visual language that makes technical education accessible and appealing, increasing student engagement across digital platforms.',
    featured: false,
    date: '2024-04',
    type: 'company'
  },
  
  // Solidworks Projects - FEATURED
  {
    id: 'solidworks-projects',
    image: '/logos/CC6.png', // CC6 for Solidworks
    title: 'Solidworks Engineering Projects',
    client: 'Engineering Design Services',
    category: '3D Design',
    description: 'Technical 3D modeling and engineering design projects created with Solidworks. Includes mechanical components, assembly designs, technical drawings, and manufacturing specifications. Projects range from simple parts to complex assemblies with precise dimensional accuracy.',
    tools: ['Solidworks'],
    images: generateImages('SS', 1),
    goal: 'Produce accurate, manufacturable 3D models and technical documentation that meet engineering standards and client specifications.',
    featured: true,
    date: '2024-03',
    type: 'company'
  },
  
  // The 3D Lab
  {
    id: '3d-lab',
    image: '/logos/CC5.png', // CC5 for 3D Lab
    title: 'The 3D Lab',
    client: 'The 3D Lab',
    category: '3D Design',
    description: '3D visualization and rendering projects for various applications including product visualization, architectural concepts, and creative design. Created photorealistic renders, exploded views, and presentation materials that bring concepts to life.',
    tools: getTools(['Blender']),
    images: generateImages('3L', 1),
    goal: 'Deliver high-quality 3D visualizations that effectively communicate design intent and help clients visualize products before production.',
    featured: false,
    date: '2024-02',
    type: 'company'
  },
  
  // Personal Poster Designs - FEATURED
  {
    id: 'personal-posters',
    image: '/logos/PP1.png',
    title: 'Personal Poster Design Collection',
    client: 'Personal Portfolio Work',
    category: 'Graphic Design',
    description: 'A curated collection of personal poster design projects exploring various styles, techniques, and visual concepts. Includes experimental typography, abstract compositions, event posters, and social commentary pieces. Demonstrates versatility across different design approaches and artistic expressions.',
    tools: getTools(),
    images: generateImages('PP', 19),
    goal: 'Build a diverse portfolio showcasing creative range and technical proficiency in poster design while exploring personal artistic interests.',
    featured: true,
    date: '2023-11',
    type: 'personal'
  }
];

export const niches: Niche[] = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Marketing and promotional graphics designed for businesses and organizations.',
    icon: 'palette',
    projects: allProjects.filter(p => p.category === 'Branding')
  },
  {
    id: 'digital-design',
    title: 'Digital Design',
    description: 'Social media graphics, posters, and digital content for online platforms.',
    icon: 'monitor',
    projects: allProjects.filter(p => p.category === 'Digital Design')
  },
  {
    id: '3d-design',
    title: '3D Design',
    description: '3D modeling, visualization, and engineering design projects using professional software.',
    icon: 'box',
    projects: allProjects.filter(p => p.category === '3D Design')
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Posters, print materials, and visual communication projects for various purposes.',
    icon: 'image',
    projects: allProjects.filter(p => p.category === 'Graphic Design')
  }
];

export const projectsData = allProjects;

export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => project.featured);
};

export const getNicheById = (id: string): Niche | undefined => {
  return niches.find(niche => niche.id === id);
};

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

export const getAllProjects = (): Project[] => {
  return allProjects;
};

export const getProjectByPrefix = (prefix: string): Project | undefined => {
  const prefixMap: Record<string, string> = {
    'AC': 'alta-counseling',
    'AM': 'ambalay-maps',
    'GA': 'gdg-aau',
    'MT': 'mint-projects',
    'NT': 'nexus-tutorial',
    'SS': 'solidworks-projects',
    '3L': '3d-lab',
    'PP': 'personal-posters'
  };
  
  const projectId = prefixMap[prefix];
  if (!projectId) return undefined;
  
  return allProjects.find(project => project.id === projectId);
};