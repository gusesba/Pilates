"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      required
      {...props}
    />
  );
}
