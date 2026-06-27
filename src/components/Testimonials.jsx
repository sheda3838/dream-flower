import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & James',
    event: 'Wedding Client',
    text: 'A truly magical experience! The floral decorations exceeded our expectations and made our wedding unforgettable. Every detail was perfect.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Rose',
    event: 'Engagement Client',
    text: 'The Dream Flower transformed our engagement into a beautifully elegant celebration. The setup was breathtaking.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael T.',
    event: 'Birthday Client',
    text: 'Absolutely stunning floral arrangements. The team was professional, creative, and understood our vision perfectly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Elena & Co.',
    event: 'Corporate Client',
    text: 'Their attention to detail is unmatched. Our event looked like something out of a luxury magazine.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white/60 backdrop-blur-md border border-white/80 p-8 md:p-10 rounded-3xl shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      {/* Soft Border Highlight on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] opacity-80" />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="font-body text-dark/80 text-base leading-relaxed font-light mb-8 flex-grow">
          "{testimonial.text}"
        </p>
        
        {/* Client Profile */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-cream/50 shadow-sm">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl text-primary font-semibold leading-tight">
              {testimonial.name}
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-dark/50 mt-1">
              {testimonial.event}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="testimonials" className="relative w-full min-h-screen flex items-center py-24 md:py-32 bg-cream overflow-hidden">
      {/* Subtle Background Decorative Shapes */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 z-0"></div>
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 z-0"></div>

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
            <span className="font-body text-sm tracking-[0.2em] uppercase text-accent font-medium">What Our Clients Say</span>
            <div className="h-[1px] w-12 bg-accent"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight"
          >
            Words From Our Happy Clients
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-dark/70 text-base md:text-lg leading-relaxed font-light mx-auto"
          >
            A collection of heartfelt experiences from couples and clients who trusted The Dream Flower to bring their celebrations to life with elegance and care.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
