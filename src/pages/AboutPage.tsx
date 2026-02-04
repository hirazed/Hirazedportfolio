import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Instagram, Dribbble, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  { name: 'Photoshop', level: 95 },
  { name: 'Illustrator', level: 90 },
  { name: 'Figma', level: 88 },
  { name: 'After Effects', level: 75 },
  { name: 'InDesign', level: 82 },
  { name: 'Lightroom', level: 85 },
];

const tools = [
  { name: 'Adobe Photoshop', icon: '🎨' },
  { name: 'Adobe Illustrator', icon: '✏️' },
  { name: 'Figma', icon: '🖼️' },
  { name: 'After Effects', icon: '🎬' },
  { name: 'Premiere Pro', icon: '🎥' },
  { name: 'InDesign', icon: '📄' },
  { name: 'Lightroom', icon: '📷' },
  { name: 'Blender', icon: '🔷' },
];

const experiences = [
  {
    title: 'Senior Graphic Designer',
    company: 'Creative Agency',
    period: '2022 - Present',
    description: 'Leading brand identity projects and mentoring junior designers.',
  },
  {
    title: 'Freelance Designer',
    company: 'Self-Employed',
    period: '2019 - 2022',
    description: 'Worked with 50+ clients across various industries.',
  },
  {
    title: 'Junior Designer',
    company: 'Design Studio',
    period: '2017 - 2019',
    description: 'Started career focusing on social media design and print materials.',
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
              <p className="text-primary/80 text-xl mt-2">ህሩይ ዘሪሁን</p>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                I'm a passionate graphic designer with over 5 years of experience creating 
                visual stories that connect and convert. Based in Addis Ababa, Ethiopia, 
                I specialize in social media design, branding, and digital marketing graphics.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                My approach combines Ethiopian cultural aesthetics with modern design principles, 
                creating unique visuals that stand out in the digital landscape.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                  { icon: <Instagram className="w-5 h-5" />, href: '#' },
                  { icon: <Dribbble className="w-5 h-5" />, href: '#' },
                  { icon: <Globe className="w-5 h-5" />, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`${heroVisible ? 'animate-fade-in-right opacity-0' : 'opacity-0'}`}
              style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src="/placeholder.svg"
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
            {/* Skill Bars */}
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

            {/* Tools Grid */}
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

      {/* Experience Section */}
      <section ref={expRef as React.RefObject<HTMLElement>} className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Experience</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative pl-8 pb-12 last:pb-0 ${
                  expVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                }`}
                style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-2 w-px h-full bg-border last:hidden" />
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
              { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'hiruy@example.com' },
              { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+251 91 234 5678' },
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
