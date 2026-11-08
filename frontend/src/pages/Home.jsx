import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import profile from "../assets/bpic.jpg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";

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
        className="bg-cover
          relative sm:min-h-screen overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between z-20
          px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 gap-10 mb-0
          
        "
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl text-center md:text-left bottom-65 sm:bottom-0 text-white"
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight pt-18 sm:pt-6">
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



          <motion.p
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              textShadow: [
                "0 0 5px rgba(255,255,255,0.25), 0 0 12px rgba(139,92,246,0.15)",
                "0 0 8px rgba(255,255,255,0.5), 0 0 18px rgba(34,211,238,0.3), 0 0 28px rgba(139,92,246,0.25)",
                "0 0 8px rgba(255,255,255,0.3), 0 0 15px rgba(59,130,246,0.25)",
                "0 0 5px rgba(255,255,255,0.25), 0 0 12px rgba(139,92,246,0.15)",
              ],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2 },
              y: { duration: 1, delay: 0.2, ease: "easeOut" },
              filter: { duration: 1 },
              textShadow: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="text-justify leading-[1.9]
    text-sm sm:text-base md:text-lg p-4 sm:p-0
    
    tracking-wide
    text-gray-400
    [text-shadow:0_0_2px_rgba(255,255,255,0.5),0_0_8px_rgba(139,92,246,0.25)]
    transition-colors duration-500
    hover:text-green-700
    selection:bg-cyan-400/30
  "
          >
            I build intelligent, secure, and scalable web applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.
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
            className="mt-8 sm:m-17 flex text-center relative sm:left-18 sm:bottom-10  items-center md:flex-row  gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" download>
              <button
                className="cursor-pointer group text-center relative w-40 flex gap-1 items-center px-4 py-3 sm:px-6 sm:py-3 md:px-4 md:w-40 md:py-3 text-sm sm:text-base md:text-xs bg-green-600 text-[#f1f1f1] font-semibold shadow-xl active:shadow-inner transition-all duration-700 rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
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
                className="cursor-pointer rounded-sm group relative flex gap-2 items-center px-4 w-44 md:w-40 py-2 sm:px-6 sm:py-3 md:px-4 md:py-3 border border-gray-300 text-sm sm:text-base md:text-xs bg-white text-gray-900   font-semibold shadow-xl active:shadow-inner transition-all duration-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                >
                  <path
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                </svg>
                View Projects
              </button>
            </Link>
          </motion.div>



          {/* Social Icons Row */}
          <div className="relative mt-8 sm:right-20 sm:bottom-18 text-center flex items-center justify-center gap-5 sm:gap-7">

            {/* Facebook */}
            <motion.a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.2,
                y: -8,
                rotate: 8,
                boxShadow: "0 0 30px rgba(24,119,242,0.9)",
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full
      border border-blue-400/40 bg-[#101a35]/90 text-blue-400
      shadow-[0_0_15px_rgba(24,119,242,0.35)] backdrop-blur-md"
            >
              <i className="fa-brands fa-facebook-f text-2xl" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.2,
                y: -8,
                rotate: -8,
                boxShadow: "0 0 30px rgba(10,102,194,0.9)",
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full
      border border-blue-400/40 bg-[#101a35]/90 text-blue-400
      shadow-[0_0_15px_rgba(10,102,194,0.35)] backdrop-blur-md"
            >
              <i className="fa-brands fa-linkedin-in text-2xl" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.2,
                y: -8,
                rotate: 8,
                boxShadow: "0 0 30px rgba(255,255,255,0.7)",
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full
      border border-zinc-400/40 bg-[#101a35]/90 text-white
      shadow-[0_0_15px_rgba(255,255,255,0.2)] backdrop-blur-md"
            >
              <i className="fa-brands fa-github text-2xl" />
            </motion.a>

            {/* Twitter / X */}
            <motion.a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.4, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.2,
                y: -8,
                rotate: -8,
                boxShadow: "0 0 30px rgba(34,211,238,0.9)",
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full
      border border-cyan-400/40 bg-[#101a35]/90 text-cyan-300
      shadow-[0_0_15px_rgba(34,211,238,0.35)] backdrop-blur-md"
            >
              <i className="fa-brands fa-x-twitter text-xl" />
            </motion.a>

          </div>

        </motion.div>













        <section className="relative flex items-center w-full justify-center 
  overflow-hidden m-10 sm:py-16 sm:px-14 bottom-25 sm:bottom-10">

          <div className=" top-5 aspect-square w-full max-w-3xl
    shrink-0 overflow-visible">

            {/* Background glow */}
            <div className="absolute inset-[8%] rounded-[30%] 
      bg-purple-600/20 blur-[70px]" />

            {/* Neon border */}
            <div className="absolute left-1/2 top-1/2 z-[1]
      h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2
      rounded-[28%] border-[3px] border-transparent
      bg-gradient-to-br from-purple-500 via-blue-400 to-cyan-400
      shadow-[0_0_20px_#8b5cf6,0_0_45px_#2563eb,0_0_80px_#06b6d4]">

              {/* Inner background */}
              <div className="absolute inset-[3px] overflow-hidden 
        rounded-[inherit] bg-gradient-to-br from-[#8b5cf6] 
        via-[#3730a3] to-[#0891b2]">

                {/* Profile image */}
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover object-top"
                />

              </div>
            </div>

            {/* Orbit line */}
            <div className="absolute left-[-5%] top-[53%] z-20
      h-[2px] w-[110%] rotate-[-12deg]
      bg-gradient-to-r from-transparent via-cyan-300 to-transparent
      shadow-[0_0_12px_#22d3ee]" />




            {/* Floating icon 1 - React */}
            <motion.div
              animate={{
                y: [0, -12, 0, 12, 0],
                rotate: [-15, -8, -15, -22, -15],
                scale: [1, 1.08, 1, 0.96, 1],
                boxShadow: [
                  "0 0 12px rgba(139,92,246,0.4)",
                  "0 0 28px rgba(139,92,246,0.8)",
                  "0 0 12px rgba(139,92,246,0.4)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[14%] z-30
    flex h-12 w-12 items-center justify-center
    rounded-xl border border-purple-400/40
    bg-[#101a35]/90 backdrop-blur-md"
            >
              <i className="devicon-react-original text-3xl text-cyan-400" />
            </motion.div>


            {/* Floating icon 2 - TypeScript */}
            <motion.div
              animate={{
                y: [0, 14, 0, -14, 0],
                rotate: [15, 25, 15, 5, 15],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 12px rgba(59,130,246,0.4)",
                  "0 0 28px rgba(59,130,246,0.9)",
                  "0 0 12px rgba(59,130,246,0.4)",
                ],
              }}
              transition={{
                duration: 6,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[10%] top-[15%] z-30
    flex h-12 w-12 items-center justify-center
    rounded-xl border border-blue-400/40
    bg-[#101a35]/90 backdrop-blur-md"
            >
              <i className="devicon-typescript-plain text-3xl text-blue-400" />
            </motion.div>


            {/* Floating icon 3 - JavaScript */}
            <motion.div
              animate={{
                y: [0, -15, 0, 10, 0],
                rotate: [-18, -28, -18, -8, -18],
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 12px rgba(234,179,8,0.4)",
                  "0 0 28px rgba(234,179,8,0.9)",
                  "0 0 12px rgba(234,179,8,0.4)",
                ],
              }}
              transition={{
                duration: 5.5,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[22%] left-[8%] z-30
    flex h-12 w-12 items-center justify-center
    rounded-xl border border-yellow-400/40
    bg-[#101a35]/90 backdrop-blur-md"
            >
              <i className="devicon-javascript-plain text-3xl text-yellow-400" />
            </motion.div>


            {/* Floating icon 4 - Tailwind */}
            <motion.div
              animate={{
                y: [0, 12, 0, -12, 0],
                rotate: [15, 25, 15, 5, 15],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 12px rgba(6,182,212,0.4)",
                  "0 0 30px rgba(6,182,212,0.9)",
                  "0 0 12px rgba(6,182,212,0.4)",
                ],
              }}
              transition={{
                duration: 6,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[17%] right-[10%] z-30
    flex h-12 w-12 items-center justify-center
    rounded-xl border border-cyan-400/40
    bg-[#101a35]/90 backdrop-blur-md"
            >
              <i className="devicon-tailwindcss-original text-3xl text-cyan-400" />
            </motion.div>

            {/* Bottom glowing light */}
            <div className="absolute bottom-[5%] left-1/2 z-0
      h-3 w-[55%] -translate-x-1/2 rounded-full
      bg-blue-500 blur-xl" />

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



