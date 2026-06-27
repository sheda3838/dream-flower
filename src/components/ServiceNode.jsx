import { motion } from 'framer-motion';

const ServiceNode = ({ service, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col items-center md:items-start max-w-[160px] md:max-w-[200px] group`}
    >
      <h4 className="font-heading text-2xl md:text-3xl text-dark leading-tight text-center md:text-left drop-shadow-sm group-hover:text-primary transition-colors duration-500">
        {service.title}
      </h4>
    </motion.div>
  );
};

export default ServiceNode;
