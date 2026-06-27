import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

import weddingImg from '../assets/images/wedding.jpg';
import engagementImg from '../assets/images/engagement.jpg';
import birthdayImg from '../assets/images/birthday.jpg';
import floralImg from '../assets/images/floral.jpg';
import eventImg from '../assets/images/event.jpg';
import customImg from '../assets/images/custom.jpg';

const services = [
  {
    id: 1,
    title: 'Wedding Decorations',
    image: weddingImg,
  },
  {
    id: 2,
    title: 'Engagement Styling',
    image: engagementImg,
  },
  {
    id: 3,
    title: 'Birthday Celebrations',
    image: birthdayImg,
  },
  {
    id: 4,
    title: 'Floral Arrangements',
    image: floralImg,
  },
  {
    id: 5,
    title: 'Event Styling',
    image: eventImg,
  },
  {
    id: 6,
    title: 'Custom Decorations',
    image: customImg,
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full h-[100dvh] bg-cream overflow-hidden flex flex-col pt-12 pb-4 md:pt-20 md:pb-6">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
      <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4"></div>

      {/* Header */}
      <div className="text-center px-6 md:px-12 relative z-20 mb-6 md:mb-8 shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-3 sm:mb-4"
        >
          <div className="h-[1px] w-8 bg-accent"></div>
          <span className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-accent font-medium">Curated Services</span>
          <div className="h-[1px] w-8 bg-accent"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark leading-none"
        >
          A Visual Symphony of Design
        </motion.h2>
      </div>

      {/* Grid Container - Flex-1 ensures it fills remaining space exactly */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex-1 min-h-0">
        
        {/* Desktop Grid (3 columns x 2 rows) */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 xl:gap-6 h-full">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Tablet Grid (2 columns x 3 rows) */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 grid-rows-3 gap-4 h-full">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden flex gap-4 h-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4">
          {services.map((service, index) => (
            <div key={service.id} className="snap-center snap-always w-[85vw] h-full flex-shrink-0">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
