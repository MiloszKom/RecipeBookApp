export default function RecipeCardSkeleton() {
  return (
    <div className="flex flex-col border border-gray-200 rounded-2xl w-full overflow-hidden">
      <div className="w-full h-[220px] lg:h-[260px] bg-gray-200 animate-pulse"></div>

      <div className="flex flex-col p-[17.5px]">
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        <div className="h-12 bg-gray-200 rounded mt-2.5 mb-5 lg:mt-6 animate-pulse"></div>

        <div className="flex justify-between mt-2">
          <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        <div className="w-24 h-8 bg-gray-200 rounded-xl mt-6 lg:mt-10 animate-pulse"></div>
      </div>
    </div>
  );
}
