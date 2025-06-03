import { fetchProductsInfiniteScroll } from '@api/fetchURL';
// import useFetch from '@hooks/useFetch';
import ProductCards from '@components/ProductCard/ProductCards';
import { ProductCardSkeleton } from '@components/SkeletonUI';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

function ProductsPage() {
  const {
    data: products,
    loading,
    loadData,
    moreData,
    skip,
  } = useInfiniteFetch({
    query: fetchProductsInfiniteScroll,
  });

  const loaderRef = useIntersectionObserver({
    loading,
    hasMore: moreData,
    onLoadMore: loadData,
  });

  return (
    <div className="mx-auto max-w-[1200px] px-4">
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
      {/* 첫 로딩 이후부터 계산 */}
      {skip > 0 && !loading && moreData && (
        <div ref={loaderRef} className="h-10" />
      )}
    </div>
  );
}

export default ProductsPage;
