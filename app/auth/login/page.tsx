import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">

      <div className="w-full max-w-sm bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">

        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Belvo Finance
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Banking Dashboard
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link href="/banks">
          <button className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-lg p-3 text-white font-semibold">
            Ingresar
          </button>
        </Link>

        <div className="text-center mt-6">
          <Link
            href="/auth/register"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Crear cuenta
          </Link>
        </div>

      </div>

    </main>
  );
}