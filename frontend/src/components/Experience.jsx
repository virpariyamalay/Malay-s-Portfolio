
// import { motion } from "framer-motion";
// import {
//   FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaJava, FaCode,
//   FaUniversity, FaSchool
// } from "react-icons/fa";
// import {
//   SiJavascript, SiMongodb, SiRedux, SiExpress, SiSupabase,
//   SiAndroidstudio, SiIntellijidea
// } from "react-icons/si";

// const techIcons = {
//   "C": <FaCode />,
//   "C++": <FaCode />,
//   "JavaScript": <SiJavascript />,
//   "SQL": <FaDatabase />,
//   "NoSQL": <FaDatabase />,
//   "GitHub": <FaGithub />,
//   "ReactJS": <FaReact />,
//   "Redux": <SiRedux />,
//   "NodeJS": <FaNodeJs />,
//   "ExpressJS": <SiExpress />,
//   "Git": <FaGitAlt />,
//   "MongoDB": <SiMongodb />,
//   "Supabase": <SiSupabase />,
//   "Android Studio": <SiAndroidstudio />,
//   "IntelliJ IDEA Ultimate": <SiIntellijidea />,
// };

// const educationData = [
//   {
//     title: "Dharmsinh Desai University",
//     degree: "B.Tech (IT) - CGPA: 7.15",
//     duration: "07 2023 - 05 2026",
//     location: "Nadiad, India",
//     icon: <FaUniversity className="text-white" />
//   },
//   {
//     title: "HSC - Gujarat Board",
//     degree: "Percentage: 84%",
//     duration: "2020 - 2022",
//     location: "Jamnagar, India",
//     icon: <FaSchool className="text-white" />
//   }
// ];

// const skills = [
//   { category: "Languages", items: ["C", "C++", "JavaScript", "SQL", "NoSQL"] },
//   { category: "Developer Tools", items: ["VS Code", "Android Studio", "IntelliJ IDEA Ultimate"] },
//   { category: "Technologies/Frameworks", items: ["GitHub", "ReactJS", "Redux", "NodeJS", "ExpressJS", "Git", "MongoDB", "Supabase"] }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="section-title text-3xl font-bold text-center mb-8">Experience & Skills</h2>

//         <div className="grid gap-8">
//           {/* Education Section */}
//           <div className="bg-tertiary p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold mb-6 text-secondary">Education</h3>
//             <div className="space-y-6">
//               {educationData.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center gap-4 bg-[#1a1a2e] p-4 rounded-xl border border-[#2e2e48] transition-all duration-300"
//                 >
//                   <div className="text-4xl text-primary">{edu.icon}</div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-accent">{edu.title}</h4>
//                     <p className="text-sm text-lightestText">{edu.degree}</p>
//                     <p className="text-xs text-gray-400">{edu.duration} | {edu.location}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Skills Sections */}
//           {skills.map((skillGroup, index) => (
//             <div key={index} className="bg-tertiary p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-6 text-secondary">{skillGroup.category}</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                 {skillGroup.items.map((skill, skillIndex) => (
//                   // <motion.div
//                   //   key={skillIndex}
//                   //   whileHover={{ scale: 1.1 }}
//                   //   whileTap={{ scale: 0.9 }}
//                   //   className="flex flex-col items-center text-center bg-[#1a1a2e] p-4 rounded-lg border border-[#2e2e48] transition-all duration-300"
//                   // >
//                   <motion.div
//                     key={skillIndex}
//                     whileHover={{ scale: 1.1, rotate: 3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex flex-col items-center text-center bg-[#1a1a2e] p-4 rounded-lg border border-[#2e2e48] transition-all duration-300 hover:bg-[#252547] hover:border-[#444469] hover:text-primary"
//                   >

//                     <div className="text-4xl text-secondary">{techIcons[skill] || <FaCode />}</div>
//                     <span className="text-sm text-lightestText mt-2">{skill}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaJava, FaCode,
  FaUniversity, FaSchool
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiRedux, SiExpress, SiSupabase,
  SiAndroidstudio, SiIntellijidea
} from "react-icons/si";

const techIcons = {
  "C": <FaCode />,
  "C++": <FaCode />,
  "JavaScript": <SiJavascript />,
  "SQL": <FaDatabase />,
  "NoSQL": <FaDatabase />,
  "GitHub": <FaGithub />,
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "ExpressJS": <SiExpress />,
  "Git": <FaGitAlt />,
  "MongoDB": <SiMongodb />,
  "Android Studio": <SiAndroidstudio />,
  "IntelliJ IDEA Ultimate": <SiIntellijidea />,
};

const educationData = [
  {
    title: "Dharmsinh Desai University",
    degree: "B.Tech (IT) - CGPA: 7.15",
    duration: "07 2023 - 05 2026",
    location: "Nadiad, India",
    icon: <FaUniversity className="text-white" />
  },
  {
    title: "HSC - Gujarat Board",
    degree: "Percentage: 84%",
    duration: "2020 - 2022",
    location: "Jamnagar, India",
    icon: <FaSchool className="text-white" />
  }
];

const skills = [
  { category: "Languages", items: ["C", "C++", "JavaScript", "SQL", "NoSQL"] },
  { category: "Developer Tools", items: ["VS Code", "Android Studio", "IntelliJ IDEA Ultimate"] },
  { category: "Technologies/Frameworks", items: ["GitHub", "ReactJS", "Redux", "NodeJS", "ExpressJS", "Git", "MongoDB", "Supabase"] }
];

const Experience = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-title text-3xl sm:text-4xl font-bold text-center mb-12">
          Education & Skills
        </h2>

        <div className="grid gap-12">
          {/* Education Section */}
          <div className="bg-[#2a2a3a] p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary">
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 sm:gap-6 bg-[#1a1a2e] p-4 sm:p-5 rounded-xl border-2 border-[#383848] transition-all duration-300"
                >
                  <div className="text-3xl sm:text-5xl text-primary">
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-accent">
                      {edu.title}
                    </h4>
                    <p className="text-sm sm:text-base text-lightestText">{edu.degree}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{edu.duration} | {edu.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#2a2a3a] p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.2)",
                      backgroundColor: "#333"
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-col items-center justify-center text-center bg-[#202040] p-5 sm:p-6 rounded-2xl border-2 border-[#2e2e48] transition-all duration-300 hover:bg-[#2a2a3a] hover:border-[#444]"
                  >
                    <div className="text-3xl sm:text-5xl text-secondary">
                      {techIcons[skill] || <FaCode />}
                    </div>
                    <span className="text-xs sm:text-sm text-lightestText mt-3">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
