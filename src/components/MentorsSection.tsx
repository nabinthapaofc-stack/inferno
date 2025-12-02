import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import divyaPhoto from "@/assets/divya.jpg";

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-24 relative overflow-hidden bg-gradient-to-br from-navy via-navy to-burnt-red">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-fire-gold/10 via-fire-orange/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-fire-lava/10 via-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold fire-gradient text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          Our Mentors
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-10 border-4 border-fire-gold/50 gold-glow bg-card/95 backdrop-blur-sm hover-lift animate-in fade-in zoom-in duration-700 delay-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <img
                  src={divyaPhoto}
                  alt="Divya Darsheel Sharma"
                  className="w-40 h-40 rounded-full object-cover border-6 border-fire-gold"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fire-orange/30 to-fire-gold/30 animate-pulse gold-glow" />
              </div>

              <div>
                <h3 className="text-3xl font-bold fire-gradient mb-2">Divya Darsheel Sharma</h3>
                <p className="text-fire-gold text-lg font-semibold mb-4">Lead Mentor</p>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  He guided us throughout our hackathon journey. His extraordinary talent and 
                  mentorship shaped our entire team. He is the one who formed Team Inferno.
                </p>

                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://dds3579.github.io/portfolio/", "_blank")}
                >
                  View Portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
          <p className="text-white/80 text-lg">
            Honourable mention to <span className="text-fire-gold font-semibold">Kritagya Poudel</span> for his support.
          </p>
          <p className="text-white/70 text-lg italic">
            We thank everyone who helped us in this journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
