import React from "react";

export default function Header() {
  return (
    <header
      className="grid grid-cols-[1fr_auto_1fr] gap-[30px] items-center w-full h-[160px] bg-[url('/image.png')] bg-cover bg-center text-white border border-black border-solid
     md:h-[336px] md:gap-[20px]"
    >
      <div className="w-full h-0.75 bg-white rounded-r-full" />
      <div className="flex items-center justify-center whitespace-nowrap md:pl-5">
        <img
          src="/bowl.svg"
          alt="Bowl Icon"
          className="inline mr-2.5 md:w-[80px] md:h-[92px]"
        />
        <p className="font-justme text-5xl md:text-8xl">Recipe Book</p>
      </div>
      <div className="w-full h-0.75 bg-white rounded-l-full" />
    </header>
  );
}
