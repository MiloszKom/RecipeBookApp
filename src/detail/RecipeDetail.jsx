import React from "react";
import RecipeTags from "../common/RecipeTags";
import RecipeMetadata from "../common/RecipeMetadata";

export default function RecipeDetail() {
  return (
    <div className="p-5 md:px-[50px] md:py-[30px]">
      <div
        className="grid grid-cols-[1fr_auto] items-center gap-2.5
                   md:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flex gap-2.5 items-center md:gap-[33px]">
          <button className="px-5 border border-black rounded-xl font-justme text-[32px] whitespace-nowrap">
            Go Back
          </button>
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

      <div
        className="grid gap-10 mt-[30px] md:grid-cols-2 
                   md:items-center gap-x-[75px] gap-y-[70px] md:mt-[40px]"
      >
        <div
          className="w-full h-[266px] bg-[url('/placeholder_img.png')] bg-cover bg-center border border-black
                     md:h-[460px]"
        />
        <div>
          <RecipeTags tags={["Italian", "Pizza"]} />
          <h1 className="font-justme text-5xl mt-2.5 mb-[30px] md:text-[80px] md:mb-[50px]">
            Classic Margherita Pizza
          </h1>
          <RecipeMetadata
            level={"Medium"}
            servings={4}
            cuisine={"Italian"}
            time={"30 min"}
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
            <li>Pizza dough</li>
            <li>Tomato sauce</li>
            <li>Fresh mozzarella cheese</li>
            <li>Olive oil</li>
            <li>Fresh basil leaves</li>
            <li>Salt and pepper to taste</li>
          </ul>
        </div>

        <div className="mx-2.5 md:order-1">
          <h2 className="font-justme text-[40px] md:text-[64px]">
            Instructions
          </h2>
          <ol className="mt-[15px] list-decimal ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
            <li>Preheat the oven to 475°F (245°C).</li>
            <li>Roll out the pizza dough and spread tomato sauce evenly</li>
            <li>Top with slices of fresh mozzarella and fresh basil leaves.</li>
            <li>Drizzle with olive oil and season with salt and pepper.</li>
            <li>
              Bake in the preheated oven for 12-15 minutes or until the crust is
              golden brown.
            </li>
            <li>Slice and serve hot.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
