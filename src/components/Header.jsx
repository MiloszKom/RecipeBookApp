import React from "react";

export default function Header() {
  return (
    <header
      className="grid grid-cols-[1fr_auto_1fr] gap-[30px] items-center w-full h-[160px] bg-[url('/image.png')] bg-cover bg-center text-white border border-black border-solid
     lg:h-[336px] lg:gap-[20px]"
    >
      <div className="w-full h-0.75 bg-white rounded-r-full" />
      <div className="flex items-center justify-center whitespace-nowrap lg:pl-5">
        <img
          src="/bowl.svg"
          alt="Bowl Icon"
          className="inline mr-2.5 lg:w-[80px] lg:h-[92px]"
        />
        <p className="font-justme text-5xl lg:text-8xl">Recipe Book</p>
      </div>
      <div className="w-full h-0.75 bg-white rounded-l-full" />
    </header>
  );
}
