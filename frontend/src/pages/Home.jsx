import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import profile from "../assets/bpic.jpg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import { technologies } from "../constants/technologies";

export default function Home({
  image = "/bpic.jpg",
  name = "Ajay Kumar Shrestha",
}) {
  const roles = [
    "Full Stack Developer",
    "Python Developer",
    "App Developer",

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <section id="image"
        className="bg-[url('/pp.png')] bg-cover
          relative sm:min-h-screen overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between z-20
          px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 gap-10 mb-0
          bg-zinc-800
        "
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl text-center md:text-left bottom-65 sm:bottom-0 text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <motion.span
              className="bg-linear-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 0.6,
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Ajay Kumar Shrestha
            </motion.span>
          </h1>

          {/* Animated Role */}
          <div className="mt-3 sm:mt-4 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut", behavior: "smooth" }}
            className="mt-4 text-zinc-200 text-justify font-semibold leading-relaxed text-sm sm:text-base md:text-lg">
            I build intelligent, secure, and scalable web and mobile applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 0.6,
              backgroundPosition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="mt-8 sm:mt-10 flex text-center items-center md:flex-row mb-10 gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" download>
              <button
                className="cursor-pointer group relative w-37 flex gap-1 items-center px-4 py-3 sm:px-6 sm:py-3 md:px-2 md:w-33 md:py-3 text-sm sm:text-base md:text-xs bg-green-600 text-[#f1f1f1] font-semibold shadow-xl active:shadow-inner transition-all duration-700 rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    />
                  </g>
                </svg>
                Download CV
              </button>
            </a>

            <Link to="/projects">
              <button
                className="cursor-pointer rounded-sm group relative flex gap-2 items-center px-9 w-40 md:w-30 py-3 sm:px-6 sm:py-3 md:px-4 md:py-3 text-sm sm:text-base md:text-xs bg-white text-gray-900   font-semibold shadow-xl active:shadow-inner transition-all duration-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                View Projects
              </button>
            </Link>
          </motion.div>
        </motion.div>

       



        <section className="flex lg:relative lg:bottom-20 w-full items-center justify-center overflow-hidden bg-linear-to-br px-2 py-10 sm:px-4">


          <div className="relative aspect-square w-full top-10 lg:max-w-170 max-w-600 shrink-0 overflow-visible">

          
            {/* Center profile image */}
            <div className="absolute left-1/2 sm:top-1/2 top-10 z-10 lg:h-[65%] lg:w-[65%] h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover object-top"
              />
            </div>

          </div>
        </section>



      </section >


      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}



