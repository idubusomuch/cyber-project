import { useEffect, useState, useRef } from 'react';

export default function useLazyImageObserver() {
  // 화면 표시 상태
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      // 요소의 10% 이상 보일 때
      { threshold: 0.1 },
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return [elementRef, isInView];
}
