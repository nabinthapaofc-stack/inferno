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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold fire-gradient mb-8 animate-in fade-in slide-in-from-left duration-700">
            About Us
          </h2>

          <p className="text-xl text-secondary/80 mb-8 tracking-wider uppercase animate-in fade-in slide-in-from-left duration-700 delay-100">
            Forged in the heat of curiosity, refined through relentless collaboration.
          </p>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="space-y-6 text-lg text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <p>
                Team Inferno sparked to life during a Grade 11 hackathon acceleration program where only a
                handful of dreamers were invited to push beyond the classroom. What started as late-night
                debugging sessions soon transformed into a covenant to build products that feel alive, bold,
                and purposeful.
              </p>
              <p>
                Today we blend design, storytelling, and engineering to craft experiences that ignite people’s
                imagination. Every sprint is treated like a forge—ideas enter as raw ore and emerge as resilient
                prototypes ready to meet real-world pressure.
              </p>
              <p>
                From campus innovation challenges to international hackathons, we carry one mantra everywhere:
                <span className="text-fire-gold font-semibold"> "Set the bar on fire, then surpass it."</span>
              </p>
            </div>

            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">What drives us</p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    Precision engineering with an artist’s eye.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary mt-2" />
                    Shipping fearless ideas faster than the flame fades.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-fire-orange mt-2" />
                    Creating tech that elevates people, not just metrics.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                
                  { label: "Cups of chai", value: "∞" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-4 text-center"
                  >
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
