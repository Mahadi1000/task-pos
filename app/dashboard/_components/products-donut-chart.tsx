"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "ABCDEF - 9000", value: 68.42 },
  { name: "ABCDEF - 1", value: 31.58 },
];

const COLORS = ["#16a34a", "#22c55e"];

export function ProductsDonutChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
