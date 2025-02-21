"use client";
import Formulario from "./Formulario";

export default function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Cadastro de Paciente
        </h2>
        <Formulario />
      </div>
    </div>
  );
}
