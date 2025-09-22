import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { useAnimation } from "framer-motion";
import SkillGlobe from "./SkillGlobe";


const About = () => {
    const iconContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
const iconItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const controls = useAnimation();
  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <div className="text-white px-4 md:px-10 lg:px-20 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12">About Me</h1>
      <section id="about" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Profile Image */}
        {/* Profile Image + Social Icons */}
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="images/photo2.png"
          alt="Partha Dey"
          className="rounded-xl shadow-lg w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-auto object-cover"
        />
        <motion.div
          className="flex gap-5 pt-6 justify-center"
          variants={iconContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            { icon: <FaFacebook />, href: "#" },
            { icon: <FaTwitter />, href: "https://x.com/home?lang=en" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/partha-dey-b418b4302/" },
            { icon: <FaGithub />, href: "https://github.com/deypartha" },
          ].map(({ icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="hover:text-green-500 transition duration-300 ease-in-out text-3xl md:text-4xl"
              variants={iconItemVariants}
              whileHover={{ scale: 1.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

        {/* Objective */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-start min-w-0 px-4"
        >
          <div className="flex flex-col px-4 border-l border-r lg:border-l-0 lg:border-r-2 border-gray-600 py-6">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4 text-center leading-[2.2]">Objective</h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left leading-[2.1] font-bold">
              A Computer Science undergraduate student who is seeking an opportunity to work in a fun and challenging environment that encourages growth, learning new skills, and contributing to both personal and organizational advancement in the software development industry. 
              I am eager to apply my knowledge and skills in a practical setting, while also gaining valuable experience in the field of software development.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col justify-start min-w-0 px-4"
        >
        <div className="flex flex-col px-4">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4 mt-5 text-center leading-[2.2]">Education</h2>

          <div className="mb-6 flex flex-col items-center">
            <FaUserGraduate className="text-sky-500 text-[50px] text-center" />
            <h3 className="text-orange-500 text-xl md:text-2xl font-semibold mb-1 leading-[1.7] text-center">Graduation</h3>
            <p className="text-gray-300 text-lg leading-[1.7] font-semibold text-center">Bachelor of Technology (B.E CSE)</p>
            <p className="text-gray-400 text-base leading-[1.7] font-semibold text-center">Chitkara University, Chandigarh</p>
            <p className="text-yellow-400 text-base leading-[1.7] font-semibold text-center">2023 - present'</p>
          </div>

          <div className="flex flex-col items-center">
            <GiSchoolBag className="text-sky-500 text-[50px] text-center" />
            <h3 className="text-orange-500 text-xl md:text-2xl font-semibold mb-1 leading-[1.7] text-center">Higher Secondary</h3>
            <p className="text-gray-300 text-lg leading-[1.7] font-semibold text-center">12 (WBCHSE)</p>
            <p className="text-gray-400 text-[25px] text-base leading-[1.7] font-semibold text-center">
              Amlasuli Indra-narayan High School, Amlasuli,<br />
              West Bengal
            </p>
            <p className="text-yellow-400 text-base leading-[1.7] font-semibold text-center">2021 - 2023</p>
          </div>
        </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="col-span-full w-full px-4"
        >
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4 mt-5 text-center leading-[2.2]">Skills</h2>
          <h4 className="text-gray-300 text-lg mb-8 text-center font-semibold">I enjoy working with this.</h4>
          <SkillGlobe />
          {/* Skills Grid - 3 per row, fully responsive */}
      </motion.div>
      </section>
    </div>
  );
};


export default About;
                