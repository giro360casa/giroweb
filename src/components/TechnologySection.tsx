import { motion } from "framer-motion";
import { Camera, Cpu, Monitor, Headset } from "lucide-react";

const steps = [
  { icon: Camera, title: "Photography", desc: "Our 360° photographers use the latest technology to capture every detail of your property in stunning quality." },
  { icon: Cpu, title: "Production", desc: "Our expert team integrates your branding, logo, fonts, and corporate colours into the virtual tour." },
  { icon: Monitor, title: "Publishing", desc: "Your tour is optimized for all devices — desktop, mobile, tablets — and VR headsets." },
  { icon: Headset, title: "VR Ready", desc: "Experience tours with any 3D VR headset for a truly immersive feeling of being on-site." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Process</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Technology & <span className="text-gradient">Distribution</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-primary/20 font-heading text-6xl font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
