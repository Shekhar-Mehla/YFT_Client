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

const IncomeSourcePiechar = () => {
  const { transactions } = userdata();
  const incomeMap = {};

  transactions.forEach(({ Tittle, amount, type }) => {
    if (type === "income") {
      incomeMap[Tittle] = (incomeMap[Tittle] || 0) + Math.abs(amount);
    }
  });

  const incomeData = Object.entries(incomeMap).map(([Tittle, amount]) => ({
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
      <h3>Your Income Source</h3>
      <ResponsiveContainer width="100%" height={400}>
        {incomeData.length > 0 ? (
          <PieChart>
            <Pie
              data={incomeData}
              dataKey="value"
              nameKey="name"
              cx={120}
              cy={200}
              innerRadius={40}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {incomeData.map((entry, index) => {
                const hue = (index + 2 / incomeData.length) * 120;
                return (
                  <Cell key={`cell-${index}`} fill={`hsl(${hue}, 70%, 50%)`} />
                );
              })}
            </Pie>
            <Tooltip />
          </PieChart>
        ) : (
          <div className=" card d-flex justify-content-center align-items-center p-3 m-3">
            <strong>No income data available</strong>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeSourcePiechar;
