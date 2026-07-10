import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieChartComp({ data }) {
  const chartData = [
    { name: "Empty", value: Object.values(data).filter(s => s==="Empty").length },
    { name: "Occupied", value: Object.values(data).filter(s => s==="Occupied").length },
    { name: "Transition", value: Object.values(data).filter(s => s==="Transition").length },
  ];
  const COLORS = ["#caffbf","#ffadad","#ffd6a5"];

  return (
    <PieChart width={200} height={200}>
      <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
        {chartData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default PieChartComp;
