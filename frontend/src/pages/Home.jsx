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
      {/* ================= HERO SECTION ================= */}

      <section id="image"
        className="bg-[url('/pp.png')] bg-cover
          relative min-h-screen overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between z-20
          px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 gap-10 mb-0
          bg-zinc-800
        "
      >

        {/* <div className="absolute inset-0 z-0" />

        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-72 sm:w-80 md:w-96 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
              style={{ top: `${12 + i * 12}%`, left: "-30%" }}
              animate={{ x: ["0%", "160%"] }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px h-44 sm:h-48 md:h-56 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-30"
              style={{ left: `${15 + i * 14}%`, top: "-30%" }}
              animate={{ y: ["0%", "160%"] }}
              transition={{
                duration: 12 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {[...Array(12)].map((_, i) => (
            <motion.span
              key={`n-${i}`}
              className="absolute w-2 h-2 rounded-full bg-green-400"
              style={{
                top: `${10 + (i % 6) * 15}%`,
                left: `${10 + (i % 5) * 18}%`,
              }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div> */}





        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl text-center md:text-left text-white"
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
            className="mt-8 sm:mt-10 flex flex-col text-center items-center md:flex-row mb-10 gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" download>
              <button
                className="cursor-pointer group relative w-37 flex gap-1 items-center px-4 py-3 sm:px-6 sm:py-3 md:px-2 md:w-42 md:py-4 text-sm sm:text-base md:text-lg bg-green-600 text-[#f1f1f1] rounded-2xl font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
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

            <Link to="/contact">
              <button
                className="cursor-pointer group relative flex gap-2 items-center px-9 w-38 md:w-40 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-white text-black text-[#f1f1f1] rounded-2xl font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ============ PROFILE IMAGE ============ */}
        {/* <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ scale: [1, 1.01, 1], opacity: 1, x: 0 }}

          src={profile}
          alt="Ajay Kumar Shrestha"
          className="relative z-10 w-50 h-50 bottom-4 sm:w-[250px] sm:h-[250px] md:w-[380px] md:h-[380px] md:right-6 rounded-full object-cover border-4 border-green-400"
          transition={{ duration: 1, ease: "easeInOut" }}
        /> */}



        <section className="flex lg:relative lg:bottom-20 w-full items-center justify-center overflow-hidden bg-linear-to-br px-2 py-10 sm:px-4">
          {/* Responsive circle container */}
          <div className="relative aspect-square w-full lg:max-w-170 max-w-600 shrink-0 overflow-visible">

            {/* Outer dashed border */}
            <div className="absolute lg:inset-[8%] inset-[16%] rounded-full border-2 border-dashed border-slate-300/70" />

            {/* Inner dashed border - farther from profile */}
            <div className="absolute lg:inset-[16%] inset-[6%] rounded-full border border-dashed border-slate-300" />

            {/* Rotating technology orbit */}
            <div className="absolute inset-[3%] animate-orbit">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: tech.top,
                    left: tech.left,
                  }}
                >
                  {/* Counter rotation keeps card upright */}
                  <div className="animate-counter-orbit">
                    {/* Each logo and title inside its own border */}
                    <div className="flex lg:min-w-13 min-w-12 flex-col bg-white items-center gap-0.5 rounded-md border border-slate-300/8 p-1 shadow-sm backdrop-blur-sm transition duration-300 hover:border-sky-400 sm:min-w-[60px] sm:rounded-lg sm:px-2.5 sm:py-1">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        loading="lazy"
                        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                      />

                      <span className="whitespace-nowrap text-center text-[8px] font-medium leading-tight text-black sm:text-[9px]">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center profile image */}
            <div className="absolute left-1/2 top-1/2 z-10 lg:h-[50%] lg:w-[50%] h-[55%] w-[55%]  -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
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



