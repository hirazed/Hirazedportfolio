import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DiagonalSeparator from '@/components/DiagonalSeparator';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DiagonalSeparator />
      <AboutSection />
      <DiagonalSeparator flipped />
      <ProjectsSection />
      <DiagonalSeparator />
      <ServicesSection />
      <DiagonalSeparator flipped />
      <PortfolioSection />
      <DiagonalSeparator />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
