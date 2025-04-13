import React from "react";

export default function RecipeTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-5 font-medium border-[2px] border-custom-orange rounded-xl text-custom-orange whitespace-nowrap"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
