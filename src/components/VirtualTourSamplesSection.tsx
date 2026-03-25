import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VirtualTourSamplesSection = () => {
  const tours = [
    {
      id: 1,
      title: "Luxury Hotel Lobby",
      description: "Experience the grandeur of our five-star hotel entrance",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=400&fit=crop",
      type: "Hotel"
    },
    {
      id: 2,
      title: "Modern Office Space",
      description: "Explore our state-of-the-art corporate office environment",
      image: "https://images.unsplash.com/photo-1497366216548-495f4f919852?w=500&h=400&fit=crop",
      type: "Commercial"
    },
    {
      id: 3,
      title: "Contemporary Home",
      description: "Tour a beautifully designed modern residential property",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
      type: "Residential"
    }
  ];

  return (
    <section id="virtual-tours" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Sample Tours
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Take a Walk With Us
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Explore these stunning virtual tour samples to see what's possible with our platform
          </p>
        </motion.div>

        {/* Virtual Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow hover:border-primary/30 transition-all group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>
                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {tour.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {tour.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {tour.description}
                </p>
                <button className="w-full bg-primary/10 text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/70 mb-6">
            Ready to create your own immersive virtual tours?
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Start Your Free Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTourSamplesSection;
