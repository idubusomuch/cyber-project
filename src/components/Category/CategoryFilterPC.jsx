import { Link, useNavigate } from 'react-router-dom';

import useFetchCategories from '@/hooks/useFetchCategories';

export default function CategoryFilterPC({ selected }) {
  const { categories, loading, error } = useFetchCategories();
  const navigate = useNavigate();

  const handleSelect = (slug) => {
    navigate(`/products/${slug}`);
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">카테고리 로딩 실패</p>;

  return (
    <aside className="hidden lg:flex lg:w-[256px] flex-col gap-2 p-4">
      <h2 className="font-semibold text-lg mb-2">
        <Link to="/products">카테고리</Link>
      </h2>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleSelect(cat.slug)}
          className={`text-left px-3 py-2 rounded transition text-sm ${
            selected === cat.slug
              ? 'bg-black text-white font-bold'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </aside>
  );
}
