import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userdata } from "../context/ContextApi";

const ExpenseSourcePieChart = () => {
  const { transactions } = userdata();
  const expenseMap = {};

  transactions.forEach(({ Tittle, amount, type }) => {
    if (type === "expense") {
      expenseMap[Tittle] = (expenseMap[Tittle] || 0) + Math.abs(amount);
    }
  });

  const expenseData = Object.entries(expenseMap).map(([Tittle, amount]) => ({
    name: Tittle,
    value: amount,
  }));
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <h3>Expense Sources</h3>
      <ResponsiveContainer width="100%" height={400}>
        {expenseData.length > 0 ? (
          <PieChart>
            <Pie
              data={expenseData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              innerRadius={60}
              fill="#ff6347"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {expenseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(${(index / expenseData.length) * 360}, 70%, 50%)`}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <div className=" card d-flex justify-content-center align-items-center p-3 m-3">
            <strong>No expense data available</strong>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseSourcePieChart;
