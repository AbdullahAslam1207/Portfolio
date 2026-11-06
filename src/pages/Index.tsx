import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/50" />
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-glow-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-glow-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <WorkExperience />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Abdullah Aslam
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
