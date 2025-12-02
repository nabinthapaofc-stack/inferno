import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface TeamMemberContact {
  name: string;
  email: string;
  phone: string;
}

const teamContacts: TeamMemberContact[] = [
  { name: "Nabin Thapa", email: "", phone: "To be added later" },
  { name: "Birasat Subedi", email: "", phone: "To be added later" },
  { name: "Abhi Gautam", email: "", phone: "To be added later" },
  { name: "Aayush Neupane", email: "", phone: "To be added later" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 L250,500 L250,250 L500,250 L500,750 L750,750 L750,500 L1000,500" 
                stroke="hsl(193, 100%, 64%)" 
                strokeWidth="2" 
                fill="none" />
          <circle cx="250" cy="500" r="10" fill="hsl(193, 100%, 64%)" />
          <circle cx="500" cy="250" r="10" fill="hsl(193, 100%, 64%)" />
          <circle cx="500" cy="750" r="10" fill="hsl(193, 100%, 64%)" />
          <circle cx="750" cy="750" r="10" fill="hsl(193, 100%, 64%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold fire-gradient text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamContacts.map((member, index) => (
            <Card 
              key={member.name} 
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover-lift transition-all duration-300 animate-in fade-in zoom-in duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 fire-gradient">{member.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`email-${index}`} className="text-white/80 mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id={`email-${index}`}
                    type="email"
                    placeholder="Enter email"
                    className="bg-navy/50 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/50 focus:ring-2"
                  />
                </div>

                <div>
                  <Label htmlFor={`phone-${index}`} className="text-white/80 mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone
                  </Label>
                  <Input
                    id={`phone-${index}`}
                    type="tel"
                    placeholder={member.phone}
                    className="bg-navy/50 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/50 focus:ring-2"
                    disabled
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cyber-glow transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
