// // import { motion } from 'framer-motion';
// // import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// // import { 
// //   SiReact, SiExpress, SiNodedotjs, SiMongodb, 
// //   SiTailwindcss, SiJavascript, SiTypescript
// // } from 'react-icons/si';

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "GreenFuel Market",
// //       description: "An online platform designed to facilitate the buying and selling of raw materials and sustainable products. Built with MongoDB, Express.js, React.js, and Node.js.",
// //       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
// //       tech: [
// //         { icon: SiReact, name: "React.js" },
// //         { icon: SiExpress, name: "Express.js" },
// //         { icon: SiNodedotjs, name: "Node.js" },
// //         { icon: SiMongodb, name: "MongoDB" }
// //       ],
// //       github: "https://github.com/virpariyamalay/GreenFuelMarket",
// //       live: "https://greenfuelmarket.vercel.app",
// //       date: "01 2025"
// //     },
// //     {
// //       title: "Aashray Metal Bill-generator",
// //       description: "A web-based invoice and billing system designed to streamline financial transactions for businesses. Built with MongoDB, Express.js, React.js, and Node.js.",
// //       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
// //       tech: [
// //         { icon: SiReact, name: "React.js" },
// //         { icon: SiExpress, name: "Express.js" },
// //         { icon: SiNodedotjs, name: "Node.js" },
// //         { icon: SiMongodb, name: "MongoDB" }
// //       ],
// //       github: "https://github.com/virpariyamalay/Aashray-Metal-Bill-generator",
// //       live: "https://aashraybill.vercel.app/",
// //       date: "02 2025"
// //     }
// //   ];

// //   return (
// //     <section id="projects" className="py-20 relative">
// //       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         viewport={{ once: true }}
// //         className="relative z-10"
// //       >
// //         <h2 className="section-title text-center mb-12">Featured Projects</h2>
// //         <div className="grid md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
// //           {projects.map((project, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.2 }}
// //               viewport={{ once: true }}
// //               className="group relative bg-tertiary/50 backdrop-blur-sm rounded-xl overflow-hidden"
// //             >
// //               {/* Project Image with Overlay */}
// //               <div className="relative aspect-video overflow-hidden">
// //                 <img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary opacity-0 group-hover:opacity-90 transition-opacity duration-300">
// //                   <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
// //                     {project.tech.map((tech, techIndex) => (
// //                       <div
// //                         key={techIndex}
// //                         className="flex flex-col items-center gap-2 text-secondary"
// //                       >
// //                         <tech.icon className="text-3xl" />
// //                         <span className="text-xs">{tech.name}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Project Info */}
// //               <div className="p-6">
// //                 <div className="flex justify-between items-start mb-4">
// //                   <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
// //                   <span className="text-sm text-lightestText">{project.date}</span>
// //                 </div>
// //                 <p className="text-lightestText mb-6">{project.description}</p>
                
// //                 {/* Links */}
// //                 <div className="flex gap-4">
// //                   <a
// //                     href={project.github}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2"
// //                   >
// //                     <FaGithub className="text-xl" />
// //                     <span>Code</span>
// //                   </a>
// //                   <a
// //                     href={project.live}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2"
// //                   >
// //                     <FaExternalLinkAlt className="text-lg" />
// //                     <span>Live Demo</span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import {
//   SiReact,
//   SiExpress,
//   SiNodeDotJs,  // ✅ correct name
//   SiMongodb,
//   SiTailwindcss,
  
// } from 'react-icons/si';


