import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Online Food Ordering System",
    description:
      "A digital platform that allows users to browse menus, place orders, and pay for food from restaurants or food outlets through web or mobile apps. It streamlines ordering, reduces wait times, and often includes real-time tracking and delivery options",
    image:
      "foodorderNp.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://online-food-ordering-system-nepal.netlify.app/",
    code: "https://github.com/ajayjoshii/",
  },
  {
    title: "Bela Plants",
    description:
      "Bela Plants is a dedicated plant retail business specializing in high-quality ornamental plants, gardening supplies, and plant care solutions. Our mission is to support sustainable living by making plants accessible, affordable, and easy to care for.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/lot-of-houseplants-growing-on-window-sill-from-left-royalty-free-image-1747254223.pjpeg?crop=0.668xw:1.00xh;0.104xw,0&resize=640:*",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    demo: "https://jovial-pixie-314430.netlify.app/",
    code: "https://github.com/ajayjoshii/",
  },
  {
    title: "Coffee Blend Website",
    description:
      "A modern e-commerce website for a coffee shop, featuring a sleek design, responsive layout, and seamless user experience. The site allows customers to explore a variety of coffee blends, view detailed product information, and make purchases with ease. ",
    image:
      "https://themewagon.com/wp-content/uploads/2018/10/coffieblend-1.jpg",
    tech: ["React", "Vite", "Tailwind CSS"],
    demo: "https://coffee-blend-website.netlify.app/",
    code: "https://github.com/ajayjoshii/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="bg-[#0b0b0f] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-violet-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            A selection of real-world systems I’ve designed and built
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#15151c] rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/20 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="flex-1 text-center text-sm px-4 py-2 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
          >
            View More Projects →
          </Link>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
          >
            View More Projects →
          </Link>
        </motion.div>



      </div>
    </section>
  );
};

export default Projects;
