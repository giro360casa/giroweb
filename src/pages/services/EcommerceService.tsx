import { motion } from "framer-motion";
import { ShoppingCart, Palette, Smartphone, Search, Lock, Package, Boxes } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EcommerceService = () => {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Easy Product Discovery",
      desc: "Allow customers to find products effortlessly with intuitive navigation and search functionality.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      desc: "Professional, clean design that showcases your products and enhances brand visibility.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "Your online store works perfectly on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      desc: "Built for search engines to help you attract more organic traffic and customers.",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      desc: "SSL certificates and secure payment gateways using PayPal, Stripe, and more.",
    },
    {
      icon: Package,
      title: "Product Management",
      desc: "Professional product catalog with variants, pricing, and inventory management.",
    },
  ];

  const technologies = [
    { name: "WooCommerce", desc: "Flexible WordPress-based e-commerce solution" },
    { name: "Custom CMS", desc: "Custom-built solutions using Angular + Java backend" },
    { name: "Responsive Design", desc: "Mobile-first approach for all devices" },
    { name: "Secure Payments", desc: "Multiple payment gateway integrations" },
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
                Promote Your Store Online with <span className="bg-yellow-300 text-slate-900 px-2 py-1">E-Commerce</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
                Expand beyond your physical store. Reach customers worldwide with a professional, high-converting e-commerce platform. Your online store is open 24/7, allowing customers to shop anytime, anywhere.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Start Your E-Commerce Journey
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=500&fit=crop" 
                alt="E-Commerce Solutions"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Benefits of Professional <span className="bg-yellow-300 text-slate-900 px-2 py-1">E-Commerce</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3D Configurator Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Add 3D Product <span className="bg-yellow-300 text-slate-900 px-2 py-1">Configurators</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Let customers view your products in 360°, customize colors and materials, and personalize them with logos and text. Interactive 3D configurators increase conversion rates by up to 40% and reduce cart abandonment by 60%.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">What customers can do:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>✓ View products from 360°</li>
                    <li>✓ Zoom in and out</li>
                    <li>✓ Customize colors and materials</li>
                    <li>✓ Add personalization (text/logos)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-slate-900 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560672023-e0e5c8e74fb6?w=600&h=500&fit=crop" 
                  alt="3D Product Configurator"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Technologies We <span className="bg-yellow-300 text-slate-900 px-2 py-1">Use</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
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
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your E-Commerce Store?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create a professional e-commerce platform that drives sales and delights your customers.
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

export default EcommerceService;
