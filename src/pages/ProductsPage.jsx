import { fetchAllProducts } from '@api/fetchURL';
import useFetch from '@hooks/useFetch';

import ProductCards from '@components/ProductCard/ProductCards';

function ProductsPage() {
  const { data, loading } = useFetch({ query: fetchAllProducts });
  const products = data?.products || [];

  return (
    <div className="mx-auto max-w-[1200px]">
      <p> Products Result : </p>
      <div className="list-container">
        {loading
          ? '준비중'
          : products.map((el) => <ProductCards key={el.id} product={el} />)}
      </div>
    </div>
  );
}

export default ProductsPage;
