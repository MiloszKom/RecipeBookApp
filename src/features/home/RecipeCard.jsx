import React from "react";
import RecipeTags from "../../components/RecipeTags";
import RecipeMetadata from "../../components/RecipeMetadata";

export default function RecpieCard() {
  return (
    <div className="flex flex-col border border-black rounded-2xl w-full overflow-hidden cursor-pointer">
      <div
        className="w-fill h-[220px] bg-[url('/placeholder_img.png')] bg-cover bg-center border-b border-black
                   lg:h-[260px]"
      />
      <div className="flex flex-col p-[17.5px]">
        <RecipeTags tags={["Italian", "Pizza"]} />
        <h1 className="text-[40px] font-justme whitespace-nowrap overflow-hidden text-ellipsis mt-2.5 mb-5 lg:mt-6">
          Classic Margherita Pizza
        </h1>
        <RecipeMetadata cuisine={"Italian"} time={"30 min"} />
        <div
          className="w-fit px-5 py-1 border border-custom-green bg-custom-light-green text-custom-green rounded-xl mt-6 
                     lg:mt-10"
        >
          Easy
        </div>
      </div>
    </div>
  );
}
