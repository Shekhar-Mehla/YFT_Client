import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userdata } from "../context/ContextApi";
const IncomeGraph = () => {
  const { transactions } = userdata();
  const sortedArray = transactions.sort(
    (a, b) => new Date(a.TransactionDate) - new Date(b.TransactionDate)
  );

  const income = sortedArray.filter((t) => t.type == "income");

  // Transform the incoming data to the format needed for the chart
  const formattedData = income.map((item) => ({
    date: new Date(item.TransactionDate).toLocaleDateString(), // Format date
    incomes: item.amount, // Use the amount for savings
  }));

  const CustomizedTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p style={{ margin: 0 }}>{`Date: ${payload[0].payload.date}`}</p>
          <p style={{ margin: 0 }}>{`Incomes: $${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h3>Income Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        {formattedData.length > 0 ? (
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomizedTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="incomes"
              stroke="#8ca9d"
              strokeWidth={3}
              dot={{ stroke: "#8ca9d", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        ) : (
          <div className=" card d-flex justify-content-center align-items-center p-3 m-3">
            <strong>No income data available</strong>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeGraph;
