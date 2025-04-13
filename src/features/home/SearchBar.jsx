import React from "react";

export default function SearchBar() {
  return (
    <div
      className="flex gap-2 items-center w-full border border-black rounded-lg px-5 py-2 cursor-pointer 
                lg:max-w-[320px]
                hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200"
    >
      <img src="/loupe.svg" alt="Search Icon" />
      <input type="text" class="w-full outline-none" />
    </div>
  );
}
