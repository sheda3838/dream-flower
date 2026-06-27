import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import aboutImage from '../assets/images/about-image.png';

const About = () => {
  const features = [
    'Premium Floral Arrangements',
    'Wedding & Event Decorations',
    'Personalized Creative Styling',
    'Trusted Quality & Customer Satisfaction',
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="about" className="w-full min-h-screen flex items-center py-20 lg:py-0 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column: Image with Badge */}
          <motion.div variants={itemVariants} className="relative w-full order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full">
              <img
                src={aboutImage}
                alt="Elegant Floral Decor"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Glassmorphism Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-cream/80 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-2xl shadow-xl shadow-primary/5 flex flex-col items-center justify-center text-center">
              <span className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-1">10+</span>
              <span className="font-body text-xs md:text-sm tracking-widest uppercase text-dark/70 font-medium max-w-[120px]">
                Years of Excellence
              </span>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col order-2">
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="font-body text-sm tracking-[0.2em] uppercase text-accent font-medium">About Us</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
              Crafting Elegant Floral Experiences <br className="hidden md:block" /> For Life's Most Beautiful Moments
            </motion.h2>
            
            <motion.p variants={itemVariants} className="font-body text-dark/80 text-base md:text-lg leading-relaxed font-light mb-10">
              The Dream Flower is a premium floral decoration and event styling company based in Galle, Sri Lanka. With over 10 years of experience, we transform weddings, engagements, birthdays and special celebrations into unforgettable experiences through elegant floral artistry, creative event styling and exceptional attention to detail. Every design is thoughtfully crafted to reflect each client's unique vision while creating memories that last a lifetime.
            </motion.p>
            
            {/* Feature List */}
            <motion.ul variants={itemVariants} className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px] flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="font-body text-dark/90 text-lg font-light">{feature}</span>
                </li>
              ))}
            </motion.ul>

            {/* Statistic Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mt-auto">
              <div className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading text-4xl text-primary font-semibold mb-2">10+</h3>
                <p className="font-body text-sm tracking-wider uppercase text-dark/70">Years Experience</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading text-4xl text-primary font-semibold mb-2">100%</h3>
                <p className="font-body text-sm tracking-wider uppercase text-dark/70">Positive Reviews</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
