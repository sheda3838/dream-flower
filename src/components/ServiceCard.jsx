import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(54,92,73,0.3)] transition-all duration-700 hover:-translate-y-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
        />
      </div>

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

      {/* Content - Positioned Bottom Right */}
      <div className="absolute inset-0 flex flex-col justify-end items-end p-6 lg:p-8">
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-cream text-right transition-all duration-700 drop-shadow-md transform translate-y-2 group-hover:translate-y-0 group-hover:scale-105 origin-bottom-right">
          {service.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
