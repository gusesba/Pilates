"use client";

export default function LoginForm() {
    return (
        <form className="mt-4 space-y-4">
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
            />
            <button className="text-teal-500 text-sm">
                Esqueci minha senha
            </button>
            <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
                Entrar
            </button>
        </form>
    );
}
