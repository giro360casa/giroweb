import { motion } from "framer-motion";
import { ShoppingCart, Palette, Boxes, Share2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Image imports (placeholder - replace with actual image paths)
const ecommerceIllustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop";
const collaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop";
const technologyImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop";
const solutionsImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Promote your products online with professional, responsive e-commerce solutions. Expand your customer base beyond physical boundaries.",
      path: "/services/ecommerce",
      color: "from-blue-100 to-blue-50",
      darkColor: "from-blue-900 to-slate-900",
      iconBg: "bg-blue-200 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Palette,
      title: "Graphics & Printing",
      description: "Create your brand identity with professional graphic design, from logos to print materials. Communicate effectively with your audience.",
      path: "/services/graphics",
      color: "from-purple-100 to-purple-50",
      darkColor: "from-purple-900 to-slate-900",
      iconBg: "bg-purple-200 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Boxes,
      title: "Real-Time 3D",
      description: "Engage customers with interactive 3D product configurators. Increase conversions by 40% and reduce cart abandonment by 60%.",
      path: "/services/3d",
      color: "from-cyan-100 to-cyan-50",
      darkColor: "from-cyan-900 to-slate-900",
      iconBg: "bg-cyan-200 dark:bg-cyan-900",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Build and manage your social media presence. Create engaging content and connect with your audience across all platforms.",
      path: "/services/social-media",
      color: "from-pink-100 to-pink-50",
      darkColor: "from-pink-900 to-slate-900",
      iconBg: "bg-pink-200 dark:bg-pink-900",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="services-hero" className="pt-32 pb-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-yellow-300 text-slate-900 px-2 py-1">Services</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              GIRO360 offers comprehensive digital solutions to transform your business. From e-commerce platforms to cutting-edge 3D technology, we have everything you need to succeed online.
            </p>
          </motion.div>

      {/* Services Grid */}
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
                  onClick={() => navigate(service.path)}
                  className="group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${service.color} dark:${service.darkColor} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}>
                    <div className="p-8 h-full flex flex-col">
                      <div className={`${service.iconBg} rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight size={20} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-yellow-300 text-slate-900 px-2 py-1">GIRO360</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We combine technical expertise with creative excellence to deliver solutions that drive real results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Professional Expertise", desc: "Years of experience delivering top-quality solutions" },
              { title: "Custom Solutions", desc: "Tailored services designed for your specific needs" },
              { title: "24/7 Support", desc: "Dedicated support to keep your business running smoothly" },
              { title: "Latest Technology", desc: "Using cutting-edge tools and frameworks" },
              { title: "Proven Results", desc: "Track record of successful client projects" },
              { title: "Affordable Pricing", desc: "Great value without compromising quality" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{item.desc}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's work together to find the perfect solution for your needs. Contact us today to get started.
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

export default Services;
