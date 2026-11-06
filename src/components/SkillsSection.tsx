const skillGroups = [
  {
    title: "AI Specialization",
    items: ["Retrieval-Augmented Generation (RAG)", "LLM Agents", "Conversational AI", "Voice AI Systems"],
  },
  {
    title: "LLM & AI Frameworks",
    items: ["LangChain", "LangGraph", "OpenAI API", "Hugging Face", "ChromaDB", "FAISS", "Pandas"],
  },
  {
    title: "Backend & Data",
    items: ["FastAPI", "Celery", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Playwright"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, IAM, Lambda)", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana", "Linux (Ubuntu)", "Git & GitHub"],
  },
  {
    title: "Languages",
    items: ["Python", "Java", "C/C++", "SQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-glow-primary/5 via-glow-secondary/10 to-glow-primary/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`glass-card gradient-border rounded-xl p-6 animate-slide-up ${
                index === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="font-display font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm px-3 py-1 rounded-md bg-secondary/60 text-foreground/85 border border-border/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
