const FooterContact = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-heading text-xl text-cream font-medium tracking-wide mb-6">
        Get In Touch
      </h4>
      <ul className="space-y-4 font-body text-sm font-light text-cream/70">
        <li>
          <span className="block text-accent mb-1 uppercase tracking-widest text-[10px] font-medium">Location</span>
          <span className="leading-relaxed block">Galle, Sri Lanka</span>
        </li>
        <li>
          <span className="block text-accent mb-1 uppercase tracking-widest text-[10px] font-medium">Phone</span>
          <a href="tel:+94770000000" className="hover:text-cream transition-colors duration-300 block">
            +94 77 000 0000
          </a>
        </li>
        <li>
          <span className="block text-accent mb-1 uppercase tracking-widest text-[10px] font-medium">Email</span>
          <a href="mailto:hello@thedreamflower.com" className="hover:text-cream transition-colors duration-300 block">
            hello@thedreamflower.com
          </a>
        </li>
        <li className="pt-2">
          <span className="block text-accent mb-1 uppercase tracking-widest text-[10px] font-medium">Business Hours</span>
          <span className="leading-relaxed block opacity-70">Mon - Sat: 9:00 AM - 6:00 PM</span>
        </li>
        <li className="pt-6">
          <a href="#booking" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cream/50 text-cream font-body text-xs tracking-widest uppercase transition-all duration-300 ease-out hover:bg-cream hover:text-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-cream/10 active:scale-95">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
