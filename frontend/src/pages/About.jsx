// import { motion } from "framer-motion"
// import {
//   FaLaptopCode,
//   FaServer,
//   FaMobileAlt,
//   FaDatabase,
//   FaLayerGroup,
//   FaCloudUploadAlt,
// } from "react-icons/fa"

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen px-6 md:px-20 py-22 bg-zinc-900 pt-30 "
//     >
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mb-1"
//       >
//         <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
//         <p className="text-white mt-2">
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 gap-14 items-center">
        
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-white">
//           </h3>

//           <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
//             I am a multidisciplinary technology professional specializing in Web Development, Mobile App Development, and Full-Stack Engineering. I design and develop modern, scalable, and high-performance web and mobile applications that deliver seamless user experiences and real-world impact.

//           </p>

//           <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
//             From building responsive frontend interfaces using modern frameworks to developing secure backend systems and RESTful APIs, my work spans the complete development lifecycle. I create dynamic web applications, cross-platform mobile apps, and database-driven systems that are efficient, secure, and scalable.
//           </p>

//           <p className="text-zinc-400 leading-relaxed mb-10 text-justify">
//             I focus on writing clean, maintainable code and implementing modern development practices including authentication systems, payment integrations, cloud deployment, and performance optimization. My expertise allows me to transform ideas into fully functional digital products.
//             I believe in building technology that is not only powerful but also user-centric. Every solution I design emphasizes performance, security, scalability, and innovation to meet real-world business and user needs.
//           </p>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-500 cursor-pointer">
//             <motion.div
//               whileHover={{ y: -1 }}


//               className="bg-zinc-800 rounded-xl p-6 border h-64 md:h-56
//               hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer 
//               shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] 
//                border-emerald-500/30
//                "
//             >
//               <FaLaptopCode className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold text-xl mb-2 text-white">
//                 Frontend Development
//               </h4>
//               <p className="text-zinc-400 text-sm text-justify">
//                 Modern and responsive web applications using HTML5, CSS3, and JavaScript (ES6+) with strong expertise in React.js and Vite. Skilled in building component-based architectures, creating responsive layouts with Tailwind CSS and Bootstrap, and implementing efficient DOM manipulation and performance optimization. Focused on delivering intuitive UI/UX designs, scalable frontend systems, and high-performance user interfaces across all devices.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -1 }}
//               className="bg-zinc-800 cursor-pointer duration-700 transition-all rounded-xl p-6 border ease-in-out shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//                border-emerald-500/30
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] hover:scale-105 "
//             >
//               <FaServer className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold mb-2 text-white text-xl">
//                 Backend Development
//               </h4>
//               <p className="text-zinc-400 text-sm text-justify">
//                 Scalable backend systems and RESTful API development using Node.js and Express.js with secure authentication (JWT, OAuth), efficient server-side logic, and seamless frontend integration. Experienced in file upload handling, database connectivity, and secure data processing with optimized performance, API security, and error handling for reliable and production-ready applications.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -1 }}
//               className="bg-zinc-800  rounded-xl hover:scale-105 cursor-pointer duration-700 ease-in-out transition-all p-6 border  shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//                border-emerald-500/30 h-68 md:h-60
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] "
//             >
//               <FaMobileAlt className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold mb-2 text-white text-xl">
//                 Mobile App Development
//               </h4>
//               <p className="text-zinc-400 text-sm text-justify ">
//                 I specialize in cross-platform mobile app development using Flutter and React Native, building apps that run seamlessly on both Android and iOS. My expertise includes designing intuitive and responsive mobile UI/UX, integrating APIs to connect apps with backend services, and managing app state efficiently for smooth performance. I am experienced in deploying apps to app stores, optimizing performance, and ensuring scalable, maintainable, and user-friendly mobile applications.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -1 }}
//               className="bg-zinc-800 rounded-xl cursor-pointer hover:scale-105
//               shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//                border-emerald-500/30
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] transition-all duration-700 p-6 border  "
//             >
//               <FaDatabase className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold text-xl mb-2 text-white">
//                 Database Management
//               </h4>
//               <p className="text-zinc-400 text-sm text-justify">
//                 I design and develop robust data-driven systems and backend pipelines powered by modern database technologies. Using MongoDB, Firebase, and MySQL, I create efficient data storage solutions, implement structured database schemas, and manage CRUD operations to ensure smooth data flow. My work emphasizes data security, optimization, and scalability, enabling applications to handle large-scale user interactions, real-time updates, and reliable backend functionality across web and mobile platforms.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -1 }}
//               className="bg-zinc-800 rounded-xl cursor-pointer hover:scale-105
//               shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//                border-emerald-500/30
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] transition-all duration-700 p-6 border  "
//             >
//               <FaLayerGroup className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold text-xl mb-2 text-white">
//                 Full Stack Integration              </h4>
//               <p className="text-zinc-400 text-sm">
//                 I specialize in building fully integrated web and mobile applications, connecting responsive frontends with robust backends. I implement secure authentication systems, develop real-time features, and integrate popular payment gateways like eSewa, Khalti, and Stripe to deliver seamless, user-friendly experiences.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ y: -1 }}
//               className="bg-zinc-800 rounded-xl cursor-pointer hover:scale-105
//               shadow-[0_0_30px_rgba(16,185,129,0.15)] 
//                border-emerald-500/30
//               hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] transition-all duration-700 p-6 border  "
//             >
//               <FaCloudUploadAlt className="text-blue-400 text-2xl mb-3" />
//               <h4 className="font-bold text-xl mb-2 text-white">
//                 Cloud & Deployment
//               </h4>
//               <p className="text-zinc-400 text-sm">
//                 I am experienced in deploying and hosting modern web and mobile applications using platforms like Vercel, Netlify, Render, Railway, and Firebase Hosting. I configure environments, manage build pipelines, and ensure smooth deployment of both frontend and backend applications. My workflow emphasizes scalability, reliability, and fast delivery, enabling real-time updates and secure access across platforms.
//               </p>
//             </motion.div>


