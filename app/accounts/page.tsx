import Link from "next/link";

const accounts = [
  {
    id: 1,
    name: "Savings Account",
    type: "Debit",
    balance: "$24,500 MXN",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    id: 2,
    name: "Payroll Account",
    type: "Checking",
    balance: "$12,800 MXN",
    color: "from-sky-600 to-sky-400",
  },
  {
    id: 3,
    name: "Platinum Card",
    type: "Credit",
    balance: "$58,300 MXN",
    color: "from-violet-600 to-violet-400",
  },
];

export default function AccountsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6">

      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-2">
          Accounts
        </h1>

        <p className="text-slate-400 mb-8">
          Select an account
        </p>

        <div className="space-y-4">

          {accounts.map((account) => (
            <Link
              key={account.id}
              href="/dashboard"
            >
              <div
                className={`bg-gradient-to-r ${account.color} rounded-2xl p-6 shadow-lg cursor-pointer hover:scale-[1.02] transition`}
              >

                <div className="flex justify-between items-center">

                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {account.name}
                    </h2>

                    <p className="text-white/80 mt-1">
                      {account.type}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-white text-lg font-bold">
                      {account.balance}
                    </p>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}