import project1Img from "@/assets/project-1.png";
import project2Img from "@/assets/project-2.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  reverse?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TareekhBot – Pakistan History Chatbot",
    description: "A domain-specific chatbot focused on Pakistan's historical events and news, using Retrieval-Augmented Generation (RAG) to answer queries based on integrated documents and real-time internet searches. Features include news retrieval, source attribution, real-time updates, and restricted topic handling with an email trigger for sensitive military-related queries.",
    image: project1Img,
    tags: ["LangChain", "OpenAI", "RAG", "FAISS"],
  },
  {
    id: 2,
    title: "Jarvis – Pakistan Laws Voicebot",
    description: "An intelligent voice-based assistant that enables real-time, two-way communication using speech recognition and synthesis. Transcribes user speech using Deepgram, generates AI responses via OpenAI, and converts text back to speech using ElevenLabs. Integrated with Twilio for phone call handling, enabling users to interact with the bot via standard calls.",
    image: project2Img,
    tags: ["Twilio", "Deepgram", "ElevenLabs", "OpenAI"],
    reverse: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 mb-20 last:mb-0 animate-slide-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Content */}
            <div className="flex-1 max-w-md">
              <p className="text-accent text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {project.title}
              </h3>
              
              <div className="glass-card gradient-border rounded-lg p-6 mb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-muted-foreground text-xs font-mono"
                  >
                    ❄️ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-lg">
              <div className="glass-card gradient-border rounded-xl overflow-hidden hover-glow transition-transform hover:scale-[1.02] duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
