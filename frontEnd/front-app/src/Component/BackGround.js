// Background.jsx
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollYProgress } = useScroll();

  // Rotate colors as you scroll
  const hue = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const filter = useTransform(hue, (v) => `hue-rotate(${v}deg)`);

  // Also move the gradient a bit
  const bgPos = useTransform(scrollYProgress, [0, 1], ["0% 0%", "0% 100%"]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950"
      style={{
        filter,
        backgroundPosition: bgPos,
        backgroundSize: "200% 200%",
      }}
    />
  );
}
