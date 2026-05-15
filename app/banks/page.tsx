"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const mockAccounts = [
  {
    id: 1,
    name: "Checking Account",
    category: "Checking",
    balance: 24500,
  },
  {
    id: 2,
    name: "Savings Account",
    category: "Savings",
    balance: 98000,
  },
  {
    id: 3,
    name: "Payroll Account",
    category: "Payroll",
    balance: 15750,
  },
];

export default function BankDetailPage() {

  const router = useRouter();

  // 🔒 ROUTE PROTECTION
  useEffect(() => {

    const session =
      localStorage.getItem("session");

    if (!session) {
      router.push("/login");
    }

  }, [router]);

  function handleSelectAccount(accountId: number) {

    // ✅ NUEVO ROUTING
    router.push(`/dashboard/${accountId}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-6">

      <div className="max-w-md mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-3xl font-bold text-white">
              Your Accounts
            </h1>

            <p className="text-slate-400">
              Select an account
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("session");
              router.push("/login");
            }}
            className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>

        </div>

        <div className="space-y-4">

          {mockAccounts.map((account) => (

            <div
              key={account.id}
              className="
                bg-slate-900
                border
                border-slate-800
                hover:border-cyan-500
                transition-all
                rounded-2xl
                p-5
              "
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-white font-semibold">
                    {account.name}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {account.category}
                  </p>

                </div>

                <button
                  onClick={() =>
                    handleSelectAccount(account.id)
                  }
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    hover:opacity-90
                    text-white
                    px-4
                    py-2
                    rounded-xl
                  "
                >
                  Open
                </button>

              </div>

              <p className="text-cyan-400 text-2xl font-bold mt-6">
                ${account.balance.toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}