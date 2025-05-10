import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 text-center text-lightestText">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Designed & Built by Malay Virpariya</p>
        <p className="text-sm mt-2">© 2025 All rights reserved</p>
      </motion.div>
    </footer>
  )
}

export default Footer