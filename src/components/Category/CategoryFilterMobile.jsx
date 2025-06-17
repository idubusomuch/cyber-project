import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import useFetchCategories from '@/hooks/useFetchCategories';
import { Filter } from '@components/Category/Filter';

export default function CategoryFilterMobile() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();
  const selected = category ?? 'all';

  const { categories } = useFetchCategories();

  return (
    <>
      <div className="flex gap-4 px-4 pt-2 pb-8 lg:hidden">
        <button
          className="flex items-center gap-2 border rounded-lg px-4 py-3"
          onClick={() => setOpen(true)}
        >
          <span className="text-sm mr-8">Filters</span>
          <Filter />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl font-light"
            >
              &times;
            </button>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">Category</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    navigate(`/products/${cat.slug}`);
                    setOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded border text-sm transition ${
                    selected === cat.slug
                      ? 'bg-black text-white font-bold border-black'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
