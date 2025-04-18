import { Link, useParams } from "react-router-dom";

import RecipeTags from "../components/RecipeTags";
import RecipeMetadata from "../components/RecipeMetadata";
import RecipeDetailSkeleton from "../features/recipeDetail/RecipeDetailSkeleton";

import { useQuery } from "@tanstack/react-query";
import { getRecipeById } from "../api/recipesApi";
import ErrorMesasge from "../components/ErrorMessage";

export default function RecipeDetail() {
  window.scrollTo(0, 0);
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["recipe", id],
    queryFn: getRecipeById,
  });

  const recipe = data?.data;

  return (
    <div className="py-5 md:py-[30px]">
      <div
        className="grid grid-cols-[1fr_auto] items-center gap-2.5 px-5 md:px-[0px] md:pl-[50px]
                   md:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flex gap-2.5 items-center md:gap-[33px]">
          <Link
            to="/"
            className="px-5 border border-black rounded-xl font-justme text-[32px] whitespace-nowrap"
          >
            Go Back
          </Link>
          <div className="w-full h-[3px] bg-black rounded-2xl" />
        </div>
        <div className="flex items-center px-5">
          <img
            src="/bowl_dark.svg"
            alt="Bowl Icon"
            className="md:w-[80px] md:h-[80px]"
          />
          <p className="hidden md:block font-justme text-[40px]">Recipe Book</p>
        </div>
        <div className="hidden md:block w-full h-[3px] bg-black rounded-2xl" />
      </div>

      {isError ? (
        <ErrorMesasge message={error.message} />
      ) : isLoading ? (
        <RecipeDetailSkeleton />
      ) : (
        <div
          className="grid gap-10 mt-[30px] md:grid-cols-2 px-5 md:px-[50px]
                   md:items-center gap-x-[75px] gap-y-[70px] md:mt-[40px]"
        >
          <div
            className="w-full h-[266px] bg-cover bg-center border border-black
                     md:h-[460px]"
            style={{ backgroundImage: `url('${recipe.image}')` }}
          />
          <div>
            <RecipeTags tags={recipe.tags} />
            <h1 className="font-justme text-5xl mt-2.5 mb-[30px] md:text-[80px] md:mb-[50px]">
              {recipe.name}
            </h1>
            <RecipeMetadata
              level={recipe.difficulty}
              servings={recipe.servings}
              cuisine={recipe.cuisine}
              time={recipe.cookTimeMinutes}
            />
          </div>
          <div
            className="w-fit border border-black rounded-2xl px-5 py-2.5 
                    md:w-full md:px-[40px] pb-[40px] md:rounded-xl md:pt-0 md:mb-auto md:order-2"
          >
            <h2 className="font-justme text-[40px] md:text-[64px]">
              Ingredients
            </h2>
            <ul className="mt-[15px] list-disc ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
              {recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
          </div>

          <div className="mx-2.5 md:mb-auto md:order-1">
            <h2 className="font-justme text-[40px] md:text-[64px]">
              Instructions
            </h2>
            <ol className="mt-[15px] list-decimal ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
              {recipe.instructions.map((step, index) => {
                return <li key={index}>{step}</li>;
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
