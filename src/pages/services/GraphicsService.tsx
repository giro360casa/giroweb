import { motion } from "framer-motion";
import { Palette, Briefcase, Zap, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GraphicsService = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      desc: "Create a unique, professional visual identity that represents your company. Logo design, color palette, typography, and brand guidelines.",
    },
    {
      icon: Briefcase,
      title: "Corporate Image",
      desc: "Develop a cohesive image across all touchpoints - business cards, letterheads, envelopes, and presentations.",
    },
    {
      icon: Eye,
      title: "Print Materials",
      desc: "Professional design for brochures, flyers, posters, packaging, and other print materials.",
    },
    {
      icon: Zap,
      title: "Digital Graphics",
      desc: "Eye-catching social media graphics, banners, ads, and digital content for all platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Graphics & Print: Bring Your <span className="bg-yellow-300 text-slate-900 px-2 py-1">Brand</span> to Life
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
                Your brand identity is the foundation of your business. From logo design to corporate materials, we create cohesive, professional graphics that make a lasting impression.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                Discuss Your Brand
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop" 
                alt="Graphics & Design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                What is <span className="bg-yellow-300 text-slate-900 px-2 py-1">Brand Identity?</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Brand Identity is the set of visual elements that represent your company - both online and on paper. It's how you communicate who you are, what you value, and why customers should choose you.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                We work closely with you to understand your business, your goals, and what makes you unique. Then we craft a visual identity that captures your essence and stands out in the market.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-semibold">Professional Logo Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-semibold">Color Palette & Typography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-semibold">Brand Guidelines</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-96"
            >
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop" 
                alt="Brand Identity Design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-yellow-300 text-slate-900 px-2 py-1">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-purple-200 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paper vs Digital Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Paper & Digital <span className="bg-yellow-300 text-slate-900 px-2 py-1">Graphics</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              In today's world, you need graphics that work everywhere. From traditional print materials to social media, we create designs that communicate your brand consistently across all platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Print Materials
              </h3>
              <ul className="space-y-4">
                {[
                  "Business cards & letterheads",
                  "Brochures & flyers",
                  "Packaging & labels",
                  "Posters & banners",
                  "Catalogs & annual reports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Digital Graphics
              </h3>
              <ul className="space-y-4">
                {[
                  "Social media posts & stories",
                  "Web banners & ads",
                  "Email graphics",
                  "Landing page designs",
                  "Infographics & presentations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's Design Your Brand Identity
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Make a lasting impression with professional graphics that reflect your brand's values and vision.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Start Your Design Project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicsService;
