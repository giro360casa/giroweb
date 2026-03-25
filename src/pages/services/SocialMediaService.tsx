import { motion } from "framer-motion";
import { Share2, TrendingUp, Users, Calendar, BarChart3, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SocialMediaService = () => {
  const services = [
    {
      icon: Share2,
      title: "Content Creation",
      desc: "Professional, engaging content tailored to your brand and audience across all platforms.",
    },
    {
      icon: Calendar,
      title: "Social Scheduling",
      desc: "Consistent posting schedule optimized for engagement and reach on all platforms.",
    },
    {
      icon: Users,
      title: "Community Management",
      desc: "Engage with your audience, respond to comments, and build a loyal community.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Track performance, measure ROI, and optimize strategies based on data.",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      desc: "Strategic planning to grow your following and increase engagement.",
    },
    {
      icon: MessageSquare,
      title: "Paid Advertising",
      desc: "Targeted ads to reach the right audience and drive conversions.",
    },
  ];

  const platforms = [
    { name: "Facebook", icon: "f" },
    { name: "Instagram", icon: "📷" },
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "TikTok", icon: "♪" },
    { name: "YouTube", icon: "▶" },
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
                Social Media Management: Build Your <span className="bg-yellow-300 text-slate-900 px-2 py-1">Online Presence</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
                In today's digital world, social media is essential. We create and manage compelling content that engages your audience, builds brand loyalty, and drives business results.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg bg-pink-600 text-white font-semibold text-lg hover:bg-pink-700 transition-colors"
              >
                Let's Grow Your Social Media
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=500&fit=crop" 
                alt="Social Media Strategy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-pink-200 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              We Manage All <span className="bg-yellow-300 text-slate-900 px-2 py-1">Platforms</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              From Facebook to TikTok, we have expertise across all major social media platforms. We tailor content and strategy for each platform to maximize engagement and reach.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-full px-8 py-4 hover:shadow-lg transition-all"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Strategic <span className="bg-yellow-300 text-slate-900 px-2 py-1">Content Planning</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Social media success doesn't happen by accident. We create comprehensive strategies based on your business goals, target audience, and market trends.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Our Approach:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>✓ Audience research and analysis</li>
                    <li>✓ Content calendar planning</li>
                    <li>✓ Brand voice consistency</li>
                    <li>✓ Engagement optimization</li>
                    <li>✓ Paid campaign management</li>
                    <li>✓ Performance analytics</li>
                  </ul>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" 
                alt="Social Media Strategy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Content We <span className="bg-yellow-300 text-slate-900 px-2 py-1">Create</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Visual Content",
                items: ["Posts and graphics", "Stories and reels", "Infographics", "Carousel posts"],
              },
              {
                category: "Video Content",
                items: ["Short-form videos", "Tutorials and how-tos", "Behind-the-scenes", "Product demos"],
              },
              {
                category: "Written Content",
                items: ["Engaging captions", "Blog snippets", "FAQs and tips", "Event announcements"],
              },
              {
                category: "Interactive",
                items: ["Polls and quizzes", "Live streams", "Q&A sessions", "User-generated content"],
              },
            ].map((contentType, index) => (
              <motion.div
                key={contentType.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6">
                  {contentType.category}
                </h3>
                <ul className="space-y-3">
                  {contentType.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-pink-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow on Social Media?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create a social media strategy that drives engagement, builds community, and achieves your business goals.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Let's Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaService;
