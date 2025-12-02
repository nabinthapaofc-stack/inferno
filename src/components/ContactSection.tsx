import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-br from-navy-dark via-background to-burnt-red">
      {/* Premium decorative elements */}
      <div className="absolute top-10 left-10 w-[28rem] h-[28rem] bg-gradient-to-br from-cyber-blue/20 via-fire-orange/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tl from-fire-lava/20 via-cyber-cyan/20 to-transparent rounded-full blur-[140px]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-primary/60 rounded-full animate-spin" style={{ animationDuration: "26s" }} />
        <div className="absolute bottom-1/4 left-1/5 w-48 h-48 border border-secondary/60 rounded-full animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60 mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold fire-gradient mb-6 animate-in fade-in slide-in-from-top duration-700">
            Let's Build the Next Breakthrough
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Whether it's a hackathon sprint, a startup MVP, or a bold research concept, we're ready to bring
            premium craft, storytelling, and engineering discipline to your idea.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          <Card className="p-10 premium-card border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-cyber-blue/40 hover:border-cyber-blue/80 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyber-blue/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyber-blue" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Email us</p>
                  <a
                    href="mailto:inferno.hackathon@gmail.com"
                    className="text-2xl font-semibold text-white hover:text-cyber-blue transition-colors"
                  >
                    inferno.hackathon@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-fire-orange/40 hover:border-fire-orange/80 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-fire-orange/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-fire-orange" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Call the forge</p>
                  <a
                    href="tel:+9779769407270"
                    className="text-2xl font-semibold text-white hover:text-fire-orange transition-colors"
                  >
                    +977 976-9407270
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Response time", value: "< 12 hrs" },
                  { label: "Timezone", value: "UTC+5:45" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-4 text-left"
                  >
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-white/70 italic pt-4 text-center">
                "Forging Innovation Through Fire and Code"
              </p>
            </div>
          </Card>

          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-background/60 via-fire-lava/20 to-cyber-blue/20 backdrop-blur-xl p-10 flex flex-col justify-between shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Ways to collaborate</p>
                <h3 className="text-3xl font-semibold text-white">
                  Sprints, workshops, prototypes, or full-stack launches — let's pick the format that matches your ambition.
                </h3>
                <p className="text-white/70">
                  We tailor our process for founders, educators, and partner labs. Drop a line with your challenge and we'll
                  send a curated plan within a day.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {["Product Strategy", "Rapid Prototyping", "Brand Systems", "AI Experiments"].map((chip) => (
                    <span key={chip} className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-[0.3em]">
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href="mailto:inferno.hackathon@gmail.com"
                  className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-fire-gold via-fire-orange to-cyber-cyan py-4 text-lg font-semibold text-background shadow-[0_15px_45px_rgba(0,0,0,0.55)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all border border-white/20 tracking-[0.2em] uppercase"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
