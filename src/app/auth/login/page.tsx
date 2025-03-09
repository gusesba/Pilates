export default function AuthPage() {
    return (
        <div className="h-screen w-screen" style={{ backgroundImage: "url(/assets/pilates-login.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 bg-opacity-50">
                <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Left Side */}
                    <div className="w-1/2 bg-teal-500 text-white flex flex-col items-center justify-center p-8">
                        <h2 className="text-2xl font-bold">Bem vindo de volta!</h2>
                        <p className="text-sm text-gray-200 mt-2">Para continuar, por favor, faça login com suas informações pessoais</p>
                        <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-teal-500 transition">
                            Registrar
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-teal-500 text-center">Login</h2>
                        <form className="mt-4 space-y-4">
                            <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
                            <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                            <button className= "text-teal-500 text-sm">Esqueci minha senha</button>
                            <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
