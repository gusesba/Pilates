"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Botao({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
