import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgb(54,92,73,0.15)] transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94] group-hover:scale-105"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-cream mb-1 sm:mb-2 transition-transform duration-500 drop-shadow-sm">
          {service.title}
        </h3>
        
        <p className="font-body text-cream/70 text-[10px] sm:text-xs md:text-sm font-light tracking-wide mb-4 sm:mb-6 opacity-90 transition-all duration-500 drop-shadow-sm">
          {service.subtitle}
        </p>
        
        {/* Explore Indicator */}
        <div className="flex items-center gap-2 text-accent/90 group-hover:text-accent transition-all duration-500">
          <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">Explore</span>
          <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
