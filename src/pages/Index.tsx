import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DiagonalSeparator from '@/components/DiagonalSeparator';
import ClientLogos from '@/components/ClientLogos';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import NicheCards from '@/components/NicheCards';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DiagonalSeparator />
      <ClientLogos />
      <AboutSection />
      <StatsSection />
      <DiagonalSeparator flipped />
      <ProjectsSection />
      <DiagonalSeparator />
      <NicheCards />
      <DiagonalSeparator flipped />
      <PortfolioSection />
      <TestimonialsSection />
      <DiagonalSeparator />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Index;
