import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const InfoPanel = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col relative h-full justify-center"
    >
      {/* Subtle Glow Shape */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 z-0"></div>

      <div className="relative z-10 lg:pr-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-accent"></div>
          <span className="font-body text-sm tracking-[0.2em] uppercase text-accent font-medium">Get in Touch</span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
          Let’s Design Something Beautiful Together
        </h2>
        
        <p className="font-body text-dark/80 text-base md:text-lg leading-relaxed font-light mb-12">
          We’d love to bring your vision to life. Reach out to us for consultations, bookings, or custom floral experiences.
        </p>
        
        {/* Contact Details */}
        <div className="flex flex-col gap-8 mb-12">
          <motion.a 
            href="#"
            whileHover={{ x: 5 }}
            className="flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center bg-white/50 group-hover:bg-white group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300 shrink-0">
              <MapPin className="w-5 h-5 text-dark/60 group-hover:text-accent transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-xs tracking-widest uppercase text-dark/50 mb-1">Location</span>
              <span className="font-body text-lg text-dark/90 font-light group-hover:text-primary transition-colors">Galle, Sri Lanka</span>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+94771234567"
            whileHover={{ x: 5 }}
            className="flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center bg-white/50 group-hover:bg-white group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300 shrink-0">
              <Phone className="w-5 h-5 text-dark/60 group-hover:text-accent transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-xs tracking-widest uppercase text-dark/50 mb-1">Phone</span>
              <span className="font-body text-lg text-dark/90 font-light group-hover:text-primary transition-colors">+94 77 123 4567</span>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:hello@thedreamflower.com"
            whileHover={{ x: 5 }}
            className="flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center bg-white/50 group-hover:bg-white group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300 shrink-0">
              <Mail className="w-5 h-5 text-dark/60 group-hover:text-accent transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-xs tracking-widest uppercase text-dark/50 mb-1">Email</span>
              <span className="font-body text-lg text-dark/90 font-light group-hover:text-primary transition-colors">hello@thedreamflower.com</span>
            </div>
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <motion.a 
            href="#"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </motion.a>
          <motion.a 
            href="#"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </motion.a>
          <motion.a 
            href="#"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

export default InfoPanel;
