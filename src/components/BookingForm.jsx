import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API logic will go here
    console.log('Form submitted:', formData);
  };

  const inputClasses = "w-full bg-white/80 border border-dark/10 rounded-xl px-4 py-3 font-body text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300";
  const labelClasses = "block font-body text-xs tracking-widest uppercase text-dark/70 font-medium mb-2";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/10 w-full relative"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses} 
              placeholder="e.g. Eleanor Vance" 
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses} 
              placeholder="eleanor@example.com" 
            />
          </div>
        </div>

        {/* Row 2: Phone and Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClasses}>Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses} 
              placeholder="+1 (555) 000-0000" 
            />
          </div>
          <div>
            <label htmlFor="eventType" className={labelClasses}>Event Type</label>
            <div className="relative">
              <select 
                id="eventType" 
                name="eventType" 
                value={formData.eventType}
                onChange={handleChange}
                required
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select an event</option>
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelClasses}>Event Date</label>
          <input 
            type="date" 
            id="eventDate" 
            name="eventDate" 
            value={formData.eventDate}
            onChange={handleChange}
            required
            className={inputClasses} 
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>Message / Vision</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={`${inputClasses} resize-none`} 
            placeholder="Tell us about your dream event..." 
          />
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-primary to-dark text-cream font-body text-sm tracking-[0.2em] uppercase font-medium py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
        >
          Request Consultation
        </motion.button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
