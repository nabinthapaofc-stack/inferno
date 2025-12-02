import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-navy-dark via-background to-burnt-red">
      {/* Premium decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyber-blue/20 via-fire-orange/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-fire-lava/20 via-cyber-cyan/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold fire-gradient text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="p-10 premium-card border-4 border-cyber-blue/50 cyber-glow backdrop-blur-sm hover-lift animate-in fade-in zoom-in duration-700 delay-200">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold fire-gradient">Team Inferno</h3>
                <p className="text-muted-foreground text-lg">
                  Let's forge innovation together
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyber-blue/20 flex items-center justify-center cyber-glow">
                    <Mail className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:inferno.hackathon@gmail.com"
                      className="text-lg text-foreground hover:text-cyber-blue transition-colors duration-300"
                    >
                      inferno.hackathon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-fire-orange/30 hover:border-fire-orange/60 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fire-orange/20 flex items-center justify-center fire-glow">
                    <Phone className="w-6 h-6 text-fire-orange" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a 
                      href="tel:+9779769407270"
                      className="text-lg text-foreground hover:text-fire-orange transition-colors duration-300"
                    >
                      +977 976-9407270
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-foreground/70 italic">
                  "Forging Innovation Through Fire and Code"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
