import crystalIcon from "@/assets/crystal-icon.png";
import { Button } from "@/components/ui/button";

interface ExperienceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  accentColor: 'purple' | 'pink' | 'blue' | 'orange';
}

const experiences: ExperienceCard[] = [
  {
    id: 1,
    icon: crystalIcon,
    title: "Associate AI Engineer – Developers Den",
    description: "Design and develop NLP-driven applications using FastAPI and Flask, integrating Generative AI models into production-ready backend services.",
    accentColor: 'purple',
  },
  {
    id: 2,
    icon: crystalIcon,
    title: "Intelligent Chatbot & RAG Systems",
    description: "Build intelligent chatbot and retrieval-augmented generation (RAG) systems using LangChain, Hugging Face Transformers, and OpenAI APIs.",
    accentColor: 'pink',
  },
  {
    id: 3,
    icon: crystalIcon,
    title: "ML Model Deployment & Optimization",
    description: "Deploy and optimize ML models with a focus on scalable, modular, and maintainable architecture.",
    accentColor: 'blue',
  },
  {
    id: 4,
    icon: crystalIcon,
    title: "Backend & Database Integration",
    description: "Apply strong fundamentals of SQL, database design, and operating systems concepts while supporting data-intensive and backend components of AI systems.",
    accentColor: 'orange',
  },
];

const accentColors = {
  purple: 'from-purple-500/20 to-transparent',
  pink: 'from-pink-500/20 to-transparent',
  blue: 'from-blue-500/20 to-transparent',
  orange: 'from-orange-500/20 to-transparent',
};

const WorkExperience = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 animate-fade-in text-center">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card gradient-border rounded-xl p-6 hover-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accentColors[exp.accentColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={exp.icon} alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
