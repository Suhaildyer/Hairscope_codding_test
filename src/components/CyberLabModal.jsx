



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoBody } from "react-icons/io5";
// import { GoProjectSymlink } from "react-icons/go";
// import { MdOutlineTimelapse } from "react-icons/md";



// export default function CyberLabModal({ setShowMaze }) {
//     // const [isOpen, setIsOpen] = useState(true);
//   const [password, setPassword] = useState("");

//   const handleEnterLab = () => {
//     if (password === "1234") {
//       setShowMaze(false);
//     } else {
//       alert("Incorrect password!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-cyan-400 font-mono">
//       <AnimatePresence>
//         {setShowMaze && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-full max-w-6xl flex justify-between px-10">
//               {/* Close Button */}
//               <button
//                 className="absolute top-4 right-6 text-2xl font-bold hover:text-white"
//                 onClick={() => setShowMaze(false)}
                 
                
                
//               >
//                 ✕
//               </button>

//               {/* LEFT SECTION */}
//               <div className="w-1/3 flex flex-col justify-center">
//                 <h1 className="text-4xl font-bold mb-2">JAVA</h1>
//                 <p className="text-sm mb-6 text-gray-400">
//                   This course is provisioned by Zicops Labs
//                 </p>
//                 <ul className="flex gap-4 text-sm mb-8 text-gray-300">
//                   <li>• Labs</li>
//                   <li>• Exercises</li>
//                   <li>• Do it Yourself</li>
//                 </ul>

//                 {/* Stats */}
//                 <div className="space-y-3">
//                   <div className="flex gap-4 ">
//                     <div className="w-20 h-20 flex items-center justify-center text-8xl "><IoBody /></div>
//                     <div>
//                       <p className="text-lg">EXERCISE</p>
//                       <p className="text-3xl font-bold">9</p>
//                       <p className="text-sm text-gray-500">
//                         completed out of 84.
//                       </p>
//                     </div>
//                   </div>

//                  <div className="flex gap-4 ">
//                    <div className="w-20 h-20 flex items-center justify-center text-8xl ">
//                     <GoProjectSymlink />
//                   </div>
//                   <div>
//                     <p className="text-lg">PROJECTS</p>
//                     <p className="text-3xl font-bold">2</p>
//                     <p className="text-sm text-gray-500">
//                       completed out of 84.
//                     </p>
//                   </div>
//                  </div>
//                   <div className="flex gap-4 ">
//                     <div className="w-20 h-20 flex items-center justify-center text-8xl ">
//                       <MdOutlineTimelapse />
//                     </div>
//                     <div>
//                       <p className="text-lg">TIME SPENT</p>
//                       <p className="text-3xl font-bold">5</p>
//                       <p className="text-sm text-gray-500">
//                         completed out of 84.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CENTER CIRCLE MODAL */}
//               <motion.div
//                 className="w-[300px] h-[300px] rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-center relative shadow-[0_0_20px_#00ffff] mt-10 mr-10"
//                  initial={{ opacity: 1, rotate: 0 }}
//                 exit={{ opacity: 0, rotate: 360, scale: 0 }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//               >
//                 {/* Fingerprint Icon */}
//                 <div className="text-6xl mb-6">🔒</div>
//                 <p className="mb-4">Enter Your Zicops Password</p>

//                 {/* Password Input */}
//                 <form onSubmit={handleEnterLab} >
//                   <input
//                   type="password"
//                   className="w-64 p-3 rounded bg-black border border-cyan-400 text-center mb-4 focus:outline-none"
//                   placeholder="••••••"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />

//                 {/* Enter Button */}
//                 <button
//                   onClick={handleEnterLab}
                  
//                   className="bg-cyan-500 text-black px-6 py-2 rounded font-bold hover:bg-cyan-400"
//                 >
//                   Enter Lab
//                 </button>
//                 </form>
//               </motion.div>

