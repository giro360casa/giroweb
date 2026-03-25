import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="relative py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-12 hover:shadow-lg transition-all"
        >
          {/* Quote Icon */}
          <div className="text-6xl text-primary/30 leading-none mb-6">
            &ldquo;&rdquo;
          </div>

          {/* Content */}
          <div>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
              Working with GIRO360 has been an absolute breeze from the start. Expertly navigating our industry's nuances, the team anticipates our needs for a seamless workflow. Efficient service has notably sped up our project delivery and <span className="font-bold text-primary">significantly increased profitability.</span>
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">DC</span>
              </div>
              
              <div>
                <p className="font-bold text-foreground text-lg">Dogan Kahveci</p>
                <p className="text-foreground/70">
                  CEO, <span className="text-primary font-semibold">Zibber</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
