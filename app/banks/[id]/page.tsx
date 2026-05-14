"use client";

import { useEffect, useState } from "react";

export default function BankDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const [loading, setLoading] = useState(true);

  const [accounts, setAccounts] = useState<any[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadAccounts() {

      const { id } = await params;

      try {

        // STEP 1 — CREATE LINK
        const connectResponse = await fetch("/api/connect", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            institution: id,
          }),
        });

        const connectData = await connectResponse.json();

        console.log("LINK:", connectData);

        // VALIDATE LINK
        if (!connectData.id) {

          setError("Could not connect bank");

          return;
        }

        // STEP 2 — FETCH ACCOUNTS
        const accountsResponse = await fetch("/api/accounts", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            link: connectData.id,
          }),
        });

        const accountsData = await accountsResponse.json();

        console.log("ACCOUNTS:", accountsData);

        // HANDLE DIFFERENT BELVO RESPONSES
        if (Array.isArray(accountsData)) {

          setAccounts(accountsData);

        } else if (Array.isArray(accountsData.results)) {

          setAccounts(accountsData.results);

        } else {

          setAccounts([]);
        }

      } catch (error) {

        console.log(error);

        setError("Something went wrong");

      } finally {

        setLoading(false);
      }
    }

    loadAccounts();

  }, [params]);

  return (
    <main className="min-h-screen bg-slate-950 p-6">

      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-6">
          Bank Accounts
        </h1>

        {loading && (
          <p className="text-slate-400">
            Loading accounts...
          </p>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 mb-6">

            <p className="text-red-400">
              {error}
            </p>

          </div>
        )}

        {!loading && accounts.length === 0 && !error && (
          <p className="text-slate-400">
            No accounts found
          </p>
        )}

        <div className="space-y-4">

          {accounts.map((account, index) => (

            <div
              key={account.id || index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
            >

              <p className="text-white font-semibold">
                {account.name || "Unnamed Account"}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                {account.category || "No category"}
              </p>

              <p className="text-cyan-400 text-xl font-bold mt-4">

                ${account.balance?.current || 0}

              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}