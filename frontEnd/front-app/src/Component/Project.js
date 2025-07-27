import React from "react";

const Project = () => {
  const projectData = [
    {
      img: "/images/project1.png",
      title: "Musify",
      description: "A music application",
      link: "https://github.com/deypartha/SCM-Music-player-Group/blob/main/music.html",
    },
    {
      img: "/images/project2.png",
      title: "DhabaPoint",
      description: "It is a restaurant-based project",
      link: "https://dhaba-food-deypa.netlify.app/",
    },
    {
      img: "/images/project3.png",
      title: "SafeHaven",
      description: "Based on Women Safety",
      link: "https://github.com/deypartha/Hack_With_Her",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-transparent text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">Projects</h2>
        <h4 className="text-lg sm:text-xl text-gray-300">Some of my works</h4>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110 rounded-t-lg"
            />
            <div className="p-5 text-center flex flex-col flex-grow">
              <h5 className="text-xl font-semibold">{project.title}</h5>
              <p className="text-gray-400 my-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
