import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import RecpieCard from "./components/RecipeCard";
import ResponsiveDifficultyFilter from "./components/ResponsiveDifficultyFilter";

export default function Home() {
  const [difficulty, setDifficulty] = useState("All");

  return (
    <div
      className="flex justify-self-center w-full gap-10 flex-col mt-10 px-[30px] mb-12 max-w-[500px]
                 sm:max-w-[850px]
                 lg:mt-[55px] lg:mx-15 lg:gap-15 lg:max-w-[1440px]"
    >
      <div
        className="flex flex-col gap-10 lg:flex-row 
                   lg:justify-between lg:items-center"
      >
        <SearchBar />
        <ResponsiveDifficultyFilter
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>

      <div
        className="grid grid-cols-1 gap-14 w-full
                   sm:grid-cols-2 sm:gap-x-7
                   lg:grid-cols-3"
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
