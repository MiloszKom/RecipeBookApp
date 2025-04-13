import React, { useState } from "react";

import Header from "../features/home/Header";
import SearchBar from "../features/home/SearchBar";
import RecpieCard from "../features/home/RecipeCard";
import ResponsiveDifficultyFilter from "../features/home/ResponsiveDifficultyFilter";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipesApi";

export default function Home() {
  const [difficulty, setDifficulty] = useState("All");

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.data.total;
      const fetched = allPages.length * 6;
      return fetched < total ? fetched : undefined;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const recipes = data.pages.flatMap((page) => page.data.recipes) || [];

  return (
    <div>
      <Header />
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
          {recipes.map((recipe) => (
            <RecpieCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="max-w-[180px] mx-auto mt-10 px-10 py-0.5 border border-black rounded-xl text-[32px] font-justme
                   hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
