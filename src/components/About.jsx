import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title text-3xl font-bold text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lightestText mb-4">
              Hello! I'm Malay, a passionate software developer currently pursuing my B.Tech in Information Technology 
              at Dharmsinh Desai University. With a strong academic background including an HSC percentage of 84% from 
              Gujarat Board, I'm dedicated to creating exceptional digital experiences.
            </p>
            <p className="text-lightestText mb-4">
              My technical expertise includes:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-lightestText">
              <li>• React.js</li>
              <li>• Node.js</li>
              <li>• MongoDB</li>
              <li>• Express.js</li>
              <li>• C/C++</li>
              <li>• JavaScript</li>
              <li>• SQL</li>
              <li>• NoSQL</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Malay Virpariya" 
                className="rounded-lg max-w-sm mx-auto"
              />
              <div className="absolute inset-0 bg-secondary/20 rounded-lg group-hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 border-2 border-secondary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About