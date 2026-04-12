import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import profile from "../assets/bpic.jpg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "Python Developer",
    "App Developer",
    "AI Engineer",
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
      <section
        className="
          relative min-h-screen overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between
          px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 lg:pt-28 gap-10 mb-0
          bg-zinc-800
        "
      >
        {/* ===== GREEN OVERLAY (video-like glow) ===== */}
        <div className="absolute inset-0 z-0" />

        {/* ============ CIRCUIT BACKGROUND ============ */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Horizontal signals */}
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

          {/* Vertical signals */}
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

          {/* Blinking circuit nodes */}
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
        </div>

        {/* ============ LEFT CONTENT ============ */}
        <motion.div
          initial={{ opacity: 0, x: -60,rotate:-20 }}
          animate={{ opacity: 1, x: 0,rotate:0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl text-center md:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <motion.span
              className="bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
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
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
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
          <p className="mt-4 text-zinc-200 text-justify font-semibold leading-relaxed text-sm sm:text-base md:text-lg">
            I build intelligent, secure, and scalable web and mobile applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col text-center items-center md:flex-row mb-10 gap-4 justify-center md:justify-start">
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
          </div>
        </motion.div>

        {/* ============ PROFILE IMAGE ============ */}
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ scale: [1, 1.01, 1], opacity: 1, x: 0 }}

          src={profile}
          alt="Ajay Kumar Shrestha"
          className="relative z-10 w-50 h-50 bottom-4 sm:w-[250px] sm:h-[250px] md:w-[380px] md:h-[380px] md:right-6 rounded-full object-cover border-4 border-green-400"
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}



