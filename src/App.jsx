// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import MyMaze from "./components/MyMaze";
// import { div } from "framer-motion/client";
// import CyberLabModal from "./components/MyMaze";

// const maze = [
//   [2, 0, 2, 0, 2],
//   [0, 1, 0, 1, 0],
//   [2, 0, 2, 0, 2],
//   [0, 1, 0, 1, 0],
//   [2, 0, 2, 0, 2]
// ];

// const techLogos = {
//   2: ["React", "C++", "Angular", "Tailwind", "GraphQL", "Node", "TensorFlow", "HTML5", "Python", "PHP"]
// };

// export default function App() {
//   const [showMaze, setShowMaze] = useState(false);
//   const [pos, setPos] = useState({ row: 0, col: 0 });
//   const [logoIndex, setLogoIndex] = useState(0);

//   const move = (dir) => {
//     let { row, col } = pos;
//     if (dir === "up" && row > 0 && maze[row - 1][col] !== 1) row--;
//     if (dir === "down" && row < maze.length - 1 && maze[row + 1][col] !== 1) row++;
//     if (dir === "left" && col > 0 && maze[row][col - 1] !== 1) col--;
//     if (dir === "right" && col < maze[0].length - 1 && maze[row][col + 1] !== 1) col++;
//     setPos({ row, col });
//   };

//   const handleKey = (e) => {
//     if (e.key === "ArrowUp") move("up");
//     if (e.key === "ArrowDown") move("down");
//     if (e.key === "ArrowLeft") move("left");
//     if (e.key === "ArrowRight") move("right");
//     if (e.key === "Enter") {
//       if (maze[pos.row][pos.col] === 2) {
//         // alert(`Entering ${techLogos[2][logoIndex % techLogos[2].length]} Lab`);
//         setShowMaze(true);
//         setLogoIndex((i) => i + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   });

//   return (
//     <>
//     <div className="flex bg-black text-white min-h-screen p-4 gap-4 absolute top-0 left-0 w-full">
//       {/* Sidebar */}
//       <div className="w-1/4 space-y-4">
//         <div className="border border-cyan-400 p-2 flex justify-between">
//           <span>Programming</span>
//           <ChevronDown />
//         </div>
//         <div className="text-center">
//           <p>Use Arrows</p>
//           <div className="grid grid-cols-3 gap-1 w-16 mx-auto">
//             <div></div>
//             <div className="border">↑</div>
//             <div></div>
//             <div className="border">←</div>
//             <div className="border">↓</div>
//             <div className="border">→</div>
//           </div>
//         </div>
//         <button className="bg-gray-700 px-4 py-2 w-full">Enter Labs</button>
//       </div>

//       {/* Maze */}
//       <div className="flex-1 grid grid-cols-5 gap-2 border border-cyan-400 p-2">
//         {maze.map((row, rIdx) =>
//           row.map((cell, cIdx) => (
//             <div
//               key={`${rIdx}-${cIdx}`}
//               className={`h-20 flex items-center justify-center border ${
//                 cell === 1 ? "bg-gray-800" : "bg-black"
//               }`}
//             >
//               {cell === 2 ? (
//                 <img 
//                   onClick={()=>{
//                     setShowMaze(true);
                    
                    
//                   }}
//                   src={`https://via.placeholder.com/40?text=L`}
//                   alt="Logo"
//                   className="w-10"
//                 />
//               ) : null}
//               {pos.row === rIdx && pos.col === cIdx && (
//                 <motion.div
//                   className="absolute w-50 h-20 bg-transparent border-4 border-dotted  border-cyan-400 "
//                   layout
//                 />
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//     {showMaze && <CyberLabModal setShowMaze={setShowMaze}/>  }
//     </>
//   );
// }



import React from 'react'
import MazeDashboard from './components/MazeDashboard'

const App = () => {
  return (
    <div>
      <div>
        <MazeDashboard/>
      </div>
    </div>
  )
}

export default App