//               {/* RIGHT SECTION */}
//               <div className="w-1/3 flex flex-col justify-center">
//                 {/* Progress Bars */}
//                 <div className="space-y-6">
//                   <div className="h-6 bg-gray-800 rounded">
//                     <div className="h-6 bg-cyan-400 w-4/5"></div>
//                   </div>
//                   <div className="h-6 bg-gray-800 rounded">
//                     <div className="h-6 bg-cyan-400 w-3/5"></div>
//                   </div>
//                   <div className="h-6 bg-gray-800 rounded">
//                     <div className="h-6 bg-cyan-400 w-1/3"></div>
//                   </div>
//                   <div className="h-6 bg-gray-800 rounded">
//                     <div className="h-6 bg-cyan-400 w-1/4"></div>
//                   </div>
//                 </div>

//                 {/* Time Left */}
//                 <p className="mt-6 text-2xl font-bold text-cyan-400">
//                   50 mins left
//                 </p>
//                 <p className="text-gray-500 text-sm">out of 60 Min</p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// // }
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const CyberLabModal = () => {
// //   const [isOpen, setIsOpen] = useState(true);
// //   const [password, setPassword] = useState("");

// //   const handleEnterLab = () => {
// //     if (password === "1234") {
// //       setShowMaze(false);
// //     } else {
// //       alert("Incorrect password!");
// //     }
// //   };

// //   const handleClose = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-900">
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             // initial={{ opacity: 0 }}
//             // animate={{ opacity: 1 }}
//             // exit={{ opacity: 0 }}
//             // transition={{ duration: 0.5 }}
// //           >
// //             {/* Modal Container */}
// //             <div className="relative flex bg-white rounded-lg shadow-lg overflow-hidden w-[900px]">
// //               {/* Left Section */}
// //               <motion.div
// //                 className="w-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center"
//                 // initial={{ x: 0 }}
//                 // exit={{ x: "-100%", opacity: 0 }}
//                 // transition={{ duration: 0.8, ease: "easeInOut" }}
// //               >
// //                 <h2 className="text-xl font-bold mb-4">Lab Details</h2>
// //                 <p className="text-gray-600">Some details about the lab.</p>
// //               </motion.div>

// //               {/* Center Circle */}
// //               <motion.div
// //                 className="w-1/3 flex items-center justify-center bg-white"
// //                 initial={{ opacity: 1, rotate: 0 }}
// //                 exit={{ opacity: 0, rotate: 360, scale: 0 }}
// //                 transition={{ duration: 1, ease: "easeInOut" }}
// //               >
// //                 <div className="w-40 h-40 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-lg">
// //                   {/* Fingerprint Icon */}
// //                 <div className="text-6xl mb-6">🔒</div>
// //                 <p className="mb-4">Enter Your Zicops Password</p>

// //                 {/* Password Input */}
// //                 <input
// //                   type="password"
// //                   className="w-64 p-3 rounded bg-black border border-cyan-400 text-center mb-4 focus:outline-none"
// //                   placeholder="••••••"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />

// //                 {/* Enter Button */}
// //                 <button
// //                   onClick={handleEnterLab}
// //                   className="bg-cyan-500 text-black px-6 py-2 rounded font-bold hover:bg-cyan-400"
// //                 >
// //                   Enter Lab
// //                 </button>
// //                 </div>
// //               </motion.div>

// //               {/* Right Section */}
// //               <motion.div
// //                 className="w-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center"
// //                 initial={{ x: 0 }}
// //                 exit={{ x: "100%", opacity: 0 }}
// //                 transition={{ duration: 0.8, ease: "easeInOut" }}
// //               >
// //                 <div className="w-1/3 flex flex-col justify-center">
              
// //                 <div className="space-y-6">
// //                    <div className="h-6 bg-gray-800 rounded">
// //                      <div className="h-6 bg-cyan-400 w-4/5"></div>
// //                    </div>
// //                    <div className="h-6 bg-gray-800 rounded">
// //                      <div className="h-6 bg-cyan-400 w-3/5"></div>
// //                    </div>
// //                    <div className="h-6 bg-gray-800 rounded">
// //                      <div className="h-6 bg-cyan-400 w-1/3"></div>
// //                    </div>
// //                    <div className="h-6 bg-gray-800 rounded">
// //                      <div className="h-6 bg-cyan-400 w-1/4"></div>
// //                    </div>
// //                  </div>

                
// //                  <p className="mt-6 text-2xl font-bold text-cyan-400">
// //                    50 mins left
// //                  </p>
// //                  <p className="text-gray-500 text-sm">out of 60 Min</p>
// //                </div>
             
// //               </motion.div>

// //               {/* Close Button */}
// //               <button
// //                 onClick={handleClose}
// //                 className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl"
// //               >
// //                 ✕
// //               </button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default CyberLabModal;
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoBody } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineTimelapse } from "react-icons/md";

