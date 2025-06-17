import { useCallback, useEffect, useRef, useState } from 'react';

export default function useInfiniteFetch({ query, limit = 8, key }) {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [moreData, setMoreData] = useState(true);
  const [loading, setLoading] = useState(false);

  const hasFetched = useRef(false);

  useEffect(() => {
    setData([]);
    setSkip(0);
    setMoreData(true);
    hasFetched.current = false;
  }, [key]);

  useEffect(() => {
    if (!hasFetched.current) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await query(0, limit);
          setData(res.products);
          setMoreData(res.total > limit);
          setSkip(limit);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
          hasFetched.current = true;
        }
      };
      fetchData();
    }
  }, [key, query, limit]);

  const loadData = useCallback(async () => {
    if (loading || !moreData) return;

    setLoading(true);
    try {
      const res = await query(skip, limit);
      setData((prev) => [...prev, ...res.products]);
      setMoreData(res.total > skip + limit);
      setSkip((prev) => prev + limit);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loading, moreData, query, skip, limit]);

  return { data, loading, loadData, moreData, skip };
}
