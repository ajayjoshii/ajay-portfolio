// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully 🚀");
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <section className="min-h-screen bg-black flex items-center justify-center px-4">
//       <div className="md:max-w-5xl w-100 md:w-full mt-24 mb-10">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center text-4xl font-bold text-green-400 mb-12"
//         >
//           Contact
//           <span className="block w-16 h-1 bg-green-400 mx-auto mt-3" />
//         </motion.h2>

//         {/* Layout */}
//         <div className="grid md:grid-cols-2 gap-10">

//           {/* LEFT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-zinc-900 rounded-2xl p-8 shadow-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {["name", "email", "subject"].map((field) => (
//                 <div key={field}>
//                   <label className="text-gray-400 capitalize">
//                     {field}
//                   </label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={form[field]}
//                     onChange={handleChange}
//                     required
//                     className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                                text-white border border-zinc-700
//                                focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                                outline-none transition"
//                   />
//                 </div>
//               ))}

//               {/* Message */}
//               <div>
//                 <label className="text-gray-400">Message</label>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                              text-white border border-zinc-700
//                              focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                              outline-none resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg bg-green-500 hover:scale-105 duration-700 ease-in-out
//                            text-black font-semibold hover:bg-green-400 transition"
//               >
//                 Send Message 🚀
//               </button>
//             </form>
//           </motion.div>

//           {/* RIGHT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex flex-col justify-center gap-6 text-gray-300"
//           >
//             <h3 className="text-2xl font-semibold text-green-400">
//               Get In Touch
//             </h3>

