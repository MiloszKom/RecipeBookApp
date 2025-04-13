import React from "react";

export default function RecipeMetadata({ level, servings, cuisine, time }) {
  return (
    <div className="flex flex-col gap-4 max-w-[400px]">
      {level && (
        <div className="flex gap-1 items-center">
          <img src="/level_icon.svg" alt="Level Icon" />
          <span className="text-xl">Level</span>
          <div className="px-5 bg-custom-light-orange border border-custom-orange text-custom-orange rounded-[10px] ml-auto">
            {level}
          </div>
        </div>
      )}
      {servings && (
        <div className="flex gap-1 items-center">
          <img src="/servings_icon.svg" alt="Servings Icon" />
          <span className="text-xl">Servings</span>
          <div className="px-5 border border-custom-orange text-custom-orange rounded-[10px] ml-auto">
            {servings}
          </div>
        </div>
      )}
      {cuisine && (
        <div className="flex gap-1 items-center">
          <img src="/cuisine_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cuisine</span>
          <div className="px-5 border border-custom-red text-custom-red rounded-[10px] ml-auto">
            Italian
          </div>
        </div>
      )}
      {time && (
        <div className="flex gap-1 items-center">
          <img src="/time_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cooking Time</span>
          <div className="px-5 border border-custom-blue text-custom-blue rounded-[10px] ml-auto whitespace-nowrap">
            30 min
          </div>
        </div>
      )}
    </div>
  );
}
