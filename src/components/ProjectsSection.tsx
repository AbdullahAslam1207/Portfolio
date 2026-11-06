import { PhoneCall, Database, Mic, BookOpen, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlights: string[];
  stack: string[];
}

const featuredProjects: Project[] = [
  {
    title: "AI Call Assistant",
    subtitle: "Multi-tenant voice agents for small businesses",
    icon: PhoneCall,
    highlights: [
      "Multi-tenant backend (FastAPI, Celery, PostgreSQL) behind Vapi voice agents that answer business calls 24/7. A booking agent handles appointments and a food agent takes restaurant orders, and each business has its own number, assistant and data.",
      "Pluggable booking providers (local database, Microsoft calendar, Square) with staff-aware availability, party-size handling, safe rescheduling, SMS confirmations and reminders, and no-show follow-ups.",
      "Prices and order totals are calculated server-side from the stored menu so the agent cannot invent them. Menus and price lists can be onboarded from photos or PDFs, and call transcripts are stored and exposed through dashboard APIs.",
    ],
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Vapi", "Square", "SMS"],
  },
  {
    title: "DME – AI-Assisted SAP Data Migration Engine",
    subtitle: "LLM-driven SAP ECC → S/4HANA migration",
    icon: Database,
    highlights: [
      "FastAPI service that uses LLMs (OpenAI, Gemini, LangChain) for field mapping, obsolete-record detection, duplicate detection and cleansing suggestions. A consultant approves every suggestion before it is used.",
      "SAP OData integration with incremental hash-based sync and audited write-back with retries, plus data profiling and quality dashboards.",
      "Moved storage from S3-synced SQLite files to shared PostgreSQL on AWS RDS, streamed batches for memory-heavy endpoints, ran long jobs as background tasks with webhook callbacks, and fixed production hangs with database timeouts.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Pandas", "OpenAI", "Gemini", "LangChain", "AWS (S3, EC2, RDS)", "Docker"],
  },
  {
    title: "AI Job Search Voice Assistant",
    subtitle: "Conversational RAG over live job listings",
    icon: Mic,
    highlights: [
      "Conversational voice assistant that uses RAG and WebSockets to retrieve and rank job listings scraped from job portals. It handled ~200 queries per day in testing.",
      "Vector search with ChromaDB and multi-turn conversational retrieval, with end-to-end voice responses in under 2 seconds.",
    ],
    stack: ["LangChain", "ChromaDB", "Groq", "Deepgram", "ElevenLabs", "FastAPI", "Selenium", "Python"],
  },
];

const otherProjects: Project[] = [
  {
    title: "TareekhBot – Pakistan History Chatbot",
    subtitle: "Domain-specific RAG chatbot",
    icon: BookOpen,
    highlights: [
      "Answers questions about Pakistan's history and news by combining document retrieval with real-time web search, with source attribution. Restricted topics are handled separately, and sensitive queries trigger an email alert.",
    ],
    stack: ["LangChain", "OpenAI", "RAG", "FAISS"],
  },
  {
    title: "Jarvis – Pakistan Laws Voicebot",
    subtitle: "Real-time phone voice assistant",
    icon: Scale,
    highlights: [
      "Two-way phone conversations over Twilio. Deepgram transcribes the caller, OpenAI generates the answer and ElevenLabs speaks it back.",
    ],
    stack: ["Twilio", "Deepgram", "ElevenLabs", "OpenAI"],
  },
];

const StackTags = ({ stack }: { stack: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
    {stack.map((tech) => (
      <li
        key={tech}
        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-foreground/80 border border-border/50"
      >
        {tech}
      </li>
    ))}
  </ul>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 text-center">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Production-minded AI systems: voice agents, LLM-assisted data pipelines and retrieval.
        </p>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card gradient-border rounded-xl p-6 md:p-8 hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/15 text-accent flex items-center justify-center flex-shrink-0">
                  <project.icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm">{project.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6 list-disc pl-5 marker:text-accent">
                {project.highlights.map((point) => (
                  <li key={point} className="text-muted-foreground text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>

              <StackTags stack={project.stack} />
            </article>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-foreground mt-16 mb-6 text-center">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <article key={project.title} className="glass-card gradient-border rounded-xl p-6 hover-glow flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <project.icon size={20} className="text-accent flex-shrink-0" aria-hidden="true" />
                <h4 className="font-display font-semibold text-foreground">{project.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.highlights[0]}
              </p>
              <StackTags stack={project.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
