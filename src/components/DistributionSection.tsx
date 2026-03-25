import { motion } from "framer-motion";
import { Globe, Share2, Smartphone, Wifi } from "lucide-react";

const channels = [
  { icon: Globe, title: "Your Website", desc: "Seamlessly integrate your virtual tour into your existing website." },
  { icon: Share2, title: "Third-Party Sites", desc: "Establish connections with external sites and influencers to promote your tour." },
  { icon: Smartphone, title: "Social Media", desc: "Showcase your brand assets with clever social media marketing campaigns." },
  { icon: Wifi, title: "Offline Access", desc: "Enjoy remote access and offline viewing of your tour from anywhere, anytime." },
];

const DistributionSection = () => {
  return (
    <section id="distribution" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Reach Everywhere</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            360° Virtual Tour <span className="text-gradient">In Action</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-gradient border border-border rounded-xl p-8 text-center hover:shadow-glow hover:border-primary/30 transition-all duration-300"
            >
              <ch.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{ch.title}</h3>
              <p className="text-muted-foreground text-sm">{ch.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
