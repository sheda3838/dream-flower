import { motion } from 'framer-motion';

const CentralImage = ({ src, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`w-48 h-64 md:w-64 md:h-80 z-20 rounded-3xl overflow-hidden ${className || ''}`}
  >
    <img src={src} alt="Central Floral Art" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-dark/10 mix-blend-overlay pointer-events-none"></div>
  </motion.div>
);

export default CentralImage;
