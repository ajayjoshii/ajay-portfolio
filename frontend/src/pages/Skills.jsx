// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   FaRobot,
//   FaMicrochip,
//   FaBrain,
//   FaCogs,
//   FaShieldAlt,
//   FaLayerGroup,
//   FaPython,
//   FaJsSquare,
//   FaRust,
//   FaTerminal,
//   FaCoffee,
// } from "react-icons/fa";

// import { SiC, SiCplusplus, SiGnubash, SiGo, SiJavascript, SiPhp } from "react-icons/si";

// export default function Skills() {

//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Frontend",
//     "Backend",
//     "AI",
//     "Python",
//     "Java",
//   ];

//   const technicalSkills = [
//     {
//       title: "Robotics & Automation",
//       percent: 88,
//       category: "Robotics",
//       description:
//         "I build autonomous robots capable of navigation, object detection, manipulation, and voice-controlled operation. Proficient in ROS1 & ROS2, sensor integration, and motion planning.",
//       icon: <FaRobot className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "IoT Systems",
//       percent: 82,
//       category: "Hardware",
//       description:
//         "I develop smart IoT solutions integrating sensors, microcontrollers, Raspberry Pi, and cloud dashboards.",
//       icon: <FaMicrochip className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "AI & Machine Learning",
//       percent: 85,
//       category: "AI",
//       description:
//         "I design models for computer vision, NLP, predictive analytics, and recommendation systems.",
//       icon: <FaBrain className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Deep Learning",
//       percent: 80,
//       category: "AI",
//       description:
//         "Experienced with CNNs, RNNs, LSTMs, GANs, and transfer learning.",
//       icon: <FaCogs className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Cybersecurity",
//       percent: 85,
//       category: "Security",
//       description:
//         "Experienced in penetration testing, vulnerability assessment, ethical hacking, malware analysis, and network security hardening.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "PCB Design",
//       percent: 78,
//       category: "Hardware",
//       description:
//         "Design multi-layer PCBs ensuring signal integrity, power optimization, and embedded system integration.",
//       icon: <FaLayerGroup className="text-emerald-400 w-8 h-8" />,
//     },

//     // ================= NEW HARDWARE / DESIGN TOOLS =================

//     {
//       title: "AutoCAD",
//       percent: 85,
//       category: "Hardware",
//       description:
//         "2D & 3D technical drafting, mechanical design drawings, architectural layouts, and manufacturing-ready blueprints.",
//       icon: <FaLayerGroup className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "SketchUp",
//       percent: 80,
//       category: "Hardware",
//       description:
//         "3D modeling for product design, rapid prototyping concepts, and structural visualization.",
//       icon: <FaLayerGroup className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "SolidWorks",
//       percent: 87,
//       category: "Hardware",
//       description:
//         "Advanced parametric modeling, mechanical assemblies, motion simulation, and engineering design validation.",
//       icon: <FaLayerGroup className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Fusion 360",
//       percent: 83,
//       category: "Hardware",
//       description:
//         "Integrated CAD/CAM design, product simulation, 3D modeling, and CNC manufacturing workflows.",
//       icon: <FaLayerGroup className="text-emerald-400 w-8 h-8" />,
//     },

//     // ================= CYBERSECURITY TOOLS =================

//     {
//       title: "Nmap",
//       percent: 90,
//       category: "Security",
//       description:
//         "Network scanning, port enumeration, service detection, OS fingerprinting, and vulnerability discovery.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Hydra",
//       percent: 85,
//       category: "Security",
//       description:
//         "Brute-force authentication testing across multiple protocols including SSH, FTP, HTTP, and more.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Sniper",
//       percent: 75,
//       category: "Security",
//       description:
//         "Automated pentesting framework for reconnaissance, vulnerability scanning, and exploitation support.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Aircrack-ng",
//       percent: 88,
//       category: "Security",
//       description:
//         "Wireless security auditing, WPA/WPA2 cracking, packet capture, and Wi-Fi penetration testing.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "John the Ripper",
//       percent: 82,
//       category: "Security",
//       description:
//         "Password hash cracking, brute-force and dictionary attacks for security auditing and recovery testing.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Metasploit Framework",
//       percent: 90,
//       category: "Security",
//       description:
//         "Exploit development, payload generation, vulnerability validation, and post-exploitation techniques.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Hashcat",
//       percent: 85,
//       category: "Security",
//       description:
//         "High-performance password recovery using GPU acceleration for security assessments.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Msfvenom",
//       percent: 88,
//       category: "Security",
//       description:
//         "Custom payload creation, encoding techniques, and penetration testing deployment scenarios.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//     {
//       title: "Wireshark",
//       percent: 87,
//       category: "Security",
//       description:
//         "Deep packet inspection, traffic analysis, protocol debugging, and network troubleshooting.",
//       icon: <FaShieldAlt className="text-emerald-400 w-8 h-8" />,
//     },
//   ];

