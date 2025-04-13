import React from "react";

export default function DesktopDifficultyFilter({ difficulty, setDifficulty }) {
  return (
    <>
      <div className="hidden lg:flex gap-5">
        <button
          onClick={() => setDifficulty("All")}
          className={`w-[110px] py-0.5 border border-black rounded-lg text-center text-xl
                        ${
                          difficulty === "All" &&
                          "border-custom-blue text-custom-blue bg-custom-light-blue"
                        }`}
        >
          All
        </button>
        <button
          onClick={() => setDifficulty("Easy")}
          className={`w-[110px] py-0.5 border border-black rounded-lg text-center text-xl
                        ${
                          difficulty === "Easy" &&
                          "border-custom-green text-custom-green bg-custom-light-green"
                        }`}
        >
          Easy
        </button>
        <button
          onClick={() => setDifficulty("Medium")}
          className={`w-[110px] py-0.5 border border-black rounded-lg text-center text-xl
                        ${
                          difficulty === "Medium" &&
                          "border-custom-orange text-custom-orange bg-custom-light-orange"
                        }`}
        >
          Medium
        </button>
        <button
          onClick={() => setDifficulty("Hard")}
          className={`w-[110px] py-0.5 border border-black rounded-lg text-center text-xl
                        ${
                          difficulty === "Hard" &&
                          "border-custom-red text-custom-red bg-custom-light-red"
                        }`}
        >
          Hard
        </button>
      </div>
    </>
  );
}
