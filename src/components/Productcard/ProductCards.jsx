import LikeButton from './LikeButton';
import Button from '../common/Button';

export default function ProductCards({ product }) {
  return (
    <div className="flex justify-between items-center flex-col w-full text-center gap-2 py-6 px-4 bg-[#f6f6f6] rounded-lg">
      <LikeButton />
      <img src={product.images} alt={`${product.title}`} className="py-2" />
      <p>{product.title}</p>
      <p className="text-[1.3em] font-bold">${product.price}</p>
      <Button btnColor="black" size="sm">
        Buy Now
      </Button>
    </div>
  );
}
