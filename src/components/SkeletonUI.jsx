import LikeButton from './Productcard/LikeButton';

export function ProductCardSkeleton() {
  return (
    <div className="flex justify-between items-center flex-col py-6 px-4 border rounded-lg size-full space-y-4">
      <LikeButton />
      <div className="w-full aspect-square skeleton-item"></div>
      <div className="w-3/4 h-6 skeleton-item"></div>
      <div className="w-1/2 h-6 skeleton-item"></div>
      <div className="w-full h-12 skeleton-item"></div>
    </div>
  );
}
