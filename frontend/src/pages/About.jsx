
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
      className="min-h-screen px-6 md:px-20 py-22 bg-linear-to-br bg-white relative overflow-hidden pt-32"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-10 rounded-2xl border border-blue-400/20 bg-white shadow-[0_8px_35px_rgba(59,130,246,0.12)] hover:shadow-[0_8px_45px_rgba(59,130,246,0.2)] transition-all duration-500"
      >
        <div>
          <img src="bpic.jpg" alt="Ajay Kumar Shrestha" />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 tracking-wide mt-5 text-center">Ajay Kumar Shrestha</h1>
        </div>


        <div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-3xl font-bold uppercase text-blue-400 tracking-wide">
              Introduction
            </h2>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-lg">
             A multidisciplinary developer focused on building innovative web and mobile experiences.
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
            <p >
              I , Ajay Kumar Shrestha, design and develop modern, scalable web and mobile applications that deliver seamless user experiences. From responsive frontends to secure backends, my work spans the complete development lifecycle.
            </p>
            <p>
              I implement clean, maintainable code, modern authentication, payment integrations, cloud deployment, and performance optimization. My goal is to transform ideas into fully functional digital products with a focus on performance, security, and innovation.
            </p>

            <p>From frontend interfaces to secure backend systems, I bring ideas to life through technology.</p>
          </motion.div>
        </div>

      </div>







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
            className="bg-white rounded-xl p-6 border border-emerald-500/20 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/40 cursor-pointer hover:scale-105 transition-all duration-700 ease-in-out"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            {card.icon}
            <h4 className="font-bold text-xl mb-2 text-white">{card.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
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
