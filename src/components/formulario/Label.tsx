"use client";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode; // Texto ou conteúdo dinâmico
}

export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={`block  text-gray-600 ${className}`}
      {...props} // Permite passar outros atributos como for, id, etc.
    >
      {children}
    </label>
  );
}
