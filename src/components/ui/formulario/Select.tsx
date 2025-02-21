"use client";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export default function Select({
  className,
  value,
  onChange,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props} // Permite passar outros atributos como required, disabled, etc.
    >
      {children}
    </select>
  );
}
