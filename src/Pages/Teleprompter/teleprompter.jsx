import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Teleprompter() {
  const sentences = [
    "Declare you reject hate.",
    "Declare you reject ignorance.",
    "Declare you reject corruption.",
    "Declare you reject dishonesty.",
    "Declare you reject autocracy."
  ];

  const controls = useAnimation();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalHeight = sentences.length * 80; // each sentence ~80px tall
    const duration = 15; // total scroll duration in seconds

    const startAnimation = async () => {
      await controls.start({
        y: [-totalHeight, 0],
        transition: {
          duration,
          ease: "linear"
        }
      });

      // Pause 5s at the end for readability
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 5000);
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="relative w-full h-64 overflow-hidden bg-black text-white flex justify-center items-center rounded-2xl">
      <motion.div
        animate={controls}
        className="flex flex-col items-center gap-8 text-2xl font-semibold leading-relaxed"
      >
        {sentences.map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </motion.div>

      {isComplete && (
        <div className="absolute bottom-2 text-sm opacity-70">
          (End of script — paused for 5s)
        </div>
      )}
    </div>
  );
}
