"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Import chart.js globally for chart support

export default function DashboardPage() {
  // Sample chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 5000, 2300, 3200, 4200],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Welcome to Your Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Total Inventory
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-700 dark:text-gray-300">
            3500 Items
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Monthly Sales
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-700 dark:text-gray-300">
            $50,000
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Expenses
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-700 dark:text-gray-300">
            $15,000
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Net Profit
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-700 dark:text-gray-300">
            $35,000
          </p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Sales Over Time
        </h2>
        <Line data={data} />
      </div>

      {/* Recent Activity Table */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Recent Activity
        </h2>
        <table className="min-w-full table-auto text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Action</th>
              <th className="px-6 py-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4">Oct 10, 2024</td>
              <td className="px-6 py-4">Product Added</td>
              <td className="px-6 py-4">Added 500 units of Product X</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4">Oct 8, 2024</td>
              <td className="px-6 py-4">Inventory Update</td>
              <td className="px-6 py-4">Adjusted stock for Product Y</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4">Oct 5, 2024</td>
              <td className="px-6 py-4">Expense Recorded</td>
              <td className="px-6 py-4">$5000 for Supplies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
