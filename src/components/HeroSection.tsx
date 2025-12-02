const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-24">
      {/* Decorative geometric shapes */}
      <div className="absolute right-10 top-1/4 opacity-10">
        <div className="relative">
          <div className="w-64 h-64 border-2 border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-secondary/50 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/30 rounded-full" />
        </div>
      </div>

      {/* Circuit pattern */}
      <div className="absolute right-20 bottom-1/4 opacity-5">
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

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-muted-foreground text-lg">Hello, We are</p>
            
            <h1 className="text-6xl md:text-8xl font-bold fire-gradient leading-tight">
              TEAM INFERNO
            </h1>
            
            <div className="flex items-center gap-4 pl-1">
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent" />
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                Forging Innovation Through Fire and Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
