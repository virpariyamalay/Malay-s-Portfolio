import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lightestText mb-4 text-base sm:text-lg">
              Hello! I'm <span className="font-semibold text-secondary">Malay Virpariya</span>, a passionate software developer currently pursuing a B.Tech in Information Technology at Dharmsinh Desai University (2022–2026). My CGPA is <strong>7.3</strong>, and I previously secured 84% in HSC from Gujarat Board.
            </p>
            <p className="text-lightestText mb-4 text-base sm:text-lg">
              I specialize in building full-stack applications using the MERN stack, and I’ve created impactful projects like <strong>QuickStay</strong>, <strong>GreenFuelMarket</strong>, and a <strong>Weather-Dashboard</strong>. I’m experienced with API integration, authentication, payment gateways, and deployment.
            </p>
            <p className="text-lightestText font-semibold mb-2">
              Technical Skills:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-lightestText text-sm sm:text-base">
              <li>• React.js</li>
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MongoDB / NoSQL</li>
              <li>• SQL / PostgreSQL</li>
              <li>• JavaScript / C / C++</li>
              <li>• Git & GitHub</li>
              <li>• Cloudinary / Nodemailer</li>
            </ul>
          </div>

          {/* Image with Hover Effect */}
          <div className="relative group max-w-sm mx-auto">
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src="/profile.jpg"
                alt="Malay Virpariya"
                className="rounded-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/20 rounded-lg group-hover:bg-transparent transition-all duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-secondary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
