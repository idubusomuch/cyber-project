export function ProductCardSkeleton() {
  return (
    <div className="size-full space-y-2">
      <div className="aspect-[2/3] skeleton-item"></div>
      <div className="w-1/2 h-4 skeleton-item"></div>
      <div className="w-1/2 h-4 skeleton-item"></div>
    </div>
  );
}
