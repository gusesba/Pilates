"use client";

export default function RegisterCard() {
    return (
        <div className="w-1/2 bg-teal-500 text-white flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold">Bem vindo!</h2>
            <p className="text-sm text-gray-200 mt-2">
                Para continuar, por favor, registre-se com suas informações
                pessoais
            </p>
            <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-teal-500 transition">
                Registrar
            </button>
        </div>
    );
}
