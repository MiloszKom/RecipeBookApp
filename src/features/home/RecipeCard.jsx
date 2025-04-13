import React from "react";
import { Link } from "react-router-dom";

import RecipeTags from "../../components/RecipeTags";
import RecipeMetadata from "../../components/RecipeMetadata";

export default function RecpieCard({ recipe }) {
  return (
    <Link
      to={`recipe/${recipe.id}`}
      className="flex flex-col border border-black rounded-2xl w-full overflow-hidden cursor-pointer"
    >
      <div
        className={`w-fill h-[220px] bg-cover bg-center border-b border-black
                   lg:h-[260px]`}
        style={{ backgroundImage: `url('${recipe.image}')` }}
      />
      <div className="flex flex-col p-[17.5px]">
        <RecipeTags tags={recipe.tags} />
        <h1 className="text-[40px] font-justme whitespace-nowrap overflow-hidden text-ellipsis mt-2.5 mb-5 lg:mt-6">
          {recipe.name}
        </h1>
        <RecipeMetadata
          cuisine={recipe.cuisine}
          time={recipe.cookTimeMinutes}
        />
        <div
          className="w-fit px-5 py-1 border border-custom-green bg-custom-light-green text-custom-green rounded-xl mt-6 
                     lg:mt-10"
        >
          {recipe.difficulty}
        </div>
      </div>
    </Link>
  );
}
