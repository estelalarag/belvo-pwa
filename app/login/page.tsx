"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    setError("");

    // GET SAVED USER
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {

      setError("No registered user found");

      return;
    }

    // PARSE USER
    const user = JSON.parse(savedUser);

    // NORMALIZE INPUTS
    const normalizedEmail =
      email.trim().toLowerCase();

    const normalizedPassword =
      password.trim();

    // VALIDATE
    if (
      normalizedEmail === user.email &&
      normalizedPassword === user.password
    ) {

      // CREATE MOCK SESSION
      localStorage.setItem(
        "session",
        "active"
      );

      router.push("/banks");

    } else {

      setError("Invalid email or password");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">
        
        </div>
        <Image
        src="/icon-192.png"
        alt="Logo"
        width={90}
        height={90}
        className="rounded-2xl"
        />

        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 mb-8">
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
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

          {error && (

            <div className="bg-red-500/10 border border-red-500 rounded-xl p-3">

              <p className="text-red-400 text-sm">
                {error}
              </p>

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <button
          onClick={() => router.push("/register")}
          className="w-full mt-4 text-slate-400 hover:text-white"
        >
          Create account
        </button>

      </div>

    </main>
  );
}