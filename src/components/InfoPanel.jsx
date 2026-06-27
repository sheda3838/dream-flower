import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const InfoPanel = () => {
  const trustPoints = [
    'Personalized floral concepts tailored to your vision',
    'Luxury event styling with premium attention to detail',
    'Dedicated consultation before final design',
    'Trusted experience with 10+ years in event styling',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col relative"
    >
      {/* Subtle Glow Shape */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-accent"></div>
          <span className="font-body text-sm tracking-[0.2em] uppercase text-accent font-medium">Book Your Experience</span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
          Let’s Design Something Beautiful Together
        </h2>
        
        <p className="font-body text-dark/80 text-base md:text-lg leading-relaxed font-light mb-12">
          Share your vision with us and let The Dream Flower craft an unforgettable floral and event styling experience tailored exclusively to your celebration. Whether it’s a wedding, engagement, birthday, or special event, we bring elegance and creativity to every detail.
        </p>
        
        <ul className="space-y-5">
          {trustPoints.map((point, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 min-w-[20px] flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-body text-dark/90 text-base md:text-lg font-light leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default InfoPanel;