//   const filteredSkills =
//     activeCategory === "All"
//       ? technicalSkills
//       : technicalSkills.filter(
//           (skill) => skill.category === activeCategory
//         );

//   const languages = [
//     { name: "Python", icon: <FaPython className="w-6 h-6 text-blue-400" />, percent: 100 },
//     { name: "C", icon: <SiC className="w-6 h-6 text-green-400" />, percent: 100 },
//     { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-blue-600" />, percent: 100 },

//     { name: "JavaScript and TypeScript", icon: <FaJsSquare className="w-6 h-6 text-yellow-400" />, percent: 90 },
//     { name: "Go", icon: <SiGo className="w-6 h-6 text-cyan-400" />, percent: 60 },
//     { name: "Java", icon: <FaCoffee className="w-6 h-6 text-cyan-400" />, percent: 100 },
//     { name: "PHP", icon: <SiPhp className="w-10 h-6 text-cyan-400" />, percent: 100 },
//   ];

//   return (
//     <section className="min-h-screen py-16 bg-black/90 text-zinc-200" id="skills">
//       <div className="max-w-7xl mx-auto px-6 mt-10">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Skills
//         </motion.h2>

//         <p className="text-center text-zinc-400 mb-10">
//           Technologies and tools I work with
//         </p>

//         {/* FILTER NAV */}
//         <div className="flex justify-center gap-4 flex-wrap mb-14">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-6 py-2 rounded-full transition-all duration-300
//               ${
//                 activeCategory === cat
//                   ? "bg-emerald-400 text-black shadow-lg shadow-emerald-500/40 scale-105"
//                   : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* SKILLS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="bg-zinc-800/40 backdrop-blur p-6 rounded-xl hover:scale-105 cursor-pointer border-emerald-500/30
//                 shadow-[0_0_30px_rgba(16,185,129,0.15)]
//                 hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
//                 transition-all duration-500"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.05 }}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <div className="flex items-center gap-4">
//                   {skill.icon}
//                   <h3 className="text-xl font-semibold">
//                     {skill.title}
//                   </h3>
//                 </div>
//                 <span className="text-emerald-400 font-bold text-lg">
//                   {skill.percent}%
//                 </span>
//               </div>

//               <p className="text-zinc-400 text-sm md:text-base mb-4">
//                 {skill.description}
//               </p>

//               <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.percent}%` }}
//                   transition={{ duration: 1 }}
//                   className="h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* PROGRAMMING LANGUAGES (UNCHANGED) */}
//         <div className="text-center">
//           <h3 className="text-2xl font-semibold mb-6 text-primary">
//             Programming Languages
//           </h3>

