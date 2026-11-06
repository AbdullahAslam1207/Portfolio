import { Briefcase, GraduationCap } from "lucide-react";

const experience = {
  role: "Associate AI Engineer",
  company: "Developers Den",
  period: "Jan 2025 – Present",
  highlights: [
    "Built LLM-powered backend services with FastAPI and Flask, integrating generative AI models into 3 production systems used by active clients.",
    "Designed RAG pipelines and chatbot systems with LangChain, Hugging Face Transformers and the OpenAI APIs, cutting average query latency by ~35%.",
    "Deployed scalable, microservice-based ML infrastructure on AWS (EC2, S3, Lambda) for data-intensive AI workloads, sustaining 99%+ uptime.",
    "Optimized PostgreSQL schemas and queries for backend components handling 500+ AI-generated interactions per day.",
    "Automated CI/CD pipelines with Docker and GitHub Actions, reducing deployment time by ~40% across AI services.",
  ],
};

const education = {
  school: "National University of Computers and Emerging Sciences (FAST-NUCES)",
  degree: "Bachelor of Computer Science",
  period: "Aug 2022 – 2026",
  detail: "CGPA: 3.36 / 4.0",
};

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          Experience
        </h2>

        <article className="glass-card gradient-border rounded-xl p-6 md:p-8 hover-glow animate-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 text-accent flex items-center justify-center flex-shrink-0">
                <Briefcase size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">{experience.role}</h3>
                <p className="text-accent text-sm">{experience.company}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-mono sm:text-right">{experience.period}</p>
          </div>

          <ul className="space-y-3 list-disc pl-5 marker:text-accent">
            {experience.highlights.map((point) => (
              <li key={point} className="text-muted-foreground text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </article>

        <h2 id="education" className="text-3xl md:text-4xl font-display font-bold text-foreground mt-16 mb-8 text-center scroll-mt-20">
          Education
        </h2>
        <article className="glass-card gradient-border rounded-xl p-6 md:p-8 animate-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 text-accent flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground">{education.school}</h3>
                <p className="text-accent text-sm">{education.degree}</p>
                <p className="text-muted-foreground text-sm mt-1">{education.detail}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-mono sm:text-right whitespace-nowrap">{education.period}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkExperience;
