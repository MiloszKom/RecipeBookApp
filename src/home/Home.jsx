import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import RecpieCard from "./components/RecipeCard";
import ResponsiveDifficultyFilter from "./components/ResponsiveDifficultyFilter";

export default function Home() {
  const [difficulty, setDifficulty] = useState("All");

  return (
    <div
      className="flex gap-10 flex-col mt-10 mx-[30px] mb-12 
                 md:mt-[55px] md:mx-15 md:gap-15"
    >
      <div
        className="flex flex-col gap-10 md:flex-row 
                   md:justify-between md:items-center"
      >
        <SearchBar />
        <ResponsiveDifficultyFilter
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>

      <div
        className="grid grid-cols-1 gap-14 w-full
                   md:grid-cols-3"
      >
        <RecpieCard />
        <RecpieCard />
        <RecpieCard />
        <RecpieCard />
        <RecpieCard />
        <RecpieCard />
      </div>

      <button
        className="max-w-[180px] mx-auto mt-10 px-10 py-0.5 border border-black rounded-xl text-[32px] font-justme
                   hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200"
      >
        Load More
      </button>
    </div>
  );
}
