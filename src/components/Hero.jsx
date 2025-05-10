
// import { motion } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-tertiary/90 z-0"></div>

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-secondary"
//           >
//             <img 
//               src="/profile.jpg" 
//               alt="Malay Virpariya" 
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-secondary font-mono mb-4"
//           >
//             Hi, my name is
//           </motion.p>

//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
//           >
//             Malay Virpariya
//           </motion.h1>

//           <div className="text-2xl sm:text-4xl font-bold text-lightestText mb-6 h-[60px]">
//             <TypeAnimation
//               sequence={[
//                 'Software Developer',
//                 2000,
//                 'Full Stack Developer',
//                 2000,
//                 'UI/UX Designer',
//                 2000
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-secondary"
//             />
//           </div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lightestText max-w-xl mx-auto mb-8 leading-relaxed"
//           >
//             I'm a passionate software developer specializing in building exceptional digital experiences. 
//             Currently pursuing B.Tech (IT) at Dharmsinh Desai University.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex justify-center gap-4"
//           >
//             <a 
//               href="#contact" 
//               className="btn px-8 py-4 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm"
//             >
//               Get In Touch
//             </a>
//             <div className="flex gap-4">
//               <a 
//                 href="https://github.com/virpariyamalay" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
//               >
//                 <FaGithub />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/malay-virpariya-38417a278/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-tertiary/90 z-0"></div>

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           {/* Animated Profile Image */}
//           <div className="relative flex justify-center items-center">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//               className="absolute w-40 h-40 rounded-full border-4 border-t-secondary border-b-transparent"
//             />
//             <motion.div
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//               className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-secondary"
//             >
//               <img src="/profile.jpg" alt="Malay Virpariya" className="w-full h-full object-cover" />
//             </motion.div>
//           </div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-secondary font-mono mb-4"
//           >
//             Hi, my name is
//           </motion.p>

//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
//           >
//             Malay Virpariya
//           </motion.h1>

//           <div className="text-2xl sm:text-4xl font-bold text-lightestText mb-6 h-[60px]">
//             <TypeAnimation
//               sequence={[
//                 "Software Developer",
//                 2000,
//                 "Full Stack Developer",
//                 2000,
//                 "UI/UX Designer",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-secondary"
//             />
//           </div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lightestText max-w-xl mx-auto mb-8 leading-relaxed"
//           >
//             I'm a passionate software developer specializing in building exceptional digital experiences. 
//             Currently pursuing B.Tech (IT) at Dharmsinh Desai University.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex justify-center gap-4"
//           >
//             <a 
//               href="#contact" 
//               className="btn px-8 py-4 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm"
//             >
//               Get In Touch
//             </a>
//             <div className="flex gap-4">
//               <a 
//                 href="https://github.com/virpariyamalay" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
//               >
//                 <FaGithub />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/malay-virpariya-38417a278/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-tertiary/90 z-0"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Animated Profile Image with proper spacing */}
          <div className="relative flex justify-center items-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-36 h-36 rounded-full border-[3px] border-t-secondary border-b-transparent"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-secondary"
            >
              <img src="/circleprofile.jpg" alt="Malay Virpariya" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-mono mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Malay Virpariya
          </motion.h1>

          <div className="text-2xl sm:text-4xl font-bold text-lightestText mb-6 h-[60px]">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lightestText max-w-xl mx-auto mb-8 leading-relaxed"
          >
            I'm a passionate software developer specializing in building exceptional digital experiences. 
            Currently pursuing B.Tech (IT) at Dharmsinh Desai University.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="btn px-8 py-4 bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm"
            >
              Get In Touch
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/virpariyamalay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/malay-virpariya-38417a278/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lightText hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
