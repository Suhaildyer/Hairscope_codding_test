import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { IoBody } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineTimelapse } from "react-icons/md";

export default function CyberLabModal({ showMaze, setShowMaze }) {
  const [password, setPassword] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  // animation controls
  const leftControls = useAnimation();
  const centerControls = useAnimation();
  const rightControls = useAnimation();
  const backdropControls = useAnimation();

  // Variants (used by controls)
  const leftVariants = {
    enter: { x: 0, opacity: 1 },
    exit: { x: "-120%", opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const centerVariants = {
    enter: { opacity: 1, rotate: 0, scale: 1 },
    exit: {
      opacity: 0,
      rotate: 720,
      scale: 0.3,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  const rightVariants = {
    enter: { x: 0, opacity: 1 },
    exit: { x: "120%", opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const backdropVariants = {
    enter: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.35 } },
  };

  const handleEnterLab = async () => {
    if (password === "1234") {
      setIsExiting(true);

      // start left/center/right in parallel and wait till they finish
      await Promise.all([
        leftControls.start("exit"),
        centerControls.start("exit"),
        rightControls.start("exit"),
      ]);

      // then fade out backdrop
      await backdropControls.start("exit");

      // finally unmount
      setShowMaze(false);
    } else {
      // small shake as feedback then alert
      await centerControls.start({
        x: [0, -8, 8, -6, 6, 0],
        transition: { duration: 0.45 },
      });
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex items-center justify-center text-cyan-400 font-mono">
      <AnimatePresence>
        {showMaze && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-2xl z-50 p-4  "
            variants={backdropVariants}
            initial="enter"
            animate={backdropControls}
          >
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 border-2 border-cyan-400 p-4 md:p-6 rounded-lg  mx-auto">
              {/* Close Button */}
              <button
                className="absolute  right-9 text-2xl font-bold hover:text-white "
                aria-label="Close modal"
                onClick={() => setShowMaze(false)}
              >
                ✕
              </button>

              {/* LEFT SECTION */}
              <motion.div
                className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left border-2 border-cyan-400 p-4 md:p-6 rounded-lg  mx-auto "
                variants={leftVariants}
                initial="enter"
                animate={leftControls}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">JAVA</h1>
                <p className="text-xs sm:text-sm mb-6 text-gray-400">
                  This course is provisioned by Zicops Labs
                </p>
                <ul className="flex justify-center md:justify-start gap-4 text-xs sm:text-sm mb-8 text-gray-300">
                  <li>• Labs</li>
                  <li>• Exercises</li>
                  <li>• Do it Yourself</li>
                </ul>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <IoBody className="text-5xl sm:text-6xl" />
                    <div>
                      <p className="text-sm sm:text-lg">EXERCISE</p>
                      <p className="text-xl sm:text-3xl font-bold">9</p>
                      <p className="text-xs sm:text-sm text-gray-500">completed out of 84.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <GoProjectSymlink className="text-5xl sm:text-6xl" />
                    <div>
                      <p className="text-sm sm:text-lg">PROJECTS</p>
                      <p className="text-xl sm:text-3xl font-bold">2</p>
                      <p className="text-xs sm:text-sm text-gray-500">completed out of 84.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <MdOutlineTimelapse className="text-5xl sm:text-6xl" />
                    <div>
                      <p className="text-sm sm:text-lg">TIME SPENT</p>
                      <p className="text-xl sm:text-3xl font-bold">5</p>
                      <p className="text-xs sm:text-sm text-gray-500">completed out of 84.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CENTER CIRCLE MODAL */}
              <motion.div
                className="w-70 h-70 sm:w-72 sm:h-72 md:w-[300px] md:h-[300px] rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-center relative shadow-[0_0_20px_#00ffff] mx-auto md:mt-10"
                variants={centerVariants}
                initial="enter"
                animate={centerControls}
              >
                <div className="text-4xl sm:text-6xl mb-4">🔒</div>
                <p className="mb-4 text-sm sm:text-base">Enter Your Zicops Password</p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await handleEnterLab();
                  }}
                  className="w-full px-4"
                >
                  <input
                    type="password"
                    className="w-[70%] p-3 rounded bg-black border border-cyan-400 text-center mb-4 focus:outline-none"
                    placeholder="••••••"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isExiting}
                  />
                  <button
                    type="submit"
                    disabled={!password || isExiting}
                    className="w-[70%] bg-cyan-500 text-black px-6 py-2 rounded font-bold hover:bg-cyan-400 disabled:opacity-50"
                  >
                    Enter Lab
                  </button>
                </form>
              </motion.div>

              {/* RIGHT SECTION */}
              <motion.div
                className="w-full h-[80%]  md:w-1/3 flex flex-col justify-center items-center md:items-start md:mt-10 border-2 border-cyan-400 p-8 md:p-6 rounded-lg  mx-auto "
                variants={rightVariants}
                initial="enter"
                animate={rightControls}
              >
                <div className="space-y-8 w-full max-w-xs">
                  <div className="h-8 bg-gray-800 rounded">
                    <div className="h-8 bg-cyan-400 w-4/5"></div>
                  </div>
                  <div className="h-8 bg-gray-800 rounded">
                    <div className="h-8 bg-cyan-400 w-3/5"></div>
                  </div>
                  <div className="h-8 bg-gray-800 rounded">
                    <div className="h-8 bg-cyan-400 w-1/3"></div>
                  </div>
                  <div className="h-8 bg-gray-800 rounded">
                    <div className="h-8 bg-cyan-400 w-1/4"></div>
                  </div>
                </div>
                <p className="mt-8 mb-8 text-xl sm:text-2xl font-bold text-cyan-400">50 mins left</p>
                <p className="text-gray-500 text-xs sm:text-sm">out of 60 Min</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
