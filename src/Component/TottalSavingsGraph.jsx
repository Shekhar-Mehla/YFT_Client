import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { userdata } from "../context/ContextApi";
const TottalSavingsGraph = () => {
  const { transactions } = userdata();
  const sortedArray = transactions.sort(
    (a, b) => new Date(a.TransactionDate) - new Date(b.TransactionDate)
  );

  // Step 1: Calculate total balance over time
  const balanceData = sortedArray.reduce(
    (acc, { TransactionDate, amount, type }) => {
      const dateString = new Date(TransactionDate).toLocaleDateString(); // format date
      const currentBalance = acc[dateString] || 0;
      const newBalance =
        type === "income" ? currentBalance + amount : currentBalance - amount;

      acc[dateString] = newBalance;
      return acc;
    },
    {}
  );

  // Convert to array for Recharts
  const data = Object.entries(balanceData).map(([date, balance]) => ({
    date,
    balance,
  }));

  return (
    <div>
      <h3>Saving Trend</h3>
      <ResponsiveContainer width="100%" height={400}>
        {data.length > 0 ? (
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#8884d8"
              fillOpacity={0.3}
              fill="#8884d8"
            />
            <Legend></Legend>
          </AreaChart>
        ) : (
          <div className=" card d-flex justify-content-center align-items-center p-3 m-3">
            <strong>No saving data available</strong>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default TottalSavingsGraph;
