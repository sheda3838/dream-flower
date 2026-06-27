import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Wedding Decorations',
    description: 'Elegant floral decorations crafted to create timeless and unforgettable wedding celebrations.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Engagement Decorations',
    description: 'Beautiful floral styling designed to celebrate the beginning of every love story.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Birthday Celebrations',
    description: 'Creative floral decorations that make birthdays vibrant, memorable and full of elegance.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Floral Arrangements',
    description: 'Fresh handcrafted flower arrangements created with creativity, beauty and attention to detail.',
    image: 'https://images.unsplash.com/photo-1563241598-6364026048d0?q=80&w=1969&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Event Styling',
    description: 'Complete floral styling for corporate events, celebrations and private gatherings.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8892ebe9bd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Custom Decorations',
    description: 'Personalized floral concepts designed to match your vision and create truly unique experiences.',
    image: 'https://images.unsplash.com/photo-1505944357431-27579db47558?q=80&w=2073&auto=format&fit=crop',
  }
];

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="relative w-full min-h-screen flex items-center py-24 md:py-32 bg-cream overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="font-body text-sm tracking-[0.2em] uppercase text-accent font-medium">Our Services</span>
            <div className="h-[1px] w-12 bg-accent"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight"
          >
            Elegant Floral Designs <br className="hidden md:block" /> For Every Special Occasion
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-dark/70 text-base md:text-lg leading-relaxed font-light mx-auto"
          >
            From intimate celebrations to grand weddings, The Dream Flower creates elegant floral decorations and event styling that transform every occasion into an unforgettable experience.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group relative h-[420px] md:h-[450px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-xl shadow-primary/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Dark Green Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <h3 className="font-heading text-3xl text-cream mb-3 transition-transform duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="font-body text-cream/80 text-sm font-light leading-relaxed mb-6 opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                  {service.description}
                </p>
                
                {/* Arrow Button */}
                <div className="flex items-center gap-2 text-accent transition-transform duration-500 group-hover:translate-x-2">
                  <span className="font-body text-xs tracking-widest uppercase font-medium">Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
