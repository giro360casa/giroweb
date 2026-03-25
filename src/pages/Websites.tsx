import { motion } from "framer-motion";
import { Globe, Zap, Search, Smartphone, Shield, TrendingUp, Code, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Websites = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Visual Impact",
      description: "Stand out with a visually stunning website that captures your audience's attention and represents your brand professionally.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Fast loading times and smooth user experience across all devices. Optimized for maximum engagement and conversions.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built with search engines in mind. Rank higher in search results and drive organic traffic to your business.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect on all devices - desktop, tablet, and mobile. Your website will look great everywhere.",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Built with privacy and data protection in mind. Fully compliant with GDPR legislation and regulations.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      description: "Strategic design that guides visitors to take action. Increase sales and customer engagement.",
    },
  ];

  const solutions = [
    { icon: Code, title: "Web Development", desc: "Custom websites built with modern technologies" },
    { icon: Palette, title: "Design & UI/UX", desc: "Beautiful interfaces focused on user experience" },
    { icon: Shield, title: "Security", desc: "Enterprise-grade security and protection" },
    { icon: Globe, title: "Performance", desc: "Lightning-fast loading and seamless experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Responsive <span className="bg-yellow-300 text-slate-900 px-2 py-1">Websites</span> for Your Business
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                At GIRO360, we create sophisticated, high-performance websites with visual impact, optimized functionality, strong SEO, and full GDPR compliance.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Build your website with GIRO360
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=500&fit=crop" 
                alt="Professional Website Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-yellow-300 text-slate-900 px-2 py-1">GIRO360</span> for Your Website?
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We deliver websites that combine stunning design, exceptional performance, and measurable results for your business.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Complete Web <span className="bg-yellow-300 text-slate-900 px-2 py-1">Solutions</span> for Your Business
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                GIRO360 brings years of experience in creating sophisticated web solutions that support business processes across various industries and sectors.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Explore Our Solutions
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {solution.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-96 md:col-span-2 lg:col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" 
                alt="Business Solutions"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to elevate your online presence?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let GIRO360 create a professional website that drives real results for your business. Contact us today to get started.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Websites;
