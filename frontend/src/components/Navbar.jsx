import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <nav className="fixed top-0 h-18 w-full z-50 backdrop-blur border-b bg-white border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-1 font-bold group relative right-6 md:flex-row md:gap-1 flex-col md:items-center "
        >
          <img
            src="/logos.png"
            alt="logo"
            className="h-14 w-14 transition-transform duration-900 rounded-sm group-hover:scale-110 sm:h-10 sm:w-12 md:h-15 md:w-17 relative left-5 md:right-12
 "
          />
          <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700 font-bold [text-shadow:2px_1px_0_#ef4444,-2px_-1px_0_#3b82f6] sm:text-lg md:text-xl lg:text-2xl leading-tight text-center md:text-left whitespace-nowrap
">
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-bold gap-15 text-2 relative right-15 text-white">
          <NavItem to="/" label="Home" onClick={handleNav} />
          <NavItem to="/about" label="About" onClick={handleNav} />
          <NavItem to="/skills" label="Skills" onClick={handleNav} />
          <NavItem to="/projects" label="Projects" onClick={handleNav} />
          <NavItem to="/experience" label="Experience" onClick={handleNav} />
          <NavItem to="/contact" label="Contact" onClick={handleNav} />

        </ul>




        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl font-extrabold p-2 text-white bg-blue-500 text-center transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 "
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden mb-4 fixed inset-0 z-50 h-screen bg-black/60 backdrop-blur shadow-xl px-5 py-8 flex flex-col gap-4 mt-18 w-full text-zinc-300"
          >
            <MobileNavItem to="/" label="Home" setOpen={setOpen} handleNav={handleNav} />
            <MobileNavItem to="/about" label="About" setOpen={setOpen} handleNav={handleNav} />
            <MobileNavItem to="/skills" label="Skills" setOpen={setOpen} handleNav={handleNav}/>
            <MobileNavItem to="/projects" label="Projects" setOpen={setOpen} handleNav={handleNav} />
            <MobileNavItem to="/experience" label="Experience" setOpen={setOpen} handleNav={handleNav} />
            {/* <MobileNavItem to="/research" label="Research" setOpen={setOpen} /> */}
            <MobileNavItem to="/contact" label="Contact" setOpen={setOpen} handleNav={handleNav}/>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (


    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative inline-block transition-all duration-500 ease-in-out
     text-blue-500 hover:text-blue-400 pb-1
     before:content-[''] before:absolute before:bottom-0 before:left-0
     before:h-0.75 before:w-0 before:bg-blue-500 before:transition-all before:duration-500
     hover:before:w-full
     ${isActive ? "text-blue-500 font-extrabold before:w-full" : ""}`
      }
    >
      {label}
    </NavLink>


  );
}

/* Mobile Nav Item */
function MobileNavItem({ to, label, setOpen, handleNav }) {
  return (
    <NavLink
      to={to}
      onClick={() => {
        setOpen(false);
        handleNav();
      }}
      className={({ isActive }) =>
        `py-3 px-4 rounded-lg transition-all duration-300
         hover:bg-white/5 hover:text-primary
         ${isActive ? "text-primary bg-white/5 font-semibold" : ""}`
      }
    >
      {label}
    </NavLink>
  );
}
