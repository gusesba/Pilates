"use client";

import RegisterForm from "./RegisterForm";

export default function RegisterFormCard() {
    return (
        <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-teal-500 text-center">
                Crie sua conta
            </h2>
            <RegisterForm />
        </div>
    );
}
