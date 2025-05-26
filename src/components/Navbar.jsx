
// import { useState } from 'react'
// import { Link } from 'react-scroll'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const Navbar = () => {
//   const [nav, setNav] = useState(false)
//   const handleClick = () => setNav(!nav)

//   const links = [
//     { name: 'Home', to: 'home' },
//     { name: 'About', to: 'about' },
//     { name: 'Experience', to: 'experience' },
//     { name: 'Projects', to: 'projects' },
//     { name: 'Contact', to: 'contact' },
//   ]

//   return (
//     <nav className="fixed w-full h-20 bg-primary/90 backdrop-blur-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-secondary">Malay Virpariya</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8">
//           {links.map(({ name, to }) => (
//             <li key={name}>
//               <Link to={to} smooth={true} duration={500} className="nav-link">
//                 {name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden cursor-pointer" onClick={handleClick}>
//           {nav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//         </div>

//         {/* Mobile Menu */}
//         <ul className={`${nav ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed top-20 right-0 w-full h-[calc(100vh-5rem)] bg-primary flex flex-col justify-center items-center gap-8 transition-transform duration-300`}>
//           {links.map(({ name, to }) => (
//             <li key={name} className="text-2xl">
//               <Link 
//                 to={to} 
//                 smooth={true} 
//                 duration={500} 
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 {name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiMail,
} from 'react-icons/fi'

const links = [
  { name: 'Home', to: 'home', icon: <FiHome size={20} /> },
  { name: 'About', to: 'about', icon: <FiUser size={20} /> },
  { name: 'Experience', to: 'experience', icon: <FiBriefcase size={20} /> },
  { name: 'Projects', to: 'projects', icon: <FiFolder size={20} /> },
  { name: 'Contact', to: 'contact', icon: <FiMail size={20} /> },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed w-full top-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-secondary">Malay Virpariya</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lightText">
          {links.map(({ name, to, icon }) => (
            <li key={name}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors duration-300 transform hover:scale-105"
              >
                <span className="text-secondary">{icon}</span>
                <span className="font-medium">{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile 9-dot button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center md:hidden"
          aria-label="Open menu"
        >
          {[...Array(3)].map((_, row) => (
            <div key={row} className="flex gap-1.5">
              {[...Array(3)].map((_, col) => (
                <span
                  key={col}
                  className="w-1.5 h-1.5 bg-lightText rounded-full"
                />
              ))}
            </div>
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen grid menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary px-6 flex items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-lightText"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10"
            >
              {links.map(({ name, to, icon }) => (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.9 },
                  }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-tertiary hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center text-lightText cursor-pointer"
                >
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <span className="text-secondary">{icon}</span>
                    <span className="text-lg font-medium hover:text-accent transition-colors">
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
