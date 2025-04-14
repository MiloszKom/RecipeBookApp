import { useState } from "react";

import Header from "../features/home/Header";
import SearchBar from "../features/home/SearchBar";
import RecipeCard from "../features/home/RecipeCard";
import ResponsiveDifficultyFilter from "../features/home/ResponsiveDifficultyFilter";

import RecipeCardSkeleton from "../components/RecipeCardSkeleton";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipesApi";
import ErrorMesasge from "../components/ErrorMessage";

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

  const recipes = data?.pages.flatMap((page) => page.data.recipes) || [];

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
          {isError ? (
            <ErrorMesasge message={error.message} />
          ) : isLoading && !data ? (
            Array.from({ length: 6 }).map((_, index) => (
              <RecipeCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            <>
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
              {isFetchingNextPage &&
                Array.from({ length: 6 }).map((_, index) => (
                  <RecipeCardSkeleton key={`pagination-skeleton-${index}`} />
                ))}
            </>
          )}
        </div>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={`max-w-[180px] mx-auto mt-10 px-10 py-0.5 border border-black rounded-xl text-[32px] font-justme
              hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200
              ${isLoading || isFetchingNextPage ? "disabled" : ""}`}
          >
            {isLoading || isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
