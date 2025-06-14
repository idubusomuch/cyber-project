import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default function useFetch({ query }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // 데이터 초기화 (재검색 시 이전 데이터를 지우기 위함)
    setData(null);

    const fetchAPI = async () => {
      try {
        const response = await query();
        setData(response);
      } catch (err) {
        console.error('err', err);
        navigate('/error');
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [query]);

  return { data, loading };
}
