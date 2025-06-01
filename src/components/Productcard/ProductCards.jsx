import { useState } from 'react';

import LikeButton from './LikeButton';
import Button from '../common/Button';

function LazyImage({ src, alt }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative w-full aspect-square object-cover py-6 rounded-lg">
      {!loading && <div className="absolute inset-0 skeleton-item" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function ProductCards({ product }) {
  return (
    <div className="flex justify-between items-center flex-col w-full text-center gap-4 py-6 px-4 bg-[#f6f6f6] rounded-lg">
      <LikeButton />
      <LazyImage src={product.images} alt={product.title} />
      <p>{product.title}</p>
      <p className="text-[1.3em] font-bold">${product.price}</p>
      <Button btnColor="black" size="sm">
        Buy Now
      </Button>
    </div>
  );
}
