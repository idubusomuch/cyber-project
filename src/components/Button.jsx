function Button({ label, bgColor, borderColor, size }) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
  };

  return (
    <button
      className={`border rounded-lg ${bgColor} ${borderColor} ${sizeClasses[size]} text-white flex items-center gap-1`}
    >
      {label}
    </button>
  );
}

export default Button;
