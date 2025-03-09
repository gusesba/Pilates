"use client";

import LoginForm from "./LoginForm";

export default function LoginFormCard() {
    return (
        <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-teal-500 text-center">
                Login
            </h2>
            <LoginForm />
        </div>
    );
}
