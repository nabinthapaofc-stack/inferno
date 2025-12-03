import infernoLogo from "@/assets/inferno-logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-24 pb-16 sm:pt-28">
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-background to-burnt-red opacity-50" />
      
      {/* Animated glow orbs */}
      <div className="hidden md:block absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Decorative geometric shapes */}
      <div className="hidden md:block absolute right-10 top-1/4 opacity-10">
        <div className="relative">
          <div className="w-64 h-64 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-secondary/50 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: "10s" }} />
        </div>
      </div>

      {/* Circuit pattern */}
      <div className="hidden md:block absolute right-20 bottom-1/4 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M50 50 L150 50 L150 150 L50 150 Z" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="50" cy="50" r="5" fill="currentColor" className="text-primary" />
          <circle cx="150" cy="50" r="5" fill="currentColor" className="text-primary" />
          <circle cx="150" cy="150" r="5" fill="currentColor" className="text-primary" />
          <circle cx="50" cy="150" r="5" fill="currentColor" className="text-primary" />
          <path d="M100 50 L100 150" stroke="currentColor" strokeWidth="2" className="text-secondary" />
          <path d="M50 100 L150 100" stroke="currentColor" strokeWidth="2" className="text-secondary" />
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-8 z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Text Content - Left */}
          <div className="flex-1 space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
            <p className="text-muted-foreground text-base sm:text-lg">Hello, We are</p>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold fire-gradient leading-tight">
              TEAM INFERNO
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pl-1">
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent cyber-glow" />
              <p className="text-lg sm:text-xl text-muted-foreground italic">
                Forging Innovation Through Fire and Code
              </p>
            </div>
          </div>

          {/* Logo - Right */}
          <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-primary via-background to-secondary shadow-[0_0_40px_rgba(255,129,33,0.35)]">
                <div className="absolute inset-2 rounded-full border border-white/20/" />
                <img
                  src={infernoLogo}
                  alt="Team Inferno Logo"
                  className="w-full h-full rounded-full object-cover border-4 border-background/70 drop-shadow-2xl premium-glow transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
