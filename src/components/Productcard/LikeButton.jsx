import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <button
      onClick={toggleLike}
      className={`self-end transition-transform duration-300 ${
        liked ? 'scale-110' : 'scale-100'
      }`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill={liked ? 'red' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ease-in-out ${
          animate ? 'animate-pop' : ''
        }`}
      >
        <path
          d="M5.93415 18.5443L15.3152 27.3568C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3568L26.0657 18.5443C28.6739 16.0941 28.9907 12.0621 26.797 9.23477L26.3845 8.70313C23.7603 5.32078 18.4928 5.88803 16.6488 9.75154C16.3883 10.2973 15.6115 10.2973 15.351 9.75154C13.5071 5.88803 8.23955 5.32078 5.61531 8.70313L5.20284 9.23477C3.00918 12.0621 3.32592 16.0941 5.93415 18.5443Z"
          stroke={liked ? 'none' : '#919191'}
          strokeOpacity={liked ? '0' : '0.77'}
          strokeWidth="1.4"
        />
      </svg>
    </button>
  );
}
