import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/AbdullahAslam1207" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-aslam-2166371b5" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 animate-fade-in">
          Contact
        </h2>

        <div className="animate-slide-up">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I collaborate with cross-functional teams focused on improving people's lives through accessible, human-centered technology.
            Have a project in mind? Let's connect.
          </p>

          <a
            href="mailto:am0055461@gmail.com"
            className="text-accent hover:text-highlight transition-colors inline-block mb-8 text-lg"
          >
            am0055461@gmail.com
          </a>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
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
