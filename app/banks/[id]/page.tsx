"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const mockAccounts = [
  {
    id: "acc_1",
    name: "Checking Account",
    category: "Checking",
    balance: 24500,
  },
  {
    id: "acc_2",
    name: "Savings Account",
    category: "Savings",
    balance: 98000,
  },
  {
    id: "acc_3",
    name: "Payroll Account",
    category: "Payroll",
    balance: 15750,
  },
];

export default function BankDetailPage() {

  const router = useRouter();
  useEffect(() => {
  const session =
    localStorage.getItem("session");

  if (!session) {
    router.push("/login");
  }
}, [router]);

  useEffect(() => {
  const session =
    localStorage.getItem("session");

  if (!session) {
    router.push("/login");
  }
}, [router]);


  function handleSelectAccount(accountId: string) {
    router.push(`/dashboard?account=${accountId}`);
  }
  return (
    <main className="min-h-screen bg-slate-950 p-6">

      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-2">
          Your Accounts
        </h1>

        <p className="text-slate-400 mb-8">
          Select an account
        </p>

        <div className="space-y-4">

          {mockAccounts.map((account) => (

            <div
              key={account.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
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
                  onClick={() => handleSelectAccount(account.id)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-xl"
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