//           <div className="flex flex-wrap justify-center gap-5">
//             {languages.map((lang, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center gap-2 p-4 bg-zinc-800/30 backdrop-blur rounded-lg shadow hover:scale-110 transition-transform duration-300 w-32"
//                 whileHover={{ y: -5 }}
//               >
//                 {lang.icon}
//                 <span className="text-sm font-medium">
//                   {lang.name}
//                 </span>
//                 <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
//                   <div
//                     className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
//                     style={{ width: `${lang.percent}%` }}
//                   ></div>
//                 </div>
//                 <span className="text-xs text-zinc-400">
//                   {lang.percent}%
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaRobot,
  FaMicrochip,
  FaBrain,
  FaCogs,
  FaShieldAlt,
  FaLayerGroup,
  FaPython,
  FaJsSquare,
  FaCoffee,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiGo, SiPhp } from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "AI", "Python", "Java"];

  const technicalSkills = [
    {
      title: "AI & Machine Learning",
      percent: 85,
      category: "AI",
      description:
        "Designing ML models for computer vision, NLP, predictive analytics, and recommendation systems.",
      icon: <FaBrain className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Deep Learning",
      percent: 80,
      category: "AI",
      description:
        "Experienced with CNNs, RNNs, LSTMs, GANs, and transfer learning.",
      icon: <FaCogs className="text-emerald-400 w-8 h-8" />,
    },

    // ================= FRONTEND SKILLS =================
    {
      title: "JavaScript & TypeScript",
      percent: 99,
      category: "Frontend",
      description:
        "Building interactive web interfaces with modern JS frameworks like React, Vue, and Angular.",
      icon: <FaJsSquare className="text-emerald-400 w-8 h-8" />,
    },

    // ================= BACKEND SKILLS =================
    {
      title: "Python Backend",
      percent: 95,
      category: "Backend",
      description:
        "Developing robust backend APIs, microservices, and automation scripts with Python and Flask/Django.",
      icon: <FaPython className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Java Backend",
      percent: 99,
      category: "Backend",
      description:
        "Building scalable server-side applications using Java, Spring Boot, and RESTful APIs.",
      icon: <FaCoffee className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Robotics & Automation",
      percent: 88,
      category: "Backend",
      description:
        "Building autonomous robots capable of navigation, object detection, and manipulation using ROS1 & ROS2.",
      icon: <FaRobot className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "IoT Systems",
      percent: 82,
      category: "Backend",
      description:
        "Smart IoT solutions integrating sensors, microcontrollers, Raspberry Pi, and cloud dashboards.",
      icon: <FaMicrochip className="text-emerald-400 w-8 h-8" />,
    },

    // ================= PYTHON SPECIFIC =================
    {
      title: "Python Automation",
      percent: 90,
      category: "Python",
      description:
        "Automating tasks, data processing, and pipelines using Python scripts and libraries like Pandas and Selenium.",
      icon: <FaPython className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Python AI/ML",
      percent: 85,
      category: "Python",
      description:
        "Develop AI/ML models using Python libraries like TensorFlow, PyTorch, and scikit-learn.",
      icon: <FaBrain className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Python Web Dev",
      percent: 88,
      category: "Python",
      description:
        "Building web applications with Python frameworks like Flask and Django.",
      icon: <FaPython className="text-emerald-400 w-8 h-8" />,
    },

    // ================= JAVA SPECIFIC =================
    {
      title: "Java OOP & Core",
      percent: 95,
      category: "Java",
      description: "Strong understanding of Object-Oriented Programming and Java fundamentals.",
      icon: <FaCoffee className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Java Backend / Spring Boot",
      percent: 90,
      category: "Java",
      description: "Building robust backend services with Spring Boot, REST APIs, and databases.",
      icon: <FaCoffee className="text-emerald-400 w-8 h-8" />,
    },
    {
      title: "Java GUI / Desktop Apps",
      percent: 80,
      category: "Java",
      description: "Developing desktop and GUI applications using JavaFX and Swing.",
      icon: <FaCoffee className="text-emerald-400 w-8 h-8" />,
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? technicalSkills
      : technicalSkills.filter((skill) => skill.category === activeCategory);

  const languages = [
    { name: "Python", icon: <FaPython className="w-6 h-6 text-blue-400" />, percent: 100 },
    { name: "C", icon: <SiC className="w-6 h-6 text-green-400" />, percent: 100 },
    { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-blue-600" />, percent: 100 },
    { name: "JavaScript & TypeScript", icon: <FaJsSquare className="w-6 h-6 text-yellow-400" />, percent: 90 },
    { name: "Go", icon: <SiGo className="w-6 h-6 text-cyan-400" />, percent: 60 },
    { name: "Java", icon: <FaCoffee className="w-6 h-6 text-cyan-400" />, percent: 100 },
    { name: "PHP", icon: <SiPhp className="w-10 h-6 text-cyan-400" />, percent: 100 },
  ];

  return (
    <section className="min-h-screen py-16 bg-black/90 text-zinc-200" id="skills">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <p className="text-center text-zinc-400 mb-10">
          Technologies and tools I work with
        </p>

        {/* FILTER NAV */}
        <div className="flex justify-center gap-4 flex-wrap mb-14">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300
              ${activeCategory === cat
                  ? "bg-emerald-400 text-black shadow-lg shadow-emerald-500/40 scale-105"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/40 backdrop-blur p-6 rounded-xl hover:scale-105 cursor-pointer border-emerald-500/30
                shadow-[0_0_30px_rgba(16,185,129,0.15)]
                hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
                transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <span className="text-emerald-400 font-bold text-lg">{skill.percent}%</span>
              </div>

              <p className="text-zinc-400 text-sm md:text-base mb-4">{skill.description}</p>

              <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROGRAMMING LANGUAGES */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-zinc-800/30 backdrop-blur rounded-lg shadow hover:scale-110 transition-transform duration-300 w-32"
                whileHover={{ y: -5 }}
              >
                {lang.icon}
                <span className="text-sm font-medium">{lang.name}</span>
                <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                    style={{ width: `${lang.percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-zinc-400">{lang.percent}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}