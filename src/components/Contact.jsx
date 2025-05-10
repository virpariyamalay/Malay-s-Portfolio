

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ensure backend URL is set
    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

    try {
      const response = await fetch(`${backendURL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-tertiary/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-secondary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="input-field group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn w-full bg-gradient-to-r from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <div className="mt-12 text-center">
              <p className="text-lightestText mb-4">
                You can also reach me at:
              </p>
              <a 
                href="tel:+918141424177"
                className="text-secondary hover:underline inline-flex items-center gap-2 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +91 8141424177
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
