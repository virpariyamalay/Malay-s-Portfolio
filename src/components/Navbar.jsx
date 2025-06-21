// // import { useState, useEffect } from 'react';
// // import { Link } from 'react-scroll';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { XMarkIcon } from '@heroicons/react/24/outline';

// // const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState('home');
// //   const [scrollPercent, setScrollPercent] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       const winHeight = document.documentElement.scrollHeight - window.innerHeight;
// //       const scrolled = (scrollTop / winHeight) * 100;
// //       setScrollPercent(scrolled);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     const handleScrollSpy = () => {
// //       const scrollPosition = window.scrollY + 100;
// //       const sectionIds = links.map((l) => l.toLowerCase());

// //       for (let id of sectionIds) {
// //         const section = document.getElementById(id);
// //         if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
// //           setActiveSection(id);
// //           break;
// //         }
// //       }
// //     };
// //     window.addEventListener('scroll', handleScrollSpy);
// //     return () => window.removeEventListener('scroll', handleScrollSpy);
// //   }, []);

// //   return (
// //     <>
// //       {/* Progress Bar Indicator */}
// //       <div className="fixed top-4 right-4 z-[60]">
// //         <div className="relative w-12 h-12">
// //           <svg className="absolute top-0 left-0" width="48" height="48">
// //             <circle
// //               cx="24"
// //               cy="24"
// //               r="20"
// //               stroke="#7c3aed"
// //               strokeWidth="4"
// //               fill="none"
// //               strokeDasharray={126}
// //               strokeDashoffset={126 - (scrollPercent * 126) / 100}
// //               strokeLinecap="round"
// //             />
// //           </svg>
// //           <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-secondary">
// //             {Math.round(scrollPercent)}%
// //           </div>
// //         </div>
// //       </div>

// //       {/* Top Navbar */}
// //       <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
// //           {/* Logo */}
// //           <h1 className="text-lg sm:text-2xl font-semibold text-secondary">Malay Virpariya</h1>

// //           {/* Desktop Links */}
// //           <ul className="hidden md:flex items-center gap-8 text-lightText text-sm sm:text-base">
// //             {links.map((name) => (
// //               <li key={name}>
// //                 <Link
// //                   to={name.toLowerCase()}
// //                   smooth={true}
// //                   duration={500}
// //                   offset={-80}
// //                   className={`cursor-pointer transition duration-300 font-medium ${
// //                     activeSection === name.toLowerCase()
// //                       ? 'text-accent underline underline-offset-4'
// //                       : 'hover:text-accent'
// //                   }`}
// //                 >
// //                   {name}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Mobile Hamburger */}
// //           <div className="md:hidden z-50">
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               aria-label={menuOpen ? 'Close menu' : 'Open menu'}
// //               className="p-2 focus:outline-none"
// //             >
// //               {menuOpen ? (
// //                 <XMarkIcon className="h-8 w-8 text-lightText" />
// //               ) : (
// //                 <div className="flex flex-col gap-1">
// //                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
// //                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
// //                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
// //                 </div>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Mobile Slide Menu */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             initial={{ y: '-100%' }}
// //             animate={{ y: 0 }}
// //             exit={{ y: '-100%' }}
// //             transition={{ duration: 0.3, ease: 'easeInOut' }}
// //             className="fixed top-0 left-0 w-full h-screen bg-primary text-lightText z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium"
// //           >
// //             {links.map((name) => (
// //               <Link
// //                 key={name}
// //                 to={name.toLowerCase()}
// //                 smooth={true}
// //                 duration={500}
// //                 offset={-80}
// //                 onClick={() => setMenuOpen(false)}
// //                 className="hover:text-secondary transition duration-200"
// //               >
// //                 {name}
// //               </Link>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default Navbar;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { motion, AnimatePresence } from 'framer-motion';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [scrollPercent, setScrollPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const winHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / winHeight) * 100;
//       setScrollPercent(scrolled);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleScrollSpy = () => {
//       const scrollPosition = window.scrollY + 100;
//       const sectionIds = links.map((l) => l.toLowerCase());

