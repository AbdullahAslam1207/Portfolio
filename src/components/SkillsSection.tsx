import crystalIcon from "@/assets/crystal-icon.png";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "📊" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "LLMs & RAG", icon: "📚" },
  { name: "Vector Databases", icon: "🗂️" },
  { name: "APIs & Microservices", icon: "🔌" },
  { name: "Docker & Kubernetes", icon: "🐳" },
];


const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🧮" },
  { name: "FAISS / ChromaDB", icon: "📦" },
  { name: "Git & GitHub", icon: "🔀" },
  { name: "Linux", icon: "🐧" },
  { name: "Cloud (AWS)", icon: "☁️" },
  { name: "AI Agents & Tools", icon: "🤖" },
];


const SkillsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-glow-primary/5 via-glow-secondary/10 to-glow-primary/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-foreground text-lg mb-2">
            I collaborate with <span className="text-gradient font-semibold">cross-functional</span> teams to build accessible, human-centered AI systems that make a real difference in people's lives.
          </p>
        </div>

        {/* Skills icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-xl hover-glow cursor-pointer transition-transform hover:scale-110 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-xl hover-glow cursor-pointer transition-transform hover:scale-110 animate-slide-up"
              style={{ animationDelay: `${(skills.length + index) * 0.05}s` }}
              title={tool.name}
            >
              {tool.icon}
            </div>
          ))}
        </div>

        {/* Floating crystal decoration */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            {/* Orbit lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-40 border border-border/30 rounded-full" style={{ transform: 'rotateX(60deg)' }} />
            </div>
            
            <img
              src={crystalIcon}
              alt="Crystal"
              className="w-24 h-24 animate-float glow-box rounded-full"
            />
            
            {/* Orbiting dots */}
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-glow-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
