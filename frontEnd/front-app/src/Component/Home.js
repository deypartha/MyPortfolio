import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const iconContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each icon
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
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },  
};

const titles = ["Partha Dey", "a Web Developer", "a Tech Enthusiast"];
const [text, setText] = useState("");
const [titleIndex, setTitleIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
useEffect(() => {
  const currentTitle = titles[titleIndex];
  let typingSpeed = isDeleting ? 300 : 500;
  let delayAfterComplete = 2000; // wait before deleting
  let timeout;

  if (!isDeleting && charIndex === currentTitle.length) {
    // Pause before starting delete
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, delayAfterComplete);
  } else if (isDeleting && charIndex === 0) {
    // Pause before typing next title
    timeout = setTimeout(() => {
      setIsDeleting(false);
      setTitleIndex((titleIndex + 1) % titles.length);
    }, 500);
  } else {
    timeout = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setText(currentTitle.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);
    }, typingSpeed);
  }

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, titleIndex]);
  return (
    <section
        id="home"
        className="min-h-screen text-white px-4 sm:px-8 md:px-16 lg:px-24 py-10 flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-32 max-w-screen-xl mx-auto"
        ref={ref}
        >

      {/* Left Section */}
      <motion.div
          className="w-full md:w-3/5 lg:w-2/3 xl:w-[65%] space-y-7 text-center lg:text-left"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <p className="text-5xl sm:text-5xl lg:text-6xl font-bold italic">
          ℌ<span className="text-2xl sm:text-2xl">𝔢𝔩𝔩𝔬 !</span>
        </p>

        <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 h-20">
                <span className="text-orange-600 italic">I'm {text}</span>
                <span className="animate-pulse">|</span>
            </h1>
        </div>


        <p className="font-medium sm:text-lg max-w-md mx-auto lg:mx-0 text-[20px] leading-[1.8]">
          I'm Partha Dey — a passionate Full Stack Developer with experience in building dynamic and responsive web applications using the MERN stack. I love transforming complex problems into intuitive digital solutions. Whether it's developing seamless UIs or optimizing backend performance, I'm driven by the goal of creating impactful software. 
        </p>

        <div className="flex flex-col sm:flex-row gap-5 pt-4 items-center justify-center lg:justify-start">
          <button className="bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-700 transition w-60 text-xl">
            Learn More
          </button>
          <button className="border border-pink-500 px-6 py-2 rounded-full hover:bg-pink-600 transition w-60 text-xl">
            <a href="https://github.com/deypartha">My Works <span className="text-green-500 text-xl">→</span></a>
          </button>
        </div>
        <motion.div
          className="flex gap-4 pt-6 justify-center lg:justify-start"
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
              className="hover:text-green-500 transition duration-300 ease-in-out text-6xl pl-5"
              variants={iconItemVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      {/* Right Section */}
      <motion.div
        className="h-auto rounded-2xl sm:w-[400px] md:w-[500px] lg:w-[850px] xl:w-[800px] shadow-lg object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
            src="/images/partha.png"
            alt="Partha Dey"
            className="rounded-2xl shadow-lg w-72 sm:w-96 md:w-[450px] lg:w-[700px] xl:w-[650px] h-auto object-cover"
        />

      </motion.div>

    </section>
  );
};

export default Home;
