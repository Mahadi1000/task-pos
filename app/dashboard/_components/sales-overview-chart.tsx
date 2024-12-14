"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", sales: 0, purchases: 0 },
  { month: "Feb", sales: 200000, purchases: 800000 },
  { month: "Mar", sales: 100000, purchases: 50000 },
  { month: "Apr", sales: 0, purchases: 0 },
  { month: "May", sales: 0, purchases: 0 },
  { month: "Jun", sales: 0, purchases: 400000 },
  { month: "Jul", sales: 0, purchases: 0 },
  { month: "Aug", sales: 0, purchases: 0 },
  { month: "Sep", sales: 0, purchases: 0 },
  { month: "Oct", sales: 0, purchases: 0 },
  { month: "Nov", sales: 0, purchases: 0 },
  { month: "Dec", sales: 0, purchases: 0 },
];

export function SalesOverviewChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Bar dataKey="sales" fill="#16a34a" radius={[4, 4, 0, 0]} />
          <Bar dataKey="purchases" fill="#eab308" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
