import { useCallback, useEffect, useRef, useState } from 'react';

export default function useInfiniteFetch({ query, limit = 8 }) {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [moreData, setMoreData] = useState(true);
  const [loading, setLoading] = useState(false);

  // 초기 마운트 시 중복 방지
  const hasfetched = useRef(false);

  const loadData = useCallback(async () => {
    if (loading || !moreData) return;

    setLoading(true);
    try {
      const res = await query(skip, limit);
      setData((prev) => [...prev, ...res.products]);
      setMoreData(res.total > skip + limit);
      setSkip((prev) => prev + limit);
      console.log(skip);
    } catch (err) {
      console.error('error', err);
    } finally {
      setLoading(false);
    }
  }, [loading, moreData, query, skip, limit]);

  useEffect(() => {
    if (!hasfetched.current) {
      loadData();
      hasfetched.current = true;
    }
  }, [loadData]);

  return { data, loading, loadData, moreData, skip };
}
