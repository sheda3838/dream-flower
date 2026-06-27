import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop' },
  { id: 5, src: 'https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=2073&auto=format&fit=crop' },
  { id: 6, src: 'https://images.unsplash.com/photo-1563241598-6364026048d0?q=80&w=1969&auto=format&fit=crop' },
  { id: 7, src: 'https://images.unsplash.com/photo-1530103862676-de8892ebe9bd?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop' },
  // Extra images shown on expand
  { id: 9, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop' },
  { id: 10, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop' },
  { id: 11, src: 'https://images.unsplash.com/photo-1507504031003-b417240aed3b?q=80&w=2070&auto=format&fit=crop' },
  { id: 12, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop' },
  { id: 13, src: 'https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop' },
  { id: 14, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop' },
  { id: 15, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop' },
  { id: 16, src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop' },
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const visibleImages = isExpanded ? galleryImages : galleryImages.slice(0, 8);

  const handleToggle = () => {
    if (isExpanded) {
      // Scroll back up before collapsing
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      // Delay state change slightly to allow scroll to start smoothly
      setTimeout(() => setIsExpanded(false), 300);
    } else {
      setIsExpanded(true);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    }
  };

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className={`w-full bg-cream transition-all duration-700 ease-in-out flex flex-col justify-center items-center py-16 ${
        isExpanded ? 'min-h-screen' : 'h-auto lg:h-screen lg:max-h-screen'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full flex flex-col h-full justify-center">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 md:w-12 bg-accent"></div>
            <span className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-accent font-medium">Our Gallery</span>
            <div className="h-[1px] w-8 md:w-12 bg-accent"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl text-dark mb-4 leading-tight"
          >
            Moments We Bring to Life
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-dark/70 text-sm md:text-base leading-relaxed font-light mx-auto"
          >
            A glimpse into the beautiful celebrations we've had the honor to design. Every arrangement tells a story of elegance, creativity and unforgettable memories.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 w-full"
        >
          <AnimatePresence>
            {visibleImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-primary/5 bg-white/50"
              >
                <img 
                  src={img.src} 
                  alt={`Gallery Image ${img.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:flex items-center justify-center">
                  <span className="font-body text-cream text-xs tracking-widest uppercase font-medium border border-cream/50 px-6 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        <motion.div 
          layout
          className="flex justify-center mt-8 md:mt-12 shrink-0"
        >
          <button
            onClick={handleToggle}
            className="px-8 py-3 border border-primary text-primary rounded-none text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-cream transition-colors duration-300"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
