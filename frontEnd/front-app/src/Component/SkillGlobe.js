import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { FaHtml5, FaCss3, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 color="#e34c26" size={40} /> },
  { icon: <FaCss3 color="#264de4" size={40} /> },
  { icon: <FaJs color="#f7df1e" size={40} /> },
  { icon: <FaJava color="#cd570e" size={40} /> },
  { icon: <FaReact color="#61dafb" size={40} /> },
  { icon: <SiTailwindcss color="#06b6d4" size={40} /> },
];

function SkillSphere() {
  const group = useRef();

  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y = mouse.x * Math.PI; // rotate based on mouse
      group.current.rotation.x = mouse.y * Math.PI * 0.5;
    }
  });

  return (
    <group ref={group}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Html
            key={index}
            position={[x, y, z]}
            center
            style={{ cursor: "pointer" }}
          >
            {skill.icon}
          </Html>
        );
      })}
    </group>
  );
}

const SkillGlobe = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <SkillSphere />
      </Canvas>
    </div>
  );
};

export default SkillGlobe;