// const Projects = () => {
//   const projects = [
//     {
//       title: "GreenFuel Market",
//       description: "An online platform designed to facilitate the buying and selling of raw materials and sustainable products. Built with MongoDB, Express.js, React.js, and Node.js.",
//       image: "/greenfuelmarket.jpg",
//       tech: [ { icon: SiReact, name: "React.js" }, { icon: SiExpress, name: "Express.js" }, { icon: SiNodedotjs, name: "Node.js" }, { icon: SiMongodb, name: "MongoDB" } ],
//       github: "https://github.com/virpariyamalay/GreenFuelMarket",
//       live: "https://greenfuelmarket.vercel.app",
//       date: "01 2025"
//     },
//     {
//       title: "Aashray Metal Bill-generator",
//       description: "A web-based invoice and billing system designed to streamline financial transactions for businesses. Built with MongoDB, Express.js, React.js, and Node.js.",
//       image: "/bill.jpg",
//       tech: [ { icon: SiReact, name: "React.js" }, { icon: SiExpress, name: "Express.js" }, { icon: SiNodedotjs, name: "Node.js" }, { icon: SiMongodb, name: "MongoDB" } ],
//       github: "https://github.com/virpariyamalay/Aashray-Metal-Bill-generator",
//       live: "https://aashraybill.vercel.app/",
//       date: "02 2025"
//     },
//     {
//       title: "QuickStay | MERN Stack",
//       description: `Full-stack hotel booking platform with secure auth via Clerk, Stripe integration, Cloudinary for images, email notifications using Nodemailer, and an admin dashboard.`,
//       image: "/hotel.jpg",
//       tech: [ { icon: SiReact, name: "React.js" }, { icon: SiExpress, name: "Express.js" }, { icon: SiNodedotjs, name: "Node.js" }, { icon: SiMongodb, name: "MongoDB" } ],
//       github: "https://github.com/virpariyamalay/QuickStay",  // Add your GitHub link
//       live: "https://quickstay365.vercel.app/",    // Add your live site link
//       date: "05 2025"
//     },
//     {
//       title: "Weather Dashboard",
//       description: `Interactive dashboard built with React, Tailwind, and Chart.js that fetches weather data from Open-Meteo Historical API based on user-defined coordinates and date range.`,
//       image: "/weather.png",
//       tech: [ { icon: SiReact, name: "React.js" }, { icon: SiTailwindcss, name: "Tailwind CSS" } ],
//       github: "https://github.com/virpariyamalay/WEATHER-APP",  // Add your GitHub link
//       live: "https://weatherdashboardapp.vercel.app/",    // Add your live site link
//       date: "05 2025"
//     },
//     {
//       title: "GreenLeaf Bazzar",
//       description: `Client-side raw material marketplace built using React.js and LocalStorage. Features seller product submissions, admin approval workflows, and a responsive dashboard.`,
//       image: "/greenleafbazzar.png",
//       tech: [ { icon: SiReact, name: "React.js" }, { icon: SiTailwindcss, name: "Tailwind CSS" } ],
//       github: "https://github.com/virpariyamalay/GreenLeaf-Bazaar",  // Add your GitHub link
//       live: "https://github.com/virpariyamalay/GreenLeaf-Bazaar",    // Add your live site link
//       date: "04 2025"
//     },
//     {
//   title: "AgriGuide",
//   description: `AgriGuide is an all-in-one agriculture support platform featuring an intelligent crop guide, weather integration, and a farming marketplace. Farmers can explore how to grow specific crops and buy essential items like seeds, fertilizers, and equipment. Includes a secure admin dashboard to manage products and orders.`,
//   image: "/agriguide.png", // Save the project screenshot as agriguide.png in /public
//   tech: [
//     { icon: SiReact, name: "React.js" },
//     { icon: SiTailwindcss, name: "Tailwind CSS" },
//     { icon: SiNodeDotJs, name: "Node.js" },
//     { icon: SiExpress, name: "Express.js" },
//     { icon: SiMongodb, name: "MongoDB" }
//   ],
//   github: "https://github.com/virpariyamalay/agriguide",  // Replace with correct repo if needed
//   live: "https://agriguide.vercel.app/",  // Replace if hosted elsewhere
//   date: "03 2025"
// }

