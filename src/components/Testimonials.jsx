import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah James',
    text: 'A truly magical experience! Every detail was perfect.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael T.',
    text: 'Stunning floral arrangements. They understood our vision perfectly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rose',
    text: 'Beautifully elegant celebration. Breathtaking setup.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'David K.',
    text: 'Flawless execution. The team is incredibly talented.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jessica W.',
    text: 'Created a whimsical, romantic atmosphere. So beautiful.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 6,
    name: 'James L.',
    text: 'Professional and creative. The flowers were incredibly fresh.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 7,
    name: 'Olivia C.',
    text: 'Absolutely blown away by the colors and unique designs.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 8,
    name: 'Daniel M.',
    text: 'The best florist in town. Made our event feel so premium.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 9,
    name: 'Sophia R.',
    text: 'Attention to detail is unmatched. Out of a luxury magazine.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 10,
    name: 'Chris P.',
    text: 'Highly recommended! They brought so much joy to our celebration.',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsVisible(1);
      else if (window.innerWidth < 1024) setItemsVisible(2);
      else setItemsVisible(4);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(1, testimonials.length - itemsVisible + 1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="testimonials" className="relative w-full py-12 md:py-16 bg-cream overflow-hidden">
      
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center w-full mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl text-dark"
          >
            Words From Our Happy Clients
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Button */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-dark shadow-md hover:scale-110 hover:text-accent transition-all duration-300"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          {/* Slider Window Wrapper */}
          <div className="w-full px-12 md:px-20">
            {/* The actual clipping area */}
            <div className="w-full overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
                  width: `${(testimonials.length / itemsVisible) * 100}%`
                }}
              >
                {testimonials.map((testimonial) => (
                    <div 
                    key={testimonial.id} 
                    className="flex flex-col items-center text-center px-4 shrink-0"
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    {/* Organic Curved Avatar */}
                    <div 
                      className="mb-6"
                      style={{ filter: 'drop-shadow(0 10px 20px rgba(54,92,73,0.15))' }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-28 h-28 md:w-36 md:h-36 object-cover bg-white p-1"
                        style={{ borderRadius: '55% 45% 60% 40% / 45% 55% 40% 60%' }}
                      />
                    </div>
                    
                    {/* Name */}
                  <h3 className="font-heading text-xl md:text-2xl text-dark mb-3 font-semibold">
                    {testimonial.name}
                  </h3>
                  
                  {/* Short Text */}
                  <p className="font-body text-sm md:text-base text-dark/70 mb-5 max-w-[250px] leading-relaxed min-h-[60px]">
                    {testimonial.text}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
            </div>
          </div>

          {/* Right Button */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-dark shadow-md hover:scale-110 hover:text-accent transition-all duration-300"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
          
        </div>
        
        {/* Navigation Dots */}
        <div className="flex gap-2 mt-12 md:mt-14 mb-10 md:mb-12">
          {[...Array(totalSlides)].map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'w-3 h-3 bg-accent' 
                  : 'w-3 h-3 bg-dark/20 hover:bg-dark/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#booking" className="btn-primary">
            Book Your Dream Event
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
