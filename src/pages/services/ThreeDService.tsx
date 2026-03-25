import { motion } from "framer-motion";
import { Boxes, Eye, Zap, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThreeDService = () => {
  const features = [
    {
      icon: Eye,
      title: "360° Product Viewing",
      desc: "Let customers see your products from every angle. Rotate, zoom in/out, and explore every detail.",
    },
    {
      icon: Boxes,
      title: "Product Customization",
      desc: "Allow customers to customize colors, materials, and finishes before purchase.",
    },
    {
      icon: Zap,
      title: "Personalization",
      desc: "Add custom text, logos, and branding to products right in the viewer.",
    },
    {
      icon: BarChart3,
      title: "Increased Conversions",
      desc: "40% higher conversion rates and 60% fewer abandoned carts with interactive 3D.",
    },
  ];

  const useCases = [
    { title: "E-Commerce", desc: "Add 3D configurators to your product pages for higher conversions" },
    { title: "Real Estate", desc: "Create immersive 3D virtual tours of properties" },
    { title: "Manufacturing", desc: "Visualize complex products and demonstrate features" },
    { title: "Fashion", desc: "Let customers see clothing and accessories in 3D" },
    { title: "Furniture", desc: "Visualize how furniture looks in different settings" },
    { title: "Automotive", desc: "Interactive 3D configurators for car customization" },
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
                Real-Time 3D: Engage Customers with <span className="bg-yellow-300 text-slate-900 px-2 py-1">Interactive Experiences</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
                Transform how customers interact with your products. With real-time 3D technology, they can explore products in stunning detail, customize them to their preferences, and make confident purchasing decisions.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-cyan-600 text-white font-semibold text-lg hover:bg-cyan-700 transition-colors"
              >
                Explore 3D Solutions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" 
                alt="3D Interactive Experience"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-yellow-300 text-slate-900 px-2 py-1">3D Matters</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-cyan-200 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900 dark:to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
              Proven <span className="bg-yellow-300 text-slate-900 px-2 py-1">Impact</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "40%", label: "Higher Conversion Rates", desc: "Customers are more likely to buy when they can see products in 3D" },
                { number: "60%", label: "Fewer Abandoned Carts", desc: "Interactive 3D reduces purchase hesitation" },
                { number: "3x", label: "More Engagement", desc: "Users spend more time with 3D products" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                    {stat.number}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Who Benefits from <span className="bg-yellow-300 text-slate-900 px-2 py-1">3D Technology</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {useCase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="bg-yellow-300 text-slate-900 px-2 py-1">3D Technology</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We use the latest real-time 3D rendering engines to create stunning, interactive product experiences that work seamlessly across all devices and browsers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience 3D?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create an interactive 3D experience that transforms how customers engage with your products.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get Started with 3D
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThreeDService;
