import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import MentorsSection from "@/components/MentorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <MentorsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-navy py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2025 Team Inferno. Forging Innovation Through Fire and Code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
