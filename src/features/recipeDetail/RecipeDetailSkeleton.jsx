import React from "react";

export default function RecipeDetailSkeleton() {
  return (
    <div className="animate-pulse px-5 md:px-[50px]">
      <div className="grid gap-10 mt-[30px] md:grid-cols-2 md:items-center gap-x-[75px] gap-y-[70px] md:mt-[40px]">
        <div className="w-full h-[266px] bg-gray-200 border border-gray-300 md:h-[460px]"></div>
        <div>
          <div className="flex gap-2 mb-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-6 md:h-20 md:mb-[50px]"></div>
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>

        <div className="w-full px-5 py-2.5 md:w-full md:px-[40px] pb-[40px] md:rounded-xl md:pt-0 md:mb-auto md:order-2">
          <div className="h-12 bg-gray-200 rounded w-1/2 mb-4 md:h-16"></div>
          <ul className="space-y-3 ml-7.5">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="h-5 bg-gray-200 rounded w-full"></li>
            ))}
          </ul>
        </div>
        <div className="mx-2.5 md:mb-auto md:order-1">
          <div className="h-12 bg-gray-200 rounded w-1/2 mb-4 md:h-16"></div>
          <ol className="space-y-4 ml-7.5">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="h-5 bg-gray-200 rounded w-full"></li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
