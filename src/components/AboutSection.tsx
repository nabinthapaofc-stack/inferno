const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy">
      {/* Flame effect background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-fire-lava/20 via-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-bl from-fire-gold/10 via-secondary/10 to-transparent rounded-full blur-3xl" />
      
      {/* Circuit lines */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <path d="M0 75 L50 75 L50 25 L100 25" stroke="hsl(193, 100%, 64%)" strokeWidth="1" />
          <path d="M50 75 L50 125 L100 125" stroke="hsl(193, 100%, 64%)" strokeWidth="1" />
          <circle cx="50" cy="75" r="3" fill="hsl(193, 100%, 64%)" />
          <circle cx="100" cy="25" r="3" fill="hsl(193, 100%, 64%)" />
          <circle cx="100" cy="125" r="3" fill="hsl(193, 100%, 64%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold fire-gradient mb-12 animate-in fade-in slide-in-from-left duration-700">
            About us
          </h2>
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <p>
              Team Inferno was formed during a school hackathon training program held in Grade 11. 
              Only a few students were selected for the training — and we were among them.
            </p>
            
            <p>
              This team was created with the purpose of learning, building, and pushing our creative 
              and technical abilities to the limit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
