"use client";

export default function RegisterForm() {
    return (
        <form className="mt-4 space-y-4">
            <input
                type="text"
                placeholder="Nome"
                className="w-full p-2 border rounded-md"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
            />
            <input
                type="password"
                placeholder="Senha"
                className="w-full p-2 border rounded-md"
            />
            <input
                type="password"
                placeholder="Confirme a senha"
                className="w-full p-2 border rounded-md"
            />
            <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
                Entrar
            </button>
        </form>
    );
}
