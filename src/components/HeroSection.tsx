import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import avatarImg from "@/assets/profile.jpeg";
import { CONTACT } from "@/lib/contact";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-12 max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="relative animate-slide-up flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden gradient-border glow-box">
              <img
                src={avatarImg}
                alt="Abdullah Aslam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse-glow" />
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-accent text-sm mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Abdullah Aslam
            </h1>
            <h2 className="mt-2 text-xl md:text-2xl font-display font-semibold">
              <span className="text-gradient glow-text">Generative AI Engineer</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
              I build production RAG systems, LLM agents and real-time voice AI. Currently an Associate AI Engineer
              at <span className="text-foreground">Developers Den</span>, shipping FastAPI services on AWS that power
              3 production systems used by active clients.
            </p>

            <p className="mt-3 text-muted-foreground text-sm inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" /> {CONTACT.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-5 py-2.5 rounded-lg glass-card text-foreground text-sm font-medium hover-glow inline-flex items-center gap-2"
              >
                <Mail size={16} aria-hidden="true" /> Get in touch
              </a>
              {CONTACT.resumeUrl && (
                <a
                  href={CONTACT.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg glass-card text-foreground text-sm font-medium hover-glow inline-flex items-center gap-2"
                >
                  <FileText size={16} aria-hidden="true" /> Resume
                </a>
              )}
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover-glow"
              >
                <Github size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover-glow"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
