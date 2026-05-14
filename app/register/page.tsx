"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: React.FormEvent) {

    e.preventDefault();

    // NORMALIZE EMAIL
    const normalizedEmail = email.trim().toLowerCase();

    // CREATE USER
    const user = {
      email: normalizedEmail,
      password: password.trim(),
    };

    // SAVE USER
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("User registered successfully");

    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-white mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 mb-8">
          Register a new user
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
              placeholder="you@example.com"
            />

          </div>

          <div>

            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
              placeholder="••••••••"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold"
          >
            Register
          </button>

        </form>

      </div>

    </main>
  );
}