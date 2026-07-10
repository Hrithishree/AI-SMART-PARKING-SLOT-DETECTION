import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = { Empty: "#90EE90", Occupied: "#FF6B6B", Transition: "#FFD580" };

export default function OccupancyHeatmap({ data }) {
  // Aggregate counts per timestamp
  const grouped = {};
  data.forEach((row) => {
    if (!grouped[row.timestamp])
      grouped[row.timestamp] = { time: row.timestamp, Occupied: 0, Empty: 0, Transition: 0 };
    grouped[row.timestamp][row.status]++;
  });
  const chartData = Object.values(grouped);

  return (
    <div style={{ width: "100%", height: 300, margin: "20px 0" }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Occupied" stroke={COLORS.Occupied} />
          <Line type="monotone" dataKey="Empty" stroke={COLORS.Empty} />
          <Line type="monotone" dataKey="Transition" stroke={COLORS.Transition} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
