import React from "react";

import { getStyleByDifficulty } from "../utils/styleHelpers";

export default function RecipeMetadata({ level, servings, cuisine, time }) {
  return (
    <div className="flex flex-col gap-4 md:max-w-[400px]">
      {level && (
        <div className="flex gap-1 items-center">
          <img src="/RecipeBookApp/level_icon.svg" alt="Level Icon" />
          <span className="text-xl">Level</span>
          <div
            className={`px-5 border rounded-[10px] ml-auto ${getStyleByDifficulty(
              level
            )}`}
          >
            {level}
          </div>
        </div>
      )}
      {servings && (
        <div className="flex gap-1 items-center">
          <img src="/RecipeBookApp/servings_icon.svg" alt="Servings Icon" />
          <span className="text-xl">Servings</span>
          <div className="px-5 border border-custom-orange text-custom-orange rounded-[10px] ml-auto">
            {servings}
          </div>
        </div>
      )}
      {cuisine && (
        <div className="flex gap-1 items-center">
          <img src="/RecipeBookApp/cuisine_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cuisine</span>
          <div className="px-5 border border-custom-red text-custom-red rounded-[10px] ml-auto">
            {cuisine}
          </div>
        </div>
      )}
      {time > 0 && (
        <div className="flex gap-1 items-center">
          <img src="/RecipeBookApp/time_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cooking Time</span>
          <div className="px-5 border border-custom-blue text-custom-blue rounded-[10px] ml-auto whitespace-nowrap">
            {time} min
          </div>
        </div>
      )}
    </div>
  );
}
