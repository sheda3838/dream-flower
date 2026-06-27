import { Facebook, Instagram, Phone as WhatsApp } from 'lucide-react';
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
          <Instagram size={18} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <WhatsApp size={18} />
        </motion.a>
      </div>
    </div>
  );
};

export default FooterBrand;
