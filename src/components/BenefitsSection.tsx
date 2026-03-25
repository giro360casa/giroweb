import { motion } from "framer-motion";
import { Clock, DollarSign, CheckCircle, Zap, Lock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast turnaround",
      description: "Your projects done fast, with 24 hrs turnaround!",
    },
    {
      icon: DollarSign,
      title: "Lowest costs",
      description: "Keep your margins high with the lowest production costs.",
    },
    {
      icon: CheckCircle,
      title: "No-cost revisions",
      description: "Corrections are free of charge and free of hassle",
    },
    {
      icon: Zap,
      title: "Standardized",
      description: "Fully optimized standard workflows for speed and quality at scale",
    },
    {
      icon: Lock,
      title: "Copyright free",
      description: "100% copyright-free, no legal concerns or usage rights.",
    },
  ];

  return (
    <section id="benefits" className="relative py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Here's what sets us apart
          </h2>
          <p className="text-lg text-secondary-foreground font-medium">
            Unique benefits that make us the perfect partner for your success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-secondary mx-auto" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
