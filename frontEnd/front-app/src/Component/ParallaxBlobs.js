import { motion } from "framer-motion";

function ParallaxBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* White Blob */}
      <motion.div
        className="absolute top-0 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, 600, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Black Blob */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, 700, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small White Blob */}
      <motion.div
        className="absolute top-1/4 left-2/3 w-64 h-64 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, 500, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small Black Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, 550, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default ParallaxBlobs;
