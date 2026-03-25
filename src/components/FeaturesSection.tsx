import { motion } from "framer-motion";
import { Building2, BookOpen, Home, Landmark, ShoppingBag } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Real estate",
    desc: "Allow potential buyers or tenants to virtually visit a property without the need to physically move. A virtual tour offers a complete view of spaces, architectural details and finishes, improving the shopping experience and reducing decision time. Ideal for real estate agencies, builders and property managers."
  },
  {
    icon: Landmark,
    title: "Tourism and Culture",
    desc: "Turn the promotion of tourist destinations, museums and historical sites into immersive experiences. A visitor can explore a medieval castle, a city of art, or an archaeological site with audio and video details that enrich the virtual journey. A perfect opportunity for tourist boards, museums and cultural institutions."
  },
  {
    icon: ShoppingBag,
    title: "Retail and Showroom",
    desc: "Create a digital display space where customers can see your products in a realistic and interactive context. A virtual tour can simulate a physical store or flagship store, allowing users to navigate shelves and view product details with information sheets, how-to videos, and customization options. Perfect for fashion, furniture, automotive and technology brands."
  }
];

const features = [
  {
    icon: Building2,
    title: "Industry and Logistics",
    desc: "Optimize the design and management of industrial and logistics spaces with 3D simulations. A virtual tour can show the organization of a production plant, the layout of machines, or help plan the loading of a container more efficiently. Useful for manufacturing companies, logistics operators and industrial solution providers."
  },
  {
    icon: BookOpen,
    title: "Training and Education",
    desc: "Deliver an innovative learning experience with immersive learning environments. Schools, universities, and companies can use virtual tours for interactive lectures, lab simulations, or corporate training. For example, a medical course might include an interactive virtual tour of a human anatomy in 3D, while a company might use a virtual environment to train staff on safety procedures."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Where can you <span className="bg-yellow-300 text-slate-900 px-2 py-1">use</span> 3D Virtual Tours?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Virtual tours are applied in <span className="font-bold text-foreground">numerous sectors</span>, offering new opportunities for the presentation and enhancement of spaces:
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <useCase.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
                {useCase.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                {useCase.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {features[0].title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              {features[0].desc}
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {features[1].title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              {features[1].desc}
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                Explore the <span className="font-bold">Palazzo Dosi Magnavacca</span> in Pontremoli with our 3D virtual tour.
              </h3>
            </div>
            <div className="space-y-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-white text-slate-900 font-bold py-3 px-6 rounded-lg text-center hover:bg-slate-100 transition-colors"
              >
                Live the experience now!
              </motion.a>
              <p className="text-center text-white/80">
                Contact us and create your virtual tour!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
