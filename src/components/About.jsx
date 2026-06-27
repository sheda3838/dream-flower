import { motion } from 'framer-motion';

const About = () => {
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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Floating keywords for desktop luxury aesthetic
  const floatingKeywords = [
    { word: 'Elegance', top: '15%', left: '8%', delay: 0 },
    { word: 'Craftsmanship', top: '75%', left: '88%', delay: 1 },
    { word: 'Emotion', top: '20%', left: '85%', delay: 0.5 },
    { word: 'Detail', top: '80%', left: '12%', delay: 1.5 },
  ];

  return (
    <section id="about" className="relative w-full h-[100dvh] bg-cream overflow-hidden flex items-center">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/15 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/3"></div>

      {/* Floating Keywords Layer */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingKeywords.map((kw, i) => (
          <motion.span
            key={kw.word}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: kw.delay,
            }}
            className="absolute font-body text-xs tracking-[0.2em] uppercase text-primary/30 blur-[0.5px]"
            style={{ top: kw.top, left: kw.left }}
          >
            {kw.word}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between gap-8 lg:gap-16 xl:gap-24"
        >
          {/* Left Column: Typographic Statement */}
          <div className="flex-1 flex flex-col justify-center w-full lg:max-w-xl">
            <motion.div variants={fadeUp} className="mb-6 lg:mb-8">
              <span className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary font-medium">About Us</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-dark leading-[1.1] mb-8 lg:mb-16"
            >
              Crafting timeless floral experiences for life’s most beautiful moments.
            </motion.h2>

            <motion.div variants={fadeUp} className="hidden lg:block mt-12 mb-8">
              <p className="font-heading italic text-xl md:text-2xl text-dark/60 border-l border-accent pl-6">
                “Designed with intention.<br/>Crafted with emotion.”
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4 mt-6 lg:mt-auto">
              <a href="#services" className="btn-primary w-full sm:w-auto text-center">
                Learn More
              </a>
              <a href="#gallery" className="btn-secondary w-full sm:w-auto text-center">
                View Our Story
              </a>
            </motion.div>
          </div>

          {/* Right Column: Support Text & Interactive Stat Cards */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0 flex flex-col justify-center">
            <motion.p 
              variants={fadeUp}
              className="font-body text-dark/70 text-base md:text-lg leading-relaxed font-light mb-8 lg:mb-12"
            >
              The Dream Flower transforms weddings and celebrations into elegant visual stories through refined floral artistry and thoughtful design.
            </motion.p>

            {/* Stat Cards - Morphing / Staggered Layout Feel */}
            <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] w-full">
              {/* Card 1 */}
              <motion.div 
                variants={floatVariant}
                whileHover="hover"
                className="absolute top-0 left-0 w-[48%] sm:w-56 bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group z-20 cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-heading text-3xl sm:text-4xl text-primary mb-1 relative z-10">10+</h3>
                <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-dark/70 relative z-10">Years Experience</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={floatVariant}
                whileHover="hover"
                className="absolute top-16 sm:top-20 right-0 w-[45%] sm:w-52 bg-white/30 backdrop-blur-lg border border-white/50 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group z-10 cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-heading text-3xl sm:text-4xl text-primary mb-1 relative z-10">100+</h3>
                <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-dark/70 relative z-10">Events Styled</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={floatVariant}
                whileHover="hover"
                className="absolute top-36 sm:top-48 left-8 sm:left-12 w-[55%] sm:w-64 bg-primary/5 backdrop-blur-xl border border-primary/10 p-5 rounded-2xl shadow-[0_10px_40px_rgba(54,92,73,0.08)] group z-30 cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-1 relative z-10">Premium</h3>
                <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-dark/70 relative z-10">Wedding Designs</p>
              </motion.div>
            </div>

            {/* Mobile Signature Line */}
            <motion.div variants={fadeUp} className="lg:hidden mt-8 text-center sm:text-left border-l border-accent pl-4">
              <p className="font-heading italic text-lg text-dark/60">
                “Designed with intention. Crafted with emotion.”
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
