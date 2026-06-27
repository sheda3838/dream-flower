import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const BookingForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone || formData.phone.trim().length < 9) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData(initialFormState);
      }, 1500);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
  };

  const inputClasses = "w-full bg-white/60 border rounded-xl px-3 py-2.5 font-body text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all duration-300";
  const labelClasses = "block font-body text-[10px] sm:text-xs tracking-widest uppercase text-dark/70 font-medium mb-1.5";
  
  // Custom reusable input to keep JSX clean
  const FormField = ({ label, id, error, children }) => (
    <div className="flex flex-col relative w-full">
      <label htmlFor={id} className={labelClasses}>{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-1 mt-1 text-[#D44C4C] text-[10px] sm:text-xs font-body"
          >
            <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white/50 backdrop-blur-2xl border border-white p-6 lg:p-8 rounded-[1.5rem] shadow-[0_20px_50px_rgba(54,92,73,0.08)] w-full relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form 
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 lg:gap-5"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Full Name" id="name" error={errors.name}>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.name ? 'border-[#D44C4C]/50 bg-[#D44C4C]/5' : 'border-white'}`} 
                  placeholder="e.g. Eleanor Vance" 
                />
              </FormField>
              
              <FormField label="Email Address" id="email" error={errors.email}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.email ? 'border-[#D44C4C]/50 bg-[#D44C4C]/5' : 'border-white'}`} 
                  placeholder="eleanor@example.com" 
                />
              </FormField>
            </div>

            {/* Row 2: Phone and Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Phone Number" id="phone" error={errors.phone}>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.phone ? 'border-[#D44C4C]/50 bg-[#D44C4C]/5' : 'border-white'}`} 
                  placeholder="+94 77 000 0000" 
                />
              </FormField>
              
              <FormField label="Service Type" id="eventType" error={errors.eventType}>
                <div className="relative">
                  <select 
                    id="eventType" 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer ${errors.eventType ? 'border-[#D44C4C]/50 bg-[#D44C4C]/5' : 'border-white'}`}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Wedding Decorations">Wedding Decorations</option>
                    <option value="Engagement Styling">Engagement Styling</option>
                    <option value="Birthday Celebrations">Birthday Celebrations</option>
                    <option value="Floral Arrangements">Floral Arrangements</option>
                    <option value="Event Styling">Event Styling</option>
                    <option value="Custom Decorations">Custom Decorations</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-3.5 h-3.5 text-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </FormField>
            </div>

            {/* Row 3: Event Date */}
            <FormField label="Event Date (Optional)" id="eventDate" error={errors.eventDate}>
              <input 
                type="date" 
                id="eventDate" 
                name="eventDate" 
                value={formData.eventDate}
                onChange={handleChange}
                className={`${inputClasses} border-white cursor-text min-h-[44px]`} 
              />
            </FormField>

            {/* Row 4: Message */}
            <FormField label="Message / Vision" id="message" error={errors.message}>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className={`${inputClasses} border-white resize-none`} 
                placeholder="Tell us about your dream event..." 
              />
            </FormField>

            {/* CTA Button */}
            <motion.button
              disabled={isSubmitting}
              type="submit"
              className="btn-primary w-full mt-2 min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
              ) : (
                "Request Consultation"
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div 
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center py-12 px-4 h-full min-h-[400px]"
          >
            <div className="w-20 h-20 bg-[#365C49]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#365C49]" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-heading text-3xl md:text-4xl text-dark mb-4">Request Received</h3>
            <p className="font-body text-dark/70 text-base mb-10 max-w-sm leading-relaxed">
              Thank you! Your consultation request has been successfully submitted. Our team will contact you shortly to discuss your vision.
            </p>
            
            <motion.button
              onClick={handleReset}
              className="btn-secondary"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BookingForm;
