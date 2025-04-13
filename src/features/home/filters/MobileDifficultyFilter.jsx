import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function MobileDifficultyFilter({ difficulty, setDifficulty }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative z-10 lg:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`flex justify-between bg-white items-center w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] border-2 ${
          menuOpen ? "border-custom-dark-oragne" : "border-black"
        } rounded-xl`}
      >
        <span>{difficulty}</span>
        {menuOpen ? (
          <img src="/arrow_up.svg" alt="Up Arrow" />
        ) : (
          <img src="/arrow_down.svg" alt="Down Arrow" />
        )}
      </button>

      {menuOpen && (
        <div className="absolute bg-white top-[70px] left-0 border-2 border-custom-dark-oragne rounded-lg overflow-hidden cursor-pointer">
          <div
            onClick={() => {
              setDifficulty("Easy");
              setMenuOpen(false);
            }}
            className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-green hover:text-custom-green"
          >
            Easy
          </div>
          <div
            onClick={() => {
              setDifficulty("Medium");
              setMenuOpen(false);
            }}
            className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-orange hover:text-custom-orange"
          >
            Medium
          </div>
          <div
            onClick={() => {
              setDifficulty("Hard");
              setMenuOpen(false);
            }}
            className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-red hover:text-custom-red"
          >
            Hard
          </div>
          {createPortal(
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed top-0 w-full h-full"
            />,
            document.body
          )}
        </div>
      )}
    </div>
  );
}
