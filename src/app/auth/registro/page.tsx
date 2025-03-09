export default function AuthPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-1/2 bg-teal-500 text-white flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold">Bem vindo!</h2>
            <p className="text-sm text-gray-200 mt-2">Para continuar, por favor, registre-se com suas informações pessoais</p>
            <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-teal-500 transition">
              Registrar
            </button>
          </div>
          
          {/* Right Side */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-teal-500 text-center">Crie sua conta</h2>
            <form className="mt-4 space-y-4">
              <input type="text" placeholder="Nome" className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
              <input type="password" placeholder="Senha" className="w-full p-2 border rounded-md" />
              <input type="password" placeholder="Confirme a senha" className="w-full p-2 border rounded-md" />
              <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }