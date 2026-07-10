// Charts.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = { Empty: "#90EE90", Occupied: "#FF6B6B", Transition: "#FFD580" };

export default function Charts({ latestData, currentFrameSlots }) {
  // Prepare pie chart from currentFrameSlots
  const counts = { Empty: 0, Occupied: 0, Transition: 0 };
  Object.values(currentFrameSlots).forEach(s => counts[s] ? counts[s]++ : null);

  const pieData = [
    { name: "Empty", value: counts.Empty },
    { name: "Occupied", value: counts.Occupied },
    { name: "Transition", value: counts.Transition },
  ];

  return (
    <div style={{ width: 300, height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Slot Status Pie Chart</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
