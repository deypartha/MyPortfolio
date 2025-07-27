import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import React from "react";
import Background from "./Component/BackGround";
import ParallaxBlobs from "./Component/ParallaxBlobs"; 
import Project from "./Component/Project"; 

function App() {
  return (
    // <div className="bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950">
    <div className="relative">
      <Background />
      <ParallaxBlobs /> 
      <Navbar />
      <section id="home" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <Home />
      </section>

      <section id="about" className="min-h-screen scroll-mt-24 pl-24 text-white p-8 p-16 flex flex-col lg:flex-row items-center justify-between">
        <About />
      </section>
      <section id="projects" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <Project />
      </section>
      <section id="contact" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <Contact />
      </section>
    </div>
  );
}
export default App;




// import React from "react";
// import Navbar from "./Component/Navbar";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import ParallaxBlobs from "./Component/ParallaxBlobs"; // Import ParallaxBlobs
// import Background from "./Component/BackGround";      // Import Background (animated gradient)

// function App() {
//   return (
//     <div className="relative">
//       {/* Animated Gradient Background */}
//       <Background />

//       {/* Parallax Blobs Background */}
//       <ParallaxBlobs />

//       {/* Foreground Content */}
//       <Navbar />
//       <section id="home" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
//         <Home />
//       </section>

//       <section id="about" className="min-h-screen scroll-mt-24 pl-24 text-white p-8 p-16 flex flex-col lg:flex-row items-center justify-between">
//         <About />
//       </section>

//       <section id="projects" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
//         <h1 className="text-4xl">Projects Section</h1>
//       </section>

//       <section id="contact" className="min-h-screen scroll-mt-24 pt-24 text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
//         <h1 className="text-4xl">Contact Section</h1>
//       </section>
//     </div>
//   );
// }

// export default App;
