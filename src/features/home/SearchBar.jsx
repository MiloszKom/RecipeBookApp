import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      className="flex gap-2 items-center w-full border border-black rounded-lg px-5 py-2 cursor-pointer 
            lg:max-w-[320px]
            hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)]
            focus-within:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200"
    >
      <img src="/RecipeBookApp/loupe.svg" alt="Search Icon" />
      <input
        type="text"
        className="w-full outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
