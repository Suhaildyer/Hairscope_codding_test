import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CyberLabModal from "./CyberLabModal";

const techGrid = [
  ["React JS", "C++", "Python", "Angular", "Tailwind CSS"],
  ["Python", "Tailwind CSS", "GraphQL", "TensorFlow"],
  ["Angular", "React JS", "HTML5", "Tailwind CSS", "Python"],
];

const techLogos = {
  "React JS": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  Angular: "https://angular.io/assets/images/logos/angular/angular.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  GraphQL: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  TensorFlow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  HTML5: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  Python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  "Node.js": "https://nodejs.org/static/images/logo.svg",
  PHP: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
};

export default function MazeDashboard() {
  const [pacmanPos, setPacmanPos] = useState({ row: 0, col: 0 });
  const [showMaze, setShowMaze] = useState(false);
  const [title, setTitle] = useState("Cyber Labs");

  const movePacman = (direction) => {
    setPacmanPos((prev) => {
      let newRow = prev.row;
      let newCol = prev.col;

      if (direction === "up" && newRow > 0) newRow--;
      if (direction === "down" && newRow < techGrid.length - 1) newRow++;
      if (direction === "left" && newCol > 0) newCol--;
      if (direction === "right" && newCol < techGrid[newRow].length - 1) newCol++;

      return { row: newRow, col: newCol };
    });
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") movePacman("up");
      if (e.key === "ArrowDown") movePacman("down");
      if (e.key === "ArrowLeft") movePacman("left");
      if (e.key === "ArrowRight") movePacman("right");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row  " >
        {/* Sidebar / Topbar */}
        <div className="w-full md:w-1/4 p-4 md:p-6 border-b md:border-b-0 md:border-r border-cyan-400 flex flex-col md:items-between justify-around space-y-4 md:space-y-8 ">
          <select className="bg-black border border-cyan-400 text-cyan-400 p-2 rounded w-full md:w-auto">
            <option>Programming</option>
          </select>

          {/* Arrow Controls */}
          <div className="flex flex-col items-center space-y-2 ">
            <button
              className="p-2 md:p-3 border border-cyan-400 rounded hover:bg-cyan-300 transition-colors duration-200"
              onClick={() => movePacman("up")}
              aria-label="Move Up"
            >
              <FaArrowUp />
            </button>
            <div className="flex space-x-2">
              <button
                className="p-2 md:p-3 border border-cyan-400 rounded hover:bg-cyan-300 transition-colors duration-200"
                onClick={() => movePacman("left")}
                aria-label="Move Left"
              >
                <FaArrowLeft />
              </button>
              <button
                className="p-2 md:p-3 border border-cyan-400 rounded hover:bg-cyan-300 transition-colors duration-200"
                onClick={() => movePacman("down")}
                aria-label="Move Down"
              >
                <FaArrowDown />
              </button>
              <button
                className="p-2 md:p-3 border border-cyan-400 rounded hover:bg-cyan-300 transition-colors duration-200"
                onClick={() => movePacman("right")}
                aria-label="Move Right"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Enter Button */}
          <button
            onClick={() => setShowMaze(true)}
            className="bg-cyan-400 text-black px-4 md:px-6 py-2 md:py-3 rounded font-bold  w-full md:w-auto hover:bg-cyan-300 transition-colors duration-200 text-center"
          >
            Enter Labs
          </button>
        </div>

        {/* Maze Grid */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div
            className="grid gap-2 sm:gap-3 md:gap-4 rounded-xl bg-[url(https://www.shutterstock.com/image-illustration/black-grey-diagonal-lines-dark-260nw-1315235894.jpg)] bg-cover  p-4 relative w-full max-w-5xl border-4  border-cyan-400 "
            style={{ gridTemplateColumns: `repeat(${techGrid[0].length}, minmax(0, 1fr))` }}
          >
            {techGrid.map((row, rowIndex) =>
              row.map((tech, colIndex) => {
                const isPacman = pacmanPos.row === rowIndex && pacmanPos.col === colIndex;


                return (
                  <div
                    onClick={() => setShowMaze(true)}
                    key={`${rowIndex}-${colIndex}`}
                    className="min-w-[50px] aspect-square sm:w-20 md:w-32 flex items-center justify-center border-2  bg-black relative rounded-lg hover:bg-cyan-300 transition-colors duration-200"
                  >
                    {tech ? (
                      <img

                        src={techLogos[tech]}
                        alt={tech}
                        className="w-8 sm:w-10 md:w-12 cursor-pointer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 opacity-40"></div>
                    )}
                    {isPacman && (
                      <div className="absolute border-cyan-400 w-full h-full bg-transparent border-2 shadow-[0_0_20px_#00ffff]"></div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {showMaze && <CyberLabModal setShowMaze={setShowMaze} showMaze={showMaze} />}
    </>
  );
}

