import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slight scale animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Floral Decoration"
          className="w-full h-full object-cover"
        />
        {/* Soft dark green overlay */}
        <div className="absolute inset-0 bg-dark/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight drop-shadow-sm"
        >
          Blooming Moments, <br />
          <span className="italic">Beautiful Memories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-body text-body text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm"
        >
          Elegant floral decorations for weddings, engagements, birthdays and unforgettable
          celebrations crafted with creativity and passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-primary text-cream rounded-none text-sm tracking-[0.2em] uppercase hover:bg-cream hover:text-primary transition-colors duration-300 w-full sm:w-auto"
          >
            Book Consultation
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-cream text-cream rounded-none text-sm tracking-[0.2em] uppercase hover:bg-cream/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
