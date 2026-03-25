import { motion } from "framer-motion";
import { Image, Layout, Video, Box } from "lucide-react";

// Placeholder for service card images - you can replace these with actual image imports
const ServicesSection = () => {
  const handleLearnMore = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Image,
      title: "Photo editing",
      description: "Fast edits. Consistent quality. Lower cost per listing.",
      details: "Professional photo editing with consistent quality at competitive prices.",
    },
    {
      icon: Layout,
      title: "Floor Plans",
      description: "High-volume 2D & 3D floor plan delivery with precision and speed",
      details: "Accurate floor plans delivered quickly for all your listings.",
    },
    {
      icon: Video,
      title: "Video editing",
      description: "High-quality real estate videos with minimal turnaround",
      details: "Professional video editing for compelling property showcases.",
    },
    {
      icon: Box,
      title: "3D Visualisation",
      description: "Virtual staging & renovations made easy and affordable.",
      details: "Virtual staging and 3D visualizations for enhanced presentations.",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Services</span> For Your Needs
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-card border border-border rounded-xl p-8 hover:shadow-glow hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3 text-lg">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-muted-foreground text-xs">{service.details}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
