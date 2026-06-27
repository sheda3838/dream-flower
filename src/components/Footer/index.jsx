import { motion } from 'framer-motion';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
];

const serviceLinks = [
  { label: 'Wedding Decorations', href: '#' },
  { label: 'Engagement Styling', href: '#' },
  { label: 'Birthday Celebrations', href: '#' },
  { label: 'Floral Arrangements', href: '#' },
  { label: 'Event Styling', href: '#' },
  { label: 'Custom Decorations', href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <footer className="w-full bg-[#244033] pt-16 pb-8 border-t border-cream/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12"
        >
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <FooterBrand />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FooterLinks title="Navigation" links={quickLinks} />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FooterLinks title="Our Services" links={serviceLinks} />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FooterContact />
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-cream/50 text-xs md:text-sm font-light">
            &copy; {currentYear} The Dream Flower. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-cream/50 hover:text-accent transition-colors duration-300 text-xs md:text-sm font-light">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-cream/50 hover:text-accent transition-colors duration-300 text-xs md:text-sm font-light">
              Terms of Service
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
