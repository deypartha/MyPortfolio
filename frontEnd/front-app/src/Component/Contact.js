import React, {useState} from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from 'react-parallax-tilt';


const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbt690d",   // Replace with your EmailJS Service ID
        "template_ca2gygl",  // Replace with your EmailJS Template ID
        e.target,
        "b2gzzd9S_HqWwxFAS"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center text-white px-6 py-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🔥 Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "#0f0f0f" }, // Dark background
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
        }}
        className="absolute inset-0 -z-10" // 👈 keeps it behind everything
      />

      {/* Page Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Image & Title */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 ml-5">Get In Touch</h1>
          <motion.img
            src="/images/touch.png"
            alt="Get in Touch"
            className="mx-auto lg:mx-0 w-72 lg:w-96 drop-shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Contact Form */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.05}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          transitionSpeed={2000}
          className="w-full max-w-lg mx-auto"
        >
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/10 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto backdrop-blur-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
        </Tilt>
      </div>
    </section>
  );
};

export default Contact;