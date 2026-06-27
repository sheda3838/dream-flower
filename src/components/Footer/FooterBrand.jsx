import { motion } from 'framer-motion';

const FooterBrand = () => {
  return (
    <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
      <a href="#" className="font-heading text-3xl font-bold tracking-wider text-cream mb-4 inline-block">
        The Dream Flower
      </a>
      
      <p className="font-heading text-lg text-accent italic mb-4 leading-snug">
        Crafting Elegant Floral Experiences for Life’s Most Beautiful Moments
      </p>
      
      <p className="font-body text-cream/70 text-sm leading-relaxed font-light mb-8 max-w-xs md:max-w-sm lg:max-w-full">
        A luxury floral decoration and event styling company based in Galle, Sri Lanka, dedicated to transforming celebrations into timeless memories through creativity, elegance, and attention to detail.
      </p>
      
      {/* Social Media Icons */}
      <div className="flex items-center gap-4 mt-auto">
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </motion.a>
      </div>
    </div>
  );
};

export default FooterBrand;
