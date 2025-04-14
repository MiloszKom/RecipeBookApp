export default function RecipeCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-[200px] rounded-lg"></div>
      <div className="mt-3">
        <div className="bg-gray-200 h-5 w-3/4 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/2 mt-2 rounded"></div>
      </div>
    </div>
  );
}
