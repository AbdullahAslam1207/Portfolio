import avatarImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-12 max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="relative animate-slide-up">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden gradient-border glow-box">
              <img
                src={avatarImg}
                alt="Profile avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dot */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse-glow" />
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-accent text-sm mb-2">Hello! I Am <span className="text-highlight">Abdullah Aslam</span></p>
            
            <div className="mb-4">
              <p className="text-muted-foreground text-sm mb-1">An AI Engineer who</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Looks beyond the surface<br />
                and questions the <span className="text-gradient glow-text">obvious</span>...
              </h1>
              <p className="text-muted-foreground text-xs mt-2 italic">
                Because real intelligence isn't what you see — it's how things think.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                I'm an AI Engineer.<span className="text-accent animate-blink border-r-2 border-accent">|</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Building intelligent systems that learn, adapt, and evolve.
              </p>
            </div>

            <p className="mt-6 text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
              A self-driven problem solver, working at the intersection of AI, data, and real-world impact.
              I create smart, meaningful solutions that balance innovation, logic, and human needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
