import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Instagram, MessageSquare, Globe, Palette, Camera } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import designerPortrait from '@/assets/designer-portrait.jpg';

const skills = [
  { name: 'Photoshop', level: 95 },
  { name: 'Illustrator', level: 90 },
  { name: 'Solidworks', level: 70 }, // Changed from Figma to Solidworks at 70%
  { name: 'Premiere Pro', level: 50 },
  { name: 'Cap Cut', level: 50 },
];

const tools = [
  { name: 'Adobe Photoshop', icon: '🎨' },
  { name: 'Adobe Illustrator', icon: '✏️' },
  { name: 'Solidworks', icon: '🔩' },
  { name: 'AutoCAD', icon: '📐' }, // Added AutoCAD
  { name: 'Adobe Express', icon: '⚡' },
  { name: 'Affinity', icon: '🎯' },
  { name: 'Canva', icon: '📊' },
  { name: 'Premiere Pro', icon: '🎥' },
  { name: 'CapCut', icon: '✂️' },
];

const experiences = [
  {
    title: 'Freelance Graphic Designer', // Added new experience at the top
    company: 'Self-Employed',
    period: 'June 2025 – Present',
    description: 'Providing freelance graphic design services to various clients. Creating custom branding, social media visuals, marketing materials, and digital illustrations. Collaborating with clients to bring their creative visions to life while maintaining brand consistency across all deliverables.',
  },
  {
    title: 'Social Media Manager & Graphic Designer',
    company: 'Google Developer Groups Addis Ababa University',
    period: 'October 2024 – Present',
    description: 'Leading social media strategy and visual content creation across platforms. Designing promotional materials for events and initiatives, contributing to a 200% community growth through branded visuals and campaign-driven engagement.',
  },
  {
    title: 'Graphic Designer',
    company: 'Ambalay Maps',
    period: 'April 2025 – Present',
    description: 'Designing high-impact posters and digital visuals to promote Ethiopia\'s Map API. Translating technical concepts into clear, engaging content while maintaining consistent visual identity across platforms.',
  },
  {
    title: 'Social Media Manager & Graphic Designer',
    company: 'Nexus Tutorial',
    period: 'July 2025 – Present',
    description: 'Managing LinkedIn and Telegram presence while creating visual content for tech tutorials. Driving audience growth through strategic campaigns, consistent branding, and accessible educational graphics.',
  },
  {
    title: 'Graphic Designer',
    company: 'Alta Counseling Ethiopia',
    period: 'April 2025 – September 2025',
    description: 'Creating promotional visuals and campaign graphics to strengthen brand presence and support mental health awareness, increasing engagement through thoughtful and emotionally resonant design.',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: expRef, isVisible: expVisible } = useScrollAnimation();

  const [skillsAnimated, setSkillsAnimated] = useState(false);

  if (skillsVisible && !skillsAnimated) {
    setSkillsAnimated(true);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 ${
              heroVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`${heroVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
              style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
              <span className="text-primary font-semibold tracking-wider uppercase">About Me</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2">
                Hiruy Zerihun
              </h1>
      
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                I'm a Mechanical Engineering student with a strong passion for graphic design and visual storytelling, focused on creating meaningful designs that communicate clearly and leave a lasting impression. Based in Addis Ababa, Ethiopia, I work across digital design, social media visuals, and engineering tools like SolidWorks and basic AutoCAD.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                My approach blends technical thinking with creativity, allowing me to craft modern, purpose-driven visuals that balance aesthetics with impact while turning ideas into engaging visual experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://drive.google.com/file/d/1kLlWkizGYa3480uyv_l7Dgu97C1x3V9z/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </button>
              </div>

              {/* Social Links - UPDATED with logo8, logo9, logo10, logo11 from public/logos */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.behance.net/hiruyzerihun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Behance"
                >
                  <img src="/logos/logo8.png" alt="Behance" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hiruy-zerihun250997/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="LinkedIn"
                >
                  <img src="/logos/logo9.png" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/Hirazed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Telegram"
                >
                  <img src="/logos/logo10.png" alt="Telegram" className="w-5 h-5" />
                </a>
                <a
                  href="mailto:Hirazed97@gmail.com"
                  className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Email"
                >
                  <img src="/logos/logo11.png" alt="Email" className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className={`${heroVisible ? 'animate-fade-in-right opacity-0' : 'opacity-0'}`}
              style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={designerPortrait}
                  alt="Hiruy Zerihun"
                  className="relative rounded-2xl w-full aspect-square object-cover border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef as React.RefObject<HTMLElement>} className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Skills & Tools</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Bars - UPDATED with Solidworks at 70% */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Proficiency</h3>
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`${skillsVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
                  style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: skillsAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Grid - UPDATED with Solidworks and AutoCAD */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Tools I Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all ${
                      skillsVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                    }`}
                    style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - UPDATED with Freelance at the top */}
      <section ref={expRef as React.RefObject<HTMLElement>} className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Experience</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${index}`}
                className={`relative pl-8 pb-12 last:pb-0 ${
                  expVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                }`}
                style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-0 top-2 w-px h-full bg-border" />
                )}
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />
                
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'hirazed97@gmail.com' },
              { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+251 912345678' },
              { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Addis Ababa, Ethiopia' },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;