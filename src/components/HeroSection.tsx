import { motion } from "framer-motion";
import heroPanorama from "@/assets/hero-panorama.jpg";
import walkWithUsImage from "@/assets/walk-with-us.png";
import giroLogoVertical from "@/assets/giro-logo-vertical.png";
// Change these two lines:
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolioW from "@/assets/welcomep.jpg";

const HeroSection = () => {
  const virtualTourSamples = [
    {
      name: "villa House",
      url: "https://your-new-home-nu.vercel.app/",
      image: portfolioW,
    },
    {
      name: "villadante parco",
      url: "https://welcome-ten-black.vercel.app/",
      image: portfolio1,
    },
    {
      name: "Villa Dante",
      url: "https://villa-dante-library.vercel.app/",
      image: portfolio2,
    },
    {
      name: "welcome point",
      url: "https://welcome-point.vercel.app/",
      image: portfolioW,
    },
  ];

  return (
    <>
      {/* Top Section - Original 360 Planet View */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroPanorama}
            alt="360 virtual tour panorama"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-16">
          {/* GIRO 360 Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img
              src={giroLogoVertical}
              alt="GIRO 360"
              className="h-80 w-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Immersive Virtual Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          >
            Fast, consistent real estate visuals
            <br />
            <span className="text-gradient">at the lowest cost</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            We create, develop, and publish completely interactive 360° HD virtual tours
            for a variety of industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
            <div className="w-6"></div> {/* Maintained spacing */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Bottom Section - Take A Walk With Us */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-background">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-6 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* 360 Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">360</span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-medium tracking-widest uppercase text-sm mb-6"
            >
              Explore 360° Virtual Tours
            </motion.p>

            {/* Divider */}
            <div className="w-12 h-1 bg-primary mb-8" />

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Take A Walk
              <br />
              <span className="text-primary">With Us</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
            >
              If a picture is worth a thousand words, a virtual tour tells the whole story. More than merely displaying an amazing visual effect for your website, all of our HD 360 VR virtual tours are completely interactive and serve as a powerful tool to promote your business.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              href="#portfolio"
              className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Explore the potential of a 3D virtual tour
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Image and Thumbnails */}
        <div className="hidden lg:flex w-1/2 relative bg-background">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
          >
            <img
              src={walkWithUsImage}
              alt="Luxury property virtual tour"
              className="w-full h-full object-cover"
            />

            {/* 360 Viewer Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-all">
                <span className="text-primary text-sm font-semibold">360°</span>
              </div>
            </motion.div>

            {/* Virtual Tour Samples Preview */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-6 px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {virtualTourSamples.map((sample, index) => (
                  <motion.div
                    key={sample.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <div className="aspect-square w-full bg-gray-600 rounded-md overflow-hidden mb-2 flex items-center justify-center">
                      <img
                        src={sample.image || "https://via.placeholder.com/120x120?text=Tour+Preview"}
                        alt={sample.name}
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition"
                      />
                    </div>
                    <p className="text-foreground text-xs font-semibold text-center group-hover:text-primary transition-colors mb-2">
                      {sample.name}
                    </p>
                    <a
                      href={sample.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-semibold hover:bg-primary/90 transition-colors"
                    >
                      View Virtual Tour
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