export default function CyberLabModal({ setShowMaze }) {
  const [password, setPassword] = useState("");

  const handleEnterLab = () => {
    if (password === "1234") {
      setShowMaze(false);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className=" flex items-center justify-center text-cyan-400 font-mono">
      <AnimatePresence>
        {setShowMaze && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-lg    z-50 p-4 border-2 border-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
              {/* Close Button */}
              <button
                className="absolute top-4 right-6 text-2xl font-bold hover:text-white"
                onClick={() => setShowMaze(false)}
              >
                ✕
              </button>

              {/* LEFT SECTION */}
              <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left">
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
                      <p className="text-xs sm:text-sm text-gray-500">
                        completed out of 84.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <GoProjectSymlink className="text-5xl sm:text-6xl" />
                    <div>
                      <p className="text-sm sm:text-lg">PROJECTS</p>
                      <p className="text-xl sm:text-3xl font-bold">2</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        completed out of 84.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <MdOutlineTimelapse className="text-5xl sm:text-6xl" />
                    <div>
                      <p className="text-sm sm:text-lg">TIME SPENT</p>
                      <p className="text-xl sm:text-3xl font-bold">5</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        completed out of 84.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER CIRCLE MODAL */}
              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-[300px] md:h-[300px] rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-center relative shadow-[0_0_20px_#00ffff] mx-auto"
                initial={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 360, scale: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="text-4xl sm:text-6xl mb-4">🔒</div>
                <p className="mb-4 text-sm sm:text-base">Enter Your Zicops Password</p>
                <form onSubmit={(e) => { e.preventDefault(); handleEnterLab(); }} className="w-full px-4">
                  <input
                    type="password"
                    className="w-[70%] p-3 rounded bg-black border border-cyan-400 text-center mb-4 focus:outline-none"
                    placeholder="••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={handleEnterLab}
                    className="w-[70%] bg-cyan-500 text-black px-6 py-2 rounded font-bold hover:bg-cyan-400"
                  >
                    Enter Lab
                  </button>
                </form>
              </motion.div>

              {/* RIGHT SECTION */}
              <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start md:mt-10">
                <div className="space-y-4 w-full max-w-xs">
                  <div className="h-4 bg-gray-800 rounded">
                    <div className="h-4 bg-cyan-400 w-4/5"></div>
                  </div>
                  <div className="h-4 bg-gray-800 rounded">
                    <div className="h-4 bg-cyan-400 w-3/5"></div>
                  </div>
                  <div className="h-4 bg-gray-800 rounded">
                    <div className="h-4 bg-cyan-400 w-1/3"></div>
                  </div>
                  <div className="h-4 bg-gray-800 rounded">
                    <div className="h-4 bg-cyan-400 w-1/4"></div>
                  </div>
                </div>
                <p className="mt-6 text-xl sm:text-2xl font-bold text-cyan-400">
                  50 mins left
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">out of 60 Min</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