//   ];

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="relative z-10"
//       >
//         <h2 className="section-title text-center mb-12">Featured Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="group relative bg-tertiary/50 backdrop-blur-sm rounded-xl overflow-hidden"
//             >
//               <div className="relative aspect-video overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary opacity-0 group-hover:opacity-90 transition-opacity duration-300">
//                   <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                     {project.tech.map((tech, techIndex) => (
//                       <div
//                         key={techIndex}
//                         className="flex flex-col items-center gap-2 text-secondary"
//                       >
//                         <tech.icon className="text-3xl" />
//                         <span className="text-xs">{tech.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
//                   <span className="text-sm text-lightestText">{project.date}</span>
//                 </div>
//                 <p className="text-lightestText mb-6">{project.description}</p>
//                 <div className="flex gap-4">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2">
//                     <FaGithub className="text-xl" />
//                     <span>Code</span>
//                   </a>
//                   <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2">
//                     <FaExternalLinkAlt className="text-lg" />
//                     <span>Live Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact,
  SiExpress,
  SiNodedotjs, // ✅ Correct icon name
  SiMongodb,
  SiTailwindcss
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "GreenFuel Market",
      description: "An online platform designed to facilitate the buying and selling of raw materials and sustainable products. Built with MongoDB, Express.js, React.js, and Node.js.",
      image: "/greenfuelmarket.jpg",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" }
      ],
      github: "https://github.com/virpariyamalay/GreenFuelMarket",
      live: "https://greenfuelmarket.vercel.app",
      date: "01 2025"
    },
    {
      title: "Aashray Metal Bill-generator",
      description: "A web-based invoice and billing system designed to streamline financial transactions for businesses. Built with MongoDB, Express.js, React.js, and Node.js.",
      image: "/bill.jpg",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" }
      ],
      github: "https://github.com/virpariyamalay/Aashray-Metal-Bill-generator",
      live: "https://aashraybill.vercel.app/",
      date: "02 2025"
    },
    {
      title: "QuickStay | MERN Stack",
      description: `Full-stack hotel booking platform with secure auth via Clerk, Stripe integration, Cloudinary for images, email notifications using Nodemailer, and an admin dashboard.`,
      image: "/hotel.jpg",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" }
      ],
      github: "https://github.com/virpariyamalay/QuickStay",
      live: "https://quickstay365.vercel.app/",
      date: "05 2025"
    },
    {
      title: "Weather Dashboard",
      description: `Interactive dashboard built with React, Tailwind, and Chart.js that fetches weather data from Open-Meteo Historical API based on user-defined coordinates and date range.`,
      image: "/weather.png",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" }
      ],
      github: "https://github.com/virpariyamalay/WEATHER-APP",
      live: "https://weatherdashboardapp.vercel.app/",
      date: "05 2025"
    },
    {
      title: "GreenLeaf Bazzar",
      description: `Client-side raw material marketplace built using React.js and LocalStorage. Features seller product submissions, admin approval workflows, and a responsive dashboard.`,
      image: "/greenfuelmarket.jpg",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" }
      ],
      github: "https://github.com/virpariyamalay/GreenLeaf-Bazaar",
      live: "https://github.com/virpariyamalay/GreenLeaf-Bazaar",
      date: "04 2025"
    },
    {
      title: "AgriGuide",
      description: `AgriGuide is an all-in-one agriculture support platform featuring an intelligent crop guide, weather integration, and a farming marketplace. Farmers can explore how to grow specific crops and buy essential items like seeds, fertilizers, and equipment. Includes a secure admin dashboard to manage products and orders.`,
      image: "/agriguide.png",
      tech: [
        { icon: SiReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiMongodb, name: "MongoDB" }
      ],
      github: "https://github.com/virpariyamalay/AgriGuide",
      live: "https://github.com/virpariyamalay/AgriGuide",
      date: "03 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-tertiary/50 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex flex-col items-center gap-2 text-secondary">
                        <tech.icon className="text-3xl" />
                        <span className="text-xs">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                  <span className="text-sm text-lightestText">{project.date}</span>
                </div>
                <p className="text-lightestText mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
