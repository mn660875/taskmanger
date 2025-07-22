"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 60 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 90 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1400 },
  { name: "JUL", users: 200 },
];

export default function Page() {
  return (
    <div className="flex min-h-screen">
        <Navbar/>
    
    <div className="bg-white rounded-2xl p-6 shadow-md w-full h-[420px]">
      <h2 className="text-xl font-semibold mb-4">User Growth (Monthly)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
