"use client";

import { useParams } from "next/navigation";
import { mockTransactions } from "@/lib/mock/transactions";

type Transaction = {
  id: number;
  description: string;
  amount: number;
};

export default function DashboardPage() {
  const params = useParams();
  const accountId = params.accountId as string;

  const transactions: Transaction[] =
    (mockTransactions as any)[accountId] || [];

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = income - expenses;

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-2">
          Account Dashboard
        </h1>

        <p className="text-slate-400 mb-6">
          Account ID: {accountId}
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

          <p className="text-slate-400">
            Net Balance
          </p>

          <p className="text-3xl font-bold text-cyan-400 mt-2">
            ${balance.toLocaleString()}
          </p>

          <div className="flex justify-between mt-4 text-sm">

            <p className="text-green-400">
              +${income.toLocaleString()} income
            </p>

            <p className="text-red-400">
              -${expenses.toLocaleString()} expenses
            </p>

          </div>

        </div>

        <div className="space-y-3">

          <h2 className="text-white font-semibold mb-2">
            Transactions
          </h2>

          {transactions.length === 0 ? (

            <p className="text-slate-500">
              No transactions found
            </p>

          ) : (

            transactions.map((t) => (

              <div
                key={t.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between"
              >

                <p className="text-white">
                  {t.description}
                </p>

                <p
                  className={
                    t.amount > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {t.amount > 0 ? "+" : ""}
                  {t.amount}
                </p>

              </div>

            ))

          )}

        </div>

      </div>
    </main>
  );
}