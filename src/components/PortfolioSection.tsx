import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/welcomep.jpg";

const projects = [
  { img: portfolio1, title: "villa dante parco", category: "parco", url: "https://welcome-ten-black.vercel.app/" },
  { img: portfolio2, title: "villa dante", category: "Library", url: "https://villa-dante-library.vercel.app/" },
  { img: portfolio3, title: "Corporate Headquarters", category: "universty of messina", url: "https://welcome-point.vercel.app/" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Explore Our Latest <span className="text-gradient">360° Tours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={project.url}             // Added this
              target="_blank"                // Opens in a new tab
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-1">{project.category}</p>
                <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                <span className="mt-3 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium">
                  Explore Tour
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
