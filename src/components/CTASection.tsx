import { motion } from "framer-motion";
import { Laptop, Home } from "lucide-react";

const CTASection = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Next Steps</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Ready to take the <span className="text-gradient">next step?</span>
          </h2>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Talk to our team */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card border border-border rounded-xl p-12 overflow-hidden group hover:shadow-glow hover:border-primary/30 transition-all"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Laptop className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Talk to our team.
              </h3>
              <p className="text-foreground/80 text-base leading-relaxed mb-8">
                Connect with our experts and discover how we can help your business today!
              </p>

              {/* Link */}
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-primary/80 transition-colors underline"
              >
                Message us on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Card 2: Start your free test */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-card border border-border rounded-xl p-12 overflow-hidden group hover:shadow-glow hover:border-primary/30 transition-all"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Start your free test.
              </h3>
              <p className="text-foreground/80 text-base leading-relaxed mb-8">
                Test the images of one listing for free — no sign-up, no payment, no commitment.
              </p>

              {/* Link */}
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="text-primary font-bold hover:text-primary/80 transition-colors underline"
              >
                Start your free test
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
