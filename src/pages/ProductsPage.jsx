import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import {
  fetchCategoryProducts,
  fetchProductsInfiniteScroll,
} from '@api/fetchURL';
import CategoryFilterMobile from '@components/Category/CategoryFilterMobile';
import CategoryFilterPC from '@components/Category/CategoryFilterPC';
import ProductCards from '@components/ProductCard/ProductCards';
import { ProductCardSkeleton } from '@components/SkeletonUI';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

function ProductsPage() {
  const { category } = useParams();
  const selectedCategory = category ?? 'all';

  const query = useCallback(
    (skip, limit) => {
      if (!category || category === 'all') {
        return fetchProductsInfiniteScroll(skip, limit);
      } else {
        return fetchCategoryProducts(category, skip, limit);
      }
    },
    [category],
  );

  const {
    data: products,
    loading,
    loadData,
    moreData,
    skip,
  } = useInfiniteFetch({
    query,
    key: selectedCategory,
  });

  // lazy loading
  const loaderRef = useIntersectionObserver({
    loading,
    hasMore: moreData,
    onLoadMore: loadData,
  });

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-72">
      <CategoryFilterMobile selected={selectedCategory} />
      <div className="flex gap-8">
        <CategoryFilterPC selected={selectedCategory} />
        <div className="flex-1">
          <p className="px-4 text-[1.3em]">
            Products Result : <b>{products.length}</b>
          </p>
          <div className="list-container grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((el) => (
              <ProductCards key={el.id} product={el} />
            ))}
            {loading &&
              Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
          </div>
          {skip > 0 && !loading && moreData && (
            <div ref={loaderRef} className="h-10" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
