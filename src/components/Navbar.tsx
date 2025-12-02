import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import infernoLogo from "@/assets/inferno-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={infernoLogo} alt="Team Inferno Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold fire-gradient">Team Inferno</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("mentors")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Our Mentors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-foreground/80 hover:text-primary transition-colors font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("mentors")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
            >
              Our Mentors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-primary hover:text-primary/80 transition-colors font-medium py-2"
            >
              Contact us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