//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { motion } from "framer-motion"
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaLayerGroup,
  FaCloudUploadAlt,
} from "react-icons/fa"

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-22 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden pt-32"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 tracking-wide">
          About Me
        </h2>
        <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-lg">
          Multidisciplinary technology professional specializing in web, mobile, and full-stack development. Transforming ideas into high-performance, scalable, and user-friendly digital products.
        </p>
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-zinc-400 text-justify mb-14 leading-relaxed space-y-4"
      >
        <p>
          I design and develop modern, scalable web and mobile applications that deliver seamless user experiences. From responsive frontends to secure backends, my work spans the complete development lifecycle.
        </p>
        <p>
          I implement clean, maintainable code, modern authentication, payment integrations, cloud deployment, and performance optimization. My goal is to transform ideas into fully functional digital products with a focus on performance, security, and innovation.
        </p>
      </motion.div>

      {/* Skill / Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <FaLaptopCode className="text-blue-400 text-3xl mb-3" />,
            title: "Frontend Development",
            desc: "Modern and responsive web apps using React.js, Vite, Tailwind CSS. Focused on UI/UX, performance, and scalable frontend systems."
          },
          {
            icon: <FaServer className="text-blue-400 text-3xl mb-3" />,
            title: "Backend Development",
            desc: "RESTful API and server systems with Node.js, Express, JWT/OAuth authentication, secure data handling, and optimized performance."
          },
          {
            icon: <FaMobileAlt className="text-blue-400 text-3xl mb-3" />,
            title: "Mobile App Development",
            desc: "Cross-platform apps using Flutter and React Native. Intuitive UI/UX, smooth performance, API integration, and scalable mobile solutions."
          },
          {
            icon: <FaDatabase className="text-blue-400 text-3xl mb-3" />,
            title: "Database Management",
            desc: "Robust database solutions using MongoDB, Firebase, MySQL. Focused on secure CRUD operations, schema design, and real-time data handling."
          },
          {
            icon: <FaLayerGroup className="text-blue-400 text-3xl mb-3" />,
            title: "Full Stack Integration",
            desc: "Connects frontend and backend with authentication, real-time features, and payment gateway integration (eSewa, Khalti, Stripe)."
          },
          {
            icon: <FaCloudUploadAlt className="text-blue-400 text-3xl mb-3" />,
            title: "Cloud & Deployment",
            desc: "Deploy apps using Vercel, Netlify, Render, Railway, Firebase Hosting. Scalable, reliable, and fast deployment workflows."
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 rounded-xl p-6 border border-emerald-500/20 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/40 cursor-pointer hover:scale-105 transition-all duration-700 ease-in-out"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            {card.icon}
            <h4 className="font-bold text-xl mb-2 text-white">{card.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional Floating Tech Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-50 top-10 left-20"
        />
        <motion.div
          animate={{ x: [0, -15, 15, 0], y: [0, -10, 10, 0], rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute w-2 h-2 bg-green-400 rounded-full opacity-50 top-1/2 left-1/3"
        />
      </div>
    </section>
  )
}
