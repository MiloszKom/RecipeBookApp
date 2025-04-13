import React from "react";

export default function RecipeTags({ tags }) {
  // mb-2.5 md:mb-6
  return (
    <div className="flex gap-2.5">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-5 font-medium border-[2px] border-custom-orange rounded-xl text-custom-orange"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
