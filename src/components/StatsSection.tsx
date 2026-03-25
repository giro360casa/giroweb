import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      number: "75%",
      label: "LESS RE-SHOOTS",
      description: "Don't let less-than-ideal conditions disrupt your shoot or delay delivery—fix it easily with post-production.",
    },
    {
      number: "99%",
      label: "ON-TIME DELIVERY",
      description: "Stay on track and hit your SLAs and KPIs with reliable, punctual service.",
    },
    {
      number: "0.8%",
      label: "REWORK RATE",
      description: "Achieve higher quality with minimal revisions.",
    },
    {
      number: "24H",
      label: "TURNAROUND",
      description: "Never miss a deadline with our fast, reliable turnaround.",
    },
  ];

  return (
    <section id="stats" className="relative py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Performance</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            See why top professionals <span className="bg-yellow-300 text-slate-900 px-2 py-1">trust us every day</span>
          </h2>
          <p className="text-lg text-foreground/80 font-medium mt-4">Proven performance metrics that matter.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
            >
              <div className="mb-6">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm md:text-base font-bold text-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