//             <Info icon={<Mail />} text="anishparajuli704@gmail.com" highlight />
//             <Info icon={<Phone />} text="9861165413"   />
//             <Info icon={<MapPin />} text="Bhaktapur, Duwakot" />
//             <Info icon={<Briefcase />} text="Available for freelance" />

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               {["👨‍💻", "💼", "📸", "✉️"].map((icon, i) => (
//                 <span
//                   key={i}
//                   className="w-12 h-12 flex items-center justify-center 
//                              rounded-full border border-green-500 
//                              text-green-400 hover:bg-green-500 hover:text-black 
//                              transition-all duration-900 ease-in-out cursor-pointer"
//                 >
//                   {icon}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* Info Row Component */
// function Info({ icon, text, highlight }) {
//   return (
//     <div
//       className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-green-800 duration-900 ease-in-out
//       ${highlight ? "bg-green-900/40 text-green-400" : "bg-zinc-900"}`}
//     >
//       <span className="text-green-400">{icon}</span>
//       <span>{text}</span>
//     </div>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
// import { sendContactMessage } from "../api/api";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const socialLinks = [
//     { icon: "👥", url: "https://www.facebook.com/ajay.shrestha.364674" },
//     { icon: "💻", url: "https://github.com/ajayjoshii/" },
//     { icon: "🤝", url: "https://www.linkedin.com/in/ajay-shrestha-126989283/" },
//     { icon: "✨", url: "https://www.instagram.com/ajayjoshi139/" },
//   ];

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await sendContactMessage(form);
//       alert("Message sent successfully 🚀");
//       setForm({ name: "", email: "", subject: "", message: "" });
//     } catch (err) {
//       alert(`Failed to send message 😢\n${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-black flex items-center justify-center px-4">
//       <div className="md:max-w-5xl w-full mt-24 mb-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center text-4xl font-bold text-green-400 mb-12"
//         >
//           Contact
//           <span className="block w-16 h-1 bg-green-400 mx-auto mt-3" />
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-10">

//           {/* LEFT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-zinc-900 rounded-2xl p-8 shadow-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {["name", "email", "subject"].map((field) => (
//                 <div key={field}>
//                   <label className="text-gray-400 capitalize">{field}</label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={form[field]}
//                     onChange={handleChange}
//                     required
//                     className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                                text-white border border-zinc-700
//                                focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                                outline-none transition"
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="text-gray-400">Message</label>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                              text-white border border-zinc-700
//                              focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                              outline-none resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-3 rounded-lg bg-green-500 hover:scale-105 duration-700 ease-in-out
//                            text-black font-semibold hover:bg-green-400 transition
//                            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {loading ? "Sending..." : "Send Message 🚀"}
//               </button>
//             </form>
//           </motion.div>

//           {/* RIGHT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex flex-col justify-center gap-6 text-gray-300"
//           >
//             <h3 className="text-2xl font-semibold text-green-400">Get In Touch</h3>

//             <Info icon={<Mail />} text="jajay7941@gmail.com" highlight />
//             <Info icon={<Phone />} text="9815898401" />
//             <Info icon={<MapPin />} text="Lokanthali,Bhaktapur" />
//             <Info icon={<Briefcase />} text="Available for freelance" />

//             <div className="flex gap-4 mt-6">

//               {socialLinks.map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 flex items-center justify-center 
//                rounded-full border border-green-500 
//                text-green-400 hover:bg-green-500 hover:text-black 
//                transition-all duration-900 ease-in-out cursor-pointer"
//                 >
//                   {item.icon}
//                 </a>
//               ))}



//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function Info({ icon, text, highlight }) {
//   return (
//     <div
//       className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-green-800 duration-900 ease-in-out
//       ${highlight ? "bg-green-900/40 text-green-400" : "bg-zinc-900"}`}
//     >
//       <span className="text-green-400">{icon}</span>
//       <span>{text}</span>
//     </div>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const socialLinks = [
//     { icon: "👥", url: "https://www.facebook.com/ajay.shrestha.364674" },
//     { icon: "💻", url: "https://github.com/ajayjoshii/" },
//     { icon: "🤝", url: "https://www.linkedin.com/in/ajay-shrestha-126989283/" },
//     { icon: "✨", url: "https://www.instagram.com/ajayjoshi139/" },
//   ];

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.send(
//         "service_yzv0t2i",   // replace
//         "template_yn5cf6k",  // replace
//         {
//           name: form.name,
//           email: form.email,
//           subject: form.subject,
//           message: form.message,
//         },
//         "oZ_0saNOfJXGJW5qk"    // replace
//       );

//       alert("Message sent successfully 🚀");
//       setForm({ name: "", email: "", subject: "", message: "" });

//     } catch (err) {
//       console.error(err);
//       alert("Failed to send message 😢");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-black flex items-center justify-center px-4">
//       <div className="md:max-w-5xl w-full mt-24 mb-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center text-4xl font-bold text-green-400 mb-12"
//         >
//           Contact
//           <span className="block w-16 h-1 bg-green-400 mx-auto mt-3" />
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-10">

//           {/* LEFT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-zinc-900 rounded-2xl p-8 shadow-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {["name", "email", "subject"].map((field) => (
//                 <div key={field}>
//                   <label className="text-gray-400 capitalize">{field}</label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={form[field]}
//                     onChange={handleChange}
//                     required
//                     className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                                text-white border border-zinc-700
//                                focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                                outline-none transition"
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="text-gray-400">Message</label>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 
//                              text-white border border-zinc-700
//                              focus:border-green-400 focus:ring-1 focus:ring-green-400 
//                              outline-none resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-3 rounded-lg bg-green-500 hover:scale-105 duration-700 ease-in-out
//                            text-black font-semibold hover:bg-green-400 transition
//                            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {loading ? "Sending..." : "Send Message 🚀"}
//               </button>
//             </form>
//           </motion.div>

//           {/* RIGHT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex flex-col justify-center gap-6 text-gray-300"
//           >
//             <h3 className="text-2xl font-semibold text-green-400">Get In Touch</h3>

//             <Info icon={<Mail />} text="jajay7941@gmail.com" highlight />
//             <Info icon={<Phone />} text="9815898401" />
//             <Info icon={<MapPin />} text="Lokanthali,Bhaktapur" />
//             <Info icon={<Briefcase />} text="Available for freelance" />

//             <div className="flex gap-4 mt-6">
//               {socialLinks.map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 flex items-center justify-center 
//                rounded-full border border-green-500 
//                text-green-400 hover:bg-green-500 hover:text-black 
//                transition-all duration-900 ease-in-out cursor-pointer"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function Info({ icon, text, highlight }) {
//   return (
//     <div
//       className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-green-800 duration-900 ease-in-out
//       ${highlight ? "bg-green-900/40 text-green-400" : "bg-zinc-900"}`}
//     >
//       <span className="text-green-400">{icon}</span>
//       <span>{text}</span>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { icon: "👥", url: "https://www.facebook.com/ajay.shrestha.364674" },
    { icon: "💻", url: "https://github.com/ajayjoshii/" },
    { icon: "🤝", url: "https://www.linkedin.com/in/ajay-shrestha-126989283/" },
    { icon: "✨", url: "https://www.instagram.com/ajayjoshi139/" },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_yzv0t2i",
        "template_yn5cf6k",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "oZ_0saNOfJXGJW5qk"
      );

      toast.success("Message sent successfully 🚀", { theme: "dark" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message 😢", { theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="md:max-w-5xl w-full mt-24 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold text-green-400 mb-12"
        >
          Contact
          <span className="block w-16 h-1 bg-green-400 mx-auto mt-3" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="text-gray-400 capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg bg-green-500 hover:scale-105 duration-700 ease-in-out text-black font-semibold hover:bg-green-400 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center gap-6 text-gray-300"
          >
            <h3 className="text-2xl font-semibold text-green-400">
              Get In Touch
            </h3>

            <Info icon={<Mail />} text="jajay7941@gmail.com" highlight />
            <Info icon={<Phone />} text="9815898401" />
            <Info icon={<MapPin />} text="Lokanthali,Bhaktapur" />
            <Info icon={<Briefcase />} text="Available for freelance" />

            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-900 ease-in-out cursor-pointer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, text, highlight }) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-green-800 duration-900 ease-in-out ${
        highlight ? "bg-green-900/40 text-green-400" : "bg-zinc-900"
      }`}
    >
      <span className="text-green-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
