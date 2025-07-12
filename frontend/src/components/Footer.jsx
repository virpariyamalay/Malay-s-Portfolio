import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-[#111827] text-center text-lightestText">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-base sm:text-lg font-medium text-white">
          Designed & Built by <span className="text-secondary">Malay Virpariya</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">© 2025 All rights reserved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
