"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BanksPage() {
  const [banks, setBanks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchBanks() {
      try {
        const response = await fetch("/api/banks");
        const data = await response.json();

        console.log(data);

        setBanks(data.results || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBanks();
  }, []);

function handleSelectBank(institution: string) {
  router.push(`/banks/${institution}`);
}

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-2">
          Select your bank
        </h1>

        <p className="text-slate-400 mb-8">
          Connect an institution
        </p>

        {loading && (
          <p className="text-slate-400">
            Loading banks...
          </p>
        )}

        <div className="space-y-4">

          {banks.map((bank) => (
            <div
              key={bank.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-white font-semibold">
                    {bank.display_name}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {bank.country_code} • {bank.type}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectBank(bank.name)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-xl"
                >
                  Select
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}