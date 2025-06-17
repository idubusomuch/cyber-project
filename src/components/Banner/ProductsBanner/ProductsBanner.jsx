import { useEffect, useState } from 'react';

import {
  fetchCategoryProductsBanner,
  fetchProductsInfiniteScroll,
} from '@api/fetchURL';
import ProductCards from '@components/ProductCard/ProductCards';
import { ProductCardSkeleton } from '@components/SkeletonUI';

export default function ProductsBanner() {
  const categories = [
    'All',
    'Groceries',
    'Beauty',
    'Home-decoration',
    'Sports-accessories',
  ];
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res;
      try {
        if (category === 'All') {
          res = await fetchProductsInfiniteScroll(0, 8);
        } else {
          res = await fetchCategoryProductsBanner(category, 8);
        }
        setProducts(res.products);
      } catch (err) {
        console.error('상품 로드 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-6">
      <div className="px-4 text-[1.3em] cursor-pointer text-[#8b8b8b] flex gap-6 mb-6 overflow-x-auto whitespace-nowrap no-scrollbar">
        {categories.map((el) => (
          <button
            key={el}
            onClick={() => setCategory(el)}
            className={`hover:text-black transition ${
              category === el ? 'text-black font-bold underline' : ''
            }`}
          >
            {el}
          </button>
        ))}
      </div>

      <div className="list-container grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((el) => (
          <ProductCards key={el.id} product={el} />
        ))}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}
