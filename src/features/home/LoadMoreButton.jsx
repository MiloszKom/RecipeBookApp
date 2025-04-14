import React from "react";

export default function LoadMoreButton({
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
}) {
  return (
    <button
      onClick={() => fetchNextPage()}
      disabled={isFetchingNextPage}
      className={`max-w-[180px] mx-auto mt-10 px-10 py-0.5 border border-black rounded-xl text-[32px] font-justme
              hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200
              ${isLoading || isFetchingNextPage ? "disabled" : ""}`}
    >
      {isLoading || isFetchingNextPage ? "Loading..." : "Load More"}
    </button>
  );
}
