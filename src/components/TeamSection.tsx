import { Card } from "@/components/ui/card";
import nabinPhoto from "@/assets/nabin-photo.png";
import birasatPhoto from "@/assets/birasat.jpg";
import abhiPhoto from "@/assets/abhi.jpg";

const aayushPhoto = "/aayush-neupane.jpg";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  initials?: string;
  isLeader?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nabin Thapa",
    role: "Team Leader — UI/UX & Frontend Developer",
    photo: nabinPhoto,
    isLeader: true,
  },
  {
    name: "Birasat Subedi",
    role: "Database & Data Management",
    photo: birasatPhoto,
  },
  {
    name: "Abhi Gautam",
    role: "Frontend Developer",
    photo: abhiPhoto,
  },
  {
    name: "Aayush Neupane",
    role: "Backend Developer",
    photo: aayushPhoto,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Premium background effects */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold fire-gradient text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-top duration-700">
          Our Team
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Team Leader - Top */}
          <div className="flex justify-center mb-12 animate-in fade-in zoom-in duration-700 delay-100">
            <Card className="p-6 sm:p-8 hover-lift premium-card border-4 border-fire-gold/30 bg-card w-full max-w-md gold-glow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={teamMembers[0].photo}
                    alt={teamMembers[0].name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-fire-gold"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fire-orange/30 to-fire-gold/30 animate-pulse gold-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{teamMembers[0].name}</h3>
                  <p className="text-muted-foreground text-center">{teamMembers[0].role}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Team Members - Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(1).map((member, index) => (
              <Card
                key={member.name}
                className="p-6 hover-lift premium-card border-2 border-primary/20 bg-card transition-all duration-300 hover:border-primary/40 cyber-glow animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/50"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full border-4 border-primary/50 bg-gradient-to-br from-primary/40 via-background to-secondary/40 flex items-center justify-center text-2xl font-bold text-white">
                        {member.initials ?? member.name[0]}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
