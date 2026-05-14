const transactions = [
  {
    id: 1,
    type: "income",
    amount: 12000,
    description: "Payroll",
  },
  {
    id: 2,
    type: "expense",
    amount: 2500,
    description: "Amazon Purchase",
  },
  {
    id: 3,
    type: "expense",
    amount: 850,
    description: "Netflix",
  },
  {
    id: 4,
    type: "income",
    amount: 3500,
    description: "Freelance Payment",
  },
];

export default function DashboardPage() {

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <main className="min-h-screen bg-slate-950 p-6">

      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-white mb-8">
          Financial Dashboard
        </h1>

        {/* KPI */}
        <div className="bg-cyan-600 rounded-3xl p-6 mb-8">

          <p className="text-cyan-100 text-sm mb-2">
            Current Balance
          </p>

          <p className="text-white text-4xl font-bold">
            ${balance.toLocaleString()}
          </p>

        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="bg-slate-900 rounded-2xl p-4">

            <p className="text-slate-400 text-sm">
              Income
            </p>

            <p className="text-green-400 text-2xl font-bold mt-2">
              ${income.toLocaleString()}
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-4">

            <p className="text-slate-400 text-sm">
              Expenses
            </p>

            <p className="text-red-400 text-2xl font-bold mt-2">
              ${expenses.toLocaleString()}
            </p>

          </div>

        </div>

        {/* Transactions */}
        <div>

          <h2 className="text-white text-xl font-semibold mb-4">
            Transactions
          </h2>

          <div className="space-y-4">

            {transactions.map((transaction) => (

              <div
                key={transaction.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex justify-between items-center"
              >

                <div>

                  <p className="text-white font-medium">
                    {transaction.description}
                  </p>

                  <p className="text-slate-400 text-sm capitalize">
                    {transaction.type}
                  </p>

                </div>

                <p
                  className={`font-bold text-lg ${
                    transaction.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount.toLocaleString()}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}