import { motion } from 'framer-motion';
import heroVideo from '../assets/videos/hero.mp4';

const TIMING = {
  START_DELAY: 2.0, // Content begins revealing at 2 seconds
  STAGGER: 0.3,     // Delay between each element
  DURATION: 1.2,    // Duration of each animation
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: TIMING.DURATION,
      delay: TIMING.START_DELAY + customDelay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-dark">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Soft dark green overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(12,22,18,.55)' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex h-full items-center justify-center md:justify-start">
        <div className="max-w-[700px] flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0 w-full">
          {/* 1. Small decorative label */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="mb-4"
          >
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold">
              The Dream Flower
            </span>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h1
            custom={TIMING.STAGGER * 1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-cream mb-6 leading-[1.1] drop-shadow-md"
          >
            Blooming Moments, <br />
            <span className="italic">Beautiful Memories</span>
          </motion.h1>

          {/* 3. Supporting Text */}
          <motion.p
            custom={TIMING.STAGGER * 2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="font-body text-cream/90 text-lg md:text-xl font-light mb-10 leading-relaxed drop-shadow-sm max-w-2xl"
          >
            Elegant floral decorations for weddings, engagements, birthdays and unforgettable
            celebrations crafted with creativity and passion.
          </motion.p>

          {/* 4. & 5. Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <motion.a
              custom={TIMING.STAGGER * 3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              href="#booking"
              className="btn-primary w-full sm:w-auto"
            >
              Book Consultation
            </motion.a>
            <motion.a
              custom={TIMING.STAGGER * 4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-cream/70 text-cream font-body text-sm tracking-widest uppercase transition-all duration-300 ease-out hover:bg-cream hover:text-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-cream/20 active:scale-95 w-full sm:w-auto"
            >
              Explore Gallery
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