//       for (let id of sectionIds) {
//         const section = document.getElementById(id);
//         if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
//           setActiveSection(id);
//           break;
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScrollSpy);
//     return () => window.removeEventListener('scroll', handleScrollSpy);
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Circle */}
//       <div className="fixed top-4 right-4 z-[60]">
//         <div className="relative w-12 h-12">
//           <svg className="absolute top-0 left-0" width="48" height="48">
//             <circle
//               cx="24"
//               cy="24"
//               r="20"
//               stroke="#7c3aed"
//               strokeWidth="4"
//               fill="none"
//               strokeDasharray={126}
//               strokeDashoffset={126 - (scrollPercent * 126) / 100}
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-secondary">
//             {Math.round(scrollPercent)}%
//           </div>
//         </div>
//       </div>

//       {/* Top Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <h1 className="text-lg sm:text-2xl font-semibold text-secondary">Malay Virpariya</h1>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex items-center gap-8 text-lightText text-sm sm:text-base">
//             {links.map((name) => (
//               <li key={name}>
//                 <Link
//                   to={name.toLowerCase()}
//                   smooth={false}
//                   duration={0}
//                   offset={-80}
//                   className={`cursor-pointer transition duration-300 font-medium ${
//                     activeSection === name.toLowerCase()
//                       ? 'text-accent underline underline-offset-4'
//                       : 'hover:text-accent'
//                   }`}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden z-50">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//               className="p-2 focus:outline-none"
//             >
//               {menuOpen ? (
//                 <XMarkIcon className="h-8 w-8 text-lightText" />
//               ) : (
//                 <div className="flex flex-col gap-1">
//                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
//                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
//                   <span className="w-6 h-0.5 bg-lightText rounded-sm" />
//                 </div>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Fullscreen Slide Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ y: '-100%' }}
//             animate={{ y: 0 }}
//             exit={{ y: '-100%' }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="fixed top-0 left-0 w-full h-screen bg-primary text-lightText z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium"
//           >
//             {links.map((name) => (
//               <Link
//                 key={name}
//                 to={name.toLowerCase()}
//                 smooth={false}
//                 duration={0}
//                 offset={-80}
//                 onClick={() => setMenuOpen(false)}
//                 className={`${
//                   activeSection === name.toLowerCase() ? 'text-accent underline underline-offset-4' : ''
//                 } hover:text-secondary transition duration-200`}
//               >
//                 {name}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Scroll percent tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionIds = links.map((l) => l.toLowerCase());

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-lg sm:text-2xl font-semibold text-secondary">Malay Virpariya</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-lightText text-sm sm:text-base">
            {links.map((name) => (
              <li key={name}>
                <Link
                  to={name.toLowerCase()}
                  smooth={false}
                  duration={0}
                  offset={-80}
                  className={`cursor-pointer transition duration-300 font-medium ${
                    activeSection === name.toLowerCase()
                      ? 'text-accent underline underline-offset-4'
                      : 'hover:text-accent'
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side (Progress + Hamburger) */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Scroll Progress Circle */}
            <div className="relative w-10 h-10">
              <svg className="absolute top-0 left-0" width="40" height="40">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="#7c3aed"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={100}
                  strokeDashoffset={100 - scrollPercent}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-secondary">
                {Math.round(scrollPercent)}%
              </div>
            </div>

            {/* Hamburger */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="p-2 focus:outline-none"
              >
                {menuOpen ? (
                  <XMarkIcon className="h-8 w-8 text-lightText" />
                ) : (
                  <div className="flex flex-col gap-1">
                    <span className="w-6 h-0.5 bg-lightText rounded-sm" />
                    <span className="w-6 h-0.5 bg-lightText rounded-sm" />
                    <span className="w-6 h-0.5 bg-lightText rounded-sm" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen bg-primary text-lightText z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium"
          >
            {links.map((name) => (
              <Link
                key={name}
                to={name.toLowerCase()}
                smooth={false}
                duration={0}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className={`${
                  activeSection === name.toLowerCase()
                    ? 'text-accent underline underline-offset-4'
                    : ''
                } hover:text-secondary transition duration-200`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
