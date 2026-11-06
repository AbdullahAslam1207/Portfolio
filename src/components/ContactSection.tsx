import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const socialLinks = [
  { name: "GitHub", icon: Github, href: CONTACT.github },
  { name: "LinkedIn", icon: Linkedin, href: CONTACT.linkedin },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          Let's Work Together
        </h2>

        <div className="animate-slide-up">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm looking for AI / ML engineering roles where I can build and ship practical LLM, RAG and voice AI
            products. If you're hiring or have a project in mind, I'd be glad to talk.
          </p>

          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors mb-8 text-lg"
          >
            <Mail size={20} aria-hidden="true" />
            {CONTACT.email}
          </a>

          <div className="flex gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover-glow transition-all"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
