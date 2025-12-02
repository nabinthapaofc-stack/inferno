import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import divyaPhoto from "@/assets/divya.jpg";

const kritagyaPhoto = "/kritagya.jpg";

const mentorHighlights = [
  {
    name: "Divya Darsheel Sharma",
    title: "Lead Mentor & President",
    description:
      "He guided us throughout our hackathon journey. His extraordinary talent and mentorship shaped our entire team. He is the one who formed Team Inferno.",
    badge: "Vision Architect",
    photo: divyaPhoto,
    ctaLabel: "View Portfolio",
    ctaLink: "https://dds3579.github.io/portfolio/",
  },
  {
    name: "Kritagya Poudel",
    title: "Science & Technology Head",
    description:
      "Our systems mentor and helper who kept the forge alive during hackathon training—bridging hardware, research, and rapid prototyping when the stakes were highest.",
    badge: "Helper • Momentum Maker",
    photo: kritagyaPhoto,
  },
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-24 relative overflow-hidden bg-gradient-to-br from-navy-dark via-background to-burnt-red">
      {/* Premium decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-fire-gold/20 via-fire-orange/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-fire-lava/20 via-secondary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold fire-gradient text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          Our Mentors
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {mentorHighlights.map((mentor, index) => (
            <Card
              key={mentor.name}
              className="p-10 premium-card border-4 border-white/10 bg-black/30 backdrop-blur-xl hover-lift shadow-[0_20px_80px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  {mentor.photo ? (
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="w-40 h-40 rounded-full object-cover border-6 border-primary/50"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full border-6 border-primary/50 bg-gradient-to-br from-primary/40 via-background to-secondary/40 flex items-center justify-center text-3xl font-bold text-white">
                      {mentor.name[0]}
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse" />
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 text-xs tracking-[0.35em] uppercase text-white/70">
                    {mentor.badge}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold fire-gradient mb-2">{mentor.name}</h3>
                    <p className="text-white/80 text-lg font-semibold mb-4">{mentor.title}</p>
                    <p className="text-foreground/90 text-lg leading-relaxed">{mentor.description}</p>
                  </div>

                  {mentor.ctaLabel && mentor.ctaLink && (
                    <Button
                      variant="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(mentor.ctaLink!, "_blank")}
                    >
                      {mentor.ctaLabel}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
