import { useState } from 'react'
import { Link } from 'react-scroll'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed w-full h-20 bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">MV.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ name, to }) => (
            <li key={name}>
              <Link to={to} smooth={true} duration={500} className="nav-link">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {nav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </div>

        {/* Mobile Menu */}
        <ul className={`${nav ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed top-20 right-0 w-full h-[calc(100vh-5rem)] bg-primary flex flex-col justify-center items-center gap-8 transition-transform duration-300`}>
          {links.map(({ name, to }) => (
            <li key={name} className="text-2xl">
              <Link 
                to={to} 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={handleClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar