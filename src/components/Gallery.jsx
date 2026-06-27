import { motion } from 'framer-motion';
import GalleryTrack from './GalleryTrack';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop' },
  { id: 5, src: 'https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=2073&auto=format&fit=crop' },
  { id: 6, src: 'https://images.unsplash.com/photo-1563241598-6364026048d0?q=80&w=1969&auto=format&fit=crop' },
  { id: 7, src: 'https://images.unsplash.com/photo-1530103862676-de8892ebe9bd?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop' },
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
  return (
    <section 
      id="gallery" 
      className="w-full bg-cream transition-all duration-700 ease-in-out flex flex-col justify-center items-center pt-16 pb-4 md:pt-20 md:pb-6 overflow-hidden"
    >
      <style>
        {`
          .gallery-viewport {
            --carousel-radius: 740px;
            perspective: 2500px;
            transform-style: preserve-3d;
          }
          
          .gallery-track {
            position: relative;
            width: 0;
            height: 0;
            transform-style: preserve-3d;
            
            /* 
              rotateX(6deg) tilts the top of the ring AWAY from the viewer.
              This perfectly forces the front images to rise UPwards across the center of the screen,
              and naturally descend back down on the left/right sides, forming an arch.
            */
            animation: carousel-spin 80s linear infinite;
          }
          
          .gallery-track:hover {
            animation-play-state: paused;
          }
          
          @keyframes carousel-spin {
            /* translateZ pushes the whole ring back so the front images sit near Z=0 (normal size) */
            0% { transform: translateZ(calc(var(--carousel-radius) * -1)) rotateX(6deg) rotateY(0deg); }
            100% { transform: translateZ(calc(var(--carousel-radius) * -1)) rotateX(6deg) rotateY(-360deg); }
          }
          
          .gallery-item {
            position: absolute;
            top: -160px;
            left: -130px;
            width: 260px;
            height: 320px;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform-style: preserve-3d;
          }
          
          /* Responsive Mobile Scaling */
          @media (max-width: 768px) {
            .gallery-viewport {
              --carousel-radius: 500px;
            }
            .gallery-item {
              top: -120px;
              left: -90px;
              width: 180px;
              height: 240px;
            }
          }
        `}
      </style>

      {/* Main Gallery Header */}
      <div className="text-center max-w-2xl mx-auto mb-4 md:mb-6 shrink-0 relative z-20 px-4">
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
          className="font-heading text-4xl md:text-5xl text-dark mb-4 leading-tight"
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

      {/* The curved infinite track */}
      <div className="w-full relative py-10 flex items-center">
        <div className="relative z-10 w-full">
          <GalleryTrack images={galleryImages} />
        </div>
      </div>

      {/* CTAs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8 relative z-20"
      >
        <a href="#" className="btn-secondary w-full sm:w-auto text-center">
          View More
        </a>
        <a href="#booking" className="btn-primary w-full sm:w-auto text-center">
          Book Your Event
        </a>
      </motion.div>

    </section>
  );
};

export default Gallery;
