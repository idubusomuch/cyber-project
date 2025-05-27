import useFetch from '@hooks/useFetch';

function ProductsPage() {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');
  return (
    <div>
      <p> Products Result : </p>
      <div>~</div>
    </div>
  );
}

export default ProductsPage;
