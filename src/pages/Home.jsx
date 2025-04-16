import { useState, useRef, useEffect } from "react";

import Header from "../features/home/Header";
import SearchBar from "../features/home/SearchBar";
import RecipeCard from "../features/home/RecipeCard";
import ResponsiveDifficultyFilter from "../features/home/ResponsiveDifficultyFilter";

import RecipeCardSkeleton from "../features/home/RecipeCardSkeleton";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipesApi";
import ErrorMesasge from "../components/ErrorMessage";
import LoadMoreButton from "../features/home/LoadMoreButton";

import useScrollPosition from "../hooks/useScrollPosition";

import { useSelector, useDispatch } from "react-redux";
import { setFilter, setTerm } from "../store";

export default function Home() {
  const chosenFilter = useSelector((store) => store.chosenFilter);
  const chosenTerm = useSelector((store) => store.chosenTerm);
  const dispatch = useDispatch();

  const [difficulty, setDifficulty] = useState(chosenFilter || "All");
  const [searchTerm, setSearchTerm] = useState(chosenTerm || "");

  useEffect(() => {
    dispatch(setFilter(difficulty));
  }, [difficulty, dispatch]);

  useEffect(() => {
    dispatch(setTerm(searchTerm));
  }, [searchTerm, dispatch]);

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["recipes", { searchTerm }],
    queryFn: getRecipes,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.data.total;
      const fetched = allPages.length * 6;
      return fetched < total ? fetched : undefined;
    },
  });

  const recipes = data?.pages.flatMap((page) => page.data.recipes) || [];

  const filteredRecipes =
    difficulty === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.difficulty === difficulty);

  const scrollableDiv = useRef(null);
  useScrollPosition(scrollableDiv);

  return (
    <div ref={scrollableDiv} className="overflow-x-auto max-h-screen">
      <Header />
      <div
        className="flex justify-self-center w-full gap-10 flex-col mt-10 px-[30px] mb-12 max-w-[500px]
                 sm:max-w-[850px]
                 lg:mt-[55px] lg:gap-15 lg:max-w-[1440px]"
      >
        <div
          className="flex flex-col gap-10 lg:flex-row 
                   lg:justify-between lg:items-center"
        >
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          ) : filteredRecipes.length > 0 ? (
            <>
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
              {isFetchingNextPage &&
                Array.from({ length: 6 }).map((_, index) => (
                  <RecipeCardSkeleton key={`pagination-skeleton-${index}`} />
                ))}
            </>
          ) : (
            <p className="text-center text-xl font-semibold text-gray-600 mt-10 col-span-full">
              No recipes found.
            </p>
          )}
        </div>

        {hasNextPage && (
          <LoadMoreButton
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}
