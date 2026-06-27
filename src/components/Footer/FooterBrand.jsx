import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const FooterBrand = () => {
  return (
    <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
      <a href="#" className="mb-6 inline-block transition-transform duration-300 hover:scale-105 active:scale-95 origin-left">
        <img 
          src={logo} 
          alt="The Dream Flower Logo" 
          className="h-12 w-auto object-contain brightness-0 invert opacity-90"
        />
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
          href="https://www.instagram.com/thedream_flower/" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2Fthedreamflower2016%2F#" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.tiktok.com/@the.dream.flower" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-colors duration-300"
          aria-label="TikTok"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default FooterBrand;
