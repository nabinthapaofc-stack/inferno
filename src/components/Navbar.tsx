import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const navLinks = [
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "mentors", label: "Mentors" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] border-b border-primary/30"
          : "bg-background/70 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col leading-tight">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Team</p>
            <span className="text-2xl font-semibold text-foreground">Inferno</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
                <span className="absolute left-1/2 -bottom-2 h-0.5 w-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Button
              className="rounded-full px-6 py-2 text-sm font-semibold tracking-wide bg-gradient-to-r from-primary via-fire-orange to-secondary shadow-lg hover:shadow-xl border border-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-white/10 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl p-6 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-base font-semibold tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full rounded-full bg-gradient-to-r from-primary via-fire-orange to-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
