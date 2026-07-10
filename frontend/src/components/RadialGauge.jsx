import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

function RadialGauge({ data }) {
  const total = Object.keys(data).length;
  const occupied = Object.values(data).filter(s => s==="Occupied").length;
  const percentage = Math.round((occupied / total) * 100);
  const chartData = [{ name: 'Utilization', value: percentage }];

  return (
    <RadialBarChart width={200} height={200} cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={20} data={chartData}>
      <RadialBar minAngle={15} background clockWise={true} dataKey="value" fill="#f44336" />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
    </RadialBarChart>
  );
}

export default RadialGauge;
