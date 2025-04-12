import React from "react";

export default function RecpieCard() {
  return (
    <div className="flex flex-col border border-black rounded-2xl w-full overflow-hidden cursor-pointer">
      <div
        className="w-fill h-[220px] bg-[url('/placeholder_img.png')] bg-cover bg-center border-b border-black
                   md:h-[260px]"
      />
      <div className="flex flex-col p-[17.5px]">
        <div
          className="flex gap-2.5 ml-[2.5px] mb-2.5 
                     md:mb-6"
        >
          <span className="px-5 font-medium border-[2px] border-custom-orange rounded-xl text-custom-orange">
            Italian
          </span>
          <span className="px-5 font-medium border-[2px] border-custom-orange rounded-xl text-custom-orange">
            Pizza
          </span>
        </div>
        <h2 className="text-[40px] font-justme whitespace-nowrap overflow-hidden text-ellipsis">
          Classic Margherita Pizza
        </h2>
        <div className="flex gap-1 items-center mt-5">
          <img src="/cuisine_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cuisine</span>
          <div className="px-5 border border-custom-red text-custom-red rounded-[10px] ml-auto">
            Italian
          </div>
        </div>

        <div
          className="flex gap-1 items-center mt-5
                     md:mt-[25px]"
        >
          <img src="/time_icon.svg" alt="Cuisine Icon" />
          <span className="text-xl">Cooking Time</span>
          <div className="px-5 border border-custom-blue text-custom-blue rounded-[10px] ml-auto">
            30 min
          </div>
        </div>
        <div
          className="w-fit px-5 py-1 border border-custom-green bg-custom-light-green text-custom-green rounded-xl mt-6 
                     md:mt-10"
        >
          Easy
        </div>
      </div>
    </div>
  );
}
