import { motion } from 'framer-motion';

const ServiceLine = ({ path, delay }) => {
  return (
    <motion.path
      d={path}
      fill="transparent"
      stroke="#365C49"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="opacity-40"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
};

export default ServiceLine;
