import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-1 font-bold group relative right-6 md:flex-row md:gap-1 flex-col md:items-center "
        >
          <img
            src="/logos.png"
            alt="Logo"
            className="h-13 w-13 transition-transform duration-900 rounded-sm group-hover:scale-110 sm:h-12 sm:w-12 md:h-18 md:w-25 relative left-5 md:right-12
 "
          />
          <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700 font-bold [text-shadow:2px_1px_0_#ef4444,-2px_-1px_0_#3b82f6] sm:text-lg md:text-xl lg:text-2xl leading-tight text-center md:text-left whitespace-nowrap
">
            {/* Anish Parajuli */}
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-bold gap-15 text-xl relative right-15 text-zinc-300">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/skills" label="Skills" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/experience" label="Experience" />
          {/* <NavItem to="/research" label="Research" /> */}
          <NavItem to="/contact" label="Contact" />

        </ul>

        


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl font-extrabold p-2 rounded-sm text-white bg-blue-500 text-center h-10 w-10 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95  hover:shadow-[0_0_30px_rgba(50,0,80,1)]"
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
            <MobileNavItem to="/" label="Home" setOpen={setOpen} />
            <MobileNavItem to="/about" label="About" setOpen={setOpen} />
            <MobileNavItem to="/skills" label="Skills" setOpen={setOpen} />
            <MobileNavItem to="/projects" label="Projects" setOpen={setOpen} />
            <MobileNavItem to="/experience" label="Experience" setOpen={setOpen} />
            {/* <MobileNavItem to="/research" label="Research" setOpen={setOpen} /> */}
            <MobileNavItem to="/contact" label="Contact" setOpen={setOpen} />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    // <NavLink
    //   to={to}
    //   className={({ isActive }) =>
    //     `relative transition-all ease-in-out drop-shadow-[0_2px_4px_green] hover:text-primary
    //      after:bg-primary after:w-0 after:transition-all after:duration-900
    //      hover:after:w-full hover:text-blue-400 duration-700 hover:underline
    //      ${isActive ? "text-primary after:w-full font-semibold" : ""}`
    //   }
    // >
    //   {label}
    // </NavLink>

 <NavLink
  to={to}
  className={({ isActive }) =>
    `relative inline-block transition-all duration-500 ease-in-out
     text-green-500 hover:text-green-400 pb-1
     before:content-[''] before:absolute before:bottom-0 before:left-0
     before:h-0.75 before:w-0 before:bg-green-400 before:transition-all before:duration-500
     hover:before:w-full
     ${isActive ? "text-green-500 font-extrabold before:w-full" : ""}`
  }
>
  {label}
</NavLink>


  );
}

/* Mobile Nav Item */
function MobileNavItem({ to, label, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
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
