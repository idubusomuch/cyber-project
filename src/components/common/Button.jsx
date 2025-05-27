import ArrowDown from '@icons/24px/ArrowDown.svg?react';

function Button({
  children,
  type = 'button',
  btnColor = 'transparent',
  size = 'md',
  showArrow = false,
}) {
  const sizeClasses = {
    sm: 'text-sm rounded-lg px-14 py-4',
    md: 'text-base rounded-md px-16 py-3',
  };

  const colorClasses = {
    transparent: 'bg-transparent text-white border-white',
    black: 'bg-black text-white border-black',
    white: 'bg-transparent text-black border-black',
  };

  const arrowColorClass = btnColor === 'white' ? 'text-black' : 'text-white';

  return (
    <button
      className={`btn-style rounded ${colorClasses[btnColor]} ${sizeClasses[size]} flex items-center gap-2`}
      type={type}
    >
      {children}
      {showArrow && <ArrowDown className={`${arrowColorClass}`} />}
    </button>
  );
}

export default Button;
