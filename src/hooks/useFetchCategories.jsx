import { useEffect, useState } from 'react';

import { fetchAllCategories } from '@/api/fetchURL';

export default function useFetchCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchAllCategories();
        setCategories(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { categories, loading, error };
}
