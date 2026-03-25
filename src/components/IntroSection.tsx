import { motion } from "framer-motion";
import multideviceImage from "@/assets/Gemini_Generated_Image_z65yj6z65yj6z65y.png";

const IntroSection = () => {
  return (
    <section id="intro" className="relative min-h-screen flex items-stretch overflow-hidden bg-background">
      {/* Left Side - Phone with matching background */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-6 md:px-12 py-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md relative z-10"
        >
          <motion.img
            src={multideviceImage}
            alt="Interactive Virtual Tours Interface"
            className="w-full h-auto rounded-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))",
              backgroundColor: "transparent"
            }}
          />
        </motion.div>
        {/* Gradient overlay to blend edges */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background opacity-40"></div>
      </div>

      {/* Right Side - Content with matching background */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Interactive <span className="text-gradient">360° Tours</span> at Your Fingertips
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Explore properties in stunning detail with our immersive virtual tour technology. Navigate every room like you're actually there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Explore Tours
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
