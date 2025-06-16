import ArrowDown from '@icons/24px/ArrowDown.svg?react';

function Button({
  children,
  type = 'button',
  btnColor = 'transparent',
  size = 'md',
  showArrow = false,
}) {
  const sizeClasses = {
    sm: 'text-sm rounded-lg w-full py-4 sm:px-14',
    md: 'text-base rounded-md py-3 px-16',
  };

  const colorClasses = {
    transparent: 'bg-transparent text-white border-white',
    black: 'bg-black text-white border-black',
    white: 'bg-transparent text-black border-black',
  };

  const arrowColorClass = btnColor === 'white' ? 'text-black' : 'text-white';

  return (
    <button
      className={`btn-style cursor-pointer rounded sm:max-w-fit ${colorClasses[btnColor]} ${sizeClasses[size]} flex-center gap-2`}
      type={type}
    >
      {children}
      {showArrow && <ArrowDown className={`${arrowColorClass}`} />}
    </button>
  );
}

export default Button;
